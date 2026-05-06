import {useEffect, useRef, useState} from 'react'
import {PageBase} from 'web/components/page-base'
import {SEO} from 'web/components/SEO'
import {C} from 'web/lib/colors'

// ── Styles ─────────────────────────────────────────────────────────────────────

const styles = {
  // Base styles
  page: {
    fontFamily: "'DM Sans', sans-serif",
    background: 'rgb(var(--color-canvas-25))',
    color: 'rgb(var(--color-canvas-900))',
    overflowX: 'hidden' as const,
    minHeight: '100vh',
  },

  // Hero
  hero: {
    padding: '5rem 2.5rem 4rem',
    position: 'relative' as const,
    overflow: 'hidden',
    borderBottom: '1px solid rgb(var(--color-canvas-100))',
  },
  heroInner: {maxWidth: '1100px', margin: '0 auto', position: 'relative' as const, zIndex: 1},
  heroEyebrow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1.5rem',
    animation: 'fadeUp 0.5s ease both',
  },
  heroDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: 'rgb(var(--color-primary-800))',
    flexShrink: 0,
  },
  heroEyebrowText: {
    fontSize: '0.7rem',
    fontWeight: 500,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: 'rgb(var(--color-canvas-300))',
  },
  heroTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2.4rem, 5vw, 4rem)',
    fontWeight: 700,
    color: 'rgb(var(--color-canvas-900))',
    lineHeight: 1.05,
    marginBottom: '1rem',
    animation: 'fadeUp 0.55s 0.08s ease both',
  },
  heroAccent: {color: 'rgb(var(--color-primary-800))'},
  heroSub: {
    fontSize: '0.95rem',
    color: 'rgb(var(--color-canvas-400))',
    lineHeight: 1.8,
    maxWidth: '480px',
    animation: 'fadeUp 0.55s 0.16s ease both',
  },

  stat: {
    flex: 1,
    minWidth: '150px',
    padding: '1.25rem 2.5rem',
    borderRight: '1px solid rgb(var(--color-canvas-100))',
  },
  statLast: {borderRight: 'none'},
  statNumber: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '1.5rem',
    fontWeight: 500,
    color: 'rgb(var(--color-canvas-900))',
    display: 'block',
  },
  statLabel: {
    fontSize: '0.75rem',
    color: 'rgb(var(--color-canvas-300))',
    letterSpacing: '0.03em',
  },

  // Degree sections
  section: {padding: '5rem 2.5rem'},
  sectionAlt: {background: 'rgb(var(--color-canvas-50))'},
  sectionInner: {maxWidth: '1100px', margin: '0 auto'},
  sectionLabel: {
    fontSize: '0.65rem',
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase' as const,
    color: 'rgb(var(--color-primary-800))',
    display: 'block',
    marginBottom: '0.5rem',
  },
  degreeTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
    fontWeight: 700,
    color: 'rgb(var(--color-canvas-900))',
    lineHeight: 1.2,
  },

  // Semester grid
  semesterCard: {
    background: 'rgb(var(--color-canvas-0))',
    border: '1px solid rgb(var(--color-canvas-100))',
    borderRadius: '16px',
    padding: '1.5rem 1.75rem',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  },
  semesterCardAlt: {background: 'rgb(var(--color-canvas-25))'},
  semesterCardHover: {
    borderColor: 'rgb(var(--color-canvas-200))',
    boxShadow: '0 8px 24px rgb(var(--color-canvas-900) / 0.05)',
  },
  semesterTitle: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.72rem',
    fontWeight: 500,
    letterSpacing: '0.06em',
    textTransform: 'uppercase' as const,
    color: 'rgb(var(--color-primary-800))',
    marginBottom: '1rem',
    paddingBottom: '0.75rem',
    borderBottom: '1px solid rgb(var(--color-canvas-100))',
  },

  // Course list
  courseLink: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '0.6rem',
    color: 'rgb(var(--color-canvas-400))',
    textDecoration: 'none',
    fontSize: '0.84rem',
    lineHeight: 1.5,
    transition: 'color 0.15s',
  },
  courseLinkHover: {color: 'rgb(var(--color-canvas-900))'},
  courseCode: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.7rem',
    color: 'rgb(var(--color-canvas-300))',
    border: '1px solid rgb(var(--color-canvas-100))',
    borderRadius: '4px',
    padding: '1px 6px',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    transition: 'color 0.15s, border-color 0.15s',
  },
  courseCodeHover: {
    color: 'rgb(var(--color-primary-800))',
    borderColor: 'rgb(var(--color-primary-800) / 0.3)',
  },
}

