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
        className="flex align-middle justify-center fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-darker bg-darker shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-lighter dark:border-lighter"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      >
        <nav className="flex items-center align-middle justify-center">
          <ul className="flex items-center align-middle gap-6">
            {navItems.map((item) => (
              <li
                key={item.link}
                className="flex items-center align-middle h-[2.75rem] w-[7.5rem] rounded-full border border-lighter dark:border-darker bg-lighter dark:bg-darker text-darker hover:text-hdarker dark:text-lighter dark:hover:text-hlighter justify-center align-middle"
              >
                <Link
                  href={item.link}
                  className="flex items-center align-middle text-[1.5rem]"
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
