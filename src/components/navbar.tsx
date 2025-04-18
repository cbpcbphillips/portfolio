'use client'

import React from 'react'
import Link from 'next/link'
import '../styles/globals.css'
import { motion } from 'framer-motion'

export default function Navbar() {
  const navItems = [
    { name: 'Home', link: '/home' },
    { name: 'Resume', link: '/resume' },
    { name: 'Blog', link: '/blog' },
    { name: 'Projects', link: '/projects' },
  ]

  return (
    <header className="relative z-[999]">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-5xl mx-auto mt-6 h-[3.25rem] flex justify-center rounded-full border border-[var(--color-darker)] bg-[var(--color-darker)] dark:bg-[var(--color-lighter)] dark:border-[var(--color-lighter)] sm:w-[35rem] shadow-md shadow-black/[0.03] backdrop-blur-md"
      >
        <nav className="flex items-center justify-center w-full">
          <ul className="flex gap-6 px-4">
            {navItems.map((item) => (
              <li key={item.link} className="transition">
                <Link
                  href={item.link}
                  className="flex items-center justify-center h-[2.75rem] w-[7.5rem] rounded-full border border-[var(--color-lighter)] dark:border-[var(--color-darker)] bg-[var(--color-lighter)] dark:bg-[var(--color-darker)] text-[var(--color-darker)] dark:text-[var(--color-lighter)] text-lg font-medium hover:text-[var(--color-hdarker)] dark:hover:text-[var(--color-hlighter)] transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  )
}
