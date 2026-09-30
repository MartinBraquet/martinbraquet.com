import clsx from 'clsx'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {CustomLink} from 'web/components/links'
import {PAGES} from 'web/lib/constants'

const linkBase = `
  text-[0.72rem] font-medium tracking-[0.08em] uppercase no-underline
  pb-[2px] sm:border-b transition-colors duration-200
`
const linkActive = `${linkBase} text-canvas-900 sm:border-b-primary-800 cursor-default`
const linkInactive = `${linkBase} text-canvas-400 border-b-transparent
                      hover:text-canvas-900 hover:border-b-primary-800`

// Variants for when the nav floats transparently over the home banner photo
const onPhoto = '[text-shadow:0_1px_6px_rgb(0_0_0/0.5)]'
const linkActiveOnPhoto = `${linkBase} ${onPhoto} text-white sm:border-b-white cursor-default`
const linkInactiveOnPhoto = `${linkBase} ${onPhoto} text-white/80 border-b-transparent
                             hover:text-white hover:border-b-white`
const NAV_H = 52

export default function Navigation() {
  const router = useRouter()
  const currentPath = router.pathname
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isHome = currentPath === '/'
  // On the home page the nav overlays the full-screen banner until it scrolls past
  const [overBanner, setOverBanner] = useState(isHome)

  useEffect(() => {
    if (!isHome) return setOverBanner(false)
    const update = () => {
      const banner = document.querySelector('.hero-banner-media')
      setOverBanner(!!banner && banner.getBoundingClientRect().bottom > NAV_H)
    }
    update()
    window.addEventListener('scroll', update, {passive: true})
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [isHome])

  const transparent = overBanner
  const active = transparent ? linkActiveOnPhoto : linkActive
  const inactive = transparent ? linkInactiveOnPhoto : linkInactive
  const bar = transparent ? 'bg-white' : 'bg-canvas-900'

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen) {
        const target = event.target as Element
        const navElement = target.closest('nav')
        if (!navElement) {
          setIsMenuOpen(false)
        }
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  return (
    <nav
      className={clsx(
        'top-0 z-[100] h-[52px] px-10 flex items-center justify-between border-b transition-all duration-300',
        isHome && 'fixed inset-x-0',
        transparent
          ? 'bg-transparent border-transparent'
          : clsx(
              'bg-canvas-25/80 backdrop-blur-lg',
              isHome ? 'border-canvas-100' : 'border-transparent',
            ),
      )}
    >
      {/* Logo — hidden over the home banner, where the hero already shows the name */}
      <a
        href="/"
        aria-hidden={transparent}
        tabIndex={transparent ? -1 : undefined}
        className={clsx(
          'no-underline transition-opacity duration-300',
          transparent && 'pointer-events-none opacity-0',
        )}
      >
        <span className="font-['Playfair_Display',serif] text-base font-bold tracking-[-0.01em] text-canvas-900">
          Martin <span className="text-primary-800">Braquet</span>
        </span>
      </a>

      {/* Mobile hamburger */}
      <div className="relative flex lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex cursor-pointer flex-col gap-[3px] border-none bg-transparent p-2"
        >
          {/* Inline style kept intentionally: CSS transform order matters —       */}
          {/* rotate(45deg) translate(5px,5px) ≠ translate then rotate (Tailwind)  */}
          <div
            className={`h-[2px] w-5 ${bar} transition-transform duration-300 ease-in-out`}
            style={{transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'}}
          />
          <div
            className={`h-[2px] w-5 ${bar} transition-opacity duration-300
                           ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <div
            className={`h-[2px] w-5 ${bar} transition-transform duration-300 ease-in-out`}
            style={{transform: isMenuOpen ? 'rotate(-45deg) translate(2px, -3px)' : 'none'}}
          />
        </button>

        {isMenuOpen && (
          <div
            className="
            absolute right-0 top-full mt-2
            min-w-[200px] rounded-lg py-2
            border border-canvas-100 bg-canvas-25
            shadow-[0_8px_24px_rgb(var(--color-canvas-900)/0.07)]
          "
          >
            {PAGES.map(([href, label]) =>
              href === currentPath ? (
                <span key={label} className={`${linkActive} block px-6 py-3`}>
                  {label}
                </span>
              ) : (
                <CustomLink key={label} href={href} className={`${linkInactive} block px-6 py-3`}>
                  {label}
                </CustomLink>
              ),
            )}
          </div>
        )}
      </div>

      {/* Desktop nav */}
      <div className="hidden gap-8 lg:flex">
        {PAGES.map(([href, label]) =>
          href === currentPath ? (
            <span key={label} className={active}>
              {label}
            </span>
          ) : (
            <CustomLink key={label} href={href} className={inactive}>
              {label}
            </CustomLink>
          ),
        )}
      </div>
    </nav>
  )
}
