#!/usr/bin/env python3
"""Weekly Google Search Console audit for tinypdftools.com.

Pulls:
  - Performance (last 7d vs prior 7d)
  - Coverage / indexing via URL inspection
  - Sitemap status
  - Core Web Vitals via PageSpeed Insights
  - Manual actions / security (note only)

Writes a Markdown report to reports/gsc-audit-YYYY-MM-DD.md in the project root.
"""

from __future__ import annotations

import datetime as dt
import json
import os
import sys
import time
import traceback
from pathlib import Path
from typing import Any
from urllib import request as urlreq
from urllib import parse as urlparse
from urllib.error import HTTPError, URLError

from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError


ROOT = Path(os.environ.get("GSC_PROJECT_ROOT") or Path(__file__).resolve().parents[1])
CRED_PATH = ROOT / ".gsc-service-account.json"
PSI_KEY_PATH = ROOT / ".psi-api-key"
SITE_URL_PREFIX = "https://tinypdftools.com/"
SITE_URL_DOMAIN = "sc-domain:tinypdftools.com"
SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]

# Tool routes always inspected, regardless of whether they show up in the
# top-pages performance feed. These are the highest-value SEO surfaces — the
# product itself — so we want per-page coverage state and (for the busiest
# subset) Core Web Vitals data on every run, even before they accrue clicks.
TOOL_ROUTES = [
    "https://tinypdftools.com/merge-pdf",
    "https://tinypdftools.com/split-pdf",
    "https://tinypdftools.com/compress-pdf",
    "https://tinypdftools.com/pdf-to-image",
    "https://tinypdftools.com/image-to-pdf",
    "https://tinypdftools.com/rotate-pdf",
    "https://tinypdftools.com/protect-pdf",
    "https://tinypdftools.com/unlock-pdf",
    "https://tinypdftools.com/watermark-pdf",
    "https://tinypdftools.com/organize-pdf",
    "https://tinypdftools.com/add-page-numbers",
    "https://tinypdftools.com/crop-pdf",
    "https://tinypdftools.com/delete-pdf-pages",
    "https://tinypdftools.com/flatten-pdf",
    "https://tinypdftools.com/sign-pdf",
    "https://tinypdftools.com/extract-pdf-pages",
    "https://tinypdftools.com/pdf-reader",
]
# Subset of tool routes that get a PSI run each audit. PSI is slow (~20s per
# URL) and rate-limited more aggressively than URL Inspection, so we keep the
# CWV pool small and focused on the heaviest client-side pipelines (PDF parse,
# canvas raster, image encode) where INP/LCP regressions are most likely.
CWV_TOOL_ROUTES = [
    "https://tinypdftools.com/compress-pdf",
    "https://tinypdftools.com/pdf-to-image",
    "https://tinypdftools.com/image-to-pdf",
    "https://tinypdftools.com/merge-pdf",
]


def _load_psi_key() -> str | None:
    # Prefer env var, fall back to the file at the project root.
    env = os.environ.get("PSI_API_KEY")
    if env:
        return env.strip()
    try:
        if PSI_KEY_PATH.exists():
            text = PSI_KEY_PATH.read_text(encoding="utf-8").strip()
            return text or None
    except OSError:
        pass
    return None


PSI_API_KEY = _load_psi_key()

TODAY = dt.date.today()
# GSC data is typically ~2 days delayed. Use an offset so we don't query empty recent days.
GSC_LAG_DAYS = 3
REF_END = TODAY - dt.timedelta(days=GSC_LAG_DAYS)
# Last 7 days window
CUR_END = REF_END
CUR_START = CUR_END - dt.timedelta(days=6)
PREV_END = CUR_START - dt.timedelta(days=1)
PREV_START = PREV_END - dt.timedelta(days=6)

REPORT_DATE = TODAY.isoformat()
REPORT_DIR = ROOT / "reports"
REPORT_DIR.mkdir(parents=True, exist_ok=True)
REPORT_PATH = REPORT_DIR / f"gsc-audit-{REPORT_DATE}.md"


def log(msg: str) -> None:
    print(f"[gsc-audit] {msg}", flush=True)


def pct_delta(cur: float, prev: float) -> str:
    if prev == 0 or prev is None:
        return "n/a" if (cur in (0, None)) else "+∞"
    delta = (cur - prev) / prev * 100.0
    sign = "+" if delta >= 0 else ""
    return f"{sign}{delta:.1f}%"


