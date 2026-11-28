import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { PRICING_ITEMS, FAQS } from '../../data/dentalData';

export default function PricingFaq() {
  const [showEmiMode, setShowEmiMode] = useState(false);

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-paper-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left 7 Columns: Transparent Fee Guide */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-muted font-semibold">
                  06 | Transparent fee schedule
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-ink mt-1">
                  Transparent fee schedule.
                </h2>
              </div>

              {/* Interactive 0% EMI Toggle */}
              <div className="bg-card p-1 rounded-full border border-rule inline-flex items-center">
                <button
                  type="button"
                  aria-pressed={!showEmiMode}
                  onClick={() => setShowEmiMode(false)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus ${
                    !showEmiMode ? 'bg-ink text-white' : 'text-muted hover:text-ink'
                  }`}
                >
                  Standard Fee
                </button>
                <button
                  type="button"
                  aria-pressed={showEmiMode}
                  onClick={() => setShowEmiMode(true)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus ${
                    showEmiMode ? 'bg-accent text-white' : 'text-muted hover:text-ink'
                  }`}
                >
                  0% 6-Mo EMI
                </button>
              </div>
            </div>

            <div className="mt-6 bg-card rounded-3xl border border-rule divide-y divide-rule/80 overflow-hidden shadow-xs">
              {PRICING_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-paper transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-muted">
                        {item.category}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-success-bg text-ink font-mono text-[10px] font-bold">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-serif font-bold text-ink mt-1">{item.name}</h3>
                    <p className="text-xs text-muted mt-0.5">{item.includes}</p>
                  </div>

                  <div className="sm:text-right shrink-0">
                    {showEmiMode && item.emi ? (
                      <div>
                        <span className="text-xl font-bold font-mono text-accent">
                          ₹{item.emi.toLocaleString('en-IN')}/mo
                        </span>
                        <span className="block text-[11px] text-muted font-mono">
                          0% EMI for 6 Months (Total ₹{item.price.toLocaleString('en-IN')})
                        </span>
                      </div>
                    ) : (
                      <div>
                        <span className="text-xl font-bold font-mono text-ink">
                          ₹{item.price.toLocaleString('en-IN')}
                        </span>
                        <span className="block text-[11px] text-muted font-mono">
                          All-inclusive clinical fee
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-3 text-xs text-muted font-mono">
              Prices vary based on clinical anatomy and scope; consult the clinic during your 3D optical examination.
            </p>
          </div>

          {/* Right 5 Columns: Interactive Patient FAQ Accordion */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono text-muted font-semibold">
              Common questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-ink mt-1">
              Frequently asked questions.
            </h2>

            <div className="mt-6 space-y-3">
              {FAQS.map((faq, idx) => (
                <details
                  key={idx}
                  name="faq-accordion"
                  open={idx === 0}
                  className="atelier-faq bg-card rounded-2xl border border-rule overflow-hidden"
                >
                  <summary className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-paper/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus">
                    <span className="text-sm sm:text-base font-serif font-bold text-ink">
                      {faq.q}
                    </span>
                    <ChevronDown className="atelier-faq-chevron w-5 h-5 text-accent shrink-0 transition-transform duration-200" />
                  </summary>
                  <div className="px-5 pb-5 text-xs sm:text-sm text-muted leading-relaxed border-t border-rule/50 pt-3">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
