import {
  SymptomJourney,
  Discipline,
  SmileCase,
  TechHardware,
  Doctor,
  PricingItem,
  FaqItem
} from '../types';

// ============================================================================
// VERIFIED HIGH-RESOLUTION CLINICAL & PORTRAIT IMAGERY (ZERO DUPLICATES)
// ============================================================================
export const IMAGES = {
  heroSmile: '/images/hero-smile.jpg',
  symptomPain:
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1100&q=85',
  symptomSmile:
    'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1100&q=85',
  symptomImplant:
    'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1100&q=85',
  symptomAnxiety:
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1100&q=85',
  disciplineVeneers:
    'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=85',
  disciplineAligners:
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=85',
  disciplineEndo:
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=85',
  disciplineImplants:
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=85',
  techScanner:
    'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1100&q=85',
  drNouman:
    'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=85',
  drSamiya:
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85',
  drNuxsa:
    'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=85'
};

// ============================================================================
// CLINICAL DATA STORE
// ============================================================================
export const SYMPTOM_JOURNEYS: SymptomJourney[] = [
  {
    id: 'pain',
    label: 'Toothache or Sudden Sensitivity',
    badge: 'Same-Day Priority Slot',
    title: 'Immediate Gentle Relief & Microscopic Root Care',
    description:
      'Skip the waiting room. We use computerized single-tooth anesthesia (The Wand) and 25x Carl Zeiss dental microscopes to eliminate pain in a single sitting—with zero needle sting.',
    duration: '45 – 60 Mins (Single Visit)',
    comfortLevel: '100% Computer-Guided Numbing',
    doctor: 'Dr. Nouman Patel',
    treatmentValue: 'Single-Sitting Microscopic Root Canal',
    image: IMAGES.symptomPain,
    steps: [
      '3D Low-Radiation Digital X-Ray in 90 seconds',
      'Topical numbing gel + painless computerized anesthesia',
      'Microscopic infection removal & laser disinfection'
    ]
  },
  {
    id: 'smile',
    label: 'Brighter, Straighter Smile',
    badge: '3D Digital Trial Smile',
    title: 'Biomimetic Ceramic Veneers & Invisible Aligners',
    description:
      'Test-drive your future smile before we touch a single tooth. Using 3D facial scanning, we craft ultra-thin 0.2mm porcelain veneers and clear aligners customized to your facial symmetry.',
    duration: '2 Visits (Veneers) / 6–10 Mos (Aligners)',
    comfortLevel: 'Zero-Drill / Minimal-Prep Protocol',
    doctor: 'Dr. Samiya Nouman Patel',
    treatmentValue: 'Biomimetic Ceramic Veneers & Smile Design',
    image: IMAGES.symptomSmile,
    steps: [
      '5D Intraoral Optical Scan (zero messy putty impressions)',
      '3D Digital Smile Mockup previewed on your own face',
      'Hand-layered Swiss porcelain bonding for natural translucency'
    ]
  },
  {
    id: 'missing',
    label: 'Missing or Loose Teeth',
    badge: 'Lifetime Titanium Warranty',
    title: '3D Keyhole Computer-Guided Dental Implants',
    description:
      'Restore 99% of your natural biting strength without stitches or swelling. Our 3D CBCT surgical guides place Swiss Straumann implants with 0.1mm precision in under 30 minutes.',
    duration: '30 Mins Per Implant',
    comfortLevel: 'Keyhole Flapless Placement',
    doctor: 'Dr. Nouman Patel',
    treatmentValue: '3D Computer-Guided Dental Implants',
    image: IMAGES.symptomImplant,
    steps: [
      '3D CBCT jawbone density & nerve mapping',
      'Virtual implant placement using 3D printed surgical stent',
      'Immediate temporary crown placement on the same day'
    ]
  },
  {
    id: 'anxiety',
    label: 'Dental Fear or Past Bad Experience',
    badge: 'Anxiety-Free Sanctuary',
    title: 'Conscious Sedation & Spa-Grade Sensory Care',
    description:
      'Designed specifically for nervous patients. Enjoy noise-canceling Bose headphones, ceiling entertainment, warm weighted blankets, and nitrous oxide ("laughing gas") relaxation.',
    duration: 'Paced Entirely Around You',
    comfortLevel: 'Stop-Signal Hand Control at All Times',
    doctor: 'Dr. Nuxsa Patel',
    treatmentValue: 'Anxiety-Free Comprehensive Checkup',
    image: IMAGES.symptomAnxiety,
    steps: [
      'Private lounge consultation (not in a dental chair)',
      'Painless topical & inhalation sedation options',
      'Gentle step-by-step communication before anything happens'
    ]
  }
];

