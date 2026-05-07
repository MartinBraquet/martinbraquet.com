import {
  ActionBtn,
  AlgoCard,
  BackIcon,
  Badge,
  DownloadIcon,
  GithubIcon,
  LabelledImg,
  Section,
  StatBubble,
  TechTag,
} from 'web/components/badges'
import {CustomLink} from 'web/components/links'
import {PageBase} from 'web/components/page-base'
import {SEO} from 'web/components/SEO'
import {C} from 'web/lib/colors'

// ── Result row ────────────────────────────────────────────────────────────────

function ResultRow({
  env,
  algo,
  outcome,
  detail,
  success,
}: {
  env: string
  algo: string
  outcome: string
  detail: string
  success: boolean
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        padding: '1rem 1.25rem',
        background: C.bgCard,
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        alignItems: 'start',
      }}
    >
      <div>
        <span
          style={{
            fontSize: '0.62rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: C.textTert,
            display: 'block',
            marginBottom: '0.2rem',
          }}
        >
          Environment
        </span>
        <span style={{fontSize: '0.82rem', fontWeight: 600, color: C.text}}>{env}</span>
      </div>
      <div>
        <span
          style={{
            fontSize: '0.62rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: C.textTert,
            display: 'block',
            marginBottom: '0.2rem',
          }}
        >
          Algorithm
        </span>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.75rem',
            color: success ? 'rgb(16 105 79)' : C.red,
            fontWeight: 500,
          }}
        >
          {algo}
        </span>
      </div>
      <div>
        <span
          style={{
            fontSize: '0.62rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: C.textTert,
            display: 'block',
            marginBottom: '0.2rem',
          }}
        >
          Outcome
        </span>
        <span style={{fontSize: '0.78rem', color: C.textSec}}>{outcome}</span>
        <span
          style={{
            display: 'block',
            fontSize: '0.72rem',
            color: C.textTert,
            fontStyle: 'italic',
            marginTop: '0.2rem',
          }}
        >
          {detail}
        </span>
      </div>
    </div>
  )
}

const BASE =
  'https://raw.githubusercontent.com/MartinBraquet/Robot-Learning-UT/refs/heads/master/report/'

// ── Page ──────────────────────────────────────────────────────────────────────

