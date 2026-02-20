import Link from 'next/link'
import Image from 'next/image'
import { Mix } from '@/lib/mixes'

interface MixCardProps {
  mix: Mix
}

export default function MixCard({ mix }: MixCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }

  return (
    <Link href={`/mixes/${mix.slug}`}>
      <div className="group relative bg-cave-surface border border-neon-purple/20 overflow-hidden hover:border-neon-purple/60 transition-all duration-300">
        {/* Thumbnail */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={`https://img.youtube.com/vi/${mix.youtubeId}/maxresdefault.jpg`}
            alt={mix.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cave-deepest via-transparent to-transparent opacity-60" />
          
          {/* Duration Badge */}
          <div className="absolute top-3 right-3 bg-cave-deepest/90 px-2 py-1 font-mono text-xs text-silver-mid">
            {mix.duration}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <div className="font-mono text-xs text-neon-green">
            {formatDate(mix.date)}
          </div>
          
          <h3 className="font-display text-lg text-silver-bright group-hover:text-neon-purple transition-colors line-clamp-2">
            {mix.title}
          </h3>
          
          <p className="text-silver-dim text-sm line-clamp-2">
            {mix.description}
          </p>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex flex-wrap gap-2">
              {mix.genres.map((genre) => (
                <span key={genre} className="font-mono text-xs text-silver-dim">
                  {genre}
                </span>
              ))}
            </div>
            <span className="font-mono text-xs text-neon-purple group-hover:text-neon-green transition-colors">
              Play →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}