'use client'

interface SkillCardProps {
  iconUrl: string
  item: string
}

export default function SkillCard({ iconUrl, item }: SkillCardProps) {
  return (
    <div className="flex border rounded-md p-3 text-lg align-center border-[var(--color-primary)]">
      <img src={iconUrl} className="h-6 w-6" alt={iconUrl} />
      <h2>&nbsp;{item}</h2>
    </div>
  )
}
