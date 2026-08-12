// ============================================================================
// BADAWAREHOUSE — Commercial & Industrial Property Platform
// ----------------------------------------------------------------------------
// This file is the single source of truth for every property on the website.
//
// The `images` array of each property currently holds PLACEHOLDER imagery.
// Replace each entry with the corresponding supplied photo (already ordered to
// match the four properties). Additional photos and video URLs can be appended
// to `images` / `videos` at any time without touching any component.
// ============================================================================

import taloja1 from "../assets/properties/taloja/taloja-1.jpeg";
import taloja2 from "../assets/properties/taloja/taloja-2.jpeg";
import taloja3 from "../assets/properties/taloja/taloja-3.jpeg";
import taloja4 from "../assets/properties/taloja/taloja-4.jpeg";
import taloja5 from "../assets/properties/taloja/taloja-5.jpeg";
import taloja6 from "../assets/properties/taloja/taloja-6.jpeg";
import taloja7 from "../assets/properties/taloja/taloja-7.jpeg";
import taloja8 from "../assets/properties/taloja/taloja-8.jpeg";
import taloja9 from "../assets/properties/taloja/taloja-9.jpeg";
import taloja10 from "../assets/properties/taloja/taloja-10.jpeg";
import taloja11 from "../assets/properties/taloja/taloja-11.jpeg";

import bhiwandi1 from "../assets/properties/bhiwandi/bhiwandi-01.jpeg";
import bhiwandi2 from "../assets/properties/bhiwandi/bhiwandi-02.jpeg";
import bhiwandi3 from "../assets/properties/bhiwandi/bhiwandi-03.jpeg";
import bhiwandi4 from "../assets/properties/bhiwandi/bhiwandi-04.jpeg";
import bhiwandi5 from "../assets/properties/bhiwandi/bhiwandi-05.jpeg";
import bhiwandi6 from "../assets/properties/bhiwandi/bhiwandi-06.jpeg";
import bhiwandiVideo1 from "../assets/properties/bhiwandi/bhiwandi-07.mp4";
import bhiwandiVideo2 from "../assets/properties/bhiwandi/bhiwandi-08.mp4";
import bhiwandiVideo3 from "../assets/properties/bhiwandi/bhiwandi-09.mp4";

import kansal1 from "../assets/properties/kansal/kansal-01.png";
import kansal2 from "../assets/properties/kansal/kansal-02.png";
import kansal3 from "../assets/properties/kansal/kansal-03.png";
import kansal4 from "../assets/properties/kansal/kansal-04.png";
import kansal5 from "../assets/properties/kansal/kansal-05.png";
import kansal6 from "../assets/properties/kansal/kansal-06.png";

import khopoli1 from "../assets/properties/khopoli/khopoli-01.jpeg";
import khopoli2 from "../assets/properties/khopoli/khopoli-02.jpeg";
import khopoli3 from "../assets/properties/khopoli/khopoli-03.jpeg";
import khopoli4 from "../assets/properties/khopoli/khopoli-04.jpeg";
import khopoli5 from "../assets/properties/khopoli/khopoli-05.jpeg";
import khopoli6 from "../assets/properties/khopoli/khopoli-06.jpeg";
import khopoli7 from "../assets/properties/khopoli/khopoli-07.jpeg";
import khopoli8 from "../assets/properties/khopoli/khopoli-08.jpeg";
import khopoli9 from "../assets/properties/khopoli/khopoli-09.jpeg";
import khopoli10 from "../assets/properties/khopoli/khopoli-10.jpeg";
import khopoli11 from "../assets/properties/khopoli/khopoli-11.jpeg";

export const BRAND = {
  name: "BADAWAREHOUSE",
  tagline: "Commercial & Industrial",
  phone: "+91 1234567890",
  email: "badawarehouse@gmail.com",
  address: "New Delhi, Delhi, India",
};

// Property types offered across the platform (also used by the search filters).
export const PROPERTY_TYPES = [
  "Warehouse",
  "Industrial Building",
  "Commercial Building",
  "Industrial Land",
];