def abs_delta(cur: float, prev: float, fmt: str = "{:+.0f}") -> str:
    if cur is None or prev is None:
        return "n/a"
    return fmt.format(cur - prev)


def _is_indexed_state(cov_lower: str) -> bool:
    """True iff a GSC coverageState string indicates the URL IS indexed.

    GSC returns several strings that contain the substring "indexed" while
    explicitly NOT being indexed — e.g. "Discovered - currently not indexed",
    "Crawled - currently not indexed", "Excluded by 'noindex' tag". A naive
    `"indexed" in cov` check counts those as healthy. The healthy states are
    things like "Submitted and indexed" or "Indexed, not submitted in
    sitemap". The simplest correct rule: contains "indexed" AND does not
    contain "not indexed" / "noindex".
    """
    if not cov_lower:
        return False
    if "not indexed" in cov_lower or "noindex" in cov_lower:
        return False
    return "indexed" in cov_lower


def build_sc_service():
    creds = service_account.Credentials.from_service_account_file(str(CRED_PATH), scopes=SCOPES)
    return build("searchconsole", "v1", credentials=creds, cache_discovery=False)


def query_search_analytics(service, site_url: str, start: dt.date, end: dt.date, dimensions: list[str], row_limit: int = 25000) -> list[dict[str, Any]]:
    body = {
        "startDate": start.isoformat(),
        "endDate": end.isoformat(),
        "dimensions": dimensions,
        "rowLimit": row_limit,
        "dataState": "final",
    }
    resp = service.searchanalytics().query(siteUrl=site_url, body=body).execute()
    return resp.get("rows", [])


def pick_site_url(service) -> str:
    """Try URL-prefix first; fall back to sc-domain property if URL-prefix is empty or fails."""
    for candidate in (SITE_URL_PREFIX, SITE_URL_DOMAIN):
        try:
            log(f"testing site URL: {candidate}")
            rows = query_search_analytics(
                service, candidate,
                CUR_START, CUR_END,
                dimensions=[],
                row_limit=1,
            )
            log(f"  got {len(rows)} row(s) for {candidate}")
            if rows:
                return candidate
        except HttpError as e:
            log(f"  error on {candidate}: {e}")
            continue
    # If both returned 0 rows (no data) still prefer the URL-prefix form
    return SITE_URL_PREFIX


def fmt_table(headers: list[str], rows: list[list[str]]) -> str:
    if not rows:
        return "_No rows returned._"
    lines = []
    lines.append("| " + " | ".join(headers) + " |")
    lines.append("| " + " | ".join("---" for _ in headers) + " |")
    for r in rows:
        lines.append("| " + " | ".join(str(c) for c in r) + " |")
    return "\n".join(lines)


