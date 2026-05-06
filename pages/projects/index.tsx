import {keyBy} from 'lodash'
import {useEffect, useMemo, useRef, useState} from 'react'
import {
  Badge,
  ClearIcon,
  DownloadIcon,
  ExternalIcon,
  GithubIcon,
  SearchIcon,
  StatBubble,
  TechTag,
} from 'web/components/badges'
import {CustomLink} from 'web/components/links'
import {PageBase} from 'web/components/page-base'
import {SEO} from 'web/components/SEO'
import {useIsMobile} from 'web/hooks/use-is-mobile'
import {usePersistentInMemoryState} from 'web/hooks/use-persistent-in-memory-state'
import {C} from 'web/lib/colors'

// ── Types ───────────── ────────────────────────────────────────────────────────

type Category = 'All' | 'ML / AI' | 'Web App' | 'Research' | 'Hardware'
type SortKey = 'recent' | 'important'
type BadgeKind = 'paper' | 'live' | 'thesis' | 'project'

interface Project {
  id?: string
  title: string
  year: number
  importance: 1 | 2 | 3 // 3 = highest; drives "Most Important" sort
  category: Exclude<Category, 'All'>
  badge: BadgeKind
  context: string // e.g. "Graduate Research · UT Austin"
  description: string
  tech: string[]
  stat?: string // e.g. "500+ members"
  media?: string // image / gif URL shown in card
  links: {
    github?: string
    article?: string
    live?: string
    report?: string
    paper?: string
    thesis?: string
  }
}

