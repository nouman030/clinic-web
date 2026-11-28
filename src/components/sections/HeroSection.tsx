import { ShieldCheck, Microscope, Award, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { IMAGES } from '../../data/dentalData';

interface HeroSectionProps {
  onBookClick: (treatment?: string, doctor?: string) => void;
}

export default function HeroSection({ onBookClick }: HeroSectionProps) {
  return (
    <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left 6 Columns: Editorial Typography & Value Prop */}
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-success-bg border border-ink/15 text-ink text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>Biophilic clinical sanctuary | 100% needle-free numbing protocol</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] xl:text-[66px] font-normal tracking-tight text-ink leading-[1.04] text-balance">
              Precision dentistry, crafted for quiet comfort.
            </h1>

            <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
              Forget cold hospital chairs and clinical anxiety. Experience{' '}
              <strong className="text-ink font-semibold">
                25x Carl Zeiss microscopic care
              </strong>
              , Swiss biomimetic smile design, and computerized pain-free anesthesia inside a
              calm, sunlit studio.
            </p>

            {/* Dual Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 max-w-xl">
              <div className="flex items-center gap-3 bg-card p-3.5 rounded-2xl border border-rule shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-paper flex items-center justify-center text-ink shrink-0">
                  <Microscope className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold text-ink">Single-sitting root canals</p>
                  <p className="text-[11px] text-muted">25x optical magnification</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-card p-3.5 rounded-2xl border border-rule shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-paper flex items-center justify-center text-ink shrink-0">
                  <Award className="w-5 h-5 text-accent-gold" />
                </div>
                <div>
                  <p className="text-xs font-bold text-ink">15-year clinical warranty</p>
                  <p className="text-[11px] text-muted">On Swiss veneers and implants</p>
                </div>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() =>
                  onBookClick(
                    'Comprehensive 3D Smile & Dental Checkup',
                    'Dr. Nouman Patel'
                  )
                }
                className="bg-accent hover:bg-accent-hover text-white font-semibold px-7 py-4 rounded-full text-sm sm:text-base transition-colors shadow-md inline-flex items-center gap-2.5 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2"
              >
                Book Your Smile Consultation
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#patient-journey"
                className="bg-card hover:bg-paper-2 text-ink border border-rule font-semibold px-6 py-4 rounded-full text-sm sm:text-base transition-colors inline-flex items-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
              >
                Find Your Treatment
              </a>
            </div>

            <p className="text-xs text-muted flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
              <span>
                <strong className="text-ink">₹800 consultation fee 100% waived</strong>{' '}
                when you proceed with any clinical treatment.
              </span>
            </p>
          </div>

          {/* Right 6 Columns: Large Seamless Borderless Portrait Blended into Canvas */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative -mx-2 sm:mx-0 w-[calc(100%+1rem)] sm:w-full max-w-2xl lg:max-w-none lg:w-[110%] lg:-mr-[6%] aspect-[4/3] select-none">
              {/* Soft White/Paper Diffused Blur Halo (masked on wrapper so blur never clips) */}
              <div aria-hidden="true" className="hero-smile-halo-mask absolute inset-0 pointer-events-none">
                <img
                  src={IMAGES.heroSmile}
                  alt=""
                  width={1024}
                  height={683}
                  className="w-full h-full object-cover object-center blur-xl opacity-45 brightness-105"
                />
              </div>

              {/* Crisp Full-Portrait Smile Image with Seamless Edge Blending */}
              <img
                src={IMAGES.heroSmile}
                alt="Smiling young girl resting comfortably against a warm linen cushion at Aura Dental Atelier"
                fetchPriority="high"
                width={1024}
                height={683}
                className="hero-smile-feather relative w-full h-full object-cover object-center brightness-[1.01] contrast-[1.01]"
              />

              {/* Airy White-Paper Perimeter Mist Blend */}
              <div
                aria-hidden="true"
                className="hero-smile-mist pointer-events-none absolute inset-0"
              />
            </div>
          </div>
        </div>

        {/* Trust Metrics Bar */}
        <div className="mt-14 lg:mt-20 bg-card rounded-3xl border border-rule shadow-xs p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x divide-rule">
          {[
            {
              stat: '12,400+',
              label: 'Smiles Restored',
              sub: 'Across Gujarat and NRI Patients'
            },
            {
              stat: '100%',
              label: 'Pain-Free Protocol',
              sub: 'The Wand Computerized Numbing'
            },
            {
              stat: '0.02 mm',
              label: 'Microscopic Accuracy',
              sub: 'Carl Zeiss 25x Magnification'
            },
            {
              stat: '4.9 / 5.0',
              label: 'Patient Trust Score',
              sub: '640+ Verified Google Reviews',
              isRating: true
            }
          ].map((item, idx) => (
            <div key={idx} className={idx > 0 ? 'lg:pl-8' : ''}>
              <div className="flex items-center gap-1.5">
                <p className="text-[21px] sm:text-3xl font-bold font-mono text-ink whitespace-nowrap">
                  {item.stat}
                </p>
                {item.isRating && <Star className="w-4 h-4 sm:w-5 sm:h-5 text-accent-gold fill-accent-gold shrink-0" />}
              </div>
              <p className="text-sm font-bold text-ink mt-1">{item.label}</p>
              <p className="text-xs text-muted mt-0.5">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
