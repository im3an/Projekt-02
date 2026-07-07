// ─────────────────────────────────────────────
//  CONTENT.TS: Edit everything here.
//  IOFDigital, Digitalagentur, Gummersbach.
// ─────────────────────────────────────────────

import gdataLogo from '../assets/images/partners/gdata.png';
import dellLogo from '../assets/images/partners/dell-emc.png';
import oracleLogo from '../assets/images/partners/oracle-partner-logo.webp';

export const brand = {
  name: "IOFDigital",
  suffix: "by ProConstruct",
  tagline: "Digital. Direkt. Durchdacht.",
  location: "Gummersbach",
  url: "/",
  clockit: "",
};

// Cal.com booking widget — popup triggered by every "Erstgespräch" CTA
export const booking = {
  calLink: "iofdigital/erstgesprach",
  namespace: "erstgesprach",
};

export const nav = {
  links: [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Produkte", href: "#produkte" },
    { label: "Partner", href: "#partner" },
  ],
  cta: {
    ghost: { label: "ClockIt", href: "https://clockit-308.netlify.app/" },
    primary: { label: "Termin buchen", href: "#kontakt" },
  },
};

export const hero = {
  badge: "Digitalagentur aus Gummersbach",
  headline: "Digitale Transformation,",
  subline: "die im Tagesgeschäft ankommt.",
  body: "damit kleine und mittelständische Unternehmen wirklich digital arbeiten. Ohne den Overhead einer Großagentur.",
  ctas: {
    primary: { label: "Erstgespräch vereinbaren", href: "#kontakt" },
    ghost: { label: "Unsere Leistungen", href: "#leistungen" },
  },
  proof: {
    label: "Vertraut von",
    clients: [
      "Frechdachs Jugendhilfe",
      "ProConstruct",
      "AluSystems",
    ],
  },
};

// ── Der Status quo / Unser Ansatz (ScrollText) ──────────────
export const narrative = {
  problem: {
    label: "Der Status quo",
    lines: ["Unternehmen wachsen.", "Prozesse","oft nicht."]
  },
  approach: {
    label: "Unser Ansatz",
    lines: ["Wir digitalisieren", "nicht nur Prozesse,", "sondern Ihren Alltag."]
  },
};

// ── Leistungen ──────────────────────────────────────────────
export const services = {
  label: "Leistungen",
  headline: "Was wir",
  headlineItalic: "möglich machen",
  body: "Vier Disziplinen, ein Anspruch: Digitalisierung, die zugänglich, menschlich und nachhaltig ist.",
  items: [
    {
      title: "IT & Microsoft 365",
      description:
        "Planung, Implementierung und Betrieb Ihrer Microsoft-Cloud: vom Tenant-Setup bis zur Sicherheit.",
      points: [
        "Microsoft 365 & Teams",
        "Entra ID & Conditional Access",
        "Azure, SharePoint & Exchange",
        "Windows 11 Deployment",
      ],
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    },
    {
      title: "Automatisierung & Power Platform",
      description:
        "Manuelle Abläufe werden zu intelligenten Workflows, die Zeit sparen und Fehler vermeiden.",
      points: [
        "Power Automate Flows",
        "Power Apps & Dataverse",
        "Excel-Automatisierung",
        "Genehmigungs-Workflows",
      ],
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    },
    {
      title: "Business Solutions",
      description:
        "Strategische Digitalisierung von der Prozessanalyse bis zur fertigen Umsetzung.",
      points: [
        "Prozessanalyse & -optimierung",
        "Ticket- & Anfragesysteme",
        "Dokumentenmanagement",
        "IT-Beratung & Onboarding",
      ],
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
    },
    {
      title: "Design & Multimedia",
      description:
        "Kreativleistungen als integraler Teil unserer Arbeit: von Corporate Identity bis Video.",
      points: [
        "Grafik & Corporate Identity",
        "Web- & Frontend-Design",
        "UX/UI-Konzepte",
        "Multimedia-Produktion",
      ],
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12.5" r="1.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
    },
  ],
};

