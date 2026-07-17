<div align="center">

<img src="public/logo.png" alt="YVES Trucking Services logo" width="110" />

# YVES Trucking Services

**Reliable trucking & cargo transportation across the entire province of Palawan, Philippines** 🇵🇭

*From Puerto Princesa to El Nido, Coron to Balabac — 29 service areas, one trusted team.*

<br/>

![Next.js](https://img.shields.io/badge/Next.js_14-0A162B?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_18-0A162B?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-0A162B?style=for-the-badge&logo=typescript&logoColor=3178C6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0A162B?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-F5569B?style=for-the-badge&logo=framer&logoColor=white)

</div>

---

## ✨ Highlights

| | Feature |
|---|---|
| 🗺️ | **Interactive Palawan coverage map** — original SVG with 29 pulsing markers, tooltips, and route lines |
| 🚛 | **Full fleet showcase** — 9 unit types with photos, from closed vans to 80-ton mobile cranes |
| 📱 | **Mobile-first & fully responsive** — hamburger nav, adaptive timeline, tap-friendly map |
| 🎬 | **Smooth animations** — page transitions, scroll reveals, animated counters, testimonial marquee |
| 📨 | **Working quote form** — route planner with pickup/destination dropdowns, wired to Formspree |
| 💬 | **Quick contact** — floating Messenger chat + tap-to-call buttons |
| 🔍 | **SEO-ready** — sitemap, robots.txt, Open Graph share card, LocalBusiness structured data |

---

## 🚀 Getting Started

```bash
npm install     # install dependencies
npm run dev     # start dev server → http://localhost:3000
npm run build   # production build
```

> Requires **Node.js 18.17+**

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Hero, coverage map, why choose us, stats, fleet preview, process, testimonials, FAQ |
| `/services` | Full services list + all 9 fleet units |
| `/about` | Company overview, vision, mission, corporate values |
| `/contact` | Business info, quote form, embedded Google Map |

---

## 🗂️ Project Structure

```
app/
├── layout.tsx          # Fonts, metadata, navbar/footer shell
├── page.tsx            # 🏠 Home
├── services/           # 🚛 Services & Fleet
├── about/              # 🏢 About Us
├── contact/            # 📞 Contact Us
├── sitemap.ts          # SEO sitemap
└── robots.ts           # SEO robots

components/
├── home/               # Hero, Coverage map, Fleet, FAQ, Stats…
├── layout/             # Navbar, Footer, FloatingCall, BackToTop
├── contact/            # Quote form
├── seo/                # LocalBusiness structured data
└── ui/                 # Logo, Reveal, PageHeader, RouteDivider

lib/
└── data.ts             # ⭐ ALL site content lives here
```

---

## ✏️ Editing Content

Nearly everything editable lives in **`lib/data.ts`** — one file, no code hunting:

| What | Where in `data.ts` |
|------|--------------------|
| 📍 Address, email, mobile, office hours | `contactInfo` |
| 🌐 Live site URL (sitemap, share links) | `siteUrl` |
| 📨 Formspree form ID (makes the form live) | `formspreeId` |
| 💬 Facebook / Messenger links | `contactInfo.facebook` / `.messenger` |
| 🗺️ Service areas & map markers | `serviceAreas` |
| 🚛 Fleet units, tags, photos | `fleet` |
| ❓ FAQs, values, testimonials, stats | corresponding exports |

**Fleet photos** go in `public/` and are referenced like `image: "/6w-truck.png"`.

---

## 🔧 Go-Live Checklist

- [ ] Create a free form at [formspree.io](https://formspree.io) → paste ID into `formspreeId`
- [ ] Replace `YourPageName` in `contactInfo.facebook` / `.messenger`
- [ ] Set `siteUrl` to the live domain
- [ ] Submit `sitemap.xml` in [Google Search Console](https://search.google.com/search-console)

---

<div align="center">

**Built with ❤️ for Palawan's businesses**

*Safe cargo. On time. Every time.* 🚛💨

</div>
