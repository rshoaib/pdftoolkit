/**
 * ping-search-engines.js
 * ─────────────────────────────────────────────────────────
 * Pings Google, Bing (IndexNow), Yandex, and Baidu with
 * the sitemap URL after each deploy.
 *
 * Usage:
 *   node scripts/ping-search-engines.js
 *   node scripts/ping-search-engines.js --site=https://example.com
 *
 * Runs automatically as part of the /deploy workflow.
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

// ── Ping targets ─────────────────────────────────────────
const engines = [
  {
    name: 'Google',
    method: 'GET',
    url: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP)}`,
  },
  {
    name: 'Bing (IndexNow)',
    method: 'POST',
    url: 'https://api.indexnow.org/indexnow',
    body: {
      host: HOST,
      key: DEFAULTS.indexNowKey,
      keyLocation: `${SITE}/${DEFAULTS.indexNowKey}.txt`,
      urlList: [SITE], // ping the homepage at minimum
    },
  },
  {
    name: 'Yandex',
    method: 'GET',
    url: `https://webmaster.yandex.com/ping?sitemap=${encodeURIComponent(SITEMAP)}`,
  },
  {
    name: 'Bing Webmaster',
    method: 'GET',
    url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP)}`,
  },
];

// ── Execute pings ────────────────────────────────────────
async function pingAll() {
  console.log(`\n🔔 Pinging search engines for ${SITE}\n`);
  console.log(`   Sitemap: ${SITEMAP}`);
  console.log('─'.repeat(55));

  const results = [];
  const TIMEOUT_MS = 10_000; // 10 second timeout per engine

  for (const engine of engines) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

      const opts = { method: engine.method, signal: controller.signal };
      if (engine.method === 'POST' && engine.body) {
        opts.headers = { 'Content-Type': 'application/json' };
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
  console.log(`\n📊 ${passed}/${results.length} engines pinged successfully\n`);

  return results;
}

pingAll();
