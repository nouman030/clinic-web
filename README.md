# 🦷 Aura Dental Atelier

> **Painless Microscopic & Aesthetic Dentistry**  
> *Vadodara, Gujarat, India*

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3.8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](#license)

A modern, high-converting, anxiety-free digital dental clinic web application. Built for **Aura Dental Atelier**, Gujarat's premier luxury dental sanctuary specializing in painless microscopic treatments, computerized anesthesia, Swiss biomimetic smile design, and 3D digital implants.

---

## 🌟 Key Highlights & Features

- **Biophilic Clinical Sanctuary:** Calming aesthetics with glassmorphic cards, emerald & warm cream tones, designed to alleviate dental anxiety.
- **The Wand® Computerized Anesthesia:** Needle-free, pressure-regulated painless numbing protocol.
- **25x Carl Zeiss Microscopic Dentistry:** High-precision conservative treatments preserving healthy natural tooth structure.
- **Swiss Biomimetic Smile Design:** Natural aesthetics with ultra-thin E.max porcelain veneers and minimal tooth preparation.
- **Interactive Symptom Journey Finder:** Smart multi-path patient guidance matching user symptoms (acute pain, aesthetic desires, missing teeth, dental anxiety) to specialized clinical journeys.
- **Bento Grid Clinical Disciplines:** 4 core departments (Biomimetic Veneers, Clear Aligners, Micro-Endodontics, Immediate Implants) with interactive protocol modals.
- **Before & After Smile Studio:** Real clinical case studies with patient age, timeline, and procedure breakdown.
- **Hospital-Grade Sterilization Showcase:** Class-B vacuum autoclave protocols with sterilization tracking.
- **Smart WhatsApp Booking Integration:** Direct 1-tap pre-filled appointment scheduling with clinic specialists.
- **Transparent Pricing & 0% EMI:** Detailed service cost breakdown with zero hidden charges and EMI options.

---

## 🛠️ Tech Stack

| Layer | Technology | Description |
|---|---|---|
| **Frontend Framework** | **React 18.3.1** | Functional components, modern hooks |
| **Language** | **TypeScript 5.6.3** | Strict type safety for data models and UI props |
| **Bundler & Build Tool** | **Vite 8.3.8** + **@vitejs/plugin-react 6.3.0** | Ultra-fast HMR and optimized production bundling with Rolldown |
| **Styling** | **Tailwind CSS v4** + PostCSS | Utility-first styling with custom design tokens |
| **Icons** | **Lucide React** (`0.468.0`) | Modern, lightweight dental and UI icons |
| **Typography** | **Google Fonts** | `Instrument Serif` (editorial luxury), `Plus Jakarta Sans` (clinical readability), `JetBrains Mono` (precision specs) |
| **SEO & Schema** | **Schema.org JSON-LD** | Dentist practice structured data, GeoCoordinates, local business schema |

---

## 📁 Project Structure

```
clinic-web/
├── public/                 # Static assets & public files
├── src/
│   ├── components/
│   │   ├── layout/         # TopTrustBar, Navbar, Footer, StickyMobileBar
│   │   ├── sections/       # HeroSection, SymptomFinder, Disciplines, SmileStudio,
│   │   │                   # TechnologyTour, Specialists, PricingFaq, BookingWidget
│   │   └── modals/         # DisciplineModal (deep-dive treatment protocols)
│   ├── data/
│   │   └── dentalData.ts   # Central clinical data store (doctors, services, FAQs, etc.)
│   ├── types/
│   │   └── index.ts        # TypeScript interfaces & types
│   ├── App.tsx             # Main application layout
│   ├── base.css            # Custom CSS variables, fonts & styling
│   ├── index.css           # Tailwind CSS imports
│   ├── tokens.css          # Design tokens & color system
│   └── main.tsx            # React application entry point
├── .gitignore              # Git ignore rules for node_modules, build outputs, and IDEs
├── .npmrc                  # NPM configuration for CI/CD compatibility
├── index.html              # HTML shell with meta tags & JSON-LD structured data
├── package.json            # Project dependencies and npm scripts
├── tailwind.config.js      # Tailwind design system configuration
├── tsconfig.json           # Root TypeScript configuration
├── tsconfig.app.json       # Application TypeScript configuration
└── vite.config.ts          # Vite build and development configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nouman030/clinic-web.git
   cd clinic-web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment (Vercel)

This project is optimized for zero-config deployment on [Vercel](https://vercel.com):

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Configure dependencies for production deployment"
   git push origin main
   ```

2. **Import into Vercel:**
   - Link your GitHub repository in the Vercel Dashboard.
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build` (or `tsc -b && vite build`)
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

> **Note on Dependencies:**  
> The project uses Vite 8 with `@vitejs/plugin-react` `^6.3.0`, and includes `.npmrc` configured with `legacy-peer-deps=true` to ensure clean, error-free dependency resolution across all CI/CD environments.

---

## 🎨 Design System & Colors

| Token Name | Hex Code | Usage |
|---|---|---|
| **Deep Sanctuary Forest** | `#0F3D3E` / `#0B2D2E` | Brand primary, hero header, dark contrast |
| **Warm Editorial Paper** | `#FAF8F5` / `#F3EFEA` | Clean background canvas, clinical softness |
| **Accent Gold / Sand** | `#D4A373` / `#B8860B` | Trust badges, highlights, CTA accents |
| **Medical Muted Ink** | `#4A5568` / `#2D3748` | Clinical body copy, typography hierarchy |
| **Painless Mint** | `#E8F5E9` / `#2E7D32` | Anesthesia & trust protocol badges |

---

## 📄 License

Proprietary — All rights reserved © **Aura Dental Atelier**.
