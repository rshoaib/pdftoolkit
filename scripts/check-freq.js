import { createClient } from '@supabase/supabase-js';

const url = 'https://vovcdsutmcjkdlracgtv.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvdmNkc3V0bWNqa2RscmFjZ3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxMjA3ODcsImV4cCI6MjA4NzY5Njc4N30.fdO4kVNne-3cH72mbq7gO-EeUBoPfmCTlerACARfVL0';
const supabase = createClient(url, key);

async function checkFreq() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('title, date')
    .order('date', { ascending: false });

  if (error) {
    console.error('Error fetching:', error);
    return;
  }

  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];
  
  // Calculate start of week (Monday)
  const currentDay = now.getDay();
  const diffToMonday = currentDay === 0 ? 6 : currentDay - 1; // 0 is Sunday
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - diffToMonday);
  startOfWeek.setHours(0, 0, 0, 0);

  let total = data.length;
  let lastPublished = data.length > 0 ? `${data[0].date} - ${data[0].title}` : 'None';
  
  let publishedToday = 0;
  let publishedThisWeek = [];

  for (const post of data) {
    if (!post.date) continue;
    const postDate = new Date(post.date);
    const dateStr = post.date.split('T')[0];

    if (dateStr === todayStr) {
      publishedToday++;
    }

    if (postDate >= startOfWeek) {
      publishedThisWeek.push(`${dateStr} - ${post.title}`);
    }
  }

  console.log('Total Articles:', total);
  console.log('Last Published:', lastPublished);
  console.log('Published Today:', publishedToday);
  console.log('Published This Week:', publishedThisWeek.length);
  publishedThisWeek.forEach(p => console.log(' - ' + p));
}

checkFreq();
