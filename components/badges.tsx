import {useState} from 'react'
import {C} from 'web/lib/colors'

type BadgeKind = 'paper' | 'live' | 'thesis' | 'project'

export function Badge({kind, children}: {kind: BadgeKind; children: React.ReactNode}) {
  const map: Record<BadgeKind, {bg: string; color: string; border?: string}> = {
    paper: {bg: C.redA10, color: C.red},
    live: {bg: 'rgb(29 158 117 / 0.10)', color: 'rgb(16 105 79)'},
    thesis: {bg: C.inkA07, color: C.textSec},
    project: {bg: C.inkA04, color: C.textTert},
  }
  const {bg, color, border} = map[kind]
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: '0.6rem',
        fontWeight: 600,
        letterSpacing: '0.09em',
        textTransform: 'uppercase',
        padding: '0.22rem 0.6rem',
        borderRadius: 100,
        whiteSpace: 'nowrap',
        background: bg,
        color,
        border: border ?? 'none',
      }}
    >
      {children}
    </span>
  )
}

export function TechTag({children}: {children: React.ReactNode}) {
  return (
    <span
      style={{
        fontSize: '0.67rem',
        fontWeight: 500,
        color: C.textTert,
        background: C.bg,
        border: `1px solid ${C.border}`,
        padding: '0.18rem 0.55rem',
        borderRadius: 4,
      }}
    >
      {children}
    </span>
  )
}

export function StatBubble({children}: {children: React.ReactNode}) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.3rem',
        fontSize: '0.72rem',
        fontWeight: 600,
        color: C.red,
        background: C.redA08,
        padding: '0.22rem 0.7rem',
        borderRadius: 100,
      }}
    >
      ★ {children}
    </span>
  )
}

export const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 3l14 9-14 9V3z" />
  </svg>
)

export const GithubIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)
export const ExternalIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

export const SearchIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)
export const ClearIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)
export const DownloadIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)
export const BackIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

export function BackLink({href = '/projects'}: {href?: string}) {
  return (
    <a
      href={href}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.3rem',
        fontSize: '0.72rem',
        fontWeight: 500,
        color: C.textTert,
        textDecoration: 'none',
        marginBottom: '1.75rem',
        letterSpacing: '0.04em',
      }}
    >
      <BackIcon /> Projects
    </a>
  )
}

export function ActionBtn({
  href,
  primary,
  children,
}: {
  href: string
  primary?: boolean
  children: React.ReactNode
}) {
  const [hovered, setHovered] = useState(false)
  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.8rem',
    fontWeight: 500,
    padding: '0.5rem 1.1rem',
    borderRadius: 100,
    textDecoration: 'none',
    transition: 'all 0.15s',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={
        primary
          ? {
              ...base,
              background: hovered ? C.redA15 : C.redA08,
              color: C.red,
              border: `1px solid ${hovered ? C.redA30 : C.redA18}`,
              transform: hovered ? 'translateY(-1px)' : 'none',
            }
          : {
              ...base,
              color: hovered ? C.text : C.textSec,
              border: `1px solid ${hovered ? C.borderMd : C.border}`,
              background: hovered ? C.inkA04 : 'transparent',
            }
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  )
}

export function Section({
  label,
  title,
  children,
  noBorder,
  intro,
}: {
  label: string
  title: string
  children: React.ReactNode
  noBorder?: boolean
  intro?: string
}) {
  return (
    <section
      style={{
        padding: '3.5rem 2.5rem',
        borderBottom: noBorder ? 'none' : `1px solid ${C.border}`,
        maxWidth: 1100,
        margin: '0 auto',
      }}
    >
      <div style={{marginBottom: intro ? '1rem' : '2rem'}}>
        <span
          style={{
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: C.red,
            display: 'block',
            marginBottom: '0.4rem',
          }}
        >
          {label}
        </span>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
            fontWeight: 700,
            color: C.text,
            lineHeight: 1.15,
          }}
        >
          {title}
        </h2>
      </div>
      {intro && (
        <p
          style={{
            fontSize: '0.88rem',
            color: C.textSec,
            lineHeight: 1.75,
            maxWidth: 700,
            marginBottom: '1.75rem',
          }}
        >
          {intro}
        </p>
      )}
      {children}
    </section>
  )
}

// ── Code block ────────────────────────────────────────────────────────────────

export function CodeBlock({label, code, note}: {label: string; code: string; note?: string}) {
  return (
    <div
      style={{
        background: C.bgCard,
        border: `1px solid ${C.border}`,
        borderRadius: 14,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '0.6rem 1rem',
          borderBottom: `1px solid ${C.border}`,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <div style={{width: 8, height: 8, borderRadius: '50%', background: C.red, opacity: 0.6}} />
        <span
          style={{
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: C.textTert,
          }}
        >
          {label}
        </span>
      </div>
      <pre
        style={{
          margin: 0,
          padding: '1rem',
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.75rem',
          color: C.text,
          overflowX: 'auto',
          lineHeight: 1.65,
        }}
      >
        {code}
      </pre>
      {note && (
        <div style={{padding: '0.6rem 1rem', borderTop: `1px solid ${C.border}`}}>
          <span style={{fontSize: '0.7rem', color: C.textTert, fontStyle: 'italic'}}>{note}</span>
        </div>
      )}
    </div>
  )
}

// ── Labelled image ────────────────────────────────────────────────────────────

export function LabelledImg({
  label,
  src,
  alt,
  aspect = '4/3',
}: {
  label: string
  src: string
  alt: string
  aspect?: string
}) {
  return (
    <div>
      <p
        style={{
          fontSize: '0.65rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: C.textTert,
          marginBottom: '0.75rem',
        }}
      >
        {label}
      </p>
      <div
        style={{
          borderRadius: 14,
          overflow: 'hidden',
          border: `1px solid ${C.border}`,
          background: C.bgCard,
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{width: '100%', display: 'block', objectFit: 'cover', aspectRatio: aspect}}
        />
      </div>
    </div>
  )
}

// ── Algorithm comparison card ─────────────────────────────────────────────────

export function AlgoCard({
  name,
  label,
  labelColor,
  labelBg,
  labelBorder,
  desc,
  detail,
}: {
  name: string
  label: string
  labelColor: string
  labelBg: string
  labelBorder: string
  desc: string
  detail?: string
}) {
  return (
    <div
      style={{
        background: C.bgCard,
        border: `1px solid ${C.border}`,
        borderRadius: 14,
        padding: '1.25rem 1.4rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.45rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '0.5rem',
        }}
      >
        <span style={{fontSize: '0.82rem', fontWeight: 600, color: C.text}}>{name}</span>
        <span
          style={{
            fontSize: '0.6rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '0.2rem 0.55rem',
            borderRadius: 100,
            background: labelBg,
            color: labelColor,
            border: `1px solid ${labelBorder}`,
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {label}
        </span>
      </div>
      <p style={{fontSize: '0.78rem', color: C.textSec, lineHeight: 1.6, margin: 0}}>{desc}</p>
      {detail && (
        <p
          style={{
            fontSize: '0.73rem',
            color: C.textTert,
            lineHeight: 1.55,
            fontStyle: 'italic',
            margin: 0,
          }}
        >
          {detail}
        </p>
      )}
    </div>
  )
}
