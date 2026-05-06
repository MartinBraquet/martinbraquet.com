import {BackIcon, Badge, Section, StatBubble, TechTag} from 'web/components/badges'
import {PageBase} from 'web/components/page-base'
import {SEO} from 'web/components/SEO'
import {C} from 'web/lib/colors'

// ── Map layer card ────────────────────────────────────────────────────────────

function LayerCard({
  icon,
  name,
  color,
  desc,
  detail,
}: {
  icon: string
  name: string
  color: string
  desc: string
  detail: string
}) {
  return (
    <div
      style={{
        background: C.bgCard,
        border: `1px solid ${C.border}`,
        borderRadius: 14,
        padding: '1.4rem',
        borderTop: `3px solid ${color}`,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
    >
      <div style={{display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem'}}>
        <span style={{fontSize: '1.4rem'}}>{icon}</span>
        <span style={{fontSize: '0.88rem', fontWeight: 600, color: C.text}}>{name}</span>
      </div>
      <p style={{fontSize: '0.8rem', color: C.textSec, lineHeight: 1.65, margin: 0}}>{desc}</p>
      <p
        style={{
          fontSize: '0.74rem',
          color: C.textTert,
          lineHeight: 1.6,
          margin: 0,
          fontStyle: 'italic',
        }}
      >
        {detail}
      </p>
    </div>
  )
}

// ── Cost function card ────────────────────────────────────────────────────────

function CostCard({
  name,
  formula,
  desc,
  tier,
}: {
  name: string
  formula: string
  desc: string
  tier: 'primary' | 'combined' | 'auxiliary'
}) {
  const tierStyle = {
    primary: {bg: C.redA08, color: C.red, border: C.redA18, label: 'Primary'},
    combined: {bg: C.inkA07, color: C.textSec, border: C.border, label: 'Combined'},
    auxiliary: {bg: C.inkA04, color: C.textTert, border: C.border, label: 'Auxiliary'},
  }[tier]
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
            background: tierStyle.bg,
            color: tierStyle.color,
            border: `1px solid ${tierStyle.border}`,
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {tierStyle.label}
        </span>
      </div>
      <code
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.72rem',
          color: C.red,
          background: C.redA08,
          padding: '0.3rem 0.6rem',
          borderRadius: 6,
          display: 'inline-block',
          alignSelf: 'flex-start',
        }}
      >
        {formula}
      </code>
      <p style={{fontSize: '0.78rem', color: C.textSec, lineHeight: 1.6, margin: 0}}>{desc}</p>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MotionPlanningPage() {
  return (
    <PageBase>
      <SEO
        title={'Multi-Agent Motion Planning'}
        description={
          'Dijkstra-based path planning over multi-layer military terrain meshes with composite cost functions.'
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
            M
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
              <Badge kind="project">Research</Badge>
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
                maxWidth: 780,
                animation: 'fadeUp 0.55s 0.06s ease both',
              }}
            >
              Multi-Agent Motion Planning <span style={{color: C.red}}>with Military Maps</span>
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
              Graduate Research · UT Austin · Army Research Lab · 2022
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
              Dijkstra-based path planning over multi-layer military terrain meshes with composite
              cost functions — 3D distance, energy consumption, and terrain valence — extended with
              coarse-to-fine acceleration for real-time multi-agent routing.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
                alignItems: 'center',
                animation: 'fadeUp 0.55s 0.18s ease both',
              }}
            >
              {['Python'].map((t) => (
                <TechTag key={t}>{t}</TechTag>
              ))}
              <StatBubble>Army Research Lab</StatBubble>
            </div>
          </div>
        </header>

        {/* ── IMAGES ── */}
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
            <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
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
                Multi-layer terrain mesh with planned paths
              </p>
              <div
                style={{
                  borderRadius: 14,
                  overflow: 'hidden',
                  border: `1px solid ${C.border}`,
                  background: C.bgCard,
                  flex: '1 1 auto',
                  minHeight: 0,
                }}
              >
                <img
                  src="https://martinbraquet.com/wp-content/uploads/Screenshot-from-2022-06-23-10-47-02.png"
                  alt="Multi-layer terrain mesh showing planned agent paths"
                  style={{width: '100%', height: '100%', display: 'block', objectFit: 'cover'}}
                />
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
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
                Coarse-to-fine path resolution
              </p>
              <div
                style={{
                  borderRadius: 14,
                  overflow: 'hidden',
                  border: `1px solid ${C.border}`,
                  background: C.bgCard,
                  flex: '1 1 auto',
                  minHeight: 0,
                }}
              >
                <img
                  src="https://martinbraquet.com/wp-content/uploads/Screenshot-from-2022-06-23-10-56-18.png"
                  alt="Coarse-to-fine path planning showing mesh resolution comparison"
                  style={{width: '100%', height: '100%', display: 'block', objectFit: 'cover'}}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── STATS BAR ── */}
        <div style={{background: C.bgCard, borderBottom: `1px solid ${C.border}`}}>
          <div style={{maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap'}}>
            {[
              {n: '3', label: 'Map layers', sub: 'Obstacles · Elevation · Valence'},
              {n: '4+', label: 'Cost functions', sub: 'Distance · Energy · Valence · Combined'},
              {n: '2', label: 'Planning passes', sub: 'Coarse mesh then fine refinement'},
              {n: 'N', label: 'Agents supported', sub: 'Independent parallel routing'},
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
        <Section
          label="Overview"
          title="Navigating complex military terrain"
          intro="The core challenge in military path planning is that the terrain isn't uniform — a path that is short in Euclidean distance may cross high-energy ridges or tactically exposed zones. This work builds a graph-based planner that encodes all three dimensions of terrain cost simultaneously."
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {[
              {
                icon: '🗺️',
                title: 'The Problem',
                body: 'Route multiple agents from start to goal across a military environment represented by overlapping terrain maps — each encoding a different physical constraint. The least-cost path must balance competing objectives.',
              },
              {
                icon: '⬡',
                title: 'The Mesh',
                body: 'The terrain is discretized into a graph of nodes. Each node pair has an associated traversal cost based on the underlying map data at that location. The quality of the mesh drives the quality of the path.',
              },
              {
                icon: '⚡',
                title: 'The Algorithm',
                body: "Dijkstra's algorithm finds the globally optimal path in the cost graph. Extended here with multi-objective cost functions and a two-pass coarse-to-fine refinement to reduce computation time without sacrificing path quality at the next checkpoint.",
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
                <p style={{fontSize: '0.82rem', color: C.textSec, lineHeight: 1.65, margin: 0}}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── MAP LAYERS ── */}
        <Section
          label="Terrain Layers"
          title="Three maps, one environment"
          intro="The environment is represented as three independent spatial layers. Each layer contributes a different kind of constraint to the path cost. The planner ingests all three simultaneously to compute composite edge weights across the mesh."
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.1rem',
            }}
          >
            <LayerCard
              icon="🧱"
              name="Obstacles"
              color="#b85c38"
              desc="Binary or graded map marking impassable or high-cost terrain — walls, buildings, dense forest, or restricted zones. Edges crossing obstacle cells receive an infinite or very large cost, effectively removing them from the traversable graph."
              detail="Hardest constraint: violations are non-negotiable. Acts as a mask before cost computation."
            />
            <LayerCard
              icon="⛰️"
              name="Elevation"
              color="#4a8fa8"
              desc="A digital elevation model (DEM) providing height at each grid cell. Used to compute the true 3D Euclidean distance between adjacent nodes — traversing a steep slope costs more than traversing flat ground — and to model the energy required by the agent's dynamics."
              detail="Feeds both the distance cost function and the energy cost function. Uphill travel penalized relative to agent weight and grade."
            />
            <LayerCard
              icon="🟢"
              name="Valence"
              color="#6b8f71"
              desc="A tactical favorability map: positive values mark covered or advantageous zones (forest, terrain depressions, friendly territory); negative values mark exposed or dangerous areas. Paths through high-valence zones are rewarded with lower cost."
              detail="Most interpretable layer for human operators. Encodes domain knowledge not capturable by pure geometry."
            />
          </div>
        </Section>

        {/* ── COST FUNCTIONS ── */}
        <Section
          label="Cost Functions"
          title="How edge costs are computed"
          intro="Each edge in the graph connects two adjacent mesh nodes. Its traversal cost is assigned by one of several cost functions, or a weighted combination thereof. The choice of cost function determines what kind of path the planner optimizes for."
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '0.9rem',
            }}
          >
            <CostCard
              name="3D Euclidean Distance"
              formula="√(Δx² + Δy² + Δz²)"
              tier="primary"
              desc="The straight-line distance between two nodes in 3D space, accounting for elevation change. The fundamental baseline cost — a path that is short in 2D may be much longer in 3D when crossing a ridge."
            />
            <CostCard
              name="Energy"
              formula="f(m, grade, velocity)"
              tier="primary"
              desc="Models the mechanical work required for the agent to traverse the edge based on its mass, the slope angle derived from the elevation map, and a nominal velocity. Steep uphill segments are significantly penalized."
            />
            <CostCard
              name="Valence"
              formula="−valence(node)"
              tier="primary"
              desc="Subtracts the valence score of the traversed cell from the edge cost, making tactically favorable zones cheaper to cross. Negative valence (exposed terrain) increases cost."
            />
            <CostCard
              name="Weighted Combination"
              formula="α·dist + β·energy + γ·valence"
              tier="combined"
              desc="A linear combination of the three primary cost functions. The weights α, β, γ are mission parameters set by the operator, allowing a continuous tradeoff between shortest path, minimum energy, and tactical safety."
            />
          </div>
        </Section>

        {/* ── COARSE-TO-FINE ── */}
        <Section label="Acceleration" title="Coarse-to-fine path planning">
          <p
            style={{
              fontSize: '0.88rem',
              color: C.textSec,
              lineHeight: 1.75,
              maxWidth: 700,
              marginBottom: '1.75rem',
            }}
          >
            Dijkstra on a full-resolution mesh is exact but slow. For real-time applications, a
            two-pass strategy trades a small amount of global accuracy for a large reduction in
            computation time — while keeping the immediately-executed portion of the path at full
            resolution.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {/* pass 1 */}
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
                  padding: '0.7rem 1.1rem',
                  borderBottom: `1px solid ${C.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  background: C.inkA04,
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    color: C.textTert,
                  }}
                >
                  PASS 01
                </span>
                <span style={{fontSize: '0.78rem', fontWeight: 600, color: C.text}}>
                  Coarse mesh — global route
                </span>
              </div>
              <div
                style={{
                  padding: '1.1rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.7rem',
                }}
              >
                <p style={{fontSize: '0.82rem', color: C.textSec, lineHeight: 1.65, margin: 0}}>
                  Run Dijkstra over a downsampled mesh at low resolution. The result is a sequence
                  of coarse waypoints — checkpoints — that define the gross shape of the optimal
                  route from start to goal.
                </p>
                <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 500,
                      color: C.textTert,
                      background: C.inkA04,
                      border: `1px solid ${C.border}`,
                      padding: '0.15rem 0.5rem',
                      borderRadius: 4,
                    }}
                  >
                    Low resolution
                  </span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 500,
                      color: C.textTert,
                      background: C.inkA04,
                      border: `1px solid ${C.border}`,
                      padding: '0.15rem 0.5rem',
                      borderRadius: 4,
                    }}
                  >
                    Fast
                  </span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 500,
                      color: C.textTert,
                      background: C.inkA04,
                      border: `1px solid ${C.border}`,
                      padding: '0.15rem 0.5rem',
                      borderRadius: 4,
                    }}
                  >
                    Approximate
                  </span>
                </div>
              </div>
            </div>

            {/* pass 2 */}
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
                  padding: '0.7rem 1.1rem',
                  borderBottom: `1px solid ${C.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  background: C.redA08,
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    color: C.red,
                  }}
                >
                  PASS 02
                </span>
                <span style={{fontSize: '0.78rem', fontWeight: 600, color: C.text}}>
                  Fine mesh — next segment
                </span>
              </div>
              <div
                style={{
                  padding: '1.1rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.7rem',
                }}
              >
                <p style={{fontSize: '0.82rem', color: C.textSec, lineHeight: 1.65, margin: 0}}>
                  Run Dijkstra again at full resolution, but only between the agent's current
                  position and the first coarse checkpoint. The agent executes this precise path
                  while the coarse planner already knows the global direction.
                </p>
                <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 500,
                      color: C.red,
                      background: C.redA08,
                      border: `1px solid ${C.redA18}`,
                      padding: '0.15rem 0.5rem',
                      borderRadius: 4,
                    }}
                  >
                    Full resolution
                  </span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 500,
                      color: C.textTert,
                      background: C.inkA04,
                      border: `1px solid ${C.border}`,
                      padding: '0.15rem 0.5rem',
                      borderRadius: 4,
                    }}
                  >
                    Local only
                  </span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 500,
                      color: C.textTert,
                      background: C.inkA04,
                      border: `1px solid ${C.border}`,
                      padding: '0.15rem 0.5rem',
                      borderRadius: 4,
                    }}
                  >
                    Exact next step
                  </span>
                </div>
              </div>
            </div>

            {/* tradeoff */}
            <div
              style={{
                background: C.bgCard,
                border: `1px solid ${C.border}`,
                borderRadius: 14,
                padding: '1.25rem',
                gridColumn: 'span 1',
              }}
            >
              <h3
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: C.text,
                  marginBottom: '0.75rem',
                }}
              >
                Why this works
              </h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.55rem'}}>
                {[
                  [
                    'Computation savings',
                    'The coarse pass covers the full route at a fraction of the node count — most of the compute is saved here.',
                  ],
                  [
                    'No loss where it matters',
                    'The agent only ever executes the fine-resolution segment, so the path it actually follows is globally optimized.',
                  ],
                  [
                    'Receding horizon',
                    'As the agent reaches each coarse checkpoint, the fine pass is re-run for the next segment, adapting to dynamic changes in the environment.',
                  ],
                ].map(([title, body]) => (
                  <div
                    key={title as string}
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      padding: '0.7rem 0.9rem',
                      background: C.bg,
                      border: `1px solid ${C.border}`,
                      borderRadius: 10,
                    }}
                  >
                    <span
                      style={{
                        color: C.red,
                        fontSize: '0.7rem',
                        paddingTop: '0.15rem',
                        flexShrink: 0,
                      }}
                    >
                      ▸
                    </span>
                    <div>
                      <span style={{fontSize: '0.78rem', fontWeight: 600, color: C.text}}>
                        {title as string}
                      </span>
                      <span style={{fontSize: '0.75rem', color: C.textTert}}>
                        {'  —  '}
                        {body as string}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ── MULTI-AGENT ── */}
        <Section label="Multi-Agent" title="Routing multiple agents simultaneously">
          <p
            style={{
              fontSize: '0.88rem',
              color: C.textSec,
              lineHeight: 1.75,
              maxWidth: 700,
              marginBottom: '1.75rem',
            }}
          >
            The planner supports N independent agents, each solving its own start-to-goal problem on
            the same shared terrain. Agents run separate Dijkstra instances over the same cost
            graph, allowing parallel deployment with independent route optimization.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem',
            }}
          >
            {[
              {
                icon: '🔀',
                title: 'Independent routing',
                body: "Each agent computes its own optimal path. Routes may overlap or diverge depending on each agent's start, goal, and mission cost weights.",
              },
              {
                icon: '⚖️',
                title: 'Per-agent cost weights',
                body: 'Different agents can have different α, β, γ weights — a heavy vehicle optimizes for energy; a scout optimizes for valence (concealment).',
              },
              {
                icon: '🔄',
                title: 'Shared terrain',
                body: "All agents query the same obstacle, elevation, and valence layers. Terrain updates (e.g., a newly detected obstacle) propagate to all agents' next planning pass.",
              },
              {
                icon: '📐',
                title: 'Scalable mesh',
                body: 'The coarse-to-fine strategy becomes especially valuable with many agents: the coarse pass is the same regardless of agent count; only the fine pass scales linearly with N.',
              },
            ].map(({icon, title, body}) => (
              <div
                key={title}
                style={{
                  background: C.bgCard,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  padding: '1.25rem 1.3rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  <span style={{fontSize: '1.2rem'}}>{icon}</span>
                  <span style={{fontSize: '0.82rem', fontWeight: 600, color: C.text}}>{title}</span>
                </div>
                <p style={{fontSize: '0.78rem', color: C.textSec, lineHeight: 1.65, margin: 0}}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section label="Notice" title="Proprietary Research" noBorder>
          <div
            style={{
              padding: '1.1rem 1.4rem',
              background: C.bgCard,
              border: `1px solid ${C.border}`,
              borderLeft: `4px solid ${C.red}`,
              borderRadius: 12,
              maxWidth: 550,
              animation: 'fadeUp 0.55s 0.22s ease both',
            }}
          >
            <div
              style={{display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem'}}
            >
              <span style={{fontSize: '1.1rem'}}>🔒</span>
              <span style={{fontSize: '0.82rem', fontWeight: 600, color: C.text}}>
                Proprietary Research
              </span>
            </div>
            <p style={{fontSize: '0.78rem', color: C.textSec, lineHeight: 1.6, margin: 0}}>
              Unlike my other projects, additional details (including the source code) for this
              research cannot be shared publicly due to a non-disclosure agreement (NDA) signed with
              the <strong>Army Research Lab</strong>.
            </p>
          </div>
        </Section>
      </div>
    </PageBase>
  )
}