export const DISCIPLINES: Discipline[] = [
  {
    id: 'veneers',
    number: '01',
    tag: 'AESTHETIC CERAMICS',
    title: 'Biomimetic Ceramic Veneers & Smile Design',
    shortDesc:
      'Ultra-thin 0.2mm Swiss E.max porcelain shells that mimic natural tooth enamel light reflection without aggressive tooth shaving.',
    timeline: '5 – 7 Days (2 Appointments)',
    warranty: '15-Year Clinical Warranty',
    doctor: 'Dr. Samiya Nouman Patel',
    image: IMAGES.disciplineVeneers,
    highlights: [
      'Digital Smile Design (DSD) 3D Trial Mockup included',
      'Preserves up to 95% of healthy natural tooth enamel',
      'Stain-resistant against coffee, tea, and turmeric'
    ],
    protocolSteps: [
      {
        title: 'Day 1: 3D Facial & Intraoral Scan',
        detail: 'Digital optical mapping and shade calibration in natural daylight.'
      },
      {
        title: 'Day 3: Trial Smile Test-Drive',
        detail: 'Wear temporary composite prototypes to approve shape and phonetic comfort.'
      },
      {
        title: 'Day 6: Microscopic Ceramic Bonding',
        detail: 'Precision bonding under 25x magnification for seamless gum integration.'
      }
    ]
  },
  {
    id: 'aligners',
    number: '02',
    tag: 'DIGITAL ORTHODONTICS',
    title: '3D Invisible Clear Aligners',
    shortDesc:
      'Straighten crowded, gapped, or crooked teeth discreetly with medical-grade smart polymer trays—zero metal brackets or wires.',
    timeline: '4 – 12 Months Average',
    warranty: '3D Outcome Guarantee',
    doctor: 'Dr. Samiya Nouman Patel',
    image: IMAGES.disciplineAligners,
    highlights: [
      'See your final straight smile in 3D on Day 1',
      'Removable for meals, weddings, and brushing',
      'Remote AI progress tracking every 14 days'
    ],
    protocolSteps: [
      {
        title: 'Step 1: iTero 5D Digital Scan',
        detail: '6,000 frames per second scan builds a 3D movement simulation in 5 minutes.'
      },
      {
        title: 'Step 2: Custom Aligner Fabrication',
        detail: 'Laser-trimmed aligners delivered in sets with painless micro-movements.'
      },
      {
        title: 'Step 3: Vivera Retainer Lock-In',
        detail: 'Includes 3 sets of invisible night retainers to preserve alignment for life.'
      }
    ]
  },
  {
    id: 'endodontics',
    number: '03',
    tag: 'MICROSCOPIC ENDODONTICS',
    title: 'Single-Sitting Microscopic Root Canal',
    shortDesc:
      'Using 25x Carl Zeiss optical magnification and ultrasonic laser activation to clean hidden micro-canals painlessly in one visit.',
    timeline: '45 – 60 Minutes (1 Visit)',
    warranty: '99.4% Clinical Success Rate',
    doctor: 'Dr. Nuxsa Patel',
    image: IMAGES.disciplineEndo,
    highlights: [
      'Computerized painless numbing (The Wand STA)',
      'Zero post-procedure swelling with laser disinfection',
      '3D CAD/CAM zirconia crown ready within 24 hours'
    ],
    protocolSteps: [
      {
        title: 'Phase 1: Digital Pulp & Apex Mapping',
        detail: 'Electronic apex locators measure root length to 0.02mm accuracy.'
      },
      {
        title: 'Phase 2: 25x Microscope Cleaning',
        detail: 'Flexible nickel-titanium rotary instruments gently clear infection.'
      },
      {
        title: 'Phase 3: Bioceramic 3D Seal',
        detail: 'Biocompatible bioceramic sealer prevents any future bacterial re-entry.'
      }
    ]
  },
  {
    id: 'implants',
    number: '04',
    tag: 'ORAL IMPLANTOLOGY',
    title: '3D Computer-Guided Dental Implants',
    shortDesc:
      'Keyhole, suture-free tooth replacement using Swiss Straumann® Titanium-Zirconium implants and 3D printed surgical guides.',
    timeline: '30 Mins Surgical Placement',
    warranty: 'Lifetime Implant Warranty',
    doctor: 'Dr. Nouman Patel',
    image: IMAGES.disciplineImplants,
    highlights: [
      'Keyhole placement—no scalpels or stitches required',
      'Walk out with fixed provisional teeth the same day',
      'Safe for diabetic and senior patients'
    ],
    protocolSteps: [
      {
        title: 'Stage 1: 3D CBCT Bone & Nerve Scan',
        detail: 'Low-dose 3D tomography maps exact bone volume and sinus anatomy.'
      },
      {
        title: 'Stage 2: Keyhole Guided Placement',
        detail: 'Implant is placed through a 3mm pinhole using a custom 3D stent.'
      },
      {
        title: 'Stage 3: Biomimetic Zirconia Crown',
        detail: 'Custom-milled screw-retained porcelain tooth torqued to precision.'
      }
    ]
  }
];

