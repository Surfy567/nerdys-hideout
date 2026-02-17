import { notFound } from 'next/navigation'
import { getMixes, getMixBySlug } from '@/lib/mixes'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import CopyLinkButton from '@/components/CopyLinkButton'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const mixes = getMixes()
  return mixes.map((mix) => ({
    slug: mix.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const mix = getMixBySlug(params.slug)
  
  if (!mix) {
    return {
      title: 'Mix Not Found',
    }
  }

  return {
    title: `${mix.title} | Nerdy's Hideout`,
    description: mix.description,
    openGraph: {
      title: mix.title,
      description: mix.description,
      images: [`https://img.youtube.com/vi/${mix.youtubeId}/maxresdefault.jpg`],
    },
  }
}

export default function MixPage({ params }: { params: { slug: string } }) {
  const mix = getMixBySlug(params.slug)

  if (!mix) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }

  const allMixes = getMixes()
  const currentIndex = allMixes.findIndex(m => m.id === mix.id)
  const prevMix = currentIndex > 0 ? allMixes[currentIndex - 1] : null
  const nextMix = currentIndex < allMixes.length - 1 ? allMixes[currentIndex + 1] : null

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Back Button */}
            <Link 
              href="/mixes"
              className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to all mixes
            </Link>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-display font-bold">
                {mix.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-secondary">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(mix.date)}
                </span>

                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {mix.duration}
                </span>

                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {mix.city}, {mix.country}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {mix.genres.map((genre) => (
                  <span key={genre} className="px-4 py-2 bg-muted border border-border rounded-full text-sm text-accent">
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* Video Player */}
            <div className="card overflow-hidden">
              <YouTubeEmbed videoId={mix.youtubeId} title={mix.title} />
            </div>

            {/* Description */}
            {mix.description && (
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-secondary leading-relaxed">
                  {mix.description}
                </p>
              </div>
            )}

            {/* Share Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm font-semibold text-secondary">Share:</span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(mix.title)}&url=${encodeURIComponent(mix.youtubeUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary text-sm"
              >
                Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(mix.youtubeUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary text-sm"
              >
                Facebook
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(mix.title + ' ' + mix.youtubeUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary text-sm"
              >
                WhatsApp
              </a>
              <CopyLinkButton url={mix.youtubeUrl} />
            </div>
          </div>
        </div>
      </section>

      {/* Previous/Next Navigation */}
      {(prevMix || nextMix) && (
        <section className="section-padding bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {prevMix && (
                  <Link href={`/mixes/${prevMix.slug}`} className="card p-6 group hover:border-accent">
                    <div className="space-y-3">
                      <p className="text-sm text-secondary">Previous Mix</p>
                      <h3 className="font-display font-bold text-lg group-hover:text-accent transition-colors line-clamp-2">
                        {prevMix.title}
                      </h3>
                    </div>
                  </Link>
                )}
                {nextMix && (
                  <Link href={`/mixes/${nextMix.slug}`} className="card p-6 group hover:border-accent md:ml-auto text-right">
                    <div className="space-y-3">
                      <p className="text-sm text-secondary">Next Mix</p>
                      <h3 className="font-display font-bold text-lg group-hover:text-accent transition-colors line-clamp-2">
                        {nextMix.title}
                      </h3>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="container">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Experience This Live
            </h2>
            <p className="text-xl text-secondary">
              Join the waitlist for exclusive access to Nerdy's Hideout events
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
