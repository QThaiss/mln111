import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'


const NAV_ITEMS = [
  { label: 'Giai cấp', href: '#decode' },
  { label: 'Dòng thời gian', href: '#timeline' },
  { label: 'Dân tộc', href: '#nation' },
  { label: 'Biện chứng', href: '#dialectic' },
  { label: 'Việt Nam', href: '#vietnam' },
  { label: 'Ôn tập', href: '#flashcards' },
  { label: 'Góc sinh viên', href: '#student' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#0a0a0c]/95 backdrop-blur-xl border-b border-[rgba(200,160,74,0.08)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-[var(--font-cinzel)] text-lg font-bold tracking-[2px] text-[#e8e4dc]">
          Dòng Chảy <span className="text-[var(--color-accent)]">Lịch Sử</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className="px-4 py-2 text-sm font-medium text-[#9a9588] hover:text-[var(--color-accent)] hover:bg-[rgba(200,160,74,0.06)] rounded-full transition-all duration-200 tracking-wide"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#9a9588] hover:text-[var(--color-accent)] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0c]/98 backdrop-blur-xl border-t border-[rgba(200,160,74,0.08)]"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNav(e, item.href)}
                  className="px-4 py-3 text-[#9a9588] hover:text-[var(--color-accent)] hover:bg-[rgba(200,160,74,0.06)] rounded-xl transition-all duration-200 text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
