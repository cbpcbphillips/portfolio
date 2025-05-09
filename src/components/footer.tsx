'use client'

import React from 'react'
import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-12 border-t border-[var(--color-lighter)] dark:border-[var(--color-darker)] px-4 py-10 text-[var(--color-lighter)] dark:text-[var(--color-darker)] bg-[var(--color-darker)] dark:bg-[var(--color-lighter)]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
        {/* Left Column */}
        <div>
          <h4 className="font-bold mb-2">Contact</h4>
          <p>
            Phone: <a className="underline">(936)-404-3346</a>
          </p>
          <p>
            Email:{' '}
            <a href="mailto:cbpcbphillips@gmail.com" className="underline">
              cbpcbphillips@gmail.com
            </a>
          </p>
          <div className="flex gap-4 mt-3">
            <a
              href="https://github.com/cbpcbphillips"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 hover:opacity-70 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/cbpcbphillips/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 hover:opacity-70 transition" />
            </a>
          </div>
        </div>

        {/* Middle Column */}
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/resume.pdf" target="_blank" className="underline">
                Download Resume
              </Link>
            </li>
            <li>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe4T_fEpPF5zedc3DUMTdDjWsDlwsQj8vrmhjniZrB0nILlsQ/viewform?usp=dialog"
                target="_blank"
                className="underline"
              >
                Feedback Form
              </a>
            </li>
            <li>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="underline cursor-pointer"
              >
                Back to Top
              </button>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h4 className="font-bold mb-2">Site Info</h4>
          <p>Built with Next.js, Tailwind CSS, Framer Motion</p>
          <p className="mt-2">
            © {year} Carson Phillips. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