// ── Eigenprodukte ───────────────────────────────────────────
export const products = {
  label: "Eigenprodukte",
  headline: "Was wir",
  headlineItalic: "selbst bauen",
  body: "Wir lösen Probleme, die wir bei unseren Kunden selbst erlebt haben: keine Theorie, sondern Antworten auf echte Schmerzpunkte.",
  items: [
    {
      name: "Hermes",
      tag: "KI-Ops-System",
      status: "In Betrieb",
      description:
        "Unser internes KI-Operationssystem. Läuft lokal, steuert die Agentur und gibt einem kleinen Team die Schlagkraft eines großen, inklusive des proaktiven Agenten Albert für Leads, E-Mails und Reports.",
      stack: ["DeepSeek API", "Claude API", "Telegram-Gateway"],
    },
    {
      name: "ClockIt",
      tag: "Zeiterfassung",
      status: "In Entwicklung",
      description:
        "Ein vollständiges, DSGVO- und ArbZG-konformes Zeiterfassungssystem für den deutschen Markt. Plug-and-Play-Hardware mit RFID-Terminals: die flexible Alternative zu DATEV oder Personio.",
      stack: ["RFID / NFC", "Raspberry Pi", "Rollenbasiert"],
    },
    {
      name: "Auf dem Asphalt",
      tag: "Doku-Serie",
      status: "In Produktion",
      description:
        "Eine Dokumentarserie über die deutsche Underground-Rap-Szene. Der Beweis, dass Technologie und Kreativität bei uns ein einheitlicher Prozess sind: vom Pitch bis zur Produktion.",
      stack: ["Storytelling", "Produktion", "Agent-Workflow"],
    },
  ],
};

// ── Kunden ──────────────────────────────────────────────────
export const clients = {
  label: "Kunden",
  headline: "Partnerschaften,",
  headlineItalic: "die bleiben",
  body: "Wir betreuen langfristig, nicht projektweise.",
  items: [
    {
      name: "Frechdachs Jugendhilfe GmbH",
      sector: "Sozialer Träger · Jugendhilfe",
      description:
        "Vollständige Betreuung der Microsoft-365-Infrastruktur: von der täglichen Administration bis zur strategischen Weiterentwicklung.",
      highlights: [
        "Teams-Umgebung mit Governance & Berechtigungen",
        "Entra ID inkl. Gast-Monitoring & Sign-in-Analyse",
        "Excel-Zeiterfassung für 6 IPM-Teams",
        "Jahres-Schichtplanung 2026 (12 Arbeitsmappen)",
        "Teams-basiertes Ticket-Routing (8 Kategorien)",
      ],
    },
    {
      name: "ProConstruct GmbH",
      sector: "Bau & Projektverwaltung",
      description:
        "Laufende Zusammenarbeit in IT-Beratung und digitalen Geschäftsprozessen.",
      highlights: [
        "IT-Beratung",
        "Digitale Geschäftsprozesse",
        "Langfristige Partnerschaft",
      ],
    },
  ],
};

// ── Partner ───────────────────────────────────────────────────
// logo: null = render the text wordmark fallback in Partners.astro.
export const partners = {
  label: "Partner",
  headline: "Starke Partner,",
  headlineItalic: "starke Lösungen",
  body: "Wir arbeiten mit Herstellern, denen wir vertrauen und die wir unseren Kunden empfehlen.",
  items: [
    { name: "G DATA", logo: gdataLogo },
    { name: "Dell", logo: dellLogo },
    { name: "Oracle", logo: oracleLogo },
  ],
};

