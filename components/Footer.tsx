import {SOCIAL} from 'web/components/socials'
import {C} from 'web/lib/colors'
import {PAGES} from 'web/lib/constants'

export default function Footer() {
  return (
    <footer style={{background: C.text, padding: '3.5rem 2.5rem 2.5rem'}}>
      <div style={{maxWidth: 1100, margin: '0 auto'}}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '2.5rem',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.1rem',
                fontWeight: 700,
                color: C.bg,
                marginBottom: '0.4rem',
              }}
            >
              Martin <span style={{color: C.redFooter}}>Braquet</span>
            </div>
            <p style={{fontSize: '0.78rem', color: C.bgA35, lineHeight: 1.6}}>
              Researcher · Engineer
            </p>
          </div>

          <div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap'}}>
            {PAGES.map(([href, label]) => (
              <a
                key={label}
                href={href}
                style={{
                  fontSize: '0.75rem',
                  color: C.bgA40,
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.bgA80)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.bgA40)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: `1px solid ${C.bgA07}`,
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <p style={{fontSize: '0.75rem', color: C.bgA25, margin: 0}}>
            © {new Date().getFullYear()} Martin Braquet
          </p>
          <div style={{display: 'flex', gap: '1.25rem'}}>
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: C.bgA25,
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.bgA65)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.bgA25)}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