// ── Data ──────────────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    title: 'Personalized Preparation in Early Autism Intervention',
    year: 2026,
    importance: 3,
    category: 'Research',
    badge: 'project',
    context: 'Clinical Trial · Maya Care and Grow · Agartala',
    description:
      'Hierarchical Bayesian adaptive N-of-1 randomized crossover trial identifying the optimal pre-session warm-up (Stimulating, Calming, Child-Led, or None) for each child with autism.',
    tech: ['R', 'Stan', 'brms'],
    // stat: '30% engagement increase',
    media: 'https://ez8ozeuiadnifqq8.public.blob.vercel-storage.com/peer-learning-riki.jpeg',
    links: {
      github: 'https://github.com/MartinBraquet/rct-autism',
      live: 'https://rct-autism.vercel.app/',
    },
  },
  {
    id: 'compass',
    title: 'Compass — Platform for Intentional Human Connections',
    year: 2025,
    importance: 3,
    category: 'Web App',
    badge: 'live',
    context: 'Founder & Maintainer',
    description:
      'Free, open-source platform to help people form deep connections — platonic, romantic, or collaborative. Keyword search, transparent database, no ads, no hidden algorithms.',
    tech: ['TypeScript', 'React', 'Next.js'],
    stat: '600+ members', // fallback if dynamic fetch fails
    media: 'https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/profiles-page-with-filters.png',
    links: {
      live: 'https://www.compassmeet.com/',
      github: 'https://github.com/CompassConnections/Compass',
    },
  },
  {
    title: 'AI Agent for Squadro Board Game',
    year: 2025,
    importance: 2,
    category: 'ML / AI',
    badge: 'project',
    context: 'Personal Project',
    description:
      'AlphaZero variant using MCTS improved by a policy-value CNN trained purely by self-play. Includes Elo tracking, experience replay, and cosine-annealed learning rate.',
    tech: ['Python', 'PyTorch'],
    stat: 'Outperforms Humans',
    media: 'https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/squadro-spel-gigamic.png',
    links: {
      github: 'https://github.com/MartinBraquet/squadro',
      live: '/projects/squadro',
    },
  },
  {
    id: 'no-login',
    title: 'Login Bypasser',
    year: 2024,
    importance: 1,
    category: 'Web App',
    badge: 'live',
    context: 'Firefox Extension',
    description:
      'Firefox add-on that removes login popups and access banners from social media and news sites (Facebook, LinkedIn, Instagram), letting you read content without an account.',
    tech: ['JavaScript'],
    media: 'https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/no-login.png',
    stat: '1600+ users', // fallback if dynamic fetch fails
    links: {
      github: 'https://github.com/MartinBraquet/no-login',
      live: 'https://addons.mozilla.org/addon/no-login',
    },
  },
  {
    title: 'Large Language Models from Scratch',
    year: 2024,
    importance: 1,
    category: 'ML / AI',
    badge: 'project',
    context: 'Personal Project',
    description:
      'Full transformer implementation including encoding, embedding, multi-head attention, and MLP layers. Trains an LLM of any size on arbitrary text, and fine-tunes GPT-2 on custom corpora for text generation.',
    tech: ['Python', 'PyTorch'],
    stat: 'Full Transformer Implementation',
    media: 'https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/llm-from-scratch.png',
    links: {github: 'https://github.com/MartinBraquet/llm', live: '/projects/llm-from-scratch'},
  },
  {
    title: 'Cellular Automata',
    year: 2024,
    importance: 1,
    category: 'ML / AI',
    badge: 'project',
    context: 'Reproduction of Fundamental Computer Systems #1',
    description:
      "Classic 1-D and 2-D cellular automata including Conway's Game of Life and Wolfram's Rule 110. Demonstrates how complex biological processes emerge from simple local rules.",
    tech: ['Python'],
    media:
      'https://raw.githubusercontent.com/MartinBraquet/cellular-automata/main/cellular_automata/results/animation_chaos_300_100.gif',
    links: {
      github: 'https://github.com/MartinBraquet/cellular-automata',
      live: '/projects/cellular-automata',
    },
  },
  {
    id: 'youtube_adblock',
    title: 'Youtube AdBlock',
    year: 2023,
    importance: 2,
    category: 'Web App',
    badge: 'live',
    context: 'Firefox Extension',
    description:
      'Firefox add-on that accelerates and skips YouTube ads in under two seconds. Prioritizes user security by operating entirely within the local browser environment without collecting data or storing external cookies.',
    tech: ['JavaScript'],
    stat: '6500+ users', // fallback if dynamic fetch fails
    media: 'https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/youtube-adblock.png',
    links: {
      github: 'https://github.com/MartinBraquet/youtube-adblock',
      live: 'https://addons.mozilla.org/addon/youtube_adblock',
    },
  },
  {
    title: 'Convolutional Neural Network for Digit Recognition',
    year: 2022,
    importance: 1,
    category: 'ML / AI',
    badge: 'project',
    context: 'ML / AI Series #1',
    description:
      'Handwritten digit recognition using a CNN trained on the MNIST dataset. The model processes images through feature extraction and a multilayer perceptron to output the most likely digit.',
    tech: ['Python', 'PyTorch', 'Torchvision'],
    stat: '95% accuracy',
    media: 'https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/digit-recognition.gif',
    links: {
      live: 'https://ml-digits-recognition.readthedocs.io/',
      github: 'https://github.com/MartinBraquet/ml-digits-recognition',
    },
  },
  {
    title: 'Multi-Agent Motion Planning with Military Maps',
    year: 2022,
    importance: 1,
    category: 'Research',
    badge: 'project',
    context: 'Graduate Research · UT Austin · Army Research Lab',
    description:
      'Dijkstra-based path planning over military terrain — obstacles, elevation, and valence maps. Runs a fast global route over a downsampled mesh, then refines only the next executed segment at full resolution, cutting compute time significantly without sacrificing local path quality.',
    tech: ['Python'],
    media: 'https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/arl-motion-planning.png',
    links: {
      live: '/projects/multi-agent-motion-planning',
    },
  },
  {
    title: 'Covariance Steering Games with Wasserstein Distance',
    year: 2021,
    importance: 1,
    category: 'Research',
    badge: 'project',
    context: 'Project in Multi-Agent Systems · UT Austin',
    description:
      'Two algorithms for discrete-time linear covariance steering dynamic games. Iterative best response and LQG reformulation via Riccati equations, evaluated on convergence and solution quality.',
    tech: ['Python'],
    media: 'https://martinbraquet.com/wp-content/uploads/ut-ase389-stoch-games.gif',
    links: {
      report: 'https://martinbraquet.com/wp-content/uploads/Game_Theory_Class_Project.pdf',
      live: 'https://sites.google.com/view/ut-ase389-stoch-games',
      github: 'https://github.com/MartinBraquet/mod-multi-agent-systems-project',
    },
  },
  {
    title: 'Reinforcement Learning for Cooperative Manipulation',
    year: 2021,
    importance: 2,
    category: 'ML / AI',
    badge: 'project',
    context: 'Project in Robot Learning · UT Austin',
    description:
      'DDPG agent with Hindsight Experience Replay (HER) for robotic manipulation tasks. Demonstrated on OpenAI Fetch pick-and-place and Robosuite two-arm lifting.',
    tech: ['Python', 'PyTorch'],
    media: 'https://martinbraquet.com/wp-content/uploads/fetch-pick-and-place-openAI-final.gif',
    links: {
      live: '/projects/robot-learning',
      report:
        'https://martinbraquet.com/wp-content/uploads/CS391R___Robot_Learning__Final_report__Braquet___Patrick.pdf',
      github: 'https://github.com/MartinBraquet/Robot-Learning-UT',
    },
  },
  {
    id: 'thzpnRoAAAAJ:d1gkVwhDpl0C',
    title: 'Collision Avoidance for Moving Obstacles',
    year: 2022,
    importance: 2,
    category: 'Research',
    badge: 'paper',
    context: 'Graduate Research · UT Austin',
    description:
      'Local motion planning for agents navigating around moving elliptical obstacles with time-varying shape, bounded environments, and limited control input. 2D and 3D simulations.',
    tech: ['MATLAB'],
    media:
      'https://raw.githubusercontent.com/MartinBraquet/vector-field-obstacle-avoidance/refs/heads/main/videos/7%20moving_multiple_ellipsoids.gif',
    stat: '15+ citations',
    links: {
      paper: 'https://martinbraquet.com/wp-content/uploads/braquet_2022.pdf',
      article: 'https://www.sciencedirect.com/science/article/pii/S2405896322028890',
      github: 'https://github.com/MartinBraquet/vector-field-obstacle-avoidance',
    },
  },
  {
    id: 'thzpnRoAAAAJ:u-x6o8ySG0sC',
    title: 'Greedy Decentralized Auction-based Task Allocation',
    year: 2021,
    importance: 3,
    category: 'Research',
    badge: 'paper',
    context: 'Graduate Research · UT Austin',
    description:
      'Greedy Coalition Auction Algorithm (GCAA) assigning hundreds of agents to thousands of tasks in real time — applications in aerial firefighting, ride-sharing, and warehouse robotics. One task assigment per auction phase; faster than traditional auction algorithms.',
    tech: ['MATLAB', 'Python'],
    media: 'https://martinbraquet.com/wp-content/uploads/Dynamic-Task-Agent-Allocation.gif',
    stat: '70+ citations',
    links: {
      paper:
        'https://martinbraquet.com/wp-content/uploads/Greedy-Decentralized-Auction-based-Task-Allocation-for-Multi-Age_2021_IFAC-P.pdf',
      article: 'https://www.sciencedirect.com/science/article/pii/S240589632102293X',
      github: 'https://github.com/MartinBraquet/task-allocation-auctions',
    },
  },
  {
    title: 'Design of a Smart Sensor for Bird Detection',
    year: 2020,
    importance: 3,
    category: 'Hardware',
    badge: 'thesis',
    context: "Master's Thesis · UCLouvain",
    description:
      'Ultra-low-power audio IoT sensor harvesting solar energy via supercapacitor. Runs a KNN classifier on-device to discriminate four Belgian bird species at 94% precision. 15+ year lifetime, LoRaWAN communication.',
    tech: ['C', 'Embedded', 'LoRaWAN'],
    stat: '94% accuracy',
    media: 'https://martinbraquet.com/wp-content/uploads/real_PCB_with_MCU.png',
    links: {
      live: '/projects/smart-sensor',
      thesis: 'https://martinbraquet.com/wp-content/uploads/EPL-master-thesis-Martin-Braquet.pdf',
      // report: 'https://martinbraquet.com/wp-content/uploads/Presentation-master-thesis.pdf',
      github: 'https://github.com/MartinBraquet/master-thesis-UCLouvain',
    },
  },
  {
    title: 'Prediction of Air Quality in Beijing',
    year: 2019,
    importance: 1,
    category: 'ML / AI',
    badge: 'project',
    context: 'Project in Machine Learning · UCLouvain',
    description:
      'PM2.5 concentration prediction using regression models on meteorological data. Covers feature selection (Mutual Information), extraction (PCA), error estimation (Bootstrap 632), and Neural Network / KNN / Lasso / tree models.',
    tech: ['Python', 'PyTorch', 'Sklearn'],
    media: 'https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/air-quality-prediction.png',
    links: {
      live: '/projects/air-quality-prediction',
      report: 'https://martinbraquet.com/wp-content/uploads/LELEC2870-Project_groupAM-1.pdf',
      github: 'https://github.com/MartinBraquet/machine-learning-ELEC2870',
    },
  },
  {
    title: 'Building of Astrobee',
    year: 2019,
    importance: 2,
    category: 'Hardware',
    badge: 'project',
    context: 'Space Systems Laboratory · MIT',
    description:
      "Built the avionics of NASA's Astrobee robot (ISS crew assistant) during a UCLouvain–MIT exchange. Designed avionics diagrams, sourced components, soldered PCBs, and tested sensors and development boards.",
    tech: ['Electronics', 'PCB Design'],
    media: 'https://martinbraquet.com/wp-content/uploads/2019/09/dA9jU8cXH9pB5edo4ZJnEC.jpg',
    links: {
      live: '/projects/astrobee',
      report: 'https://martinbraquet.com/wp-content/uploads/work_report_non_confidential.pdf',
    },
  },
  {
    title: 'Design of a Wheeled Driving Robot',
    year: 2019,
    importance: 2,
    category: 'Hardware',
    badge: 'project',
    context: 'Project in Mechatronics · UCLouvain · Eurobot',
    description:
      'Fully autonomous robot for the Eurobot contest. Implemented path planning (potential fields), Kalman-filtered LIDAR localisation, low-level wheel control, and an Android Wi-Fi remote — running on Raspberry Pi + FPGA.',
    tech: ['C++', 'SystemVerilog', 'FPGA'],
    stat: '2nd place Belgium',
    media: 'https://martinbraquet.com/wp-content/uploads/2020/03/JGO_8611-scaled.jpg',
    links: {
      live: '/projects/eurobot',
      report: 'https://martinbraquet.com/wp-content/uploads/LELME2002___Final_report.pdf',
      github: 'https://github.com/MartinBraquet/ELME2002',
    },
  },
]

