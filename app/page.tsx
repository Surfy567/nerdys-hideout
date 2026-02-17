import Link from 'next/link'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import WaitlistForm from '@/components/WaitlistForm'

export default function HomePage() {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image - your DJ photo */}
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-[0.4]"
          style={{ backgroundImage: "url('/images/dj-purple.jpg')" }}
        />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/85 via-[#1e1b4b]/75 to-[#0f172a]/90 z-[1]" />
        <div 
          className="absolute inset-0 z-[1] animate-pulse"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
            opacity: 0.6
          }}
        />
        
        {/* Content */}
        <div className="relative z-[2] text-center max-w-5xl mx-auto px-4">
          <h1 className="font-display text-6xl md:text-8xl font-black mb-8 leading-tight gradient-text animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Coordinates Unknown
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase mb-6 text-white/90">
            Energy Certain
          </p>
          <p className="text-base md:text-lg font-semibold tracking-[0.4em] uppercase mb-12 text-accent-green">
            For Real Ones Only
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#waitlist" className="btn btn-primary text-base px-12 py-4">
              Join the Waitlist
            </a>
            <a href="#featured-mix" className="btn btn-secondary text-base px-12 py-4">
              Listen Now
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[2] animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gradient-to-b from-black via-[#0a0014] to-black relative overflow-hidden">
        {/* Logo watermark background */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-3xl h-96 opacity-[0.03] pointer-events-none"
          style={{ 
            backgroundImage: "url('/images/logo-3.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-display text-5xl md:text-7xl font-black mb-12 gradient-text">
              A Hideout for The Real Ones
            </h2>
            
            <p className="text-xl md:text-2xl leading-relaxed text-white/75">
              Nerdy's Hideout is not just an event. It's an escape. A secret world for the real ones with umatched energies and vibes.
            </p>
            
            <p className="text-xl md:text-2xl leading-relaxed text-white/75">
              Step in not just to party, but to disappear from the noise of the outside world and be your best self.
            </p>
            
            <p className="text-2xl md:text-3xl font-semibold text-accent-green mt-8">
              Just pure, unfiltered energy.
            </p>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 pt-12">
              <div className="card p-6 space-y-3 transition-smooth hover:-translate-y-2">
                <div className="text-accent text-3xl font-bold font-display">2-4x</div>
                <h3 className="font-semibold text-foreground font-display">Per Year</h3>
                <p className="text-sm text-secondary">Exclusive events, carefully curated and timed for maximum experience</p>
              </div>

              <div className="card p-6 space-y-3 transition-smooth hover:-translate-y-2">
                <div className="text-accent text-3xl font-bold font-display">Invite</div>
                <h3 className="font-semibold text-foreground font-display">Only Entry</h3>
                <p className="text-sm text-secondary">Selection based on energy, not ego. Waitlist application required</p>
              </div>

              <div className="card p-6 space-y-3 transition-smooth hover:-translate-y-2">
                <div className="text-accent text-3xl font-bold font-display">Midnight</div>
                <h3 className="font-semibold text-foreground font-display">Reveal</h3>
                <p className="text-sm text-secondary">Location disclosed at midnight on event day via encrypted email</p>
              </div>
            </div>

            <div className="text-center pt-8">
              <Link href="/about" className="btn btn-secondary">
                Learn More About The Hideout
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Mix Section */}
      <section id="featured-mix" className="section-padding bg-black relative overflow-hidden">
        {/* Logo watermark background */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-3xl h-96 opacity-[0.03] pointer-events-none"
          style={{ 
            backgroundImage: "url('/images/logo-3.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="font-display text-5xl md:text-6xl font-black gradient-text">
                Latest Release
              </h2>
              <p className="text-lg md:text-xl text-white/60 font-light tracking-wide">
                Recorded live from the hideout
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <div className="card transition-smooth hover:-translate-y-3 hover:border-accent/60 hover:shadow-[0_25px_70px_rgba(0,0,0,0.6),0_0_50px_rgba(139,92,246,0.3)]">
                <div className="relative h-[450px] overflow-hidden">
                  <img 
                    src="https://img.youtube.com/vi/7y9ORHxtYJI/maxresdefault.jpg"
                    alt="Nerdy's Hideout Mix" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold">
                    Nerdy's Hideout Mix | The Nerdy DJ
                  </h3>
                  <div className="flex gap-6 text-sm text-white/50">
                    <span>Lagos, Nigeria</span>
                    <span>90 min</span>
                    <span>Afrobeats</span>
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    The best Afrobeats mix 2026. Press play, unwind, and experience the vibe of Nerdy's Hideout.
                  </p>
                  <div className="pt-4">
                    <Link href="/mixes/nerdys-hideout-mix-001" className="btn btn-primary w-full text-center block">
                      Listen Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <a href="https://drive.google.com/drive/folders/1xBn3_r5dOWXSUaYxQJ_Zm3eqZ5l8AC3W" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Explore More Mixes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="section-padding bg-gradient-to-b from-black via-[#0a0014] to-black relative overflow-hidden">
        {/* Logo watermark background */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-3xl h-96 opacity-[0.03] pointer-events-none"
          style={{ 
            backgroundImage: "url('/images/logo-3.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-display text-4xl md:text-5xl font-black gradient-text">
                Join the Waitlist
              </h2>
              <p className="text-xl md:text-2xl text-accent-green font-semibold tracking-wider">
                For Real Ones Only
              </p>
              <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
                We curate every event to maintain the authenticity and energy that makes Nerdy's Hideout special. 
                Fill out the application below, and if your vibe matches ours, you'll receive an invitation.
              </p>
            </div>

            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding text-center bg-black relative overflow-hidden">
        {/* Logo watermark background */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-3xl h-96 opacity-[0.03] pointer-events-none"
          style={{ 
            backgroundImage: "url('/images/logo-3.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-black gradient-text">
              Your Escape Awaits
            </h2>
            <p className="text-xl text-white/60 tracking-wide">
              Coordinates Incoming
            </p>
            <div className="pt-4">
              <a href="#waitlist" className="btn btn-primary text-lg px-8 py-4">
                Apply for Access
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}