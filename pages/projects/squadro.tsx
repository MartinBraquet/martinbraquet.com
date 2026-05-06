import {useState} from 'react'
import {
  ActionBtn,
  BackLink,
  Badge,
  ExternalIcon,
  GithubIcon,
  PlayIcon,
  Section,
  StatBubble,
  TechTag,
} from 'web/components/badges'
import {CustomLink} from 'web/components/links'
import {PageBase} from 'web/components/page-base'
import {SEO} from 'web/components/SEO'
import {C} from 'web/lib/colors'

const AGENTS = [
  'human',
  'mcts deep q learning',
  'mcts rollout',
  'mcts advancement',
  'ab relative advancement',
  'relative advancement',
  'advancement',
  'random',
]

// Row = agent, Col = opponent; value = win rate of row vs col
const WIN_RATES: Record<string, Record<string, number | null>> = {
  human: {
    human: null,
    'mcts deep q learning': 0.2,
    'mcts rollout': 0.0,
    'mcts advancement': 0.4,
    'ab relative advancement': 0.8,
    'relative advancement': 1.0,
    advancement: 1.0,
    random: 1.0,
  },
  'mcts deep q learning': {
    human: 0.8,
    'mcts deep q learning': null,
    'mcts rollout': 0.24,
    'mcts advancement': 0.75,
    'ab relative advancement': 0.54,
    'relative advancement': 1.0,
    advancement: 1.0,
    random: 1.0,
  },
  'mcts rollout': {
    human: 1.0,
    'mcts deep q learning': 0.76,
    'mcts rollout': null,
    'mcts advancement': 0.94,
    'ab relative advancement': 0.77,
    'relative advancement': 0.98,
    advancement: 0.99,
    random: 1.0,
  },
  'mcts advancement': {
    human: 0.6,
    'mcts deep q learning': 0.25,
    'mcts rollout': 0.06,
    'mcts advancement': null,
    'ab relative advancement': 0.32,
    'relative advancement': 1.0,
    advancement: 1.0,
    random: 1.0,
  },
  'ab relative advancement': {
    human: 0.2,
    'mcts deep q learning': 0.46,
    'mcts rollout': 0.23,
    'mcts advancement': 0.68,
    'ab relative advancement': null,
    'relative advancement': 1.0,
    advancement: 1.0,
    random: 1.0,
  },
  'relative advancement': {
    human: 0.0,
    'mcts deep q learning': 0.0,
    'mcts rollout': 0.02,
    'mcts advancement': 0.0,
    'ab relative advancement': 0.0,
    'relative advancement': null,
    advancement: 0.5,
    random: 0.97,
  },
  advancement: {
    human: 0.0,
    'mcts deep q learning': 0.0,
    'mcts rollout': 0.01,
    'mcts advancement': 0.0,
    'ab relative advancement': 0.0,
    'relative advancement': 0.5,
    advancement: null,
    random: 0.95,
  },
  random: {
    human: 0.0,
    'mcts deep q learning': 0.0,
    'mcts rollout': 0.0,
    'mcts advancement': 0.0,
    'ab relative advancement': 0.0,
    'relative advancement': 0.03,
    advancement: 0.05,
    random: null,
  },
}

// Highlight tiers for the row agent
const TOP_AGENTS = new Set(['mcts deep q learning', 'mcts rollout'])

function cellColor(v: number | null): string {
  if (v === null) return 'transparent'
  if (v >= 0.9) return 'rgba(16,105,79,0.18)'
  if (v >= 0.7) return 'rgba(16,105,79,0.09)'
  if (v >= 0.5) return C.inkA04
  if (v <= 0.1) return 'rgba(184,92,56,0.15)'
  if (v <= 0.3) return 'rgba(184,92,56,0.07)'
  return 'transparent'
}
function cellTextColor(v: number | null): string {
  if (v === null) return C.textTert
  if (v >= 0.7) return 'rgb(16 105 79)'
  if (v <= 0.3) return C.red
  return C.textSec
}

