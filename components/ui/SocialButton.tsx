import {C} from 'web/lib/colors'

interface SocialButtonProps {
  children: React.ReactNode
  href: string
  className?: string
  style?: React.CSSProperties
}

export default function SocialButton({children, href, className = '', style}: SocialButtonProps) {
  return (
    <>
      <style>{`
        .social-btn {
          display: flex; align-items: center; gap: 0.55rem;
          padding: 0.6rem 1.1rem; border-radius: 100px;
          border: 1px solid ${C.border}; background: ${C.bgCard};
          color: ${C.textSec}; text-decoration: none; font-size: 0.8rem;
          font-weight: 500; transition: all 0.2s;
        }
        .social-btn:hover {
          border-color: ${C.redA30}; color: ${C.red};
          background: ${C.redA04};
          box-shadow: 0 4px 12px ${C.redA07};
        }
      `}</style>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`social-btn ${className}`}
        style={style}
      >
        {children}
      </a>
    </>
  )
}
