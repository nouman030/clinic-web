import React from 'react';
import { MapPin, Clock, Phone, CheckCircle2, MessageCircle, Calendar } from 'lucide-react';
import { BookingFormState } from '../../types';

interface BookingWidgetProps {
  bookingForm: BookingFormState;
  setBookingForm: React.Dispatch<React.SetStateAction<BookingFormState>>;
  bookingSubmitted: boolean;
  setBookingSubmitted: (submitted: boolean) => void;
  getWhatsAppUrl: () => string;
}

export default function BookingWidget({
  bookingForm,
  setBookingForm,
  bookingSubmitted,
  setBookingSubmitted,
  getWhatsAppUrl
}: BookingWidgetProps) {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  return (
    <section id="book-consultation" className="py-20 lg:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden shadow-xl border border-rule grid grid-cols-1 lg:grid-cols-12 bg-card">
          {/* Left 5 Columns: Dark Clinical Sanctuary Info Panel */}
          <div className="lg:col-span-5 bg-ink text-white p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-accent-gold font-semibold">
                07 | Schedule your visit
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif mt-2 leading-tight">
                Book your smile consultation.
              </h2>
              <p className="text-white/80 text-sm mt-3 leading-relaxed">
                Reserve your private 30-minute slot. Includes 5D digital intraoral scan, shade
                assessment, and printed fee roadmap.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold">Aura Dental Atelier: Alkapuri Studio</p>
                    <p className="text-xs text-white/75 mt-0.5">
                      1st Floor, Emerald Lane, Love Road, Bharuch, Gujarat 390001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold">Clinical Hours</p>
                    <p className="text-xs text-white/75 mt-0.5">
                      Monday to Saturday: 9:30 AM to 8:30 PM (Sunday Emergency By Appointment)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold">Direct Priority Desk</p>
                    <a
                      href="tel:+911224888899"
                      className="text-xs font-mono text-accent-gold hover:underline mt-0.5 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
                    >
                      +91 1224 8888 99
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/15">
              <div className="bg-white/10 rounded-2xl p-4">
                <p className="text-xs font-bold text-accent-gold font-mono">
                  Zero-wait promise
                </p>
                <p className="text-xs text-white/85 mt-1">
                  We schedule only one patient per specialist per hour so you never wait in a
                  crowded lobby.
                </p>
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Compact 2-Column Interactive Booking Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12">
            {bookingSubmitted ? (
              <div role="status" aria-live="polite" className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 rounded-full bg-success-bg text-ink flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-9 h-9 text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-ink">
                  Priority Slot Reserved
                </h3>
                <p className="text-muted text-sm max-w-md mt-2">
                  Thank you, <strong className="text-ink">{bookingForm.name}</strong>. Our
                  front-desk coordinator will call you on{' '}
                  <strong className="text-ink">{bookingForm.phone}</strong> within 15
                  minutes to confirm your slot with{' '}
                  <strong className="text-ink">{bookingForm.doctor}</strong> on{' '}
                  <strong className="text-ink">{bookingForm.date}</strong> (
                  {bookingForm.slot}).
                </p>
                <div className="mt-6 flex flex-wrap gap-3 justify-center">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-ink hover:bg-ink-hover text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                  >
                    <MessageCircle className="w-4 h-4 text-accent-gold" />
                    Get Instant Pass on WhatsApp
                  </a>
                  <button
                    onClick={() => setBookingSubmitted(false)}
                    className="px-5 py-3 rounded-full border border-rule text-xs sm:text-sm font-semibold text-ink hover:bg-paper-2 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                  >
                    Modify Booking
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="flex items-center justify-between border-b border-rule pb-4">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-ink">
                      Select Your Appointment Preferences
                    </h3>
                    <p className="text-xs text-muted">
                      ₹800 Consultation Fee is 100% credited toward any procedure
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-success-bg text-accent font-mono text-xs font-bold">
                    Instant confirmation
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Treatment Selector */}
                  <div>
                    <label htmlFor="booking-treatment" className="block text-xs font-bold text-ink font-mono mb-1.5">
                      1. Clinical Service
                    </label>
                    <select
                      id="booking-treatment"
                      value={bookingForm.treatment}
                      onChange={(e) =>
                        setBookingForm({ ...bookingForm, treatment: e.target.value })
                      }
                      className="w-full rounded-xl border border-rule bg-paper px-3.5 py-3 text-sm font-medium text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    >
                      <option value="Comprehensive 3D Smile & Dental Checkup">
                        Comprehensive 3D Smile &amp; Checkup (₹800)
                      </option>
                      <option value="Single-Sitting Microscopic Root Canal">
                        Urgent Tooth Pain / Microscopic Root Canal
                      </option>
                      <option value="Biomimetic Ceramic Veneers & Smile Design">
                        Biomimetic Ceramic Veneers &amp; Smile Design
                      </option>
                      <option value="3D Invisible Clear Aligners">
                        3D Invisible Clear Aligners
                      </option>
                      <option value="3D Computer-Guided Dental Implants">
                        3D Computer-Guided Dental Implants
                      </option>
                      <option value="Anxiety-Free Comprehensive Checkup">
                        Anxiety-Free Sedation Dental Visit
                      </option>
                    </select>
                  </div>

                  {/* Specialist Selector */}
                  <div>
                    <label htmlFor="booking-doctor" className="block text-xs font-bold text-ink font-mono mb-1.5">
                      2. Preferred Specialist
                    </label>
                    <select
                      id="booking-doctor"
                      value={bookingForm.doctor}
                      onChange={(e) =>
                        setBookingForm({ ...bookingForm, doctor: e.target.value })
                      }
                      className="w-full rounded-xl border border-rule bg-paper px-3.5 py-3 text-sm font-medium text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    >
                      <option value="Dr. Nouman Patel">
                        Dr. Nouman Patel (MDS — Implants &amp; Oral Surgery)
                      </option>
                      <option value="Dr. Samiya Nouman Patel">
                        Dr. Samiya Nouman Patel (DDS — Veneers &amp; Smile Architecture)
                      </option>
                      <option value="Dr. Nuxsa Patel">
                        Dr. Nuxsa Patel (MDS — Microscopic Endodontics)
                      </option>
                      <option value="First Available Senior Specialist">
                        First Available Senior Specialist
                      </option>
                    </select>
                  </div>
                </div>

                {/* Date & Time Slot Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="booking-date" className="block text-xs font-bold text-ink font-mono mb-1.5">
                      3. Preferred Date
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      required
                      value={bookingForm.date}
                      onChange={(e) =>
                        setBookingForm({ ...bookingForm, date: e.target.value })
                      }
                      className="w-full rounded-xl border border-rule bg-paper px-3.5 py-2.5 text-sm font-medium text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>

                  <div>
                    <span className="block text-xs font-bold text-ink font-mono mb-1.5">
                      4. Preferred Time Window
                    </span>
                    <div className="grid grid-cols-3 gap-2" role="group" aria-label="Preferred time window">
                      {[
                        '11:00 AM (Morning)',
                        '03:30 PM (Afternoon)',
                        '06:30 PM (Evening)'
                      ].map((slot) => {
                        const active = bookingForm.slot === slot;
                        return (
                          <button
                            type="button"
                            key={slot}
                            aria-pressed={active}
                            onClick={() => setBookingForm({ ...bookingForm, slot })}
                            className={`py-2.5 px-2 rounded-xl text-xs font-semibold border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus ${
                              active
                                ? 'bg-ink text-white border-ink'
                                : 'bg-paper text-ink border-rule hover:bg-paper-2'
                            }`}
                          >
                            {slot.split(' ')[0]} {slot.split(' ')[1]}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Patient Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="booking-name" className="block text-xs font-bold text-ink font-mono mb-1.5">
                      5. Your Full Name *
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="e.g. Aarav Desai"
                      value={bookingForm.name}
                      onChange={(e) =>
                        setBookingForm({ ...bookingForm, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-rule bg-paper px-3.5 py-3 text-sm text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="booking-phone" className="block text-xs font-bold text-ink font-mono mb-1.5">
                      6. WhatsApp / Mobile Number *
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      placeholder="+91 1224 8888 99"
                      value={bookingForm.phone}
                      onChange={(e) =>
                        setBookingForm({ ...bookingForm, phone: e.target.value })
                      }
                      className="w-full rounded-xl border border-rule bg-paper px-3.5 py-3 text-sm text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>
                </div>

                {/* Dual Submission Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 bg-accent hover:bg-accent-hover text-white font-semibold py-4 px-6 rounded-full text-sm transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Confirm Clinic Visit
                  </button>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto bg-ink hover:bg-ink-hover text-white font-semibold py-4 px-6 rounded-full text-sm transition-colors flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                  >
                    <MessageCircle className="w-4 h-4 text-accent-gold" />
                    Book via WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