export default function RobotLearningPage() {
  return (
    <PageBase>
      <SEO
        title={'Reinforcement Learning for Cooperative Manipulation — Martin Braquet'}
        description={
          'DDPG agent with Hindsight Experience Replay (HER) for multi-robot cooperative manipulation. Demonstrated on OpenAI Fetch pick-and-place and Robosuite two-arm lifting, achieving >90% success rate. Graduate project at UT Austin.'
        }
      />
      <div style={{background: C.bg, color: C.text, overflowX: 'hidden'}}>
        <style>{`@keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:none; } }`}</style>

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
            C
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
              <Badge kind="project">ML / AI</Badge>
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
              Reinforcement Learning for{' '}
              <span style={{color: C.red}}>Cooperative Manipulation</span>
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
              Project in Robot Learning · CS391R · UT Austin · 2021 · with Steven Patrick
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
              An improvement on multi-agent reinforcement learning for cooperative robotic
              manipulation. We replace the original{' '}
              <CustomLink href="https://arxiv.org/abs/2002.05189">intrinsic motivation</CustomLink>{' '}
              paper's PPO optimizer with{' '}
              <CustomLink href="https://arxiv.org/abs/1509.02971">DDPG</CustomLink> and add{' '}
              <CustomLink href="https://arxiv.org/abs/1707.01495">
                Hindsight Experience Replay
              </CustomLink>
              , achieving faster convergence and a success rate above 90% on OpenAI Fetch
              pick-and-place.
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
              {['Python', 'PyTorch'].map((t) => (
                <TechTag key={t}>{t}</TechTag>
              ))}
              <StatBubble>90%+ success rate</StatBubble>
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
                href="https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/projects/CS391R___Robot_Learning__Final_report__Braquet___Patrick.pdf"
                primary
              >
                <DownloadIcon /> Final Report
              </ActionBtn>
              <ActionBtn href="https://github.com/MartinBraquet/Robot-Learning-UT">
                <GithubIcon /> Code
              </ActionBtn>
            </div>
          </div>
        </header>

        {/* ── HERO IMAGES ── */}
        <div style={{borderBottom: `1px solid ${C.border}`}}>
          <div
            style={{
              maxWidth: 1100,
              margin: '0 auto',
              padding: '3rem 2.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <LabelledImg
              label="Pick-and-place demo (learned policy)"
              src="https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/projects/fetch-pick-and-place-openAI-final.gif"
              alt="Fetch robot arm performing pick-and-place with learned DDPG-HER policy"
              aspect="4/3"
            />
            <LabelledImg
              label="Robosuite two-arm lift environment"
              src={`${BASE}Two_Arm_Env.png`}
              alt="Robosuite two-arm cooperative lifting task"
              aspect="4/3"
            />
            {/*<LabelledImg*/}
            {/*  label="Network architecture — intrinsic reward"*/}
            {/*  src={`${BASE}Architecture.png`}*/}
            {/*  alt="Overview of the joint vs composed estimator network architecture"*/}
            {/*  aspect="4/3"*/}
            {/*/>*/}
          </div>
        </div>

        {/* ── STATS BAR ── */}
        <div style={{background: C.bgCard, borderBottom: `1px solid ${C.border}`}}>
          <div style={{maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap'}}>
            {[
              {n: '90%+', label: 'Success rate', sub: 'DDPG+HER on Fetch pick-and-place'},
              {n: '50k', label: 'Fetch training runs', sub: '150 time steps each'},
              {n: '100k', label: 'Robosuite runs', sub: 'Two-arm lift training'},
              {n: '4', label: 'Hidden layers', sub: '64 units each · actor & critic'},
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
          title="The problem: making robots cooperate"
          intro="Single-robot manipulation is well-studied, but coordinating multiple robots to lift a shared object — where each robot's action affects the other — introduces non-stationarity that breaks standard single-agent RL. This project builds on an intrinsic motivation approach that rewards collective over individual actions, and improves it with a more sample-efficient optimizer."
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
                icon: '🤝',
                title: 'Cooperative task',
                body: 'Two robot arms must jointly lift an object that neither can lift alone. The reward for collective action is defined intrinsically — by comparing the joint outcome to what each agent would achieve individually.',
              },
              {
                icon: '🎯',
                title: 'Sparse rewards are hard',
                body: 'In pick-and-place, the robot only gets a reward when the object reaches the exact goal. With no intermediate feedback, naive DDPG never learns. HER solves this by retroactively treating visited states as goals.',
              },
              {
                icon: '🔁',
                title: 'Off-policy data reuse',
                body: 'Unlike PPO (the baseline), DDPG is off-policy: past episode data can be replayed from the buffer. This makes every simulation run more valuable and dramatically reduces training cost.',
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

        {/* ── ALGORITHMS ── */}
        <Section label="Methods" title="Three algorithms, one pipeline">
          <p
            style={{
              fontSize: '0.88rem',
              color: C.textSec,
              lineHeight: 1.75,
              maxWidth: 700,
              marginBottom: '1.75rem',
            }}
          >
            The contribution is a specific combination: the intrinsic reward formulation from prior
            work, upgraded to an off-policy training loop with experience replay. Each piece
            addresses a distinct failure mode of the others.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '0.9rem',
            }}
          >
            <AlgoCard
              name="Intrinsic Motivation"
              label="From prior work"
              labelColor={C.textTert}
              labelBg={C.inkA04}
              labelBorder={C.border}
              desc="Defines an intrinsic reward as the L2 distance between the predicted next state under joint action vs. chained single-agent actions. Rewards behaviors that require cooperation — actions where individual agents could not produce the same outcome alone."
              detail="r_intrinsic = ‖f_joint(s,a) − f_composed(s,a)‖"
            />
            <AlgoCard
              name="DDPG"
              label="Our improvement"
              labelColor={C.red}
              labelBg={C.redA08}
              labelBorder={C.redA18}
              desc="Deep Deterministic Policy Gradient replaces PPO as the optimizer. Off-policy: episode data is collected with noise-injected actions and stored in a replay buffer for reuse. Suited for continuous action spaces — robot arm joint offsets."
              detail="Soft target network updates: θ′ ← τθ + (1−τ)θ′"
            />
            <AlgoCard
              name="HER — Hindsight Experience Replay"
              label="Our improvement"
              labelColor={C.red}
              labelBg={C.redA08}
              labelBorder={C.redA18}
              desc="Augments the replay buffer by relabelling failed episodes with the state the robot actually reached as a substitute goal. Learns from failure. Critical for sparse-reward environments where successes are initially near-impossible to sample."
              detail="Goal-agnostic reward structure is a prerequisite — satisfied by all Fetch and Robosuite tasks."
            />
          </div>
        </Section>

        {/* ── ENVIRONMENTS ── */}
        <Section label="Environments" title="Two simulation testbeds">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {/* Fetch */}
            <div>
              <p
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.09em',
                  textTransform: 'uppercase',
                  color: C.red,
                  marginBottom: '1rem',
                }}
              >
                OpenAI Gym — Fetch
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.9rem',
                  marginBottom: '1rem',
                }}
              >
                <LabelledImg
                  label="Fetch Reach"
                  src={`${BASE}fetch_reach.png`}
                  alt="Fetch Reach environment"
                  aspect="1/1"
                />
                <LabelledImg
                  label="Fetch Pick-and-Place"
                  src={`${BASE}fetch_pick.png`}
                  alt="Fetch pick-and-place environment"
                  aspect="1/1"
                />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                {[
                  ['DOF', '7 (6 arm + gripper open/close)'],
                  [
                    'Reach task',
                    'Move end effector to xyz position — shaped reward, fast convergence',
                  ],
                  ['Pick-and-place', 'Move block to 3D goal — sparse binary reward, requires HER'],
                  ['Training runs', '50,000 episodes · 150 steps each'],
                ].map(([k, v]) => (
                  <div
                    key={k as string}
                    style={{display: 'flex', gap: '0.75rem', fontSize: '0.78rem'}}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        color: C.textTert,
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                        minWidth: 100,
                      }}
                    >
                      {k as string}
                    </span>
                    <span style={{color: C.textSec}}>{v as string}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Robosuite */}
            <div>
              <p
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.09em',
                  textTransform: 'uppercase',
                  color: C.red,
                  marginBottom: '1rem',
                }}
              >
                Robosuite
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.9rem',
                  marginBottom: '1rem',
                }}
              >
                <LabelledImg
                  label="Single-arm lift"
                  src={`${BASE}One_Arm_Env.png`}
                  alt="Robosuite single arm lift task"
                  aspect="1/1"
                />
                <LabelledImg
                  label="Two-arm lift"
                  src={`${BASE}Two_Arm_Env.png`}
                  alt="Robosuite two-arm cooperative lift task"
                  aspect="1/1"
                />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                {[
                  ['DOF', '7 per arm (6 arm + gripper) — 14 total for two-arm'],
                  ['Single arm', 'Grasp and move a cube — reward shaping for grasping'],
                  ['Two arms', 'Collaboratively lift a bucket via two handles — intrinsic reward'],
                  ['Training runs', '100,000 episodes · same step length'],
                ].map(([k, v]) => (
                  <div
                    key={k as string}
                    style={{display: 'flex', gap: '0.75rem', fontSize: '0.78rem'}}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        color: C.textTert,
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                        minWidth: 100,
                      }}
                    >
                      {k as string}
                    </span>
                    <span style={{color: C.textSec}}>{v as string}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ── RESULTS ── */}
        <Section label="Results" title="What worked, what didn't, and why">
          <p
            style={{
              fontSize: '0.88rem',
              color: C.textSec,
              lineHeight: 1.75,
              maxWidth: 700,
              marginBottom: '1.75rem',
            }}
          >
            The key finding is that DDPG alone fails on sparse-reward environments, but DDPG+HER
            reliably solves them. The two-arm lift remained partially unsolved — a reward shaping
            issue, not an algorithmic one.
          </p>

          {/* convergence plots */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem',
            }}
          >
            <LabelledImg
              label="DDPG convergence — Fetch Reach (shaped reward)"
              src={`${BASE}Fetch%20Reach.png`}
              alt="DDPG reward convergence on Fetch Reach environment"
              aspect="4/3"
            />
            <LabelledImg
              label="DDPG+HER success rate — Fetch Pick-and-Place (sparse reward)"
              src={`${BASE}Fetch%20Pick%20and%20Place.png`}
              alt="DDPG-HER success rate vs random policy on Fetch pick-and-place"
              aspect="4/3"
            />
          </div>

          <div style={{display: 'flex', flexDirection: 'column', gap: '0.7rem'}}>
            <ResultRow
              env="Fetch Reach"
              algo="DDPG"
              outcome="Converges to successful policy"
              detail="Shaped continuous reward provides sufficient gradient signal. Reward approaches 0 within a small number of episodes."
              success
            />
            <ResultRow
              env="Fetch Pick-and-Place"
              algo="DDPG (no HER)"
              outcome="Fails to learn"
              detail="Sparse binary reward: always receives −1 at the start, no gradient signal. Training never improves."
              success={false}
            />
            <ResultRow
              env="Fetch Pick-and-Place"
              algo="DDPG + HER"
              outcome="90%+ success rate"
              detail="HER relabels failed episodes as successful for the achieved state. Policy steadily improves toward 100%."
              success
            />
            <ResultRow
              env="Robosuite Single Arm"
              algo="DDPG"
              outcome="Grasp learned, goal not reached"
              detail="Policy found reliable grasping. Post-grasp motion is random due to reward shaping not penalizing displacement from goal."
              success
            />
            <ResultRow
              env="Robosuite Two Arm"
              algo="DDPG + Intrinsic"
              outcome="Handle grasp learned; lift not learned"
              detail="Gripping converged quickly. Lifting never learned — reward over-weighted grasping vs. object height goal."
              success={false}
            />
          </div>
        </Section>

        {/* ── ARCHITECTURE DEEP-DIVE ── */}
        <Section label="Architecture" title="Network design" noBorder>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <div>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: C.textSec,
                  lineHeight: 1.8,
                  marginBottom: '1.25rem',
                }}
              >
                The system has three types of networks. The partial estimators — one per agent — are
                pre-trained from human demonstrations to predict the next object state given a
                single agent's action. They are then frozen and chained into{' '}
                <code
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.82rem',
                    background: C.inkA04,
                    padding: '0.1rem 0.35rem',
                    borderRadius: 4,
                  }}
                >
                  f_composed
                </code>
                .
              </p>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: C.textSec,
                  lineHeight: 1.8,
                  marginBottom: '1.5rem',
                }}
              >
                The full estimator{' '}
                <code
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.82rem',
                    background: C.inkA04,
                    padding: '0.1rem 0.35rem',
                    borderRadius: 4,
                  }}
                >
                  f_joint
                </code>{' '}
                takes all agents' actions simultaneously and is trained online. The intrinsic reward
                is the L2 distance between its prediction and the composed chain — a signal that
                fires strongly when collective action produces a qualitatively different outcome
                than the sum of individual actions.
              </p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.55rem'}}>
                {[
                  [
                    'Partial estimators',
                    '4 hidden layers · 64 units · ℓ2 loss · trained from demos',
                  ],
                  [
                    'Full estimator (f_joint)',
                    'Same architecture · trained online from RL episodes',
                  ],
                  [
                    'Actor network',
                    'Input: joint positions + end-effector positions + object pose → outputs Δpose',
                  ],
                  ['Critic network', 'Same input as actor → outputs scalar value (score)'],
                  ['All networks', '4 hidden layers · 64 hidden units each'],
                ].map(([k, v]) => (
                  <div
                    key={k as string}
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      padding: '0.65rem 0.9rem',
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
                        {k as string}
                      </span>
                      <span style={{fontSize: '0.75rem', color: C.textTert}}>
                        {'  —  '}
                        {v as string}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.25rem'}}>
              <LabelledImg
                label="Architecture diagram — joint vs composed estimators"
                src={`${BASE}Architecture.png`}
                alt="Network architecture showing f_joint vs f_composed and intrinsic reward computation"
                aspect="10/3"
              />
              <LabelledImg
                label="Single-robot baseline environment"
                src={`${BASE}EnviOneRobot.png`}
                alt="Single robot arm picking a hammer — baseline before multi-agent extension"
                aspect="4/3"
              />
            </div>
          </div>
        </Section>
      </div>
    </PageBase>
  )
}
