import {CustomLink} from 'web/components/links'
import {C} from 'web/lib/colors'
import {PAGES} from 'web/lib/constants'

export default function Navigation() {
  return (
    <>
      <style>{`
        .nav-link {
          font-size: 0.72rem; font-weight: 500; letter-spacing: 0.08em;
          text-transform: uppercase; color: ${C.textSec}; text-decoration: none;
          transition: color 0.2s; padding-bottom: 2px;
          border-bottom: 1px solid transparent;
        }
        .nav-link:hover, .nav-link.active { color: ${C.text}; border-bottom-color: ${C.red}; }
      `}</style>
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: C.bgA80,
          backdropFilter: 'blur(16px)',
          borderBottom: `1px solid 'transparent'`,
          padding: '0 2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 62,
          transition: 'all 0.3s',
        }}
      >
        <a href="/" style={{textDecoration: 'none'}}>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1rem',
              fontWeight: 700,
              color: C.text,
              letterSpacing: '-0.01em',
            }}
          >
            Martin <span style={{color: C.red}}>Braquet</span>
          </span>
        </a>

        <div style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
          {PAGES.map(([href, label]) => (
            <CustomLink
              key={label}
              href={href}
              className="nav-link"
              // onClick={(e) => {
              //   e.preventDefault()
              //   document.querySelector(href)?.scrollIntoView({behavior: 'smooth'})
              // }}
            >
              {label}
            </CustomLink>
          ))}
        </div>
      </nav>
    </>
  )
}
