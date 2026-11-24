export interface SymptomJourney {
  id: string;
  label: string;
  badge: string;
  title: string;
  description: string;
  duration: string;
  comfortLevel: string;
  doctor: string;
  treatmentValue: string;
  image: string;
  steps: string[];
}

export interface ProtocolStep {
  title: string;
  detail: string;
}

export interface Discipline {
  id: string;
  number: string;
  tag: string;
  title: string;
  shortDesc: string;
  timeline: string;
  warranty: string;
  doctor: string;
  image: string;
  highlights: string[];
  protocolSteps: ProtocolStep[];
}

export interface SmileCase {
  id: string;
  tag: string;
  title: string;
  patient: string;
  duration: string;
  doctor: string;
  quote: string;
  specs: string[];
  image: string;
}

export interface TechHardware {
  id: string;
  code: string;
  name: string;
  origin: string;
  headline: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  oldWay: string;
  auraWay: string;
}

export interface Doctor {
  id: string;
  name: string;
  credentials: string;
  role: string;
  regNo: string;
  experience: string;
  casesCompleted: string;
  image: string;
  bio: string;
  specialties: string[];
}

export interface PricingItem {
  category: string;
  name: string;
  includes: string;
  price: number;
  emi: number | null;
  tag: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface BookingFormState {
  treatment: string;
  doctor: string;
  date: string;
  slot: string;
  name: string;
  phone: string;
  notes: string;
}
