'use client'

import React, { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { projects } from './projects'

export default function ProjectsPage() {
  const categories = Array.from(
    new Set(projects.flatMap((p) => p.tags ?? []))
  ).sort()
  const techs = Array.from(new Set(projects.flatMap((p) => p.stack))).sort()

  const categoryOptions = ['All', ...categories]
  const techOptions = ['All', ...techs]

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTech, setSelectedTech] = useState('All')

  const filtered = projects.filter((p) => {
    const byCategory =
      selectedCategory === 'All' || p.tags?.includes(selectedCategory)
    const byTech = selectedTech === 'All' || p.stack.includes(selectedTech)
    return byCategory && byTech
  })

  return (
    <main className="max-w-5xl mx-auto px-4 py-16 space-y-8">
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-lg text-[var(--color-darker)] dark:text-[var(--color-lighter)]">
          Filter by category or technology to quickly find projects.
        </p>
      </section>

      <div className="flex flex-wrap gap-6 justify-center">
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
      </div>

      <section className="grid gap-6 sm:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-center text-sm text-[var(--color-darker)] dark:text-[var(--color-lighter)]">
            No projects match those filters.
          </p>
        )}
      </section>
    </main>
  )
}
