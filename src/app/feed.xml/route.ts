import { getAllPosts, generateRSSFeed } from '@/lib/posts'

export async function GET() {
  const posts = await getAllPosts()
  const feed = generateRSSFeed(posts, 'https://aitoolsranked.com')
  
  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  })
}
