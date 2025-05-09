export const metadata = {
  title: 'Home | Carson Phillips',
  description:
    "Hi, I'm Carson — a full stack web developer focused on React, Node.js, and PostgreSQL. Explore my portfolio.",
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
