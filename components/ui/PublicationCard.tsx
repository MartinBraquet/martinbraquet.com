import {C} from 'web/lib/colors'

interface PublicationCardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function PublicationCard({children, className = '', style}: PublicationCardProps) {
  return (
    <>
      <style>{`
        .pub-card {
          background: ${C.bgCard}; border: 1.5px solid ${C.border}; border-radius: 18px;
          padding: 1.75rem 2rem;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.2s;
          position: relative; overflow: hidden;
        }
        .pub-card:hover {
          border-color: ${C.redA35};
          box-shadow: 0 12px 36px ${C.redA08};
          // transform: translateY(-3px);
        }
      `}</style>
      <div className={`pub-card ${className}`} style={style}>
        {children}
      </div>
    </>
  )
}
