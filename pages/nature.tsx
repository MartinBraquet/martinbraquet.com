import {Volume2, VolumeX, X} from 'lucide-react'
import {useCallback, useEffect, useRef, useState} from 'react'
import {PageBase} from 'web/components/page-base'
import {SEO} from 'web/components/SEO'
import {C} from 'web/lib/colors'

// ── Data ──────────────────────────────────────────────────────────────────────

const BASE = 'https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/nature'

const BIRD_VIDEO = `${BASE}/bird.mp4`

type Encounter = {
  id: string
  src: string
  title: string
  tag?: string
  caption: string
  alt: string
}

const ENCOUNTERS: Encounter[] = [
  {
    id: 'dragonfly',
    src: `${BASE}/dragonfly.jpg`,
    title: 'A Moment of Rest',
    caption:
      'A dragonfly landed on my hand to rest. Wings still, weighing almost nothing, in no particular hurry to leave.',
    alt: 'A red dragonfly resting on an open hand above grass',
  },
  {
    id: 'cat',
    src: `${BASE}/cat.jpg`,
    title: 'My Travel Partner',
    caption:
      'My cat, and my travel partner. Quiet, yet curious and obsessed with the little details. One of the dearest beings to me.',
    alt: 'A black cat held close to my shoulder',
  },
  {
    id: 'bee',
    src: `${BASE}/bee.jpg`,
    title: 'A Hive Splitting',
    tag: 'Family',
    caption:
      'A beehive in my family garden splitting in spring to find a new home. Every dot in the air is a bee.',
    alt: 'A garden filled with a swarm of bees in flight, each one a small dot against the trees',
  },
  {
    id: 'cow',
    src: `${BASE}/cow.jpg`,
    title: 'They Come to the Fence',
    tag: 'Belgium',
    caption:
      'These cows in my home country of Belgium approach me whenever I pass by their field. Look at them long enough and it is hard to deny that they communicate in their own way — and that they feel things.',
    alt: 'A herd of black and white cows gathering at a fence beside me',
  },
  {
    id: 'cow-india',
    src: `${BASE}/cow-india.jpg`,
    title: 'Brushed and Hugged',
    tag: 'India',
    caption:
      'Cows in the sanctuary of Sadhana Forest, India. They love being brushed and hugged — and will happily lick your arm while you do it.',
    alt: 'Sitting beside a cow resting on the ground in a sanctuary in India',
  },
  {
    id: 'donkey',
    src: `${BASE}/donkey.jpg`,
    title: 'Always Asking for a Hug',
    tag: 'Family',
    caption:
      'Our family donkey. Endlessly curious, always following me, always asking for a hug. We take care of him because we like animals — and in return his manure fertilizes the garden.',
    alt: 'A donkey standing close to the camera in a field',
  },
  {
    id: 'horse',
    src: `${BASE}/horse.jpg`,
    title: 'The Greener Grass',
    tag: 'Belgium',
    caption:
      'An elegant horse in my neighborhood. He follows me when I walk along his street and never forgets to beg for the greener grass on my side of the fence.',
    alt: 'A black and white horse walking toward the camera beside a wooden barn',
  },
]

const DESCRIPTION =
  'Nature is beautiful when we have the eyes to appreciate it — a collection of encounters with the animals who decided I was worth approaching.'

// ── Reveal-on-scroll ──────────────────────────────────────────────────────────

const REVEAL_STYLE = {
  opacity: 0,
  transform: 'translateY(28px)',
  transition: 'opacity 0.7s ease, transform 0.7s ease',
}