def section_performance(service, site_url: str) -> tuple[str, dict[str, Any]]:
    out = []
    data = {}
    out.append("## Performance (last 7 days vs prior 7 days)")
    out.append("")
    out.append(f"- Current window: {CUR_START.isoformat()} → {CUR_END.isoformat()}")
    out.append(f"- Previous window: {PREV_START.isoformat()} → {PREV_END.isoformat()}")
    out.append("")

    # Totals
    try:
        cur_rows = query_search_analytics(service, site_url, CUR_START, CUR_END, dimensions=[])
        prev_rows = query_search_analytics(service, site_url, PREV_START, PREV_END, dimensions=[])
        cur = cur_rows[0] if cur_rows else {"clicks": 0, "impressions": 0, "ctr": 0, "position": 0}
        prev = prev_rows[0] if prev_rows else {"clicks": 0, "impressions": 0, "ctr": 0, "position": 0}
        data["totals"] = {"current": cur, "previous": prev}
        out.append("### Totals")
        out.append("")
        out.append(fmt_table(
            ["Metric", "Current", "Previous", "Δ abs", "Δ %"],
            [
                ["Clicks", f"{cur['clicks']:,.0f}", f"{prev['clicks']:,.0f}", abs_delta(cur['clicks'], prev['clicks']), pct_delta(cur['clicks'], prev['clicks'])],
                ["Impressions", f"{cur['impressions']:,.0f}", f"{prev['impressions']:,.0f}", abs_delta(cur['impressions'], prev['impressions']), pct_delta(cur['impressions'], prev['impressions'])],
                ["CTR", f"{cur['ctr']*100:.2f}%", f"{prev['ctr']*100:.2f}%", abs_delta(cur['ctr']*100, prev['ctr']*100, "{:+.2f}pp"), pct_delta(cur['ctr'], prev['ctr'])],
                ["Avg position", f"{cur['position']:.2f}", f"{prev['position']:.2f}", abs_delta(cur['position'], prev['position'], "{:+.2f}"), pct_delta(cur['position'], prev['position'])],
            ],
        ))
        out.append("")
    except HttpError as e:
        msg = f"_Error fetching totals: {e}_"
        log(f"totals error: {e}")
        out.append(msg)
        out.append("")
        data["totals_error"] = str(e)

    # Top queries
    try:
        cur_rows = query_search_analytics(service, site_url, CUR_START, CUR_END, dimensions=["query"], row_limit=500)
        prev_rows = query_search_analytics(service, site_url, PREV_START, PREV_END, dimensions=["query"], row_limit=500)
        prev_map = {r["keys"][0]: r for r in prev_rows}
        cur_rows.sort(key=lambda r: r["clicks"], reverse=True)
        top = cur_rows[:20]
        rows = []
        for r in top:
            q = r["keys"][0]
            p = prev_map.get(q, {"clicks": 0, "impressions": 0, "ctr": 0, "position": 0})
            rows.append([
                (q[:60] + "…") if len(q) > 60 else q,
                f"{r['clicks']:,.0f}",
                pct_delta(r['clicks'], p['clicks']),
                f"{r['impressions']:,.0f}",
                f"{r['ctr']*100:.1f}%",
                f"{r['position']:.1f}",
            ])
        data["top_queries"] = top
        out.append("### Top 20 queries by clicks")
        out.append("")
        out.append(fmt_table(["Query", "Clicks", "Δ Clicks %", "Impr.", "CTR", "Pos."], rows))
        out.append("")
    except HttpError as e:
        log(f"top queries error: {e}")
        out.append(f"_Error fetching top queries: {e}_")
        out.append("")

    # Top pages
    try:
        cur_rows = query_search_analytics(service, site_url, CUR_START, CUR_END, dimensions=["page"], row_limit=500)
        prev_rows = query_search_analytics(service, site_url, PREV_START, PREV_END, dimensions=["page"], row_limit=500)
        prev_map = {r["keys"][0]: r for r in prev_rows}
        cur_rows.sort(key=lambda r: r["clicks"], reverse=True)
        top = cur_rows[:20]
        rows = []
        for r in top:
            p_url = r["keys"][0]
            p = prev_map.get(p_url, {"clicks": 0, "impressions": 0, "ctr": 0, "position": 0})
            short = p_url.replace("https://tinypdftools.com", "") or "/"
            rows.append([
                (short[:80] + "…") if len(short) > 80 else short,
                f"{r['clicks']:,.0f}",
                pct_delta(r['clicks'], p['clicks']),
                f"{r['impressions']:,.0f}",
                f"{r['ctr']*100:.1f}%",
                f"{r['position']:.1f}",
            ])
        data["top_pages"] = top
        out.append("### Top 20 pages by clicks")
        out.append("")
        out.append(fmt_table(["Page", "Clicks", "Δ Clicks %", "Impr.", "CTR", "Pos."], rows))
        out.append("")
    except HttpError as e:
        log(f"top pages error: {e}")
        out.append(f"_Error fetching top pages: {e}_")
        out.append("")

    # Devices
    try:
        cur_rows = query_search_analytics(service, site_url, CUR_START, CUR_END, dimensions=["device"])
        prev_rows = query_search_analytics(service, site_url, PREV_START, PREV_END, dimensions=["device"])
        prev_map = {r["keys"][0]: r for r in prev_rows}
        rows = []
        for r in cur_rows:
            k = r["keys"][0]
            p = prev_map.get(k, {"clicks": 0, "impressions": 0, "ctr": 0, "position": 0})
            rows.append([
                k,
                f"{r['clicks']:,.0f}",
                pct_delta(r['clicks'], p['clicks']),
                f"{r['impressions']:,.0f}",
                f"{r['ctr']*100:.1f}%",
                f"{r['position']:.1f}",
            ])
        out.append("### Devices")
        out.append("")
        out.append(fmt_table(["Device", "Clicks", "Δ Clicks %", "Impr.", "CTR", "Pos."], rows))
        out.append("")
    except HttpError as e:
        log(f"devices error: {e}")
        out.append(f"_Error fetching device breakdown: {e}_")
        out.append("")

    # Countries
    try:
        cur_rows = query_search_analytics(service, site_url, CUR_START, CUR_END, dimensions=["country"], row_limit=50)
        prev_rows = query_search_analytics(service, site_url, PREV_START, PREV_END, dimensions=["country"], row_limit=50)
        prev_map = {r["keys"][0]: r for r in prev_rows}
        cur_rows.sort(key=lambda r: r["clicks"], reverse=True)
        rows = []
        for r in cur_rows[:10]:
            k = r["keys"][0]
            p = prev_map.get(k, {"clicks": 0, "impressions": 0, "ctr": 0, "position": 0})
            rows.append([
                k.upper(),
                f"{r['clicks']:,.0f}",
                pct_delta(r['clicks'], p['clicks']),
                f"{r['impressions']:,.0f}",
                f"{r['ctr']*100:.1f}%",
                f"{r['position']:.1f}",
            ])
        out.append("### Countries (top 10)")
        out.append("")
        out.append(fmt_table(["Country", "Clicks", "Δ Clicks %", "Impr.", "CTR", "Pos."], rows))
        out.append("")
    except HttpError as e:
        log(f"countries error: {e}")
        out.append(f"_Error fetching country breakdown: {e}_")
        out.append("")

    return "\n".join(out), data


