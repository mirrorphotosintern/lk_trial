// Enhanced card components for Padhagala Raaja with cultural styling and improved visual effects
// Supports gradient borders, backdrop blur, and enhanced shadow effects for better user experience

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white rounded-3xl relative card-border text-black ${className}`}
    >
      {children}
    </div>
  );
}

export function CardInner({ 
  children,
  className = ""
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`p-6 lg:p-10 relative z-10 ${className}`}>
      {children}
    </div>
  );
}
