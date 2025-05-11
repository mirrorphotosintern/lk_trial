"use server"

interface BadgesLayoutProps {
  children: React.ReactNode
}

/**
 * Layout component for the badges pages
 */
export default async function BadgesLayout({
  children,
}: BadgesLayoutProps) {
  return (
    <div className="min-h-[calc(100vh-16rem)] w-full">
      {children}
    </div>
  )
} 