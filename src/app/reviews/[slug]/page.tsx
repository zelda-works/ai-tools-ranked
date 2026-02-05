import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/mdx'
import { Rating } from '@/components/mdx/Rating'
import { AuthorBio } from '@/components/mdx/AuthorBio'
import { TableOfContents } from '@/components/mdx/TableOfContents'
import { Calendar, Clock, Tag } from 'lucide-react'
import Link from 'next/link'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return { title: 'Not Found' }
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/reviews/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      url: `/reviews/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function ReviewPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // JSON-LD for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    reviewRating: post.rating ? {
      '@type': 'Rating',
      ratingValue: post.rating,
      bestRating: 5,
      worstRating: 1,
    } : undefined,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span>/</span>
          <Link href="/reviews" className="hover:text-primary-600">Reviews</Link>
          <span>/</span>
          <Link href={`/category/${post.category}`} className="hover:text-primary-600">
            {post.categoryLabel}
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Link 
              href={`/category/${post.category}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700"
            >
              <Tag className="w-4 h-4" />
              {post.categoryLabel}
            </Link>
            {post.rating && <Rating score={post.rating} size="md" />}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white text-sm font-medium">
                {post.author.name.charAt(0)}
              </div>
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        {/* Affiliate Disclosure */}
        <div className="mb-8 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-sm text-amber-800 dark:text-amber-200">
          <strong>Disclosure:</strong> Some links in this article may be affiliate links. 
          We may earn a commission if you make a purchase, at no extra cost to you.{' '}
          <Link href="/affiliate-disclosure" className="underline hover:text-amber-600">
            Learn more
          </Link>
        </div>

        {/* Table of Contents */}
        <TableOfContents />

        {/* Content */}
        <div className="prose-custom">
          <MDXRemote 
            source={post.content} 
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug],
              },
            }}
          />
        </div>

        {/* Author Bio */}
        <AuthorBio {...post.author} />

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <h3 className="font-bold text-lg mb-4">Share this review</h3>
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://aitoolsranked.com/reviews/${post.slug}`)}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
            >
              Share on X
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://aitoolsranked.com/reviews/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Share on LinkedIn
            </a>
          </div>
        </div>
      </article>
    </>
  )
}
