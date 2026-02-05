import Link from 'next/link'
import { Star, Clock, ArrowRight } from 'lucide-react'

interface PostCardProps {
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
}

export function PostCard({
  slug,
  title,
  excerpt,
  date,
  category,
  categoryLabel,
  readingTime,
  rating,
  image,
  featured = false,
}: PostCardProps) {
  return (
    <article className={`post-card bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 ${featured ? 'md:col-span-2 md:flex' : ''}`}>
      {/* Image */}
      <div className={`relative bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 ${featured ? 'md:w-1/2 h-48 md:h-auto' : 'h-48'}`}>
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            🤖
          </div>
        )}
        {rating && (
          <div className="absolute top-3 right-3 bg-white dark:bg-slate-800 px-2 py-1 rounded-lg shadow-md flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold text-sm">{rating.toFixed(1)}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`p-6 ${featured ? 'md:w-1/2 flex flex-col justify-center' : ''}`}>
        <div className="flex items-center gap-3 mb-3">
          <Link 
            href={`/category/${category}`}
            className="text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400 hover:text-primary-700"
          >
            {categoryLabel}
          </Link>
          <span className="text-slate-300 dark:text-slate-600">•</span>
          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {readingTime}
          </span>
        </div>

        <Link href={`/reviews/${slug}`}>
          <h3 className={`font-bold text-slate-900 dark:text-slate-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-2 ${featured ? 'text-2xl' : 'text-lg'}`}>
            {title}
          </h3>
        </Link>

        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
          {excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <time className="text-xs text-slate-500 dark:text-slate-400">
            {new Date(date).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </time>
          <Link 
            href={`/reviews/${slug}`}
            className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 flex items-center gap-1"
          >
            Read more
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}
