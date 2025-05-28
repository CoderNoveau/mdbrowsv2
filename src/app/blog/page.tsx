import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts, BlogPost } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Brow Blog | Latest News and Updates',
  description: 'Stay updated with the latest news, tips, and trends in the beauty industry.',
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
        <div className="services-grid" style={{ marginTop: '2rem' }}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="service-card" style={{ border: '1px solid #f0f0f0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(192,166,105,0.08)', background: '#fff', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.2s' }}>
              <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover', transition: 'transform 0.3s', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }} sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 className="service-title" style={{ marginBottom: '1rem', color: '#b3a16b', fontWeight: 700 }}>{post.title}</h3>
                  <p className="service-description" style={{ color: '#666', marginBottom: '1.5rem' }}>{post.excerpt}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.95rem', color: '#b3a16b' }}>
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                  <span className="service-link" style={{ color: 'var(--accent)', fontWeight: 500 }}>Read More</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
} 