function useReveal() {
  const refs = useRef<HTMLElement[]>([])

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
    refs.current.forEach((el) => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  let i = 0
  return () => {
    const index = i++
    return {
      ref: (el: HTMLElement | null) => {
        if (el) refs.current[index] = el
      },
      style: REVEAL_STYLE,
    }
  }
}

// ── Featured video ────────────────────────────────────────────────────────────

function FeaturedBird() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)

  // Only fetch the video once it scrolls into view — it is a heavy file.
  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) void el.play().catch(() => {})
        else el.pause()
      },
      {threshold: 0.4},
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="nature-featured" style={{display: 'flex', gap: '3.5rem', alignItems: 'center'}}>
      <div
        className="nature-video-frame"
        style={{
          position: 'relative',
          flex: '0 0 clamp(240px, 28vw, 320px)',
          borderRadius: 24,
          overflow: 'hidden',
          border: `1px solid ${C.border}`,
          background: C.bgCard,
          boxShadow: `0 24px 60px ${C.redA15}, 0 4px 12px ${C.inkA07}`,
        }}
      >
        <video
          ref={videoRef}
          className="nature-video"
          src={BIRD_VIDEO}
          muted={muted}
          loop
          playsInline
          preload="none"
          controls
          style={{width: '100%', aspectRatio: '9 / 16', display: 'block', objectFit: 'contain'}}
        />
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          style={{
            position: 'absolute',
            top: '0.85rem',
            right: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 36,
            height: 36,
            borderRadius: '50%',
            border: `1px solid ${C.border}`,
            background: C.bgA80,
            backdropFilter: 'blur(10px)',
            color: C.text,
            cursor: 'pointer',
          }}
        >
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      <div style={{flex: '1 1 340px'}}>
        {/*<span className="section-label">Featured · Video</span>*/}
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)',
            fontWeight: 700,
            color: C.text,
            lineHeight: 1.15,
            marginBottom: '1.25rem',
          }}
        >
          The Sparrow Who Invited Himself
        </h2>
        <p style={{fontSize: '1rem', lineHeight: 1.85, color: C.textSec, marginBottom: '0.85rem'}}>
          This sparrow worked out that my lap was the shortest path to a snack. He landed, helped
          himself, and left again — no hesitation, no permission asked.
        </p>
        <p style={{fontSize: '1rem', lineHeight: 1.85, color: C.textSec}}>
          Wild animals rarely close that distance. When one does, it is usually because you stayed
          still long enough to stop being a threat.
        </p>
      </div>
    </div>
  )
}

// ── Lightbox ──────────────────────────────────────────────────────────────────

function Lightbox({item, onClose}: {item: Encounter; onClose: () => void}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        background: 'rgb(var(--color-canvas-950) / 0.92)',
        backdropFilter: 'blur(6px)',
        animation: 'fadeIn 0.25s ease both',
        cursor: 'zoom-out',
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 42,
          height: 42,
          borderRadius: '50%',
          border: `1px solid rgb(var(--color-canvas-25) / 0.25)`,
          background: C.bgA07,
          color: 'rgb(var(--color-canvas-25))',
          cursor: 'pointer',
        }}
      >
        <X size={18} />
      </button>

      <figure
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          cursor: 'auto',
        }}
      >
        <img
          src={item.src}
          alt={item.alt}
          style={{
            maxWidth: 'min(1000px, 92vw)',
            maxHeight: '72vh',
            objectFit: 'contain',
            borderRadius: 14,
            display: 'block',
          }}
        />
        <figcaption style={{maxWidth: 640, textAlign: 'center'}}>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.2rem',
              fontWeight: 600,
              color: 'rgb(var(--color-canvas-25))',
              marginTop: 0,
              marginBottom: '0.5rem',
            }}
          >
            {item.title}
          </h3>
          <p style={{fontSize: '0.9rem', lineHeight: 1.75, color: C.bgA70}}>{item.caption}</p>
        </figcaption>
      </figure>
    </div>
  )
}

// ── Gallery card ──────────────────────────────────────────────────────────────

