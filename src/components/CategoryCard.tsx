import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CategoryCardProps {
  name: string
  slug: string
  description: string
  icon: string
  count: number
}

export function CategoryCard({ name, slug, description, icon, count }: CategoryCardProps) {
  return (
    <Link 
      href={`/category/${slug}`}
      className="group block p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-lg"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {name}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500 dark:text-slate-400">
          {count} {count === 1 ? 'article' : 'articles'}
        </span>
        <span className="flex items-center gap-1 text-primary-600 dark:text-primary-400 text-sm font-medium group-hover:gap-2 transition-all">
          Explore
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  )
}
