# Aura Dental Atelier

A modern, high-converting dental clinic website designed to showcase painless microscopic and aesthetic dentistry services. Built with cutting-edge web technologies and designed for maximum conversion.

## 🌟 Overview

**Aura Dental Atelier** is a premium dental clinic website featuring:

- **Biophilic clinical sanctuary** messaging and 100% needle-free numbing protocol
- **25x Carl Zeiss microscopic care** with advanced visual technology
- **Swiss biomimetic smile design** using E.max porcelain and minimal-prep techniques
- **Computerized pain-free anesthesia** with The Wand® system
- **Luxury clinical aesthetic** with glassmorphic design and premium typography

## 🚀 Live Demo

The site is built with Vite and ready for immediate deployment.

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 18.3 + TypeScript + Vite |
| **Styling** | Tailwind CSS 4.3, PostCSS, Autoprefixer |
| **UI Components** | Lucide React icons, custom glassmorphic components |
| **Data** | TypeScript types with clinical data store |
| **Build** | `vite`, `tsc`, `vite build` |

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/          # TopTrustBar, Navbar, Footer, StickyMobileBar
│   ├── sections/        # HeroSection, SymptomFinder, Disciplines, SmileStudio,
│   │                   # TechnologyTour, Specialists, PricingFaq, BookingWidget
│   └── modals/          # DisciplineModal
├── data/                # dentalData.ts - All clinical data, doctors, prices, FAQs
├── types/               # TypeScript type definitions
├── index.html           # HTML template with meta tags and optimization
└── main.tsx             # Application entry point
```

### Key Data Files

- **`dentalData.ts`** - Complete clinical data including:
  - `IMAGES` - Unsplash hero and component images
  - `SYMPTOM_JOURNEYS` - Patient journey data by symptom type
  - `DISCIPLINES` - 4 specialized departments (Veneers, Aligners, Endodontics, Implants)
  - `SMILE_CASES` - Before/after case studies
  - `TECH_HARDWARE` - Clinical technology showcase (The Wand, Zeiss, iTero, Autoclave)
  - `DOCTORS` - Three specialist doctors with credentials
  - `PRICING_ITEMS` - Service pricing with 0% EMI options
  - `FAQS` - Patient questions and answers

## 🎨 Design Highlights

- **Glassmorphic navigation** with scrolled background transition
- **Bento grid layout** for disciplined sections (2x2 architectural layout)
- **Dual CTA strategy** - Primary book consultation button + secondary "Find Your Treatment" link
- **Trust metrics bar** with patient statistics and ratings
- **Mobile-first responsive design** adapting from 320px to 4K displays
- **Accessibility-focused** with proper semantic HTML, focus-visible states, and aria labels

## 📱 Pages/Sections

1. **Hero Section** - Value proposition with trust metrics and image card
2. **Symptom Finder** - Interactive patient journey by pain/smile/missing/anxiety
3. **Disciplines** - 4 clinical specialties in bento grid format
4. **Smile Studio** - Before/after smile transformation showcase
5. **Technology Tour** - Clinical equipment and sterilization showcase
6. **Specialists** - Doctor profiles with backgrounds and specialties
7. **Pricing & FAQ** - Transparent pricing with 0% EMI options and accordion FAQ
8. **Booking Widget** - Smart WhatsApp integration for appointment booking

## 🔧 Customization

### Adding New Services

Edit `src/data/dentalData.ts` to add:
- New disciplines with highlights and protocol steps
- Additional pricing categories with EMI options
- New FAQ entries

### Updating Hero Content

Modify `src/components/sections/HeroSection.tsx` to change:
- Tagline and headline text
- Trust metrics (statistics)
- Image and visual elements

### Doctor/Staff Updates

Update `src/data/dentalData.ts` `DOCTORS` array with:
- Names, credentials, roles
- Experience and case counts
- Specialties and bio text
- Image references

### Changing Pricing

Modify `src/data/dentalData.ts` `PRICING_ITEMS` to:
- Add/remove service categories
- Update prices and EMI options
- Modify included services tags

## 🌈 Brand Assets

### Color Palette (Tailwind Config)

The site uses a carefully curated palette:

- **Ink (`ink`)** - Primary text color
- **Paper (`paper`)** - Background color
- **Ink Hover (`ink-hover`)** - Hover states
- **Paper 2 (`paper-2`)** - Secondary backgrounds
- **Paper 3 (`paper-3`)** - Card backgrounds
- **Accent Gold (`accent-gold`)** - Primary accent color
- **Muted (`muted`)** - Secondary text
- **Success BG (`success-bg`)** - Success state backgrounds
- **Card (`card`)** - Card component backgrounds
- **Border Rule (`border-rule`)** - Border styling

See `tailwind.config.js` and `src/base.css` for full CSS variable definitions.

## 📦 Deployment

### Vercel

```bash
npm run build
vercel
```

### Netlify

```bash
npm run build
netlify deploy
```

### Traditional Hosting

Upload the `dist/` folder contents to your web server. The site is static HTML/JS/CSS with no backend requirements.

## 📄 License

Private project - All rights reserved.

## 🙏 Acknowledgments

- **Unsplash** for hero and section imagery
- **Lucide React** for the icon set
- **Tailwind CSS** for the utility-first styling system
- **Vite** for the lightning-fast development experience

---

**Aura Dental Atelier** - Painless Microscopic & Aesthetic Dentistry in Gujarat  
Website: https://aura-dental-atelier.example.com