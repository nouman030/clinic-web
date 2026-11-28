import { useState } from 'react';
import { TECH_HARDWARE, IMAGES } from '../../data/dentalData';
import { TechHardware } from '../../types';

export default function TechnologyTour() {
  const [activeTech, setActiveTech] = useState<TechHardware>(TECH_HARDWARE[0]);

  return (
    <section id="technology" className="py-20 lg:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono text-muted font-semibold">
            04 | Diagnostic and sterilization hardware
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-ink mt-2 tracking-tight">
            Advanced diagnostic optics, zero discomfort.
          </h2>
          <p className="text-muted mt-3 text-sm sm:text-base">
            We replaced invasive dental tools with German and American optical systems,
            eliminating manual syringes and uncomfortable impression trays.
          </p>
        </div>

        {/* Hardware Selector Tabs */}
        <div role="tablist" aria-label="Diagnostic and sterilization hardware" className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {TECH_HARDWARE.map((item, idx) => {
            const isSelected = activeTech.id === item.id;
            return (
              <button
                type="button"
                role="tab"
                id={`tech-tab-${item.id}`}
                aria-selected={isSelected}
                aria-controls="tech-tabpanel"
                key={item.id}
                onClick={() => setActiveTech(item)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    setActiveTech(TECH_HARDWARE[(idx + 1) % TECH_HARDWARE.length]);
                  } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    setActiveTech(TECH_HARDWARE[(idx - 1 + TECH_HARDWARE.length) % TECH_HARDWARE.length]);
                  }
                }}
                className={`p-4 rounded-2xl text-left border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus ${
                  isSelected
                    ? 'bg-ink text-white border-ink shadow-md'
                    : 'bg-card text-ink border-rule hover:border-ink/30'
                }`}
              >
                <span
                  className={`text-[11px] font-mono font-bold block ${
                    isSelected ? 'text-accent-gold' : 'text-accent'
                  }`}
                >
                  {item.code}
                </span>
                <span className="text-sm font-bold mt-1 block line-clamp-1">{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Hardware Detail Card */}
        <div
          id="tech-tabpanel"
          role="tabpanel"
          aria-labelledby={`tech-tab-${activeTech.id}`}
          className="mt-8 bg-card rounded-3xl border border-rule p-7 sm:p-10 lg:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-paper border border-rule font-mono text-xs font-bold text-ink">
                {activeTech.origin}
              </span>
              <span className="text-xs font-mono text-accent bg-success-bg px-3 py-1 rounded-full font-semibold">
                {activeTech.metricLabel}: {activeTech.metricValue}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ink">
              {activeTech.headline}
            </h3>

            <p className="text-muted leading-relaxed text-sm sm:text-base">
              {activeTech.description}
            </p>

            {/* Old Way vs Aura Way Comparison (Dual encoded: Icon + Text + Border) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-error-bg/70 border border-error/30">
                <span className="text-[11px] font-mono font-bold text-error block">
                  Traditional clinics:
                </span>
                <p className="text-xs sm:text-sm text-ink/80 mt-1">{activeTech.oldWay}</p>
              </div>

              <div className="p-4 rounded-2xl bg-success-bg border border-accent/30">
                <span className="text-[11px] font-mono font-bold text-accent block">
                  Aura atelier protocol:
                </span>
                <p className="text-xs sm:text-sm text-ink font-medium mt-1">
                  {activeTech.auraWay}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-paper-2 border border-rule">
              <img
                src={IMAGES.techScanner}
                alt={activeTech.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-card/95 backdrop-blur-md p-3.5 rounded-xl border border-rule flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-muted block">
                    Active system
                  </span>
                  <span className="text-xs font-bold text-ink">{activeTech.name}</span>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-ink text-white font-mono text-xs font-bold">
                  {activeTech.metricValue}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
