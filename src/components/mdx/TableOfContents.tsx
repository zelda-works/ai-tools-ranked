'use client'

import { useEffect, useState } from 'react'
import { List } from 'lucide-react'

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings?: TOCItem[]
}

export function TableOfContents({ headings: propHeadings }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>(propHeadings || [])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (!propHeadings) {
      // Auto-generate from DOM
      const elements = Array.from(document.querySelectorAll('article h2, article h3'))
      const items = elements.map((el) => ({
        id: el.id,
        text: el.textContent || '',
        level: parseInt(el.tagName[1]),
      }))
      setHeadings(items)
    }
  }, [propHeadings])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -80% 0px' }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav className="not-prose my-8 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
      <h2 className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100 mb-4">
        <List className="w-5 h-5" />
        Table of Contents
      </h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li 
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
          >
            <a
              href={`#${heading.id}`}
              className={`toc-link block text-sm py-1 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 ${
                activeId === heading.id ? 'active' : ''
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
