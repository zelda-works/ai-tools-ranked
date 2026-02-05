'use client'

import { Star, StarHalf } from 'lucide-react'

interface RatingProps {
  score: number // 0-5
  maxScore?: number
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function Rating({ score, maxScore = 5, showLabel = true, size = 'md' }: RatingProps) {
  const fullStars = Math.floor(score)
  const hasHalf = score % 1 >= 0.5
  const emptyStars = maxScore - fullStars - (hasHalf ? 1 : 0)
  
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }

  const labelClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <Star 
            key={`full-${i}`} 
            className={`${sizeClasses[size]} text-yellow-500 fill-yellow-500`} 
          />
        ))}
        {hasHalf && (
          <div className="relative">
            <Star className={`${sizeClasses[size]} text-slate-300 dark:text-slate-600`} />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className={`${sizeClasses[size]} text-yellow-500 fill-yellow-500`} />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star 
            key={`empty-${i}`} 
            className={`${sizeClasses[size]} text-slate-300 dark:text-slate-600`} 
          />
        ))}
      </div>
      {showLabel && (
        <span className={`font-semibold ${labelClasses[size]}`}>
          {score.toFixed(1)}/{maxScore}
        </span>
      )}
    </div>
  )
}