export const SMILE_CASES: SmileCase[] = [
  {
    id: 'case1',
    tag: '8 UPPER BIOMIMETIC VENEERS',
    title: 'Enamel Restoration & Shade Brightening',
    patient: 'Riya S., 29 • Architect',
    duration: '6 Days (2 Visits)',
    doctor: 'Dr. Samiya Nouman Patel',
    quote:
      'I had tetracycline staining and chipped edges for years. Nobody can tell these are veneers—they have the exact translucency of real teeth.',
    specs: ['0.2mm Minimal Prep', 'BL2 Natural Ivory Shade', 'Swiss E.max Ceramic'],
    image: IMAGES.symptomSmile
  },
  {
    id: 'case2',
    tag: 'DIGITAL CLEAR ALIGNERS + WHITENING',
    title: 'Crowding Correction & Arch Expansion',
    patient: 'Karan M., 34 • Founder',
    duration: '7 Months (18 Aligner Trays)',
    doctor: 'Dr. Samiya Nouman Patel',
    quote:
      'I closed my front gap and fixed my bite without a single client noticing I was wearing aligners during boardroom meetings.',
    specs: ['Zero Tooth Extraction', 'iTero 3D Planned', 'In-Office Laser Whitening'],
    image: IMAGES.disciplineVeneers
  },
  {
    id: 'case3',
    tag: 'SINGLE-TOOTH GUIDED IMPLANT + CROWN',
    title: 'Anterior Aesthetic Tooth Replacement',
    patient: 'Vikram D., 46 • Chartered Accountant',
    duration: 'Same-Day Provisional Crown',
    doctor: 'Dr. Nouman Patel',
    quote:
      'After fracturing my front tooth, Dr. Nouman placed an implant and fixed tooth in one morning. Zero pain and zero swelling.',
    specs: ['Straumann® BLX Implant', 'Keyhole Flapless', 'Custom Zirconia Abutment'],
    image: IMAGES.symptomImplant
  }
];

