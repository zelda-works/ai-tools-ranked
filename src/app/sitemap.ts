import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://aitoolsranked.com'
  const posts = await getAllPosts()
  
  const staticPages = [
    '',
    '/reviews',
    '/compare',
    '/about',
    '/affiliate-disclosure',
    '/privacy',
    '/category/writing-tools',
    '/category/video-tools',
    '/category/image-tools',
  ]

  const staticEntries = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  const postEntries = posts.map((post) => ({
    url: `${baseUrl}/reviews/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticEntries, ...postEntries]
}
