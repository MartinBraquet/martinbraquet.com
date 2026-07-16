import {BookOpen, FileText, GraduationCap, Library} from 'lucide-react'
import {useEffect, useRef, useState} from 'react'
import {Badge, StatBubble} from 'web/components/badges'
import {CustomLink} from 'web/components/links'
import {PageBase} from 'web/components/page-base'
import {SEO} from 'web/components/SEO'
import {SOCIAL} from 'web/components/socials'
import {C} from 'web/lib/colors'
import {EMAIL} from 'web/lib/constants'

import Button from '../components/ui/Button'
import SocialButton from '../components/ui/SocialButton'
import {BADGE_LABELS, PROJECTS} from './projects'

// ── Data ──────────────────────────────────────────────────────────────────────

const PROFILE_PIC =
  'https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/profile-media/martin-indoor.jpg'

const BANNER_PIC =
  'https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/profile-media/banner.jpg'

const NATURE_BASE = 'https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/nature'

/** The strip is decorative — the /nature page carries the real captions. */
const NATURE_STRIP = [
  {src: `${NATURE_BASE}/dragonfly.jpg`, position: 'center'},
  {src: `${NATURE_BASE}/horse.jpg`, position: 'center'},
  {src: `${NATURE_BASE}/donkey.jpg`, position: 'center'},
  // {src: `${NATURE_BASE}/cow.jpg`, position: 'center'},
  {src: `${NATURE_BASE}/cow-india.jpg`, position: 'center'},
  {src: `${NATURE_BASE}/bee.jpg`, position: 'center'},
  // Subject sits high in the frame; a plain centre crop cuts the face.
  // {src: `${NATURE_BASE}/cat.jpg`, position: '50% 30%'},
]

/** Featured = highest-importance projects, in PROJECTS order (newest first). */
const FEATURED = PROJECTS.filter((p) => p.importance === 3).slice(0, 3)

const ACADEMIA_LINKS = [
  {
    icon: FileText,
    label: 'Curriculum Vitae',
    href: 'https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/Braquet-Martin-cv-2026.pdf',
  },
  {icon: Library, label: 'Publications', href: '/publications'},
  {icon: BookOpen, label: 'University Courses', href: '/courses-university'},
  {
    icon: GraduationCap,
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=thzpnRoAAAAJ',
  },
]

const LEDE =
  'I build technologies for purposeful ends — climate-risk finance, humanitarian tools, and open-source science. Now looking for nonprofit work with measurable human impact.'

const CLOSING_NOTE =
  "What's here reflects pieces of me, but not the full constellation. Explore as you like; fill in the gaps at your own risk."

// ── Sub-components ────────────────────────────────────────────────────────────

function SocialButtons({withEmail = false}: {withEmail?: boolean}) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '0.8rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {SOCIAL.map((s) => (
        <SocialButton key={s.label} href={s.href}>
          {s.icon} {s.label}
        </SocialButton>
      ))}
      {withEmail && (
        <SocialButton href={`mailto:${EMAIL}`}>
          <MailIcon size={16} />
          Email
        </SocialButton>
      )}
    </div>
  )
}

