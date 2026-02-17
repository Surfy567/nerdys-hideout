import Link from 'next/link'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import WaitlistForm from '@/components/WaitlistForm'

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-midnight-blue/50 to-background" />
        
        <div className="container relative z-10 text-center space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold glitch">
            NERDY'S HIDEOUT
          </h1>
          
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-secondary font-medium">
              Coordinates Unknown. Energy Certain.
            </p>
            <p className="text-lg md:text-xl text-accent font-semibold">
              For Real Ones Only.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a href="#waitlist" className="btn btn-primary text-lg px-8 py-4">
              Join the Waitlist
            </a>
            <a href="#featured-mix" className="btn btn-secondary text-lg px-8 py-4">
              Listen Now
            </a>
          </div>

          <div className="pt-12 animate-bounce">
            <a href="#about" aria-label="Scroll down">
              <svg className="w-6 h-6 mx-auto text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center">
              A Hideout for Real Personalities
            </h2>
            
            <div className="space-y-6 text-lg text-secondary leading-relaxed">
              <p>
                Nerdy's Hideout is not just an event. It's an escape. A secret world where masks come off, 
                rules dissolve, and freedom takes over. Step in not just to party, but to disappear from the 
                noise of the outside world.
              </p>
              
              <p>
                This is a space where authenticity reigns. No cameras. No proof. No performance for the outside world. 
                Just pure, unfiltered energy. Come as you are. Lose the mask. Leave the filters at the door.
              </p>

              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <div className="card p-6 space-y-3">
                  <div className="text-accent text-3xl font-bold">2-4x</div>
                  <h3 className="font-semibold text-foreground">Per Year</h3>
                  <p className="text-sm text-secondary">Exclusive events, carefully curated and timed for maximum impact</p>
                </div>

                <div className="card p-6 space-y-3">
                  <div className="text-accent text-3xl font-bold">Invite</div>
                  <h3 className="font-semibold text-foreground">Only Entry</h3>
                  <p className="text-sm text-secondary">Selection based on energy, not ego. Waitlist application required</p>
                </div>

                <div className="card p-6 space-y-3">
                  <div className="text-accent text-3xl font-bold">Midnight</div>
                  <h3 className="font-semibold text-foreground">Reveal</h3>
                  <p className="text-sm text-secondary">Location disclosed at midnight on event day via encrypted email</p>
                </div>
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
      <section id="featured-mix" className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                Get a Taste of What Awaits
              </h2>
              <p className="text-xl text-secondary">
                Press play, unwind, and experience the vibe of Nerdy's Hideout
              </p>
            </div>

            <div className="space-y-6">
              <div className="card overflow-hidden">
                <YouTubeEmbed 
                  videoId="7y9ORHxtYJI" 
                  title="Nerdy's Hideout Mix | The Nerdy DJ | The Best Afrobeats Mix 2026"
                />
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-2xl font-display font-bold">
                  Nerdy's Hideout Mix | The Nerdy DJ
                </h3>
                <p className="text-secondary">
                  The Best Afrobeats Mix 2026
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-secondary">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    1hr 30mins
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Lagos, Nigeria
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    Afrobeats
                  </span>
                </div>
                <div className="pt-4">
                  <Link href="/mixes" className="btn btn-secondary">
                    Explore More Mixes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="section-padding bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                Join the Waitlist
              </h2>
              <p className="text-xl text-secondary">
                For Real Ones Only
              </p>
              <p className="text-secondary max-w-2xl mx-auto">
                We curate every event to maintain the authenticity and energy that makes Nerdy's Hideout special. 
                Fill out the application below, and if your vibe matches ours, you'll receive an invitation.
              </p>
            </div>

            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding text-center">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Your Escape Awaits
            </h2>
            <p className="text-xl text-secondary">
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