def section_coverage(service, site_url: str, top_pages: list[dict[str, Any]]) -> tuple[str, dict[str, Any]]:
    out = []
    data = {}
    out.append("## Coverage / indexing")
    out.append("")

    # Build sample of URLs: homepage + all tool routes + top 10 pages by clicks.
    # Tool routes are always included so that during cold-start (when top_pages
    # is near-empty) we still get per-page coverage state for the product
    # surfaces that matter most. URL Inspection is rate-limited but the existing
    # per-call backoff keeps us well under the daily quota.
    urls: list[str] = [SITE_URL_PREFIX]
    for u in TOOL_ROUTES:
        if u and u not in urls:
            urls.append(u)
    for r in top_pages[:10]:
        u = r.get("keys", [None])[0]
        if u and u not in urls:
            urls.append(u)
    data["inspected_urls"] = urls

    out.append("### URL inspection")
    out.append("")
    rows = []
    for u in urls:
        entry = {"url": u}
        try:
            body = {
                "inspectionUrl": u,
                "siteUrl": site_url,
            }
            resp = service.urlInspection().index().inspect(body=body).execute()
            idx = resp.get("inspectionResult", {}).get("indexStatusResult", {}) or {}
            entry.update({
                "verdict": idx.get("verdict", "—"),
                "coverageState": idx.get("coverageState", "—"),
                "indexingState": idx.get("indexingState", "—"),
                "lastCrawlTime": idx.get("lastCrawlTime", "—"),
                "pageFetchState": idx.get("pageFetchState", "—"),
                "robotsTxtState": idx.get("robotsTxtState", "—"),
                "sitemap": ", ".join(idx.get("sitemap", [])) or "—",
            })
            rows.append([
                (u[:70] + "…") if len(u) > 70 else u,
                entry["verdict"],
                entry["coverageState"],
                entry["indexingState"],
                entry["pageFetchState"],
                entry["robotsTxtState"],
                entry["lastCrawlTime"][:10] if entry["lastCrawlTime"] != "—" else "—",
            ])
        except HttpError as e:
            log(f"urlInspection error for {u}: {e}")
            err = str(e).split("\n", 1)[0][:80]
            rows.append([u, "ERR", err, "—", "—", "—", "—"])
            entry["error"] = err
        data.setdefault("inspection_results", []).append(entry)
        time.sleep(0.3)  # small backoff; GSC urlInspection has rate limits

    out.append(fmt_table(["URL", "Verdict", "Coverage", "Indexing", "Fetch", "robots.txt", "Last crawl"], rows))
    out.append("")

    # Sitemaps
    out.append("### Sitemaps")
    out.append("")
    try:
        resp = service.sitemaps().list(siteUrl=site_url).execute()
        sms = resp.get("sitemap", [])
        if not sms:
            out.append("_No sitemaps registered._")
        else:
            def _as_int(v):
                try:
                    return int(v) if v not in (None, "") else 0
                except (TypeError, ValueError):
                    return 0
            rows = []
            for sm in sms:
                errs = _as_int(sm.get("errors", 0))
                warns = _as_int(sm.get("warnings", 0))
                submitted = sum(_as_int(c.get("submitted", 0)) for c in sm.get("contents", []))
                indexed = sum(_as_int(c.get("indexed", 0)) for c in sm.get("contents", []))
                rows.append([
                    sm.get("path", "—"),
                    sm.get("type", "—"),
                    sm.get("lastSubmitted", "—")[:10] if sm.get("lastSubmitted") else "—",
                    sm.get("lastDownloaded", "—")[:10] if sm.get("lastDownloaded") else "—",
                    str(errs),
                    str(warns),
                    f"{indexed}/{submitted}" if submitted else "—",
                    "✅" if not errs else "⚠️",
                ])
            out.append(fmt_table(["Path", "Type", "Submitted", "Downloaded", "Errors", "Warnings", "Indexed/Submitted", "Status"], rows))
            data["sitemaps"] = sms
        out.append("")
    except HttpError as e:
        log(f"sitemaps error: {e}")
        out.append(f"_Error listing sitemaps: {e}_")
        out.append("")

    return "\n".join(out), data


