import {useEffect, useRef} from 'react'
import {PageBase} from 'web/components/page-base'
import {SEO} from 'web/components/SEO'
import {C} from 'web/lib/colors'

import PublicationCard from '../components/ui/PublicationCard'

// ── Data ──────────────────────────────────────────────────────────────────────

type Publication = {
  year: string
  title: string
  venue: string
  supervisor: string
  pdf: string
  url: string
  tag: 'Thesis' | 'Conference'
}

export const PUBLICATIONS: Publication[] = [
  {
    year: '2022',
    title:
      'Decentralized Auction-based Task Allocation with Guaranteed Collision Avoidance in Dynamic Environments',
    venue: 'MSc Thesis · UT Austin',
    supervisor: 'Supervised by Efstathios Bakolas',
    pdf: 'https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/projects/Masters_Report_UT_Austin___Martin_Braquet.pdf',
    url: 'https://repositories.lib.utexas.edu/handle/2152/117128',
    tag: 'Thesis',
  },
  {
    year: '2022',
    title: 'Vector Field-based Collision Avoidance for Moving Obstacles with Time-Varying Shape',
    venue: 'Modeling, Estimation and Control Conference (MECC)',
    supervisor: 'Braquet, M. and Bakolas E.',
    pdf: 'https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/projects/braquet_2022.pdf',
    url: 'https://www.sciencedirect.com/science/article/pii/S2405896322028890',
    tag: 'Conference',
  },
  {
    year: '2021',
    title: 'Greedy Decentralized Auction-based Task Allocation for Multi-Agent Systems',
    venue: 'Modeling, Estimation and Control Conference (MECC)',
    supervisor: 'Braquet, M. and Bakolas E.',
    pdf: 'https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/projects/Greedy-Decentralized-Auction-based-Task-Allocation-for-Multi-Age_2021_IFAC-P.pdf',
    url: 'https://www.sciencedirect.com/science/article/pii/S240589632102293X',
    tag: 'Conference',
  },
  {
    year: '2020',
    title: 'Design of an ultra-low-power energy-harvesting audio sensor for ecosystem monitoring',
    venue: 'MSc Thesis · UCLouvain',
    supervisor: 'Supervised by David Bol and Ramin Sadre',
    pdf: 'https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/projects/EPL-master-thesis-Martin-Braquet.pdf',
    url: 'https://hdl.handle.net/2078.2/16675',
    tag: 'Thesis',
  },
]

const SCHOLAR_URL = 'https://scholar.google.com/citations?user=thzpnRoAAAAJ'

const DESCRIPTION =
  'Peer-reviewed papers and graduate theses on decentralized task allocation, collision avoidance, and energy-efficient sensing.'

// ── Reveal-on-scroll ──────────────────────────────────────────────────────────

const REVEAL_STYLE: React.CSSProperties = {
  opacity: 0,
  transform: 'translateY(28px)',
  transition: 'opacity 0.7s ease, transform 0.7s ease',
}

function useReveal() {
  const refs = useRef<HTMLElement[]>([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }
        }),
      {threshold: 0.08},
    )
    refs.current.forEach((el) => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  let i = 0
  return () => {
    const index = i++
    return {
      ref: (el: HTMLElement | null) => {
        if (el) refs.current[index] = el
      },
      style: REVEAL_STYLE,
    }
  }
}

// ── Sub-components ────────────────────────────────────────────────────────────

