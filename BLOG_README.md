# Blog Post Management Guide

## Quick Start

### Creating a New Blog Post

1. Navigate to `/src/content/blog/`
2. Create a new `.mdx` file (e.g., `my-new-post.mdx`)
3. Copy this template:

```mdx
---
title: "Your Blog Post Title"
date: "2024-01-20"
excerpt: "A short description that appears in blog listings"
image: "/images/prev1.webp"
author: "Anne Nguyen"
category: "Aftercare Tips"
readTime: "5 min read"
keywords: "microblading, eyebrows, melbourne"
---

# Your Main Heading

Write your content here using markdown...

## Subheadings

Regular paragraph text goes here.

**Bold text** and *italic text* are supported.

### Lists

- Bullet point 1
- Bullet point 2
- Bullet point 3

1. Numbered item 1
2. Numbered item 2
3. Numbered item 3

### Links

[Link to booking](https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429)

### Images

![Alt text](/images/your-image.webp)
```

## File Naming Convention

- Use lowercase with hyphens: `my-awesome-post.mdx`
- The filename becomes the URL: `/blog/my-awesome-post`
- Keep it short and SEO-friendly

## Available Images

Use these existing images in your posts:
- `/images/prev1.webp` - Gallery preview 1
- `/images/prev2.webp` - Gallery preview 2  
- `/images/prev3.webp` - Gallery preview 3
- `/images/prev4.webp` - Gallery preview 4
- `/images/prev5.webp` - Gallery preview 5
- `/images/prev6.webp` - Gallery preview 6

## How to Edit Posts

### Local Development
```bash
# 1. Start development server
npm run dev

# 2. Navigate to http://localhost:3000/blog
# 3. Edit any .mdx file in /src/content/blog/
# 4. Changes appear instantly with hot reload
```

### Publishing Changes
```bash
# 1. Add your changes
git add .

# 2. Commit with a message
git commit -m "Add new blog post about [topic]"

# 3. Push to GitHub
git push

# Vercel will auto-deploy in ~45 seconds
```

## How to Delete Posts

Simply delete the `.mdx` file from `/src/content/blog/` and push changes.

## Blog Post Fields Explained

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| title | Yes | Post title | "Microblading Aftercare Guide" |
| date | Yes | Publication date | "2024-01-20" |
| excerpt | Yes | Short description | "Learn the essential aftercare steps..." |
| image | Yes | Featured image path | "/images/prev1.webp" |
| author | No | Author name | "Anne Nguyen" |
| category | No | Post category | "Aftercare Tips" |
| readTime | No | Estimated read time | "5 min read" |
| keywords | No | SEO keywords | "microblading, melbourne, eyebrows" |

## Common Issues & Solutions

### Issue: Image not showing
**Solution**: Make sure the image exists in `/public/images/` and path starts with `/images/`

### Issue: Post not appearing on blog page
**Solution**: Check that the date format is correct (YYYY-MM-DD) and the file has `.mdx` extension

### Issue: Broken links
**Solution**: Use full URLs for external links or proper paths for internal links:
- External: `https://example.com`
- Internal: `/services/microblading`
- Booking: `https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429`

## SEO Best Practices

1. **Title**: Keep under 60 characters
2. **Excerpt**: Keep under 160 characters for meta description
3. **Keywords**: Include relevant search terms in content naturally
4. **Images**: Use descriptive alt text
5. **Headings**: Use proper heading hierarchy (H1, H2, H3)
6. **Links**: Link to relevant internal pages and services

## Example Blog Posts

Check these existing posts for reference:
- `microblading-aftercare-complete-guide.mdx`
- `eyebrow-trends-2024.mdx`
- `ultimate-brow-guide.mdx`

## Need Help?

- View your blog: http://localhost:3000/blog (development)
- Production blog: https://mdbrows.com.au/blog
- All blog files: `/src/content/blog/`