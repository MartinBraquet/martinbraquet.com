import {
  ActionBtn,
  BackIcon,
  Badge,
  DownloadIcon,
  GithubIcon,
  Section,
  StatBubble,
  TechTag,
} from 'web/components/badges'
import {CustomLink} from 'web/components/links'
import {PageBase} from 'web/components/page-base'
import {SEO} from 'web/components/SEO'
import {C} from 'web/lib/colors'

// ── Contribution card ─────────────────────────────────────────────────────────

function ContribCard({icon, title, items}: {icon: string; title: string; items: string[]}) {
  return (
    <div
      style={{
        background: C.bgCard,
        border: `1px solid ${C.border}`,
        borderRadius: 14,
        padding: '1.4rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}
    >
      <div style={{display: 'flex', alignItems: 'center', gap: '0.6rem'}}>
        <span style={{fontSize: '1.3rem'}}>{icon}</span>
        <span style={{fontSize: '0.88rem', fontWeight: 600, color: C.text}}>{title}</span>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '0.45rem'}}>
        {items.map((item) => (
          <div key={item} style={{display: 'flex', gap: '0.6rem', alignItems: 'flex-start'}}>
            <span style={{color: C.red, fontSize: '0.7rem', paddingTop: '0.18rem', flexShrink: 0}}>
              ▸
            </span>
            <span style={{fontSize: '0.78rem', color: C.textSec, lineHeight: 1.6}}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Stack chip ────────────────────────────────────────────────────────────────

function StackChip({layer, name, detail}: {layer: string; name: string; detail: string}) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '0.9rem',
        alignItems: 'flex-start',
        padding: '0.9rem 1.1rem',
        background: C.bgCard,
        border: `1px solid ${C.border}`,
        borderRadius: 12,
      }}
    >
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.65rem',
          fontWeight: 600,
          color: C.red,
          background: C.redA08,
          padding: '0.2rem 0.5rem',
          borderRadius: 4,
          whiteSpace: 'nowrap',
          flexShrink: 0,
          marginTop: '0.1rem',
        }}
      >
        {layer}
      </span>
      <div>
        <span
          style={{
            fontSize: '0.82rem',
            fontWeight: 600,
            color: C.text,
            display: 'block',
            marginBottom: '0.15rem',
          }}
        >
          {name}
        </span>
        <span style={{fontSize: '0.75rem', color: C.textTert, lineHeight: 1.55}}>{detail}</span>
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WheeledRobotPage() {
  return (
    <PageBase>
      <SEO
        title={'Design of a Wheeled Driving Robot — Martin Braquet'}
        description={
          'Fully autonomous robot built for the Eurobot 2019 contest. Implemented potential-field path planning, Kalman-filtered LIDAR localisation, low-level wheel control on Raspberry Pi + FPGA, and an Android Wi-Fi remote. Finished 2nd in Belgium.'
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
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background: `radial-gradient(ellipse 55% 70% at 100% 30%, ${C.redA07} 0%, transparent 65%), radial-gradient(ellipse 30% 40% at 0% 90%, rgba(196,154,114,0.07) 0%, transparent 55%)`,
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
            R
          </div>

          <div style={{maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1}}>
            <a
              href="/projects"
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

            <div
              style={{
                display: 'flex',
                gap: '0.4rem',
                flexWrap: 'wrap',
                marginBottom: '1rem',
                animation: 'fadeUp 0.5s ease both',
              }}
            >
              <Badge kind="project">Hardware</Badge>
              <Badge kind="project">Project</Badge>
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                fontWeight: 700,
                color: C.text,
                lineHeight: 1.08,
                marginBottom: '0.9rem',
                maxWidth: 760,
                animation: 'fadeUp 0.55s 0.06s ease both',
              }}
            >
              Design of a <span style={{color: C.red}}>Wheeled Driving Robot</span>
            </h1>

            <p
              style={{
                fontSize: '0.78rem',
                color: C.textTert,
                fontStyle: 'italic',
                marginBottom: '1.25rem',
                animation: 'fadeUp 0.55s 0.1s ease both',
              }}
            >
              Project in Mechatronics · UCLouvain · Eurobot 2019 · Team of 6
            </p>

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
              Fully autonomous robot built for the{' '}
              <CustomLink href="https://www.eurobot.org/">Eurobot</CustomLink> international
              robotics contest. Implemented path planning, Kalman-filtered LIDAR localisation,
              low-level wheel control, and an Android remote — running on a Raspberry Pi coupled to
              an FPGA. Finished <strong style={{color: C.text}}>2nd in Belgium</strong> and
              qualified for the European finals.
            </p>

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
              {['C++', 'SystemVerilog', 'FPGA'].map((t) => (
                <TechTag key={t}>{t}</TechTag>
              ))}
              <StatBubble>2nd place Belgium</StatBubble>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '0.6rem',
                flexWrap: 'wrap',
                animation: 'fadeUp 0.55s 0.22s ease both',
              }}
            >
              <ActionBtn
                href="https://martinbraquet.com/wp-content/uploads/LELME2002___Final_report.pdf"
                primary
              >
                <DownloadIcon /> Final Report
              </ActionBtn>
              <ActionBtn href="https://github.com/MartinBraquet/ELME2002">
                <GithubIcon /> Code
              </ActionBtn>
            </div>
          </div>
        </header>

        {/* ── PHOTOS ── */}
        <div style={{borderBottom: `1px solid ${C.border}`}}>
          <div
            style={{
              maxWidth: 1100,
              margin: '0 auto',
              padding: '3rem 2.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
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
                Competition day
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
                  src="https://martinbraquet.com/wp-content/uploads/2020/03/JGO_8611-scaled.jpg"
                  alt="Robot competing at Robotix Belgian contest"
                  style={{width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '16/9'}}
                />
              </div>
            </div>
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
                Robot assembly
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
                  src="https://martinbraquet.com/wp-content/uploads/2020/03/59353382_355551865166777_2157624911894413312_n2.jpg"
                  alt="Assembled wheeled robot showing mechanical and electronic components"
                  style={{width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '16/9'}}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── STATS BAR ── */}
        <div style={{background: C.bgCard, borderBottom: `1px solid ${C.border}`}}>
          <div style={{maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap'}}>
            {[
              {n: '2nd', label: 'Place in Belgium', sub: '1st place at UCLouvain'},
              {n: '6', label: 'Team members', sub: 'Master in electromechanical engineering'},
              {n: '3', label: 'Compute layers', sub: 'Raspberry Pi · FPGA · Android'},
              {n: '2019', label: 'Eurobot theme', sub: 'Atom Factory — hockey pucks scoring'},
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

        {/* ── CONTEST ── */}
        <Section
          label="Context"
          title="Eurobot 2019 — Atom Factory"
          intro="Eurobot is a French international robotics contest gathering the best European student teams. The 2019 edition required autonomous robots to score points by moving hockey pucks (atoms) onto a weighing scale, an accelerator, or the robot's starting zone — within a fully autonomous two-minute match."
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.1rem',
            }}
          >
            {[
              {
                icon: '🏁',
                title: "Robotix's (Belgium)",
                body: 'The Belgian qualifier determining which teams advance to the European finals. Our team placed 2nd nationally and 1st within UCLouvain, earning a slot at the international contest.',
              },
              {
                icon: '🤖',
                title: 'Fully autonomous',
                body: 'The robot operated without any human control during the match. It navigated, localized itself, avoided obstacles, and executed token-moving actions entirely on its own.',
              },
              {
                icon: '⚙️',
                title: 'Robot approval',
                body: 'Before competing, each robot must pass a technical inspection verifying compliance with size, weight, and safety constraints. Our robot cleared approval on the first attempt.',
              },
            ].map(({icon, title, body}) => (
              <div
                key={title}
                style={{
                  background: C.bgCard,
                  border: `1px solid ${C.border}`,
                  borderRadius: 14,
                  padding: '1.4rem',
                }}
              >
                <div style={{fontSize: '1.4rem', marginBottom: '0.6rem'}}>{icon}</div>
                <h3
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: C.text,
                    marginBottom: '0.4rem',
                  }}
                >
                  {title}
                </h3>
                <p style={{fontSize: '0.8rem', color: C.textSec, lineHeight: 1.65, margin: 0}}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── SOFTWARE CONTRIBUTIONS ── */}
        <Section label="Software" title="Algorithms & control systems">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.1rem',
            }}
          >
            <ContribCard
              icon="🗺️"
              title="Path Planning — Potential Fields"
              items={[
                'Robot is repelled from obstacles and attracted to the target position via artificial potential fields.',
                'Gradient descent on the combined potential surface produces smooth, collision-free trajectories.',
                'Handles dynamic obstacles: newly detected objects update the repulsion field in real time.',
              ]}
            />
            <ContribCard
              icon="📍"
              title="Localisation — Kalman Filter"
              items={[
                'Wheel odometry provides a continuous position prediction between sensor updates.',
                'RPLIDAR A2 (high-frequency rotating LIDAR) provides absolute position measurements against the known map.',
                'Extended Kalman filter fuses both sources: odometry predicts, LIDAR corrects — robust to wheel slip and sparse scans.',
              ]}
            />
            <ContribCard
              icon="🔌"
              title="Low-Level Wheel Control"
              items={[
                'Analyzed motor dynamics to model the voltage–speed transfer function for each drive wheel.',
                'Tuned a PID controller minimising the error between commanded and measured wheel velocity.',
                'Implemented on the FPGA in SystemVerilog for deterministic, low-latency PWM generation.',
              ]}
            />
            <ContribCard
              icon="📱"
              title="Android Remote — Wi-Fi"
              items={[
                'Custom Android app communicating with the robot over a Wi-Fi socket.',
                'Supports manual robot control, live sensor readings, and remote actuation of mechanisms.',
                'Used during development and pre-match testing; disabled during autonomous competition runs.',
              ]}
            />
          </div>
        </Section>

        {/* ── HARDWARE STACK ── */}
        <Section
          label="Hardware"
          title="Compute & electronics stack"
          intro="The robot is organized as a three-layer compute hierarchy: high-level reasoning on Linux, real-time I/O on the FPGA, and wireless oversight via Android. Mechanics and PCBs were designed and manufactured by the team."
        >
          <div
            style={{display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '2rem'}}
          >
            <StackChip
              layer="LAYER 3"
              name="Android Application"
              detail="Wi-Fi remote control and telemetry. Receives sensor data and sends motion commands over a TCP socket. Built for development and pre-match calibration."
            />
            <StackChip
              layer="LAYER 2"
              name="Raspberry Pi (Linux · C++)"
              detail="Main compute unit running the path planner, Kalman filter, and high-level state machine. Sends velocity setpoints to the FPGA over GPIO/SPI."
            />
            <StackChip
              layer="LAYER 1"
              name="FPGA — DE0-NANO (SystemVerilog)"
              detail="Real-time I/O layer. Handles PWM generation for motor drivers, encoder reading, and sensor interfacing with deterministic timing the Linux kernel cannot guarantee."
            />
            <StackChip
              layer="SENSOR"
              name="RPLIDAR A2"
              detail="High-frequency rotating LIDAR providing 360° distance measurements. Used as the absolute localisation reference for the Kalman filter."
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.1rem',
            }}
          >
            <ContribCard
              icon="🔩"
              title="Mechanical Design"
              items={[
                'Full robot modeled in SolidWorks (CAD) before fabrication.',
                'Electropneumatic architecture designed for the token-grasping mechanism.',
                'Mechanical parts machined and 3D-printed in-house by the team.',
              ]}
            />
            <ContribCard
              icon="⚡"
              title="Electronics & PCBs"
              items={[
                'Electrical schematics designed from scratch covering power, motor drivers, and sensor wiring.',
                'PCBs synthesized in Eagle and manufactured for the motor control and sensor boards.',
                'Power distribution designed to handle peak motor current draw during acceleration.',
              ]}
            />
          </div>
        </Section>

        {/* ── DYNAMICS ── */}
        <Section label="Dynamics & Sizing" title="Robot dynamics analysis" noBorder>
          <p
            style={{
              fontSize: '0.88rem',
              color: C.textSec,
              lineHeight: 1.75,
              maxWidth: 700,
              marginBottom: '1.75rem',
            }}
          >
            Before any code was written, the robot's physical constraints were derived analytically
            — sizing the motors, gearboxes, wheels, and structural elements to meet the contest's
            acceleration, speed, and payload requirements.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '0.9rem',
            }}
          >
            {[
              {
                n: 'Motors',
                body: 'Sized to deliver sufficient torque for the required acceleration profile given the robot mass and wheel radius.',
              },
              {
                n: 'Gearboxes',
                body: "Reduction ratio chosen to balance top speed against torque, staying within the motor's efficient operating range.",
              },
              {
                n: 'Wheels',
                body: 'Diameter and material selected for traction on the contest surface without exceeding the footprint constraint.',
              },
              {
                n: 'Structure',
                body: 'Load path analyzed to keep the frame rigid under the inertial loads of fast direction changes during the match.',
              },
            ].map(({n, body}) => (
              <div
                key={n}
                style={{
                  background: C.bgCard,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  padding: '1.1rem 1.2rem',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: C.text,
                    display: 'block',
                    marginBottom: '0.4rem',
                  }}
                >
                  {n}
                </span>
                <p style={{fontSize: '0.78rem', color: C.textSec, lineHeight: 1.6, margin: 0}}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </PageBase>
  )
}
