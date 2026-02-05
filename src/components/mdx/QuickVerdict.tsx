import { Rating } from './Rating'
import { Zap, Target, DollarSign, Star } from 'lucide-react'

interface QuickVerdictProps {
  title: string
  rating: number
  summary: string
  bestFor: string
  pricing: string
  verdict: 'highly-recommended' | 'recommended' | 'mixed' | 'not-recommended'
}

const verdictConfig = {
  'highly-recommended': {
    label: 'Highly Recommended',
    color: 'bg-green-500',
    textColor: 'text-green-700 dark:text-green-400',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    borderColor: 'border-green-200 dark:border-green-800',
  },
  'recommended': {
    label: 'Recommended',
    color: 'bg-blue-500',
    textColor: 'text-blue-700 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
  },
  'mixed': {
    label: 'Mixed Feelings',
    color: 'bg-yellow-500',
    textColor: 'text-yellow-700 dark:text-yellow-400',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    borderColor: 'border-yellow-200 dark:border-yellow-800',
  },
  'not-recommended': {
    label: 'Not Recommended',
    color: 'bg-red-500',
    textColor: 'text-red-700 dark:text-red-400',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    borderColor: 'border-red-200 dark:border-red-800',
  },
}

export function QuickVerdict({ 
  title, 
  rating, 
  summary, 
  bestFor, 
  pricing,
  verdict 
}: QuickVerdictProps) {
  const config = verdictConfig[verdict]

  return (
    <div className={`not-prose my-8 rounded-xl border-2 ${config.borderColor} ${config.bgColor} overflow-hidden`}>
      {/* Header */}
      <div className={`${config.color} px-6 py-3 flex items-center justify-between`}>
        <h3 className="font-bold text-white flex items-center gap-2">
          <Zap className="w-5 h-5" />
          Quick Verdict
        </h3>
        <span className="bg-white/20 px-3 py-1 rounded-full text-sm text-white font-medium">
          {config.label}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">{title}</h4>
          <Rating score={rating} size="lg" />
        </div>

        <p className="text-slate-600 dark:text-slate-300 mb-6">{summary}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
              <Target className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Best For</span>
              <p className="text-slate-900 dark:text-slate-100">{bestFor}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Pricing</span>
              <p className="text-slate-900 dark:text-slate-100">{pricing}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
