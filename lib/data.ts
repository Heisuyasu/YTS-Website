import {
  Award,
  Boxes,
  CalendarClock,
  ClipboardCheck,
  Clock,
  Container,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Map,
  PackageCheck,
  ShieldCheck,
  Truck,
  Users,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Service areas — x/y are coordinates on the stylized SVG map        */
/* (derived from real latitude/longitude, viewBox 0 0 470 530)        */
/* Sorted alphabetically — this order is used for the chip list.      */
/* ------------------------------------------------------------------ */
export type ServiceArea = {
  name: string;
  x: number;
  y: number;
  hub?: boolean;
  group: "mainland" | "north" | "islands";
};

export const serviceAreas: ServiceArea[] = [
  { name: "Aborlan", x: 185, y: 302, group: "mainland" },
  { name: "Agutaya", x: 424, y: 130, group: "islands" },
  { name: "Amanpulo Island, Cuyo", x: 403, y: 109, group: "islands" },
  { name: "Araceli", x: 330, y: 186, group: "islands" },
  { name: "Balabac", x: 38, y: 446, group: "islands" },
  { name: "Banwa Island, Roxas", x: 290, y: 204, group: "islands" },
  { name: "Bataraza", x: 92, y: 378, group: "mainland" },
  { name: "Brooke's Point", x: 113, y: 367, group: "mainland" },
  { name: "Busuanga", x: 322, y: 32, group: "north" },
  { name: "Cagayancillo", x: 448, y: 288, group: "islands" },
  { name: "Coron", x: 350, y: 46, group: "north" },
  { name: "Culion", x: 331, y: 62, group: "north" },
  { name: "Cuyo", x: 431, y: 160, group: "islands" },
  { name: "Dumaran", x: 308, y: 194, group: "islands" },
  { name: "El Nido", x: 267, y: 127, group: "mainland" },
  { name: "Kalayaan Island", x: 48, y: 84, group: "islands" },
  { name: "Linapacan", x: 317, y: 95, group: "north" },
  { name: "Magsaysay", x: 411, y: 170, group: "islands" },
  { name: "Mangsee, Balabac", x: 26, y: 484, group: "islands" },
  { name: "Mapun, Cagayan de Tawi-Tawi", x: 170, y: 505, group: "islands" },
  { name: "Narra", x: 171, y: 317, group: "mainland" },
  { name: "Onoc Island, Balabac", x: 58, y: 452, group: "islands" },
  { name: "Puerto Princesa", x: 204, y: 271, hub: true, group: "mainland" },
  { name: "Quezon", x: 129, y: 322, group: "mainland" },
  { name: "Rio Tuba, Bataraza", x: 104, y: 392, group: "mainland" },
  { name: "Roxas", x: 265, y: 213, group: "mainland" },
  { name: "San Vicente", x: 250, y: 192, group: "mainland" },
  { name: "Sofronio Española", x: 138, y: 347, group: "mainland" },
  { name: "Taytay", x: 282, y: 163, group: "mainland" },
  { name: "Underground River, Sabang", x: 222, y: 226, group: "mainland" },
];

/* ------------------------------------------------------------------ */
/* Coverage highlights (beside the map)                                */
/* ------------------------------------------------------------------ */
export const coverageHighlights = [
  { icon: Map, label: "Province-wide trucking" },
  { icon: Truck, label: "Cargo transport" },
  { icon: PackageCheck, label: "Commercial and Bulk deliveries" },
  { icon: Warehouse, label: "Business logistics" },
  { icon: ShieldCheck, label: "Reliable transportation" },
  { icon: CalendarClock, label: "Scheduled hauling" },
  { icon: Container, label: "Cross docking facility" },
  { icon: Boxes, label: "Warehouse management" },
];

/* ------------------------------------------------------------------ */
/* Why choose us                                                       */
/* ------------------------------------------------------------------ */
export const whyChooseUs = [
  {
    icon: PackageCheck,
    title: "Reliable Deliveries",
    body: "Every shipment is tracked from dispatch to drop-off, so your cargo arrives exactly as planned — every single time.",
  },
  {
    icon: Users,
    title: "Experienced Drivers",
    body: "Our professional drivers know Palawan's highways, coastal roads, and mountain passes better than anyone. Completed and equiped with proper training like, NC3 Defensive Driving, and Driving Safety Awareness. They handle your cargo with care and respect.",
  },
  {
    icon: Map,
    title: "Province-wide Coverage",
    body: "From Balabac in the south to Busuanga in the north, we serve every municipality in the province.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Cargo Handling",
    body: "Strict loading protocols, secured tie-downs, and careful handling keep your goods protected on every route.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    body: "Optimized routing and disciplined scheduling mean your cargo moves on your timeline — not ours.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Satisfaction",
    body: "A dedicated coordinator handles your account from booking to billing, with clear updates at every step.",
  },
];

/* ------------------------------------------------------------------ */
/* Statistics                                                          */
/* ------------------------------------------------------------------ */
export const stats = [
  { value: 6, suffix: "", label: "Business partners served" },
  { value: 20, suffix: "+", label: "Trucks in fleet" },
  { value: 5000, suffix: "+", label: "Tons of cargo moved" },
  { value: 24, suffix: "/7", label: "Dispatch & support" },
];

/* ------------------------------------------------------------------ */
/* Fleet — items with `image` show a photo; otherwise `icon` is used.  */
/* ------------------------------------------------------------------ */
export type FleetItem = {
  title: string;
  body: string;
  tag: string;
  image?: string;
  icon?: LucideIcon;
  isNew?: boolean;
};

export const fleet: FleetItem[] = [
  {
    title: "Closed-Van Trucks",
    body: "Weather-sealed vans for retail goods, appliances, documents, and cargo that needs full protection from the elements.",
    tag: "AUV, 4W, 6W",
    image: "/closedvan.png",
  },
  {
    title: "Wing Vans & Long-Haul Units",
    body: "High-capacity units for full-truckload movements between Puerto Princesa and the far north or south of the province.",
    tag: "6W Closed Van, 6W Forward",
    image: "/wingvans.png",
  },
  {
    title: "6W Reefer Truck",
    body: "Ready to serve refrigerated or chilled cargo — temperature-controlled hauling for seafood, meat, produce, dairy, and other perishables anywhere in the province.",
    tag: "Refrigerated / Chilled",
    image: "/6w-truck.png",
  },
  {
    title: "Dropside & Flatbed Trucks",
    body: "Flexible open-bed hauling for construction materials, equipment, palletized freight, and oversized loads.",
    tag: "10 Wheeler",
    image: "/flatbed.png",
  },
  {
    title: "Tractor Head",
    body: "Prime movers with 20-footer and 40-footer chassis for containerized cargo — straight from the port to any point in Palawan.",
    tag: "20 ft & 40 ft chassis",
    image: "/tractorhead.png",
  },
  {
    title: "Material Handling Equipment (Forklift)",
    body: "Forklift units from 1.5 to 2 tons and 10 to 15 tons capacity for safe loading, unloading, and positioning of heavy cargo at origin and destination.",
    tag: "1.5–2 t & 10–15 t capacity",
    image: "/forklift.png",
  },
  {
    title: "Heavy Duty Mobile Cranes",
    body: "80-ton capacity mobile cranes for major lifts — machinery, structural steel, containers, and project cargo, operated by trained and certified crews.",
    tag: "80 t capacity",
    image: "/crane.png",
  },
  {
    title: "Boom Trucks",
    body: "5 and 10 ton boom trucks for lift-and-shift jobs — equipment installation, utility work, and deliveries that need on-board lifting power.",
    tag: "5 t & 10 t capacity",
    image: "/boom.png",
  },
  {
    title: "Pallet Trucks",
    body: "Manual and heavy-duty pallet jacks for fast, careful movement of palletized goods inside warehouses and our cross-dock staging areas.",
    tag: "Warehouse & cross-dock",
    image: "/pallet.png",
  },
];

/* ------------------------------------------------------------------ */
/* Process timeline                                                    */
/* ------------------------------------------------------------------ */
export const processSteps = [
  {
    icon: ClipboardCheck,
    title: "Request a Quote",
    body: "Tell us what you're moving, where it's going, and when it needs to arrive. We respond within the day.",
  },
  {
    icon: CalendarClock,
    title: "Schedule the Haul",
    body: "We confirm pricing, assign the right truck for your cargo, and lock in your pickup window.",
  },
  {
    icon: Truck,
    title: "We Move Your Cargo",
    body: "Your goods are loaded, secured, and driven by an experienced crew with updates along the route.",
  },
  {
    icon: PackageCheck,
    title: "Delivered & Confirmed",
    body: "Cargo is received, checked, and signed off at destination. Proof of delivery (POD) goes straight to you.",
  },
];

/* ------------------------------------------------------------------ */
/* Testimonials — real business partners                              */
/* ------------------------------------------------------------------ */
export const testimonials = [
  {
    quote:
      "Our appliance and electronics shipments move across Palawan on a strict schedule, and YVES has never let a delivery window slip.",
    name: "Panasonic",
    role: "Distribution & Appliances Partner",
  },
  {
    quote:
      "Cold chain integrity is non-negotiable for us. Their reefer trucks keep our refrigerated cargo at the right temperature from pickup to drop-off, every trip.",
    name: "SOI/2GO",
    role: "Refrigerated Cargo Partner",
  },
  {
    quote:
      "YVES coordinates closely with our RMCG routes, and the communication before and during every haul makes planning around them easy.",
    name: "YM Cargo",
    role: "RMCG Partner",
  },
  {
    quote:
      "As a logistics partner, we need a trucking provider that's as reliable as we are. YVES has consistently delivered on that across the province.",
    name: "Fast Logistics",
    role: "Logistics Partner",
  },
  {
    quote:
      "Placeholder quote — swap in this partner's real feedback once received.",
    name: "Business Partner",
    role: "Placeholder — pending client details",
  },
  {
    quote:
      "Their dispatch team is responsive around the clock, which matters when our routes change on short notice.",
    name: "Yellow-X",
    role: "Logistics Partner",
  },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
export const faqs = [
  {
    q: "Which areas in Palawan do you serve?",
    a: "We operate across the entire province — all municipalities from Balabac in the south to Busuanga in the north, including Puerto Princesa City, El Nido, Coron, Brooke's Point, and the island municipalities via connecting transport arrangements.",
  },
  {
    q: "What types of cargo do you transport?",
    a: "General merchandise, retail and grocery goods, construction materials, agricultural products, equipment, appliances, and palletized, FMCG, refrigerated container, commercial freight. Contact us for special cargo requirements.",
  },
  {
    q: "How do I get a price quote?",
    a: "Send us the cargo details (type, weight or volume, pickup point, and destination) through our contact form, email, or phone. We typically respond with a quotation within the same business day.",
  },
  {
    q: "Do you offer scheduled or recurring hauling?",
    a: "Yes. Many of our clients run weekly or monthly scheduled routes. We reserve trucks and crews in advance so recurring shipments always move on time.",
  },
  {
    q: "Is my cargo insured during transport?",
    a: "We follow strict cargo-handling and securing protocols on every trip, and cargo insurance options can be arranged depending on shipment value. Ask our team for details when booking.",
  },
  {
    q: "How far in advance should I book?",
    a: "For standard deliveries, 1–2 days ahead is ideal. For full-truckload or long-haul trips to the far north or south, we recommend booking 3–5 days in advance.",
  },
];

/* ------------------------------------------------------------------ */
/* Corporate values (About page)                                       */
/* ------------------------------------------------------------------ */
export const values = [
  {
    icon: Handshake,
    title: "Integrity",
    body: "We quote honestly, bill transparently, and do exactly what we commit to — no surprises.",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    body: "Safety of our people, our cargo, and everyone on the road comes before any deadline.",
  },
  {
    icon: Clock,
    title: "Reliability",
    body: "Schedules are promises. We plan every route so your cargo arrives when we said it would.",
  },
  {
    icon: Award,
    title: "Excellence",
    body: "From vehicle maintenance to customer service, we hold ourselves to a professional standard.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Commitment",
    body: "Every client gets a real point of contact, clear updates, and service built around their needs.",
  },
  {
    icon: Users,
    title: "Teamwork",
    body: "Drivers, dispatchers, and coordinators work as one crew to move every shipment safely, ontime, everytime.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "We keep improving — better routing, better tracking, better ways to serve.",
  },
];

/* ------------------------------------------------------------------ */
/* Contact details (placeholders — edit here to update site-wide)      */
/* ------------------------------------------------------------------ */
/* Live site URL — update this when the real domain is registered.
   Used by SEO metadata, sitemap.xml, robots.txt, and structured data. */
export const siteUrl = "https://yvestrucking.example.com";

/* Formspree form ID — create a free form at https://formspree.io,
   then paste the ID here (it looks like "xkgwqjzr"). While this is
   still the placeholder, the form runs in demo mode. */
export const formspreeId = "YOUR_FORM_ID";

export const contactInfo = {
  company: "YVES TRUCKING SERVICES",
  location: "Abueg Road Barangay Bancao-Bancao, Puerto Princesa City, Palawan, Philippines",
  email: "y888osia@gmail.com",
  mobile: "0917-565-6780",
  /* Facebook page — replace "YourPageName" with the page username
     (the part after facebook.com/). Both links update automatically. */
  facebook: "https://www.facebook.com/YourPageName",
  messenger: "https://m.me/YourPageName",
  hours: [
    { days: "Monday – Saturday", time: "7:00 AM – 6:00 PM" },
    { days: "Sunday & Holidays", time: "By appointment" },
  ],
  /* Google Maps embed centered on Puerto Princesa — replace `q` with the
     exact office address or plus code when available. */
  mapEmbedSrc:
    "https://www.google.com/maps?q=Abueg+Road+Barangay+Bancao-Bancao,+Puerto+Princesa+City,+Palawan,Philippines&z=13&output=embed",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];
