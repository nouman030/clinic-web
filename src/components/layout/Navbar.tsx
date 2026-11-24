import { Sparkles, Calendar, Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  onBookClick: (treatment?: string, doctor?: string) => void;
}

export default function Navbar({
  scrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  onBookClick
}: NavbarProps) {
  const navLinks = [
    { label: 'Symptom Guide', href: '#patient-journey' },
    { label: 'Clinical Disciplines', href: '#disciplines' },
    { label: 'Smile Transformations', href: '#smile-gallery' },
    { label: 'Painless Tech', href: '#technology' },
    { label: 'Specialists', href: '#specialists' },
    { label: 'Transparent Fees', href: '#pricing' }
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-paper/95 backdrop-blur-md shadow-sm border-b border-rule py-3.5'
          : 'bg-paper py-5 border-b border-rule/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a href="#" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 rounded-lg">
          <div className="w-10 h-10 rounded-xl bg-ink text-paper flex items-center justify-center shadow-sm group-hover:bg-ink-hover transition-colors">
            <Sparkles className="w-5 h-5 text-accent-gold" />
          </div>
          <div>
            <span className="block text-lg font-bold tracking-tight text-ink leading-none">
              Aura Dental Atelier
            </span>
            <span className="block text-[11px] font-mono text-muted mt-1">
              Microscopic and aesthetic studio
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Clean Single-Line CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() =>
              onBookClick('Comprehensive 3D Smile & Dental Checkup', 'Dr. Nouman Patel')
            }
            className="bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm inline-flex items-center gap-2 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2"
          >
            <Calendar className="w-4 h-4 text-white/90" />
            Book Consultation
          </button>
        </div>

        {/* Mobile Drawer Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden p-2.5 rounded-xl border border-rule text-ink hover:bg-paper-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-paper border-b border-rule px-6 py-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-ink border-b border-rule/50 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onBookClick('Comprehensive 3D Smile & Dental Checkup', 'Dr. Nouman Patel');
            }}
            className="w-full mt-2 bg-accent hover:bg-accent-hover text-white py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2"
          >
            <Calendar className="w-4 h-4 text-white/90" />
            Book Smile Consultation
          </button>
        </div>
      )}
    </header>
  );
}
