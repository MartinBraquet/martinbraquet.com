import {JSX} from 'react'
import {C} from 'web/lib/colors'

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
    <>
      <style>{`
        .card-box {
          background: ${C.bgCard}; border: 1px solid ${C.border}; border-radius: 20px;
          padding: 2rem; transition: box-shadow 0.2s, transform 0.2s;
          transition: all 0.3s ease;
        }
        .card-box:hover {
          box-shadow: 0 12px 32px ${C.inkA07};
          transform: translateY(-3px);
        }
        .card-box:hover .cta-arrow {
          transform: translateX(5px);
        }
      `}</style>
      <a className={`card-box ${className}`} style={style} href={href}>
        {children}
      </a>
    </>
  )
}
