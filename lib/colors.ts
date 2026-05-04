export const C = {
  // Surfaces
  bg: 'rgb(var(--color-canvas-25))', // #faf6f0  main page bg
  bgCard: 'rgb(var(--color-canvas-0))', // #fffef9  card / panel bg
  bgAlt: 'rgb(var(--color-canvas-50))', // #ffffff  alternate section bg

  // Borders
  border: 'rgb(var(--color-canvas-100))', // #e8dece  default border
  borderMd: 'rgb(var(--color-canvas-200))', // #c8b89a  outline-btn border

  // Text
  text: 'rgb(var(--color-canvas-900))', // #1e1a14  primary text
  textSec: 'rgb(var(--color-canvas-400))', // #7a7060  secondary text
  textTert: 'rgb(var(--color-canvas-300))', // #bab2a0  tertiary / muted text

  // Brand red — solid
  red: 'rgb(var(--color-primary-800))', // #8B0000  brand red
  redDark: 'rgb(var(--color-primary-900))', // #700000  hover dark red
  redMid: 'rgb(var(--color-primary-600))', // #9b4444  conference pill text
  redFooter: 'rgb(var(--color-primary-400))', // #c4706e  footer name accent

  // Brand red — with alpha
  redA045: 'rgb(var(--color-primary-800) / 0.045)',
  redA04: 'rgb(var(--color-primary-800) / 0.04)',
  redA07: 'rgb(var(--color-primary-800) / 0.07)',
  redA08: 'rgb(var(--color-primary-800) / 0.08)',
  redA10: 'rgb(var(--color-primary-800) / 0.10)',
  redA15: 'rgb(var(--color-primary-800) / 0.15)',
  redA18: 'rgb(var(--color-primary-800) / 0.18)',
  redA25: 'rgb(var(--color-primary-800) / 0.25)',
  redA30: 'rgb(var(--color-primary-800) / 0.30)',
  redA35: 'rgb(var(--color-primary-800) / 0.35)',

  // Dark ink (canvas-900 = #1e1a14) — with alpha
  inkA04: 'rgb(var(--color-canvas-900) / 0.04)',
  inkA07: 'rgb(var(--color-canvas-900) / 0.07)',

  // Text-secondary (canvas-400 = #7a7060) — with alpha
  textSecA25: 'rgb(var(--color-canvas-400) / 0.25)',

  // Page bg (canvas-25 = #faf6f0) — with alpha (nav glass, footer text overlays)
  bgA07: 'rgb(var(--color-canvas-25) / 0.07)',
  bgA25: 'rgb(var(--color-canvas-25) / 0.25)',
  bgA35: 'rgb(var(--color-canvas-25) / 0.35)',
  bgA40: 'rgb(var(--color-canvas-25) / 0.40)',
  bgA65: 'rgb(var(--color-canvas-25) / 0.65)',
  bgA70: 'rgb(var(--color-canvas-25) / 0.70)',
  bgA80: 'rgb(var(--color-canvas-25) / 0.80)',
  bgA95: 'rgb(var(--color-canvas-25) / 0.95)',

  // CTA card decorative overlays (pure white / black — no palette token needed)
  white05: 'rgba(255, 255, 255, 0.05)',
  black10: 'rgba(0, 0, 0, 0.10)',
} as const
