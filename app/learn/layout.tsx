/* app/(learn)/layout.tsx */
"use server"

export default async function LearnLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 py-8">
      {children}
    </main>
  )
}
