# 🛕 श्री वासुदेव मंदिर, वाटेगाव (Shree Vasudev Mandir, Wategaon)

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

> **॥ ॐ नमो भगवते वासुदेवाय ॥**  
> सांगली जिल्ह्यातील वाटेगाव येथे भोगावती नदीच्या पवित्र तीरावर स्थित ऐतिहासिक Divekar घराण्याचे श्री वासुदेव मंदिर.

Official web portal for **Shree Vasudev Mandir**, preserving and presenting the temple's authentic history, spiritual significance, sacred architecture, and annual Dipotsav festival.

---

## 🌟 Key Features

- **🌐 Full Bilingual Support (द्विभाषिक सुविधा)**: Seamless one-click toggle between **Marathi (मराठी)** and **English** across all pages, preserving authentic traditional terminology.
- **📜 Grounded Historical Record**: Based directly on archival documentation from the historic **Shake 1851 (शके १८५१)** book records, chronicling the heritage of the temple and the Divekar family.
- **🪔 दीपोत्सव सोहळा (Dipotsav Gallery)**: A dedicated festival showcase celebrating the traditional month-long lamp festival held from Kojagiri Purnima to Tripurari Purnima, equipped with an interactive full-screen image lightbox modal.
- **📖 Theological Context (श्री वासुदेव स्वरूप)**: Scriptural citations and insights from the **Shrimad Bhagawat** and Maharashtra's devotional traditions explaining the divine manifestation of Shree Vasudev.
- **📍 Interactive Maps & Route Guidance**: Integrated with the verified [Google Maps Place](https://www.google.com/maps/place/Vasudev+Mandir+Wategaon/@17.101584,74.1587301,17z/data=!4m6!3m5!1s0x3bc19eec3fffffff:0x8ae9bfd88088409c!8m2!3d17.101584!4d74.1587301!16s%2Fg%2F11g6wfs282), featuring an interactive embedded map and concise travel routes from Kasegaon, Karad, and Kolhapur.
- **🎨 Devotional & Responsive UI**: Designed with a palette inspired by temple sanctums—deep maroon, gold accents, and saffron highlights—optimized for mobile devices, tablets, and desktops.

---

## 🧭 Site Structure

```
├── /                    # Home page (overview, idol highlights, daily timings, photo preview)
├── /history             # Detailed authentic history from Shake 1851 archival records
├── /who-is-vasudev      # Scriptural context from Shrimad Bhagawat & spiritual meaning
├── /deepotsav           # Dipotsav festival information, schedule, and photo gallery with lightbox
└── /location            # Directions, route via Kasegaon, and embedded Google Maps
```

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `qrcode.react`, `clsx`, `tailwind-merge`
- **Hosting / CI/CD**: GitHub Actions & Vercel

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.18.0 or newer recommended)
- `npm` or `yarn` / `pnpm`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Kaustubh-465/Vasudev-Mandir.git
   cd Vasudev-Mandir
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Visit [http://localhost:3000](http://localhost:3000) to view the website.

### Production Build

To test the production build locally:

```bash
npm run build
npm run start
```

---

## 📂 Project Organization

```
mandir-project/
├── .github/workflows/       # CI/CD deployment workflows (GitHub Actions)
├── public/
│   └── images/              # Optimized temple photography & festival assets
├── src/
│   ├── app/                 # Next.js App Router pages & layouts
│   │   ├── deepotsav/       # Dipotsav festival page
│   │   ├── history/         # Archival history page
│   │   ├── location/        # Directions & embedded Google Maps
│   │   ├── who-is-vasudev/  # Shrimad Bhagawat theological context
│   │   ├── globals.css      # Custom styles & Tailwind configurations
│   │   ├── layout.tsx       # Root layout with Header, Footer, LanguageProvider
│   │   └── page.tsx         # Main Landing Page
│   ├── components/          # Reusable UI components (Navbar, Footer, LightboxModal)
│   ├── context/             # Language context (mr / en state management)
│   └── data/                # Content data stores (templeInfo, history, citations, location)
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 📍 Location & Address

- **स्थान**: भोगावती नदीच्या काठी, वाटेगाव, तालुका वाळवा, जिल्हा सांगली - ४१५४१०, महाराष्ट्र
- **Location**: Bhogawati River Bank, Wategaon, Taluka Walwa, District Sangli - 415410, Maharashtra
- **Google Maps**: [Vasudev Mandir Wategaon on Google Maps](https://www.google.com/maps/place/Vasudev+Mandir+Wategaon/@17.101584,74.1587301,17z/data=!4m6!3m5!1s0x3bc19eec3fffffff:0x8ae9bfd88088409c!8m2!3d17.101584!4d74.1587301!16s%2Fg%2F11g6wfs282) (Coordinates: `17.101584, 74.1587301`)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
