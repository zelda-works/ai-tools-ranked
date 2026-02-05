# AI Tools Ranked

A modern affiliate content site for AI tools reviews, built with Next.js 14, Tailwind CSS, and MDX.

## Features

- 🚀 **Static Generation** - Lightning-fast pages with Next.js static export
- 📝 **MDX Content** - Write posts in Markdown with embedded React components
- 🎨 **Tailwind CSS** - Modern, responsive design with dark mode support
- 🔍 **SEO Optimized** - Meta tags, Open Graph, JSON-LD schema markup
- 📱 **Mobile First** - Fully responsive design
- 📰 **RSS Feed** - Auto-generated feed at `/feed.xml`
- 🗺️ **Sitemap** - Auto-generated sitemap for search engines

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone or navigate to the project
cd ai-tools

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build for Production

```bash
# Build static site
npm run build

# The output will be in the 'out' directory
```

## Project Structure

```
ai-tools/
├── content/
│   └── posts/           # MDX blog posts
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── about/
│   │   ├── affiliate-disclosure/
│   │   ├── category/[slug]/
│   │   ├── compare/
│   │   ├── privacy/
│   │   ├── reviews/
│   │   │   └── [slug]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── mdx/         # MDX components for posts
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   └── lib/
│       └── posts.ts     # Post utilities
├── tailwind.config.ts
└── next.config.mjs
```

## Writing Posts

Create MDX files in `content/posts/`:

```mdx
---
title: "Your Post Title"
excerpt: "A brief description for cards and SEO"
date: "2026-02-01"
category: "writing-tools" # or video-tools, image-tools
rating: 4.5
featured: true
author:
  name: "Author Name"
  role: "Role"
  bio: "Short bio"
  twitter: "handle"
---

Your content here...

<QuickVerdict
  title="Product Name"
  rating={4.5}
  summary="Brief verdict"
  bestFor="Target audience"
  pricing="$XX/month"
  verdict="highly-recommended"
/>

<ProsCons
  pros={["Pro 1", "Pro 2"]}
  cons={["Con 1", "Con 2"]}
/>

<CTAButton href="https://example.com">Try It Free</CTAButton>
```

### Available MDX Components

- `<QuickVerdict>` - Summary box with rating
- `<ProsCons>` - Pros/cons comparison
- `<CTAButton>` - Affiliate link button
- `<CTASection>` - Centered button container
- `<Rating>` - Star rating display
- `<ComparisonTable>` - Multi-tool comparison
- `<TableOfContents>` - Auto-generated TOC
- `<AuthorBio>` - Author information box

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload 'out' directory to Netlify
```

### Any Static Host

The `npm run build` command generates a static site in the `out` directory that can be deployed to any static hosting service (GitHub Pages, Cloudflare Pages, etc).

## Configuration

### Site Metadata

Edit `src/app/layout.tsx` to update:
- Site title and description
- Open Graph images
- Twitter card info
- Site URL

### Categories

Categories are defined in:
- `src/app/page.tsx` (homepage)
- `src/app/category/[slug]/page.tsx` (category pages)
- `src/lib/posts.ts` (category labels)

### Theme Colors

Edit `tailwind.config.ts` to customize the color palette.

## FTC Compliance

This template includes:
- Affiliate disclosure page at `/affiliate-disclosure`
- Disclosure banner on every post
- Proper `rel="sponsored"` on affiliate links

**Important**: Customize the disclosure content to match your actual affiliate relationships.

## License

MIT

---

Built with ❤️ for the AI tools community.
