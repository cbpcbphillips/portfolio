'use client'

import SkillCard from '@/components/SkillCard'
import ProjectItem from '@/components/ProjectItem'
import MotionWrapper from '@/components/MotionWrapper'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ResumePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 space-y-16 text-[var(--color-darker)] dark:text-[var(--color-lighter)]">

      {/* Download Button */}
      <MotionWrapper className="text-center">
        <Link
          href="/resume.pdf"
          target="_blank"
          className="inline-block px-6 py-2 border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition rounded-full"
        >
          Download PDF Resume
        </Link>
      </MotionWrapper>

      {/* Professional Summary */}
      <MotionWrapper className="space-y-4 border-l-4 pl-4 border-[var(--color-primary)]">
        <h2 className="text-2xl font-semibold">Professional Summary</h2>
        <p>
          I&apos;m a student at Texas A&amp;M University pursuing a career in full stack web development...
        </p>
      </MotionWrapper>

      {/* Technical Skills */}
      <MotionWrapper className="space-y-4 border-l-4 pl-4 border-[var(--color-primary)]">
        <h2 className="text-2xl font-semibold">Technical Skills</h2>

        {[
          { label: 'Languages', items: ['C++', 'Python', 'Java', 'JavaScript', 'TypeScript'], icons: ['cpp.svg', 'python.svg', 'java.svg', 'javascript.svg', 'typescript.svg'] },
          { label: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'], icons: ['react.svg', 'nextjs.svg', 'tailwind.svg'] },
          { label: 'Backend', items: ['Node.js', 'Firebase'], icons: ['nodejs.svg', 'firebase.svg'] },
          { label: 'Databases', items: ['PostgreSQL'], icons: ['postgresql.svg'] },
        ].map(({ label, items, icons }) => (
          <div key={label} className="space-y-2">
            <h3 className="text-lg font-medium">{label}</h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.07 },
                },
              }}
            >
              {items.map((item, i) => (
                <motion.div
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <SkillCard item={item} iconUrl={icons[i]} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </MotionWrapper>

      {/* Projects */}
      <MotionWrapper className="space-y-4 border-l-4 pl-4 border-[var(--color-primary)]">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <motion.ul
          className="space-y-4"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {[
            {
              title: 'Developer Portfolio Website',
              description: 'Built a personal portfolio with Next.js and Tailwind CSS...',
              link: 'https://github.com/cbpcbphillips/portfolio',
            },
            {
              title: 'LeetCode Solutions Repository',
              description: 'Documented solutions to LeetCode problems using C++...',
              link: 'https://github.com/cbpcbphillips/Leetcode-Solutions',
            },
          ].map((project) => (
            <motion.li
              key={project.title}
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4 }}
            >
              <ProjectItem {...project} />
            </motion.li>
          ))}
        </motion.ul>
      </MotionWrapper>

      {/* Education */}
      <MotionWrapper className="space-y-4 border-l-4 pl-4 border-[var(--color-primary)]">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p>
          <strong>Texas A&amp;M University</strong><br />
          B.A. in Computing, Expected Graduation: May 2027<br />
          Relevant Coursework: Data Structures, Algorithms, Web Development, Databases
        </p>
      </MotionWrapper>

      {/* Experience */}
      <MotionWrapper className="space-y-4 border-l-4 pl-4 border-[var(--color-primary)]">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <p>
          <strong>Student Technician</strong> — Texas A&amp;M Transportation Institute<br />
          March 2024 – Present
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Supported audit readiness by reconciling SCCM and Intune data.</li>
          <li>Managed device lifecycle tasks including enrollment, configuration, and retirement.</li>
        </ul>
      </MotionWrapper>

      {/* Certifications & Achievements */}
      <MotionWrapper className="space-y-4 border-l-4 pl-4 border-[var(--color-primary)]">
        <h2 className="text-2xl font-semibold">Certifications & Achievements</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Stellar Student Award, Texas A&amp;M Transportation Institute (Q4 2025)</li>
          <li>Participant, Toyota Hackathon – Built vehicle quiz recommender app</li>
          <li>Active Member, Aggie Competitive Coding Club and Aggie Data Science Club</li>
        </ul>
      </MotionWrapper>

      {/* Call to Action */}
      <MotionWrapper className="text-center space-y-2">
        <h2 className="text-xl font-semibold">Let&apos;s Connect</h2>
        <p>
          Interested in working together or want to learn more? Reach out through the contact info in the footer or drop feedback through the form.
        </p>
      </MotionWrapper>
    </main>
  )
}
