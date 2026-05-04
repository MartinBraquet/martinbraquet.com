import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {CustomLink} from 'web/components/links'
import {C} from 'web/lib/colors'
import {PAGES} from 'web/lib/constants'

export default function Navigation() {
  const router = useRouter()
  const currentPath = router.pathname
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen) {
        const target = event.target as Element
        const navElement = target.closest('nav')
        if (!navElement) {
          setIsMenuOpen(false)
        }
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

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

        {/* Mobile Hamburger Menu */}
        <div style={{position: 'relative'}} className="flex lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '3px',
            }}
          >
            <div
              style={{
                width: '20px',
                height: '2px',
                background: C.text,
                transition: 'transform 0.3s ease',
                transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }}
            />
            <div
              style={{
                width: '20px',
                height: '2px',
                background: C.text,
                transition: 'opacity 0.3s ease',
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <div
              style={{
                width: '20px',
                height: '2px',
                background: C.text,
                transition: 'transform 0.3s ease',
                transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none',
              }}
            />
          </button>

          {isMenuOpen && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                background: C.bg,
                border: `1px solid ${C.border}`,
                borderRadius: '8px',
                boxShadow: `0 8px 24px ${C.inkA07}`,
                minWidth: '200px',
                padding: '0.5rem 0',
                marginTop: '0.5rem',
              }}
            >
              {PAGES.map(([href, label]) => {
                const isActive = href === currentPath

                if (isActive) {
                  return (
                    <span
                      key={label}
                      className="nav-link active"
                      style={{
                        display: 'block',
                        padding: '0.75rem 1.5rem',
                        cursor: 'default',
                        borderBottom: `0px solid ${C.red}`,
                      }}
                    >
                      {label}
                    </span>
                  )
                }

                return (
                  <CustomLink
                    key={label}
                    href={href}
                    className="nav-link"
                    style={{
                      display: 'block',
                      padding: '0.75rem 1.5rem',
                    }}
                  >
                    {label}
                  </CustomLink>
                )
              })}
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <div style={{gap: '2rem'}} className="hidden lg:flex">
          {PAGES.map(([href, label]) => {
            const isActive = href === currentPath

            if (isActive) {
              return (
                <span
                  key={label}
                  className="nav-link active"
                  style={{
                    cursor: 'default',
                  }}
                >
                  {label}
                </span>
              )
            }

            return (
              <CustomLink key={label} href={href} className="nav-link">
                {label}
              </CustomLink>
            )
          })}
        </div>
      </nav>
    </>
  )
}
