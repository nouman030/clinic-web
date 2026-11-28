import { useEffect, useRef } from 'react';
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
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (discipline) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [discipline]);

  // Safari fallback for light-dismiss when native closedby="any" is unavailable
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || 'closedBy' in HTMLDialogElement.prototype) return;

    const isOutside = (e: PointerEvent) => {
      const r = dialog.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };

    let pressedOutside = false;
    const onPointerDown = (e: PointerEvent) => {
      pressedOutside = isOutside(e);
    };
    const onPointerUp = (e: PointerEvent) => {
      if (pressedOutside && isOutside(e)) {
        dialog.close();
      }
      pressedOutside = false;
    };

    dialog.addEventListener('pointerdown', onPointerDown);
    dialog.addEventListener('pointerup', onPointerUp);
    return () => {
      dialog.removeEventListener('pointerdown', onPointerDown);
      dialog.removeEventListener('pointerup', onPointerUp);
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="discipline-modal-title"
      onClose={onClose}
      {...({ closedby: 'any' } as Record<string, string>)}
      className="atelier-dialog m-auto bg-card rounded-3xl max-w-xl w-[calc(100%-2rem)] p-6 sm:p-8 shadow-2xl border border-rule text-ink"
    >
      {discipline && (
        <div className="space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-accent">
                {discipline.number} | {discipline.tag}
              </span>
              <h1 id="discipline-modal-title" className="text-2xl font-bold text-ink mt-1 font-serif">
                {discipline.title}
              </h1>
            </div>
            <button
              type="button"
              autoFocus
              onClick={() => dialogRef.current?.close()}
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
              type="button"
              onClick={() => {
                const { title, doctor } = discipline;
                dialogRef.current?.close();
                onBookClick(title, doctor);
              }}
              className="bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2"
            >
              Book This Protocol
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
