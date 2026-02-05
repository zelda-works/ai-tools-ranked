import { getAllPosts } from '@/lib/posts'
import { PostCard } from '@/components/PostCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Reviews',
  description: 'Browse all our in-depth AI tool reviews, comparisons, and analysis.',
}

export default async function ReviewsPage() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">All Reviews</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Comprehensive, hands-on reviews of the latest AI tools. Each review includes 
          pricing breakdowns, feature analysis, and real-world testing.
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
        <div className="text-center py-12">
          <p className="text-slate-500 dark:text-slate-400">
            No reviews yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  )
}
