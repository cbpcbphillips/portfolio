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
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-1/2 w-full h-[4.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[35rem] flex justify-center rounded-none sm:rounded-full border border-[var(--color-darker)] bg-[var(--color-darker)] dark:bg-[var(--color-lighter)] dark:border-[var(--color-lighter)] shadow-lg shadow-black/[0.03] backdrop-blur-md -translate-x-1/2"
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
