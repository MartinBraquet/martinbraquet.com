import {useEffect, useRef, useState} from 'react'
import {PageBase} from 'web/components/page-base'
import {SEO} from 'web/components/SEO'
import {C} from 'web/lib/colors'
import {Course, Degree, DEGREES, Semester, TOTAL_COURSES} from 'web/lib/degrees'

// ── Reusable Components ───────────────────────────────────────────────────────

interface HeroProps {
  title: string
  subtitle: string
  eyebrow: string
  accent?: string
}

function Hero({title, subtitle, eyebrow, accent}: HeroProps) {
  return (
    <header
      style={{
        padding: '5rem 2.5rem 4rem',
        position: 'relative' as const,
        overflow: 'hidden',
        borderBottom: '1px solid rgb(var(--color-canvas-100))',
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
        C
      </div>
      <div style={{maxWidth: '1100px', margin: '0 auto', position: 'relative' as const, zIndex: 1}}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
            animation: 'fadeUp 0.5s ease both',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'rgb(var(--color-primary-800))',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase' as const,
              color: 'rgb(var(--color-canvas-300))',
            }}
          >
            {eyebrow}
          </span>
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 700,
            color: 'rgb(var(--color-canvas-900))',
            lineHeight: 1.05,
            marginBottom: '1rem',
            animation: 'fadeUp 0.55s 0.08s ease both',
          }}
        >
          {title}
          <br />
          {accent && <span style={{color: 'rgb(var(--color-primary-800))'}}>{accent}</span>}
        </h1>
        <p
          style={{
            fontSize: '0.95rem',
            color: 'rgb(var(--color-canvas-400))',
            lineHeight: 1.8,
            maxWidth: '480px',
            animation: 'fadeUp 0.55s 0.16s ease both',
          }}
        >
          {subtitle}
        </p>
      </div>
    </header>
  )
}

interface StatProps {
  number: string
  label: string
  isLast?: boolean
}

function Stat({number, label, isLast}: StatProps) {
  return (
    <div
      style={{
        flex: 1,
        minWidth: '150px',
        padding: '1.25rem 2.5rem',
        borderRight: '1px solid rgb(var(--color-canvas-100))',
        ...(isLast ? {borderRight: 'none'} : {}),
      }}
    >
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '1.5rem',
          fontWeight: 500,
          color: 'rgb(var(--color-canvas-900))',
          display: 'block',
        }}
      >
        {number}
      </span>
      <span
        style={{
          fontSize: '0.75rem',
          color: 'rgb(var(--color-canvas-300))',
          letterSpacing: '0.03em',
        }}
      >
        {label}
      </span>
    </div>
  )
}

interface StatsBarProps {
  stats: {number: string; label: string}[]
}

function StatsBar({stats}: StatsBarProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        background: 'rgb(var(--color-canvas-0))',
        borderBottom: '1px solid rgb(var(--color-canvas-100))',
      }}
    >
      {stats.map((stat, index) => (
        <Stat
          key={stat.label}
          number={stat.number}
          label={stat.label}
          isLast={index === stats.length - 1}
        />
      ))}
    </div>
  )
}

// ── Sub-components ────────────────────────────────────────────────────────────

function CourseItem({course}: {course: Course}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <li>
      <a
        href={course.pdf}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '0.6rem',
          color: 'rgb(var(--color-canvas-400))',
          textDecoration: 'none',
          fontSize: '0.84rem',
          lineHeight: 1.5,
          transition: 'color 0.15s',
          ...(isHovered ? {color: 'rgb(var(--color-canvas-900))'} : {}),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.7rem',
            color: 'rgb(var(--color-canvas-300))',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'rgb(var(--color-canvas-100))',
            borderRadius: '4px',
            padding: '1px 6px',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            transition: 'color 0.15s, border-color 0.15s',
            ...(isHovered
              ? {
                  color: 'rgb(var(--color-primary-800))',
                  borderColor: 'rgb(var(--color-primary-800) / 0.3)',
                }
              : {}),
          }}
        >
          {course.code}
        </span>
        {course.name}
      </a>
    </li>
  )
}

