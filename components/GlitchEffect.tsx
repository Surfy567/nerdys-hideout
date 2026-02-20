'use client'

import { useEffect } from 'react'

export default function GlitchEffect() {
  useEffect(() => {
    const glitchElements = document.querySelectorAll('[data-glitch]')

    glitchElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        const original = el.textContent || ''
        const chars = '!@#$%^&*()_+{}|:<>?/\\~`█▓░▒'
        let iterations = 0

        const interval = setInterval(() => {
          if (el.textContent !== null) {
            el.textContent = original
              .split('')
              .map((char, index) => {
                if (index < iterations) return original[index]
                return chars[Math.floor(Math.random() * chars.length)]
              })
              .join('')

            iterations += 1
            if (iterations >= original.length) {
              clearInterval(interval)
              el.textContent = original
            }
          }
        }, 30)
      })
    })
  }, [])

  return null
}