// ── Google Bewertungen ──────────────────────────────────────
// MOCK DATA — shape mirrors the Google Places API (New) Review object
// (rating, text, authorAttribution.displayName, relativePublishTimeDescription)
// so swapping in a real build-time fetch later is a near drop-in.
// Reminder when wiring the real API: Places Details caps out at 5 reviews
// and has no server-side rating filter — filter out anything under 4 stars
// after fetching, same as this mock set already assumes.
export const googleReviews = {
  label: "Google Bewertungen",
  headline: "Vertrauen, das",
  headlineItalic: "sich zeigt",
  avgRating: 4.9,
  totalReviews: 27,
  profileUrl: "",
  items: [
    {
      rating: 5,
      text: "Schnelle Kommunikation, ehrliche Beratung und technisch top umgesetzt. Genau das, was wir gesucht haben.",
      authorAttribution: { displayName: "Sabine K." },
      relativePublishTimeDescription: "vor 3 Wochen",
    },
    {
      rating: 5,
      text: "Unsere Microsoft-365-Umgebung läuft seit Monaten reibungslos. IOFDigital denkt mit, nicht nur für uns.",
      authorAttribution: { displayName: "Markus R." },
      relativePublishTimeDescription: "vor 1 Monat",
    },
    {
      rating: 4,
      text: "Guter Service, klare Absprachen. Etwas Wartezeit bei der Terminvergabe, aber die Umsetzung war einwandfrei.",
      authorAttribution: { displayName: "Julia T." },
      relativePublishTimeDescription: "vor 2 Monaten",
    },
    {
      rating: 5,
      text: "Endlich ein IT-Partner, der auf Augenhöhe spricht und Lösungen liefert, die im Alltag wirklich funktionieren.",
      authorAttribution: { displayName: "Daniel W." },
      relativePublishTimeDescription: "vor 6 Wochen",
    },
    {
      rating: 5,
      text: "Von der ersten Beratung bis zur Umsetzung: professionell, direkt und immer erreichbar.",
      authorAttribution: { displayName: "Christine B." },
      relativePublishTimeDescription: "vor 2 Monaten",
    },
  ],
};

// ── Vision / Werte ──────────────────────────────────────────
export const vision = {
  label: "Vision",
  headline: "Digitalisierung muss",
  headlineItalic: "zugänglich sein",
  body: "Die meisten KMU's scheitern nicht am Willen zur Digitalisierung, sondern an Partnern, die auf Augenhöhe sprechen und pragmatische Lösungen liefern.",
  points: [
    {
      num: "01",
      title: "KI als Arbeitspartner",
      text: "Konkret und anwendbar im Tagesgeschäft: kein isoliertes Feature, kein Buzzword.",
    },
    {
      num: "02",
      title: "Produkte aus der Praxis",
      text: "Wir lösen Probleme, die wir bei Kunden selbst erlebt haben. Keine Theorie.",
    },
    {
      num: "03",
      title: "Kreativität trifft Technologie",
      text: "Design, Storytelling und Implementierung sind für uns ein einheitlicher Prozess.",
    },
  ],
};

// ── Kontakt (finaler CTA) ───────────────────────────────────
export const finalCta = {
  label: "Kontakt",
  headline: "Bereit für echte",
  headlineItalic: "Digitalisierung?",
  body: "Erzählen Sie uns von Ihrem Vorhaben. Wir melden uns mit einem konkreten ersten Schritt — keine Verkaufsschleife.",
  primary: { label: "Erstgespräch vereinbaren", href: "#kontakt" },
  links: [
    { label: "ClockIt", href: "https://clockit-308.netlify.app/" },
    { label: "Vertex", href: "https://vertex.de/" },
    { label: "ProConstruct", href: "http://proconstruct.de/" },
  ],
  location: "Gummersbach, Deutschland",
};

export const footer = {
  slogan: "Digital. Direkt. Durchdacht.",
  links: [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Produkte", href: "#produkte" },
    { label: "Partner", href: "#partner" },
    { label: "ClockIt", href: "https://clockit-308.netlify.app/" },
  ],
  copy: "Digital. Direkt. Durchdacht.",
};
