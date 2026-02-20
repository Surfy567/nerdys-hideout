import Link from 'next/link'
import PortalOverlay from '@/components/PortalOverlay'
import ParticleSystem from '@/components/ParticleSystem'
import GlitchEffect from '@/components/GlitchEffect'
import WaitlistForm from '@/components/WaitlistForm'

export default function Home() {
  return (
    <>
      <PortalOverlay />
      <GlitchEffect />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <ParticleSystem />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="mb-6">
            <h1 
              className="font-display text-silver-bright font-black tracking-wider cursor-pointer"
              data-glitch="NERDY'S HIDEOUT"
              style={{ 
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 900,
                letterSpacing: '0.08em',
                textShadow: '0 0 40px rgba(157, 0, 255, 0.2)',
                marginBottom: '0.5rem'
              }}
            >
              NERDY'S HIDEOUT
            </h1>
          </div>
          
          <p className="font-mono text-xl md:text-2xl text-neon-green mb-4" style={{ letterSpacing: '0.2em', textShadow: '0 0 20px rgba(0, 255, 65, 0.25)' }}>
            Coordinates Unknown. Energy Certain.
          </p>
          
          <p className="text-silver-dim text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            An encrypted underground. An invite-only frequency.
            <br />
            Where sound becomes ritual and the night becomes sanctuary.
          </p>
          
          <Link
            href="/#waitlist"
            className="inline-block px-8 py-3 bg-neon-purple text-cave-deepest font-mono text-sm tracking-wide hover:bg-neon-green transition-all duration-300 font-bold uppercase"
            style={{ clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' }}
          >
            Request Access
          </Link>
        </div>
      </section>

      {/* The Rules Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-mono text-neon-purple text-sm mb-4 tracking-widest uppercase">// Protocol</div>
            <h2 className="font-display text-3xl md:text-4xl text-silver-bright mb-4">
              The Rules of Engagement
            </h2>
            <p className="text-silver-mid">Five pillars that protect the energy. No exceptions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Card 1: Invite Only */}
            <div className="mech-card">
              <div className="mech-card-inner">
                <div className="mech-card-front">
                  <div className="mech-icon">🔐</div>
                  <h3>Invite Only</h3>
                </div>
                <div className="mech-card-back">
                  <p>Access is earned, not bought. Every attendee is hand-selected to protect the energy of the room.</p>
                </div>
              </div>
            </div>

            {/* Card 2: Waitlist Entry */}
            <div className="mech-card">
              <div className="mech-card-inner">
                <div className="mech-card-front">
                  <div className="mech-icon">📋</div>
                  <h3>Waitlist Entry</h3>
                </div>
                <div className="mech-card-back">
                  <p>Submit your application. We review every entry. If your energy aligns, you'll receive the coordinates.</p>
                </div>
              </div>
            </div>

            {/* Card 3: Midnight Reveal */}
            <div className="mech-card">
              <div className="mech-card-inner">
                <div className="mech-card-front">
                  <div className="mech-icon">🕛</div>
                  <h3>Midnight Reveal</h3>
                </div>
                <div className="mech-card-back">
                  <p>The location drops at midnight. Not a second before. Check your inbox when the clock strikes.</p>
                </div>
              </div>
            </div>

            {/* Card 4: No Cameras */}
            <div className="mech-card">
              <div className="mech-card-inner">
                <div className="mech-card-front">
                  <div className="mech-icon">📵</div>
                  <h3>No Cameras</h3>
                </div>
                <div className="mech-card-back">
                  <p>What happens in the Hideout stays in the Hideout. Be present. Feel the moment. No documentation.</p>
                </div>
              </div>
            </div>

            {/* Card 5: Energy Over Ego */}
            <div className="mech-card">
              <div className="mech-card-inner">
                <div className="mech-card-front">
                  <div className="mech-icon">⚡</div>
                  <h3>Energy Over Ego</h3>
                </div>
                <div className="mech-card-back">
                  <p>Leave your ego at the door. This space is built on mutual respect, vibration, and genuine connection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 px-4 bg-cave-surface/50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="font-mono text-neon-green text-sm mb-4 tracking-widest uppercase">// Apply for Access</div>
          <h2 className="font-display text-3xl md:text-4xl text-silver-bright mb-4">
            Join the Waitlist
          </h2>
          <p className="text-silver-mid mb-8">
            For Real Ones Only
          </p>
          
          <WaitlistForm />
        </div>
      </section>
    </>
  )
}