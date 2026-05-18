import {CustomLink} from 'web/components/links'

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
}: ButtonProps) {
  // const baseStyles = {
  //   display: 'inline-block',
  //   cursor: 'pointer',
  //   textDecoration: 'none',
  //   fontSize: '0.85rem',
  //   fontWeight: 500,
  //   letterSpacing: '0.04em',
  //   transition: 'all 0.2s',
  // }
  //
  // const primaryStyles = {
  //   background: C.red,
  //   color: C.bg,
  //   border: 'none',
  //   borderRadius: '100px',
  //   padding: '14px 30px',
  // }
  //
  // const outlineStyles = {
  //   background: 'transparent',
  //   color: C.text,
  //   border: '1.5px solid ' + C.borderMd,
  //   borderRadius: '100px',
  //   padding: '13px 29px',
  // }

  // const styles = {
  //   ...baseStyles,
  //   ...(variant === 'primary' ? primaryStyles : outlineStyles),
  //   ...style,
  // }
  //
  // const hoverStyles =
  //   variant === 'primary'
  //     ? {
  //         background: C.redDark,
  //         transform: 'translateY(-2px)',
  //         boxShadow: `0 8px 24px ${C.redA25}`,
  //       }
  //     : {
  //         borderColor: C.text,
  //         background: C.inkA04,
  //       }

  const Component = href ? CustomLink : 'button'
  const props = href ? {href} : {onClick}

  const variants = {
    primary: `
    bg-primary-800 text-canvas-25 border-none rounded-full
    px-[30px] py-[14px]
    hover:bg-primary-900 hover:-translate-y-[2px]
    hover:shadow-[0_8px_24px_rgb(var(--color-primary-800)/0.25)]
  `,
    outline: `
    bg-transparent text-canvas-900
    border-[1.5px] border-canvas-200 rounded-full
    px-[29px] py-[13px]
    hover:border-canvas-900 hover:bg-canvas-900/[0.04]
  `,
  }

  return (
    <Component
      className={`
      inline-block text-[0.85rem] font-medium tracking-[0.04em]
      cursor-pointer no-underline transition-all duration-200
      ${variants[variant]}
      ${className}
    `}
      {...props}
    >
      {children}
    </Component>
  )
}
