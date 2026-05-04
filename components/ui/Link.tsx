interface LinkProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'inline' | 'ghost'
  className?: string
  style?: React.CSSProperties
}

export default function Link({children, href, onClick, variant = 'inline', className = '', style}: LinkProps) {
  const Component = href ? 'a' : 'button'
  const props = href ? {href, target: '_blank', rel: 'noopener noreferrer'} : {onClick}

  return (
    <Component className={`link-${variant} ${className}`} style={style} {...props}>
      {children}
    </Component>
  )
}
