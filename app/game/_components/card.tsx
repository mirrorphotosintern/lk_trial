// Enhanced card components for Padhagala Raaja with cultural styling and improved visual effects
// Supports gradient borders, backdrop blur, and enhanced shadow effects for better user experience

export function Card({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`card-border relative rounded-3xl bg-white text-black ${className}`}
    >
      {children}
    </div>
  )
}

export function CardInner({
  children,
  className = ""
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`relative z-10 p-6 lg:p-10 ${className}`}>{children}</div>
  )
}
