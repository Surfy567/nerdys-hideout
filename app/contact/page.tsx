'use client'

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 px-4 text-center" style={{ paddingTop: 'calc(5rem + 60px)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-neon-green text-sm mb-4 tracking-widest uppercase">
            // Encrypted Channels
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-silver-bright mb-6">
            Connect With Us
          </h1>
          <p className="text-silver-mid text-lg">
            The underground has many entry points. Find us on the frequencies below.
          </p>
        </div>
      </section>

      {/* Social Links Grid */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Email Card */}
            <a
              href="mailto:info.nerdyshideout@gmail.com"
              className="group relative bg-cave-surface border border-neon-purple/20 rounded-lg p-8 flex flex-col items-center gap-4 hover:border-neon-green hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                   style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0, 255, 65, 0.06) 0%, transparent 70%)' }} 
              />
              <div className="relative z-10 text-silver-dim group-hover:text-neon-green transition-colors duration-300 group-hover:drop-shadow-[0_0_12px_rgba(0,255,65,0.25)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
              </div>
              <span className="relative z-10 font-display text-lg text-silver-bright">Email</span>
              <span className="relative z-10 font-mono text-xs text-silver-dim">info.nerdyshideout@gmail.com</span>
            </a>

            {/* Instagram Card */}
            <a
              href="https://instagram.com/the_nerdydj"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-cave-surface border border-neon-purple/20 rounded-lg p-8 flex flex-col items-center gap-4 hover:border-[#E1306C] hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                   style={{ background: 'radial-gradient(circle at 50% 0%, rgba(225, 48, 108, 0.06) 0%, transparent 70%)' }} 
              />
              <div className="relative z-10 text-silver-dim group-hover:text-[#E1306C] transition-colors duration-300 group-hover:drop-shadow-[0_0_12px_rgba(225,48,108,0.4)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <span className="relative z-10 font-display text-lg text-silver-bright">Instagram</span>
              <span className="relative z-10 font-mono text-xs text-silver-dim">@the_nerdydj</span>
            </a>

            {/* TikTok Card */}
            <a
              href="https://tiktok.com/@the_nerdydj"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-cave-surface border border-neon-purple/20 rounded-lg p-8 flex flex-col items-center gap-4 hover:border-[#69C9D0] hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                   style={{ background: 'radial-gradient(circle at 50% 0%, rgba(105, 201, 208, 0.06) 0%, transparent 70%)' }} 
              />
              <div className="relative z-10 text-silver-dim group-hover:text-[#69C9D0] transition-colors duration-300 group-hover:drop-shadow-[0_0_12px_rgba(105,201,208,0.4)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.05a8.27 8.27 0 0 0 4.76 1.51V7.12a4.83 4.83 0 0 1-1-.43z" />
                </svg>
              </div>
              <span className="relative z-10 font-display text-lg text-silver-bright">TikTok</span>
              <span className="relative z-10 font-mono text-xs text-silver-dim">@the_nerdydj</span>
            </a>

            {/* YouTube Card */}
            <a
              href="https://youtube.com/@the_nerdydj"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-cave-surface border border-neon-purple/20 rounded-lg p-8 flex flex-col items-center gap-4 hover:border-[#FF0000] hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                   style={{ background: 'radial-gradient(circle at 50% 0%, rgba(255, 0, 0, 0.06) 0%, transparent 70%)' }} 
              />
              <div className="relative z-10 text-silver-dim group-hover:text-[#FF0000] transition-colors duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,0,0,0.4)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <span className="relative z-10 font-display text-lg text-silver-bright">YouTube</span>
              <span className="relative z-10 font-mono text-xs text-silver-dim">@the_nerdydj</span>
            </a>

          </div>
        </div>
      </section>
    </div>
  )
}