def run_psi(url: str) -> dict[str, Any]:
    """Call PageSpeed Insights API (mobile, performance).

    Uses PSI_API_KEY if available (from env var PSI_API_KEY or the .psi-api-key file
    at the project root) so we don't hit the anonymous per-IP quota.
    """
    params = {
        "url": url,
        "strategy": "mobile",
        "category": "performance",
    }
    if PSI_API_KEY:
        params["key"] = PSI_API_KEY
    qs = urlparse.urlencode(params)
    api = f"https://www.googleapis.com/pagespeedonline/v5/runPagespeed?{qs}"
    req = urlreq.Request(api, headers={"User-Agent": "tinypdftools-gsc-audit/1.0"})
    try:
        with urlreq.urlopen(req, timeout=90) as r:
            body = r.read()
            return json.loads(body)
    except HTTPError as e:
        return {"_error": f"HTTP {e.code}: {e.reason}"}
    except URLError as e:
        return {"_error": f"URL error: {e.reason}"}
    except Exception as e:
        return {"_error": f"{type(e).__name__}: {e}"}


def section_cwv(top_pages: list[dict[str, Any]]) -> tuple[str, dict[str, Any]]:
    out = []
    data: dict[str, Any] = {"results": []}
    out.append("## Core Web Vitals & mobile usability (PageSpeed Insights — mobile)")
    out.append("")
    out.append("Source: PageSpeed Insights API v5 (CrUX field data when available, Lighthouse lab otherwise).")
    out.append("")

    # Homepage + heavy-client-side tool routes + any top_pages that already
    # have traffic. Capped to keep total runtime reasonable (PSI is ~20s/URL).
    urls = [SITE_URL_PREFIX]
    for u in CWV_TOOL_ROUTES:
        if u and u not in urls:
            urls.append(u)
    for r in top_pages[:5]:
        u = r.get("keys", [None])[0]
        if u and u not in urls:
            urls.append(u)
    urls = urls[:10]  # hard cap — avoid blowing the 8-min audit budget

    rows = []
    failures = []
    for u in urls:
        log(f"PSI: {u}")
        res = run_psi(u)
        if "_error" in res:
            rows.append([u, "—", "—", "—", "—", f"error: {res['_error'][:40]}"])
            data["results"].append({"url": u, "error": res["_error"]})
            continue

        loading = res.get("loadingExperience") or {}
        lh = res.get("lighthouseResult") or {}
        perf_cat = (lh.get("categories") or {}).get("performance") or {}
        perf_score = perf_cat.get("score")
        perf_score_str = f"{perf_score*100:.0f}" if isinstance(perf_score, (int, float)) else "—"

        # Field-data (CrUX) metrics
        metrics = loading.get("metrics") or {}
        def field(name: str) -> tuple[str, float | None]:
            m = metrics.get(name) or {}
            v = m.get("percentile")
            cat = m.get("category", "—")
            return cat, v

        lcp_cat, lcp_v = field("LARGEST_CONTENTFUL_PAINT_MS")
        cls_cat, cls_v = field("CUMULATIVE_LAYOUT_SHIFT_SCORE")
        inp_cat, inp_v = field("INTERACTION_TO_NEXT_PAINT")
        fid_cat, fid_v = field("FIRST_INPUT_DELAY_MS")

        def fmt_ms(v): return f"{v/1000:.2f}s" if v is not None else "—"
        def fmt_cls(v): return f"{v/100:.3f}" if v is not None else "—"
        def fmt_inp(v): return f"{v:.0f}ms" if v is not None else "—"

        lcp_display = f"{fmt_ms(lcp_v)} ({lcp_cat})" if lcp_v is not None else "— (no field data)"
        cls_display = f"{fmt_cls(cls_v)} ({cls_cat})" if cls_v is not None else "— (no field data)"
        if inp_v is not None:
            inp_display = f"INP {fmt_inp(inp_v)} ({inp_cat})"
        elif fid_v is not None:
            inp_display = f"FID {fmt_inp(fid_v)} ({fid_cat})"
        else:
            inp_display = "— (no field data)"

        rows.append([
            (u[:60] + "…") if len(u) > 60 else u,
            lcp_display,
            cls_display,
            inp_display,
            perf_score_str,
            loading.get("overall_category", "—"),
        ])
        data["results"].append({
            "url": u,
            "lcp_ms": lcp_v, "lcp_cat": lcp_cat,
            "cls_x100": cls_v, "cls_cat": cls_cat,
            "inp_ms": inp_v, "inp_cat": inp_cat,
            "fid_ms": fid_v, "fid_cat": fid_cat,
            "lighthouse_score": perf_score,
            "overall": loading.get("overall_category"),
        })

        # Check failures against thresholds
        if lcp_v is not None and lcp_v > 2500:
            failures.append(f"- **LCP**: {u} — {fmt_ms(lcp_v)} (threshold 2.5s)")
        if cls_v is not None and (cls_v / 100.0) > 0.1:
            failures.append(f"- **CLS**: {u} — {fmt_cls(cls_v)} (threshold 0.1)")
        if inp_v is not None and inp_v > 200:
            failures.append(f"- **INP**: {u} — {fmt_inp(inp_v)} (threshold 200ms)")

    out.append(fmt_table(["URL", "LCP", "CLS", "INP / FID", "Lighthouse (mobile)", "CrUX overall"], rows))
    out.append("")
    out.append("### URLs failing Core Web Vitals thresholds")
    out.append("")
    if failures:
        out.extend(failures)
    else:
        out.append("_None detected in the sample above (or insufficient CrUX field data)._")
    out.append("")
    data["failures"] = failures
    return "\n".join(out), data


