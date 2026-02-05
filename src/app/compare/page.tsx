import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Compare AI Tools',
  description: 'Side-by-side comparisons of popular AI tools to help you make the right choice.',
}

const comparisons = [
  {
    title: 'Best AI Writing Tools 2026',
    description: 'Compare Jasper, Copy.ai, Writesonic, and more in our comprehensive guide.',
    tools: ['Jasper', 'Copy.ai', 'Writesonic', 'Claude'],
    href: '/reviews/best-ai-writing-tools-2026',
    category: 'Writing Tools',
  },
  {
    title: 'Jasper vs Copy.ai',
    description: 'Which AI writing assistant is right for you?',
    tools: ['Jasper', 'Copy.ai'],
    href: '/reviews/jasper-ai-review',
    category: 'Writing Tools',
  },
]

export default function ComparePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Compare AI Tools</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Side-by-side comparisons to help you choose the right tool for your needs.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid gap-6 mb-12">
        {comparisons.map((comparison) => (
          <Link
            key={comparison.title}
            href={comparison.href}
            className="block p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-lg group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
                  {comparison.category}
                </span>
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-1 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {comparison.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  {comparison.description}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {comparison.tools.map((tool, i) => (
                    <div
                      key={tool}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white text-sm font-bold border-2 border-white dark:border-slate-800"
                      style={{ zIndex: comparison.tools.length - i }}
                    >
                      {tool.charAt(0)}
                    </div>
                  ))}
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-primary-600 transition-colors" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Coming Soon */}
      <div className="text-center p-12 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">More Comparisons Coming Soon</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          We're working on detailed comparisons for video tools, image generators, and more.
        </p>
        <Link 
          href="/reviews"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
        >
          Browse All Reviews
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
