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
        <h1 className="text-4xl font-bold">Hey, I'm Carson Phillips</h1>
        <p className="text-lg max-w-xl mx-auto">
          A full stack developer focused on building performant, scalable, and
          meaningful web experiences using React, Node.js, and PostgreSQL.
        </p>
        {/*<div className="flex justify-center gap-4 mt-4">*/}
        {/*  <Link*/}
        {/*    href="/projects"*/}
        {/*    className="px-6 py-2 rounded-full bg-[var(--color-primary)] text-white hover:bg-[var(--color-hdarker)] transition"*/}
        {/*  >*/}
        {/*    View Projects*/}
        {/*  </Link>*/}
        {/*  <Link*/}
        {/*    href="/resume.pdf"*/}
        {/*    target="_blank"*/}
        {/*    className="px-6 py-2 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition"*/}
        {/*  >*/}
        {/*    Download Resume*/}
        {/*  </Link>*/}
        {/*</div>*/}
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
          I’m a student at Texas A&M University working toward a career in web development. I specialize in building
          full stack applications using React, Node.js, and PostgreSQL, and I’m always striving to improve my skills and
          learn new technologies. With every project, I aim to solve real problems, experiment with modern tools, or
          create something that challenges my thinking.
          <br/><br/>
          I'm currently open to summer internships, freelance work, or collaborative dev projects. If you're looking for
          a motivated, fast-learning developer who enjoys solving real-world problems with code, feel free to connect or
          check out my work.
        </p>
      </motion.section>

      {/* Website Outline Section */}
      <hr className="border-t border-[var(--color-darker)] dark:border-[var(--color-lighter)] my-12" />
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold">What’s On This Site?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Projects</strong> – A quick way to see what I can do, and what I'm comfortable with.
          </li>
          <li>
            <strong>Resume</strong> – A web version of my resume that makes it easier to read through my skills and
            experience. For a downloadable PDF you can refer to the footer at the bottom of the page.
          </li>
          <li>
            <strong>Blog</strong> – Monthly updates on what I'm currently working on, and what's to come.
          </li>
          <li>
            <strong>Feedback</strong> – Got ideas or feedback? Drop a quick note
            through the form linked in the footer.
          </li>
        </ul>
      </motion.section>
    </main>
  )
}
