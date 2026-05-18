import {
  BadgeCheck,
  CalendarCheck,
  ChefHat,
  Gift,
  GlassWater,
  HeartHandshake,
  MapPin,
  PartyPopper,
  Phone,
  Sparkles,
  Star,
  Utensils,
} from "lucide-react";

export const siteConfig = {
  name: "Funmita Catering",
  url: "https://funmitacatering.com",
  logo: "/FUNMITA CATERING Logo Design.png",
  description:
    "Premium Nigerian catering, small chops, signature Chapman, hampers, and event planning for memorable celebrations across Lagos and Ogun State.",
  phone: ["07065969591", "08182466432"],
  email: "funmitak1966@gmail.com",
  locations: [
    "14, Ogo-oluwa Street, Off Ajayi Road, Ogba, Lagos",
    "Haggai Estate 7, House 32, Tree of Life Road, Redemption City",
    "3, Ola Thomas, Shangisha",
  ],
};

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Menu", href: "#menu" },
  { label: "Our Work", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

export const stats = [
  { value: "500+", label: "Events served" },
  { value: "15+", label: "Years of hospitality" },
  { value: "3", label: "Service locations" },
  { value: "98%", label: "Client satisfaction" },
];

export const services = [
  {
    icon: Utensils,
    title: "Full-service catering",
    description:
      "Event menus, buffet service, plated meals, and professional setup for weddings, corporate events, and private celebrations.",
  },
  {
    icon: ChefHat,
    title: "Small chops and asun",
    description:
      "Fresh puff puff, samosas, spring rolls, meat pies, and perfectly seasoned asun prepared for crowd-friendly service.",
  },
  {
    icon: GlassWater,
    title: "Drinks and Chapman",
    description:
      "Signature Chapman, mocktails, fresh juices, and curated beverage stations that keep guests refreshed.",
  },
  {
    icon: Gift,
    title: "Hampers and packaging",
    description:
      "Beautiful food hampers and corporate gift packages with thoughtful presentation and reliable delivery options.",
  },
  {
    icon: CalendarCheck,
    title: "Event planning",
    description:
      "Coordination support, vendor alignment, menu planning, setup timelines, and day-of management for calm events.",
  },
  {
    icon: HeartHandshake,
    title: "Custom consultations",
    description:
      "Personalized planning for guest count, dietary needs, theme, budget, and service style.",
  },
];

export const menuHighlights = [
  "Small chops platters",
  "Spicy asun",
  "Party jollof rice",
  "Fried rice and chicken",
  "Signature Chapman",
  "Corporate hampers",
  "Custom celebration menus",
  "Premium beverage stations",
];

export const process = [
  {
    title: "Consult",
    description:
      "We clarify guest count, event style, location, preferences, dietary needs, and service expectations.",
  },
  {
    title: "Curate",
    description:
      "Your menu, staffing, beverage plan, packaging, and event flow are shaped into one practical proposal.",
  },
  {
    title: "Prepare",
    description:
      "The kitchen and operations team handle sourcing, prep, packaging, logistics, and presentation details.",
  },
  {
    title: "Serve",
    description:
      "Guests are welcomed with warm service, clean setup, polished food display, and attentive event support.",
  },
];

export const testimonials = [
  {
    quote:
      "The food, timing, and presentation were handled beautifully. Our guests kept asking who catered the reception.",
    name: "Adunni Adebayo",
    role: "Wedding reception, Lagos",
  },
  {
    quote:
      "Reliable, organized, and genuinely delicious. Funmita has become our first call for corporate hosting.",
    name: "Chinedu Okafor",
    role: "Corporate event, Victoria Island",
  },
  {
    quote:
      "They understood the assignment from the first consultation and made the celebration feel effortless.",
    name: "Folake Adesanya",
    role: "Family celebration, Ikoyi",
  },
];

export const packages = [
  {
    name: "Essentials",
    price: "Custom quote",
    description: "Focused catering for intimate events and family celebrations.",
    features: ["Menu consultation", "Small chops or mains", "Delivery coordination", "Basic setup guidance"],
  },
  {
    name: "Signature",
    price: "Most requested",
    description: "Full-service catering for weddings, corporate events, and milestone parties.",
    features: ["Custom menu planning", "Buffet or plated service", "Drinks and Chapman", "Service team support"],
    featured: true,
  },
  {
    name: "Celebration Plus",
    price: "Premium plan",
    description: "Catering, hampers, beverage service, and planning support in one package.",
    features: ["Event management", "Premium food display", "Corporate or guest hampers", "Vendor coordination"],
  },
];

export const faqs = [
  {
    question: "How far ahead should I book?",
    answer:
      "Two to three weeks is ideal for smaller events. Weddings, large parties, and corporate events are best booked one to three months ahead.",
  },
  {
    question: "Do you handle dietary preferences?",
    answer:
      "Yes. The team can plan vegetarian, low-spice, kid-friendly, and allergy-aware menu options when requirements are shared early.",
  },
  {
    question: "Can you provide only small chops, drinks, or hampers?",
    answer:
      "Yes. You can book standalone small chops, asun, Chapman, beverages, hampers, or full event catering depending on your occasion.",
  },
  {
    question: "Where do you serve?",
    answer:
      "Funmita Catering serves clients across Lagos and Ogun State, with locations in Ogba, Redemption City, and Shangisha.",
  },
];

export const trustSignals = [
  { icon: BadgeCheck, text: "Quality ingredients" },
  { icon: Sparkles, text: "Polished presentation" },
  { icon: PartyPopper, text: "Events of every scale" },
  { icon: MapPin, text: "Lagos and Ogun" },
  { icon: Phone, text: "Fast consultation" },
  { icon: Star, text: "Client-loved service" },
];

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.logo}`,
  description: siteConfig.description,
  telephone: siteConfig.phone[0],
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "14, Ogo-oluwa Street, Off Ajayi Road",
    addressLocality: "Ogba",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  areaServed: ["Lagos", "Ogun State"],
  servesCuisine: ["Nigerian", "Small chops", "Event catering"],
};