const CATEGORIES: Category[] = ['All', 'ML / AI', 'Web App', 'Research', 'Hardware']

const BADGE_LABELS: Record<BadgeKind, string> = {
  paper: 'Published Paper',
  live: 'Live Product',
  // extension: 'Firefox Extension',
  thesis: "Master's Thesis",
  project: 'Project',
}

function CardLink({
  href,
  primary,
  children,
}: {
  href: string
  primary?: boolean
  children: React.ReactNode
}) {
  const [hovered, setHovered] = useState(false)
  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.3rem',
    fontSize: '0.72rem',
    fontWeight: 500,
    padding: '0.3rem 0.75rem',
    borderRadius: 100,
    textDecoration: 'none',
    transition: 'all 0.15s',
    whiteSpace: 'nowrap',
  }
  const style: React.CSSProperties = primary
    ? {
        ...base,
        background: hovered ? C.redA15 : C.redA08,
        color: C.red,
        border: `1px solid ${hovered ? C.redA30 : C.redA18}`,
        transform: hovered ? 'translateY(-1px)' : 'none',
      }
    : {
        ...base,
        color: hovered ? C.text : C.textSec,
        border: `1px solid ${hovered ? C.borderMd : C.border}`,
        background: hovered ? C.inkA04 : 'transparent',
      }
  return (
    <CustomLink
      href={href}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </CustomLink>
  )
}

