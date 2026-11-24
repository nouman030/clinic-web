import { Clock, Phone, Star } from 'lucide-react';

export default function TopTrustBar() {
  return (
    <div className="bg-ink text-paper text-xs py-2.5 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="inline-flex items-center gap-1.5 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
            Same-day pain relief slots open today
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5 text-white/80">
            <Clock className="w-3.5 h-3.5 text-accent-gold" />
            Monday to Saturday: 9:30 AM to 8:30 PM
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1.5">
            <div className="flex text-accent-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-semibold">4.9/5</span>
            <span className="text-white/75 hidden sm:inline">
              (640+ verified patient reviews)
            </span>
          </div>
          <a
            href="tel:+911224888899"
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-success-bg hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-focus"
          >
            <Phone className="w-3.5 h-3.5" />
            +91 1224 8888 99
          </a>
        </div>
      </div>
    </div>
  );
}
