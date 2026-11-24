import { Check, ArrowRight } from 'lucide-react';
import { DISCIPLINES } from '../../data/dentalData';
import { Discipline } from '../../types';

interface DisciplinesProps {
  onOpenModal: (discipline: Discipline) => void;
  onBookClick: (treatment?: string, doctor?: string) => void;
}

export default function Disciplines({ onOpenModal, onBookClick }: DisciplinesProps) {
  return (
    <section id="disciplines" className="py-20 lg:py-28 bg-paper-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-muted font-semibold">
              02 | Specialized departments
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-ink mt-2 tracking-tight">
              Four clinical disciplines, zero guesswork.
            </h2>
          </div>
          <p className="text-muted max-w-md text-sm sm:text-base">
            Instead of one general dentist doing everything, each department is led by an MDS or
            master specialist with dedicated optical hardware.
          </p>
        </div>

        {/* 2x2 Architectural Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {DISCIPLINES.map((item) => (
            <article
              key={item.id}
              className="group bg-card rounded-3xl border border-rule overflow-hidden shadow-xs hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Image Header */}
                <div className="relative h-64 overflow-hidden bg-paper-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono font-bold text-ink">
                    {item.number} | {item.tag}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="bg-ink/90 backdrop-blur-xs px-3 py-1 rounded-full font-medium">
                      {item.timeline}
                    </span>
                    <span className="bg-black/60 backdrop-blur-xs px-3 py-1 rounded-full font-mono">
                      {item.warranty}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-ink group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm mt-2.5 leading-relaxed">
                    {item.shortDesc}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-rule/50 pt-4">
                    {item.highlights.map((pt, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-ink/90">
                        <Check className="w-4 h-4 text-accent shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Clean Card Footer */}
              <div className="px-7 sm:px-8 py-4 bg-paper border-t border-rule/70 flex items-center justify-between">
                <button
                  onClick={() => onOpenModal(item)}
                  className="text-xs sm:text-sm font-bold text-ink hover:text-accent inline-flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                >
                  View clinical protocol and steps
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onBookClick(item.title, item.doctor)}
                  className="text-xs font-mono font-semibold text-muted hover:text-ink underline underline-offset-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                >
                  Book {item.doctor.split(' ')[1]}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
