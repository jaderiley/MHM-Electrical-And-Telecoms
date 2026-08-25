/* ============================================================
   CONFIG — edit ONLY this file per client
   REBUILT FROM THE CLIENT'S OWN SITE: https://mhm-electrical.co.za
   scraped 2026-08-25 by rebuild_from_existing.py
   placeholder (Pexels stock) image slots: NONE — all images are theirs
   ============================================================ */

const CONFIG = {

  // ─── BUSINESS INFO ───────────────────────────────────────
  business: {
    name:      "MHM Electrical and Telecoms",
    phone:     "+27685616656",
    whatsapp:  "+27685616656",
    address:   "Johannesburg",
    hours:     "Call us for hours",
    region:    "Gauteng",
    priceRange:"$$",
    suburbs: [
      "Midrand"
    ]
  },

  // ─── PAGE META / SEO ─────────────────────────────────────
  meta: {
    title:       "MHM Electrical and Telecoms — Electrician in Johannesburg",
    description: "MHM Electrical & Telecoms is a CIDB registered electrical contractor providing electrical installations, maintenance, solar PV, telecoms infrastructure,…",
    url:         ""  // Live domain — they already own mhm-electrical.co.za
  },

  // ─── BRANDING ────────────────────────────────────────────
  branding: {
    palette:  "volt",   // ember | security | forest | volt | tide
    ogImage:  "images/og.jpg"
  },

  // ─── CONTENT ─────────────────────────────────────────────
  content: {
    eyebrow:    "Electrician · Johannesburg & surrounds",
    heroTitle:  "Electrical faults, installations — <em>fixed properly.</em>",
    heroLead:   "MHM Electrical & Telecoms is a CIDB registered electrical contractor providing electrical installations, maintenance, solar PV, telecoms infrastructure, commercial and industrial projects across South Africa.",

    googleRating: "5",
    reviewsCount: "16",
    featuredQuote: "DN Dean Nell Dealer Principal, CMH Nissan",
    featuredQuoteAuthor: "— customer testimonial, their website",

    trustSignals: ["Electrical Trade Test", "MHM Service Divisions", "Electrical Installations…", "Solar & Backup Power…"],

    // ─── SERVICES (scraped from their own site) ────────────
    servicesTitle: "Electrical work done safely and correctly.",
    servicesLead:  "From a tripping breaker to a full rewire — we diagnose, repair and certify.",
    services: [
      {
        icon:  "bolt",
        title: "Electrical Trade Test",
        desc:  "Ask us about electrical trade test — call or WhatsApp for a quote."
      },
      {
        icon:  "wrench",
        title: "MHM Service Divisions",
        desc:  "Ask us about mhm service divisions — call or WhatsApp for a quote."
      },
      {
        icon:  "circuit",
        title: "Electrical Installations & Maintenance",
        desc:  "Ask us about electrical installations & maintenance — call or WhatsApp for a quote."
      },
      {
        icon:  "gauge",
        title: "Solar & Backup Power Systems",
        desc:  "Commissioning of solar PV, inverters, lithium batteries and backup systems with performance testing and reporting."
      },
      {
        icon:  "shield",
        title: "Project Management & Compliance",
        desc:  "Ask us about project management & compliance — call or WhatsApp for a quote."
      },
      {
        icon:  "hardhat",
        title: "Powering New Horizons, Protecting Our Planet",
        desc:  "To provide dependable electrical and telecoms solutions that keep businesses and communities connected, powered and safe."
      },
    ],

    // ─── WORK GALLERY ──────────────────────────────────────
    galleryTitle: "The work, up close.",
    galleryLead:  "A look at the kind of work we handle every week.",
    gallery: [
      {
        image:   "images/work-1.jpg",
        art:     "lockCylinderPick",
        fig:     "01 — Their work",
        title:   "From their own site",
        caption: "BYD Electric Vehicle Charging Station Installation"
      },
      {
        image:   "images/work-2.jpg",
        art:     "lockCylinderPick",
        fig:     "02 — Their work",
        title:   "From their own site",
        caption: "Essentials Elucidation Solar Backup"
      },
      {
        image:   "images/work-3.jpg",
        art:     "lockCylinderPick",
        fig:     "03 — Their work",
        title:   "From their own site",
        caption: "Umoyilanga Solar PV Plant Commissioning"
      },
      {
        image:   "images/work-4.jpg",
        art:     "lockCylinderPick",
        fig:     "04 — Their work",
        title:   "From their own site",
        caption: "Inscape Education Lighting Upgrade"
      },
      {
        image:   "images/work-5.jpg",
        art:     "lockCylinderPick",
        fig:     "05 — Their work",
        title:   "From their own site",
        caption: "Dark Child Engineering Solar Installation"
      },
    ],

    // ─── PHOTO BAND ────────────────────────────────────────
    band: {
      image: "images/band.jpg",
      alt:   "Azowel Projects Solar Installation",
      text:  "Certified Electrical & Telecoms Specialists"
    },

    // ─── AREAS BLURB ───────────────────────────────────────
    areasTitle: "Based in Johannesburg. Serving the wider area.",
    areasLead:  "We cover Midrand and surrounds.",  // areas as named on their own site
    areasNote:  "Not sure if your area is covered? Send us a message and we'll confirm.",

    // ─── WHY US (built from real, public facts) ────────────
    whyTitle: "Why people call us for electrical work.",
    why: [
      {
        title: "Local to Johannesburg",
        desc:  "Working across Midrand and the surrounding areas."
      },
      {
        title: "5★ on Google",
        desc:  "Rated 5 stars across 16 Google reviews — real customers, public record."
      },
      {
        title: "One team, full scope",
        desc:  "From electrical trade test to electrical installations & maintenance — one call covers it."
      },
    ],

    // ─── REVIEWS (only what their own site carries) ────────
    reviewsTitle: "What customers have said.",
    reviews: [
      {
        body:   "DN Dean Nell Dealer Principal, CMH Nissan",
        name:   "Customer testimonial",
        stars:  5,
        source: "their website"
      },
      {
        body:   "It is with great confidence and appreciation that we recommend MHM Electrical & Telecoms for their outstanding electrical services. We have had the privilege of working with them, and their service has been nothing short of exceptional.",
        name:   "Customer testimonial",
        stars:  5,
        source: "their website"
      },
      {
        body:   "★★★★★ DN Dean Nell Dealer Principal, CMH Nissan \"It is with great confidence and appreciation that we recommend MHM Electrical & Telecoms for their outstanding electrical services. We have had the privilege of working with them, and their service has been nothing short of exceptional.\" Read full story →",
        name:   "Customer testimonial",
        stars:  5,
        source: "their website"
      },
    ],

    // ─── FAQ (derived from their scraped services) ─────────
    faqTitle: "Common questions.",
    faqLead:  "What most people ask before booking.",
    faq: [
      {
        q: "Do you handle electrical trade test?",
        a: "Yes — electrical trade test is one of our core services. Get in touch and we'll advise on your job."
      },
      {
        q: "Do you handle mhm service divisions?",
        a: "Yes — mhm service divisions is one of our core services. Get in touch and we'll advise on your job."
      },
      {
        q: "Do you handle electrical installations & maintenance?",
        a: "Yes — electrical installations & maintenance is one of our core services. Get in touch and we'll advise on your job."
      },
      {
        q: "Which areas do you cover?",
        a: "We work across Midrand and the surrounding areas."
      },
      {
        q: "How do I get a quote?",
        a: "Call us on +27685616656 or send a WhatsApp message with the details and we'll come back to you with a quote."
      },
    ],

    // ─── CONTACT ───────────────────────────────────────────
    contactTitle: "Tell us what needs to be done.",
    contactLead:  "Describe what is happening and we will advise on the work and cost.",
    contactPlaceholder: "e.g. breaker tripping, need extra sockets, geyser not heating"
  }
};
