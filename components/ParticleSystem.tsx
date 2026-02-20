'use client'

import { useEffect } from 'react'

export default function ParticleSystem() {
  useEffect(() => {
    const container = document.getElementById('particles-container')
    if (!container) return

    const particleCount = 30
    const particles: HTMLDivElement[] = []

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute rounded-full pointer-events-none'
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      
      // Random animation delay and duration
      particle.style.animationDelay = `${Math.random() * 8}s`
      particle.style.animationDuration = `${6 + Math.random() * 6}s`
      
      // Alternate colors (purple or green)
      if (Math.random() > 0.6) {
        particle.style.background = '#00ff41'
        particle.style.boxShadow = '0 0 6px rgba(0, 255, 65, 0.4)'
      } else {
        particle.style.background = '#9d00ff'
        particle.style.boxShadow = '0 0 6px rgba(157, 0, 255, 0.4)'
      }
      
      // Random size
      const size = `${1 + Math.random() * 2}px`
      particle.style.width = size
      particle.style.height = size
      
      // Animation
      particle.style.animation = 'particleFloat linear infinite'
      
      container.appendChild(particle)
      particles.push(particle)
    }

    // Cleanup
    return () => {
      particles.forEach(p => p.remove())
    }
  }, [])

  return (
    <>
      <div id="particles-container" className="absolute inset-0 overflow-hidden pointer-events-none" />
      <style jsx>{`
        @keyframes particleFloat {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}