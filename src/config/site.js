// ─────────────────────────────────────────────────────────────────────────────
//  DROVIKA WEBSITE — all details in ONE place.
//  Number, email, prices or app links change? Edit only this file, then rebuild.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'Drovika',
  tagline: 'Goods transport across Mumbai',
  url: 'https://drovika.in', // your live website address (used for Google / sharing)

  // Contact — TODO: replace with the new business SIM number once you have it
  phone: '+91 93409 88525', // shown on the site, used for "Call us"
  whatsapp: '919340988525', // same number, digits only with 91 in front (no + or spaces)
  email: 'support@drovika.in',
  address: 'Mumbai, Maharashtra, India',
  hours: 'Every day, 8 AM – 10 PM',
  grievanceOfficer: 'Sameer Shekh', // name shown on the Privacy page (law requires a grievance officer)
  udyam: true, // shows "Udyam registered MSME" in the footer

  // First-trip offer shown on the site. Must match the FIRST50 coupon in Admin → Offers.
  // Switched the coupon off? Set this to '' so the website stops showing it.
  firstTripOffer: 'Up to ₹50 off your first trip',

  // Promises shown on the website. They must match the rules in the app (Admin → Cancellations → Rules).
  // If a rule changes in the app, switch the matching line off here so the website never promises more.
  freeCancel: true,       // customers cancel without a fee (a reason is asked); the driver who had arrived gets priority

  // Play Store links (package names from the apps). Set appsLive: true once both apps are published.
  appsLive: false,
  customerApp: 'https://play.google.com/store/apps/details?id=in.drovika.app',
  partnerApp: 'https://play.google.com/store/apps/details?id=in.drovika.partner',

  // Social pages — leave '' to hide
  instagram: '',
  facebook: '',
  linkedin: '',
  x: '',
};

// Vehicles shown on the website. Only the "starting from" price is public — the per-km rates and
// other pricing rules stay in the app and admin panel, never on the website.
export const vehicles = [
  { slug: 'three_wheeler', freeMin: 30, name: '3 Wheeler', nick: 'Chhota tempo', capacity: 'Upto 500 kg', size: '5.5 × 4.5 × 5 ft', base: 189, bestFor: ['Parcels & cartons', 'Small appliances', 'Shop deliveries'] },
  { slug: 'tata_ace', freeMin: 45, name: 'Tata Ace', nick: 'Chhota Hathi', capacity: 'Upto 750 kg', size: '7 × 4 × 5 ft', base: 219, bestFor: ['1 RK / 1 BHK shifting', 'Shop stock', 'Appliances'] },
  { slug: 'pickup_1ton', freeMin: 90, name: '8ft 1 Ton', nick: 'Covered mini truck', capacity: 'Upto 1000 kg', size: '8 × 4.5 × 5.5 ft', base: 299, bestFor: ['Shop stock', 'Small shifting', 'E-commerce loads'] },
  { slug: 'pickup', freeMin: 90, name: '8ft Pickup', nick: 'Open body', capacity: 'Upto 1250 kg', size: '8 × 5 × open', base: 359, bestFor: ['Furniture', 'Building material', 'Long items'] },
  { slug: 'pickup_9ft', freeMin: 90, name: '9ft Pickup', nick: 'Open body, bigger', capacity: 'Upto 1700 kg', size: '9 × 5.5 × open', base: 429, bestFor: ['Bulk goods', 'Big appliances', 'Pipes & rods'] },
  { slug: 'tata_407', freeMin: 120, name: 'Tata 407', nick: '10 ft tempo', capacity: 'Upto 2500 kg', size: '10 × 6 × 6 ft', base: 719, bestFor: ['1–2 BHK shifting', 'Office moves', 'Godown stock'] },
  { slug: 'tempo', freeMin: 120, name: '14ft Tempo', nick: 'Closed body', capacity: 'Upto 3500 kg', size: '14 × 6 × 6.5 ft', base: 999, bestFor: ['2–3 BHK shifting', 'Bulk goods', 'Event material'] },
  { slug: 'truck_17ft', freeMin: 180, name: '17ft Truck', nick: 'Medium truck', capacity: 'Upto 4500 kg', size: '17 × 6.5 × 7 ft', base: 1299, bestFor: ['Big shifting', 'Godown loads', 'Machinery'] },
  { slug: 'truck', freeMin: 180, name: '19ft Truck', nick: 'Heavy truck', capacity: 'Upto 6000 kg', size: '19 × 7 × 7 ft', base: 1599, bestFor: ['Factory loads', 'Warehouse stock', 'Full house moves'] },
];
// freeMin = free minutes for loading at pickup, and the same again for unloading at the drop.
// Must match "Free time" for each vehicle in Admin → Fares.

// Lowest "starting from" price (shown in the hero and in Google results)
export const fromPrice = Math.min(...vehicles.map((v) => v.base));

// Areas inside the Drovika service zone, grouped by region (shown on the home page).
// Pickup, drop and every stop must be inside the zone set in Admin → Service area.
export const areaGroups = [
  { name: 'Mumbai', areas: ['Colaba', 'South Mumbai', 'Dadar', 'Bandra', 'Andheri', 'Goregaon', 'Malad', 'Borivali', 'Dahisar', 'Kurla', 'Ghatkopar', 'Chembur', 'Powai', 'Mulund'] },
  { name: 'Thane district', areas: ['Thane', 'Mira-Bhayandar', 'Bhiwandi', 'Kalyan', 'Dombivli', 'Ulhasnagar', 'Ambernath', 'Badlapur', 'Titwala'] },
  { name: 'Navi Mumbai', areas: ['Vashi', 'Nerul', 'Belapur', 'Kharghar', 'Panvel', 'Taloja', 'Uran'] },
  { name: 'Vasai to Palghar', areas: ['Naigaon', 'Vasai', 'Nalasopara', 'Virar', 'Saphale', 'Palghar'] },
];
export const areas = areaGroups.flatMap((g) => g.areas);

// Shortest and longest free time (shown in the hero)
export const maxFreeMin = Math.max(...vehicles.map((v) => v.freeMin));
export const minFreeMin = Math.min(...vehicles.map((v) => v.freeMin));
export const fmtMin = (m) => (m >= 60 && m % 60 === 0 ? `${m / 60} hr${m > 60 ? 's' : ''}` : `${m} min`);

export const waLink = (text = 'Hi Drovika, I need help with a booking.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
export const telLink = () => `tel:${site.phone.replace(/\s/g, '')}`;
