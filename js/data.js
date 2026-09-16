/**
 * TariAds - Global Listings & Advertising Marketplace
 * Master Data Layer & Storage Model
 * Property (Flagship) • Vehicles • Products • Other Listings
 */

// Global Location Taxonomy
export const LOCATIONS_DATA = {
  countries: [
    { code: "ALL", name: "All Locations (Global)", flag: "🌐" },
    { code: "ZW", name: "Zimbabwe", flag: "🇿🇼" },
    { code: "ZA", name: "South Africa", flag: "🇿🇦" },
    { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
    { code: "BW", name: "Botswana", flag: "🇧🇼" },
    { code: "ZM", name: "Zambia", flag: "🇿🇲" },
    { code: "US", name: "United States", flag: "🇺🇸" },
    { code: "KE", name: "Kenya", flag: "🇰🇪" }
  ],
  popularCities: [
    { id: "harare", name: "Harare", country: "ZW", countryName: "Zimbabwe", tag: "Capital / Primary Market" },
    { id: "bulawayo", name: "Bulawayo", country: "ZW", countryName: "Zimbabwe", tag: "Second City" },
    { id: "mutare", name: "Mutare", country: "ZW", countryName: "Zimbabwe", tag: "Eastern Highlands" },
    { id: "gweru", name: "Gweru", country: "ZW", countryName: "Zimbabwe", tag: "Midlands Hub" },
    { id: "chitungwiza", name: "Chitungwiza", country: "ZW", countryName: "Zimbabwe", tag: "Greater Harare" },
    { id: "masvingo", name: "Masvingo", country: "ZW", countryName: "Zimbabwe", tag: "Ancient City" },
    { id: "vicfalls", name: "Victoria Falls", country: "ZW", countryName: "Zimbabwe", tag: "Resort & Tourism Hub" }
  ],
  regions: {
    ZW: [
      { id: "all_zw", name: "All Zimbabwe", country: "ZW", isAll: true },
      { id: "harare", name: "Harare", country: "ZW", areas: ["Borrowdale", "Avondale", "Mount Pleasant", "Eastlea", "Westgate", "CBD", "Greendale", "Newlands", "Highlands", "Shawasha Hills", "Chisipite", "Marlborough", "Belgravia", "Glen Lorne", "Waterfalls", "Hatfield"] },
      { id: "bulawayo", name: "Bulawayo", country: "ZW", areas: ["Kumalo", "Suburbs", "Hillside", "CBD", "Bradfield", "Burnside", "Morningside", "Woodville", "Matsheumhlope", "Killarney"] },
      { id: "mutare", name: "Mutare", country: "ZW", areas: ["Morningside", "Murambi", "CBD", "Palmerstone", "Yeovil", "Fairbridge Park", "Chikanga", "Dangamvura", "Bvumba"] },
      { id: "gweru", name: "Gweru", country: "ZW", areas: ["Kopje", "Daylesford", "CBD", "Southdowns", "Lundi Park", "Nashville", "Windsor Park"] },
      { id: "chitungwiza", name: "Chitungwiza", country: "ZW", areas: ["Unit L", "Unit K", "Zengeza", "St Marys", "Seke", "Chitungwiza Town Centre"] },
      { id: "masvingo", name: "Masvingo", country: "ZW", areas: ["Rhodene", "Target Kopje", "CBD", "Mucheke", "Clipsham Views"] },
      { id: "vicfalls", name: "Victoria Falls", country: "ZW", areas: ["Aerodrome", "Low Density", "Chidobe", "Chinotimba", "Elephant Hills Area"] },
      { id: "other_zw", name: "Other Cities (Zimbabwe)", country: "ZW", areas: ["Kwekwe", "Kadoma", "Chinhoyi", "Marondera", "Bindura", "Zvishavane", "Hwange", "Beitbridge", "Kariba", "Rusape"] }
    ],
    ZA: [
      { id: "all_za", name: "All South Africa", country: "ZA", isAll: true },
      { id: "capetown", name: "Cape Town", country: "ZA", areas: ["Camps Bay", "Sea Point", "City Bowl", "Claremont", "Constantia"] },
      { id: "jhb", name: "Johannesburg", country: "ZA", areas: ["Sandton", "Rosebank", "Fourways", "Midrand", "Randburg"] },
      { id: "durban", name: "Durban", country: "ZA", areas: ["Umhlanga", "Morningside", "Berea", "Ballito"] }
    ],
    UK: [
      { id: "all_uk", name: "All United Kingdom", country: "UK", isAll: true },
      { id: "london", name: "London", country: "UK", areas: ["Canary Wharf", "Kensington", "Stratford", "Camden", "Greenwich"] },
      { id: "manchester", name: "Manchester", country: "UK", areas: ["City Centre", "Salford Quays", "Didsbury"] }
    ],
    BW: [
      { id: "all_bw", name: "All Botswana", country: "BW", isAll: true },
      { id: "gaborone", name: "Gaborone", country: "BW", areas: ["Phakalane", "Block 6", "CBD", "Extension 9"] }
    ],
    ZM: [
      { id: "all_zm", name: "All Zambia", country: "ZM", isAll: true },
      { id: "lusaka", name: "Lusaka", country: "ZM", areas: ["Kabulonga", "Woodlands", "Rhodes Park", "Mass Media"] }
    ]
  }
};

// Initial Flagship Properties Dataset
export const INITIAL_PROPERTIES = [
  {
    id: "TAR-PROP-101",
    title: "Modern 4-Bedroom Executive House with Solar & Borehole",
    category: "rent",
    propertyType: "House",
    country: "ZW",
    countryName: "Zimbabwe",
    location: "Harare",
    suburb: "Borrowdale",
    address: "Kingsmead Road, Borrowdale, Harare",
    price: 1800,
    currency: "USD",
    pricePeriod: "month",
    deposit: 1800,
    bedrooms: 4,
    bathrooms: 3.5,
    parkingSpaces: 3,
    sizeSqM: 450,
    furnished: "Unfurnished",
    availability: "Available Immediately",
    availableFrom: "2026-09-01",
    verified: true,
    verificationBadge: "Confirmed Lister",
    lastUpdated: "Today at 09:15 AM",
    description: "Nestled in prime Borrowdale, this executive residence features 4 spacious bedrooms (master en-suite with walk-in closet), modern fitted kitchen with granite countertops, 2 spacious lounges, and a formal dining room. Equipped with 5kVA full solar power, high-yield borehole connected to 10,000L water storage tanks, durawall with electric fence, automated gate, and double staff quarters.",
    amenities: [
      "5kVA Solar Power System",
      "Prolific Borehole & 10,000L Tank",
      "Durawall & Electric Fence",
      "Automated Security Gate",
      "Swimming Pool",
      "Double Staff Quarters",
      "Fitted Modern Kitchen",
      "Paved Driveway",
      "High-Speed Fibre Ready"
    ],
    features: {
      solar: true,
      borehole: true,
      walled: true,
      electricGate: true,
      pool: true,
      staffQuarters: true,
      fibre: true
    },
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Tafadzwa Chidzero",
      agency: "Prime Real Estate Partners",
      phone: "+263 77 212 3456",
      whatsapp: "263772123456",
      email: "t.chidzero@primerepartners.com",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      verifiedAgent: true,
      responseTime: "Usually responds within 15 minutes",
      listingsCount: 14
    },
    landmarks: [
      "Sam Levy's Village (3 min drive)",
      "Borrowdale Trauma Centre (4 min drive)",
      "St. George's College Route (7 min drive)"
    ],
    featured: true,
    newlyListed: false
  },
  {
    id: "TAR-PROP-102",
    title: "Secure 2-Bedroom Apartment in Quiet Complex with Backup Water",
    category: "rent",
    propertyType: "Apartment",
    country: "ZW",
    countryName: "Zimbabwe",
    location: "Harare",
    suburb: "Avondale",
    address: "Bath Road, Avondale West, Harare",
    price: 650,
    currency: "USD",
    pricePeriod: "month",
    deposit: 650,
    bedrooms: 2,
    bathrooms: 1,
    parkingSpaces: 1,
    sizeSqM: 95,
    furnished: "Unfurnished",
    availability: "Available Immediately",
    availableFrom: "2026-09-01",
    verified: true,
    verificationBadge: "Direct Landlord",
    lastUpdated: "Yesterday",
    description: "Neat and well-maintained 2-bedroom second-floor apartment in a secure gated complex in Avondale. Features open-plan lounge and dining area leading onto a sun balcony, fitted kitchen with ample storage, tiled bathroom with separate toilet. Complex has a dedicated borehole, 5,000L backup tanks, 24/7 security guard, and dedicated shaded carport.",
    amenities: [
      "Borehole Water & Complex Tanks",
      "24/7 Security Guard at Gate",
      "Balcony with Garden Views",
      "Built-in Wardrobes",
      "Covered Carport",
      "Tiled Living Areas",
      "Walking distance to Avondale Shops"
    ],
    features: {
      solar: false,
      borehole: true,
      walled: true,
      electricGate: true,
      pool: false,
      staffQuarters: false,
      fibre: true
    },
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Rumbidzai Moyo",
      agency: "Direct Landlord Listing",
      phone: "+263 71 555 4321",
      whatsapp: "263715554321",
      email: "rumbie.moyo@gmail.com",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      verifiedAgent: true,
      responseTime: "Usually responds within 30 minutes",
      listingsCount: 2
    },
    landmarks: [
      "Avondale Shopping Centre (5 min walk)",
      "University of Zimbabwe (6 min drive)",
      "Kensington Shops (4 min drive)"
    ],
    featured: true,
    newlyListed: false
  },
  {
    id: "TAR-PROP-103",
    title: "Luxury 2-Bedroom Atlantic Ocean View Apartment",
    category: "rent",
    propertyType: "Apartment",
    country: "ZA",
    countryName: "South Africa",
    location: "Cape Town",
    suburb: "Sea Point",
    address: "Beach Road, Sea Point, Cape Town",
    price: 1650,
    currency: "USD",
    pricePeriod: "month",
    deposit: 1650,
    bedrooms: 2,
    bathrooms: 2,
    parkingSpaces: 1,
    sizeSqM: 110,
    furnished: "Furnished",
    availability: "Available Immediately",
    availableFrom: "2026-09-01",
    verified: true,
    verificationBadge: "Confirmed Lister",
    lastUpdated: "2 hours ago",
    description: "Spectacular front-row Sea Point promenade apartment with panoramic ocean vistas. Fully furnished with contemporary designer interior, floor-to-ceiling glass sliding doors, inverter backup power for seamless continuity, high-speed optic fibre, 24-hour concierge security, and secure underground parking.",
    amenities: [
      "Inverter Backup Power",
      "Panoramic Ocean Frontage",
      "24/7 Concierge & CCTV",
      "Designer Kitchen & Smeg Appliances",
      "High-Speed Optic Fibre",
      "Secure Underground Parking",
      "Air Conditioning throughout"
    ],
    features: {
      solar: true,
      borehole: false,
      walled: true,
      electricGate: true,
      pool: true,
      staffQuarters: false,
      fibre: true
    },
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Craig Van Der Merwe",
      agency: "Atlantic Seaboard Properties",
      phone: "+27 82 491 8820",
      whatsapp: "27824918820",
      email: "craig@atlanticseaboard.co.za",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      verifiedAgent: true,
      responseTime: "Usually responds within 20 minutes",
      listingsCount: 19
    },
    landmarks: [
      "Sea Point Promenade (Direct access)",
      "V&A Waterfront (7 min drive)",
      "Camps Bay Beach (10 min drive)"
    ],
    featured: true,
    newlyListed: true
  },
  {
    id: "TAR-PROP-104",
    title: "Elegant 5-Bedroom Family Home with Swimming Pool & Manicured Lawn",
    category: "sale",
    propertyType: "House",
    country: "ZW",
    countryName: "Zimbabwe",
    location: "Harare",
    suburb: "Mount Pleasant",
    address: "The Chase, Mount Pleasant, Harare",
    price: 340000,
    currency: "USD",
    pricePeriod: "once",
    deposit: 0,
    bedrooms: 5,
    bathrooms: 4,
    parkingSpaces: 4,
    sizeSqM: 2000,
    furnished: "Unfurnished",
    availability: "Available for Purchase (Clean Title Deeds)",
    availableFrom: "2026-09-01",
    verified: true,
    verificationBadge: "Title Deeds Confirmed",
    lastUpdated: "3 days ago",
    description: "Exceptional solid family home set on an acre of lush garden with mature indigenous trees. Features 5 spacious bedrooms (2 en-suite), 3 reception rooms, modern fitted kitchen with scullery, sparkling swimming pool, gazebo entertainment area, prolific seasonal borehole, 10kVA solar installation, triple lock-up garage, and double staff quarters.",
    amenities: [
      "Title Deeds in Company Name",
      "10kVA Full Solar System",
      "Prolific Borehole with 10kL Tanks",
      "Swimming Pool & Entertainment Gazebo",
      "Triple Lock-up Garage",
      "Double Staff Accommodation",
      "High Boundary Durawall with Razor Wire",
      "Electric Gate with Intercom"
    ],
    features: {
      solar: true,
      borehole: true,
      walled: true,
      electricGate: true,
      pool: true,
      staffQuarters: true,
      fibre: true
    },
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Tafadzwa Chidzero",
      agency: "Prime Real Estate Partners",
      phone: "+263 77 212 3456",
      whatsapp: "263772123456",
      email: "t.chidzero@primerepartners.com",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      verifiedAgent: true,
      responseTime: "Usually responds within 15 minutes",
      listingsCount: 14
    },
    landmarks: [
      "Arundel Village (4 min drive)",
      "Bond Street Shops (3 min drive)",
      "St. John's College (8 min drive)"
    ],
    featured: true,
    newlyListed: false
  },
  {
    id: "TAR-PROP-105",
    title: "Charming 4-Bedroom Home in Quiet Kumalo Suburb with Borehole",
    category: "rent",
    propertyType: "House",
    country: "ZW",
    countryName: "Zimbabwe",
    location: "Bulawayo",
    suburb: "Kumalo",
    address: "Pauling Road, Kumalo, Bulawayo",
    price: 750,
    currency: "USD",
    pricePeriod: "month",
    deposit: 750,
    bedrooms: 4,
    bathrooms: 2,
    parkingSpaces: 2,
    sizeSqM: 320,
    furnished: "Unfurnished",
    availability: "Available Immediately",
    availableFrom: "2026-09-01",
    verified: true,
    verificationBadge: "Confirmed Lister",
    lastUpdated: "2 days ago",
    description: "Classic low-density Kumalo family home with high ceilings and polished parquet floors. Comprises 4 bedrooms, 2 bathrooms, spacious lounge with fireplace, separate dining room, fitted kitchen, reliable borehole water, backup water tank, single lock-up garage with double carport, staff room, and fully enclosed yard.",
    amenities: [
      "Equipped Borehole & 5,000L Tank",
      "Polished Teak Parquet Flooring",
      "Cozy Working Fireplace",
      "Single Garage & Carport",
      "Single Staff Accommodation",
      "Prepaid Electricity",
      "Walled with Gate"
    ],
    features: {
      solar: false,
      borehole: true,
      walled: true,
      electricGate: false,
      pool: false,
      staffQuarters: true,
      fibre: false
    },
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Sipho Khumalo",
      agency: "Matabeleland Property Group",
      phone: "+263 77 334 5566",
      whatsapp: "263773345566",
      email: "sipho@matproperty.co.zw",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
      verifiedAgent: true,
      responseTime: "Usually responds within 30 minutes",
      listingsCount: 9
    },
    landmarks: [
      "Suburbs Squash Club (3 min drive)",
      "Bulawayo Golf Club (4 min drive)",
      "Ascot Shopping Centre (5 min drive)"
    ],
    featured: false,
    newlyListed: false
  },
  {
    id: "TAR-PROP-106",
    title: "1-Bedroom Modern Canary Wharf Docklands Apartment",
    category: "rent",
    propertyType: "Apartment",
    country: "UK",
    countryName: "United Kingdom",
    location: "London",
    suburb: "Canary Wharf",
    address: "Marsh Wall, Canary Wharf, London E14",
    price: 2400,
    currency: "USD",
    pricePeriod: "month",
    deposit: 2400,
    bedrooms: 1,
    bathrooms: 1,
    parkingSpaces: 0,
    sizeSqM: 58,
    furnished: "Furnished",
    availability: "Available Immediately",
    availableFrom: "2026-09-01",
    verified: true,
    verificationBadge: "Verified Agency",
    lastUpdated: "5 hours ago",
    description: "Sleek and contemporary 1-bedroom apartment situated high in a premier Canary Wharf development. Benefits from open-plan reception room with private balcony offering dockside views, engineered wooden floors, underfloor heating, concierge service, resident gym, and fast links via Jubilee line and DLR.",
    amenities: [
      "Private Dockside Balcony",
      "24/7 Concierge Desk",
      "Residents Fitness Centre & Gym",
      "Underfloor Heating",
      "Hyperoptic 1Gbps Fibre Ready",
      "Integrated Siemens Appliances"
    ],
    features: {
      solar: false,
      borehole: false,
      walled: true,
      electricGate: true,
      pool: false,
      staffQuarters: false,
      fibre: true
    },
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Marcus Bell",
      agency: "London Prime Lettings",
      phone: "+44 20 7946 0912",
      whatsapp: "442079460912",
      email: "marcus@londonprime.co.uk",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      verifiedAgent: true,
      responseTime: "Usually responds within 1 hour",
      listingsCount: 26
    },
    landmarks: [
      "Canary Wharf Underground (4 min walk)",
      "South Quay DLR (2 min walk)",
      "Crossrail Elizabeth Line (6 min walk)"
    ],
    featured: false,
    newlyListed: true
  },
  {
    id: "TAR-PROP-107",
    title: "Prime Commercial Office Suite with 18 Parking Bays & Hybrid Solar",
    category: "commercial",
    propertyType: "Commercial Property",
    country: "ZW",
    countryName: "Zimbabwe",
    location: "Harare",
    suburb: "Eastlea",
    address: "Samora Machel Avenue East, Eastlea, Harare",
    price: 3200,
    currency: "USD",
    pricePeriod: "month",
    deposit: 3200,
    bedrooms: 0,
    bathrooms: 4,
    parkingSpaces: 18,
    sizeSqM: 380,
    furnished: "Unfurnished",
    availability: "Available Immediately",
    availableFrom: "2026-09-01",
    verified: true,
    verificationBadge: "Confirmed Lister",
    lastUpdated: "Yesterday",
    description: "Highly visible corporate commercial office property on Samora Machel Avenue corridor. Features reception area, 8 private executive offices, 2 large boardroom suites, fitted kitchenette, male and female ablutions, 10kVA solar hybrid system, backup borehole, 18 dedicated paved parking bays, and 24-hour guard station.",
    amenities: [
      "Samora Machel Frontage / High Visibility",
      "18 Paved On-Site Parking Bays",
      "10kVA Solar Hybrid Backup",
      "Borehole with 5,000L Storage",
      "Dedicated Boardrooms",
      "Fibre Internet Infrastructure",
      "Air Conditioning throughout"
    ],
    features: {
      solar: true,
      borehole: true,
      walled: true,
      electricGate: true,
      pool: false,
      staffQuarters: false,
      fibre: true
    },
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Blessing Mutasa",
      agency: "Capital Commercial Brokers",
      phone: "+263 77 111 2233",
      whatsapp: "263771112233",
      email: "blessing@capitalcommercial.co.zw",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      verifiedAgent: true,
      responseTime: "Usually responds within 1 hour",
      listingsCount: 18
    },
    landmarks: [
      "Direct Samora Machel Corridor",
      "Harare CBD (4 min drive)",
      "Msasa Commercial Hub (5 min drive)"
    ],
    featured: false,
    newlyListed: false
  },
  {
    id: "TAR-PROP-108",
    title: "Self-Contained 1-Bedroom Garden Cottage with Solar & Wi-Fi",
    category: "rooms",
    propertyType: "Room / Cottage",
    country: "ZW",
    countryName: "Zimbabwe",
    location: "Harare",
    suburb: "Westgate",
    address: "Westgate Area D, Harare",
    price: 280,
    currency: "USD",
    pricePeriod: "month",
    deposit: 280,
    bedrooms: 1,
    bathrooms: 1,
    parkingSpaces: 1,
    sizeSqM: 48,
    furnished: "Semi-Furnished",
    availability: "Available Immediately",
    availableFrom: "2026-09-01",
    verified: true,
    verificationBadge: "Direct Landlord",
    lastUpdated: "4 hours ago",
    description: "Private and peaceful 1-bedroom garden cottage suitable for a single professional. Separate entrance, tiled lounge with kitchenette, bathroom with solar hot water shower, reliable borehole, backup solar power, and secure parking inside a walled and gated yard.",
    amenities: [
      "Solar Power & Hot Water",
      "Private Entrance & Yard Area",
      "Prolific Borehole Water",
      "Wi-Fi Connection Included",
      "Secure Inside Parking",
      "Quiet Neighborhood"
    ],
    features: {
      solar: true,
      borehole: true,
      walled: true,
      electricGate: true,
      pool: false,
      staffQuarters: false,
      fibre: true
    },
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Tendai Shumba",
      agency: "Direct Owner",
      phone: "+263 77 888 9900",
      whatsapp: "263778889900",
      email: "tendaishumba@gmail.com",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
      verifiedAgent: true,
      responseTime: "Usually responds within 30 minutes",
      listingsCount: 1
    },
    landmarks: [
      "Westgate Shopping Mall (4 min drive)",
      "Lomagundi Road (2 min drive)"
    ],
    featured: false,
    newlyListed: true
  },
  {
    id: "TAR-PROP-109",
    title: "Executive 4-Bedroom Mountain Home with Panoramic Bvumba Views & Solar",
    category: "rent",
    propertyType: "House",
    country: "ZW",
    countryName: "Zimbabwe",
    location: "Mutare",
    suburb: "Morningside",
    address: "Bvumba Road, Morningside, Mutare",
    price: 850,
    currency: "USD",
    pricePeriod: "month",
    deposit: 850,
    bedrooms: 4,
    bathrooms: 3,
    parkingSpaces: 2,
    sizeSqM: 380,
    furnished: "Unfurnished",
    availability: "Available Immediately",
    availableFrom: "2026-09-01",
    verified: true,
    verificationBadge: "Confirmed Lister",
    lastUpdated: "Just now",
    description: "Splendid hillside residence in Morningside, Mutare with breathtaking views towards the Bvumba mountains. Features 4 bedrooms (master en-suite), open-plan living and dining with fireplace, fitted kitchen, 5kVA solar system, constant mountain water supply + 5000L backup tank, paved driveway, mature avocado & indigenous trees, walled and gated.",
    amenities: [
      "5kVA Solar Power",
      "Mountain Water & 5,000L Tank",
      "Panoramic Views",
      "Working Fireplace",
      "Walled & Gated",
      "Staff Accommodation"
    ],
    features: {
      solar: true,
      borehole: true,
      walled: true,
      electricGate: true,
      pool: false,
      staffQuarters: true,
      fibre: true
    },
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Farai Nyatanga",
      agency: "Eastern Highlands Properties",
      phone: "+263 77 555 7890",
      whatsapp: "263775557890",
      email: "farai@easternhighlands.co.zw",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      verifiedAgent: true,
      responseTime: "Usually responds within 20 minutes",
      listingsCount: 8
    },
    landmarks: [
      "Mutare Club (5 min drive)",
      "Bvumba Scenic Corridor (8 min drive)",
      "CBD Commercial Center (6 min drive)"
    ],
    featured: true,
    newlyListed: true
  },
  {
    id: "TAR-PROP-110",
    title: "Modern 3-Bedroom Duplex Townhouse in Quiet Murambi Close",
    category: "rent",
    propertyType: "Apartment",
    country: "ZW",
    countryName: "Zimbabwe",
    location: "Mutare",
    suburb: "Murambi",
    address: "Murambi Gardens, Mutare",
    price: 650,
    currency: "USD",
    pricePeriod: "month",
    deposit: 650,
    bedrooms: 3,
    bathrooms: 2,
    parkingSpaces: 2,
    sizeSqM: 180,
    furnished: "Unfurnished",
    availability: "Available Immediately",
    availableFrom: "2026-09-01",
    verified: true,
    verificationBadge: "Verified Agency",
    lastUpdated: "Today",
    description: "Secure and contemporary 3-bedroom duplex townhouse in sought-after Murambi, Mutare. Fitted granite kitchen, spacious lounge opening to private courtyard garden, reliable council water with dedicated booster pump and 2500L tank, 3kVA solar inverter system, and 24-hour gated security.",
    amenities: [
      "3kVA Solar Inverter",
      "Dedicated 2,500L Backup Tank",
      "Private Courtyard Garden",
      "Gated Complex Security",
      "Fitted Modern Kitchen"
    ],
    features: {
      solar: true,
      borehole: false,
      walled: true,
      electricGate: true,
      pool: false,
      staffQuarters: false,
      fibre: true
    },
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Memory Chikukwa",
      agency: "Manicaland Real Estate",
      phone: "+263 71 223 3445",
      whatsapp: "263712233445",
      email: "m.chikukwa@manicalandre.co.zw",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      verifiedAgent: true,
      responseTime: "Usually responds within 30 minutes",
      listingsCount: 5
    },
    landmarks: [
      "Murambi Shops (3 min walk)",
      "Mutare Main Hospital (5 min drive)"
    ],
    featured: false,
    newlyListed: true
  }
];