function BenchmarkTable() {
  const [hovRow, setHovRow] = useState<string | null>(null)
  const [hovCol, setHovCol] = useState<string | null>(null)

  const shortName = (a: string) =>
    a === 'mcts deep q learning'
      ? 'MCTS DQL ★'
      : a === 'mcts rollout'
        ? 'MCTS Rollout ★'
        : a
            .replace('mcts ', 'MCTS ')
            .replace('ab ', 'AB ')
            .replace(/\b\w/g, (c) => c.toUpperCase())

  return (
    <div style={{overflowX: 'auto'}}>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '100%',
          fontSize: '0.72rem',
          fontFamily: "'DM Mono', monospace",
          minWidth: 640,
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: '0.6rem 0.9rem',
                textAlign: 'left',
                color: C.textTert,
                fontWeight: 500,
                borderBottom: `1px solid ${C.border}`,
                whiteSpace: 'nowrap',
                background: C.bgCard,
                position: 'sticky',
                left: 0,
                zIndex: 1,
              }}
            >
              Row vs Column →
            </th>
            {AGENTS.map((col) => (
              <th
                key={col}
                style={{
                  padding: '0.6rem 0.5rem',
                  textAlign: 'center',
                  color: hovCol === col ? C.text : C.textTert,
                  fontWeight: 500,
                  borderBottom: `1px solid ${C.border}`,
                  whiteSpace: 'nowrap',
                  background: hovCol === col ? C.inkA04 : C.bgCard,
                  transition: 'background 0.15s',
                  fontSize: '0.65rem',
                }}
                onMouseEnter={() => setHovCol(col)}
                onMouseLeave={() => setHovCol(null)}
              >
                {shortName(col)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {AGENTS.map((row) => (
            <tr
              key={row}
              onMouseEnter={() => setHovRow(row)}
              onMouseLeave={() => setHovRow(null)}
              style={{
                background: hovRow === row ? C.inkA04 : 'transparent',
                transition: 'background 0.15s',
              }}
            >
              <td
                style={{
                  padding: '0.55rem 0.9rem',
                  fontWeight: TOP_AGENTS.has(row) ? 600 : 400,
                  color: TOP_AGENTS.has(row) ? C.text : C.textSec,
                  borderBottom: `1px solid ${C.border}`,
                  whiteSpace: 'nowrap',
                  background: hovRow === row ? C.inkA04 : C.bgCard,
                  position: 'sticky',
                  left: 0,
                  zIndex: 1,
                  transition: 'background 0.15s',
                }}
              >
                {shortName(row)}
              </td>
              {AGENTS.map((col) => {
                const v = WIN_RATES[row][col]
                return (
                  <td
                    key={col}
                    style={{
                      padding: '0.55rem 0.5rem',
                      textAlign: 'center',
                      borderBottom: `1px solid ${C.border}`,
                      background: v === null ? 'transparent' : cellColor(v),
                      color: cellTextColor(v),
                      fontWeight: v !== null && (v >= 0.9 || v <= 0.1) ? 600 : 400,
                      transition: 'background 0.15s',
                    }}
                  >
                    {v === null ? '—' : v.toFixed(2)}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p
        style={{fontSize: '0.72rem', color: C.textTert, marginTop: '0.75rem', fontStyle: 'italic'}}
      >
        Win rate of the row agent against the column agent over 100 games (max 3 sec/move). ★ =
        top-tier agents.
        <span style={{color: 'rgb(16 105 79)', marginLeft: '1rem'}}>Green = high win rate</span>
        {' · '}
        <span style={{color: C.red}}>Red = low win rate</span>
      </p>
    </div>
  )
}

// ── Algorithm card ────────────────────────────────────────────────────────────

function AlgoCard({
  name,
  tier,
  desc,
  detail,
}: {
  name: string
  tier: 'top' | 'mid' | 'basic'
  desc: string
  detail?: string
}) {
  const tierStyle = {
    top: {bg: C.redA08, color: C.red, border: C.redA18, label: 'Top Tier'},
    mid: {bg: C.inkA07, color: C.textSec, border: C.border, label: 'Mid Tier'},
    basic: {bg: C.inkA04, color: C.textTert, border: C.border, label: 'Basic'},
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
      <p style={{fontSize: '0.78rem', color: C.textSec, lineHeight: 1.6}}>{desc}</p>
      {detail && (
        <p style={{fontSize: '0.73rem', color: C.textTert, lineHeight: 1.55, fontStyle: 'italic'}}>
          {detail}
        </p>
      )}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SquadroPage() {
  return (
    <PageBase>
      <SEO
        title={'Squadro AI'}
        description={'AI agent that outperforms humans at the Squadro board game'}
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
            S
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
              <Badge kind="project">ML / AI</Badge>
              <Badge kind="project">Project</Badge>
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
              AI Agent for the <span style={{color: C.red}}>Squadro</span> Board Game
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
              Personal Project · 2025
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
              className={'custom-link'}
            >
              An <CustomLink href="https://arxiv.org/abs/1712.01815">AlphaZero</CustomLink>
              -inspired agent using Monte Carlo Tree Search guided by a self-play-trained
              policy-value CNN. Outperforms all other implemented algorithms and average human
              players — including the author.
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
              {['Python', 'PyTorch'].map((t) => (
                <TechTag key={t}>{t}</TechTag>
              ))}
              <StatBubble>Outperforms Humans</StatBubble>
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
              <ActionBtn href="https://dirdam.github.io/squadro.html" primary>
                <PlayIcon /> Official Rules
              </ActionBtn>
              <ActionBtn href="https://github.com/MartinBraquet/squadro">
                <GithubIcon /> Code
              </ActionBtn>
            </div>
          </div>
        </header>

        {/* ── VIDEO + IMAGE SPLIT ── */}
        <div style={{borderBottom: `1px solid ${C.border}`}}>
          <div
            style={{
              maxWidth: 900,
              margin: '0 auto',
              padding: '3rem 2.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {/* YouTube embed */}
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
                Demo — Author vs AI
              </p>
              <div
                style={{
                  maxWidth: 300,
                  borderRadius: 14,
                  overflow: 'hidden',
                  border: `1px solid ${C.border}`,
                  aspectRatio: '1/1',
                  background: C.bgCard,
                }}
              >
                <iframe
                  title="I play Squadro against an AI — that I trained from scratch"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/1KkTbFvQc1Y"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{display: 'block', border: 'none'}}
                />
              </div>
            </div>
            <div style={{alignSelf: 'center'}}>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: C.textSec,
                  lineHeight: 1.75,
                  maxWidth: 300,
                  marginBottom: 0,
                }}
              >
                I (yellow) play the Squadro board game against a deep reinforcement-learning agent
                (red) built from scratch in Python.
              </p>
            </div>

            {/* benchmark image */}
            {/*<div>*/}
            {/*  <p*/}
            {/*    style={{*/}
            {/*      fontSize: '0.65rem',*/}
            {/*      fontWeight: 600,*/}
            {/*      letterSpacing: '0.1em',*/}
            {/*      textTransform: 'uppercase',*/}
            {/*      color: C.textTert,*/}
            {/*      marginBottom: '0.75rem',*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    Algorithm Benchmark*/}
            {/*  </p>*/}
            {/*  <div*/}
            {/*    style={{*/}
            {/*      borderRadius: 14,*/}
            {/*      overflow: 'hidden',*/}
            {/*      border: `1px solid ${C.border}`,*/}
            {/*      background: C.bgCard,*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <img*/}
            {/*      src="https://martinbraquet.com/wp-content/uploads/benchmark-scaled.png"*/}
            {/*      alt="Algorithm benchmark comparison"*/}
            {/*      style={{width: '100%', display: 'block', objectFit: 'cover'}}*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</div>*/}
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
              {n: '8+', label: 'Algorithms implemented', sub: 'From random to AlphaZero'},
              {n: '100', label: 'Games per matchup', sub: 'Controlled benchmark'},
              {n: '1.8M', label: 'Model parameters', sub: '5-pawn DQL agent'},
              {n: '7.1 MB', label: 'Model size on disk', sub: 'Lightweight inference'},
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
        <Section label="About" title="What is Squadro?">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {[
              {
                icon: '♟️',
                title: 'The Game',
                body: "Squadro is a two-player board game on a 5×5 grid. The goal is to complete a return trip with four pawns before your opponent. Each pawn moves at a speed determined by the dots at its starting position (1–3). Landing on an opponent's pawn sends it back to the start.",
              },
              {
                icon: '🤖',
                title: 'The Challenge',
                body: 'The game tree is large but not infinite — exactly the sweet spot where learned evaluation can sometimes beat pure rollout, and vice versa. This project explores that boundary by pitting eight different algorithms against each other under controlled conditions.',
              },
              {
                icon: '🏆',
                title: 'The Result',
                body: 'MCTS Rollout outperforms all agents including the author (human). MCTS Deep Q-Learning is second overall, but beats Rollout at very short time budgets (<0.2s/move), where neural inference costs dominate the search budget.',
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
        <Section label="Agents" title="Eight algorithms, one leaderboard">
          <p
            style={{
              fontSize: '0.88rem',
              color: C.textSec,
              lineHeight: 1.75,
              maxWidth: 700,
              marginBottom: '1.75rem',
            }}
          >
            Every algorithm navigates the same exploration–exploitation tradeoff: explore the game
            tree, then evaluate the states you reach. The quality of the evaluation and the number
            of explorations possible within the time budget determines who wins.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '0.9rem',
            }}
          >
            <AlgoCard
              name="MCTS Deep Q-Learning"
              tier="top"
              desc="MCTS with a policy-value CNN trained by self-play. The AlphaZero variant. Fewer tree searches than rollout but each is guided by a learned neural network."
              detail="Beats rollout at <0.2s/move; slower at longer budgets due to CPU inference cost."
            />
            <AlgoCard
              name="MCTS Rollout"
              tier="top"
              desc="MCTS with random playouts to end-of-game as the state evaluator. Simple but fast — runs ~10x more simulations than DQL per move."
              detail="Best overall at 3s/move. Small state space makes fast rollouts decisive."
            />
            <AlgoCard
              name="MCTS Advancement"
              tier="mid"
              desc="MCTS with a heuristic evaluation function based on relative pawn advancement. No neural network; cheaper per simulation but lower evaluation quality."
            />
            <AlgoCard
              name="Minimax + Alpha-Beta Pruning"
              tier="mid"
              desc="Exhaustive tree search to fixed depth with alpha-beta pruning to skip provably suboptimal branches. Deterministic and interpretable."
            />
            <AlgoCard
              name="Relative Advancement"
              tier="basic"
              desc="Greedy one-move lookahead using relative advancement as the evaluation function. No tree search."
            />
            <AlgoCard
              name="Advancement"
              tier="basic"
              desc="Greedy one-move lookahead using absolute advancement (ignores opponent state)."
            />
            <AlgoCard
              name="MCTS Q-Learning"
              tier="mid"
              desc="MCTS guided by a learned Q-value lookup table. Practical only for small grids (≤3 pawns) where the state space fits in memory."
            />
            <AlgoCard
              name="Random"
              tier="basic"
              desc="Uniformly random move selection. Baseline for all comparisons."
            />
          </div>
        </Section>

        {/* ── BENCHMARK TABLE ── */}
        <Section label="Results" title="Pairwise win-rate matrix">
          <p
            style={{
              fontSize: '0.88rem',
              color: C.textSec,
              lineHeight: 1.75,
              maxWidth: 700,
              marginBottom: '1.75rem',
            }}
          >
            All agents evaluated head-to-head under identical conditions: max 3 seconds per move,
            100 games per pair, original 5×5 grid. Values show the win rate of the{' '}
            <strong style={{color: C.text}}>row</strong> agent against the{' '}
            <strong style={{color: C.text}}>column</strong> agent.
          </p>
          <BenchmarkTable />
        </Section>

        {/* ── ALPHAZERO DEEP-DIVE ── */}
        <Section label="Architecture" title="Inside the AlphaZero variant">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {/* training details */}
            <div>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: C.textSec,
                  lineHeight: 1.8,
                  marginBottom: '1.25rem',
                }}
              >
                The MCTS Deep Q-Learning agent is a variant of AlphaZero. Each move is selected by
                running MCTS guided by a policy-value CNN trained purely through self-play — no
                human data or hard-coded heuristics.
              </p>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: C.textSec,
                  lineHeight: 1.8,
                  marginBottom: '1.5rem',
                }}
              >
                Several techniques stabilize and accelerate training:
              </p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.6rem'}}>
                {[
                  ['Board flipping', 'Exploits board symmetry to double effective training data'],
                  ['Dual-value head', 'Separate heads for policy and win-probability estimation'],
                  [
                    'Cosine annealing LR',
                    'Adaptive learning rate scheduling for stable convergence',
                  ],
                  ['Per-player loss balancing', 'Prevents one player from dominating the gradient'],
                  [
                    'Entropy regularization',
                    'Policy regularization via entropy loss to encourage exploration',
                  ],
                  [
                    'Experience replay sampling',
                    'Adaptive buffer sampling based on self-play win rate',
                  ],
                  [
                    'Backpropagation freeze',
                    'Player-dependent freeze in case of deep Elo asymmetry',
                  ],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      padding: '0.75rem 1rem',
                      background: C.bgCard,
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
                        {title}
                      </span>
                      <span style={{fontSize: '0.75rem', color: C.textTert}}>
                        {'  —  '}
                        {desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* training plots */}
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
                Training Metrics
              </p>
              <div
                style={{
                  borderRadius: 14,
                  overflow: 'hidden',
                  border: `1px solid ${C.border}`,
                  background: C.bgCard,
                  marginBottom: '1rem',
                }}
              >
                <img
                  src="https://martinbraquet.com/wp-content/uploads/training_plots.png"
                  alt="Training metrics: win rate, buffer diversity, policy/value loss, Elo"
                  style={{width: '100%', display: 'block'}}
                />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.45rem'}}>
                {[
                  ['Self-play win rate', 'Stays near 50% — model improves symmetrically'],
                  ['Buffer diversity', 'Remains above 80% — prevents overfitting'],
                  ['Checkpoint win rate', 'Rises above 70% → triggers checkpoint replacement'],
                  ['Elo', 'Smoothly increasing — key convergence metric'],
                ].map(([metric, note]) => (
                  <div
                    key={metric}
                    style={{display: 'flex', gap: '0.5rem', alignItems: 'baseline'}}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.72rem',
                        color: C.text,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {metric}
                    </span>
                    <span style={{fontSize: '0.72rem', color: C.textTert}}>— {note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ── PRETRAINED MODELS ── */}
        <Section label="Models" title="Pre-trained agents on Hugging Face">
          <p
            style={{
              fontSize: '0.88rem',
              color: C.textSec,
              lineHeight: 1.75,
              maxWidth: 700,
              marginBottom: '1.75rem',
            }}
            className={'custom-link'}
          >
            No training required — models are downloaded automatically from{' '}
            <CustomLink href="https://huggingface.co/martin-shark/squadro/tree/main">
              Hugging Face
            </CustomLink>{' '}
            on first use. All models are lightweight and run well on CPU.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '0.9rem',
            }}
          >
            {[
              {name: 'Q-Learning', pawns: '2', params: '—', size: '18 kB'},
              {name: 'Q-Learning', pawns: '3', params: '—', size: '6.2 MB'},
              {name: 'Deep Q-Learning', pawns: '3', params: '380k', size: '1.5 MB'},
              {name: 'Deep Q-Learning', pawns: '4', params: '1.8M', size: '7.1 MB'},
              {name: 'Deep Q-Learning', pawns: '5', params: '1.8M', size: '7.1 MB'},
            ].map(({name, pawns, params, size}) => (
              <div
                key={`${name}-${pawns}`}
                style={{
                  background: C.bgCard,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                <span style={{fontSize: '0.8rem', fontWeight: 600, color: C.text}}>{name}</span>
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
                    {pawns} pawns
                  </span>
                  {params !== '—' && (
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
                      {params} params
                    </span>
                  )}
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
                    {size}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── QUICK START ── */}
        <Section label="Usage" title="Get started in two commands" noBorder>
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
                code: 'pip install squadro',
                note: 'Works on Linux, Windows, macOS · Python ≥ 3.11',
              },
              {
                label: 'Play against the best agent',
                code: "import squadro\nsquadro.GamePlay(agent_1='best').run()",
                note: 'Downloads the pre-trained model automatically on first run',
              },
              {
                label: 'Train your own agent',
                code: "trainer = squadro.DeepQLearningTrainer(\n  n_pawns=5, model_path='my_model'\n)\ntrainer.run()",
                note: 'A few days on CPU for 5 pawns; much faster on GPU',
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

          <div style={{marginTop: '2.5rem', display: 'flex', gap: '0.6rem', flexWrap: 'wrap'}}>
            {/*<ActionBtn href="https://dirdam.github.io/squadro.html" primary>*/}
            {/*  <PlayIcon /> Play Online*/}
            {/*</ActionBtn>*/}
            <ActionBtn href="https://github.com/MartinBraquet/squadro" primary>
              <GithubIcon /> GitHub Repository
            </ActionBtn>
            <ActionBtn href="https://huggingface.co/martin-shark/squadro/tree/main">
              <ExternalIcon /> Hugging Face Models
            </ActionBtn>
          </div>
        </Section>
      </div>
    </PageBase>
  )
}
