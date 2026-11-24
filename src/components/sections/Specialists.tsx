import { CheckCircle2, ArrowRight } from 'lucide-react';
import { DOCTORS } from '../../data/dentalData';

interface SpecialistsProps {
  onBookClick: (treatment?: string, doctor?: string) => void;
}

export default function Specialists({ onBookClick }: SpecialistsProps) {
  return (
    <section id="specialists" className="py-20 lg:py-28 bg-card border-t border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono text-muted font-semibold">
            05 | Clinical leadership
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-ink mt-2 tracking-tight">
            Meet your master clinicians.
          </h2>
          <p className="text-muted mt-3 text-sm sm:text-base">
            Every treatment is performed personally by our senior doctors and master specialists,
            never delegated to unsupervised interns.
          </p>
        </div>

        {/* 3-Doctor Architectural Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="rounded-3xl overflow-hidden bg-paper border border-rule shadow-xs hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Full-Height Portrait */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-paper-2">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 bg-ink/90 backdrop-blur-md text-white px-3.5 py-2 rounded-xl flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-mono text-accent-gold font-semibold">
                        {doc.experience}
                      </p>
                      <p className="text-[11px] text-white/90">{doc.casesCompleted}</p>
                    </div>
                  </div>
                </div>

                {/* Structured Credentials */}
                <div className="p-6 sm:p-7 space-y-3">
                  <span className="text-[11px] font-mono text-accent font-bold block">
                    {doc.role}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-ink">{doc.name}</h3>
                  <p className="text-xs font-semibold text-muted">
                    {doc.credentials}
                  </p>

                  <span className="text-[11px] font-mono text-muted block">
                    DCI: {doc.regNo}
                  </span>

                  <p className="text-xs sm:text-sm text-muted mt-3 leading-relaxed">
                    {doc.bio}
                  </p>

                  <div className="mt-4 space-y-1.5 border-t border-rule/70 pt-3">
                    {doc.specialties.map((sp, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-ink font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>{sp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() =>
                    onBookClick(
                      `Specialist Consultation with ${doc.name}`,
                      doc.name
                    )
                  }
                  className="w-full bg-ink hover:bg-ink-hover text-white text-xs sm:text-sm font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                >
                  Schedule with {doc.name.split(' ')[1]}
                  <ArrowRight className="w-4 h-4 text-accent-gold" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
