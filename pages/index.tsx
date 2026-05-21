import {BookOpen, FileText, GraduationCap, Handshake} from 'lucide-react'
import {useEffect, useRef} from 'react'
import {PageBase} from 'web/components/page-base'
import {SEO} from 'web/components/SEO'
import {SOCIAL} from 'web/components/socials'
import {C} from 'web/lib/colors'
import {EMAIL} from 'web/lib/constants'

import BoxCard from '../components/ui/BoxCard'
import Button from '../components/ui/Button'
import PublicationCard from '../components/ui/PublicationCard'
import SocialButton from '../components/ui/SocialButton'
import {PROJECTS} from './projects'

// ── Data ──────────────────────────────────────────────────────────────────────

const PUBLICATIONS = [
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

// ── Sub-components ────────────────────────────────────────────────────────────

function SocialButtons({withEmail = false}: {withEmail?: boolean}) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '0.8rem',
        flexWrap: 'wrap',
        animation: 'fadeUp 0.55s 0.24s ease both',
      }}
    >
      {SOCIAL.map((s) => (
        <SocialButton key={s.label} href={s.href}>
          {s.icon} {s.label}
        </SocialButton>
      ))}
      {withEmail && (
        <SocialButton href={`mailto:${EMAIL}`}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          Email
        </SocialButton>
      )}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function Home() {
  const revealRefs = useRef<HTMLElement[]>([])

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
    revealRefs.current.forEach((el) => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const rs = {
    opacity: 0,
    transform: 'translateY(28px)',
    transition: 'opacity 0.7s ease, transform 0.7s ease',
  }

  let _ri = 0
  const R = () => {
    const i = _ri++
    return {
      ref: (el: any) => {
        revealRefs.current[i] = el
      },
      style: rs,
    }
  }

  const description =
    "What's here reflects pieces of me, but not the full constellation. Explore as you like; fill in the gaps at your own risk."

  return (
    <PageBase>
      <SEO description={description} />
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: C.bg,
          color: C.text,
          overflowX: 'hidden',
        }}
      >
        {/* ── HERO ── */}
        <section
          style={{
            minHeight: '92vh',
            padding: '0 2.5rem',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Atmospheric background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background: [
                `radial-gradient(ellipse 55% 50% at 85% 15%, ${C.redA07} 0%, transparent 60%)`,
                // The warm tan (196 154 114) is a unique one-off decoration, not in the palette
                `radial-gradient(ellipse 40% 35% at 5% 85%, rgba(196, 154, 114, 0.10) 0%, transparent 55%)`,
              ].join(', '),
            }}
          />

          {/* Decorative large letter */}
          <div
            style={{
              position: 'absolute',
              right: '5%',
              top: '50%',
              transform: 'translateY(-50%)',
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(14rem, 22vw, 26rem)',
              fontWeight: 700,
              color: C.redA045,
              lineHeight: 1,
              userSelect: 'none',
              pointerEvents: 'none',
              animation: 'drift 7s ease-in-out infinite',
            }}
          >
            B
          </div>

          <div
            style={{
              maxWidth: 1100,
              margin: '0 auto',
              width: '100%',
              position: 'relative',
              zIndex: 1,
              paddingTop: '4rem',
              paddingBottom: '4rem',
            }}
          >
            <div style={{maxWidth: 720}}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '2.5rem',
                  animation: 'fadeUp 0.5s ease both',
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: C.red,
                    animation: 'fadeIn 1s 0.8s ease both',
                  }}
                />
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: C.textTert,
                  }}
                >
                  Personal Website
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(3rem, 7vw, 6rem)',
                  lineHeight: 1.0,
                  fontWeight: 700,
                  color: C.text,
                  marginBottom: '1rem',
                  animation: 'fadeUp 0.55s 0.08s ease both',
                }}
              >
                Martin
                <br />
                <span style={{color: C.red}}>Braquet</span>
              </h1>

              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
                  lineHeight: 1.75,
                  color: C.textSec,
                  fontStyle: 'italic',
                  fontWeight: 400,
                  maxWidth: 560,
                  marginBottom: '3rem',
                  animation: 'fadeUp 0.55s 0.16s ease both',
                }}
              >
                "{description}"
              </p>

              <SocialButtons withEmail />
            </div>
          </div>

          {/* Scroll hint */}
          {/*<div style={{*/}
          {/*  position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",*/}
          {/*  display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",*/}
          {/*  animation: "fadeIn 1s 1s ease both",*/}
          {/*}}>*/}
          {/*  <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, transparent, #c8b89a)" }} />*/}
          {/*  <span style={{ fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#bab2a0" }}>Scroll</span>*/}
          {/*</div>*/}
        </section>

        <div className="divider" />

        {/* ── ABOUT ── */}
        <section id="about" style={{padding: '90px 2.5rem'}}>
          <div style={{maxWidth: 1100, margin: '0 auto'}}>
            <div
              className="two-col"
              style={{display: 'flex', gap: '5rem', alignItems: 'flex-start'}}
            >
              {/* LEFT — Personal (existing) */}
              <div {...R()} style={{...rs, flex: '0 0 35%'}}>
                <span className="section-label">About</span>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                    fontWeight: 700,
                    color: C.text,
                    lineHeight: 1.15,
                    marginBottom: '1.5rem',
                  }}
                >
                  Personal Life
                </h2>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.85,
                    color: C.textSec,
                    marginBottom: '1.75rem',
                  }}
                >
                  To find out who I am as a person, feel free to explore my Compass profile — a
                  space designed for deeper connection.
                </p>
                <Button href="https://compassmeet.com/Martin">Compass Profile →</Button>
                {/*<div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid #e8dece" }}>*/}
                {/*  <p style={{ fontSize: "0.9rem", color: "#7a7060", lineHeight: 1.75, marginBottom: "1.25rem" }}>*/}
                {/*    Interested in forming a genuine connection? Learn more about me and reach out directly.*/}
                {/*  </p>*/}
                {/*  <a href="https://forms.gle/8LvKnRcXjYri2qZT6" target="_blank" rel="noopener noreferrer" className="btn-outline">*/}
                {/*    Connect with Martin*/}
                {/*  </a>*/}
                {/*</div>*/}
              </div>

              {/* RIGHT — Professional (new) */}
              <div {...R()} style={{...rs, flex: '1 1 280px'}}>
                <span className="section-label">Professional</span>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                    fontWeight: 700,
                    color: C.text,
                    lineHeight: 1.15,
                    marginBottom: '1.5rem',
                  }}
                >
                  Open to Work
                </h2>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.85,
                    color: C.textSec,
                    marginBottom: '0.85rem',
                  }}
                >
                  Quantitative engineer and full-stack developer with 6 years of experience across
                  aerospace robotics, climate-risk finance, and humanitarian open-source software.
                </p>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.85,
                    color: C.textSec,
                    marginBottom: '1.75rem',
                  }}
                >
                  Seeking nonprofit roles with human interaction at organizations driving measurable
                  impact on humanitarian causes such as extreme poverty and global health.
                </p>
                <div style={{display: 'flex', gap: '0.75rem', flexWrap: 'wrap'}}>
                  <Button href="https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/Braquet-Martin-resume.pdf">
                    Download CV →
                  </Button>
                </div>
              </div>

              {/* Right — identity card */}
              {/*<div {...R()} style={{ flex: "1 1 360px" }}>*/}
              {/*  <IdentityCard email={EMAIL} />*/}
              {/*</div>*/}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── ACADEMIA ── */}
        <section id="academia" style={{padding: '90px 2.5rem', background: C.bgAlt}}>
          <div style={{maxWidth: 1100, margin: '0 auto'}}>
            <div {...R()} style={{...rs, marginBottom: '3.5rem'}}>
              <span className="section-label">Academia</span>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                  fontWeight: 700,
                  color: C.text,
                  lineHeight: 1.15,
                  marginBottom: '0.75rem',
                }}
              >
                Research & Education
              </h2>
              <p style={{fontSize: '0.95rem', color: C.textSec, maxWidth: 540, lineHeight: 1.8}}>
                Trained across engineering and sciences, with graduate research spanning task
                allocation, controls, and energy-efficient sensing.
              </p>
            </div>

            <div
              className="two-col"
              {...R()}
              style={{...rs, display: 'flex', gap: '1.5rem', marginBottom: '4rem'}}
            >
              {[
                {
                  icon: <FileText size={28} strokeWidth={1.5} color={C.red} />,
                  label: 'Curriculum Vitae',
                  desc: 'Full academic and professional record',
                  href: 'https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/Braquet-Martin-cv-2026.pdf',
                  cta: 'Download PDF',
                },
                {
                  icon: <BookOpen size={28} strokeWidth={1.5} color={C.red} />,
                  label: 'Courses at University',
                  desc: 'Complete list of university courses followed',
                  href: '/courses-university',
                  cta: 'View Courses',
                },
                {
                  icon: <GraduationCap size={28} strokeWidth={1.5} color={C.red} />,
                  label: 'Google Scholar',
                  desc: 'Citation metrics and paper index',
                  href: 'https://scholar.google.com/citations?user=thzpnRoAAAAJ',
                  cta: 'Open Scholar',
                },
              ].map((item) => (
                <BoxCard
                  key={item.label}
                  href={item.href}
                  style={{
                    flex: '1 1 220px',
                    textDecoration: 'none',
                    display: 'block',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    backgroundColor: C.bg,
                    transition: 'all 0.25s ease-out',
                  }}
                >
                  {/* Icon Container */}
                  <div style={{marginBottom: '1rem', display: 'flex'}}>{item.icon}</div>

                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      color: C.text,
                      marginBottom: '0.35rem',
                    }}
                  >
                    {item.label}
                  </div>

                  <div
                    style={{
                      fontSize: '0.85rem',
                      color: '#555',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {item.desc}
                  </div>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: C.red,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {item.cta}
                    <span
                      className="group-hover:translate-x-[5px]"
                      style={{transition: 'transform 0.2s ease-out'}}
                    >
                      →
                    </span>
                  </div>
                </BoxCard>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── PUBLICATIONS ── */}
        <section id="publications" style={{padding: '90px 2.5rem'}}>
          <div style={{maxWidth: 1100, margin: '0 auto'}}>
            <div {...R()} style={{...rs, marginBottom: '3rem'}}>
              <span className="section-label">Research Output</span>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                  fontWeight: 700,
                  color: C.text,
                  lineHeight: 1.15,
                }}
              >
                Publications
              </h2>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '1.25rem'}}>
              {PUBLICATIONS.map((p, i) => (
                <PublicationCard
                  key={i}
                  R={R}
                  // onMouseEnter={() => setHoveredPub(i)}
                  // onMouseLeave={() => setHoveredPub(null)}
                >
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
                        borderRadius: '100px',
                        ...(p.tag === 'Thesis'
                          ? {
                              background: `rgb(var(--color-primary-800) / 0.10)`,
                              color: `rgb(var(--color-primary-800))`,
                            }
                          : {
                              background: `rgb(var(--color-primary-800) / 0.07)`,
                              color: `rgb(var(--color-primary-600))`,
                              border: `1px solid rgb(var(--color-primary-800) / 0.15)`,
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

                  <h3
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
                  </h3>

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
                    <a
                      href={p.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        background: C.redA08,
                        color: C.red,
                        border: `1px solid ${C.redA18}`,
                        borderRadius: 100,
                        padding: '0.4rem 0.95rem',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = C.redA15
                        e.currentTarget.style.borderColor = C.redA30
                        e.currentTarget.style.transform = 'translateY(-1px)'
                        e.currentTarget.style.boxShadow = `0 4px 12px ${C.redA15}`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = C.redA08
                        e.currentTarget.style.borderColor = C.redA18
                        e.currentTarget.style.transform = 'none'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
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
                      PDF
                    </a>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        color: C.textSec,
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        textDecoration: 'none',
                        borderBottom: `1px solid ${C.border}`,
                        transition: 'all 0.2s',
                        paddingBottom: '1px',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = C.red
                        e.currentTarget.style.borderBottomColor = C.redA25
                        e.currentTarget.style.gap = '0.5rem'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = C.textSec
                        e.currentTarget.style.borderBottomColor = C.border
                        e.currentTarget.style.gap = '0.35rem'
                      }}
                    >
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
                      Publication Page
                    </a>
                  </div>
                </PublicationCard>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── PROJECTS CTA ── */}
        <section style={{padding: '70px 2.5rem'}}>
          <div style={{maxWidth: 1100, margin: '0 auto'}}>
            <div
              {...R()}
              style={{
                ...rs,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '2rem',
                flexWrap: 'wrap',
                background: C.bgAlt,
                border: `1px solid ${C.border}`,
                borderRadius: 20,
                padding: '2.5rem 3rem',
              }}
            >
              <div>
                <span className="section-label">Portfolio</span>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                    fontWeight: 700,
                    color: C.text,
                    lineHeight: 1.2,
                    marginBottom: '0.6rem',
                  }}
                >
                  Projects & Research
                </h2>
                <p style={{fontSize: '0.9rem', color: C.textSec, lineHeight: 1.75, maxWidth: 480}}>
                  {PROJECTS.length} projects spanning published papers, live products, ML systems,
                  and hardware builds — browsable, filterable, and sortable.
                </p>
              </div>
              <Button href="/projects">View All Projects →</Button>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── CONTACT ── */}
        <section id="contact" style={{padding: '90px 2.5rem', background: C.bgAlt}}>
          <div style={{maxWidth: 1100, margin: '0 auto'}}>
            <div
              className="two-col"
              style={{display: 'flex', gap: '5rem', alignItems: 'flex-start'}}
            >
              <div {...R()} style={{...rs, flex: '1 1 400px'}}>
                <span className="section-label">Get in Touch</span>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                    fontWeight: 700,
                    color: C.text,
                    lineHeight: 1.15,
                    marginBottom: '1.25rem',
                  }}
                >
                  Let's Connect
                </h2>
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.85,
                    color: C.textSec,
                    marginBottom: '2rem',
                  }}
                >
                  Whether you're curious about my research, interested in collaboration, or simply
                  want to form a genuine connection — I'm reachable via any of the channels below.
                </p>

                <a
                  href={`mailto:${EMAIL}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.88rem',
                    color: C.text,
                    textDecoration: 'none',
                    marginBottom: '2.5rem',
                    borderBottom: `1px solid ${C.border}`,
                    paddingBottom: '1.5rem',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = C.red
                    e.currentTarget.style.borderColor = C.redA25
                    e.currentTarget.style.gap = '0.8rem'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = C.text
                    e.currentTarget.style.borderColor = C.border
                    e.currentTarget.style.gap = '0.6rem'
                  }}
                >
                  <span
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: C.redA08,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = C.redA18
                      e.currentTarget.style.transform = 'scale(1.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = C.redA08
                      e.currentTarget.style.transform = 'scale(1)'
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={C.red}
                      strokeWidth="2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  {EMAIL}
                </a>

                {/*<div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>*/}
                {/*  {SOCIAL.map((s) => (*/}
                {/*    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{*/}
                {/*      display: "flex", alignItems: "center", gap: "0.75rem",*/}
                {/*      padding: "0.9rem 1.25rem", borderRadius: 14,*/}
                {/*      border: "1px solid #e8dece", background: "#fffef9",*/}
                {/*      color: "#1e1a14", textDecoration: "none", fontSize: "0.88rem",*/}
                {/*      fontWeight: 500, transition: "all 0.2s",*/}
                {/*      cursor: "pointer",*/}
                {/*    }}*/}
                {/*       onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(139,0,0,0.3)"; e.currentTarget.style.background = "rgba(139,0,0,0.03)"; }}*/}
                {/*       onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8dece"; e.currentTarget.style.background = "#fffef9"; }}*/}
                {/*    >*/}
                {/*      <span style={{ color: "#8B0000" }}>{s.icon}</span>*/}
                {/*      {s.label}*/}
                {/*      <svg style={{ marginLeft: "auto", opacity: 0.3 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>*/}
                {/*    </a>*/}
                {/*  ))}*/}
                {/*</div>*/}

                <SocialButtons />
              </div>

              {/* CTA card */}
              <div {...R()} style={{...rs, flex: '1 1 340px'}}>
                <div
                  style={{
                    background: C.red,
                    borderRadius: 24,
                    padding: '2.75rem 2.5rem',
                    color: C.bg,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Decorative circles — pure white/black, not in palette */}
                  <div
                    style={{
                      position: 'absolute',
                      top: -60,
                      right: -60,
                      width: 220,
                      height: 220,
                      borderRadius: '50%',
                      background: C.white05,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: -40,
                      left: -40,
                      width: 160,
                      height: 160,
                      borderRadius: '50%',
                      background: C.black10,
                    }}
                  />

                  <div style={{position: 'relative'}}>
                    <div style={{marginBottom: '1.25rem'}}>
                      <Handshake size={42} strokeWidth={1.2} color={C.bg} />
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        marginBottom: '0.75rem',
                      }}
                    >
                      Form a Deeper Connection
                    </h3>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        lineHeight: 1.75,
                        color: C.bgA70,
                        marginBottom: '2rem',
                      }}
                    >
                      Interested in learning more about me beyond what's on this page? Fill in the
                      form to connect more meaningfully.
                    </p>
                    <a
                      href="https://forms.gle/8LvKnRcXjYri2qZT6"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        background: C.bg,
                        color: C.red,
                        borderRadius: 100,
                        padding: '13px 26px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                        letterSpacing: '0.02em',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgb(var(--color-canvas-100))'
                        e.currentTarget.style.color = C.redDark
                        e.currentTarget.style.transform = 'translateY(-2px)'
                        e.currentTarget.style.boxShadow = `0 8px 25px ${C.redA15}`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = C.bg
                        e.currentTarget.style.color = C.red
                        e.currentTarget.style.transform = 'none'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      Connect with Me →
                    </a>
                  </div>
                </div>

                {/* Study reference */}
                {/*<div style={{*/}
                {/*  marginTop: "1.5rem",*/}
                {/*  background: "#fffef9", border: "1px solid #e8dece", borderRadius: 18,*/}
                {/*  padding: "1.5rem",*/}
                {/*}}>*/}
                {/*  <div style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#bab2a0", marginBottom: "0.5rem" }}>*/}
                {/*    Current Project*/}
                {/*  </div>*/}
                {/*  <p style={{ fontSize: "0.88rem", color: "#1e1a14", fontWeight: 500, lineHeight: 1.5, marginBottom: "0.75rem" }}>*/}
                {/*    Personalized Pre-Session Preparation in Early Autism Intervention*/}
                {/*  </p>*/}
                {/*  <p style={{ fontSize: "0.78rem", color: "#7a7060", lineHeight: 1.6, marginBottom: "1rem" }}>*/}
                {/*    An N-of-1 Bayesian adaptive trial at Maya Care & Grow, Agartala.*/}
                {/*  </p>*/}
                {/*  <a href="https://martinbraquet.com/autism-study" style={{*/}
                {/*    fontSize: "0.78rem", color: "#8B0000", fontWeight: 500,*/}
                {/*    textDecoration: "none", borderBottom: "1px solid rgba(139,0,0,0.25)",*/}
                {/*  }}>*/}
                {/*    View study site →*/}
                {/*  </a>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageBase>
  )
}