// Initial Vehicles Dataset
export const INITIAL_VEHICLES = [
  {
    id: "TAR-VEH-201",
    title: "2021 Toyota Land Cruiser Prado TX-L 2.8 GD-6 4x4",
    category: "suv",
    categoryLabel: "SUVs & 4x4",
    country: "ZW",
    countryName: "Zimbabwe",
    location: "Harare",
    suburb: "Borrowdale",
    price: 68500,
    currency: "USD",
    year: 2021,
    mileageKm: 48000,
    transmission: "Automatic",
    fuel: "Diesel",
    engineSize: "2.8L Turbo",
    color: "Pearl White",
    condition: "Excellent / Like New",
    verified: true,
    verificationBadge: "Confirmed Seller",
    lastUpdated: "Today",
    description: "Immaculate Prado TX-L 2.8 GD-6 7-seater in pristine mechanical condition. Full service history with Toyota, leather upholstery, sunroof, refrigerator console, 360-degree camera, multi-terrain select, BF Goodrich all-terrain tyres, tow bar, and clean paperwork ready for immediate registration transfer.",
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"
    ],
    seller: {
      name: "Tinashe Gonese",
      type: "Private Seller",
      phone: "+263 77 444 3322",
      whatsapp: "263774443322",
      location: "Harare, Zimbabwe"
    },
    features: ["4x4 Drive", "Leather Seats", "Sunroof", "Reverse Camera", "Service Book", "Cruise Control"],
    featured: true
  },
  {
    id: "TAR-VEH-202",
    title: "2022 Toyota Hilux 2.8 GD-6 Double Cab 4x4 Legend 50",
    category: "pickup",
    categoryLabel: "Pickups & Bakkies",
    country: "ZW",
    countryName: "Zimbabwe",
    location: "Harare",
    suburb: "Eastlea",
    price: 49500,
    currency: "USD",
    year: 2022,
    mileageKm: 36000,
    transmission: "Automatic",
    fuel: "Diesel",
    engineSize: "2.8L GD-6",
    color: "Metallic Silver",
    condition: "Spotless",
    verified: true,
    verificationBadge: "Dealer Verified",
    lastUpdated: "Yesterday",
    description: "Tough and reliable Legend Hilux 4x4 Double Cab. Fitted with Securi-lid roller shutter, nudge bar, side steps, JBL premium audio system, lane departure assist, adaptive cruise control, tow bar, and rubberised load bin. Excellent for both business utility and executive leisure.",
    images: [
      "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80"
    ],
    seller: {
      name: "Apex Auto Dealership",
      type: "Registered Motor Dealer",
      phone: "+263 77 912 0000",
      whatsapp: "263779120000",
      location: "Samora Machel, Harare"
    },
    features: ["4x4 High/Low", "Diff Lock", "JBL Sound", "Roller Shutter", "Tow Hitch", "Apple CarPlay"],
    featured: true
  },
  {
    id: "TAR-VEH-203",
    title: "2019 Mercedes-Benz C200 AMG Line (W205)",
    category: "sedan",
    categoryLabel: "Sedans & Saloons",
    country: "ZA",
    countryName: "South Africa",
    location: "Johannesburg",
    suburb: "Sandton",
    price: 21500,
    currency: "USD",
    year: 2019,
    mileageKm: 54000,
    transmission: "9G-Tronic Auto",
    fuel: "Petrol",
    engineSize: "1.5L Turbo EQ Boost",
    color: "Obsidian Black",
    condition: "Excellent",
    verified: true,
    verificationBadge: "Confirmed Seller",
    lastUpdated: "3 days ago",
    description: "Stunning Mercedes C200 with full AMG Sport styling package. Digital cockpit dashboard, panoramic sunroof, LED high performance headlights, ambient mood lighting with 64 colors, active parking assist, and pristine black leather interior.",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80"
    ],
    seller: {
      name: "Prestige Motor Vault",
      type: "Sandton Dealership",
      phone: "+27 11 883 4900",
      whatsapp: "27118834900",
      location: "Sandton, Johannesburg"
    },
    features: ["AMG Bodykit", "Panoramic Sunroof", "Digital Cockpit", "Parktronic", "Leather Seats"],
    featured: true
  },
  {
    id: "TAR-VEH-204",
    title: "2018 Honda Fit Hybrid GP5 (Smart Edition)",
    category: "hatchback",
    categoryLabel: "Hatchbacks",
    country: "ZW",
    countryName: "Zimbabwe",
    location: "Bulawayo",
    suburb: "Hillside",
    price: 7800,
    currency: "USD",
    year: 2018,
    mileageKm: 65000,
    transmission: "Automatic",
    fuel: "Hybrid (Petrol/Electric)",
    engineSize: "1.5L i-VTEC",
    color: "Pearl White",
    condition: "Clean / Well Maintained",
    verified: true,
    verificationBadge: "Direct Owner",
    lastUpdated: "1 day ago",
    description: "Exceptionally fuel-efficient Honda Fit Hybrid GP5 averaging 23 km/litre. Push to start, keyless entry, touchscreen infotainment with Bluetooth and reverse camera, lane keep assist, climate control, new tyres, and low mileage.",
    images: [
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80"
    ],
    seller: {
      name: "Nomsa Sibanda",
      type: "Private Owner",
      phone: "+263 71 889 0011",
      whatsapp: "263718890011",
      location: "Bulawayo, Zimbabwe"
    },
    features: ["Push Start", "Reverse Camera", "Eco Mode (23km/L)", "Keyless Entry", "Power Windows"],
    featured: false
  },
  {
    id: "TAR-VEH-205",
    title: "2020 Toyota Hilux 2.4 GD-6 Raised Body Single Cab",
    category: "pickup",
    categoryLabel: "Pickups & Bakkies",
    country: "ZW",
    countryName: "Zimbabwe",
    location: "Mutare",
    suburb: "Palmerstone",
    price: 23500,
    currency: "USD",
    year: 2020,
    mileageKm: 68000,
    transmission: "Manual",
    fuel: "Diesel",
    engineSize: "2.4L GD-6",
    color: "Gloss White",
    condition: "Excellent Condition",
    verified: true,
    verificationBadge: "Dealer Verified",
    lastUpdated: "Today",
    description: "Extremely reliable Hilux 2.4 GD-6 single cab workhorse based in Palmerstone, Mutare. Fitted with cattle rails, canopy, heavy-duty tow hitch, rubberised load bed, air conditioning, and Bluetooth audio. Ideal for estate management, agriculture, or logistics.",
    images: [
      "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1200&q=80"
    ],
    seller: {
      name: "Eastern Motors Mutare",
      type: "Registered Motor Dealer",
      phone: "+263 77 330 1122",
      whatsapp: "263773301122",
      location: "Palmerstone, Mutare"
    },
    features: ["Raised Body", "Canopy & Rails", "Rubberised Bed", "Aircon", "Bluetooth"],
    featured: true
  }
];