function MailIcon({size = 14, color = 'currentColor'}: {size?: number; color?: string}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function HeroBanner() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setOffset(Math.min(window.scrollY, 700) * 0.3))
    }
    window.addEventListener('scroll', onScroll, {passive: true})
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section
      className="hero-banner"
      aria-hidden="true"
      style={{
        position: 'relative',
        height: 'var(--banner-h)',
        overflow: 'hidden',
        background: C.bg,
      }}
    >
      {/* Reveal wrapper — animation owns the scale, the img owns the parallax */}
      <div style={{position: 'absolute', inset: 0, animation: 'bannerReveal 1.3s ease-out both'}}>
        <img
          src={BANNER_PIC}
          alt=""
          style={{
            position: 'absolute',
            top: '-14%',
            left: 0,
            width: '100%',
            height: '128%',
            objectFit: 'cover',
            objectPosition: '30% 58%',
            display: 'block',
            transform: `translate3d(0, ${offset}px, 0)`,
            willChange: 'transform',
          }}
        />
      </div>

      {/* Warm tint — marries the cool photo to the brand palette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to bottom, ${C.redA25} 0%, transparent 45%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Bottom fade — dissolves the banner into the hero */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to top, ${C.bg} 0%, rgb(var(--color-canvas-25) / 0.6) 22%, transparent 62%)`,
          pointerEvents: 'none',
        }}
      />
    </section>
  )
}

function HeroPortrait() {
  const [tilt, setTilt] = useState({rx: 0, ry: 0})
  const [hovered, setHovered] = useState(false)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    setTilt({rx: -py * 9, ry: px * 11})
  }

  const reset = () => {
    setHovered(false)
    setTilt({rx: 0, ry: 0})
  }

  return (
    <div
      className="hero-portrait"
      style={{
        flex: '0 0 clamp(230px, 26vw, 300px)',
        perspective: 1100,
        animation: 'fadeUp 0.7s 0.2s ease both',
      }}
    >
      <div
        onMouseMove={handleMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={reset}
        style={{
          position: 'relative',
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${hovered ? 1.02 : 1})`,
          transformStyle: 'preserve-3d',
          transition: hovered ? 'transform 0.1s ease-out' : 'transform 0.6s ease-out',
        }}
      >
        {/* Warm glow behind the frame */}
        <div
          style={{
            position: 'absolute',
            inset: '-12%',
            borderRadius: '50%',
            background: `radial-gradient(circle at 50% 45%, ${C.redA15} 0%, transparent 65%)`,
            filter: 'blur(28px)',
            pointerEvents: 'none',
          }}
        />

        {/* Offset outline — editorial accent */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 26,
            border: `1px solid ${C.redA30}`,
            transform: `translate3d(${16 + tilt.ry}px, ${16 - tilt.rx}px, -40px)`,
            transition: hovered ? 'transform 0.1s ease-out' : 'transform 0.6s ease-out',
            pointerEvents: 'none',
          }}
        />

        {/* Photo frame */}
        <div
          style={{
            position: 'relative',
            aspectRatio: '4/5',
            borderRadius: 26,
            overflow: 'hidden',
            border: `1px solid ${C.border}`,
            background: C.bgAlt,
            boxShadow: hovered
              ? `0 30px 70px ${C.redA25}, 0 6px 18px ${C.inkA07}`
              : `0 18px 45px ${C.redA15}, 0 4px 12px ${C.inkA04}`,
            transition: 'box-shadow 0.4s ease',
          }}
        >
          <img
            src={PROFILE_PIC}
            alt="Portrait of Martin Braquet"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: '50% 18%',
              display: 'block',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.7s ease-out',
            }}
          />
        </div>
      </div>
    </div>
  )
}

function SectionHeading({
  label,
  title,
  children,
  align = 'left',
}: {
  label: string
  title: React.ReactNode
  children?: React.ReactNode
  align?: 'left' | 'center'
}) {
  return (
    <div style={align === 'center' ? {textAlign: 'center'} : undefined}>
      <span className="section-label">{label}</span>
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
          fontWeight: 700,
          color: C.text,
          lineHeight: 1.15,
          marginBottom: children ? '0.75rem' : 0,
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  )
}

function AboutParagraph({children}: {children: React.ReactNode}) {
  return (
    <p
      style={{
        fontSize: '1rem',
        lineHeight: 1.85,
        color: C.textSec,
        marginBottom: '0.85rem',
      }}
    >
      {children}
    </p>
  )
}

