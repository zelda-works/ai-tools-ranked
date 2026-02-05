import Link from 'next/link'
import { Twitter, Linkedin } from 'lucide-react'

interface AuthorBioProps {
  name: string
  role: string
  bio: string
  avatar?: string
  twitter?: string
  linkedin?: string
}

export function AuthorBio({ 
  name, 
  role, 
  bio, 
  avatar,
  twitter,
  linkedin 
}: AuthorBioProps) {
  return (
    <div className="not-prose my-12 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center flex-shrink-0 text-3xl">
          {avatar ? (
            <img 
              src={avatar} 
              alt={name}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            name.charAt(0)
          )}
        </div>

        {/* Info */}
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">{name}</h3>
            <span className="text-xs font-medium px-2 py-0.5 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full">
              {role}
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">{bio}</p>
          
          {/* Social Links */}
          {(twitter || linkedin) && (
            <div className="flex items-center gap-3">
              {twitter && (
                <a 
                  href={`https://twitter.com/${twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-primary-600 transition-colors"
                  aria-label={`${name} on Twitter`}
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {linkedin && (
                <a 
                  href={`https://linkedin.com/in/${linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-primary-600 transition-colors"
                  aria-label={`${name} on LinkedIn`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
