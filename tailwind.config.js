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
        background: '#0A0A0A',
        foreground: '#FFFFFF',
        primary: '#FFFFFF',
        secondary: '#808080',
        accent: '#8B5CF6', // Purple accent
        'accent-green': '#10B981', // Green accent
        muted: '#1A1A1A',
        border: '#2A2A2A',
        'midnight-blue': '#0F172A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'texture-dark': "url('/images/texture-dark.png')",
      },
    },
  },
  plugins: [],
}