function FilterPill({
  active,
  onClick,
  count,
  children,
}: {
  active: boolean
  onClick: () => void
  count?: number
  children: React.ReactNode
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: '0.75rem',
        fontWeight: 500,
        padding: '0.35rem 0.9rem',
        borderRadius: 100,
        border: `1px solid ${active ? C.text : hovered ? C.borderMd : C.border}`,
        background: active ? C.text : hovered ? C.inkA04 : 'transparent',
        color: active ? C.bg : hovered ? C.text : C.textSec,
        cursor: 'pointer',
        transition: 'all 0.15s',
        fontFamily: "'DM Sans', sans-serif",
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
      }}
    >
      {children}
      {count !== undefined && (
        <span
          style={{
            fontSize: '0.65rem',
            fontWeight: 600,
            opacity: active ? 0.7 : 0.5,
            fontFamily: "'DM Mono', monospace",
          }}
        >
          {count}
        </span>
      )}
    </button>
  )
}

function SortBtn({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: '0.75rem',
        fontWeight: 500,
        padding: '0.35rem 0.9rem',
        borderRadius: 100,
        border: `1px solid ${active ? C.red : hovered ? C.redA30 : C.border}`,
        background: active ? C.red : hovered ? C.redA08 : 'transparent',
        color: active ? C.bg : hovered ? C.red : C.textSec,
        cursor: 'pointer',
        transition: 'all 0.15s',
        fontFamily: "'DM Sans', sans-serif",
        display: 'flex',
        alignItems: 'center',
        gap: '0.3rem',
      }}
    >
      {children}
    </button>
  )
}

