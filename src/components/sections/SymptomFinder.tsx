import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SYMPTOM_JOURNEYS } from '../../data/dentalData';
import { SymptomJourney } from '../../types';

interface SymptomFinderProps {
  onBookClick: (treatment?: string, doctor?: string) => void;
}

export default function SymptomFinder({ onBookClick }: SymptomFinderProps) {
  const [activeSymptom, setActiveSymptom] = useState<SymptomJourney>(SYMPTOM_JOURNEYS[0]);

  return (
    <section id="patient-journey" className="py-20 lg:py-28 bg-card border-y border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono text-muted font-semibold">
            01 | Personalized clinical pathway
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-ink mt-2 tracking-tight">
            How can we help your smile today?
          </h2>
          <p className="text-muted mt-3 text-base">
            Select what brings you in to preview your exact clinical protocol, visit duration,
            and comfort guarantee.
          </p>
        </div>

        {/* Interactive Pill Selector */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {SYMPTOM_JOURNEYS.map((item) => {
            const isActive = activeSymptom.id === item.id;
            return (
              <button
                type="button"
                key={item.id}
                onClick={() => setActiveSymptom(item)}
                aria-pressed={isActive}
                className={`px-5 py-3.5 rounded-full text-sm font-semibold transition-colors cursor-pointer flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus ${
                  isActive
                    ? 'bg-ink text-white shadow-md'
                    : 'bg-paper hover:bg-paper-2 text-ink border border-rule'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isActive ? 'bg-accent-gold' : 'bg-muted/40'
                  }`}
                />
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Split Showcase Card */}
        <div className="mt-10 bg-paper rounded-3xl border border-rule overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          {/* Left 7 Cols: Clinical Details */}
          <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-success-bg text-ink font-mono text-xs font-semibold">
                  {activeSymptom.badge}
                </span>
                <span className="text-xs text-muted font-medium">
                  Lead Specialist: <strong className="text-ink">{activeSymptom.doctor}</strong>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ink mt-4">
                {activeSymptom.title}
              </h3>
              <p className="text-muted mt-3 leading-relaxed text-sm sm:text-base">
                {activeSymptom.description}
              </p>

              {/* Step-by-Step Protocol */}
              <div className="mt-6 space-y-3">
                <p className="text-xs font-mono text-muted font-semibold">
                  What happens during your visit:
                </p>
                {activeSymptom.steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 py-2 border-b border-rule/50 last:border-0"
                  >
                    <span className="w-6 h-6 rounded-full bg-ink text-paper font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-ink">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Telemetry & Action Footer */}
            <div className="mt-8 pt-6 border-t border-rule flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-6">
                <div>
                  <span className="text-[11px] font-mono text-muted block">
                    Estimated time
                  </span>
                  <span className="text-sm font-bold text-ink font-mono">
                    {activeSymptom.duration}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-muted block">
                    Anesthesia protocol
                  </span>
                  <span className="text-sm font-bold text-accent font-mono">
                    {activeSymptom.comfortLevel}
                  </span>
                </div>
              </div>

              <button
                onClick={() =>
                  onBookClick(activeSymptom.treatmentValue, activeSymptom.doctor)
                }
                className="bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-colors inline-flex items-center gap-2 shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2"
              >
                Book Priority Visit
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right 5 Cols: Visual Preview */}
          <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-paper-2">
            <img
              src={activeSymptom.image}
              alt={activeSymptom.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[11px] font-mono text-accent-gold block">
                Zero-anxiety guarantee
              </span>
              <p className="text-sm font-medium mt-1 text-white/95">
                Every procedure begins only after you approve your 3D scan and transparent cost
                sheet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
