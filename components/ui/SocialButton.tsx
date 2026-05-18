import clsx from 'clsx'

interface SocialButtonProps {
  children: React.ReactNode
  href: string
  className?: string
  style?: React.CSSProperties
}

export default function SocialButton({children, href, className = '', style}: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      className={clsx(
        `
      flex items-center gap-[0.55rem]
      px-[1.1rem] py-[0.6rem] rounded-full
      border border-canvas-100 bg-canvas-0 text-canvas-400
      no-underline text-[0.8rem] font-medium transition-all duration-200
      hover:border-primary-800/30 hover:text-primary-800
      hover:bg-primary-800/[0.04]
      hover:shadow-[0_4px_12px_rgb(var(--color-primary-800)/0.07)]
      `,
        className,
      )}
    >
      {children}
    </a>
  )
}