export const TECH_HARDWARE: TechHardware[] = [
  {
    id: 'wand',
    code: 'STA-01',
    name: 'The Wand® Computerized Anesthesia',
    origin: 'Milestone Scientific • USA',
    headline: 'Numb Only the Single Tooth—Never Your Whole Face',
    description:
      'Traditional syringes cause pain because liquid is pushed too fast by hand. The Wand® uses a microprocessor to deliver anesthetic drop-by-drop below your pain threshold, numbing only the target tooth so you leave without a droopy lip.',
    metricLabel: 'Patient Pain Score',
    metricValue: '0.2 / 10',
    oldWay: 'Manual metal syringe with pressure sting and 4-hour numb lip/cheek',
    auraWay: 'Computer-regulated micro-flow that numbs a single tooth painlessly in 60s'
  },
  {
    id: 'zeiss',
    code: 'OPT-25X',
    name: 'Carl Zeiss® Extaro 300 Microscope',
    origin: 'Carl Zeiss Meditec • Germany',
    headline: 'We Cannot Treat What We Cannot See—So We Magnify 25x',
    description:
      'Micro-fractures and hidden fourth root canals are invisible to the naked eye. Our German optical microscope illuminates the tooth interior with shadow-free LED light at 25x magnification, preserving healthy tooth structure.',
    metricLabel: 'Optical Precision',
    metricValue: '0.02 mm',
    oldWay: 'Naked-eye guesswork leading to missed canals or oversized drilling',
    auraWay: '25x HD optical magnification with live chairside screen feed for total transparency'
  },
  {
    id: 'itero',
    code: 'SCAN-5D',
    name: 'iTero Element® 5D Plus Optical Scanner',
    origin: 'Align Technology • USA',
    headline: 'Goodbye Gag-Inducing Goopy Dental Trays',
    description:
      'In 90 seconds, a radiation-free wand captures 6,000 3D images per second using Near-Infrared Imaging (NIRI) to detect early cavities between teeth without X-rays and build instant 3D smile simulations.',
    metricLabel: 'Scan Speed',
    metricValue: '90 Seconds',
    oldWay: 'Choking on rubbery alginate putty trays for 5 minutes',
    auraWay: 'Breathe normally while a digital wand maps your teeth in full 3D color'
  },
  {
    id: 'autoclave',
    code: 'STER-B7',
    name: '7-Step Class-B Vacuum Sterilization',
    origin: 'MELAG Medizintechnik • Germany',
    headline: 'Hospital-Operating-Room Sterility for Every Single Instrument',
    description:
      'Every handpiece and instrument undergoes ultrasonic enzymatic baths, thermal disinfection, and triple-vacuum Class-B steam autoclaving in sealed pouches opened exclusively in front of you.',
    metricLabel: 'Spore Elimination',
    metricValue: '100% Certified',
    oldWay: 'Basic boiling water or unsealed instrument trays',
    auraWay: 'Barcode-tracked sterile pouches opened live in front of you with chemical indicators'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'Dr. Nouman Patel',
    name: 'Dr. Nouman Patel',
    credentials: 'BDS, MDS (Prosthodontics & Implantology)',
    role: 'Chief Clinical Director & Lead Implantologist',
    regNo: 'DCI Reg: A-28491 • ITI Fellow (Switzerland)',
    experience: '14+ Years Clinical Experience',
    casesCompleted: '4,800+ Implants & Micro-Surgeries',
    image: IMAGES.drNouman,
    bio: 'Trained in computer-guided keyhole implantology in Zurich and microscopic endodontics, Dr. Nouman Patel specializes in rehabilitating complex full-mouth cases with zero surgical trauma.',
    specialties: [
      '3D Keyhole Dental Implants & Sinus Lifts',
      'Single-Sitting 25x Microscopic Root Canals',
      'Full-Mouth Biomimetic Rehabilitation'
    ]
  },
  {
    id: 'Dr. Samiya Nouman Patel',
    name: 'Dr. Samiya Nouman Patel',
    credentials: 'DDS, MS (Aesthetic & Biomimetic Dentistry)',
    role: 'Co-Founder & Head of Smile Architecture',
    regNo: 'AACD Accredited • Digital Smile Design Master',
    experience: '12+ Years Aesthetic Practice',
    casesCompleted: '6,200+ Veneer & Aligner Transformations',
    image: IMAGES.drSamiya,
    bio: 'Combining facial anthropometry with ultra-conservative ceramic artistry, Dr. Samiya Nouman Patel crafts natural, un-dentisted smiles that harmonize effortlessly with your lips and facial features.',
    specialties: [
      '0.2mm No-Prep / Minimal-Prep Porcelain Veneers',
      '3D Digital Orthodontics & Clear Aligners',
      'Dental Anxiety & Sedation Dentistry Protocol'
    ]
  },
  {
    id: 'Dr. Nuxsa Patel',
    name: 'Dr. Nuxsa Patel',
    credentials: 'BDS, MDS (Microscopic Endodontics & Conservative Dentistry)',
    role: 'Senior Endodontist & Microscopic Specialist',
    regNo: 'DCI Reg: A-39182 • IFEA Specialist Member',
    experience: '9+ Years Clinical Mastery',
    casesCompleted: '3,500+ Single-Sitting Root Canals',
    image: IMAGES.drNuxsa,
    bio: 'Dedicated to painless single-tooth anesthesia and microscopic pulp therapy, Dr. Nuxsa Patel eliminates dental anxiety and preserves natural tooth structure with 25x Zeiss optics.',
    specialties: [
      'Single-Sitting 25x Microscopic Root Canals',
      'Bioceramic 3D Hermetic Apex Sealing',
      'Gentle Dental Phobia Care & Sedation Protocol'
    ]
  }
];

