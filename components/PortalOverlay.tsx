'use client'

import { useEffect, useState } from 'react'

export default function PortalOverlay() {
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    // Check if user has already entered
    if (sessionStorage.getItem('portalEntered')) {
      setIsHidden(true)
    }
  }, [])

  const handleEnter = () => {
    // Trigger exit animation
    const overlay = document.getElementById('portal-overlay')
    if (overlay) {
      overlay.style.transition = 'opacity 1.2s ease, filter 0.8s ease'
      overlay.style.filter = 'blur(10px) brightness(2)'
      overlay.style.opacity = '0'

      setTimeout(() => {
        setIsHidden(true)
        sessionStorage.setItem('portalEntered', 'true')
      }, 1200)
    }
  }

  if (isHidden) return null

  return (
    <div
      id="portal-overlay"
      className="fixed inset-0 z-[10000] bg-cave-deepest flex flex-col items-center justify-center cursor-pointer"
      onClick={handleEnter}
    >
      {/* Hexagon SVG */}
      <div className="mb-12 animate-pulse">
        <svg
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-32 h-32"
        >
          <polygon
            points="60,5 110,30 110,90 60,115 10,90 10,30"
            fill="none"
            stroke="#9d00ff"
            strokeWidth="1"
            opacity="0.4"
          />
          <polygon
            points="60,15 100,35 100,85 60,105 20,85 20,35"
            fill="none"
            stroke="#9d00ff"
            strokeWidth="0.5"
            opacity="0.25"
          />
          <polygon
            points="60,25 90,40 90,80 60,95 30,80 30,40"
            fill="none"
            stroke="#00ff41"
            strokeWidth="0.5"
            opacity="0.15"
          />
        </svg>
      </div>

      {/* Logo */}
      <div className="font-display text-2xl md:text-3xl text-silver-bright tracking-[0.3em] mb-6 animate-pulse">
        NERDY'S HIDEOUT
      </div>

      {/* Tagline */}
      <div className="font-mono text-silver-mid text-sm md:text-base mb-12">
        Coordinates Unknown. Energy Certain.
      </div>

      {/* Enter Button */}
      <button
        className="group relative px-8 py-3 font-mono text-sm tracking-wide border-2 border-neon-purple text-neon-purple hover:bg-neon-purple/10 transition-all duration-300"
        onClick={handleEnter}
      >
        <span className="relative z-10">[ Enter The Hideout ]</span>
        <div className="absolute inset-0 bg-neon-purple opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </button>

      {/* Hint text */}
      <div className="absolute bottom-8 font-mono text-xs text-silver-dim animate-pulse">
        Click anywhere to enter
      </div>
    </div>
  )
}