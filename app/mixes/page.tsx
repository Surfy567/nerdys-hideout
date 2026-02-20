import { mixes } from '@/lib/mixes'
import MixCard from '@/components/MixCard'
import Link from 'next/link'

export default function MixesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-neon-green text-sm mb-4">// The Vault</div>
          <h1 className="font-display text-4xl md:text-5xl text-silver-bright mb-6">
            Live Transmissions
          </h1>
          <p className="text-silver-mid text-lg">
            Encrypted recordings from the hideout. Each mix is a portal to a moment in time.
          </p>
        </div>
      </section>

      {/* Mixes Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mixes.map((mix) => (
              <MixCard key={mix.slug} mix={mix} />
            ))}
          </div>

          {/* More Mixes Link */}
          <div className="mt-16 text-center">
            <Link
              href="https://drive.google.com/drive/folders/1xBn3_r5dOWXSUaYxQJ_Zm3eqZ5l8AC3W"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border-2 border-neon-purple text-neon-purple font-mono text-sm tracking-wide hover:bg-neon-purple/10 transition-all duration-300"
            >
              Explore More Transmissions
            </Link>
          </div>
        </div>
      </section>

      {/* Archive Note */}
      <section className="py-16 px-4 bg-cave-surface/30">
        <div className="max-w-2xl mx-auto text-center">
          <div className="font-mono text-xs text-silver-dim">
            <p className="mb-2">// Archive Protocol</p>
            <p>
              New transmissions are added after each event. Check back regularly for fresh frequencies.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}