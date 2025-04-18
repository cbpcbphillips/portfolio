'use client'

import BlogPostCard from '@/components/BlogPostCard'
import { blogPosts } from './posts'

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 space-y-12 text-[var(--color-darker)] dark:text-[var(--color-lighter)]">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">My Blog</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Monthly updates, development logs, and lessons from my journey as a student and developer.
        </p>
      </section>

      <section className="grid gap-6">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.slug} {...post} />
        ))}
      </section>
    </main>
  )
}