// ── Types ─────────────────────────────────────────────────────────────────────

interface Course {
  code: string
  name: string
  pdf: string
}

interface Semester {
  term: string
  courses: Course[]
}

interface Degree {
  label: string // eyebrow label
  title: string
  institution: string
  years: string
  courseCount: number
  semesters: Semester[]
}

// ── Data ──────────────────────────────────────────────────────────────────────

const BASE = 'https://martinbraquet.com/wp-content/uploads'

const DEGREES: Degree[] = [
  {
    label: 'Graduate',
    title: 'MSc in Aerospace Engineering',
    institution: 'UT Austin',
    years: '2020 – 2022',
    courseCount: 9,
    semesters: [
      {
        term: 'Fall 2020',
        courses: [
          {
            code: 'ASE 380P 1',
            name: 'Analytical methods I',
            pdf: `${BASE}/Syllabus_ASE380P1_Fall2020.pdf`,
          },
          {
            code: 'ASE 381P 1',
            name: 'Linear systems analysis',
            pdf: `${BASE}/Syllabus_ASE381P1_Fall2020.pdf`,
          },
          {
            code: 'ASE 381P 6',
            name: 'Statistical estimation theory',
            pdf: `${BASE}/Syllabus_ASE381P6_Fall2020.pdf`,
          },
        ],
      },
      {
        term: 'Spring 2021',
        courses: [
          {
            code: 'ASE 380P 2',
            name: 'Analytical methods II',
            pdf: `${BASE}/Syllabus_ASE380P2_Spring2021.pdf`,
          },
          {
            code: 'ASE 381P 3',
            name: 'Optimal control theory',
            pdf: `${BASE}/Syllabus_ASE381P3_Spring2021.pdf`,
          },
        ],
      },
      {
        term: 'Fall 2021',
        courses: [
          {
            code: 'ASE 389',
            name: 'Modeling of multi-agent systems',
            pdf: `${BASE}/219_Syllabus_ASE389_Fridovich-Keil.pdf`,
          },
          {
            code: 'CS 391R',
            name: 'Robot learning',
            pdf: `${BASE}/Syllabus-CS391R-Robot-Learning.pdf`,
          },
        ],
      },
      {
        term: 'Spring 2022',
        courses: [
          {
            code: 'ASE 381P 2',
            name: 'Multivariable control systems',
            pdf: `${BASE}/ASE381P2_Syllabus_v2.pdf`,
          },
          {
            code: 'SDS 380D',
            name: 'Statistical methods II',
            pdf: `${BASE}/StatMethsII-Syllabus-2022.pdf`,
          },
        ],
      },
    ],
  },
  {
    label: 'Graduate',
    title: 'MSc in Electromechanical Engineering',
    institution: 'UCLouvain',
    years: '2018 – 2020',
    courseCount: 16,
    semesters: [
      {
        term: 'Fall 2018',
        courses: [
          {
            code: 'ELEC2313',
            name: 'Dynamic modelling and control of electromechanical converters',
            pdf: `${BASE}/2020/05/en-cours-2018-lelec2313.pdf`,
          },
          {
            code: 'ELEC2531',
            name: 'Design and architecture of digital electronic systems',
            pdf: `${BASE}/2020/05/en-cours-2018-lelec2531.pdf`,
          },
          {
            code: 'ELEC2660',
            name: 'Power electronics',
            pdf: `${BASE}/2020/05/en-cours-2018-lelec2660.pdf`,
          },
          {
            code: 'ELEC2811',
            name: 'Instrumentation and sensors',
            pdf: `${BASE}/2020/05/en-cours-2018-lelec2811.pdf`,
          },
          {
            code: 'EPL2351',
            name: 'Group dynamics',
            pdf: `${BASE}/2020/05/en-cours-2018-lepl2351.pdf`,
          },
          {
            code: 'MECA2755',
            name: 'Industrial automation',
            pdf: `${BASE}/2020/05/en-cours-2018-lmeca2755.pdf`,
          },
          {
            code: 'MECA2801',
            name: 'Machine design',
            pdf: `${BASE}/2020/05/en-cours-2018-lmeca2801.pdf`,
          },
        ],
      },
      {
        term: 'Spring 2019',
        courses: [
          {
            code: 'ELEC2103',
            name: 'Project in electricity 3: electronic systems',
            pdf: `${BASE}/2020/05/en-cours-2018-lelec2103.pdf`,
          },
          {
            code: 'ELEC2311',
            name: 'Physics of electromechanical converters',
            pdf: `${BASE}/2020/05/en-cours-2018-lelec2311.pdf`,
          },
          {
            code: 'ELEC2590',
            name: 'Seminar in electronics and communications',
            pdf: `${BASE}/2020/05/en-cours-2018-lelec2590.pdf`,
          },
          {
            code: 'ELEC2760',
            name: 'Secure electronic circuits and systems',
            pdf: `${BASE}/2020/05/en-cours-2018-lelec2760.pdf`,
          },
          {
            code: 'ELME2002',
            name: 'Project in mechatronics',
            pdf: `${BASE}/2020/05/en-cours-2018-lelme2002.pdf`,
          },
          {
            code: 'FSA2230',
            name: 'Introduction to management and business economics',
            pdf: `${BASE}/2020/05/en-cours-2018-lfsa2230.pdf`,
          },
          {
            code: 'INGI2315',
            name: 'Design of embedded and real-time systems',
            pdf: `${BASE}/2020/05/en-cours-2018-lingi2315.pdf`,
          },
          {
            code: 'INGI2347',
            name: 'Computer system security',
            pdf: `${BASE}/2020/05/en-cours-2018-lingi2347.pdf`,
          },
          {
            code: 'MECA2732',
            name: 'Introduction to robotics',
            pdf: `${BASE}/2020/05/en-cours-2018-lmeca2732.pdf`,
          },
        ],
      },
      {
        term: 'Fall 2019',
        courses: [
          {
            code: 'ELEC2795',
            name: 'Radiation and communication systems',
            pdf: `${BASE}/2020/05/en-cours-2019-lelec2795.pdf`,
          },
          {
            code: 'ELEC2870',
            name: 'Machine learning: regression, dimensionality reduction & visualization',
            pdf: `${BASE}/2020/05/en-cours-2019-lelec2870.pdf`,
          },
          {
            code: 'INGI2261',
            name: 'Artificial intelligence: representation and reasoning',
            pdf: `${BASE}/2020/05/en-cours-2019-lingi2261.pdf`,
          },
          {
            code: 'PHYS2143',
            name: 'Optics and lasers',
            pdf: `${BASE}/2020/05/en-cours-2019-lphys2143.pdf`,
          },
          {
            code: 'TECO2300',
            name: 'Societies, cultures, religions: ethical questions',
            pdf: `${BASE}/2020/05/en-cours-2019-lteco2300.pdf`,
          },
        ],
      },
      {
        term: 'Spring 2020',
        courses: [
          {
            code: 'ELEC2532',
            name: 'Design and architecture of analog electronic systems',
            pdf: `${BASE}/2020/05/en-cours-2019-lelec2532.pdf`,
          },
          {
            code: 'ELME2990',
            name: 'Master thesis',
            pdf: `${BASE}/2020/05/en-cours-2019-lelme2990.pdf`,
          },
          {
            code: 'INMA2345',
            name: 'Game theory',
            pdf: `${BASE}/2020/05/en-cours-2019-linma2345.pdf`,
          },
          {
            code: 'PHYS1231',
            name: 'Special relativity',
            pdf: `${BASE}/2020/05/en-cours-2019-lphys1231.pdf`,
          },
        ],
      },
    ],
  },
  {
    label: 'Undergraduate',
    title: 'BSc in Electrical/Mechanical Engineering',
    institution: 'UCLouvain',
    years: '2015 – 2018',
    courseCount: 36,
    semesters: [
      {
        term: 'Fall 2015',
        courses: [
          {
            code: 'FSAB1101',
            name: 'Mathematics 1',
            pdf: `${BASE}/2020/05/en-cours-2015-LFSAB1101.pdf`,
          },
          {code: 'FSAB1201', name: 'Physics 1', pdf: `${BASE}/2020/05/en-cours-2015-LFSAB1201.pdf`},
          {
            code: 'FSAB1401',
            name: 'Computer science 1',
            pdf: `${BASE}/2020/05/en-cours-2015-LFSAB1401.pdf`,
          },
          {code: 'FSAB1501', name: 'Project 1', pdf: `${BASE}/2020/05/en-cours-2015-LFSAB1501.pdf`},
        ],
      },
      {
        term: 'Spring 2016',
        courses: [
          {
            code: 'ANGL1871',
            name: 'English for civil engineers',
            pdf: `${BASE}/2020/05/en-cours-2015-LANGL1871.pdf`,
          },
          {
            code: 'FSAB1102',
            name: 'Mathematics 2',
            pdf: `${BASE}/2020/05/en-cours-2015-LFSAB1102.pdf`,
          },
          {code: 'FSAB1202', name: 'Physics 2', pdf: `${BASE}/2020/05/en-cours-2015-LFSAB1202.pdf`},
          {
            code: 'FSAB1301',
            name: 'Chemistry and physical chemistry',
            pdf: `${BASE}/2020/05/en-cours-2015-LFSAB1301.pdf`,
          },
          {code: 'FSAB1502', name: 'Project 2', pdf: `${BASE}/2020/05/en-cours-2015-LFSAB1502.pdf`},
          {
            code: 'FSAB1801',
            name: 'Critical history of science and technology',
            pdf: `${BASE}/2020/05/en-cours-2015-LFSAB1801.pdf`,
          },
        ],
      },
      {
        term: 'Fall 2016',
        courses: [
          {
            code: 'FSAB1103',
            name: 'Mathematics 3',
            pdf: `${BASE}/2020/05/en-cours-2016-LFSAB1103.pdf`,
          },
          {code: 'FSAB1203', name: 'Physics 3', pdf: `${BASE}/2020/05/en-cours-2016-LFSAB1203.pdf`},
          {
            code: 'FSAB1302',
            name: 'Chemistry and physical chemistry',
            pdf: `${BASE}/2020/05/en-cours-2016-LFSAB1302.pdf`,
          },
          {
            code: 'FSAB1402',
            name: 'Computer science 2',
            pdf: `${BASE}/2020/05/en-cours-2016-LFSAB1402.pdf`,
          },
          {code: 'FSAB1503', name: 'Project 3', pdf: `${BASE}/2020/05/en-cours-2016-LFSAB1503.pdf`},
          {
            code: 'FSAB1104',
            name: 'Numerical methods',
            pdf: `${BASE}/2020/05/en-cours-2016-LFSAB1104.pdf`,
          },
        ],
      },
      {
        term: 'Spring 2017',
        courses: [
          {
            code: 'ANGL1872',
            name: 'English: listening comprehension',
            pdf: `${BASE}/2020/05/en-cours-2016-LANGL1872.pdf`,
          },
          {
            code: 'ELEC1101',
            name: 'Project in electricity 1: electrical circuits',
            pdf: `${BASE}/2020/05/en-cours-2016-LELEC1101.pdf`,
          },
          {
            code: 'ELEC1370',
            name: 'Measurements and electrical circuits',
            pdf: `${BASE}/2020/05/en-cours-2016-LELEC1370.pdf`,
          },
          {
            code: 'FSAB1106',
            name: 'Applied mathematics: signals and systems',
            pdf: `${BASE}/2020/05/en-cours-2016-LFSAB1106.pdf`,
          },
          {
            code: 'FSAB1803',
            name: 'Economy of the firm',
            pdf: `${BASE}/2020/05/en-cours-2016-LFSAB1803.pdf`,
          },
          {
            code: 'MECA1120',
            name: 'Introduction to finite element methods',
            pdf: `${BASE}/2020/05/en-cours-2016-LMECA1120.pdf`,
          },
          {
            code: 'MECA1210',
            name: 'Description and analysis of mechanisms',
            pdf: `${BASE}/2020/05/en-cours-2016-LMECA1210.pdf`,
          },
        ],
      },
      {
        term: 'Fall 2017',
        courses: [
          {
            code: 'ANGL1873',
            name: 'English communication skills for engineers',
            pdf: `${BASE}/2020/05/en-cours-2017-langl1873.pdf`,
          },
          {
            code: 'ELEC1530',
            name: 'Basic analog and digital electronic circuits',
            pdf: `${BASE}/2020/05/en-cours-2017-lelec1530.pdf`,
          },
          {
            code: 'ELEC1755',
            name: 'Electricity: advanced topics',
            pdf: `${BASE}/2020/05/en-cours-2017-lelec1755.pdf`,
          },
          {
            code: 'FSAB1105',
            name: 'Probability and statistics',
            pdf: `${BASE}/2020/05/en-cours-2017-lfsab1105.pdf`,
          },
          {
            code: 'MECA1451',
            name: 'Mechanical manufacturing',
            pdf: `${BASE}/2020/05/en-cours-2017-lmeca1451.pdf`,
          },
          {
            code: 'MECA1855',
            name: 'Thermodynamics and energetics',
            pdf: `${BASE}/2020/05/en-cours-2017-lmeca1855.pdf`,
          },
          {
            code: 'MECA1901',
            name: 'Continuum mechanics',
            pdf: `${BASE}/2020/05/en-cours-2017-lmeca1901.pdf`,
          },
        ],
      },
      {
        term: 'Spring 2018',
        courses: [
          {
            code: 'ELEC1310',
            name: 'Electromechanical converters',
            pdf: `${BASE}/2020/05/en-cours-2017-lelec1310.pdf`,
          },
          {
            code: 'ELEC1360',
            name: 'Telecommunications',
            pdf: `${BASE}/2020/05/en-cours-2017-lelec1360.pdf`,
          },
          {
            code: 'INMA1510',
            name: 'Linear control',
            pdf: `${BASE}/2020/05/en-cours-2017-linma1510.pdf`,
          },
          {
            code: 'FSAB1504',
            name: 'Project 4 (mechanical engineering)',
            pdf: `${BASE}/2020/05/en-cours-2017-lfsab1504.pdf`,
          },
          {
            code: 'MECA1100',
            name: 'Deformable solid mechanics',
            pdf: `${BASE}/2020/05/en-cours-2017-lmeca1100.pdf`,
          },
          {
            code: 'MECA1321',
            name: 'Fluid mechanics and transfer phenomena',
            pdf: `${BASE}/2020/05/en-cours-2017-lmeca1321.pdf`,
          },
        ],
      },
    ],
  },
]

