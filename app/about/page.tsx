'use client'

import { useState } from 'react'

export default function AboutPage() {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null)

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 px-4 text-center" style={{ paddingTop: 'calc(5rem + 60px)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-neon-purple text-sm mb-4 tracking-widest uppercase">
            // Identity Dossier
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-silver-bright mb-6">
            Two Identities. One Frequency.
          </h1>
          <p className="text-silver-dim text-lg">
            By day, an architect of systems. By night, an architect of sound. The line between the two was never meant to exist.
          </p>
        </div>
      </section>

      {/* Split Persona */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Left Side - Classified */}
            <div
              className={`relative bg-cave-surface border p-12 transition-all duration-500 ${
                hoveredSide === 'left'
                  ? 'border-neon-purple scale-105 shadow-2xl'
                  : 'border-neon-purple/20'
              }`}
              style={hoveredSide === 'left' ? { boxShadow: '0 0 30px rgba(157, 0, 255, 0.3)' } : {}}
              onMouseEnter={() => setHoveredSide('left')}
              onMouseLeave={() => setHoveredSide(null)}
            >
              <div className="font-mono text-xs text-neon-purple mb-8 tracking-widest">
                // Classified
              </div>
              
              <h2 className="font-display text-3xl text-silver-bright mb-6">
                The Professional
              </h2>
              
              <div className="text-silver-mid leading-relaxed space-y-4">
                <p>. Building systems others depend on.</p>
                
                <p>
                  Some questions don't have answers. Some answers aren't for everyone.
                </p>
                
                <div className="pt-6 font-mono text-xs text-silver-dim">
                  [DATA REDACTED]
                </div>
              </div>
            </div>
            {/* Right Side - DJ */}
            <div
              className={`relative bg-cave-surface border p-12 transition-all duration-500 ${
                hoveredSide === 'right'
                  ? 'border-neon-purple scale-105 shadow-2xl'
                  : 'border-neon-purple/20'
              }`}
              style={hoveredSide === 'right' ? { boxShadow: '0 0 30px rgba(157, 0, 255, 0.3)' } : {}}
              onMouseEnter={() => setHoveredSide('right')}
              onMouseLeave={() => setHoveredSide(null)}
            >
              <div className="font-mono text-xs text-neon-purple mb-8 tracking-widest">
                // freq.controller
              </div>
              
              <h2 className="font-display text-3xl text-silver-bright mb-6">
                The DJ
              </h2>
              
              <div className="text-silver-mid leading-relaxed space-y-4">
                <p>Chaos. Vibration. Liberation.</p>
                
                <p>
                  When the sun sets, frequencies take over. The same mind that debugs systems now deconstructs sound—layering Afrobeats over deep house, weaving Amapiano into hypnotic basslines.
                </p>
                
                <p>
                  The dancefloor is the only place where control is surrendered voluntarily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-neon-purple/10 max-w-7xl mx-auto my-16" />

      {/* Philosophy Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-mono text-neon-purple text-sm mb-4 tracking-widest uppercase">
              // Manifesto
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-silver-bright mb-4">
              The Hideout Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="bg-cave-surface border border-neon-purple/20 rounded-lg p-8 hover:border-neon-purple hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: 'none' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 25px rgba(157, 0, 255, 0.3)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
              <h3 className="text-neon-purple mb-4 font-display text-lg">
                Not a Party
              </h3>
              <p className="text-silver-mid text-sm leading-relaxed">
                This isn't a party. It's a frequency calibration. A space where strangers become a collective consciousness through sound.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-cave-surface border border-neon-purple/20 rounded-lg p-8 hover:border-neon-green hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: 'none' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 65, 0.25)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
              <h3 className="text-neon-green mb-4 font-display text-lg">
                No Spectators
              </h3>
              <p className="text-silver-mid text-sm leading-relaxed">
                Everyone who enters is a participant. There's no VIP section. No corner to hide in. You either move or you evolve.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-cave-surface border border-neon-purple/20 rounded-lg p-8 hover:border-neon-purple hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: 'none' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 25px rgba(157, 0, 255, 0.3)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
              <h3 className="text-neon-purple mb-4 font-display text-lg">
                Underground by Design
              </h3>
              <p className="text-silver-mid text-sm leading-relaxed">
                We don't advertise. We don't scale. Growth is intentional, not viral. The Hideout exists for those who seek it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}