def section_manual_actions() -> str:
    out = []
    out.append("## Manual actions & security")
    out.append("")
    out.append("No manual actions detected via API (endpoint not exposed in Search Console API v1). ")
    out.append("Verify manually in the Manual Actions and Security Issues panels at ")
    out.append("<https://search.google.com/search-console/manual-actions> and ")
    out.append("<https://search.google.com/search-console/security-issues>.")
    out.append("")
    out.append("_(The Chrome MCP could optionally be used to read these panels if the user is signed in; not attempted in this unattended run.)_")
    out.append("")
    return "\n".join(out)


def section_recommendations(perf: dict, coverage: dict, cwv: dict) -> str:
    out = []
    out.append("## Recommended next actions")
    out.append("")
    quick = []
    strategic = []

    totals = perf.get("totals") or {}
    cur = totals.get("current") or {}
    prev = totals.get("previous") or {}
    if cur and prev:
        if cur.get("clicks", 0) < prev.get("clicks", 0) * 0.8:
            quick.append("Clicks dropped >20% WoW — inspect top regressing queries/pages and recent deploys for SEO-impacting changes.")
        if cur.get("position", 0) > prev.get("position", 0) + 2:
            quick.append("Avg position worsened by >2 positions WoW — check for recent Google algorithm updates and competitor movement.")

    # Sitemap issues
    def _rec_int(v):
        try: return int(v) if v not in (None, "") else 0
        except (TypeError, ValueError): return 0
    for sm in coverage.get("sitemaps", []) or []:
        errs = _rec_int(sm.get("errors", 0))
        warns = _rec_int(sm.get("warnings", 0))
        submitted = sum(_rec_int(c.get("submitted", 0)) for c in sm.get("contents", []))
        indexed = sum(_rec_int(c.get("indexed", 0)) for c in sm.get("contents", []))
        if errs:
            quick.append(f"Sitemap `{sm.get('path')}` has {errs} errors — fix invalid URLs or drop stale entries.")
        if submitted and indexed == 0:
            quick.append(f"Sitemap `{sm.get('path')}` has {submitted} submitted URLs but 0 indexed so far — check coverage report for blockers (noindex, redirects, thin content).")

    # Indexing issues. Google returns a handful of coverageState strings that
    # all literally contain the word "indexed" — including "Discovered -
    # currently not indexed" and "Crawled - currently not indexed" — so a naive
    # substring match would skip exactly the URLs we want to flag. Treat only
    # "Submitted and indexed" (and variants with "is indexed") as healthy.
    for ent in coverage.get("inspection_results", []) or []:
        cov = (ent.get("coverageState") or "").lower()
        if not cov:
            continue
        if _is_indexed_state(cov):
            continue
        quick.append(f"URL not indexed: `{ent.get('url')}` — coverage state: {ent.get('coverageState')}. Request indexing after fix.")

    # CWV
    for f in cwv.get("failures", []) or []:
        # reuse the pre-formatted bullet line (strip leading dash)
        quick.append(f.lstrip("- "))

    # Default strategic recs
    strategic.append("Expand content on the top 5 pages that rank in positions 5–15 — position gains there yield the highest click lift.")
    strategic.append("Review and improve internal linking to pages with high impressions but low CTR (< 2%) — tighten titles and meta descriptions.")
    strategic.append("Monitor INP on tool pages (Merge, Split, Compress) — interaction metrics on PDF tools are particularly sensitive to bundle size.")

    if not quick:
        quick.append("No blocking issues surfaced — keep publishing content and monitor CWV/indexing trends.")

    out.append("### Quick wins")
    out.append("")
    for q in quick:
        out.append(f"- {q}")
    out.append("")
    out.append("### Strategic")
    out.append("")
    for s in strategic:
        out.append(f"- {s}")
    out.append("")
    return "\n".join(out)


