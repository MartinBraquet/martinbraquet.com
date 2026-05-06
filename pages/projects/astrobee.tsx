import {
  ActionBtn,
  BackLink,
  Badge,
  DownloadIcon,
  Section,
  StatBubble,
  TechTag,
} from 'web/components/badges'
import {PageBase} from 'web/components/page-base'
import {SEO} from 'web/components/SEO'
import {C} from 'web/lib/colors'

// ── Role card ─────────────────────────────────────────────────────────────────

function RoleCard({icon, title, body}: {icon: string; title: string; body: string}) {
  return (
    <div
      style={{
        background: C.bgCard,
        border: `1px solid ${C.border}`,
        borderRadius: 14,
        padding: '1.5rem',
      }}
    >
      <div style={{fontSize: '1.5rem', marginBottom: '0.6rem'}}>{icon}</div>
      <h3
        style={{
          fontSize: '0.9rem',
          fontWeight: 600,
          color: C.text,
          marginBottom: '0.4rem',
        }}
      >
        {title}
      </h3>
      <p style={{fontSize: '0.82rem', color: C.textSec, lineHeight: 1.65}}>{body}</p>
    </div>
  )
}

// ── Task card ─────────────────────────────────────────────────────────────────

function TaskCard({step, title, body}: {step: string; title: string; body: string}) {
  return (
    <div
      style={{
        background: C.bgCard,
        border: `1px solid ${C.border}`,
        borderRadius: 14,
        padding: '1.25rem 1.4rem',
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-start',
      }}
    >
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '1.1rem',
          fontWeight: 600,
          color: C.red,
          lineHeight: 1,
          paddingTop: '0.15rem',
          flexShrink: 0,
        }}
      >
        {step}
      </span>
      <div>
        <h3
          style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            color: C.text,
            marginBottom: '0.3rem',
          }}
        >
          {title}
        </h3>
        <p style={{fontSize: '0.78rem', color: C.textSec, lineHeight: 1.6}}>{body}</p>
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AstrobeePage() {
  return (
    <PageBase>
      <SEO
        title={'Building of Astrobee'}
        description={
          'Research internship at MIT Space Systems Laboratory — building the avionics of a NASA Astrobee robot for the International Space Station.'
        }
      />
      <div style={{background: C.bg, color: C.text, overflowX: 'hidden'}}>
        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: none; }
          }
        `}</style>

        {/* ── HERO ── */}
        <header
          style={{
            padding: '4rem 2.5rem 3.5rem',
            borderBottom: `1px solid ${C.border}`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* background decoration */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background: `radial-gradient(ellipse 55% 70% at 100% 30%, ${C.redA07} 0%, transparent 65%), radial-gradient(ellipse 30% 40% at 0% 90%, rgba(114,154,196,0.07) 0%, transparent 55%)`,
            }}
          />
          <div
            style={{
              position: 'absolute',
              right: '2%',
              top: '50%',
              transform: 'translateY(-50%)',
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(8rem, 16vw, 18rem)',
              fontWeight: 700,
              color: C.redA045,
              lineHeight: 1,
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            A
          </div>

          <div style={{maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1}}>
            {/* breadcrumb */}
            <BackLink />

            {/* badges */}
            <div
              style={{
                display: 'flex',
                gap: '0.4rem',
                flexWrap: 'wrap',
                marginBottom: '1rem',
                animation: 'fadeUp 0.5s ease both',
              }}
            >
              <Badge kind="project">Robotics</Badge>
              <Badge kind="project">Research</Badge>
              <Badge kind="project">Space</Badge>
            </div>

            {/* title */}
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                fontWeight: 700,
                color: C.text,
                lineHeight: 1.08,
                marginBottom: '0.9rem',
                maxWidth: 700,
                animation: 'fadeUp 0.55s 0.06s ease both',
              }}
            >
              Building <span style={{color: C.red}}>Astrobee</span> at MIT
            </h1>

            {/* meta row */}
            <p
              style={{
                fontSize: '0.78rem',
                color: C.textTert,
                fontStyle: 'italic',
                marginBottom: '1.25rem',
                animation: 'fadeUp 0.55s 0.1s ease both',
              }}
            >
              Research Internship · UCLouvain × MIT · July–August 2019
            </p>

            {/* description */}
            <p
              style={{
                fontSize: '0.95rem',
                color: C.textSec,
                lineHeight: 1.8,
                maxWidth: 680,
                marginBottom: '1.5rem',
                animation: 'fadeUp 0.55s 0.14s ease both',
              }}
            >
              An exchange program between UCLouvain and MIT gave me the opportunity to conduct
              research at the <strong style={{color: C.text}}>MIT Space Systems Laboratory</strong>.
              Working in a team, we built MIT's own copy of Astrobee — NASA's free-flying robotic
              assistant designed to work alongside astronauts on the{' '}
              <strong style={{color: C.text}}>International Space Station</strong>.
            </p>

            {/* tech + stat */}
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
                alignItems: 'center',
                marginBottom: '1.75rem',
                animation: 'fadeUp 0.55s 0.18s ease both',
              }}
            >
              {['Electronics', 'PCB Design', 'Embedded Systems', 'Avionics'].map((t) => (
                <TechTag key={t}>{t}</TechTag>
              ))}
              <StatBubble>MIT SSL</StatBubble>
            </div>

            {/* action links */}
            <div
              style={{
                display: 'flex',
                gap: '0.6rem',
                flexWrap: 'wrap',
                animation: 'fadeUp 0.55s 0.22s ease both',
              }}
            >
              <ActionBtn
                href="https://martinbraquet.com/wp-content/uploads/work_report_non_confidential.pdf"
                primary
              >
                <DownloadIcon /> Full Report
              </ActionBtn>
            </div>
          </div>
        </header>

        {/* ── IMAGE + DESCRIPTION ── */}
        <div style={{borderBottom: `1px solid ${C.border}`}}>
          <div
            style={{
              maxWidth: 900,
              margin: '0 auto',
              padding: '3rem 2.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
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
                Astrobee at MIT SSL
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
                  src="https://martinbraquet.com/wp-content/uploads/2019/09/dA9jU8cXH9pB5edo4ZJnEC.jpg"
                  alt="Astrobee robot at MIT Space Systems Laboratory"
                  style={{width: '100%', display: 'block', objectFit: 'cover'}}
                />
              </div>
            </div>
            <div>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: C.textSec,
                  lineHeight: 1.8,
                }}
              >
                Designed by NASA, Astrobee robots are{' '}
                <strong style={{color: C.text}}>robotic teammates</strong> that assist astronauts
                with routine tasks aboard the ISS — freeing them to focus on work that only humans
                can do. My contribution as a Master's student in electromechanical engineering was
                to build the <strong style={{color: C.text}}>avionics subsystem</strong>: from the
                electrical diagram all the way through component sourcing, PCB soldering, and sensor
                validation.
              </p>
            </div>
          </div>
        </div>

        {/* ── STATS BAR ── */}
        <div style={{background: C.bgCard, borderBottom: `1px solid ${C.border}`}}>
          <div
            style={{
              maxWidth: 1100,
              margin: '0 auto',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {[
              {n: '2 mo', label: 'Research duration', sub: 'July – August 2019'},
              {n: 'MIT', label: 'Host institution', sub: 'Space Systems Laboratory'},
              {n: 'ISS', label: 'Deployment target', sub: 'International Space Station'},
              {n: 'NASA', label: 'Original designer', sub: 'Astrobee free-flyer program'},
            ].map(({n, label, sub}, i, arr) => (
              <div
                key={label}
                style={{
                  flex: '1 1 160px',
                  padding: '1.25rem 1.75rem',
                  borderRight: i < arr.length - 1 ? `1px solid ${C.border}` : 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    color: C.text,
                    display: 'block',
                  }}
                >
                  {n}
                </span>
                <span style={{fontSize: '0.75rem', color: C.textSec, display: 'block'}}>
                  {label}
                </span>
                <span style={{fontSize: '0.68rem', color: C.textTert, display: 'block'}}>
                  {sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── OVERVIEW ── */}
        <Section label="About" title="What is Astrobee?">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            <RoleCard
              icon="🛸"
              title="The Robot"
              body="Astrobee is a cube-shaped free-flying robot developed by NASA. It navigates the microgravity environment of the ISS using electric fans for propulsion, and carries cameras and sensors to perceive its surroundings."
            />
            <RoleCard
              icon="👨‍🚀"
              title="The Mission"
              body="Astrobee acts as a robotic crewmate — performing inventory checks, equipment monitoring, and routine inspections autonomously. This lets astronauts dedicate more time to complex scientific work and exploration."
            />
            <RoleCard
              icon="🔬"
              title="The Research"
              body="The MIT Space Systems Laboratory builds its own Astrobee units for research and development. My internship contributed a fully functioning avionics system, enabling further space robotics research at MIT."
            />
          </div>
        </Section>

        {/* ── MY WORK ── */}
        <Section label="Contributions" title="Building the avionics">
          <p
            style={{
              fontSize: '0.88rem',
              color: C.textSec,
              lineHeight: 1.75,
              maxWidth: 700,
              marginBottom: '1.75rem',
            }}
          >
            As the avionics engineer on the team, I was responsible for the electrical subsystem of
            the robot.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '0.9rem',
            }}
          >
            <TaskCard
              step="01"
              title="Avionics Diagram"
              body="Designed the electrical architecture of the robot — mapping power distribution, sensor interfaces, and communication buses across all onboard systems."
            />
            <TaskCard
              step="02"
              title="Component Sourcing"
              body="Identified and ordered all electronic components: microcontrollers, IMUs, depth cameras, motor drivers, and supporting passive components."
            />
            <TaskCard
              step="03"
              title="PCB Soldering"
              body="Hand-soldered the custom PCBs, including fine-pitch surface-mount components, connectors, and power regulation circuits."
            />
          </div>
        </Section>

        {/* ── TAKEAWAYS ── */}
        <Section label="Outcome" title="What this experience built" noBorder>
          <p
            style={{
              fontSize: '0.88rem',
              color: C.textSec,
              lineHeight: 1.75,
              maxWidth: 700,
              marginBottom: '1.75rem',
            }}
          >
            This research internship was a formative moment — equal parts hands-on electronics work
            and exposure to a world-class research environment.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1rem',
              marginBottom: '2.5rem',
            }}
          >
            {[
              {
                title: 'Space systems thinking',
                body: 'Working on hardware destined for the ISS sharpened my understanding of the reliability and redundancy constraints that distinguish space electronics from consumer products.',
              },
              {
                title: 'Hardware ownership',
                body: 'Owning a subsystem from block diagram to soldering gave me deep confidence in reading datasheets, iterating on solder issues, and debugging a few mixed-signal problems.',
              },
              {
                title: 'International collaboration',
                body: 'Working within a multicultural team at MIT, coordinating across language differences, reinforced my ability to communicate technical constraints clearly.',
              },
            ].map(({title, body}) => (
              <div
                key={title}
                style={{
                  background: C.bgCard,
                  border: `1px solid ${C.border}`,
                  borderRadius: 14,
                  padding: '1.25rem 1.4rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: C.text,
                    marginBottom: '0.4rem',
                  }}
                >
                  {title}
                </h3>
                <p style={{fontSize: '0.78rem', color: C.textSec, lineHeight: 1.65}}>{body}</p>
              </div>
            ))}
          </div>

          <div style={{display: 'flex', gap: '0.6rem', flexWrap: 'wrap'}}>
            <ActionBtn
              href="https://martinbraquet.com/wp-content/uploads/work_report_non_confidential.pdf"
              primary
            >
              <DownloadIcon /> Read the Report
            </ActionBtn>
          </div>
        </Section>
      </div>
    </PageBase>
  )
}