function SemesterCard({semester, alt}: {semester: Semester; alt: boolean}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        background: 'rgb(var(--color-canvas-0))',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rgb(var(--color-canvas-100))',
        borderRadius: '16px',
        padding: '1.5rem 1.75rem',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        ...(alt ? {background: 'rgb(var(--color-canvas-25))'} : {}),
        ...(isHovered
          ? {
              borderColor: 'rgb(var(--color-canvas-200))',
              boxShadow: '0 8px 24px rgb(var(--color-canvas-900) / 0.05)',
            }
          : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.72rem',
          fontWeight: 500,
          letterSpacing: '0.06em',
          textTransform: 'uppercase' as const,
          color: 'rgb(var(--color-primary-800))',
          marginBottom: '1rem',
          paddingBottom: '0.75rem',
          borderBottom: '1px solid rgb(var(--color-canvas-100))',
        }}
      >
        {semester.term}
      </div>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.45rem',
        }}
      >
        {semester.courses.map((c) => (
          <CourseItem key={c.code} course={c} />
        ))}
      </ul>
    </div>
  )
}

function DegreeSection({degree, alt}: {degree: Degree; alt: boolean}) {
  const revealRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = revealRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          obs.disconnect()
        }
      },
      {threshold: 0.06},
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      style={{
        padding: '5rem 2.5rem',
        ...(alt ? {background: 'rgb(var(--color-canvas-50))'} : {}),
      }}
    >
      <div style={{maxWidth: '1100px', margin: '0 auto'}} ref={revealRef}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
            paddingBottom: '2rem',
            marginBottom: '2.5rem',
            borderBottom: '1px solid rgb(var(--color-canvas-100))',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase' as const,
                color: 'rgb(var(--color-primary-800))',
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              {degree.label}
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 700,
                color: 'rgb(var(--color-canvas-900))',
                lineHeight: 1.2,
              }}
            >
              {degree.title}
            </h2>
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.78rem',
              color: 'rgb(var(--color-canvas-300))',
              textAlign: 'right',
              lineHeight: 1.7,
              flexShrink: 0,
            }}
          >
            <span>{degree.institution}</span>
            <br />
            <span>{degree.years}</span>
            <br />
            <span>{degree.courseCount} courses</span>
          </div>
        </div>

        <div
          style={{
            gap: '1rem',
          }}
          className={'grid grid-cols-1 sm:grid-cols-2'}
        >
          {degree.semesters.map((sem) => (
            <SemesterCard key={sem.term} semester={sem} alt={alt} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CoursesUniversity() {
  const statsData = [
    {number: '3', label: 'Degrees'},
    {number: TOTAL_COURSES.toString(), label: 'Courses'},
    {number: '2', label: 'Universities'},
    {number: '7', label: 'Years'},
  ]

  const description = `${TOTAL_COURSES} courses across three degrees spanning electrical, mechanical, and aerospace engineering — from UCLouvain to UT Austin.`

  return (
    <PageBase>
      <SEO title={'University Courses'} description={description} />
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: 'rgb(var(--color-canvas-25))',
          color: 'rgb(var(--color-canvas-900))',
          overflowX: 'hidden' as const,
          minHeight: '100vh',
        }}
      >
        {/* ── HERO ── */}
        <Hero
          title="Courses followed"
          subtitle={description}
          eyebrow="Academia"
          accent="at university"
        />

        {/* ── STATS BAR ── */}
        <StatsBar stats={statsData} />

        {/* ── DEGREE SECTIONS ── */}
        {DEGREES.map((degree, i) => (
          <DegreeSection key={degree.title} degree={degree} alt={i % 2 === 1} />
        ))}
      </div>
    </PageBase>
  )
}
