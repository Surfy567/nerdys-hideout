import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Nerdy\'s Hideout',
  description: 'Learn about The Nerdy DJ and the story behind Nerdy\'s Hideout - an exclusive, invite-only music experience in Lagos.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              About Nerdy's Hideout
            </h1>
            <p className="text-xl text-accent">
              For Real Ones Only
            </p>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* The Concept */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                The Concept
              </h2>
              <div className="space-y-4 text-lg text-secondary leading-relaxed">
                <p>
                  Nerdy's Hideout is not just an event. It's an escape. A secret world where masks come off, 
                  rules dissolve, and freedom takes over.
                </p>
                <p>
                  This is a hideout for real personalities. A space where authenticity reigns supreme. 
                  Where you can come as you are, lose the mask, and leave the filters at the door.
                </p>
                <p>
                  Step in not just to party, but to disappear from the noise of the outside world. 
                  To connect with music and people on a deeper, more genuine level.
                </p>
              </div>
            </div>

            {/* The Persona */}
            <div className="card p-8 space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                The Nerdy DJ
              </h2>
              <div className="space-y-4 text-lg text-secondary leading-relaxed">
                <p>
                  By day, a cloud engineer navigating the digital infrastructure of the world. 
                  By night, he transforms into The Nerdy DJ - an alter ego that thrives on contrast.
                </p>
                <p>
                  Behind the decks, the quiet genius becomes untouchable, godlike. The Nerdy DJ brand 
                  is built on this duality: the analytical mind meets the fearless conductor of sound.
                </p>
                <p>
                  It's about celebrating the unexpected. Proving that the person building cloud 
                  infrastructure by day can command a room by night. That intellect and artistry 
                  aren't opposites - they're complements.
                </p>
              </div>
            </div>

            {/* The Experience */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                The Experience
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card p-6 space-y-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-accent/20 rounded-lg">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Invite Only</h3>
                  <p className="text-secondary">
                    Entry via waitlist. Selection based on energy, not ego. We curate every event 
                    to maintain the authentic vibe that makes the hideout special.
                  </p>
                </div>

                <div className="card p-6 space-y-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-accent/20 rounded-lg">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Midnight Reveal</h3>
                  <p className="text-secondary">
                    Location revealed at midnight on event day. One encrypted email. One shot. 
                    The mystery is part of the experience.
                  </p>
                </div>

                <div className="card p-6 space-y-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-accent/20 rounded-lg">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">No Cameras</h3>
                  <p className="text-secondary">
                    No proof. No performance for the outside world. What happens in the hideout 
                    stays in the hideout. Be present.
                  </p>
                </div>

                <div className="card p-6 space-y-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-accent/20 rounded-lg">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Recorded Live</h3>
                  <p className="text-secondary">
                    Every set is recorded live and released on streaming platforms later. 
                    Building both culture and currency, one mix at a time.
                  </p>
                </div>
              </div>
            </div>

            {/* The Philosophy */}
            <div className="bg-muted p-8 rounded-lg space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                The Philosophy
              </h2>
              <div className="space-y-4 text-lg text-secondary leading-relaxed">
                <p>
                  Think "Met Gala" exclusivity meets "Obi's House" intimacy. But here, 
                  the currency isn't status - it's authenticity.
                </p>
                <p>
                  We're not interested in who you know or what you have. We care about the energy 
                  you bring, the respect you show, and your willingness to be yourself without pretense.
                </p>
                <p className="text-2xl font-display font-bold text-accent">
                  "Coordinates Unknown. Energy Certain."
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center space-y-6 pt-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Ready to Join?
              </h2>
              <p className="text-xl text-secondary">
                If this resonates with you, if you're tired of the performance and ready for something real, 
                join the waitlist.
              </p>
              <div className="pt-4">
                <Link href="/#waitlist" className="btn btn-primary text-lg px-8 py-4">
                  Apply for Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
