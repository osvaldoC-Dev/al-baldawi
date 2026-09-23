// All content below is drawn from publicly available Al Badawi sources
// (albadawinyc.com, its ordering pages, and published press coverage).
// Nothing here is invented.

export const ORDER_BROOKLYN = "https://albadawiatlantic.hrpos.heartland.us/";
export const ORDER_UES = "https://albadawiues.hrpos.heartland.us/menu";
export const MENU_URL = "https://albadawiatlantic.hrpos.heartland.us/menu";
export const CATERING_STORE = "https://www.albadawinyc.com/catering-store-v2";
export const CONTACT_URL = "https://www.albadawinyc.com/contact/";
export const INSTAGRAM = "https://www.instagram.com/albadawi.nyc/?hl=en";
export const FACEBOOK = "https://m.facebook.com/albadawi.nyc/?ref=page_internal";

export type NavItem = { label: string; href: string; external?: boolean };

export const navItems: NavItem[] = [
  { label: "Menu", href: MENU_URL, external: true },
  { label: "Our Story", href: "#story" },
  { label: "Locations", href: "#locations" },
  { label: "Catering", href: "#catering" },
  { label: "Press", href: "#press" },
  { label: "Contact", href: CONTACT_URL, external: true },
];

export type Dish = {
  name: string;
  transliteration?: string;
  description: string;
  source: string;
};

// Dish descriptions paraphrase published reporting from The New Yorker,
// Grub Street and The Infatuation. No prices are listed because current
// per-dish prices could not be verified.
export const dishes = [
  {
    name: "Msakhan",
    description:
      "A round flatbread layered with sumac-tart onions, topped with half a chicken, parsley, slivered almonds and pine nuts — the dish the Palestinian table is built around.",
    source: "The New Yorker",
  },
  {
    name: "Mansaf",
    description:
      "A lamb shank simmered in a tangy fermented-yogurt sauce, set over basmati rice and an expanse of shrak bread, served with a bowl of extra sauce on the side.",
    source: "The New Yorker",
  },
  {
    name: "Mezze Filistini",
    description:
      "House-made hummus, baba ghanoush, muhammarah, tabbouleh, salata tahina and labneh, brought to the table together.",
    source: "The New Yorker",
  },
  {
    name: "Fattat Jaj",
    description:
      "Shredded chicken folded with slivered almonds and minted yogurt over rice, with toasted bread underneath.",
    source: "Grub Street",
  },
  {
    name: "Sajj Flatbreads",
    description:
      "Wafer-thin wheels of bread from the domed oven, finished with toppings from crushed pistachio to shawarma to cheese.",
    source: "Grub Street",
  },
  {
    name: "Ouzi Lamb",
    description:
      "Lamb served over a pile of rice with almonds, peas and herbs — one of the house's larger, shareable platters.",
    source: "The Infatuation",
  },
] as const satisfies readonly Dish[];

export type Press = { outlet: string; headline: string; url: string };

export const press: Press[] = [
  {
    outlet: "The New Yorker",
    headline: "At al Badawi, Bread Is Life",
    url: "https://www.newyorker.com/magazine/2022/03/28/at-al-badawi-bread-is-life",
  },
  {
    outlet: "Eater NY",
    headline: "The 38 Best Restaurants in New York City",
    url: "https://ny.eater.com/maps/best-new-york-restaurants-38-map",
  },
  {
    outlet: "Grub Street",
    headline: "Beautiful Food and Bountiful Portions at Al Badawi",
    url: "https://www.grubstreet.com/article/al-badawi-nyc-restaurant-review.html",
  },
  {
    outlet: "The Infatuation",
    headline: "Albadawi — Brooklyn Heights, New York",
    url: "https://www.theinfatuation.com/new-york/reviews/albadawi",
  },
  {
    outlet: "Brooklyn Magazine",
    headline: "Albadawi is a new hotspot in Brooklyn Heights",
    url: "https://www.bkmag.com/2021/11/15/albadawi-is-a-new-hotspot-in-brooklyn-heights-from-the-owner-of-ayat/",
  },
];

export type Location = {
  name: string;
  neighborhood: string;
  addressLine: string;
  cityLine: string;
  phone: string;
  phoneHref: string;
  hours: string[];
  mapUrl: string;
  orderUrl: string;
  reserveUrl: string;
};

export const locations: Location[] = [
  {
    name: "Brooklyn Heights",
    neighborhood: "Atlantic Avenue",
    addressLine: "151 Atlantic Ave",
    cityLine: "Brooklyn, NY 11201",
    phone: "(718) 689 5888",
    phoneHref: "tel:+17186895888",
    hours: [
      "Monday – Thursday  11 AM – 10 PM",
      "Friday – Saturday  11 AM – 11 PM",
      "Sunday  11 AM – 10 PM",
    ],
    mapUrl: "https://maps.google.com/?cid=2336118820879574869",
    orderUrl: ORDER_BROOKLYN,
    reserveUrl: "https://resy.com/cities/ny/al-badawi",
  },
  {
    name: "Upper East Side",
    neighborhood: "Second Avenue",
    addressLine: "1725 2nd Ave",
    cityLine: "New York, NY 10128",
    phone: "(917) 388 2868",
    phoneHref: "tel:+19173882868",
    hours: [
      "Monday – Thursday  10:30 AM – 10 PM",
      "Friday – Saturday  10:30 AM – 11 PM",
      "Sunday  10:30 AM – 10 PM",
    ],
    mapUrl: "https://maps.google.com/?cid=9099137768595603373",
    orderUrl: ORDER_UES,
    reserveUrl: "https://resy.com/cities/ny/albadawi-upper-east-side",
  },
];
