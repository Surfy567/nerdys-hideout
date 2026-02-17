import { getMixes } from '@/lib/mixes'
import MixCard from '@/components/MixCard'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Mixes | Nerdy\'s Hideout',
  description: 'Explore all mixes from The Nerdy DJ. Afrobeats, Amapiano, and more from Nerdy\'s Hideout.',
}

export default function MixesPage() {
  const mixes = getMixes()

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              All Mixes
            </h1>
            <p className="text-xl text-secondary">
              Every set recorded live, released for the world to experience
            </p>
          </div>
        </div>
      </section>

      {/* Mixes Grid */}
      <section className="section-padding">
        <div className="container">
          {mixes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mixes.map((mix) => (
                <MixCard key={mix.id} mix={mix} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-secondary">
                No mixes available yet. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted text-center">
        <div className="container">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Want to Experience This Live?
            </h2>
            <p className="text-xl text-secondary">
              Join the waitlist for exclusive access to upcoming Nerdy's Hideout events
            </p>
            <div className="pt-4">
              <a href="/#waitlist" className="btn btn-primary text-lg px-8 py-4">
                Join the Waitlist
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
