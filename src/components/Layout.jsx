import { useEffect } from 'react'
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
    'px-3 py-2 rounded-md text-sm transition-colors whitespace-nowrap',
    isActive
      ? 'bg-space-700 text-star-300'
      : 'text-mist-400 hover:text-mist-300 hover:bg-space-800',
  ].join(' ')
}

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-20 border-b border-space-700 bg-space-950/85 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 gap-4">
            <NavLink to="/" className="flex items-center gap-2 shrink-0">
              <span aria-hidden="true" className="text-xl">✦</span>
              <span className="font-display text-star-300 text-lg tracking-tight">
                Starting Out Under the Stars
              </span>
            </NavLink>
            <nav className="flex items-center gap-1 overflow-x-auto">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.to} to={link.to} end={link.end} className={navClass}>
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
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
