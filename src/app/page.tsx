import { PostCard } from '@/components/PostCard'
import { CategoryCard } from '@/components/CategoryCard'
import { getAllPosts } from '@/lib/posts'
import { Sparkles, TrendingUp, Award } from 'lucide-react'

export default async function Home() {
  const posts = await getAllPosts()
  const featuredPosts = posts.slice(0, 6)
  
  const categories = [
    {
      name: 'Writing Tools',
      slug: 'writing-tools',
      description: 'AI assistants for content creation, copywriting, and more',
      icon: '✍️',
      count: posts.filter(p => p.category === 'writing-tools').length,
    },
    {
      name: 'Video Tools',
      slug: 'video-tools',
      description: 'AI-powered video editing, generation, and enhancement',
      icon: '🎬',
      count: posts.filter(p => p.category === 'video-tools').length,
    },
    {
      name: 'Image Tools',
      slug: 'image-tools',
      description: 'AI image generators, editors, and design assistants',
      icon: '🎨',
      count: posts.filter(p => p.category === 'image-tools').length,
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Updated for 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Find the Perfect <span className="text-primary-200">AI Tool</span> for Your Needs
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Honest, in-depth reviews and comparisons of the best AI tools. 
              We test every tool so you don't have to.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#featured" 
                className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                Browse Reviews
              </a>
              <a 
                href="/compare" 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                Compare Tools
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <Award className="w-8 h-8 text-primary-600" />
              <div className="text-left">
                <div className="font-bold text-2xl">50+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Tools Reviewed</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <TrendingUp className="w-8 h-8 text-primary-600" />
              <div className="text-left">
                <div className="font-bold text-2xl">100K+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Monthly Readers</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8 text-primary-600" />
              <div className="text-left">
                <div className="font-bold text-2xl">Weekly</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">New Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Find the best AI tools for your specific needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.slug} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section id="featured" className="py-16 md:py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Reviews</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our most recent in-depth analyses and comparisons
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="/reviews" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              View All Reviews
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated on AI Tools
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Get weekly reviews, comparisons, and exclusive deals delivered to your inbox. 
              No spam, just the best AI tool insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-lg text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