def build_executive_summary(perf: dict, coverage: dict, cwv: dict) -> str:
    bullets = []
    totals = perf.get("totals") or {}
    cur = totals.get("current") or {}
    prev = totals.get("previous") or {}

    if cur and prev:
        bullets.append(f"Clicks {cur.get('clicks',0):,.0f} ({pct_delta(cur.get('clicks',0), prev.get('clicks',0))} WoW); impressions {cur.get('impressions',0):,.0f} ({pct_delta(cur.get('impressions',0), prev.get('impressions',0))} WoW).")
        bullets.append(f"Avg position {cur.get('position',0):.2f} ({abs_delta(cur.get('position',0), prev.get('position',0), '{:+.2f}')} WoW); CTR {cur.get('ctr',0)*100:.2f}% ({abs_delta(cur.get('ctr',0)*100, prev.get('ctr',0)*100, '{:+.2f}pp')}).")

    # Index health. Use the shared classifier — "Discovered - currently not
    # indexed" and similar coverageStates contain the word "indexed" but are
    # explicitly NOT indexed.
    insp = coverage.get("inspection_results", []) or []
    indexed = sum(1 for e in insp if _is_indexed_state((e.get("coverageState") or "").lower()))
    bullets.append(f"Index health: {indexed}/{len(insp)} inspected URLs are indexed.")

    # Sitemap errors
    def _sm_int(v):
        try: return int(v) if v not in (None, "") else 0
        except (TypeError, ValueError): return 0
    sm_errs = sum(_sm_int(sm.get("errors", 0)) for sm in coverage.get("sitemaps", []) or [])
    bullets.append(f"Sitemaps: {len(coverage.get('sitemaps', []) or [])} registered, {sm_errs} total errors.")

    # CWV pass rate
    failures = cwv.get("failures", []) or []
    bullets.append(f"Core Web Vitals failures flagged: {len(failures)}.")

    out = ["## Executive summary", ""]
    for b in bullets:
        out.append(f"- {b}")
    out.append("")
    return "\n".join(out)