// ── ProjectCard ───────────────────────────────────────────────────────────────

function ProjectCard({p, statOverride}: {p: Project; statOverride?: string | null}) {
  const [hovered, setHovered] = useState(false)
  const accentColor = p.importance === 3 ? C.red : p.importance === 2 ? C.borderMd : C.border
  const primaryLink =
    p.links.live ??
    p.links.article ??
    p.links.report ??
    p.links.paper ??
    p.links.thesis ??
    p.links.github

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: C.bgCard,
        border: `1px solid ${hovered ? C.borderMd : C.border}`,
        borderRadius: 18,
        padding: '1.4rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        height: '100%', // 1. CRITICAL: Ensures card fills the grid height
        transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
        transform: hovered ? 'translateY(-2px)' : 'none',
        boxShadow: hovered ? `0 10px 30px ${C.inkA07}` : 'none',
        position: 'relative',
      }}
    >
      {/* importance accent bar */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 16,
          bottom: 16,
          width: 3,
          borderRadius: '0 3px 3px 0',
          background: accentColor,
          opacity: p.importance === 1 ? 0.3 : 0.7,
        }}
      />

      {/* top row: badge + year */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '0.5rem',
          // marginBottom: '0.5rem',
        }}
      >
        <div style={{display: 'flex', gap: '0.4rem', flexWrap: 'wrap', flex: 1}}>
          <Badge kind={p.badge}>{BADGE_LABELS[p.badge]}</Badge>
          <Badge kind="project">{p.category}</Badge>
        </div>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.68rem',
            color: C.textTert,
            whiteSpace: 'nowrap',
            paddingTop: '0.1rem',
          }}
        >
          {p.year}
        </span>
      </div>

      {/* title */}
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1rem',
          fontWeight: 600,
          color: C.text,
          lineHeight: 1.35,
          marginBottom: '0.3rem',
        }}
      >
        {p.title}
      </h3>

      {/* context */}
      <p
        style={{
          fontSize: '0.72rem',
          color: C.textTert,
          fontStyle: 'italic',
          marginBottom: '0.55rem',
        }}
      >
        {p.context}
      </p>

      {/* media */}
      {p.media && (
        <CustomLink
          href={primaryLink}
          style={{
            width: '100%',
            borderRadius: 10,
            overflow: 'hidden',
            border: `1px solid ${C.border}`,
            marginBottom: '0.85rem',
            background: C.bg,
            aspectRatio: '3/2',
            flexShrink: 0,
          }}
        >
          <img
            src={p.media}
            alt={p.title}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'left center',
              display: 'block',
              transition: 'transform 0.4s ease',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
            }}
          />
        </CustomLink>
      )}

      {/* description */}
      <p
        style={{
          fontSize: '0.82rem',
          color: C.textSec,
          lineHeight: 1.65,
          marginBottom: '0.75rem',
          // flex: 1 removed from here to prevent text stretching
        }}
      >
        {p.description}
      </p>

      {/* 2. THE SPACER: This pushes everything below it to the bottom */}
      <div style={{flex: 1}} />

      {/* tech tags */}
      <div style={{display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.9rem'}}>
        {p.tech.map((t) => (
          <TechTag key={t}>{t}</TechTag>
        ))}
        <div style={{flex: 1}} />
        {/* stat */}
        {(statOverride ?? p.stat) && (
          <div>
            <StatBubble>{statOverride ?? p.stat}</StatBubble>
          </div>
        )}
      </div>

      {/* links footer */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center',
          flexWrap: 'wrap',
          paddingTop: '0.85rem',
          borderTop: `1px solid ${C.border}`,
          // marginTop: 'auto' is no longer strictly needed but good for safety
        }}
      >
        {p.links.live && (
          <CardLink href={p.links.live} primary>
            <ExternalIcon />
            {'Visit'}
          </CardLink>
        )}
        {p.links.article && (
          <CardLink href={p.links.article} primary>
            <ExternalIcon />
            Article
          </CardLink>
        )}
        {p.links.report && (
          <CardLink href={p.links.report}>
            <DownloadIcon />
            Report
          </CardLink>
        )}
        {p.links.paper && (
          <CardLink href={p.links.paper}>
            <DownloadIcon />
            Paper
          </CardLink>
        )}
        {p.links.thesis && (
          <CardLink href={p.links.thesis}>
            <DownloadIcon />
            Thesis
          </CardLink>
        )}
        {p.links.github && (
          <CardLink href={p.links.github}>
            <GithubIcon />
            Code
          </CardLink>
        )}
      </div>
    </div>
  )
}

