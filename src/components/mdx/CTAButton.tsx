import { ExternalLink } from 'lucide-react'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export function CTAButton({ 
  href, 
  children, 
  variant = 'primary',
  size = 'md' 
}: CTAButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 no-underline"
  
  const variantClasses = {
    primary: "bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-600",
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <a 
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} my-4`}
    >
      {children}
      <ExternalLink className="w-4 h-4" />
    </a>
  )
}

// Wrapper for centered CTA sections
export function CTASection({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose flex flex-col sm:flex-row items-center justify-center gap-4 my-8 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
      {children}
    </div>
  )
}
