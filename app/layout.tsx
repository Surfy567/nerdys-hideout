import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Nerdy's Hideout | For Real Ones Only",
  description: 'An exclusive, invite-only party experience in Lagos. Coordinates unknown. Energy certain. Curated by The Nerdy DJ.',
  keywords: ['Nerdy\'s Hideout', 'The Nerdy DJ', 'Lagos Events', 'Afrobeats', 'Underground Music', 'Invite Only', 'Party Experience'],
  authors: [{ name: 'The Nerdy DJ' }],
  openGraph: {
    title: "Nerdy's Hideout | For Real Ones Only",
    description: 'An exclusive, invite-only party experience. Coordinates unknown. Energy certain.',
    url: 'https://nerdyshideout.com',
    siteName: "Nerdy's Hideout",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nerdy's Hideout | For Real Ones Only",
    description: 'An exclusive, invite-only party experience. Coordinates unknown. Energy certain.',
    creator: '@the_nerdydj',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="grain-overlay">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
