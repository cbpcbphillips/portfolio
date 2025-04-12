import React from 'react'
import Link from 'next/link'
import '../app/globals.css'

export default function Navbar() {
  const navItems = [
    { name: 'Home', link: '/home' },
    { name: 'Resume', link: '/resume' },
    { name: 'Blog', link: '/blog' },
    { name: 'Projects', link: '/projects' }
  ]

  return (
    <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between border-b-secondary bg-lighter p-4 dark:bg-darker">
      <div className="text-xl font-bold text-darker dark:text-lighter">
        Carson Phillips Portfolio
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <ul className="flex flex-wrap items-center gap-6">
          {navItems.map(item => (
            <li key={item.link}>
              <Link
                href={item.link}
                className="text-darker hover:text-hdarker dark:text-lighter dark:hover:text-hlighter transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