function SearchInput({
  value,
  onChange,
  placeholder,
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: 280,
      }}
    >
      <span
        style={{
          position: 'absolute',
          left: '0.7rem',
          color: focused ? C.textSec : C.textTert,
          transition: 'color 0.15s',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <SearchIcon />
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        style={{
          width: '100%',
          fontSize: '0.8rem',
          fontWeight: 500,
          padding: '0.4rem 2rem 0.4rem 2rem',
          borderRadius: 100,
          border: `1px solid ${focused ? C.borderMd : C.border}`,
          background: focused ? C.bgCard : 'transparent',
          color: C.text,
          outline: 'none',
          transition: 'all 0.15s',
          fontFamily: "'DM Sans', sans-serif",
        }}
      />
      {value && (
        <button
          onClick={() => onChange('')}
          style={{
            position: 'absolute',
            right: '0.6rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: C.textTert,
            display: 'flex',
            alignItems: 'center',
            padding: 0,
          }}
          aria-label="Clear search"
        >
          <ClearIcon />
        </button>
      )}
    </div>
  )
}

// ── Reveal wrapper ─────────────────────────────────────────────────────────────

function Reveal({children, delay = 0}: {children: React.ReactNode; delay?: number}) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    el.style.transition = `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s ease`
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
  }, [delay])
  return <div ref={ref}>{children}</div>
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      `https://serpapi.com/search.json?engine=google_scholar_author&author_id=thzpnRoAAAAJ&api_key=${process.env.SERPAPI_KEY}`,
    )
    const data = await res.json()

    for (const a of data.articles) {
      a.citationStat = `${a?.cited_by?.value} citations`
    }

    return {
      props: {
        // googleScholarData: data,
        googleScholarArticles: keyBy(data.articles, 'citation_id'),
      },
      // Optional: Regenerate the page once every 24 hours if someone visits
      revalidate: 86400,
    }
  } catch (e) {
    console.error('Error fetching SerpAPI data:', e)
    return {props: {}} // Fallback to your current stat
  }
}

