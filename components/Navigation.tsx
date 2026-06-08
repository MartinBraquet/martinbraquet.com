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

export default function Navigation() {
  const router = useRouter()
  const currentPath = router.pathname
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      className="
      top-0 z-[100] h-[62px] px-10
      flex items-center justify-between
      bg-canvas-25/80 backdrop-blur-lg
      border-b border-transparent
      transition-all duration-300
    "
    >
      {/* Logo */}
      <a href="/" className="no-underline">
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
            className="h-[2px] w-5 bg-canvas-900 transition-transform duration-300 ease-in-out"
            style={{transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'}}
          />
          <div
            className={`h-[2px] w-5 bg-canvas-900 transition-opacity duration-300
                           ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <div
            className="h-[2px] w-5 bg-canvas-900 transition-transform duration-300 ease-in-out"
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
            <span key={label} className={linkActive}>
              {label}
            </span>
          ) : (
            <CustomLink key={label} href={href} className={linkInactive}>
              {label}
            </CustomLink>
          ),
        )}
      </div>
    </nav>
  )
}