// Initial Products Dataset
export const INITIAL_PRODUCTS = [
  {
    id: "TAR-PRD-301",
    title: "5kVA Hybrid Solar Inverter + 5.12kWh Lithium LiFePO4 Battery Kit",
    category: "solar",
    categoryLabel: "Solar & Power Backup",
    country: "ZW",
    countryName: "Zimbabwe",
    location: "Harare",
    suburb: "Graniteside",
    price: 1350,
    currency: "USD",
    condition: "Brand New (5-Year Warranty)",
    verified: true,
    verificationBadge: "Verified Supplier",
    lastUpdated: "Today",
    description: "Complete reliable home and office backup power bundle. Includes Growatt/Deye 5kVA 48V Pure Sine Wave Hybrid Inverter with Wi-Fi monitoring, paired with high-capacity 5.12kWh 100Ah Lithium Iron Phosphate (LiFePO4) Battery with built-in smart BMS. Capable of powering fridges, boreholes, lighting, TVs, and Wi-Fi seamlessly during outages.",
    images: [
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80"
    ],
    seller: {
      name: "SolarCore Power Systems",
      type: "Certified Solar Supplier",
      phone: "+263 77 300 4455",
      whatsapp: "263773004455",
      location: "Graniteside, Harare"
    },
    features: ["5kVA Pure Sine Wave", "5.12kWh Lithium LiFePO4", "Wi-Fi Cloud Monitoring", "5-Year Battery Warranty", "Free Harare Delivery"],
    featured: true
  },
  {
    id: "TAR-PRD-302",
    title: "Apple MacBook Pro 14\" M3 Pro (18GB RAM, 512GB SSD) Space Black",
    category: "electronics",
    categoryLabel: "Electronics & Computing",
    country: "ZW",
    countryName: "Zimbabwe",
    location: "Harare",
    suburb: "Avondale",
    price: 1980,
    currency: "USD",
    condition: "Brand New Sealed in Box",
    verified: true,
    verificationBadge: "Authorized Reseller",
    lastUpdated: "Yesterday",
    description: "Original brand new sealed Apple MacBook Pro 14-inch with powerful M3 Pro chip (11-core CPU, 14-core GPU). 18GB unified memory, 512GB ultra-fast SSD, Liquid Retina XDR display with ProMotion 120Hz, HDMI port, MagSafe 3, and 1-year official Apple International Warranty.",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1200&q=80"
    ],
    seller: {
      name: "ByteWorks Tech Store",
      type: "Retailer",
      phone: "+263 77 711 2299",
      whatsapp: "263777112299",
      location: "Avondale Shops, Harare"
    },
    features: ["Apple M3 Pro Chip", "Liquid Retina XDR 120Hz", "18GB RAM", "1 Year Apple Warranty", "Space Black Finish"],
    featured: true
  },
  {
    id: "TAR-PRD-303",
    title: "Handcrafted Modern 6-Piece Modular Living Room Couch Suite",
    category: "furniture",
    categoryLabel: "Furniture & Home",
    country: "ZW",
    countryName: "Zimbabwe",
    location: "Harare",
    suburb: "Msasa",
    price: 850,
    currency: "USD",
    condition: "Brand New (Direct from Workshop)",
    verified: true,
    verificationBadge: "Artisan Workshop",
    lastUpdated: "2 days ago",
    description: "Custom handcrafted 6-seater modular corner couch with plush high-density foam cushions and durable stain-resistant woven fabric in stylish warm grey. Solid hardwood inner frame built to last. Comes with matching accent scatter cushions and ottoman.",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80"
    ],
    seller: {
      name: "Msasa Craft Furniture",
      type: "Furniture Manufacturer",
      phone: "+263 78 455 6677",
      whatsapp: "263784556677",
      location: "Msasa Industrial, Harare"
    },
    features: ["Solid Hardwood Frame", "High-Density Foam", "Stain-Resistant Fabric", "Includes Ottoman", "Custom Fabric Colors Available"],
    featured: true
  },
  {
    id: "TAR-PRD-304",
    title: "Samsung 65\" Crystal UHD 4K Smart TV with HDR & Tizen OS",
    category: "electronics",
    categoryLabel: "Electronics & Computing",
    country: "ZA",
    countryName: "South Africa",
    location: "Cape Town",
    suburb: "Century City",
    price: 620,
    currency: "USD",
    condition: "Brand New in Box",
    verified: true,
    verificationBadge: "Verified Store",
    lastUpdated: "Today",
    description: "Brand new 65-inch Samsung 4K Crystal UHD TV (CU7000 series). Features Crystal Processor 4K, HDR10+, Smart Hub with Netflix, YouTube, Apple TV, gaming mode, slim bezel design, and 2-year warranty.",
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80"
    ],
    seller: {
      name: "Sound & Vision Direct",
      type: "Store",
      phone: "+27 21 550 1200",
      whatsapp: "27215501200",
      location: "Century City, Cape Town"
    },
    features: ["65-Inch 4K UHD", "Crystal Processor 4K", "Smart Tizen Hub", "2-Year Manufacturer Warranty"],
    featured: false
  },
  {
    id: "TAR-PRD-305",
    title: "5.5kVA Deye Hybrid Solar Inverter + 5.12kWh Shoto Lithium LiFePO4 Battery Kit",
    category: "solar",
    categoryLabel: "Solar & Power Backup",
    country: "ZW",
    countryName: "Zimbabwe",
    location: "Mutare",
    suburb: "CBD",
    price: 1390,
    currency: "USD",
    condition: "Brand New with 5-Year Warranty",
    verified: true,
    verificationBadge: "Certified Installer",
    lastUpdated: "Today",
    description: "Complete robust residential and commercial solar backup solution available in Mutare. Includes Deye 5.5kW high-yield hybrid inverter and Shoto 5.12kWh lithium iron phosphate battery (6000 cycles). Built-in Wi-Fi dongle for real-time smartphone monitoring and seamless generator auto-start support.",
    images: [
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
    ],
    seller: {
      name: "Manica Solar Solutions",
      type: "Certified Solar Supplier",
      phone: "+263 77 888 2211",
      whatsapp: "263778882211",
      location: "Main Street, Mutare CBD"
    },
    features: ["5.5kW Deye Inverter", "5.12kWh Shoto Lithium", "Wi-Fi Mobile App", "6000 Deep Cycles", "5-Year Warranty"],
    featured: true
  }
];

