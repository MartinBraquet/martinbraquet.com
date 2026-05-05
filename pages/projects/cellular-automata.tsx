import {
  ActionBtn,
  BackLink,
  Badge,
  GithubIcon,
  Section,
  StatBubble,
  TechTag,
} from 'web/components/badges'
import {PageBase} from 'web/components/page-base'
import {SEO} from 'web/components/SEO'
import {C} from 'web/lib/colors'

// ── Rule Card component ───────────────────────────────────────────────────────

function RuleCard({
  name,
  dimension,
  desc,
  detail,
}: {
  name: string
  dimension: '1D' | '2D'
  desc: string
  detail?: string
}) {
  const dimStyle = {
    '1D': {bg: C.redA08, color: C.red, border: C.redA18, label: '1D Sequence'},
    '2D': {bg: C.inkA07, color: C.textSec, border: C.border, label: '2D Grid'},
  }[dimension]

  return (
    <div
      style={{
        background: C.bgCard,
        border: `1px solid ${C.border}`,
        borderRadius: 14,
        padding: '1.25rem 1.4rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
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
            background: dimStyle.bg,
            color: dimStyle.color,
            border: `1px solid ${dimStyle.border}`,
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {dimStyle.label}
        </span>
      </div>
      <p style={{fontSize: '0.78rem', color: C.textSec, lineHeight: 1.6}}>{desc}</p>
      {detail && (
        <p style={{fontSize: '0.73rem', color: C.textTert, lineHeight: 1.55, fontStyle: 'italic'}}>
          {detail}
        </p>
      )}
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function CellularAutomataPage() {
  return (
    <PageBase>
      <SEO
        title={'Cellular Automata'}
        description={'Reproduction of fundamental computer systems: 1D and 2D cellular automata'}
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
            C
          </div>

          <div style={{maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1}}>
            <BackLink />

            <div
              style={{
                display: 'flex',
                gap: '0.4rem',
                flexWrap: 'wrap',
                marginBottom: '1rem',
                animation: 'fadeUp 0.5s ease both',
              }}
            >
              <Badge kind="project">Computer Systems</Badge>
              <Badge kind="project">Reproduction #1</Badge>
            </div>

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
              Models of Computation via <span style={{color: C.red}}>Cellular Automata</span>
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
              Fundamental Computer Systems · 2024
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
              This work reproduces classic cellular automata — discrete models of computation known
              for their ability to imitate complex biological processes through simple, local rules.
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
              <TechTag>Python</TechTag>
              <StatBubble>1D & 2D Environments</StatBubble>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '0.6rem',
                flexWrap: 'wrap',
                animation: 'fadeUp 0.55s 0.22s ease both',
              }}
            >
              <ActionBtn href="https://github.com/MartinBraquet/cellular-automata" primary>
                <GithubIcon /> View on GitHub
              </ActionBtn>
            </div>
          </div>
        </header>

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
              {n: '1D / 2D', label: 'Dimensional support', sub: 'Elementary & Grid based'},
              {n: 'Rule 110', label: 'Turing Complete', sub: 'Complex universal logic'},
              {n: 'Chaos', label: 'Rule 30 & Life', sub: 'Biological imitation'},
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
        <Section label="Theory" title="What are Cellular Automata?">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {[
              {
                icon: '🧬',
                title: 'Biological Imitation',
                body: 'Known for their ability to imitate complex biological processes starting from very simple local rules.',
              },
              {
                icon: '💾',
                title: 'Discrete Models',
                body: 'Discrete models of computation where the state of a cell is determined by its neighborhood in the previous step.',
              },
              {
                icon: '📈',
                title: 'Computational Logic',
                body: 'Includes examples like Wolfram’s Rule 110, which is Turing complete, proving simple rules can perform any possible computation.',
              },
            ].map(({icon, title, body}) => (
              <div
                key={title}
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
            ))}
          </div>
        </Section>

        {/* ── ALGORITHMS ── */}
        <Section label="Rules" title="Implemented Paradigms">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '0.9rem',
            }}
          >
            <RuleCard
              name="Rule 30"
              dimension="1D"
              desc="A chaotic elementary rule proposed by Wolfram. Famous for its complex, non-periodic behavior from a single center point."
            />
            <RuleCard
              name="Rule 110"
              dimension="1D"
              desc="Turing complete rule that exists on the boundary between stability and chaos. Capable of universal computation."
            />
            <RuleCard
              name="Game of Life"
              dimension="2D"
              desc="Conway's classic model. Imitates population dynamics with birth, death, and survival rules."
            />
          </div>
        </Section>

        {/* ── GALLERY ── */}
        <Section label="Demos" title="Visual Evolution">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            <div>
              <p
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  color: C.textTert,
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                2D Chaotic Game of Life
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
                  src="https://raw.githubusercontent.com/MartinBraquet/cellular-automata/main/cellular_automata/results/animation_chaos_300_100.gif"
                  alt="Game of Life Demo"
                  style={{width: '100%', display: 'block'}}
                />
              </div>
            </div>

            <div>
              <p
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  color: C.textTert,
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                1D Rule 30 History
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
                  src="https://raw.githubusercontent.com/MartinBraquet/cellular-automata/main/cellular_automata/results/animation_1d_rule_1d_rule_number_30_center_25_200.gif"
                  alt="Rule 30 History"
                  style={{width: '100%', display: 'block'}}
                />
              </div>
            </div>
          </div>
        </Section>

        {/* ── QUICK START ── */}
        <Section label="Usage" title="Python API" noBorder>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {[
              {
                label: 'Install',
                code: 'git clone git@github.com:MartinBraquet/cellular-automata.git\npip install -e "."',
                note: 'Requires Python',
              },
              {
                label: 'Execution',
                code: "from cellular_automata import cellular_automaton, game_of_life\n\ncellular_automaton(\n  n_grid=60,\n  rule=game_of_life,\n  initial_setup='chaos'\n)",
                note: 'Configurable frames, grid size, and interval',
              },
            ].map(({label, code, note}) => (
              <div
                key={label}
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
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: C.red,
                      opacity: 0.6,
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      color: C.textTert,
                      textTransform: 'uppercase',
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
                    lineHeight: 1.6,
                  }}
                >
                  {code}
                </pre>
                <div style={{padding: '0.6rem 1rem', borderTop: `1px solid ${C.border}`}}>
                  <span style={{fontSize: '0.7rem', color: C.textTert, fontStyle: 'italic'}}>
                    {note}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{marginTop: '2.5rem'}}>
            <ActionBtn href="https://github.com/MartinBraquet/cellular-automata" primary>
              <GithubIcon /> GitHub Repository
            </ActionBtn>
          </div>
        </Section>
      </div>
    </PageBase>
  )
}