function FeaturedCard({p}: {p: (typeof PROJECTS)[number]}) {
  const [hovered, setHovered] = useState(false)

  const href =
    p.links.live ??
    p.links.article ??
    p.links.paper ??
    p.links.thesis ??
    p.links.report ??
    p.links.github ??
    '/projects'

  return (
    <CustomLink
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: '1 1 260px',
        display: 'flex',
        flexDirection: 'column',
        background: C.bgCard,
        border: `1px solid ${hovered ? C.borderMd : C.border}`,
        borderRadius: 18,
        overflow: 'hidden',
        textDecoration: 'none',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? `0 14px 36px ${C.inkA07}` : 'none',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
      }}
    >
      {p.media && (
        <div style={{aspectRatio: '3/2', overflow: 'hidden', background: C.bg, flexShrink: 0}}>
          <img
            src={p.media}
            alt=""
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'left center',
              display: 'block',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.5s ease',
            }}
          />
        </div>
      )}

      <div
        style={{
          padding: '1.25rem 1.4rem 1.4rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '0.4rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginBottom: '0.6rem',
          }}
        >
          <Badge kind={p.badge}>{BADGE_LABELS[p.badge]}</Badge>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.68rem',
              color: C.textTert,
            }}
          >
            {p.year}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.05rem',
            fontWeight: 600,
            color: C.text,
            lineHeight: 1.35,
            marginBottom: '0.4rem',
          }}
        >
          {p.title}
        </h3>

        <p className="clamp-3" style={{fontSize: '0.82rem', color: C.textSec, lineHeight: 1.65}}>
          {p.description}
        </p>

        <div style={{flex: 1, minHeight: '1rem'}} />

        <div style={{display: 'flex', alignItems: 'center', gap: '0.6rem'}}>
          {p.stat && <StatBubble>{p.stat}</StatBubble>}
          <div style={{flex: 1}} />
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: C.red,
              display: 'inline-flex',
              gap: '0.35rem',
              alignItems: 'center',
            }}
          >
            View
            <span
              style={{
                transform: hovered ? 'translateX(4px)' : 'none',
                transition: 'transform 0.2s ease',
              }}
            >
              →
            </span>
          </span>
        </div>
      </div>
    </CustomLink>
  )
}

function NatureStrip() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="nature-strip" aria-hidden="true" style={{display: 'flex', width: '100%'}}>
      {NATURE_STRIP.map((n, i) => (
        <div
          key={n.src}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            flex: hovered === i ? 2.2 : 1,
            minWidth: 0,
            height: 'clamp(200px, 30vh, 320px)',
            overflow: 'hidden',
            transition: 'flex 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <img
            src={n.src}
            alt=""
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: n.position,
              display: 'block',
              filter: hovered === null || hovered === i ? 'none' : 'saturate(0.6) brightness(0.5)',
              transition: 'filter 0.55s ease',
            }}
          />
        </div>
      ))}
    </div>
  )
}

