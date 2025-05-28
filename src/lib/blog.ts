import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  image: string
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export async function getAllPosts(): Promise<BlogPost[]> {
  const filenames = fs.readdirSync(postsDirectory);
  const posts: BlogPost[] = filenames
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      return {
        slug: data.slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        image: data.image,
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
} 