function EncounterCard({
  item,
  onOpen,
  reveal,
}: {
  item: Encounter
  onOpen: () => void
  reveal: {ref: (el: HTMLElement | null) => void; style: React.CSSProperties}
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <figure {...reveal} className="nature-card" style={{...reveal.style, breakInside: 'avoid'}}>
      <button
        type="button"
        onClick={onOpen}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={`View ${item.title} larger`}
        style={{
          display: 'block',
          width: '100%',
          padding: 0,
          textAlign: 'left',
          cursor: 'zoom-in',
          borderRadius: 18,
          overflow: 'hidden',
          border: `1px solid ${hovered ? C.redA25 : C.border}`,
          background: C.bgCard,
          transform: hovered ? 'translateY(-4px)' : 'none',
          boxShadow: hovered ? `0 18px 40px ${C.redA15}` : `0 2px 8px ${C.inkA04}`,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div style={{overflow: 'hidden', display: 'block'}}>
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 0.6s ease-out',
            }}
          />
        </div>

        <figcaption style={{padding: '1.15rem 1.25rem 1.35rem'}}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: '0.75rem',
              marginBottom: '0.45rem',
            }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.05rem',
                fontWeight: 600,
                color: C.text,
                lineHeight: 1.35,
                margin: 0,
              }}
            >
              {item.title}
            </h3>
            {item.tag && (
              <span
                style={{
                  flexShrink: 0,
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '0.25rem 0.6rem',
                  borderRadius: 100,
                  background: C.redA08,
                  color: C.red,
                }}
              >
                {item.tag}
              </span>
            )}
          </div>
          <p style={{fontSize: '0.85rem', lineHeight: 1.7, color: C.textSec}}>{item.caption}</p>
        </figcaption>
      </button>
    </figure>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Nature() {
  const R = useReveal()
  const [active, setActive] = useState<Encounter | null>(null)
  const close = useCallback(() => setActive(null), [])

  return (
    <PageBase>
      <SEO title="Nature" description={DESCRIPTION} url="/nature" image={`${BASE}/dragonfly.jpg`} />
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
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
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background: [
                `radial-gradient(ellipse 50% 65% at 100% 40%, ${C.redA07} 0%, transparent 60%)`,
                `radial-gradient(ellipse 30% 40% at 0% 85%, rgba(196, 154, 114, 0.08) 0%, transparent 55%)`,
              ].join(', '),
            }}
          />

          {/* Decorative large letter — matches the other pages. The wrapper owns the
              centering because `drift` animates transform and would overwrite it. */}
          <div
            className={'top-[70%] sm:top-[50%]'}
            style={{
              position: 'absolute',
              right: '3%',
              // top: '60%',
              transform: 'translateY(-50%)',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(10rem, 18vw, 22rem)',
                fontWeight: 700,
                color: C.redA045,
                lineHeight: 1,
                animation: 'drift 7s ease-in-out infinite',
              }}
            >
              N
            </div>
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
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: C.red,
                  flexShrink: 0,
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
                Field Notes
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.6rem, 6vw, 4.5rem)',
                fontWeight: 700,
                color: C.text,
                lineHeight: 1.05,
                marginTop: 0,
                marginBottom: '1.5rem',
                animation: 'fadeUp 0.55s 0.08s ease both',
              }}
            >
              Nature
            </h1>

            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
                lineHeight: 1.7,
                color: C.textSec,
                fontStyle: 'italic',
                maxWidth: 620,
                marginBottom: '1.5rem',
                animation: 'fadeUp 0.55s 0.16s ease both',
              }}
            >
              "Nature is beautiful when we have the eyes to appreciate it."
            </p>

            {/*<p*/}
            {/*  style={{*/}
            {/*    fontSize: '0.95rem',*/}
            {/*    lineHeight: 1.85,*/}
            {/*    color: C.textSec,*/}
            {/*    maxWidth: 560,*/}
            {/*    animation: 'fadeUp 0.55s 0.24s ease both',*/}
            {/*  }}*/}
            {/*>*/}
            {/*  Some encounters I had with Nature.*/}
            {/*</p>*/}
          </div>
        </header>

        <div className="divider" />

        {/* ── FEATURED ── */}
        <section style={{padding: '80px 2.5rem'}}>
          <div style={{maxWidth: 1100, margin: '0 auto'}}>
            <div {...R()} style={{...REVEAL_STYLE}}>
              <FeaturedBird />
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── GALLERY ── */}
        <section style={{padding: '80px 2.5rem 100px', background: C.bgAlt}}>
          <div style={{maxWidth: 1100, margin: '0 auto'}}>
            <div {...R()} style={{...REVEAL_STYLE, marginBottom: '3rem'}}>
              <span className="section-label">The Collection</span>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                  fontWeight: 700,
                  color: C.text,
                  lineHeight: 1.15,
                  marginTop: 0,
                  marginBottom: '0.75rem',
                }}
              >
                Encounters
              </h2>
              <p style={{fontSize: '0.95rem', color: C.textSec, maxWidth: 740, lineHeight: 1.8}}>
                None of these {ENCOUNTERS.length} encounters were arranged. Each one happened
                because an animal decided, for a few seconds, that I was worth approaching — and
                because I happened to be paying attention.
              </p>
            </div>

            <div className="nature-masonry">
              {ENCOUNTERS.map((item) => (
                <EncounterCard
                  key={item.id}
                  item={item}
                  reveal={R()}
                  onOpen={() => setActive(item)}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {active && <Lightbox item={active} onClose={close} />}
    </PageBase>
  )
}
