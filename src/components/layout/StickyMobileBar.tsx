import { Phone, Calendar } from 'lucide-react';

interface StickyMobileBarProps {
  onBookClick: (treatment?: string, doctor?: string) => void;
}

export default function StickyMobileBar({ onBookClick }: StickyMobileBarProps) {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-card/95 backdrop-blur-md border-t border-rule p-3 flex items-center gap-3 shadow-lg">
      <a
        href="tel:+911224888899"
        className="flex-1 py-3 rounded-full border border-ink text-ink font-semibold text-xs flex items-center justify-center gap-2 hover:bg-paper-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
      >
        <Phone className="w-4 h-4" />
        Call Clinic
      </a>
      <button
        onClick={() =>
          onBookClick('Comprehensive 3D Smile & Dental Checkup', 'Dr. Nouman Patel')
        }
        className="flex-1 py-3 rounded-full bg-accent hover:bg-accent-hover text-white font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
      >
        <Calendar className="w-4 h-4" />
        Book Visit
      </button>
    </div>
  );
}
