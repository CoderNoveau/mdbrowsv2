import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { MDXProvider } from '@mdx-js/react'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const { slug } = resolvedParams
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const canonicalUrl = `https://mdbrows.com.au/blog/${slug}`

  return {
    title: `${post.title} | Melbourne Designer Brows Blog`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${post.title} | Melbourne Designer Brows`,
      description: post.excerpt,
      url: canonicalUrl,
      type: 'article',
      publishedTime: post.date,
      images: post.image ? [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  }
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'src/content/blog')
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'))
  return files.map(file => ({
    slug: file.replace(/\.mdx$/, ''),
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params
  const { slug } = resolvedParams
  const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`)
  if (!fs.existsSync(filePath)) notFound()

  const mdxSource = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(mdxSource)

  // Compile the MDX string to a React component
  const { content: MDXContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
  })

  return (
    <div className="page-content">
      <Link href="/blog" className="service-link" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--accent)', fontWeight: 500 }}>
        ← Back to Blog
      </Link>
      {data.image && (
        <div style={{ position: 'relative', width: '100%', maxWidth: 700, height: 320, margin: '0 auto 2.5rem', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(192,166,105,0.10)' }}>
          <Image src={data.image} alt={data.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 700px" />
        </div>
      )}
      <h1 className="page-section-heading" style={{ marginBottom: '1rem' }}>{data.title}</h1>
      <div className="page-intro" style={{ marginBottom: '2.5rem', color: '#b3a16b', textAlign: 'center' }}>{data.excerpt}</div>
      <div className="prose" style={{ maxWidth: 700, margin: '0 auto' }}>
        {MDXContent}
      </div>
    </div>
  )
} 