const TOTAL_COURSES = DEGREES.reduce((sum, d) => sum + d.courseCount, 0)

// ── Reusable Components ───────────────────────────────────────────────────────

interface HeroProps {
  title: string
  subtitle: string
  eyebrow: string
  accent?: string
}

function Hero({title, subtitle, eyebrow, accent}: HeroProps) {
  return (
    <header style={styles.hero}>
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
      <div style={styles.heroInner}>
        <div style={styles.heroEyebrow}>
          <div style={styles.heroDot} />
          <span style={styles.heroEyebrowText}>{eyebrow}</span>
        </div>
        <h1 style={styles.heroTitle}>
          {title}
          <br />
          {accent && <span style={styles.heroAccent}>{accent}</span>}
        </h1>
        <p style={styles.heroSub}>{subtitle}</p>
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
        ...styles.stat,
        ...(isLast ? styles.statLast : {}),
      }}
    >
      <span style={styles.statNumber}>{number}</span>
      <span style={styles.statLabel}>{label}</span>
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
          ...styles.courseLink,
          ...(isHovered ? styles.courseLinkHover : {}),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span
          style={{
            ...styles.courseCode,
            ...(isHovered ? styles.courseCodeHover : {}),
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
        ...styles.semesterCard,
        ...(alt ? styles.semesterCardAlt : {}),
        ...(isHovered ? styles.semesterCardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.semesterTitle}>{semester.term}</div>
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
        ...styles.section,
        ...(alt ? styles.sectionAlt : {}),
      }}
    >
      <div style={styles.sectionInner} ref={revealRef}>
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
            <span style={styles.sectionLabel}>{degree.label}</span>
            <h2 style={styles.degreeTitle}>{degree.title}</h2>
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
      <div style={styles.page}>
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
