'use client'

import { useEffect } from 'react'

export default function WaitlistForm() {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script')
    script.src = 'https://tally.so/widgets/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="max-w-2xl mx-auto">
      <iframe
        data-tally-src="https://tally.so/embed/448apY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="600"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Nerdy's Hideout Waitlist Application"
        className="rounded-lg"
      />
    </div>
  )
}
