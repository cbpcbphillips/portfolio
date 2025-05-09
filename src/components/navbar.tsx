'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import DarkModeToggle from './DarkModeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', link: '/home' },
    { name: 'Resume', link: '/resume' },
    { name: 'Blog', link: '/blog' },
    { name: 'Projects', link: '/projects' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-lighter)] dark:border-[var(--color-darker)] bg-[var(--color-darker)] dark:bg-[var(--color-lighter)] text-[var(--color-lighter)] dark:text-[var(--color-darker)] shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6">
        {/* Left: Logo or name */}
        <Link href="/home" className="text-xl font-semibold">
          Carson Phillips
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="text-sm font-medium hover:underline"
            >
              {item.name}
            </Link>
          ))}
          <DarkModeToggle />
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[var(--color-lighter)] dark:border-[var(--color-darker)] px-4 py-4 space-y-2 bg-[var(--color-darker)] dark:bg-[var(--color-lighter)]">
          {navItems.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="block text-sm font-medium hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4">
            <DarkModeToggle />
          </div>
        </div>
      )}
    </header>
  )
}
