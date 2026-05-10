/**
 * ping-search-engines.js
 * ─────────────────────────────────────────────────────────
 * Submits every URL in the live sitemap to IndexNow after each
 * deploy. IndexNow routes to Bing, Yandex, Seznam, and Naver, and
 * Google reads the same feed since their 2023 partnership. Google's
 * and Bing's legacy /ping?sitemap= endpoints were retired in 2023
 * and 2022 respectively and are no longer called here.
 *
 * Usage:
 *   node scripts/ping-search-engines.js
 *   node scripts/ping-search-engines.js --site=https://example.com
 *
 * Runs automatically on every Vercel production build via vercel.json's
 * buildCommand (`next build && (node scripts/ping-search-engines.js || true)`).
 * The `|| true` is intentional — a failing IndexNow endpoint must never
 * break the build, since the script catches per-endpoint errors internally
 * but a process-level abort would still bubble up.
 */

const DEFAULTS = {
  site: 'https://tinypdftools.com',
  indexNowKey: 'c8e4e439a7f74991b6d1d82301c21aae',
};

// Parse --site flag
const args = process.argv.slice(2);
const siteArg = args.find(a => a.startsWith('--site='));
const SITE = siteArg ? siteArg.split('=')[1] : DEFAULTS.site;
const HOST = new URL(SITE).hostname;
const SITEMAP = `${SITE}/sitemap.xml`;

// ── Pull every URL out of the live sitemap ────────────────
// IndexNow accepts up to 10,000 URLs per submission, so this scales fine.
// If the sitemap fetch fails we degrade to pinging the homepage only
// rather than aborting the whole deploy hook.
async function readSitemapUrls() {
  try {
    const res = await fetch(SITEMAP, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) {
      console.warn(`   ⚠️  Sitemap fetch returned HTTP ${res.status}; falling back to homepage-only ping`);
      return [SITE];
    }
    const xml = await res.text();
    const urls = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g))
      .map(m => m[1].trim())
      .filter(u => u.startsWith(SITE));
    if (urls.length === 0) {
      console.warn('   ⚠️  Sitemap parsed but contained no <loc> entries; falling back to homepage-only ping');
      return [SITE];
    }
    return urls;
  } catch (err) {
    console.warn(`   ⚠️  Could not read sitemap (${err.message}); falling back to homepage-only ping`);
    return [SITE];
  }
}

// ── IndexNow submission targets ──────────────────────────
// IndexNow has multiple submission endpoints (central + per-engine).
// They share submissions, but a host that is blocked on one can still
// be accepted by another — observed on tinypdftools.com in April 2026,
// where api.indexnow.org and bing.com/indexnow returned 403
// "UserForbiddedToAccessSite" while yandex.com/indexnow accepted the
// full URL list. Submitting to all three is cheap and maximizes the
// chance at least one endpoint ingests the feed.
//
// To clear a 403 on Bing's IndexNow endpoint, re-verify the key
// location in Bing Webmaster Tools → Settings → IndexNow. Google's
// legacy /ping?sitemap= was removed in June 2023 and is no longer
// called.
function buildEngines(urlList) {
  const indexNowBody = {
    host: HOST,
    key: DEFAULTS.indexNowKey,
    keyLocation: `${SITE}/${DEFAULTS.indexNowKey}.txt`,
    urlList,
  };
  return [
    {
      name: 'IndexNow (Yandex)',
      method: 'POST',
      url: 'https://yandex.com/indexnow',
      body: indexNowBody,
    },
    {
      name: 'IndexNow (Bing)',
      method: 'POST',
      url: 'https://www.bing.com/indexnow',
      body: indexNowBody,
    },
    {
      name: 'IndexNow (central)',
      method: 'POST',
      url: 'https://api.indexnow.org/indexnow',
      body: indexNowBody,
    },
  ];
}

// ── Execute pings ────────────────────────────────────────
async function pingAll() {
  console.log(`\n🔔 Pinging search engines for ${SITE}\n`);
  console.log(`   Sitemap: ${SITEMAP}`);

  const urlList = await readSitemapUrls();
  console.log(`   IndexNow payload: ${urlList.length} URL(s)`);
  console.log('─'.repeat(55));

  const engines = buildEngines(urlList);
  const results = [];
  const TIMEOUT_MS = 10_000; // 10 second timeout per engine

  for (const engine of engines) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

      const opts = { method: engine.method, signal: controller.signal };
      if (engine.method === 'POST' && engine.body) {
        // IndexNow spec requires charset=utf-8 in the content-type
        opts.headers = { 'Content-Type': 'application/json; charset=utf-8' };
        opts.body = JSON.stringify(engine.body);
      }

      const res = await fetch(engine.url, opts);
      clearTimeout(timer);

      const ok = res.ok || res.status === 202;
      results.push({ name: engine.name, status: res.status, ok });

      console.log(
        ok
          ? `   ✅ ${engine.name.padEnd(20)} → ${res.status}`
          : `   ⚠️  ${engine.name.padEnd(20)} → ${res.status}`
      );
    } catch (err) {
      const msg = err.name === 'AbortError' ? 'Timeout (10s)' : err.message;
      results.push({ name: engine.name, status: 'ERR', ok: false });
      console.log(`   ❌ ${engine.name.padEnd(20)} → ${msg}`);
    }
  }

  console.log('─'.repeat(55));
  const passed = results.filter(r => r.ok).length;
  console.log(`\n📊 ${passed}/${results.length} IndexNow endpoints accepted the submission\n`);
  if (passed === 0) {
    console.log('   ⚠️  No IndexNow endpoint accepted. Re-verify the key file');
    console.log(`      at ${SITE}/${DEFAULTS.indexNowKey}.txt and check`);
    console.log('      Bing Webmaster Tools → Settings → IndexNow.\n');
  }

  return results;
}

pingAll();
