import { X } from 'lucide-react';
import { Discipline } from '../../types';

interface DisciplineModalProps {
  discipline: Discipline | null;
  onClose: () => void;
  onBookClick: (treatment: string, doctor: string) => void;
}

export default function DisciplineModal({
  discipline,
  onClose,
  onBookClick
}: DisciplineModalProps) {
  if (!discipline) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-rule space-y-5 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-accent">
              {discipline.number} | {discipline.tag}
            </span>
            <h3 className="text-2xl font-bold text-ink mt-1 font-serif">
              {discipline.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full bg-paper-2 hover:bg-paper-3 text-ink cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-muted">{discipline.shortDesc}</p>

        <div className="space-y-3">
          <p className="text-xs font-mono text-muted font-bold">
            Step-by-step clinical workflow:
          </p>
          {discipline.protocolSteps.map((st, i) => (
            <div key={i} className="p-3.5 rounded-2xl bg-paper border border-rule">
              <p className="text-sm font-bold text-ink">{st.title}</p>
              <p className="text-xs text-muted mt-0.5">{st.detail}</p>
            </div>
          ))}
        </div>

        <div className="pt-3 flex items-center justify-between gap-4 border-t border-rule">
          <div>
            <span className="text-[10px] font-mono text-muted block">
              Warranty and lead doctor
            </span>
            <span className="text-xs font-bold text-ink">
              {discipline.warranty} | {discipline.doctor}
            </span>
          </div>

          <button
            onClick={() => onBookClick(discipline.title, discipline.doctor)}
            className="bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2"
          >
            Book This Protocol
          </button>
        </div>
      </div>
    </div>
  );
}
