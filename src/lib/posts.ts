import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostMeta {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  categoryLabel: string
  readingTime: string
  rating?: number
  image?: string
  featured?: boolean
  author: {
    name: string
    role: string
    bio: string
    avatar?: string
    twitter?: string
    linkedin?: string
  }
}

export interface Post extends PostMeta {
  content: string
}

const categoryLabels: Record<string, string> = {
  'writing-tools': 'Writing Tools',
  'video-tools': 'Video Tools',
  'image-tools': 'Image Tools',
}

export async function getAllPosts(): Promise<PostMeta[]> {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const files = fs.readdirSync(postsDirectory)
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const stats = readingTime(content)

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        category: data.category,
        categoryLabel: categoryLabels[data.category] || data.category,
        readingTime: stats.text,
        rating: data.rating,
        image: data.image,
        featured: data.featured || false,
        author: data.author,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const stats = readingTime(content)

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    category: data.category,
    categoryLabel: categoryLabels[data.category] || data.category,
    readingTime: stats.text,
    rating: data.rating,
    image: data.image,
    featured: data.featured || false,
    author: data.author,
    content,
  }
}

export async function getPostsByCategory(category: string): Promise<PostMeta[]> {
  const posts = await getAllPosts()
  return posts.filter((post) => post.category === category)
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts()
  const categories = Array.from(new Set(posts.map((post) => post.category)))
  return categories
}

export function generateRSSFeed(posts: PostMeta[], siteUrl: string): string {
  const items = posts.map((post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteUrl}/reviews/${post.slug}</link>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>${siteUrl}/reviews/${post.slug}</guid>
      <category>${escapeXml(post.categoryLabel)}</category>
    </item>
  `).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AI Tools Ranked</title>
    <link>${siteUrl}</link>
    <description>Expert reviews and comparisons of the best AI tools</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
