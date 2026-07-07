# YVES Trucking Services — Corporate Website

Modern corporate website for **YVES TRUCKING SERVICES**, a trucking and cargo
transportation company serving the entire province of Palawan, Philippines.

## Tech Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** — custom navy/orange brand palette
- **Framer Motion** — scroll reveals, micro-interactions
- **Lucide Icons**
- Fonts: **Poppins** (display) + **Manrope** (body) via `next/font`

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Requires Node.js 18.17+.

## Structure

```
app/
  layout.tsx        # Root layout, fonts, metadata, nav/footer
  page.tsx          # Home
  about/page.tsx    # About Us
  contact/page.tsx  # Contact Us
components/
  layout/           # Navbar, Footer, ScrollProgress, BackToTop
  home/             # Hero, Coverage (Palawan map), WhyChooseUs, Stats,
                    # Fleet, Process, Testimonials, FAQ, CTABanner
  contact/          # ContactForm
  ui/               # Logo, Reveal, SectionHeading, PageHeader
lib/
  data.ts           # ALL site content: service areas, values, FAQs,
                    # contact details — edit here to update the site
```

## Editing Content

Almost all copy lives in **`lib/data.ts`**:

- **Contact details** (address, email, phone, office hours, Google Maps embed)
  → `contactInfo`
- **Service areas / map markers** → `serviceAreas` (x/y are SVG coordinates)
- FAQs, values, fleet, testimonials, stats → corresponding exports

## Contact Form

The form currently simulates submission. To make it live, create an API route
(e.g. `app/api/contact/route.ts`) using Resend/Nodemailer, or point the form at
Formspree/EmailJS — see the comment in `components/contact/ContactForm.tsx`.

## Notes

- The Palawan coverage map is an original, stylized SVG (not to scale) with
  marker positions derived from real municipal coordinates.
- The Google Map on the Contact page is a keyless embed; replace the `q`
  parameter in `contactInfo.mapEmbedSrc` with the exact office address.
