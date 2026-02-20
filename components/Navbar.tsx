'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'The Hideout' },
    { href: '/about', label: 'The Persona' },
    { href: '/mixes', label: 'The Vault' },
    { href: '/contact', label: 'Connect' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cave-deep/95 backdrop-blur-md border-b border-neon-purple/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-display text-xl tracking-wider text-silver-bright hover:text-neon-green transition-colors duration-300"
          >
            NERDY'S HIDEOUT
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-sm tracking-wide transition-all duration-300 ${
                  pathname === link.href
                    ? 'text-neon-green'
                    : 'text-silver-mid hover:text-neon-purple'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#waitlist"
              className="px-4 py-2 border border-neon-purple text-neon-purple font-mono text-sm tracking-wide hover:bg-neon-purple/10 transition-all duration-300"
            >
              Waitlist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-silver-bright transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-silver-bright transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-silver-bright transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cave-deep border-t border-neon-purple/20">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 font-mono text-sm tracking-wide transition-colors ${
                  pathname === link.href
                    ? 'text-neon-green'
                    : 'text-silver-mid hover:text-neon-purple'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#waitlist"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-center border border-neon-purple text-neon-purple font-mono text-sm tracking-wide hover:bg-neon-purple/10 transition-all"
            >
              Waitlist
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}