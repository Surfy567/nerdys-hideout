import type { Metadata } from 'next'
import { Inter, Orbitron, Share_Tech_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-share-tech-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Nerdy's Hideout | Coordinates Unknown",
  description: 'An exclusive, invite-only underground DJ experience. Coordinates unknown. Energy certain.',
  keywords: ['Nerdy\'s Hideout', 'The Nerdy DJ', 'Lagos Events', 'Underground Music', 'Invite Only', 'DJ Experience'],
  authors: [{ name: 'The Nerdy DJ' }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Nerdy's Hideout | Coordinates Unknown",
    description: 'An encrypted underground. An invite-only frequency. Where sound becomes ritual and the night becomes sanctuary.',
    url: 'https://nerdyshideout.com',
    siteName: "Nerdy's Hideout",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nerdy's Hideout | Coordinates Unknown",
    description: 'An encrypted underground. An invite-only frequency.',
    creator: '@the_nerdydj',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${shareTechMono.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}