export const PRICING_ITEMS: PricingItem[] = [
  {
    category: 'Diagnostics & Preventive',
    name: 'Comprehensive 3D Digital Smile & CBCT Assessment',
    includes: 'iTero 5D Scan + Low-Dose X-Ray + 30-Min Specialist Plan',
    price: 800,
    emi: null,
    tag: 'Waived on Treatment'
  },
  {
    category: 'Diagnostics & Preventive',
    name: 'Swiss EMS Airflow® Guided Biofilm Spa Cleaning',
    includes: 'Warm water painless stain removal + enamel remineralization',
    price: 2500,
    emi: null,
    tag: 'Zero Ultrasonic Scraping'
  },
  {
    category: 'Pain Relief & Restorative',
    name: 'Single-Sitting 25x Microscopic Root Canal',
    includes: 'The Wand® painless numbing + laser disinfection + bioceramic seal',
    price: 6500,
    emi: 1083,
    tag: 'Single Visit'
  },
  {
    category: 'Pain Relief & Restorative',
    name: '3D CAD/CAM Monolithic Zirconia Crown',
    includes: 'Metal-free German ceramic with 15-Year warranty card',
    price: 9500,
    emi: 1583,
    tag: '15-Yr Warranty'
  },
  {
    category: 'Aesthetics & Implants',
    name: 'Biomimetic Swiss E.max Porcelain Veneer (Per Tooth)',
    includes: '3D Digital Smile Trial + hand-layered ultra-thin ceramic',
    price: 16500,
    emi: 2750,
    tag: 'Includes 3D Mockup'
  },
  {
    category: 'Aesthetics & Implants',
    name: '3D Computer-Guided Swiss Dental Implant',
    includes: '3D surgical guide + Titanium implant + Lifetime warranty',
    price: 32000,
    emi: 5333,
    tag: '0% 6-Mo EMI Available'
  }
];

export const FAQS: FaqItem[] = [
  {
    q: 'Will my treatment actually be 100% painless? I have severe fear of needles.',
    a: 'Yes. We do not use traditional manual syringes. First, we apply a medical-grade topical numbing raspberry gel so your gum feels nothing. Then we use The Wand® STA—a computer-controlled system that delivers anesthetic drop-by-drop below the human pain threshold. Over 96% of our patients report zero sensation.'
  },
  {
    q: 'How is your ₹800 consultation fee waived?',
    a: 'Your initial 30-minute consultation includes a 5D intraoral optical scan, digital X-ray (if needed), and a transparent printed treatment plan. If you go ahead with any recommended clinical procedure within 30 days, the ₹800 consultation fee is 100% deducted from your treatment bill.'
  },
  {
    q: 'Do you offer 0% No-Cost EMI and insurance documentation?',
    a: 'Absolutely. For treatments above ₹6,000 (including Root Canals, Crowns, Aligners, Veneers, and Implants), we offer instant 3, 6, and 12-month 0% interest EMI across all major credit/debit cards and Bajaj Finserv. We also provide complete itemized clinical invoices and digital X-rays for cashless/reimbursement dental insurance claims.'
  },
  {
    q: 'How do I know my veneers won’t look fake or chalky white?',
    a: 'Fake-looking veneers happen when clinics make teeth opaque and flat. At Aura Dental Atelier, we first 3D-print a temporary "Trial Smile" that you can wear and see in natural sunlight before final porcelain fabrication. Our master ceramists build micro-translucency at the biting edge so light passes through just like natural enamel.'
  }
];