// Availability options (also used by the search filters).
export const AVAILABILITY = ["For Rent", "For Sale"];

// ---------------------------------------------------------------------------
// Current inventory — four actual properties. Keep only the fields below that
// are known; anything unspecified is simply omitted and never fabricated.
// ---------------------------------------------------------------------------

export const PROPERTIES = [
  {
    id: "taloja-midc-rcc-building",
    title: "RCC Commercial Building",
    location: "Taloja MIDC",
    city: "Taloja",
    state: "Maharashtra",
    type: "Industrial Building",
    listingType: "For Rent",
    availabilityNote: "Long-term rental available",
    area: "23,000 sq ft",
    price: null, // rent not yet confirmed — no price is displayed
    description:
      "A newly constructed 23,000 sq ft RCC commercial building on a 20-metre road in Taloja MIDC. Ground plus six floors with approximately 3,300 sq ft per floor, offering a columnless floor plate on each level with ample natural light.",
    images: [
      // REPLACE with the supplied building image
      taloja1,
      taloja2,
      taloja3,
      taloja4,
      taloja5,
      taloja6,
      taloja7,
      taloja8,
      taloja9,
      taloja10,
      taloja11,
    ],
    videos: [],
    specifications: [
      { label: "Built-up Area", value: "23,000 sq ft" },
      { label: "Configuration", value: "Ground + 6 floors" },
      { label: "Floor Area", value: "~3,300 sq ft per floor" },
      { label: "Floor Height", value: "15 ft" },
      { label: "Water Capacity", value: "1.2 lakh litres" },
      { label: "Electrical Provision", value: "67 / 100 / 200 HP" },
      { label: "Road Frontage", value: "20-metre road" },
    ],
    highlights: [
      "23,000 sq ft",
      "Ground + 6 floors",
      "15 ft floor height",
      "20m road frontage",
    ],
    features: [
      "Columnless floor plate on each floor",
      "Passenger and goods lifts",
      "Fire safety compliance",
      "Two separate staircases",
      "Total water capacity of 1.2 lakh litres",
      "Continuous 24x7 MIDC water supply",
      "15 ft floor height",
      "Two separate entry and exit gates",
      "Parking spaces",
      "Private bathroom on each floor",
      "Provisions for increased electrical capacity (67 / 100 / 200 HP)",
      "Ample windows for ventilation and sunlight",
      "Road frontage on a 20-metre road",
    ],
    suitableFor: [
      "Warehousing",
      "Industrial units",
      "Offices",
      "Training centres",
      "Food & beverages",
      "R&D",
      "Pharma",
      "Electronics",
      "Logistics",
    ],
    connectivity: [
      "Proximity to Navi Mumbai International Airport",
      "Proximity to JNPT port",
      "Proximity to major highways",
      "Upcoming Taloja Metro Station",
      "Upcoming Taloja-Kharghar flyover",
      "Approximately 30-45 minutes from TTC Industrial Area depending on route/traffic",
    ],
    featured: true,
  },
  {
    id: "kansal-village-industrial-land",
    title: "4.5 Acre Industrial Freehold Land",
    location: "Kansal Village · Sudhagad · Raigad",
    city: "Kansal Village",
    state: "Maharashtra",
    type: "Industrial Land",
    listingType: "For Sale",
    area: "4.5 acres",
    price: "₹7 L / guntha",
    description:
      "A 4.5 acre industrial freehold land plot with clear title, located on the Khopoli–Pali Highway. The plot has a direct main-highway touch with a small road frontage and is oriented east–west.",

    images: [kansal1, kansal2, kansal3, kansal4, kansal5, kansal6],

    videos: [],

    specifications: [
      { label: "Plot Area", value: "4.5 acres" },
      { label: "Title", value: "Freehold · Clear title" },
      { label: "Road Frontage", value: "Direct main-highway touch" },
      { label: "Orientation", value: "East–West" },
      { label: "Rate", value: "₹7 lakh per guntha" },
    ],

    highlights: ["4.5 acres", "Freehold", "Clear title", "Highway touch"],

    features: [
      "Industrial land",
      "Freehold",
      "Clear title",
      "Direct main-highway touch",
      "East-west orientation",
    ],

    suitableFor: [],

    connectivity: ["Khopoli-Pali Highway"],

    featured: true,
  },

  {
    id: "building-c1-bhiwandi-warehouse",
    title: "Building C1 — Industrial Warehouse",
    location: "Bhiwandi",
    city: "Bhiwandi",
    state: "Maharashtra",
    type: "Warehouse",
    listingType: "For Rent",
    availabilityNote: "Rent stated as all inclusive",
    area: "21,200 sq ft",
    price: "₹15 / sq ft",
    description:
      "An industrial warehouse in Bhiwandi with high clearance and three loading docks. Carpet area of 21,200 sq ft within 26,500 sq ft of built-up area, on a 50 ft road.",

    images: [bhiwandi1, bhiwandi2, bhiwandi3, bhiwandi4, bhiwandi5, bhiwandi6],

    videos: [bhiwandiVideo1, bhiwandiVideo2, bhiwandiVideo3],

    specifications: [
      { label: "Carpet Area", value: "21,200 sq ft" },
      { label: "Built-up Area", value: "26,500 sq ft" },
      { label: "Centre Height", value: "38 ft" },
      { label: "Side Height", value: "32 ft" },
      { label: "Loading Docks", value: "3" },
      { label: "Road Width", value: "50 ft" },
      { label: "Rent", value: "₹15 / sq ft" },
    ],

    highlights: ["26,500 sq ft", "38 ft centre height", "3 Docks"],

    features: ["Rent is all inclusive"],

    suitableFor: [],

    connectivity: [],

    featured: true,
  },

  {
    id: "khopoli-pen-road-warehouse",
    title: "70,000 sq ft Warehouse",
    location: "Khopoli-Pen Road",
    city: "Khopoli",
    state: "Maharashtra",
    type: "Warehouse",
    listingType: "For Rent",
    area: "70,000 sq ft",
    price: "₹25 / sq ft",
    description:
      "A fully compliant 70,000 sq ft road-touch warehouse on the Khopoli-Pen Road. Features FM2 flooring, 11 loading docks and 2 ramps, built for high-volume logistics and storage.",

    images: [
      khopoli1,
      khopoli2,
      khopoli3,
      khopoli4,
      khopoli5,
      khopoli6,
      khopoli7,
      khopoli8,
      khopoli9,
      khopoli10,
      khopoli11,
    ],

    videos: [],

    specifications: [
      { label: "Area", value: "70,000 sq ft" },
      { label: "Flooring", value: "FM2" },
      { label: "Loading Docks", value: "11" },
      { label: "Ramps", value: "2" },
      { label: "Rent", value: "₹25 / sq ft" },
    ],

    highlights: ["70,000 sq ft", "11 Docks", "2 Ramps"],

    features: [
      "Fully compliant warehouse",
      "Road-touch property",
      "FM2 flooring",
    ],

    suitableFor: [],

    connectivity: [],

    featured: true,
  },
];

// Convenience map used by cards, filters and detail sections.
export const listingLabel = (value) => value || "";

// ---------------------------------------------------------------------------
// Business hubs (the industrial locations where we currently hold stock).
// ---------------------------------------------------------------------------
export const HUBS = [
  {
    name: "Taloja MIDC",
    region: "Navi Mumbai · Maharashtra",
    descriptor: "Industrial & Commercial Hub",
    image: taloja1,
  },
  {
    name: "Bhiwandi Logistics Hub",
    region: "Thane · Maharashtra",
    descriptor: "Warehousing & Logistics",
    image: bhiwandi1,
  },
  {
    name: "Khopoli Industrial Belt",
    region: "Raigad · Maharashtra",
    descriptor: "Warehousing & Industrial",
    image: khopoli1,
  },
  {
    name: "Khopoli-Pali Industrial Corridor",
    region: "Raigad · Maharashtra",
    descriptor: "Industrial Land & Development",
    image: kansal1,
  },
];

// Location names for the search bar (derived from current stock).
export const LOCATIONS = HUBS.map((h) => h.name);
