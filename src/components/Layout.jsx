import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/sky-basics', label: 'Learn the Sky' },
  { to: '/telescopes', label: 'Telescopes 101' },
  { to: '/astrophotography', label: 'Astrophotography' },
  { to: '/resources', label: 'Resources & Glossary' },
  { to: '/faq', label: 'FAQ & Next Steps' },
]

function navClass({ isActive }) {
  return [
    'px-2.5 py-2 rounded-md text-sm transition-colors whitespace-nowrap',
    isActive
      ? 'bg-space-700 text-star-300'
      : 'text-mist-400 hover:text-mist-300 hover:bg-space-800',
  ].join(' ')
}

function mobileNavClass({ isActive }) {
  return [
    'block px-3 py-3 rounded-md text-base transition-colors',
    isActive
      ? 'bg-space-700 text-star-300'
      : 'text-mist-400 hover:text-mist-300 hover:bg-space-800',
  ].join(' ')
}

export default function Layout() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setMenuOpen(false)
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-20 border-b border-space-700 bg-space-950/85 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 gap-3">
            <NavLink to="/" className="flex items-center gap-2 min-w-0">
              <span aria-hidden="true" className="text-xl shrink-0">✦</span>
              <span className="font-display text-star-300 text-sm sm:text-base lg:text-lg tracking-tight truncate">
                Starting Out Under the Stars
              </span>
            </NavLink>

            <nav className="no-scrollbar hidden md:flex items-center gap-1 overflow-x-auto">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.to} to={link.to} end={link.end} className={navClass}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <button
              type="button"
              className="md:hidden shrink-0 -mr-2 p-2 text-mist-300"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {menuOpen ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden border-t border-space-700 px-4 sm:px-6 py-2 bg-space-950">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className={mobileNavClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <Outlet />
      </main>

      <footer className="border-t border-space-700 mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 text-sm text-mist-400">
          <p>
            A beginner's guide to amateur astronomy and astrophotography, built from
            guidance published by NASA, ESA, the Royal Observatory Greenwich, OpenStax,
            the Open University, the Astronomical League, AAVSO, DarkSky International,
            NOIRLab, Griffith Observatory, and Sky &amp; Telescope.
          </p>
        </div>
      </footer>
    </div>
  )
}