function Hero() {
  return (
    <header
      style={{
        padding: '5rem 2.5rem 4rem',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: `radial-gradient(ellipse 50% 65% at 100% 40%, ${C.redA07} 0%, transparent 60%), radial-gradient(ellipse 30% 40% at 0% 85%, rgba(196,154,114,0.08) 0%, transparent 55%)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: '3%',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(10rem,18vw,22rem)',
          fontWeight: 700,
          color: C.redA045,
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        P
      </div>
      <div style={{maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1}}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
            animation: 'fadeUp 0.5s ease both',
          }}
        >
          <div style={{width: 8, height: 8, borderRadius: '50%', background: C.red}} />
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: C.textTert,
            }}
          >
            Academia
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
            lineHeight: 1.05,
            fontWeight: 700,
            color: C.text,
            marginBottom: '1.25rem',
            animation: 'fadeUp 0.55s 0.08s ease both',
          }}
        >
          Publications <span style={{color: C.red}}>& theses</span>
        </h1>

        <p
          style={{
            fontSize: '1rem',
            lineHeight: 1.8,
            color: C.textSec,
            maxWidth: 620,
            marginBottom: '2rem',
            animation: 'fadeUp 0.55s 0.16s ease both',
          }}
        >
          {DESCRIPTION}
        </p>

        <a
          href={SCHOLAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.8rem',
            fontWeight: 500,
            color: C.red,
            textDecoration: 'none',
            borderBottom: `1px solid ${C.redA25}`,
            paddingBottom: '2px',
            animation: 'fadeUp 0.55s 0.24s ease both',
          }}
        >
          Citation metrics on Google Scholar →
        </a>
      </div>
    </header>
  )
}

function PubLink({
  href,
  primary,
  children,
}: {
  href: string
  primary?: boolean
  children: React.ReactNode
}) {
  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
    fontSize: '0.75rem',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'all 0.2s',
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
              background: C.redA08,
              color: C.red,
              border: `1px solid ${C.redA18}`,
              borderRadius: 100,
              padding: '0.4rem 0.95rem',
            }
          : {
              ...base,
              color: C.textSec,
              borderBottom: `1px solid ${C.border}`,
              paddingBottom: '1px',
            }
      }
      onMouseEnter={(e) => {
        if (primary) {
          e.currentTarget.style.background = C.redA15
          e.currentTarget.style.borderColor = C.redA30
          e.currentTarget.style.transform = 'translateY(-1px)'
          e.currentTarget.style.boxShadow = `0 4px 12px ${C.redA15}`
        } else {
          e.currentTarget.style.color = C.red
          e.currentTarget.style.borderBottomColor = C.redA25
        }
      }}
      onMouseLeave={(e) => {
        if (primary) {
          e.currentTarget.style.background = C.redA08
          e.currentTarget.style.borderColor = C.redA18
          e.currentTarget.style.transform = 'none'
          e.currentTarget.style.boxShadow = 'none'
        } else {
          e.currentTarget.style.color = C.textSec
          e.currentTarget.style.borderBottomColor = C.border
        }
      }}
    >
      {children}
    </a>
  )
}

const DownloadIcon = () => (
  <svg
    width="12"
    height="12"
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

const ExternalIcon = () => (
  <svg
    width="12"
    height="12"
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

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Publications() {
  const R = useReveal()

  return (
    <PageBase>
      <SEO title="Publications" description={DESCRIPTION} url="/publications" />
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: C.bg,
          color: C.text,
          overflowX: 'hidden',
        }}
      >
        <Hero />

        <section style={{padding: '5rem 2.5rem 6rem'}}>
          <div
            style={{
              maxWidth: 900,
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {PUBLICATIONS.map((p) => (
              <PublicationCard key={p.url} {...R()}>
                <div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    marginBottom: '0.75rem',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '0.62rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '0.28rem 0.7rem',
                      borderRadius: 100,
                      ...(p.tag === 'Thesis'
                        ? {background: C.redA10, color: C.red}
                        : {
                            background: C.redA07,
                            color: C.redMid,
                            border: `1px solid ${C.redA15}`,
                          }),
                    }}
                  >
                    {p.tag}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '0.72rem',
                      color: C.textTert,
                      fontWeight: 500,
                      lineHeight: 1.8,
                    }}
                  >
                    {p.year}
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: C.text,
                    lineHeight: 1.4,
                    marginBottom: '0.5rem',
                  }}
                >
                  {p.title}
                </h2>

                <p style={{fontSize: '0.82rem', color: C.textSec, marginBottom: '0.3rem'}}>
                  <em>{p.venue}</em>
                </p>
                <p style={{fontSize: '0.78rem', color: C.textTert, marginBottom: '1.25rem'}}>
                  {p.supervisor}
                </p>

                <div
                  className="pub-links"
                  style={{display: 'flex', gap: '0.75rem', alignItems: 'center'}}
                >
                  <PubLink href={p.pdf} primary>
                    <DownloadIcon />
                    PDF
                  </PubLink>
                  <PubLink href={p.url}>
                    <ExternalIcon />
                    Publication Page
                  </PubLink>
                </div>
              </PublicationCard>
            ))}
          </div>
        </section>
      </div>
    </PageBase>
  )
}
