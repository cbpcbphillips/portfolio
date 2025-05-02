'use client'

interface ProjectItemProps {
  title: string
  description: string
  link: string
}

export default function ProjectItem({ title, description, link }: ProjectItemProps) {
  return (
    <li>
      <h3 className="text-lg font-semibold">
        <a href={link} target="_blank" className="underline hover:text-[var(--color-primary)] transition">
          {title}
        </a>
      </h3>
      <p className="text-sm">{description}</p>
    </li>
  )
}
