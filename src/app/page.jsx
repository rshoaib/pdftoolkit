import ToolSelector from '../components/ToolSelector';
import { getAllPosts } from '../lib/blogService';

export default async function HomePage() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3);

  return <ToolSelector recentPosts={recentPosts} />;
}
