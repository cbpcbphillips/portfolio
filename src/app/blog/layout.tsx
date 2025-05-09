export const metadata = {
  title: 'Blog | Carson Phillips',
  description:
    'Read my blog for monthly dev updates, insights, and lessons from my software journey.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
