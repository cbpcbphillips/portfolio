'use client'

import React, { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { projects } from './projects'
import MotionWrapper from '@/components/MotionWrapper'
import { motion } from 'framer-motion'

export default function ProjectsPage() {
  const categories = Array.from(new Set(projects.flatMap((p) => p.tags ?? []))).sort()
  const techs = Array.from(new Set(projects.flatMap((p) => p.stack))).sort()

  const categoryOptions = ['All', ...categories]
  const techOptions = ['All', ...techs]

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTech, setSelectedTech] = useState('All')

  const filtered = projects.filter((p) => {
    const byCategory = selectedCategory === 'All' || p.tags?.includes(selectedCategory)
    const byTech = selectedTech === 'All' || p.stack.includes(selectedTech)
    return byCategory && byTech
  })

  return (
    <main className="max-w-5xl mx-auto px-4 py-16 space-y-8">

      {/* Animated Header */}
      <MotionWrapper className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-lg text-[var(--color-darker)] dark:text-[var(--color-lighter)]">
          Filter by category or technology to quickly find projects.
        </p>
      </MotionWrapper>

      {/* Animated Filter Controls */}
      <MotionWrapper className="flex flex-wrap gap-6 justify-center">
        <div>
          <label htmlFor="category" className="block text-sm font-medium mb-1">
            Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="block w-40 rounded border px-3 py-2 bg-[var(--color-lighter)] dark:bg-[var(--color-darker)] border-[var(--color-darker)] dark:border-[var(--color-lighter)]"
          >
            {categoryOptions.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="tech" className="block text-sm font-medium mb-1">
            Technology
          </label>
          <select
            id="tech"
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
            className="block w-40 rounded border px-3 py-2 bg-[var(--color-lighter)] dark:bg-[var(--color-darker)] border-[var(--color-darker)] dark:border-[var(--color-lighter)]"
          >
            {techOptions.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>
      </MotionWrapper>

      {/* Animated Projects Grid */}
      <motion.section
        className="grid gap-6 sm:grid-cols-2"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {filtered.map((project) => (
          <motion.div
            key={project.slug}
            variants={{
              hidden: { opacity: 0, y: 15 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}

        {filtered.length === 0 && (
          <motion.p
            className="col-span-full text-center text-sm text-[var(--color-darker)] dark:text-[var(--color-lighter)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            No projects match those filters.
          </motion.p>
        )}
      </motion.section>
    </main>
  )
}
