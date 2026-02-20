export default function Footer() {
  return (
    <footer className="bg-cave-deep border-t border-neon-purple/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3">
          <div className="font-display text-xl tracking-wider text-silver-bright">
            NERDY'S HIDEOUT
          </div>
          <div className="font-mono text-sm text-silver-dim">
            The underground has no address. Only frequencies.
          </div>
          <div className="pt-4 text-xs text-silver-dim font-mono">
            © {new Date().getFullYear()} Nerdy's Hideout. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}