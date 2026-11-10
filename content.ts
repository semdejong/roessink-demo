/**
 * Roessink Schilderwerken, Enter — alleen geverifieerde feiten
 * (roessinkschilderwerken.nl + eigen Flickr-albums, opgehaald 10 nov 2026).
 * Opgericht september 1989 door Gé Roessink; sinds 2006 is zoon Jeroen eigenaar.
 * Gebruik "sinds 1989" — NIET "ruim 25 jaar" (achterhaald) en geen zelf berekend aantal jaren.
 * Geen KvK/BTW, geen vaste lijn (0547-…), geen werkplaatsadres, geen prijzen, geen reviews (staan niet op de site).
 */
export const content = {
  slug: "roessink-demo",

  company: {
    name: "Roessink Schilderwerken",
    shortName: "Roessink",
    owner: "Jeroen Roessink",
    founder: "Gé Roessink",
    founded: "september 1989",
    ownerSince: "2006",
    tagline: "Allround schildersbedrijf uit Enter, sinds 1989",
    description:
      "Roessink Schilderwerken uit Enter is gespecialiseerd in schilder- en renovatiewerken, voor particulieren en bedrijven: binnen- en buitenschilderwerk, beglazing, wand- en plafondafwerking, behang, vloercoatings en restauratie.",
    logo: "/img/logo/logo-roessink-schilderwerken.png",
    logoWidth: 208,
    logoHeight: 65,
    city: "Enter",
    region: "Twente",
  },

  colors: {
    primary: "#1D1D1B",
    primaryForeground: "#FFFFFF",
    accent: "#2A62C5",
    background: "#F6F4EF",
    foreground: "#1D1D1B",
    muted: "#ECE8DF",
    lood: "#1D1D1B",
    papier: "#F6F4EF",
    kalk: "#ECE8DF",
    wit: "#FFFFFF",
    // glas — uit de regenboog in het logo
    rood: "#E71522",
    oranje: "#ED631C",
    geel: "#F6E513",
    groen: "#36AF30",
    blauw: "#2A62C5",
    violet: "#74428F",
    blauwText: "#1F4E9E",
  },

  seo: {
    title: "Roessink Schilderwerken | Schildersbedrijf in Enter, Twente",
    description:
      "Binnen- en buitenschilderwerk, beglazing, wandafwerking en vloercoatings uit Enter. Familiebedrijf sinds 1989. Bel 06-22934958.",
    lang: "nl",
  },

  nav: [
    {
      label: "Wat we doen",
      href: "/wat-we-doen",
      children: [
        { label: "Buitenschilderwerk", href: "/buitenschilderwerk" },
        { label: "Binnenschilderwerk", href: "/binnenschilderwerk" },
        { label: "Beglazing", href: "/beglazing" },
        { label: "Wandafwerking", href: "/wandafwerking" },
        { label: "Vloercoatings", href: "/vloercoatings" },
        { label: "Advies", href: "/advies" },
      ],
    },
    { label: "Projecten", href: "/projecten" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    title: "Schilderwerk en glas uit Enter — sinds 1989.",
    subtitle:
      "Roessink Schilderwerken is een allround schildersbedrijf voor particulieren, bedrijven en monumentale panden in Twente: schilderwerk binnen en buiten, beglazing, wand- en plafondafwerking, vloercoatings en restauratie.",
    primaryCta: { label: "Bel 06-22934958", href: "tel:+31622934958" },
    secondaryCta: { label: "Offerte aanvragen", href: "/offerte" },
    image: "/img/uitgelicht/trappenhuis-glas-in-lood.jpg",
    highlights: ["Familiebedrijf sinds 1989", "Aangesloten bij Onderhoud NL", "Erkend Schilder^sCOOL-leerbedrijf"],
  },

  services: {
    title: "Wat we doen",
    intro:
      "Schilderwerken, in het bijzonder als het om een renovatie gaat, staan zelden op zichzelf. Daarom bieden wij verschillende diensten aan, in combinatie af te nemen als totaalpakket.",
    items: [
      { icon: "", title: "Buitenschilderwerk", text: "Uw visitekaartje naar de buitenwereld.", href: "/buitenschilderwerk" },
      { icon: "", title: "Binnenschilderwerk", text: "De basis van uw interieur.", href: "/binnenschilderwerk" },
      { icon: "", title: "Beglazing", text: "Bepalend voor de sfeer van uw woning of pand.", href: "/beglazing" },
      { icon: "", title: "Wandafwerking", text: "Uw eigen stijl creëren.", href: "/wandafwerking" },
      { icon: "", title: "Vloercoatings", text: "Chemisch bestendig en eenvoudig te reinigen.", href: "/vloercoatings" },
      { icon: "", title: "Advies", text: "Advies op maat waarin uw wensen centraal staan.", href: "/advies" },
    ],
  },

  about: {
    title: "Over ons",
    text: [
      "Roessink Schilderwerken, gevestigd aan de Dorpsstraat in Enter, is in september 1989 opgericht door Gé Roessink. Sinds 2006 is zoon Jeroen eigenaar.",
      "Het bedrijf heeft zich in de loop der jaren weten te ontwikkelen tot een allround schildersbedrijf dat garant staat voor kwaliteit, service en een goede werksfeer.",
    ],
    image: "/img/team/bussen-roessink-enter.jpg",
    stats: [] as { value: string; label: string }[],
  },

  reviews: {
    title: "",
    items: [] as { name: string; text: string; rating: number }[],
  },

  contact: {
    title: "Contact",
    text: "Bij Roessink Schilderwerken staan we graag voor u klaar om al uw vragen te beantwoorden. We luisteren naar uw wensen en adviseren op basis van onze ervaring.",
    owner: "Jeroen Roessink",
    phone: "06-22934958",
    phoneHref: "tel:+31622934958",
    email: "info@roessinkschilderwerken.nl",
    street: "Dorpsstraat 23A",
    postcode: "7468 CC",
    place: "Enter",
    address: "Dorpsstraat 23A, 7468 CC Enter",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dorpsstraat+23A+7468+CC+Enter",
    openingHours: [] as string[],
    whatsapp: "",
    cta: { label: "Bel 06-22934958", href: "tel:+31622934958" },
  },

  footer: {
    kvk: "",
    socials: [
      { label: "Facebook", href: "https://www.facebook.com/roessinkschilderwerken" },
      { label: "Flickr", href: "https://www.flickr.com/photos/roessinkschilderwerken/albums" },
    ],
  },
};

export type Content = typeof content;
