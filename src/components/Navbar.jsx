import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react'
import { BRAND } from '../data/properties.js'

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Properties', to: '/properties' },
  { label: 'About', to: '/about' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact', to: '/contact' },
]

function Brand({ dark, onClick }) {
  return (
    <Link to="/" data-testid="nav-home" onClick={onClick} className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0a192f] font-heading text-base font-extrabold text-[#d4e0b3]">
        B
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-lg font-extrabold tracking-tight">{BRAND.name}</span>
        <span
          className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] ${
            dark ? 'text-white/50' : 'text-[#748c70]'
          }`}
        >
          {BRAND.tagline}
        </span>
      </span>
    </Link>
  )
}
export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const dark = pathname === '/' && !scrolled

  return (
    <header
      data-testid="navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        dark
          ? 'bg-transparent text-white'
          : 'bg-white/90 text-[#0a192f] shadow-[0_1px_0_rgb(10,25,47,0.06)] backdrop-blur-md'
      }`}
    >
      <div className="flex h-19 items-center justify-between px-5 md:px-10">
        <Brand dark={dark} />

        <nav className="hidden items-center gap-11 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className="text-md   font-medium transition-colors duration-300 hover:text-[#748c70]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href='tel:+911234567890'
            className={`group inline-flex items-center gap-2 rounded-full border py-2.5 pl-5 pr-3 text-sm font-semibold transition-colors duration-300 ${
              dark
                ? 'border-white/25 text-white hover:border-white hover:bg-white hover:text-[#0a192f]'
                : 'border-[#0a192f]/15 text-[#0a192f] hover:bg-[#0a192f] hover:text-white'
            }`}
          >
            Enquire
            <Phone className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          type="button"
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-inherit lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-60 flex flex-col bg-[#0a192f] text-white lg:hidden"
          >
            <div className="flex h-19 items-center justify-between px-5">
              <Brand dark onClick={() => setOpen(false)} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col px-8 pt-6">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={l.to}
                    data-testid={`nav-mobile-${l.label.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-white/10 py-5 font-heading text-3xl font-extrabold tracking-tight"
                  >
                    {l.label}
                    <ArrowUpRight className="h-6 w-6 text-[#748c70]" />
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto p-8">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-[#748c70] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#5f7a5c]"
              >
                Enquire
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}