def main() -> int:
    report_sections: list[str] = []
    report_sections.append(f"# GSC Audit — tinypdftools.com")
    report_sections.append("")
    report_sections.append(f"_Report generated: {TODAY.isoformat()}_")
    report_sections.append("")
    report_sections.append(f"Site URL candidates tried: `{SITE_URL_PREFIX}` (primary), `{SITE_URL_DOMAIN}` (fallback).")
    report_sections.append("")

    # Credentials check
    if not CRED_PATH.exists():
        report_sections.append("## ⛔ Missing credentials")
        report_sections.append("")
        report_sections.append(f"Expected service account key at `{CRED_PATH}` but it was not found.")
        report_sections.append("Audit aborted. Place the service account JSON at the project root and re-run.")
        REPORT_PATH.write_text("\n".join(report_sections), encoding="utf-8")
        log(f"wrote (credentials missing) {REPORT_PATH}")
        return 2

    # .gitignore check
    gi = ROOT / ".gitignore"
    gitignore_warning = None
    if gi.exists():
        text = gi.read_text()
        if ".gsc-service-account.json" not in text and "*.json" not in text and not any(
            line.strip() in {".gsc-service-account.json", "*gsc-service-account*", "*.secret.json"} for line in text.splitlines()
        ):
            gitignore_warning = "⚠️ `.gsc-service-account.json` is NOT listed in `.gitignore`. Add it before committing to avoid leaking the service account key."

    try:
        service = build_sc_service()
    except Exception as e:
        report_sections.append("## ⛔ Authentication failed")
        report_sections.append("")
        report_sections.append(f"`{type(e).__name__}: {e}`")
        REPORT_PATH.write_text("\n".join(report_sections), encoding="utf-8")
        log(f"auth failed: {e}")
        return 2

    # Choose site URL
    try:
        site_url = pick_site_url(service)
    except Exception as e:
        log(f"pick_site_url failure: {e}")
        site_url = SITE_URL_PREFIX

    report_sections.append(f"**Using site URL:** `{site_url}`")
    report_sections.append("")

    # Performance
    perf_md, perf_data = ("", {})
    try:
        perf_md, perf_data = section_performance(service, site_url)
    except Exception as e:
        traceback.print_exc()
        perf_md = f"## Performance\n\n_Unexpected error: {e}_\n"

    # Coverage
    cov_md, cov_data = ("", {})
    try:
        cov_md, cov_data = section_coverage(service, site_url, perf_data.get("top_pages", []))
    except Exception as e:
        traceback.print_exc()
        cov_md = f"## Coverage / indexing\n\n_Unexpected error: {e}_\n"

    # CWV
    cwv_md, cwv_data = ("", {})
    try:
        cwv_md, cwv_data = section_cwv(perf_data.get("top_pages", []))
    except Exception as e:
        traceback.print_exc()
        cwv_md = f"## Core Web Vitals\n\n_Unexpected error: {e}_\n"

    # Manual actions
    ma_md = section_manual_actions()

    # Exec summary + recs come last (need data)
    exec_md = build_executive_summary(perf_data, cov_data, cwv_data)
    rec_md = section_recommendations(perf_data, cov_data, cwv_data)

    # Assemble (exec summary near the top after header)
    final = []
    final.append("\n".join(report_sections))
    final.append(exec_md)
    if gitignore_warning:
        final.append(f"> {gitignore_warning}\n")
    final.append(perf_md)
    final.append(cov_md)
    final.append(cwv_md)
    final.append(ma_md)
    final.append(rec_md)
    final.append("---\n")
    final.append(f"_Data windows: current={CUR_START.isoformat()}→{CUR_END.isoformat()}, previous={PREV_START.isoformat()}→{PREV_END.isoformat()} (GSC lag ~{GSC_LAG_DAYS} days)._\n")

    REPORT_PATH.write_text("\n\n".join(final), encoding="utf-8")
    log(f"wrote {REPORT_PATH}")
    print(str(REPORT_PATH))
    return 0


if __name__ == "__main__":
    sys.exit(main())
