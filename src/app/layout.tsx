import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://aitoolsranked.com'),
  title: {
    default: 'AI Tools Ranked - Expert Reviews & Comparisons',
    template: '%s | AI Tools Ranked',
  },
  description: 'Discover the best AI tools for writing, video, images, and more. In-depth reviews, comparisons, and honest recommendations to help you choose the right AI software.',
  keywords: ['AI tools', 'AI software', 'AI writing tools', 'AI video tools', 'AI image generators', 'AI reviews'],
  authors: [{ name: 'AI Tools Ranked Team' }],
  creator: 'AI Tools Ranked',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aitoolsranked.com',
    siteName: 'AI Tools Ranked',
    title: 'AI Tools Ranked - Expert Reviews & Comparisons',
    description: 'Discover the best AI tools for writing, video, images, and more.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Tools Ranked',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools Ranked - Expert Reviews & Comparisons',
    description: 'Discover the best AI tools for writing, video, images, and more.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://aitoolsranked.com',
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
