import { useState, useRef, useEffect } from 'react';
import { SlidersHorizontal, ArrowRight } from 'lucide-react';
import { SMILE_CASES } from '../../data/dentalData';

interface SmileStudioProps {
  onBookClick: (treatment?: string, doctor?: string) => void;
}

export default function SmileStudio({ onBookClick }: SmileStudioProps) {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(52);
  const [isDragging, setIsDragging] = useState(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const currentCase = SMILE_CASES[activeCaseIndex];

  const updateSliderPosition = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(8, Math.min(92, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      updateSliderPosition(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || !e.touches[0]) return;
      updateSliderPosition(e.touches[0].clientX);
    };
    const handleUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('mouseup', handleUp);
      window.addEventListener('touchend', handleUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
    };
  }, [isDragging]);

  return (
    <section id="smile-gallery" className="py-20 lg:py-28 bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-accent-gold font-semibold">
              03 | Unedited clinical outcomes
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white mt-2 tracking-tight">
              Clinical outcomes, unedited and measured.
            </h2>
          </div>

          {/* Case Switcher Tabs */}
          <div className="flex flex-wrap gap-2">
            {SMILE_CASES.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setActiveCaseIndex(idx)}
                className={`px-4 py-2.5 rounded-full text-xs font-mono font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold ${
                  activeCaseIndex === idx
                    ? 'bg-accent-gold text-ink'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                Case 0{idx + 1}: {c.tag.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left 7 Cols: Interactive Touch/Mouse Before-After Slider */}
          <div className="lg:col-span-7">
            <div
              ref={sliderContainerRef}
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
              onClick={(e) => updateSliderPosition(e.clientX)}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') {
                  e.preventDefault();
                  setSliderPos((p) => Math.max(8, p - 4));
                } else if (e.key === 'ArrowRight') {
                  e.preventDefault();
                  setSliderPos((p) => Math.min(92, p + 4));
                } else if (e.key === 'Home') {
                  e.preventDefault();
                  setSliderPos(8);
                } else if (e.key === 'End') {
                  e.preventDefault();
                  setSliderPos(92);
                }
              }}
              className="relative rounded-3xl overflow-hidden select-none cursor-ew-resize border-2 border-white/15 shadow-2xl aspect-[16/11] bg-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
              tabIndex={0}
              role="slider"
              aria-label="Before and after clinical comparison slider"
              aria-valuemin={8}
              aria-valuemax={92}
              aria-valuenow={Math.round(sliderPos)}
            >
              {/* AFTER LAYER */}
              <img
                src={currentCase.image}
                alt="After smile restoration outcome"
                loading="lazy"
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{
                  filter: 'brightness(1.05) contrast(1.04) saturate(1.05)'
                }}
              />

              {/* BEFORE LAYER */}
              <img
                src={currentCase.image}
                alt="Before smile restoration pre-treatment"
                loading="lazy"
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{
                  clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                  filter: 'sepia(0.38) brightness(0.84) contrast(0.92) saturate(0.85)'
                }}
              />

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white/90 text-[11px] font-mono px-3 py-1 rounded-full">
                Pre-treatment shade
              </div>
              <div className="absolute top-4 right-4 bg-ink/90 backdrop-blur-md text-accent-gold text-[11px] font-mono px-3 py-1 rounded-full border border-accent-gold/30">
                Biomimetic ceramic
              </div>

              {/* Divider Line & Handle */}
              <div
                className="absolute inset-y-0 w-0.5 bg-white shadow-md pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-card text-ink shadow-xl flex items-center justify-center border-2 border-ink">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
              </div>

              {/* Bottom Instruction Bar */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/65 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-mono text-white/90 pointer-events-none whitespace-nowrap">
                <span className="sm:hidden">Drag slider to compare</span>
                <span className="hidden sm:inline">Drag slider to compare shade and enamel architecture</span>
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Case Telemetry & Patient Quote */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-7 sm:p-9 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-accent-gold/20 text-accent-gold font-mono text-xs font-semibold">
              {currentCase.tag}
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">{currentCase.title}</h3>

            <blockquote className="text-white/85 italic text-sm sm:text-base leading-relaxed border-l-2 border-accent-gold pl-4">
              "{currentCase.quote}"
            </blockquote>

            <div className="flex items-center justify-between text-xs text-white/70 pt-2">
              <span className="font-semibold text-white">{currentCase.patient}</span>
              <span>Treated by {currentCase.doctor}</span>
            </div>

            {/* Specs Pills */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-[11px] font-mono text-white/50 block mb-2.5">
                Clinical specifications:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentCase.specs.map((sp, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-white/10 text-xs font-medium text-white/90"
                  >
                    {sp}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-white/50 block">
                  Total treatment time
                </span>
                <span className="text-sm font-bold text-accent-gold font-mono">{currentCase.duration}</span>
              </div>

              <button
                onClick={() => onBookClick(currentCase.title, currentCase.doctor)}
                className="bg-accent-gold hover:bg-accent-gold/90 text-ink font-bold px-5 py-3 rounded-full text-xs sm:text-sm transition-colors inline-flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
              >
                Book Similar Case
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
