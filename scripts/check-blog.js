import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkFrequency() {
  const { data: posts, error } = await supabase
    .from('blog_posts')
    .select('title, date')
    .order('date', { ascending: false });

  if (error) {
    console.error("Error fetching posts:", error);
    process.exit(1);
  }

  const today = new Date('2026-03-11T00:00:00.000Z'); // using the system time date provided
  
  // Calculate start of current week (Monday)
  const currentDay = today.getDay(); // 0 is Sunday, 1 is Monday... 3 is Weds
  // If today is Sunday (0), distance to last Monday is 6. Otherwise, currentDay - 1.
  const distanceToMonday = currentDay === 0 ? 6 : currentDay - 1;
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - distanceToMonday);
  startOfWeek.setHours(0, 0, 0, 0);

  let publishedToday = 0;
  let publishedThisWeek = [];

  const todayStr = today.toISOString().split('T')[0];

  for (const post of posts) {
    const postDate = new Date(post.date);
    const postDateStr = postDate.toISOString().split('T')[0];

    if (postDateStr === todayStr) {
      publishedToday++;
    }

    if (postDate >= startOfWeek) {
      publishedThisWeek.push(post);
    }
  }

  const lastPublished = posts.length > 0 ? posts[0] : null;

  console.log(`╔══════════════════════════════════════════════════════╗`);
  console.log(`║  📊 Content Dashboard — tinypdftools                  ║`);
  console.log(`╠══════════════════════════════════════════════════════╣`);
  console.log(`║  📦 Total Articles       │ ${posts.length.toString().padEnd(26)}║`);
  console.log(`║  📅 Last Published       │ ${(lastPublished ? lastPublished.date + ' — ' + lastPublished.title.substring(0, 15) + '...' : 'None').padEnd(26)}║`);
  console.log(`╠──────────────────────────┼──────────────────────────╣`);
  console.log(`║  ✍️ Published Today       │ ${publishedToday} of 1 ${(publishedToday > 0 ? '⬛' : '⬜').padEnd(24)}║`);
  console.log(`║  📆 Published This Week  │ ${publishedThisWeek.length} of 3 ${('⬛'.repeat(publishedThisWeek.length) + '⬜'.repeat(3 - publishedThisWeek.length)).padEnd(23)}║`);
  console.log(`╠──────────────────────────┼──────────────────────────╣`);
  console.log(`║  🟢 Today Slots Left     │ ${Math.max(0, 1 - publishedToday).toString().padEnd(26)}║`);
  console.log(`║  🟢 Week Slots Left      │ ${Math.max(0, 3 - publishedThisWeek.length).toString().padEnd(26)}║`);
  console.log(`╠══════════════════════════════════════════════════════╣`);
  if (publishedThisWeek.length > 0) {
    console.log(`║  This week's articles:                              ║`);
    for (const p of publishedThisWeek) {
      console.log(`║  • ${p.date} — ${p.title.substring(0, 35).padEnd(35)}║`);
    }
  } else {
    console.log(`║  This week's articles:  None yet                     ║`);
  }
  console.log(`╚══════════════════════════════════════════════════════╝`);

  if (publishedToday >= 1) {
    console.log("\n⚠️ CAUTION — published today ≥ 1 → Already published today — try another site");
  } else if (publishedThisWeek.length >= 3) {
    console.log("\n🛑 STOP — published this week ≥ 3 → Weekly limit reached — switch site");
  } else {
    console.log("\n✅ GO — published today = 0 AND published this week < 3");
  }
}

checkFrequency();
