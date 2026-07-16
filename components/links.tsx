import Link from 'next/link'

export const CustomLink = ({
  href,
  children,
  style,
  className,
  onMouseEnter,
  onMouseLeave,
}: {
  href?: string
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}) => {
  if (!href) return <>{children}</>

  // If href is internal, use Next.js Link
  if (href.startsWith('/') || href.startsWith('#')) {
    return (
      <Link
        href={href}
        style={style}
        className={className}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </Link>
    )
  }

  // For external links, fall back to <a>
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  )
}
