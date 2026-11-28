import { useState, useEffect } from 'react';
import TopTrustBar from './components/layout/TopTrustBar';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import SymptomFinder from './components/sections/SymptomFinder';
import Disciplines from './components/sections/Disciplines';
import SmileStudio from './components/sections/SmileStudio';
import TechnologyTour from './components/sections/TechnologyTour';
import Specialists from './components/sections/Specialists';
import PricingFaq from './components/sections/PricingFaq';
import BookingWidget from './components/sections/BookingWidget';
import Footer from './components/layout/Footer';
import DisciplineModal from './components/modals/DisciplineModal';
import StickyMobileBar from './components/layout/StickyMobileBar';
import { Discipline, BookingFormState } from './types';

export default function App() {
  // Navigation & UI state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Modal State
  const [selectedDisciplineModal, setSelectedDisciplineModal] = useState<Discipline | null>(null);

  // Smart Booking Form State
  const [bookingForm, setBookingForm] = useState<BookingFormState>({
    treatment: 'Comprehensive 3D Smile & Dental Checkup',
    doctor: 'Dr. Nouman Patel',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    slot: '11:00 AM (Morning)',
    name: '',
    phone: '',
    notes: ''
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Handle scroll effect for glassmorphic navbar
  useEffect(() => {
    document.title =
      'Aura Dental Atelier | Painless Microscopic & Aesthetic Dentistry in Gujarat';

    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth jump to booking with pre-filled treatment & doctor
  const triggerSmartBooking = (treatmentName?: string, doctorName?: string) => {
    setBookingForm((prev) => ({
      ...prev,
      treatment: treatmentName || prev.treatment,
      doctor: doctorName || prev.doctor
    }));
    setSelectedDisciplineModal(null);
    const el = document.getElementById('book-consultation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Build WhatsApp Instant Booking URL with +91 1224 8888 99
  const getWhatsAppUrl = () => {
    const text = `Hello Aura Dental Atelier! I would like to book an appointment.%0A%0A*Treatment:* ${bookingForm.treatment}%0A*Preferred Specialist:* ${bookingForm.doctor}%0A*Preferred Date:* ${bookingForm.date}%0A*Time Slot:* ${bookingForm.slot}%0A*Name:* ${bookingForm.name || 'Patient'}`;
    return `https://wa.me/911224888899?text=${text}`;
  };

  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-ink selection:text-paper antialiased overflow-x-clip">
      <a
        href="#main-content"
        className="visually-hidden fixed top-3 left-3 z-50 bg-ink text-paper px-4 py-2.5 rounded-full text-sm font-semibold shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
      >
        Skip to main content
      </a>

      {/* 1. Top Clinical Trust Bar */}
      <TopTrustBar />

      {/* 2. Sticky Glassmorphic Navigation */}
      <Navbar
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onBookClick={triggerSmartBooking}
      />

      <main id="main-content">
        {/* 3. Hero Section (Contained architectural image card, zero badge overlap & trust metrics) */}
        <HeroSection onBookClick={triggerSmartBooking} />

        {/* 4. Section 01: Interactive Symptom & Goal Finder */}
        <SymptomFinder onBookClick={triggerSmartBooking} />

        {/* 5. Section 02: The Four Core Disciplines (Clean Bento Grid) */}
        <Disciplines
          onOpenModal={(disc) => setSelectedDisciplineModal(disc)}
          onBookClick={triggerSmartBooking}
        />

        {/* 6. Section 03: Dark Luxury Contrast — Before & After Smile Studio */}
        <SmileStudio onBookClick={triggerSmartBooking} />

        {/* 7. Section 04: Painless Technology & Sterilization Tour */}
        <TechnologyTour />

        {/* 8. Section 05: Meet Your Specialists (Dr. Nouman Patel, Dr. Samiya Nouman Patel, Dr. Nuxsa Patel) */}
        <Specialists onBookClick={triggerSmartBooking} />

        {/* 9. Section 06: Transparent Pricing (0% EMI Toggle) & FAQ Accordion */}
        <PricingFaq />

        {/* 10. Section 07: Asymmetric 2-Column Smart Booking Widget */}
        <BookingWidget
          bookingForm={bookingForm}
          setBookingForm={setBookingForm}
          bookingSubmitted={bookingSubmitted}
          setBookingSubmitted={setBookingSubmitted}
          getWhatsAppUrl={getWhatsAppUrl}
        />
      </main>

      {/* 11. Luxury Clinical Footer */}
      <Footer />

      {/* 12. Interactive Discipline Protocol Modal */}
      <DisciplineModal
        discipline={selectedDisciplineModal}
        onClose={() => setSelectedDisciplineModal(null)}
        onBookClick={(treatment, doctor) => triggerSmartBooking(treatment, doctor)}
      />

      {/* 13. Sticky Mobile Bottom Conversion Bar */}
      <StickyMobileBar onBookClick={triggerSmartBooking} />
    </div>
  );
}
