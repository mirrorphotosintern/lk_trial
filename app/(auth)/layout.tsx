/*
This server layout provides a layout for (auth) pages.
*/

"use server"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  return <>{children}</>
}
