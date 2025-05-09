'use client'

import BlogPostCard from '@/components/BlogPostCard'
import { blogPosts } from './posts'
import MotionWrapper from '@/components/MotionWrapper'
import { motion } from 'framer-motion'

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 space-y-12 text-[var(--color-darker)] dark:text-[var(--color-lighter)]">

      {/* Animated Header */}
      <MotionWrapper className="text-center space-y-4">
        <h1 className="text-4xl font-bold">My Blog</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Monthly updates, development logs, and lessons from my journey as a
          student and developer.
        </p>
      </MotionWrapper>

      {/* Staggered Animated Blog Cards */}
      <motion.section
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="grid gap-6 sm:grid-cols-2"
      >
        {blogPosts.map((post) => (
          <motion.div
            key={post.slug}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <BlogPostCard {...post} />
          </motion.div>
        ))}
      </motion.section>
    </main>
  )
}
