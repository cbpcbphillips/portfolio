'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  github: string
  demo?: string
  tags?: string[]
  image: string
}

export default function ProjectCard({
  title,
  description,
  github,
  demo,
  tags,
  image,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="border rounded-xl p-4 space-y-3 shadow-sm border-[var(--color-darker)] dark:border-[var(--color-lighter)]"
    >
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt="project thumbnail"
          className="h-12 w-12 rounded-sm"
        />
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex flex-wrap gap-2 mt-1 text-xs text-[var(--color-primary)]">
            {tags?.map((tag) => (
              <span
                key={tag}
                className="bg-[var(--color-lighter)] dark:bg-[var(--color-darker)] px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm">{description}</p>

      <div className="flex gap-4 mt-2">
        <a
          href={github}
          target="_blank"
          className="underline hover:text-[var(--color-primary)]"
        >
          GitHub
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            className="underline hover:text-[var(--color-primary)]"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}
