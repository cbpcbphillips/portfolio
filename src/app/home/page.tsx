'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 space-y-24 text-[var(--color-darker)] dark:text-[var(--color-lighter)]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold">Hey, I&apos;m Carson Phillips</h1>
        <p className="text-lg max-w-xl mx-auto">
          A full stack developer focused on building performant, scalable, and meaningful web experiences using React, Node.js, and PostgreSQL.
        </p>
      </motion.section>

      {/* About Me Section */}
      <hr className="border-t border-[var(--color-darker)] dark:border-[var(--color-lighter)] my-12" />
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>
          I&apos;m a student at Texas A&amp;M University working toward a career in web development. I specialize in building full stack applications using React, Node.js, and PostgreSQL, and I&apos;m always striving to improve my skills and learn new technologies. With every project, I aim to solve real problems, experiment with modern tools, or create something that challenges my thinking.
          <br />
          <br />
          I&apos;m currently open to summer internships, freelance work, or collaborative dev projects. If you&apos;re looking for a motivated, fast-learning developer who enjoys solving real-world problems with code, feel free to connect or check out my work.
        </p>
      </motion.section>

      {/* Website Outline */}
      <hr className="border-t border-[var(--color-darker)] dark:border-[var(--color-lighter)] my-12" />
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold">What&apos;s On This Site?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Projects</strong> – A quick way to see what I can do and what I&apos;m comfortable with.</li>
          <li><strong>Resume</strong> – A web version of my resume with a downloadable PDF link in the footer.</li>
          <li><strong>Blog</strong> – Monthly updates on what I&apos;m working on and learning.</li>
          <li><strong>Feedback</strong> – Drop feedback through the contact form in the footer.</li>
        </ul>
      </motion.section>
    </main>
  )
}
