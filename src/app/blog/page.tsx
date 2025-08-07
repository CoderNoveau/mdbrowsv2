import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts, BlogPost } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Brow Blog | Latest News and Updates',
  description: 'Stay updated with the latest news, tips, and trends in the beauty industry.',
  alternates: {
    canonical: 'https://mdbrows.com.au/blog',
  },
  openGraph: {
    title: 'Brow Blog | Melbourne Designer Brows',
    description: 'Stay updated with the latest news, tips, and trends in the beauty industry.',
    url: 'https://mdbrows.com.au/blog',
    type: 'website',
  },
}

export default async function BlogPage() {
  const posts: BlogPost[] = await getAllPosts()

  return (
    <div className="page-content">
      <h1 className="page-section-heading">Brow Blog</h1>
      <p className="page-intro" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
        Stay updated with the latest news, tips, and trends in the beauty industry from Melbourne Designer Brows.
      </p>
      {posts.length === 0 ? (
        <div className="text-center text-red-500 text-lg">No blog posts found.</div>
      ) : (
        <div className="blog-grid">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
              <div className="blog-card-image-wrapper">
                <Image src={post.image} alt={post.title} fill className="blog-card-image" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <span className="blog-card-date">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="blog-card-readmore">Read More</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
} 