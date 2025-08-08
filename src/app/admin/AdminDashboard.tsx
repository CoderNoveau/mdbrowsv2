'use client';

import { useState } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from './admin.module.css';

type TabType = 'overview' | 'api' | 'blog' | 'gallery' | 'social' | 'reviews' | 'analytics';

export default function AdminDashboard({ session }: { session: any }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const handleLogout = async () => {
    await signOut({ 
      callbackUrl: '/admin/login',
      redirect: true 
    });
  };

  return (
    <div className={styles.adminContainer}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2>MDB Admin</h2>
          <p>Welcome, {session.username}</p>
        </div>
        
        <nav className={styles.sidebarNav}>
          <button 
            className={`${styles.navButton} ${activeTab === 'overview' ? styles.active : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            📊 Overview
          </button>
          <button 
            className={`${styles.navButton} ${activeTab === 'api' ? styles.active : ''}`}
            onClick={() => setActiveTab('api')}
          >
            🔧 API Settings
          </button>
          <button 
            className={`${styles.navButton} ${activeTab === 'blog' ? styles.active : ''}`}
            onClick={() => setActiveTab('blog')}
          >
            ✍️ Blog Posts
          </button>
          <button 
            className={`${styles.navButton} ${activeTab === 'gallery' ? styles.active : ''}`}
            onClick={() => setActiveTab('gallery')}
          >
            🖼️ Gallery
          </button>
          <button 
            className={`${styles.navButton} ${activeTab === 'social' ? styles.active : ''}`}
            onClick={() => setActiveTab('social')}
          >
            📱 Social Media
          </button>
          <button 
            className={`${styles.navButton} ${activeTab === 'reviews' ? styles.active : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            ⭐ Reviews
          </button>
          <button 
            className={`${styles.navButton} ${activeTab === 'analytics' ? styles.active : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            📈 Analytics
          </button>
        </nav>
        
        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'api' && <ApiSettingsTab />}
        {activeTab === 'blog' && <BlogTab />}
        {activeTab === 'gallery' && <GalleryTab />}
        {activeTab === 'social' && <SocialMediaTab />}
        {activeTab === 'reviews' && <ReviewsTab />}
        {activeTab === 'analytics' && <AnalyticsTab />}
      </main>
    </div>
  );
}

// Overview Tab
function OverviewTab() {
  return (
    <div className={styles.tabContent}>
      <h1>Dashboard Overview</h1>
      
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3>Total Reviews</h3>
          <p className={styles.statNumber}>156</p>
          <span className={styles.statChange}>+12 this month</span>
        </div>
        <div className={styles.statCard}>
          <h3>Blog Posts</h3>
          <p className={styles.statNumber}>8</p>
          <span className={styles.statChange}>2 drafts</span>
        </div>
        <div className={styles.statCard}>
          <h3>Gallery Images</h3>
          <p className={styles.statNumber}>48</p>
          <span className={styles.statChange}>Last updated 2 days ago</span>
        </div>
        <div className={styles.statCard}>
          <h3>Social Posts</h3>
          <p className={styles.statNumber}>24</p>
          <span className={styles.statChange}>3 scheduled</span>
        </div>
      </div>

      <div className={styles.recentActivity}>
        <h2>Recent Activity</h2>
        <ul className={styles.activityList}>
          <li>New 5-star review from Sarah M. - 2 hours ago</li>
          <li>Instagram post scheduled for tomorrow - 5 hours ago</li>
          <li>Blog post "Winter Brow Trends" published - 1 day ago</li>
          <li>Gallery updated with 5 new images - 2 days ago</li>
        </ul>
      </div>
    </div>
  );
}

// API Settings Tab
function ApiSettingsTab() {
  const [apis, setApis] = useState({
    googlePlacesKey: '',
    googlePlaceId: '',
    instagramToken: '',
    facebookToken: '',
    openaiKey: '',
  });

  const handleSaveApis = async () => {
    // Save to environment variables or database
    alert('API settings saved! (In production, this would update the server config)');
  };

  return (
    <div className={styles.tabContent}>
      <h1>API Settings</h1>
      <p className={styles.description}>Configure your third-party API integrations</p>
      
      <div className={styles.apiForm}>
        <div className={styles.apiSection}>
          <h3>Google APIs</h3>
          <div className={styles.formGroup}>
            <label>Google Places API Key</label>
            <input
              type="text"
              value={apis.googlePlacesKey}
              onChange={(e) => setApis({ ...apis, googlePlacesKey: e.target.value })}
              placeholder="AIza..."
            />
          </div>
          <div className={styles.formGroup}>
            <label>Google Place ID</label>
            <input
              type="text"
              value={apis.googlePlaceId}
              onChange={(e) => setApis({ ...apis, googlePlaceId: e.target.value })}
              placeholder="ChIJ..."
            />
          </div>
        </div>

        <div className={styles.apiSection}>
          <h3>Social Media APIs</h3>
          <div className={styles.formGroup}>
            <label>Instagram Access Token</label>
            <input
              type="text"
              value={apis.instagramToken}
              onChange={(e) => setApis({ ...apis, instagramToken: e.target.value })}
              placeholder="IGQVJz..."
            />
          </div>
          <div className={styles.formGroup}>
            <label>Facebook Page Token</label>
            <input
              type="text"
              value={apis.facebookToken}
              onChange={(e) => setApis({ ...apis, facebookToken: e.target.value })}
              placeholder="EAAz..."
            />
          </div>
        </div>

        <div className={styles.apiSection}>
          <h3>AI & Analytics</h3>
          <div className={styles.formGroup}>
            <label>OpenAI API Key (for content generation)</label>
            <input
              type="text"
              value={apis.openaiKey}
              onChange={(e) => setApis({ ...apis, openaiKey: e.target.value })}
              placeholder="sk-..."
            />
          </div>
        </div>

        <button className={styles.saveButton} onClick={handleSaveApis}>
          Save API Settings
        </button>
      </div>
    </div>
  );
}

// Blog Tab
function BlogTab() {
  const [showEditor, setShowEditor] = useState(false);
  const [blogPost, setBlogPost] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featured: false,
    published: false,
  });

  return (
    <div className={styles.tabContent}>
      <div className={styles.tabHeader}>
        <h1>Blog Posts</h1>
        <button className={styles.primaryButton} onClick={() => setShowEditor(!showEditor)}>
          {showEditor ? 'View Posts' : 'New Post'}
        </button>
      </div>

      {showEditor ? (
        <div className={styles.blogEditor}>
          <div className={styles.formGroup}>
            <label>Title</label>
            <input
              type="text"
              value={blogPost.title}
              onChange={(e) => setBlogPost({ ...blogPost, title: e.target.value })}
              placeholder="Enter blog post title"
            />
          </div>
          
          <div className={styles.formGroup}>
            <label>Slug</label>
            <input
              type="text"
              value={blogPost.slug}
              onChange={(e) => setBlogPost({ ...blogPost, slug: e.target.value })}
              placeholder="url-friendly-slug"
            />
          </div>
          
          <div className={styles.formGroup}>
            <label>Excerpt</label>
            <textarea
              value={blogPost.excerpt}
              onChange={(e) => setBlogPost({ ...blogPost, excerpt: e.target.value })}
              placeholder="Brief description for SEO and previews"
              rows={3}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label>Content (Markdown/MDX)</label>
            <textarea
              value={blogPost.content}
              onChange={(e) => setBlogPost({ ...blogPost, content: e.target.value })}
              placeholder="Write your blog post in Markdown..."
              rows={15}
              className={styles.contentEditor}
            />
          </div>
          
          <div className={styles.formActions}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={blogPost.featured}
                onChange={(e) => setBlogPost({ ...blogPost, featured: e.target.checked })}
              />
              Featured Post
            </label>
            <button className={styles.secondaryButton}>Save Draft</button>
            <button className={styles.primaryButton}>Publish</button>
          </div>
        </div>
      ) : (
        <div className={styles.blogList}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ultimate Brow Care Guide</td>
                <td><span className={styles.badge}>Published</span></td>
                <td>Dec 15, 2024</td>
                <td>
                  <button className={styles.linkButton}>Edit</button>
                  <button className={styles.linkButton}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Winter Brow Trends 2024</td>
                <td><span className={styles.badge}>Draft</span></td>
                <td>Dec 10, 2024</td>
                <td>
                  <button className={styles.linkButton}>Edit</button>
                  <button className={styles.linkButton}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Gallery Tab
function GalleryTab() {
  return (
    <div className={styles.tabContent}>
      <div className={styles.tabHeader}>
        <h1>Gallery Management</h1>
        <button className={styles.primaryButton}>Upload Images</button>
      </div>
      
      <div className={styles.galleryGrid}>
        <div className={styles.galleryItem}>
          <img src="/images/gallery/gallery1.webp" alt="Gallery 1" />
          <div className={styles.galleryActions}>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
        <div className={styles.galleryItem}>
          <img src="/images/gallery/gallery2.webp" alt="Gallery 2" />
          <div className={styles.galleryActions}>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
        <div className={styles.uploadBox}>
          <div className={styles.uploadPlaceholder}>
            <span>+</span>
            <p>Drop images here or click to upload</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Social Media Tab
function SocialMediaTab() {
  const [postContent, setPostContent] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    instagram: true,
    facebook: true,
  });

  return (
    <div className={styles.tabContent}>
      <h1>Social Media Management</h1>
      
      <div className={styles.socialContainer}>
        <div className={styles.postComposer}>
          <h3>Create New Post</h3>
          
          <div className={styles.formGroup}>
            <label>Post Content</label>
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="What's on your mind? Use #hashtags and @mentions"
              rows={6}
            />
            <span className={styles.charCount}>{postContent.length}/2200</span>
          </div>
          
          <div className={styles.platformSelector}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={selectedPlatforms.instagram}
                onChange={(e) => setSelectedPlatforms({ ...selectedPlatforms, instagram: e.target.checked })}
              />
              Instagram
            </label>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={selectedPlatforms.facebook}
                onChange={(e) => setSelectedPlatforms({ ...selectedPlatforms, facebook: e.target.checked })}
              />
              Facebook
            </label>
          </div>
          
          <div className={styles.postActions}>
            <button className={styles.secondaryButton}>Schedule</button>
            <button className={styles.primaryButton}>Post Now</button>
          </div>
        </div>
        
        <div className={styles.scheduledPosts}>
          <h3>Scheduled Posts</h3>
          <div className={styles.postList}>
            <div className={styles.postItem}>
              <p>New microblading technique announcement...</p>
              <span className={styles.postMeta}>Instagram • Tomorrow at 10:00 AM</span>
            </div>
            <div className={styles.postItem}>
              <p>Client transformation Tuesday! Check out...</p>
              <span className={styles.postMeta}>Instagram, Facebook • Dec 20 at 2:00 PM</span>
            </div>
          </div>
        </div>
        
        <div className={styles.socialAnalytics}>
          <h3>Recent Performance</h3>
          <div className={styles.socialStats}>
            <div className={styles.socialStat}>
              <span>Instagram Followers</span>
              <strong>2,435</strong>
              <small>+124 this month</small>
            </div>
            <div className={styles.socialStat}>
              <span>Engagement Rate</span>
              <strong>5.8%</strong>
              <small>+0.5% vs last month</small>
            </div>
            <div className={styles.socialStat}>
              <span>Total Reach</span>
              <strong>12.4K</strong>
              <small>Last 30 days</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reviews Tab
function ReviewsTab() {
  return (
    <div className={styles.tabContent}>
      <h1>Review Management</h1>
      
      <div className={styles.reviewStats}>
        <div className={styles.reviewStat}>
          <h3>Average Rating</h3>
          <p className={styles.rating}>4.9 ⭐</p>
        </div>
        <div className={styles.reviewStat}>
          <h3>Total Reviews</h3>
          <p>156</p>
        </div>
        <div className={styles.reviewStat}>
          <h3>Response Rate</h3>
          <p>98%</p>
        </div>
      </div>
      
      <div className={styles.reviewList}>
        <h3>Recent Reviews</h3>
        <div className={styles.reviewItem}>
          <div className={styles.reviewHeader}>
            <strong>Sarah Mitchell</strong>
            <span>⭐⭐⭐⭐⭐</span>
            <span className={styles.reviewDate}>2 hours ago</span>
          </div>
          <p className={styles.reviewText}>
            Anne is absolutely amazing! She transformed my barely-there brows into perfectly shaped, natural-looking brows.
          </p>
          <div className={styles.reviewActions}>
            <button className={styles.linkButton}>Reply</button>
            <button className={styles.linkButton}>Share</button>
            <button className={styles.linkButton}>Report</button>
          </div>
        </div>
        
        <div className={styles.reviewItem}>
          <div className={styles.reviewHeader}>
            <strong>Lisa Chen</strong>
            <span>⭐⭐⭐⭐⭐</span>
            <span className={styles.reviewDate}>1 day ago</span>
          </div>
          <p className={styles.reviewText}>
            I've been getting my brows done by Anne for 2 years now and she never disappoints.
          </p>
          <div className={styles.reviewActions}>
            <button className={styles.linkButton}>Reply</button>
            <button className={styles.linkButton}>Share</button>
            <button className={styles.linkButton}>Report</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Analytics Tab
function AnalyticsTab() {
  return (
    <div className={styles.tabContent}>
      <h1>Analytics Dashboard</h1>
      
      <div className={styles.analyticsGrid}>
        <div className={styles.analyticsCard}>
          <h3>Website Traffic</h3>
          <div className={styles.chart}>
            <p className={styles.bigNumber}>8,432</p>
            <p className={styles.chartLabel}>Visitors this month</p>
            <span className={styles.trend}>↑ 15% from last month</span>
          </div>
        </div>
        
        <div className={styles.analyticsCard}>
          <h3>Top Pages</h3>
          <ul className={styles.topList}>
            <li>
              <span>/services/microblading</span>
              <strong>2,341 views</strong>
            </li>
            <li>
              <span>/pricing</span>
              <strong>1,892 views</strong>
            </li>
            <li>
              <span>/gallery</span>
              <strong>1,567 views</strong>
            </li>
          </ul>
        </div>
        
        <div className={styles.analyticsCard}>
          <h3>Conversion Rate</h3>
          <div className={styles.chart}>
            <p className={styles.bigNumber}>3.8%</p>
            <p className={styles.chartLabel}>Booking conversion</p>
            <span className={styles.trend}>↑ 0.5% from last month</span>
          </div>
        </div>
        
        <div className={styles.analyticsCard}>
          <h3>Traffic Sources</h3>
          <ul className={styles.sourceList}>
            <li>
              <span>Google</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '65%' }}></div>
              </div>
              <strong>65%</strong>
            </li>
            <li>
              <span>Instagram</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '20%' }}></div>
              </div>
              <strong>20%</strong>
            </li>
            <li>
              <span>Direct</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '15%' }}></div>
              </div>
              <strong>15%</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}