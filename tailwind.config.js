/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cave depths (backgrounds)
        'cave-deepest': '#030308',
        'cave-deep': '#050510',
        'cave-mid': '#0a0a1a',
        'cave-surface': '#0f0f24',
        'cave-light': '#161636',
        
        // Silver tones (text)
        'silver-dim': '#8a8aa0',
        'silver-mid': '#b0b0c8',
        'silver-bright': '#e0e0f0',
        
        // Neon accents
        'neon-purple': '#9d00ff',
        'neon-purple-dim': '#6a00b0',
        'neon-green': '#00ff41',
        'neon-green-dim': '#00b82e',
        
        // Status
        'danger-red': '#ff003c',
        'warning-amber': '#ffaa00',
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        mono: ['Share Tech Mono', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}