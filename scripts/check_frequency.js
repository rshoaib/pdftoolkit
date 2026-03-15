import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, '../.env');
const envContent = fs.readFileSync(envPath, 'utf8');

const env = {};
envContent.split('\n').forEach(line => {
  const [key, ...values] = line.split('=');
  if (key && values.length > 0) {
    env[key.trim()] = values.join('=').trim().replace(/['"]/g, '');
  }
});

const supabaseUrl = env['NEXT_PUBLIC_SUPABASE_URL'];
const supabaseKey = env['NEXT_PUBLIC_SUPABASE_ANON_KEY'];

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkFrequency() {
  const { data, error } = await supabase.from('blog_posts').select('*').order('date', { ascending: false });
  if (error) {
    console.error("Error fetching posts:", error);
    process.exit(1);
  }

  const now = new Date();
  // Set to midnight today for local time comparison
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  // Week is Mon-Sun
  const day = now.getDay();
  const diffToMonday = now.getDate() - day + (day === 0 ? -6 : 1);
  const mondayStart = new Date(now.getFullYear(), now.getMonth(), diffToMonday);

  let publishedTodayCount = 0;
  let publishedThisWeekCount = 0;
  let thisWeekTitles = [];

  const total = data.length;
  const lastPublished = total > 0 ? new Date(data[0].date).toLocaleDateString() + ' — ' + data[0].title : 'None';

  for (const post of data) {
    const postDate = new Date(post.date);
    
    // Check if published today
    if (postDate >= todayStart) {
      publishedTodayCount++;
    }
    
    // Check if published this week
    if (postDate >= mondayStart) {
      publishedThisWeekCount++;
      thisWeekTitles.push(`${postDate.toLocaleDateString()} — ${post.title}`);
    }
  }

  const todaySlots = Math.max(0, 1 - publishedTodayCount);
  const weekSlots = Math.max(0, 3 - publishedThisWeekCount);

  let todayBoxes = '⬛'.repeat(publishedTodayCount) + '⬜'.repeat(todaySlots);
  let weekBoxes = '⬛'.repeat(publishedThisWeekCount) + '⬜'.repeat(weekSlots);

  // Pad to max slots if over limit
  if(publishedTodayCount > 1) todayBoxes = '⬛'.repeat(publishedTodayCount);
  if(publishedThisWeekCount > 3) weekBoxes = '⬛'.repeat(publishedThisWeekCount);

  console.log(`
╔══════════════════════════════════════════════════════╗
║  📊 Content Dashboard — pdftoolkit                    ║
╠══════════════════════════════════════════════════════╣
║  📦 Total Articles       │ ${total.toString().padEnd(25)}║
║  📅 Last Published       │ ${lastPublished.padEnd(25)}║
╠──────────────────────────┼──────────────────────────╣
║  ✍️  Published Today       │ ${publishedTodayCount} of 1 ${todayBoxes.padEnd(16)}║
║  📆 Published This Week  │ ${publishedThisWeekCount} of 3 ${weekBoxes.padEnd(16)}║
╠──────────────────────────┼──────────────────────────╣
║  🟢 Today Slots Left     │ ${todaySlots.toString().padEnd(25)}║
║  🟢 Week Slots Left      │ ${weekSlots.toString().padEnd(25)}║
╠══════════════════════════════════════════════════════╣
║  This week's articles:                               ║`);

  if (thisWeekTitles.length > 0) {
    thisWeekTitles.forEach(t => console.log(`║  • ${t.padEnd(50)}║`));
  } else {
    console.log(`║  None yet                                            ║`);
  }
  console.log(`╚══════════════════════════════════════════════════════╝`);
  
  if (publishedTodayCount >= 1) {
    console.log("\n⚠️ CAUTION — Published today ≥ 1 → Already published today — try another site");
  } else if (publishedThisWeekCount >= 3) {
    console.log("\n🛑 STOP — Published this week ≥ 3 → Weekly limit reached — switch site");
  } else {
    console.log("\n✅ GO — published today = 0 AND published this week < 3");
  }
}

checkFrequency();
