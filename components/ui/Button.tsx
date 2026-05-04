import {C} from 'web/lib/colors'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline'
  className?: string
  style?: React.CSSProperties
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  style,
}: ButtonProps) {
  const baseStyles = {
    display: 'inline-block',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '0.85rem',
    fontWeight: 500,
    letterSpacing: '0.04em',
    transition: 'all 0.2s',
  }

  const primaryStyles = {
    background: C.red,
    color: C.bg,
    border: 'none',
    borderRadius: '100px',
    padding: '14px 30px',
  }

  const outlineStyles = {
    background: 'transparent',
    color: C.text,
    border: '1.5px solid ' + C.borderMd,
    borderRadius: '100px',
    padding: '13px 29px',
  }

  const styles = {
    ...baseStyles,
    ...(variant === 'primary' ? primaryStyles : outlineStyles),
    ...style,
  }

  const hoverStyles =
    variant === 'primary'
      ? {
          background: C.redDark,
          transform: 'translateY(-2px)',
          boxShadow: `0 8px 24px ${C.redA25}`,
        }
      : {
          borderColor: C.text,
          background: C.inkA04,
        }

  const Component = href ? 'a' : 'button'
  const props = href ? {href, target: '_blank', rel: 'noopener noreferrer'} : {onClick}

  return (
    <>
      <style>{`
        .btn-${variant} {
          display: inline-block;
          ${
            variant === 'primary'
              ? `
            background: ${C.red}; color: ${C.bg};
            border: none; border-radius: 100px; padding: 14px 30px;
          `
              : `
            background: transparent; color: ${C.text};
            border: 1.5px solid ${C.borderMd}; border-radius: 100px;
            padding: 13px 29px;
          `
          }
          font-size: 0.85rem; font-weight: 500; letter-spacing: 0.04em;
          cursor: pointer; text-decoration: none;
          transition: all 0.2s;
        }
        .btn-${variant}:hover {
          ${
            variant === 'primary'
              ? `
            background: ${C.redDark};
            transform: translateY(-2px);
            box-shadow: 0 8px 24px ${C.redA25};
          `
              : `
            border-color: ${C.text}; background: ${C.inkA04};
          `
          }
        }
      `}</style>
      <Component className={`btn-${variant} ${className}`} {...props}>
        {children}
      </Component>
    </>
  )
}
