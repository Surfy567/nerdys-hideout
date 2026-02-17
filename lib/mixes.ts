export interface Mix {
  id: string
  slug: string
  title: string
  date: string
  city: string
  country: string
  genres: string[]
  duration: string
  youtubeUrl: string
  youtubeId: string
  description: string
  featured: boolean
}

export const mixes: Mix[] = [
  {
    id: '001',
    slug: 'nerdys-hideout-mix-001',
    title: "Nerdy's Hideout Mix | The Nerdy DJ | The Best Afrobeats Mix 2026",
    date: '2026-01-15',
    city: 'Lagos',
    country: 'Nigeria',
    genres: ['Afrobeats'],
    duration: '1:30:00',
    youtubeUrl: 'https://youtu.be/7y9ORHxtYJI',
    youtubeId: '7y9ORHxtYJI',
    description: 'THE BEST AFROBEATS MIX: Press play, unwind, and enjoy the vibe — this is NERDY\'S HIDEOUT.',
    featured: true,
  },
]

export function getMixes(): Mix[] {
  return mixes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getMixBySlug(slug: string): Mix | undefined {
  return mixes.find(mix => mix.slug === slug)
}

export function getFeaturedMix(): Mix | undefined {
  return mixes.find(mix => mix.featured)
}
