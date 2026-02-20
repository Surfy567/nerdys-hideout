import Link from 'next/link'
import Image from 'next/image'

interface Mix {
  slug: string
  title: string
  date: string
  duration: string
  genre: string
  youtubeId: string
  thumbnail: string
  description: string
}

interface MixCardProps {
  mix: Mix
}

export default function MixCard({ mix }: MixCardProps) {
  return (
    <Link href={`/mixes/${mix.slug}`}>
      <div className="group relative bg-cave-surface border border-neon-purple/20 overflow-hidden hover:border-neon-purple/60 transition-all duration-300">
        {/* Thumbnail */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={mix.thumbnail}
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
            {mix.date}
          </div>
          
          <h3 className="font-display text-lg text-silver-bright group-hover:text-neon-purple transition-colors">
            {mix.title}
          </h3>
          
          <p className="text-silver-dim text-sm line-clamp-2">
            {mix.description}
          </p>
          
          <div className="flex items-center justify-between pt-2">
            <span className="font-mono text-xs text-silver-dim">
              {mix.genre}
            </span>
            <span className="font-mono text-xs text-neon-purple group-hover:text-neon-green transition-colors">
              Play →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}