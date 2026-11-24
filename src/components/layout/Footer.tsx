import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80 py-14 pb-24 lg:pb-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-accent-gold text-ink flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white">Aura Dental Atelier</span>
            </div>
            <p className="text-xs text-white/70 mt-3 leading-relaxed">
              Biophilic luxury dental studio specializing in 25x Carl Zeiss microscopic root
              canals, Swiss E.max veneers, and 3D guided implants.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono text-accent-gold font-bold">
              Clinical departments
            </h4>
            <ul className="mt-3 space-y-2 text-xs text-white/80">
              <li>Biomimetic porcelain veneers</li>
              <li>3D invisible clear aligners</li>
              <li>Single-sitting microscopic root canal</li>
              <li>Keyhole 3D guided implants</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono text-accent-gold font-bold">
              Clinic address
            </h4>
            <p className="mt-3 text-xs text-white/70 leading-relaxed">
              1st Floor, Emerald Lane, Love Road, Bharuch, Gujarat 390001
            </p>
            <p className="mt-2 text-xs font-mono text-accent-gold">
              DCI Reg: GJ-VDD-2026-8841
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono text-accent-gold font-bold">
              Emergency pain desk
            </h4>
            <a
              href="tel:+911224888899"
              className="mt-3 text-lg font-mono font-bold text-white hover:text-accent-gold transition-colors block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
            >
              +91 1224 8888 99
            </a>
            <p className="text-xs text-white/60 mt-1">
              Same-day emergency slots reserved daily at 11:30 AM and 5:30 PM.
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} Aura Dental Atelier. All Clinical Rights Reserved.</p>
          <p>ISO 9001:2015 Certified | Class-B European Sterilization Protocol</p>
        </div>
      </div>
    </footer>
  );
}
