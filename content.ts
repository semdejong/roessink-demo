/**
 * Roessink Schilderwerken, Enter — alleen geverifieerde feiten
 * (roessinkschilderwerken.nl + eigen Flickr-albums, opgehaald 10 nov 2026).
 * Opgericht september 1989 door Gé Roessink; sinds 2006 is zoon Jeroen eigenaar.
 * Gebruik "sinds 1989" — geen berekend aantal jaren.
 * Geen KvK/BTW, geen vaste lijn, geen werkplaatsadres, geen prijzen, geen reviews.
 */
export const tones = {
  blauw: { full: "#2A62C5", tint: "#D9E0E9", onFull: "#FFFFFF" },
  oranje: { full: "#ED631C", tint: "#F5E0D1", onFull: "#1D1D1B" },
  groen: { full: "#36AF30", tint: "#DBEAD4", onFull: "#1D1D1B" },
  violet: { full: "#74428F", tint: "#E4DBE2", onFull: "#FFFFFF" },
  rood: { full: "#E71522", tint: "#F4D5D2", onFull: "#FFFFFF" },
  geel: { full: "#F6E513", tint: "#F6F2D0", onFull: "#1D1D1B" },
} as const;

export type Tone = keyof typeof tones;

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
    history:
      "Roessink Schilderwerken, gevestigd aan de Dorpsstraat in Enter, is in september 1989 opgericht door Gé Roessink. Sinds 2006 is zoon Jeroen eigenaar. Het bedrijf heeft zich in de loop der jaren weten te ontwikkelen tot een allround schildersbedrijf dat garant staat voor kwaliteit, service en een goede werksfeer.",
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
    rood: "#E71522",
    oranje: "#ED631C",
    geel: "#F6E513",
    groen: "#36AF30",
    blauw: "#2A62C5",
    violet: "#74428F",
    blauwText: "#1F4E9E",
    ink: "#55524C",
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
      "Allround schildersbedrijf voor particulieren, bedrijven en monumentale panden in Enter en de regio Twente. Schilderwerk binnen en buiten, beglazing, wand- en plafondafwerking, vloercoatings en restauratie.",
    primaryCta: { label: "Bel 06-22934958", href: "tel:+31622934958" },
    secondaryCta: { label: "Offerte aanvragen", href: "/offerte" },
    image: "/img/uitgelicht/trappenhuis-glas-in-lood.jpg",
    imageAlt: "Trappenhuis met glas-in-lood toplichten",
    imageWidth: 1024,
    imageHeight: 680,
  },

  facts: [
    "Sinds 1989 in Enter",
    "Opgericht door Gé, sinds 2006 Jeroen",
    "Aangesloten bij Onderhoud NL",
    "Erkend Schilder^sCOOL-leerbedrijf",
  ],

  services: {
    title: "Wat we doen",
    intro:
      "Schilderwerken, in het bijzonder als het om een renovatie gaat, staan zelden op zichzelf. Daarom bieden wij verschillende diensten aan, in combinatie af te nemen als totaalpakket.",
    extra:
      "Tot het werk behoren ook restauratiewerk, spuitwerk, muurschilderingen en werk aan monumentale panden.",
    items: [
      {
        title: "Buitenschilderwerk",
        text: "Uw visitekaartje naar de buitenwereld.",
        href: "/buitenschilderwerk",
        tone: "blauw" as Tone,
        paragraphs: [
          "Goed buitenschilderwerk is een investering die zich over de jaren terugbetaalt. Daar horen kennis en ervaring bij.",
          "U neemt een eigen kleurplan mee, of u vraagt ons om advies. Wij voeren het werk van A tot Z uit, met kwaliteit en duurzaamheid voor ogen, bestand tegen het Nederlandse weer: felle zon, heftige regen of vrieskou.",
          "Wij werken voor particulieren, bedrijven en monumentale panden in Enter en de regio Twente.",
        ],
        image: {
          src: "/img/diensten/buitenschilderwerk.jpg",
          width: 900,
          height: 378,
          alt: "Houten boogpoort met donkere deuren en lichte kozijnen",
        },
      },
      {
        title: "Binnenschilderwerk",
        text: "De basis van uw interieur.",
        href: "/binnenschilderwerk",
        tone: "oranje" as Tone,
        paragraphs: [
          "Binnenschilderwerk is meer dan een strakke afwerking en meer dan kleur. U kiest zelf de kleuren en de verf, of u vraagt ons om advies.",
          "Wij werken met de nieuwste technieken en de beste producten. Bij restauratie brengen diezelfde vaardigheden een object weer in oude glorie.",
        ],
        image: {
          src: "/img/diensten/binnenschilderwerk.jpg",
          width: 900,
          height: 380,
          alt: "Trap en woonkamer met lichte wanden en een schouw",
        },
      },
      {
        title: "Beglazing",
        text: "Bepalend voor de sfeer van uw woning of pand.",
        href: "/beglazing",
        tone: "groen" as Tone,
        paragraphs: [
          "Roessink is schilder én glaszetter. Beglazing is bepalend voor de sfeer van uw woning of pand.",
          "Bij restauratie komen veel glastaken in één project samen. Wij verzorgen het plaatsen van enkel en dubbel glas.",
          "Onder de merken waarmee wij werken, staat ook AGC.",
        ],
        image: {
          src: "/img/diensten/beglazing.jpg",
          width: 900,
          height: 378,
          alt: "Glas-in-lood ramen boven een trap, met kroonluchter",
        },
      },
      {
        title: "Wandafwerking",
        text: "Uw eigen stijl creëren.",
        href: "/wandafwerking",
        tone: "violet" as Tone,
        paragraphs: [
          "Sauzen, behangen, glasvlies of een structuur aanbrengen: zo krijgt een wand uw eigen stijl. Ook wand- en plafondafwerking en behangwerkzaamheden horen daarbij.",
          "Wij gebruiken alleen materialen van bewezen kwaliteit.",
        ],
      },
      {
        title: "Vloercoatings",
        text: "Chemisch bestendig en eenvoudig te reinigen.",
        href: "/vloercoatings",
        tone: "rood" as Tone,
        paragraphs: [
          "Een vloercoating is chemisch bestendig en eenvoudig te reinigen. Zij is geschikt voor woningen en voor bedrijven.",
          "U neemt de coating af als onderdeel van een opdracht, of als zelfstandige dienst. Verschillende vloeren vragen om verschillende coatings. Als onderdeel van een renovatie komt een coating goed tot zijn recht.",
        ],
      },
      {
        title: "Advies",
        text: "Advies op maat waarin uw wensen centraal staan.",
        href: "/advies",
        tone: "geel" as Tone,
        paragraphs: [
          "Wij geven verftechnisch advies, in overleg met de verfleverancier, en kleuradvies. Zo voorkomt u de verkeerde verf, of kleuren die niet bij elkaar passen.",
          "Wij adviseren wat en hoe er geschilderd moet worden. We luisteren naar uw wensen en adviseren op basis van onze ervaring.",
        ],
      },
    ],
  },

  glassTypes: [
    {
      id: "isolatieglas",
      title: "Isolatieglas",
      text: "Energie besparen met isolatieglas.",
      texture: "tex-iso",
    },
    {
      id: "floatglas",
      title: "Floatglas",
      text: "Enkelglas, ook floatglas genoemd.",
      texture: "tex-float",
    },
    {
      id: "sierglas",
      title: "Sier- en figuurglas",
      text: "Herstellen, weer als nieuw, of een geheel nieuw ontwerp.",
      texture: "tex-sier",
    },
    {
      id: "glas-in-lood",
      title: "Glas-in-lood",
      text: "Glas-in-lood in woning of pand.",
      texture: "tex-lood",
    },
    {
      id: "monumentenglas",
      title: "Monumentenglas",
      text: "Voor werk aan monumentale panden.",
      texture: "tex-monument",
    },
    {
      id: "inbraakwerend",
      title: "Inbraakwerend glas",
      text: "Een veiliger huis met inbraakwerend glas.",
      texture: "tex-inbraak",
    },
    {
      id: "brandvertragend",
      title: "Brandvertragend glas",
      text: "Ook brandvertragend glas plaatsen wij.",
      texture: "tex-brand",
    },
  ],

  werkzaamheden: [
    "Binnen- en buitenschilderwerk bij particulieren, bedrijven en monumentale panden",
    "Plaatsen van enkel en dubbel glas",
    "Wand- en plafondafwerking",
    "Behangwerkzaamheden",
    "Restauratie",
    "Verftechnische adviezen",
    "Kleuradvisering",
    "Muurschilderingen",
  ],

  projects: [
    {
      slug: "villa-enschede",
      title: "Villa Enschede",
      caption: "Villa Enschede — Buitenschilderwerk",
      visible: "Op de foto's: een bakstenen villa met donkere kozijnen en luiken.",
      small: false,
      images: [
        {
          src: "/img/projecten/villa-enschede-1.jpg",
          width: 1024,
          height: 768,
          alt: "Bakstenen villa in Enschede met donkere dakpannen en lichte kozijnen",
        },
        {
          src: "/img/projecten/villa-enschede-2.jpg",
          width: 1023,
          height: 682,
          alt: "Bakstenen villa in Enschede met donkere luiken en een klinkeroprit",
        },
        {
          src: "/img/projecten/villa-enschede-3.jpg",
          width: 1023,
          height: 682,
          alt: "Bakstenen villa in Enschede met donkere luiken en een boogdeur",
        },
        {
          src: "/img/projecten/villa-enschede-4.jpg",
          width: 1023,
          height: 682,
          alt: "Zijgevel van een bakstenen villa in Enschede met donkere luiken",
        },
      ],
    },
    {
      slug: "villa-leersum",
      title: "Villa Leersum",
      caption: "Villa Leersum — Buitenschilderwerk",
      visible: "Op de foto's: een lichte villa met donkere luiken.",
      small: false,
      images: [
        {
          src: "/img/projecten/villa-leersum-1.jpg",
          width: 1023,
          height: 682,
          alt: "Lichte villa in Leersum met donkere luiken, achter een heg",
        },
        {
          src: "/img/projecten/villa-leersum-2.jpg",
          width: 1023,
          height: 682,
          alt: "Achterzijde van een lichte villa in Leersum met een balkon en donkere puien",
        },
        {
          src: "/img/projecten/villa-leersum-3.jpg",
          width: 1024,
          height: 768,
          alt: "Lichte villa in Leersum achter een hek, met donkere luiken",
        },
        {
          src: "/img/projecten/villa-leersum-4.jpg",
          width: 1024,
          height: 768,
          alt: "Lichte villa in Leersum met donkere luiken, vanaf de tuin",
        },
        {
          src: "/img/projecten/villa-leersum-5.jpg",
          width: 1024,
          height: 768,
          alt: "Voorgevel van een lichte villa in Leersum met donkere luiken",
        },
      ],
    },
    {
      slug: "villa-enter",
      title: "Villa Enter",
      caption: "Villa Enter — Buitenschilderwerk",
      visible: "Op de foto's: een villa met een rieten kap.",
      small: true,
      images: [
        {
          src: "/img/projecten/villa-enter-1.jpg",
          width: 390,
          height: 260,
          alt: "Villa in Enter met een rieten kap, gezien vanaf de oprit",
        },
        {
          src: "/img/projecten/villa-enter-2.jpg",
          width: 390,
          height: 260,
          alt: "Hoek van een bakstenen villa in Enter met een rieten kap en donkere luiken",
        },
      ],
    },
  ],

  about: {
    title: "Over ons",
    text: [
      "Roessink Schilderwerken, gevestigd aan de Dorpsstraat in Enter, is in september 1989 opgericht door Gé Roessink. Sinds 2006 is zoon Jeroen eigenaar.",
      "Het bedrijf heeft zich in de loop der jaren weten te ontwikkelen tot een allround schildersbedrijf dat garant staat voor kwaliteit, service en een goede werksfeer.",
    ],
    image: "/img/team/bussen-roessink-enter.jpg",
    imageWidth: 655,
    imageHeight: 400,
    imageAlt: "Twee zwarte bussen van Roessink Schilderwerken voor een pand in Enter",
    sideImage: "/img/team/bus-regenboog.jpg",
    sideWidth: 720,
    sideHeight: 960,
    sideAlt: "Zwarte bus van Roessink Schilderwerken",
    stats: [] as { value: string; label: string }[],
  },

  memberships: {
    onderhoud: {
      id: "onderhoud-nl",
      title: "Aangesloten bij Onderhoud NL",
      text: "Koninklijke OnderhoudNL is de ondernemersorganisatie voor vastgoedonderhoud, renovatie, restauratie, schilderen en beglazing.",
      logo: "/img/keurmerken/onderhoud-nl.png",
      logoAlt: "Onderhoud NL",
      width: 183,
      height: 97,
    },
    schilderscool: {
      id: "schilderscool",
      title: "Erkend Schilder^sCOOL-leerbedrijf",
      text: "Schilder^sCOOL is het opleidingsbedrijf van en voor de bedrijfstak schilderen en onderhoud.",
      logo: "/img/keurmerken/schilderscool-lood.png",
      logoAlt: "Schilder^sCOOL",
      width: 183,
      height: 97,
    },
  },

  brands: [
    { name: "Sikkens", src: "/img/merken/sikkens.png", width: 150, height: 83 },
    { name: "Pure & Original", src: "/img/merken/pure-original.png", width: 150, height: 83 },
    { name: "AGC", src: "/img/merken/agc-groep.png", width: 150, height: 83 },
    { name: "Intervos", src: "/img/merken/intervos.png", width: 150, height: 83 },
    { name: "Sigma", src: "/img/merken/sigma.png", width: 150, height: 83 },
    { name: "Trimetal", src: "/img/merken/trimetal.png", width: 150, height: 83 },
  ],

  reviews: {
    title: "",
    items: [] as { name: string; text: string; rating: number }[],
  },

  faq: [
    {
      q: "Kunt u ook glas plaatsen?",
      a: "Ja. Wij plaatsen enkel en dubbel glas. Tot het glaswerk behoren ook isolatieglas, floatglas, sier- en figuurglas, glas-in-lood, monumentenglas, inbraakwerend glas en brandvertragend glas.",
    },
    {
      q: "Werkt u ook voor bedrijven?",
      a: "Ja. Wij werken voor particulieren en voor bedrijven, en ook aan monumentale panden.",
    },
    {
      q: "Werkt u aan monumentale panden?",
      a: "Ja. Restauratie en monumentenglas behoren tot het werk. Bij restauratie komen veel glastaken in één project samen.",
    },
    {
      q: "Kan ik kleuradvies krijgen?",
      a: "Ja. Wij geven kleuradvies en verftechnisch advies, in overleg met de verfleverancier.",
    },
    {
      q: "Is een vloercoating los af te nemen?",
      a: "Ja. Een vloercoating neemt u af als onderdeel van een opdracht, of als zelfstandige dienst.",
    },
  ],

  contact: {
    title: "Contact",
    text: "Bij Roessink Schilderwerken staan we graag voor u klaar om al uw vragen te beantwoorden. We luisteren naar uw wensen en adviseren op basis van onze ervaring.",
    owner: "Jeroen Roessink",
    phone: "06-22934958",
    phoneDisplay: "06-22934958",
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

  offerte: {
    subject: "Offerteaanvraag via website",
    werk: [
      "Buitenschilderwerk",
      "Binnenschilderwerk",
      "Beglazing",
      "Wandafwerking",
      "Behang",
      "Vloercoating",
      "Restauratie",
      "Advies",
      "Anders",
    ],
  },

  footer: {
    kvk: "",
    socials: [
      { label: "Facebook", href: "https://www.facebook.com/roessinkschilderwerken" },
      { label: "Flickr", href: "https://www.flickr.com/photos/roessinkschilderwerken/albums" },
    ],
  },

  voorWie: [
    {
      title: "Particulieren",
      text: "Schilderwerk, beglazing en wandafwerking voor uw woning, in Enter en de regio Twente.",
      tone: "blauw" as Tone,
    },
    {
      title: "Bedrijven",
      text: "Zakelijk werk binnen en buiten: schilderwerk, glas, wanden en vloercoatings.",
      tone: "oranje" as Tone,
    },
    {
      title: "Monumentale panden",
      text: "Restauratiewerk en monumentenglas horen bij het werk aan monumentale panden.",
      tone: "groen" as Tone,
    },
  ],

  weer: [
    { title: "Felle zon", text: "Het buitenschilderwerk moet daartegen bestand zijn." },
    { title: "Heftige regen", text: "Kwaliteit en duurzaamheid horen bij het Nederlandse weer." },
    { title: "Vrieskou", text: "Het werk wordt van A tot Z met die omstandigheden voor ogen uitgevoerd." },
  ],
};

export type Content = typeof content;
export type ServiceItem = (typeof content.services.items)[number];
export type Project = (typeof content.projects)[number];
export type GalleryImage = Project["images"][number];
