import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getPostsByCategory, getAllCategories } from '@/lib/posts'
import { PostCard } from '@/components/PostCard'
import Link from 'next/link'

const categoryInfo: Record<string, { title: string; description: string; icon: string }> = {
  'writing-tools': {
    title: 'AI Writing Tools',
    description: 'Discover the best AI writing assistants, content generators, and copywriting tools to supercharge your content creation.',
    icon: '✍️',
  },
  'video-tools': {
    title: 'AI Video Tools',
    description: 'Explore AI-powered video editing, generation, and enhancement tools that make professional video production accessible.',
    icon: '🎬',
  },
  'image-tools': {
    title: 'AI Image Tools',
    description: 'Find the perfect AI image generator, editor, or design tool for your creative projects.',
    icon: '🎨',
  },
}

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const categories = ['writing-tools', 'video-tools', 'image-tools']
  return categories.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const info = categoryInfo[params.slug]
  
  if (!info) {
    return { title: 'Category Not Found' }
  }

  return {
    title: info.title,
    description: info.description,
  }
}

export default async function CategoryPage({ params }: Props) {
  const info = categoryInfo[params.slug]

  if (!info) {
    notFound()
  }

  const posts = await getPostsByCategory(params.slug)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span>/</span>
        <span>Categories</span>
        <span>/</span>
        <span className="text-slate-900 dark:text-slate-100">{info.title}</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">{info.icon}</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{info.title}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {info.description}
        </p>
      </div>

      {/* Posts Grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
          <p className="text-slate-500 dark:text-slate-400 mb-4">
            No reviews in this category yet. Check back soon!
          </p>
          <Link 
            href="/reviews"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Browse all reviews →
          </Link>
        </div>
      )}
    </div>
  )
}