function AcademiaRow() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div
      className="academia-row"
      style={{
        display: 'flex',
        border: `1px solid ${C.border}`,
        borderRadius: 16,
        overflow: 'hidden',
        background: C.bgCard,
      }}
    >
      {ACADEMIA_LINKS.map((item, i) => {
        const Icon = item.icon
        const isHovered = hovered === item.label
        return (
          <CustomLink
            key={item.label}
            href={item.href}
            onMouseEnter={() => setHovered(item.label)}
            onMouseLeave={() => setHovered(null)}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1.25rem 1.4rem',
              textDecoration: 'none',
              borderLeft: i ? `1px solid ${C.border}` : 'none',
              background: isHovered ? C.redA04 : 'transparent',
              transition: 'background 0.2s ease',
            }}
          >
            <Icon size={20} strokeWidth={1.5} color={C.red} />
            <span style={{fontSize: '0.85rem', fontWeight: 500, color: C.text}}>{item.label}</span>
            <span style={{flex: 1}} />
            <span
              style={{
                fontSize: '0.85rem',
                color: C.red,
                transform: isHovered ? 'translateX(3px)' : 'none',
                transition: 'transform 0.2s ease',
              }}
            >
              →
            </span>
          </CustomLink>
        )
      })}
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

  return (
    <PageBase>
      <SEO description={LEDE} />
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: C.bg,
          color: C.text,
          overflowX: 'hidden',
        }}
      >
        {/* ── BANNER ── */}
        <HeroBanner />

        {/* ── HERO ── */}
        <section
          style={{
            minHeight: 'max(360px, calc(70vh - var(--banner-h)))',
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

          <div
            style={{
              maxWidth: 1100,
              margin: '0 auto',
              width: '100%',
              position: 'relative',
              zIndex: 1,
              paddingTop: '1.5rem',
              paddingBottom: '3rem',
            }}
          >
            <div className="hero-grid" style={{display: 'flex', alignItems: 'center', gap: '4rem'}}>
              <div style={{flex: '1 1 340px', maxWidth: 620}}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem',
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
                    Quantitative Engineer & Researcher
                  </span>
                </div>

                <h1
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(2.6rem, 6vw, 5rem)',
                    lineHeight: 1.0,
                    fontWeight: 700,
                    color: C.text,
                    marginBottom: '1.25rem',
                    animation: 'fadeUp 0.55s 0.08s ease both',
                  }}
                >
                  Martin
                  <br />
                  <span style={{color: C.red}}>Braquet</span>
                </h1>

                <p
                  style={{
                    fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
                    lineHeight: 1.75,
                    color: C.textSec,
                    maxWidth: 540,
                    marginBottom: '2rem',
                    animation: 'fadeUp 0.55s 0.16s ease both',
                  }}
                >
                  {LEDE}
                </p>

                <div
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    flexWrap: 'wrap',
                    animation: 'fadeUp 0.55s 0.24s ease both',
                  }}
                >
                  {/*<Button href="#work">See my work →</Button>*/}
                  <Button href="#contact" variant="outline">
                    Get in touch
                  </Button>
                </div>
              </div>

              <HeroPortrait />
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── ABOUT ── */}
        <section id="about" style={{padding: '90px 2.5rem'}}>
          <div style={{maxWidth: 1100, margin: '0 auto'}}>
            <div
              className="two-col"
              style={{display: 'flex', gap: '5rem', alignItems: 'flex-start'}}
            >
              {/* LEFT — Personal */}
              <div {...R()} style={{...rs, flex: '0 0 45%'}}>
                <SectionHeading label="About" title="Personal Life" />
                <div style={{marginTop: '1.5rem'}}>
                  <AboutParagraph>
                    I find as much awe in a contemplative walk through the woods as I do in a
                    complex physics paper. I'm drawn to exploring the world by living as a local for
                    extensive periods of time — a pull that has taken me to Belgium, the US, and
                    India. In my free time, you'll most likely find me helping people in need,
                    running, reading nonfiction, or bonding with my loved ones.
                  </AboutParagraph>
                  <AboutParagraph>
                    To find out more, feel free to explore my Compass profile — a space designed for
                    deeper connection.
                  </AboutParagraph>
                  <Button href="https://compassmeet.com/Martin">Compass Profile →</Button>
                </div>
              </div>

              {/* RIGHT — Professional */}
              <div {...R()} style={{...rs, flex: '1 1 280px'}}>
                <SectionHeading label="Professional" title="Open to Work" />
                <div style={{marginTop: '1.5rem'}}>
                  <AboutParagraph>
                    Quantitative engineer and full-stack developer with 4 years of experience across
                    aerospace robotics, climate-risk finance, humanitarian software, and open-source
                    science.
                  </AboutParagraph>
                  <AboutParagraph>
                    Questioning the relationship between technological and moral progress, I'm drawn
                    to technologies deliberately scoped to purposeful, laudable ends. I'm seeking
                    nonprofit roles with human interaction at organizations driving measurable
                    impact on humanitarian causes such as global development.
                  </AboutParagraph>
                  <Button href="https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/Braquet-Martin-resume.pdf">
                    Download Resume →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── FEATURED WORK ── */}
        <section id="work" style={{padding: '90px 2.5rem', background: C.bgAlt}}>
          <div style={{maxWidth: 1100, margin: '0 auto'}}>
            <div {...R()} style={{...rs, marginBottom: '3rem'}}>
              <SectionHeading label="Portfolio" title="Selected Work">
                <p style={{fontSize: '0.95rem', color: C.textSec, maxWidth: 740, lineHeight: 1.8}}>
                  Three of the {PROJECTS.length} projects I built — a live product, a platform I
                  founded, and influential research I published.
                </p>
              </SectionHeading>
            </div>

            <div
              {...R()}
              className="featured-grid"
              style={{...rs, display: 'flex', gap: '1.5rem', alignItems: 'stretch'}}
            >
              {FEATURED.map((p) => (
                <FeaturedCard key={p.title} p={p} />
              ))}
            </div>

            <div {...R()} style={{...rs, marginTop: '2.5rem', textAlign: 'center'}}>
              <Button href="/projects" variant="outline">
                View all {PROJECTS.length} projects →
              </Button>
            </div>
          </div>
        </section>

        {/* ── ACADEMIA ── */}
        <section id="academia" style={{padding: '90px 2.5rem'}}>
          <div style={{maxWidth: 1100, margin: '0 auto'}}>
            <div {...R()} style={{...rs, marginBottom: '2rem'}}>
              <SectionHeading label="Academia" title="Research & Education">
                <p style={{fontSize: '0.95rem', color: C.textSec, maxWidth: 540, lineHeight: 1.8}}>
                  Trained across engineering and sciences, with graduate research spanning task
                  allocation, controls, and energy-efficient sensing.
                </p>
              </SectionHeading>
            </div>

            <div {...R()} style={{...rs}}>
              <AcademiaRow />
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── NATURE (full-bleed) ── */}
        <section id="nature" style={{paddingTop: '90px'}}>
          <div {...R()} style={{...rs, maxWidth: 640, margin: '0 auto 3rem', padding: '0 2.5rem'}}>
            <SectionHeading label="Beyond the Work" title="Nature" align="center">
              <p
                style={{
                  fontSize: '0.95rem',
                  color: C.textSec,
                  lineHeight: 1.8,
                  marginBottom: '1.75rem',
                }}
              >
                Nature is beautiful when we have the eyes to appreciate it. Encounters with the
                animals who decided to come closer — a sparrow on my lap, a dragonfly at rest, a
                horse begging for food.
              </p>
              <Button href="/nature">Explore →</Button>
            </SectionHeading>
          </div>

          <NatureStrip />
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" style={{padding: '90px 2.5rem 110px', background: C.bgAlt}}>
          <div {...R()} style={{...rs, maxWidth: 640, margin: '0 auto', textAlign: 'center'}}>
            <SectionHeading label="Get in Touch" title="Let's Connect" align="center">
              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.85,
                  color: C.textSec,
                  marginBottom: '2.5rem',
                }}
              >
                Whether you're curious about my research, interested in collaboration, or simply
                want to form a genuine connection — write to me.
              </p>
            </SectionHeading>

            <a
              href={`mailto:${EMAIL}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.7rem',
                fontFamily: "'DM Mono', monospace",
                fontSize: 'clamp(0.85rem, 1.6vw, 1.05rem)',
                color: C.text,
                textDecoration: 'none',
                padding: '0.9rem 1.6rem',
                borderRadius: 100,
                border: `1px solid ${C.border}`,
                background: C.bgCard,
                marginBottom: '2.5rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = C.red
                e.currentTarget.style.borderColor = C.redA30
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = `0 8px 24px ${C.redA15}`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = C.text
                e.currentTarget.style.borderColor = C.border
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <MailIcon size={16} color={C.red} />
              {EMAIL}
            </a>

            <SocialButtons />

            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: '1rem',
                lineHeight: 1.75,
                color: C.textTert,
                maxWidth: 520,
                margin: '3.5rem auto 0',
                paddingTop: '2.5rem',
                borderTop: `1px solid ${C.border}`,
              }}
            >
              "{CLOSING_NOTE}"
            </p>
          </div>
        </section>
      </div>
    </PageBase>
  )
}