// ── Page ──────────────────────────────────────────────────────────────────────
interface Props {
  googleScholarArticles?: Record<string, any>
}

export default function ProjectPage({googleScholarArticles}: Props) {
  const [category, setCategory] = usePersistentInMemoryState<Category>('All', 'projects-category')
  const [sort, setSort] = usePersistentInMemoryState<SortKey>('important', 'projects-sort')
  const [search, setSearch] = useState('')
  const isMobile = useIsMobile()
  const [compassStat, setCompassStat] = useState<string | null>(null)
  const [addonStats, setAddonStats] = useState<Record<string, string>>({})

  useEffect(() => {
    fetch('https://api.compassmeet.com/stats')
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.profiles === 'number') {
          const rounded = Math.round(data.profiles / 100) * 100
          setCompassStat(`${rounded}+ members`)
        }
      })
      .catch((err) => {
        console.error('Error fetching compass data:', err)
      })

    const addonSlugs = ['no-login', 'youtube_adblock']
    addonSlugs.forEach((slug) => {
      fetch(`https://addons.mozilla.org/api/v5/addons/addon/${slug}/`)
        .then((res) => res.json())
        .then((data) => {
          const users = data.average_daily_users
          // const rating = Number(data.ratings?.average).toFixed(1)
          // const ratingCount = data.ratings?.count
          if (typeof users === 'number') {
            setAddonStats((prev) => ({
              ...prev,
              [slug]: `${Math.round(users / 1000)}k+ daily users`,
            }))
          }
        })
        .catch((err) => {
          console.error(`Error fetching add-on data for ${slug}:`, err)
        })
    })
  }, [])

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase()
    return PROJECTS.filter((p) => {
      if (category !== 'All' && p.category !== category) return false
      if (!q) return true
      return (
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.context.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q))
      )
    }).sort((a, b) =>
      sort === 'recent'
        ? b.year - a.year || b.importance - a.importance
        : b.importance - a.importance || b.year - a.year,
    )
  }, [category, sort, search])

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {All: PROJECTS.length}
    for (const p of PROJECTS) {
      counts[p.category] = (counts[p.category] || 0) + 1
    }
    return counts
  }, [])

  const published = PROJECTS.filter((p) => p.badge === 'paper').length
  const live = PROJECTS.filter((p) => p.badge === 'live').length
  const years = Math.max(...PROJECTS.map((p) => p.year)) - Math.min(...PROJECTS.map((p) => p.year))

  const hasActiveFilter = category !== 'All' || search !== ''

  const description = `${PROJECTS.length} projects across ${years} years — spanning published research, live
    products, ML systems, and hardware builds.`
  return (
    <PageBase>
      <SEO title={'Projects & Research'} description={description} />
      <div
        style={{
          background: C.bg,
          color: C.text,
          overflowX: 'hidden',
        }}
      >
        {/* ── HERO ── */}
        <header
          style={{
            padding: '5rem 2.5rem 4rem',
            position: 'relative',
            overflow: 'hidden',
            borderBottom: `1px solid ${C.border}`,
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
            P
          </div>

          <div style={{maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1}}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
                animation: 'fadeUp 0.5s ease both',
              }}
            >
              <div style={{width: 8, height: 8, borderRadius: '50%', background: C.red}} />
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: C.textTert,
                }}
              >
                Portfolio
              </span>
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.4rem,5vw,4rem)',
                fontWeight: 700,
                color: C.text,
                lineHeight: 1.05,
                marginBottom: '1rem',
                animation: 'fadeUp 0.55s 0.08s ease both',
              }}
            >
              Projects &<br />
              <span style={{color: C.red}}>Research</span>
            </h1>
            <p
              style={{
                fontSize: '0.95rem',
                color: C.textSec,
                lineHeight: 1.8,
                maxWidth: 800,
                animation: 'fadeUp 0.55s 0.16s ease both',
              }}
            >
              {description}
            </p>
          </div>
        </header>

        {/* ── STATS BAR ── */}
        <div style={{display: 'flex', background: C.bgCard, borderBottom: `1px solid ${C.border}`}}>
          {[
            {n: PROJECTS.length, label: 'Projects'},
            {n: published, label: 'Published papers'},
            ...(isMobile ? [] : [{n: live, label: 'Live / installable'}]),
            {n: `${years}+`, label: 'Years'},
          ].map(({n, label}, i, arr) => (
            <div
              key={label}
              style={{
                flex: 1,
                padding: '1.25rem 2rem',
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
              <span style={{fontSize: '0.75rem', color: C.textTert, letterSpacing: '0.03em'}}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* ── CONTROLS ── */}
        <div
          style={{
            padding: '1.25rem 2.5rem',
            background: C.bgCard,
            borderBottom: `1px solid ${C.border}`,
            display: 'flex',
            gap: '1.25rem',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 20,
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(var(--color-canvas-0) / 0.92)',
          }}
        >
          <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center'}}>
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: C.textTert,
                marginRight: '0.25rem',
              }}
            >
              Filter
            </span>
            {CATEGORIES.map((cat) => (
              <FilterPill
                key={cat}
                active={category === cat}
                onClick={() => setCategory(cat)}
                count={categoryCounts[cat]}
              >
                {cat}
              </FilterPill>
            ))}
            {hasActiveFilter && (
              <button
                onClick={() => {
                  setCategory('All')
                  setSearch('')
                }}
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  color: C.red,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.35rem 0.5rem',
                  marginLeft: '0.25rem',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Clear
              </button>
            )}
          </div>
          <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: C.textTert,
              }}
            >
              Sort
            </span>
            <SortBtn active={sort === 'important'} onClick={() => setSort('important')}>
              ↓ Most Important
            </SortBtn>
            <SortBtn active={sort === 'recent'} onClick={() => setSort('recent')}>
              ↓ Most Recent
            </SortBtn>
          </div>
          <SearchInput value={search} onChange={setSearch} placeholder="Search projects..." />
        </div>

        {/* ── GRID ── */}
        <section style={{padding: '2.5rem 2.5rem 5rem'}}>
          <div style={{maxWidth: 1500, margin: '0 auto'}}>
            <p
              style={{
                fontSize: '0.75rem',
                color: C.textTert,
                marginBottom: '1.5rem',
                letterSpacing: '0.04em',
              }}
            >
              Showing {visible.length} of {PROJECTS.length} projects
            </p>
            <div
              style={{
                // display: 'grid',
                // gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: '1.25rem',
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {visible.length === 0 ? (
                <div
                  style={{
                    gridColumn: '1 / -1',
                    textAlign: 'center',
                    padding: '4rem 2rem',
                    color: C.textTert,
                    fontSize: '0.9rem',
                  }}
                >
                  No projects match this filter.
                </div>
              ) : (
                visible.map((p, i) => (
                  <Reveal key={p.title} delay={Math.min(i % 3, 2) * 0.05}>
                    <ProjectCard
                      p={p}
                      statOverride={
                        p.id === 'compass'
                          ? compassStat
                          : (addonStats?.[p.id ?? ''] ??
                            googleScholarArticles?.[p.id ?? '']?.citationStat)
                      }
                    />
                  </Reveal>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </PageBase>
  )
}