// Helper to get or initialize stored data in localStorage
export const TariData = {
  USD_TO_ZIG_RATE: 27.5,
  LOCATIONS_DATA,

  // LOCATION ENGINE (City-First with Scalable Global Hierarchy)
  getSelectedLocation: function () {
    try {
      const stored = localStorage.getItem("tariads_selected_location");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.name) return parsed;
      }
    } catch (e) {}

    // Default market: Harare, Zimbabwe
    return {
      id: "harare",
      name: "Harare",
      country: "ZW",
      countryName: "Zimbabwe",
      type: "city",
      area: ""
    };
  },

  getSelectedCity: function () {
    return this.getSelectedLocation().name || "Harare";
  },

  setSelectedLocation: function (loc) {
    if (!loc) return;
    try {
      localStorage.setItem("tariads_selected_location", JSON.stringify(loc));
      if (loc.country) {
        localStorage.setItem("tariads_country", loc.country);
      }
    } catch (e) {}
    window.dispatchEvent(
      new CustomEvent("tariads:location-changed", { detail: loc })
    );
    return loc;
  },

  setSelectedCity: function (name, country = "ZW", area = "", id = "") {
    const isAll = name === "All Zimbabwe" || name.startsWith("All ");
    const loc = {
      id: id || name.toLowerCase().replace(/[^a-z0-9]/g, "_"),
      name: name,
      country: country,
      countryName: country === "ZW" ? "Zimbabwe" : country === "ZA" ? "South Africa" : country === "UK" ? "United Kingdom" : country,
      type: isAll ? "country" : area ? "area" : "city",
      area: area || ""
    };
    return this.setSelectedLocation(loc);
  },

  searchLocations: function (query) {
    if (!query || !query.trim()) return [];
    const q = query.toLowerCase().trim();
    const results = [];
    const seen = new Set();

    // 1. Check Popular Cities
    if (Array.isArray(LOCATIONS_DATA.popularCities)) {
      for (const city of LOCATIONS_DATA.popularCities) {
        if (city.name.toLowerCase().includes(q)) {
          results.push({
            type: "city",
            id: city.id,
            name: city.name,
            country: city.country,
            countryName: city.countryName,
            subtitle: city.tag || `${city.countryName} City`
          });
          seen.add(city.name.toLowerCase());
        }
      }
    }

    // 2. Check Regions & Suburbs/Areas across all countries (preserving global scalability)
    for (const [countryCode, cities] of Object.entries(LOCATIONS_DATA.regions)) {
      const countryObj = LOCATIONS_DATA.countries.find((c) => c.code === countryCode);
      const countryName = countryObj ? countryObj.name : countryCode;

      for (const reg of cities) {
        // City match
        if (reg.name.toLowerCase().includes(q) && !seen.has(reg.name.toLowerCase())) {
          results.push({
            type: reg.isAll ? "country" : "city",
            id: reg.id,
            name: reg.name,
            country: reg.country,
            countryName: countryName,
            subtitle: reg.isAll ? `All listings in ${countryName}` : `${countryName} City`
          });
          seen.add(reg.name.toLowerCase());
        }

        // Suburb/Area match (e.g. Borrowdale -> Harare, Kumalo -> Bulawayo, Morningside -> Mutare)
        if (Array.isArray(reg.areas)) {
          for (const area of reg.areas) {
            if (area.toLowerCase().includes(q)) {
              results.push({
                type: "area",
                id: `${reg.id}_${area.toLowerCase().replace(/[^a-z0-9]/g, "_")}`,
                name: area,
                city: reg.name,
                country: reg.country,
                countryName: countryName,
                subtitle: `${reg.name}, ${countryName}`
              });
            }
          }
        }
      }
    }

    return results;
  },

  // Get active country filter (backward compatible)
  getSelectedCountry: function () {
    try {
      const loc = this.getSelectedLocation();
      if (loc && loc.country) return loc.country;
      return localStorage.getItem("tariads_country") || "ZW";
    } catch (e) {
      return "ZW";
    }
  },

  setSelectedCountry: function (countryCode) {
    try {
      localStorage.setItem("tariads_country", countryCode.toUpperCase());
      const countryObj = LOCATIONS_DATA.countries.find((c) => c.code === countryCode.toUpperCase());
      if (countryObj) {
        this.setSelectedCity(countryObj.name, countryObj.code);
      }
    } catch (e) {}
  },

  // PROPERTIES (Flagship)
  getProperties: function () {
    try {
      const stored = localStorage.getItem("tariads_properties_v4");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Could not read properties from localStorage:", e);
    }
    try {
      localStorage.setItem("tariads_properties_v4", JSON.stringify(INITIAL_PROPERTIES));
    } catch (e) {}
    return INITIAL_PROPERTIES;
  },

  getPropertyById: function (id) {
    return this.getProperties().find((p) => p.id === id) || null;
  },

  addProperty: function (newProp) {
    const list = this.getProperties();
    list.unshift(newProp);
    try {
      localStorage.setItem("tariads_properties_v4", JSON.stringify(list));
    } catch (e) {
      console.error("Storage error:", e);
    }
    return newProp;
  },

  // VEHICLES
  getVehicles: function () {
    try {
      const stored = localStorage.getItem("tariads_vehicles_v4");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {}
    try {
      localStorage.setItem("tariads_vehicles_v4", JSON.stringify(INITIAL_VEHICLES));
    } catch (e) {}
    return INITIAL_VEHICLES;
  },

  getVehicleById: function (id) {
    return this.getVehicles().find((v) => v.id === id) || null;
  },

  addVehicle: function (item) {
    const list = this.getVehicles();
    list.unshift(item);
    try {
      localStorage.setItem("tariads_vehicles_v4", JSON.stringify(list));
    } catch (e) {}
    return item;
  },

  // PRODUCTS
  getProducts: function () {
    try {
      const stored = localStorage.getItem("tariads_products_v4");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {}
    try {
      localStorage.setItem("tariads_products_v4", JSON.stringify(INITIAL_PRODUCTS));
    } catch (e) {}
    return INITIAL_PRODUCTS;
  },

  getProductById: function (id) {
    return this.getProducts().find((p) => p.id === id) || null;
  },

  addProduct: function (item) {
    const list = this.getProducts();
    list.unshift(item);
    try {
      localStorage.setItem("tariads_products_v4", JSON.stringify(list));
    } catch (e) {}
    return item;
  },

  // UNIVERSAL ITEM GETTER (by ID)
  getItemById: function (id) {
    if (!id) return null;
    if (id.startsWith("TAR-PROP") || id.startsWith("PROP") || id.startsWith("TAR-HRE") || id.startsWith("TAR-BYO")) {
      return { item: this.getPropertyById(id), type: "property" };
    }
    if (id.startsWith("TAR-VEH") || id.startsWith("VEH")) {
      return { item: this.getVehicleById(id), type: "vehicle" };
    }
    if (id.startsWith("TAR-PRD") || id.startsWith("PRD")) {
      return { item: this.getProductById(id), type: "product" };
    }
    // Check all collections as fallback
    const prop = this.getPropertyById(id);
    if (prop) return { item: prop, type: "property" };
    const veh = this.getVehicleById(id);
    if (veh) return { item: veh, type: "vehicle" };
    const prd = this.getProductById(id);
    if (prd) return { item: prd, type: "product" };
    return null;
  },

  // Saved / Bookmarks (supports items of any type)
  getSavedIds: function () {
    try {
      const s = localStorage.getItem("tariads_saved_ids");
      return s ? JSON.parse(s) : [];
    } catch (e) {
      return [];
    }
  },

  toggleSave: function (id) {
    let ids = this.getSavedIds();
    const idx = ids.indexOf(id);
    let saved = false;
    if (idx > -1) {
      ids.splice(idx, 1);
      saved = false;
    } else {
      ids.push(id);
      saved = true;
    }
    try {
      localStorage.setItem("tariads_saved_ids", JSON.stringify(ids));
    } catch (e) {}
    window.dispatchEvent(new CustomEvent("tariads:saved-changed", { detail: { count: ids.length, id, saved } }));
    return saved;
  },

  isSaved: function (id) {
    return this.getSavedIds().includes(id);
  },

  // Viewing Requests
  getViewingRequests: function () {
    try {
      const v = localStorage.getItem("tariads_viewing_requests");
      return v ? JSON.parse(v) : [];
    } catch (e) {
      return [];
    }
  },

  saveViewingRequest: function (req) {
    const list = this.getViewingRequests();
    const newReq = {
      id: "VR-" + Date.now().toString(36).toUpperCase(),
      createdAt: new Date().toISOString(),
      status: "Pending Landlord Confirmation",
      ...req
    };
    list.unshift(newReq);
    try {
      localStorage.setItem("tariads_viewing_requests", JSON.stringify(list));
    } catch (e) {}
    return newReq;
  },

  // Price Formatting
  formatPrice: function (amount, currency = "USD", period = "") {
    if (!amount && amount !== 0) return "Price on Request";
    const symbol = currency === "ZAR" ? "R" : currency === "GBP" ? "£" : currency === "EUR" ? "€" : "$";
    const formatted = symbol + Number(amount).toLocaleString("en-US");
    if (period === "month") return `${formatted} / month`;
    if (period === "night") return `${formatted} / night`;
    return formatted;
  },

  formatZiGGuide: function (amountUsd, country = "ZW") {
    if (country !== "ZW" || !amountUsd) return "";
    const zig = Math.round(amountUsd * this.USD_TO_ZIG_RATE);
    return `≈ ZiG ${zig.toLocaleString("en-US")} (indicative guide)`;
  }
};

// Make globally accessible in browser environment
if (typeof window !== "undefined") {
  window.TariData = TariData;
}
