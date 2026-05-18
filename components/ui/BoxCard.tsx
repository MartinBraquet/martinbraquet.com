import {JSX} from 'react'
import {CustomLink} from 'web/components/links'

interface BoxCardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  as?: keyof JSX.IntrinsicElements
  href?: string
  target?: string
  rel?: string
}

export default function BoxCard({children, className = '', style, href}: BoxCardProps) {
  return (
    <CustomLink
      href={href}
      className={`
        group block
        bg-canvas-0 border border-canvas-100 rounded-[20px] p-8
        transition-all duration-300 ease-in-out
        hover:shadow-[0_12px_32px_rgb(var(--color-canvas-900)/0.07)]
        hover:-translate-y-[3px]
        ${className}
      `}
      style={style}
    >
      {children}
    </CustomLink>
  )
}
