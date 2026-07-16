import {Ref} from 'react'

interface PublicationCardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  ref?: Ref<HTMLDivElement>
}

export default function PublicationCard({
  children,
  className = '',
  style,
  ref,
}: PublicationCardProps) {
  return (
    <div
      ref={ref}
      style={style}
      className={`
        relative overflow-hidden
        bg-canvas-0 border-[1.5px] border-canvas-100 rounded-[18px]
        py-7 px-8
        transition-all duration-[250ms]
        hover:border-primary-800/35
        hover:shadow-[0_12px_36px_rgb(var(--color-primary-800)/0.08)]
        ${className}
      `}
    >
      {children}
    </div>
  )
}
