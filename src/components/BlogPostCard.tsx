'use client'

import Link from 'next/link'

interface BlogPostCardProps {
  slug: string
  title: string
  summary: string
  date: string
}

export default function BlogPostCard({
  slug,
  title,
  summary,
  date,
}: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block border border-[var(--color-darker)] dark:border-[var(--color-lighter)] rounded-xl p-4 hover:shadow-md hover:scale-[1.01] transition-all"
    >
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-[var(--color-primary)]">{date}</p>
      <p className="mt-2 text-sm">{summary}</p>
    </Link>
  )
}
