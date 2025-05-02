'use client'
import SkillCard from '@/components/SkillCard'
import ProjectItem from '@/components/ProjectItem'
import React from 'react'
import Link from 'next/link'

export default function ResumePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 space-y-16 text-[var(--color-darker)] dark:text-[var(--color-lighter)]">

      {/* Download Button */}
      <div className="text-center">
        <Link
          href="/resume.pdf"
          target="_blank"
          className="inline-block px-6 py-2 border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition rounded-full"
        >
          Download PDF Resume
        </Link>
      </div>

      {/* Professional Summary */}
      <section className="space-y-4 border-l-4 pl-4 border-[var(--color-primary)]">
        <h2 className="text-2xl font-semibold">Professional Summary</h2>
        <p>
          I'm a student at Texas A&M University pursuing a career in full stack web development.
          I specialize in React, Node.js, and PostgreSQL, and enjoy creating clean, scalable applications that solve real-world problems.
          I thrive in collaborative environments, embrace continuous learning, and aim to deliver meaningful and user-focused solutions.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="space-y-4 border-l-4 pl-4 border-[var(--color-primary)]">
        <h2 className="text-2xl font-semibold">Technical Skills</h2>

        {/* Languages */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Languages</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <SkillCard iconUrl="cpp.svg" item="C++" />
            <SkillCard iconUrl="python.svg" item="Python" />
            <SkillCard iconUrl="java.svg" item="Java" />
            <SkillCard iconUrl="javascript.svg" item="JavaScript" />
            <SkillCard iconUrl="typescript.svg" item="TypeScript" />
          </div>
        </div>

        {/* Frontend */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Frontend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <SkillCard iconUrl="react.svg" item="React" />
            <SkillCard iconUrl="nextjs.svg" item="Next.js" />
            <SkillCard iconUrl="tailwind.svg" item="Tailwind CSS" />
          </div>
        </div>

        {/* Backend */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Backend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <SkillCard iconUrl="nodejs.svg" item="Node.js" />
            <SkillCard iconUrl="firebase.svg" item="Firebase" />
          </div>
        </div>

        {/* Databases */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Databases</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <SkillCard iconUrl="postgresql.svg" item="PostgreSQL" />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="space-y-4 border-l-4 pl-4 border-[var(--color-primary)]">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="space-y-4">
          <ProjectItem
            title="Developer Portfolio Website"
            description="Built a personal portfolio with Next.js and Tailwind CSS to showcase skills and projects. Implemented routing, dark mode, and responsive design for a seamless user experience."
            link="https://github.com/cbpcbphillips/portfolio"
          />
          <ProjectItem
            title="LeetCode Solutions Repository"
            description="Documented solutions to LeetCode problems using C++, organized by topic and optimized for readability. Includes explanations and solution patterns."
            link="https://github.com/cbpcbphillips/Leetcode-Solutions"
          />
        </ul>
      </section>

      {/* Education */}
      <section className="space-y-4 border-l-4 pl-4 border-[var(--color-primary)]">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p>
          <strong>Texas A&M University</strong><br />
          B.A. in Computing, Expected Graduation: May 2027<br />
          Relevant Coursework: Data Structures, Algorithms, Web Development, Databases
        </p>
      </section>

      {/* Experience */}
      <section className="space-y-4 border-l-4 pl-4 border-[var(--color-primary)]">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <p>
          <strong>Student Technician</strong> — Texas A&M Transportation Institute<br />
          March 2024 – Present
        </p>
        <p>
          Provide technical support as part of the helpdesk team, assisting users with hardware, software, and connectivity issues. Manage and maintain institutional devices using Microsoft Intune and SCCM, ensuring compliance and smooth operations. Supported audit preparation by reconciling inventory and resolving sync issues.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Supported audit readiness by reconciling SCCM and Intune data.</li>
          <li>Managed device lifecycle tasks including enrollment, configuration, and retirement.</li>
        </ul>
      </section>

      {/* Certifications & Achievements */}
      <section className="space-y-4 border-l-4 pl-4 border-[var(--color-primary)]">
        <h2 className="text-2xl font-semibold">Certifications & Achievements</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Stellar Student Award, Texas A&M Transportation Institute (Q4 2025)</li>
          <li>Participant, Toyota Hackathon – Built vehicle quiz recommender app</li>
          <li>Active Member, Aggie Competitive Coding Club and Aggie Data Science Club</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-2">
        <h2 className="text-xl font-semibold">Let’s Connect</h2>
        <p>
          Interested in working together or want to learn more? Reach out through the contact info in the footer or drop feedback through the form.
        </p>
      </section>
    </main>
  )
}
