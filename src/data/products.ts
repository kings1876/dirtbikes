import { Product } from '../types';

export const CATEGORIES = [
  {
    name: 'Surron',
    subcategories: ['Off-Road Only', 'Road Legal (ADR)'],
    description: 'The Sur-Ron Light Bee and Ultra/Storm Bee platforms — the bikes that started the electric dirt bike category. Agile, trail-proven, and backed by the largest aftermarket in the game.'
  },
  {
    name: 'Talaria',
    subcategories: ['Trail & Mid-Weight Enduro', 'Full-Size Motocross'],
    description: 'Gearbox-driven electric dirt bikes with a sealed oil-bath primary transmission, built for riders who want a mechanical clutch feel with zero-emission power.'
  },
  {
    name: 'Stark Future',
    subcategories: [],
    description: 'The Swedish-engineered VARG platform — full-size, 60hp-class electric motocross built to outperform 450cc four-strokes.'
  },
  {
    name: '79Bikes',
    subcategories: [],
    description: 'A lightweight, unconventional take on the electric dirt bike — smaller-wheeled, mid-drive machines built for playful off-road fun.'
  },
  {
    name: 'Yotsuba',
    subcategories: ['Kids 2-6 years old', 'Kids 6-10 years old'],
    description: 'Japanese-designed electric kids bikes with rear hub motors (no exposed chain or sprocket), 3-axis crash sensors, and key-locked speed limiters.'
  },
  {
    name: 'Takani',
    subcategories: ['Kids Electric Dirt Bikes', 'Adult & Teen Electric Dirt Bikes'],
    description: 'An Australian-designed (Brisbane) electric dirt bike brand built around a fully automatic chain-drive platform — no clutch, no gears, just twist-and-go.'
  },
  {
    name: 'Electric Balance Bikes',
    subcategories: ['Ages 2+', 'Ages 5+', 'Ages 6+'],
    description: 'The youngest riders start here — pedal-free electric balance bikes that build confidence before a geared dirt bike.'
  },
  {
    name: 'GMX Australian Dirt Bikes',
    subcategories: [
      'GMX Kids Series (70cc - 110cc)',
      'GMX Pit Bikes (125cc - 140cc)',
      'GMX Enduro (250cc Full-Size)',
      'GMX Electric Series'
    ],
    description: 'The iconic Australian off-road dirt bike lineup from GMX Motorbikes: 70cc to 250cc 4-stroke trail machines and high-output ECR electric dirt bikes built tough for Australian conditions.'
  },
  {
    name: 'Parts & Upgrades',
    subcategories: ['Batteries & Fast Chargers', 'Tires & Brakes', 'Rider Gear'],
    description: 'OEM rapid chargers, high-density swappable battery packs, and reinforced motocross accessories.'
  }
] as const;

export const PRODUCTS: Product[] = [
  {
    id: 'surron-light-bee-x',
    name: 'Surron Light Bee X (LBX)',
    slug: 'surron-light-bee-x',
    category: 'Surron',
    subcategory: 'Off-Road Only',
    price: 6990,
    badge: 'Popular',
    description: 'The world-famous agile electric trail bike that started the category. A 60V 40Ah battery and forged aluminium alloy frame deliver 6 kW of peak power in a chassis light enough to wheelie, drift, and jump.',
    features: [
      '6 kW Peak Brushless Motor',
      '60V 40Ah (2,400 Wh) Lithium Battery',
      'Forged Aluminium Alloy Frame',
      'The largest aftermarket parts ecosystem of any electric dirt bike'
    ],
    specs: {
      peakPower: '6.0 kW Peak',
      topSpeed: '75 km/h (47 mph)',
      batteryWh: '60V 40Ah (2,400 Wh)',
      range: 'Up to 75 km @ trail pace',
      chargeTime: '3-4 hours (Standard Charger)',
      weight: '56 kg (123 lbs)',
      suspension: 'Adjustable Front Forks & Rear Monoshock',
      brakes: 'Hydraulic Disc, Front & Rear',
      frame: 'Forged Aluminium Alloy',
      maxLoad: '120 kg (265 lbs)',
      waterproof: 'IP65 Splash Proof'
    },
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'First-time electric dirt bike buyers and riders who want the most widely supported platform on the market.'
  },
  {
    id: 'surron-ultra-bee',
    name: 'Surron Ultra Bee',
    slug: 'surron-ultra-bee',
    category: 'Surron',
    subcategory: 'Off-Road Only',
    price: 10240,
    badge: 'Popular',
    description: 'A mid-weight enduro step up from the Light Bee. A 74V 55Ah powerpack and 12.5 kW peak motor deliver 440 Nm of torque, backed by Surron Traction Control (SRTC) for confident power delivery on loose terrain.',
    features: [
      '12.5 kW Peak Motor with 440 Nm Torque',
      '74V 55Ah High-Capacity Battery',
      'Surron Traction Control (SRTC)',
      'Long-travel adjustable suspension front and rear'
    ],
    specs: {
      peakPower: '12.5 kW Peak',
      topSpeed: '90 km/h (56 mph)',
      batteryWh: '74V 55Ah',
      range: 'Up to 140 km @ trail pace',
      chargeTime: '4-5 hours (Standard Charger)',
      weight: '68 kg (150 lbs)',
      suspension: 'Long-Travel Adjustable Forks & Rear Monoshock',
      brakes: 'Hydraulic Disc, Front & Rear',
      frame: 'Forged Aluminium Alloy',
      maxLoad: '130 kg (287 lbs)',
      waterproof: 'IP65 Splash Proof'
    },
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Intermediate to advanced riders wanting more range and torque than the Light Bee X.'
  },
  {
    id: 'surron-storm-bee-enduro',
    name: 'Surron Storm Bee Enduro',
    slug: 'surron-storm-bee-enduro',
    category: 'Surron',
    subcategory: 'Full-Size Motocross',
    price: 14990,
    badge: 'Premium',
    description: 'Surron\'s heavyweight full-size motocross machine. A 96V system delivers 22.5 kW peak power and 520 Nm of rear-wheel torque through full-size 21"/18" MX wheels — built to compete, not just play.',
    features: [
      '22.5 kW Peak Motor with 520 Nm Rear-Wheel Torque',
      '96V High-Voltage Battery System',
      'Full-Size 21" Front / 18" Rear MX Wheels',
      'Motocross-spec long-travel suspension'
    ],
    specs: {
      peakPower: '22.5 kW Peak',
      topSpeed: '110 km/h (68 mph)',
      batteryWh: '96V High-Capacity Pack',
      range: 'Up to 100 km @ trail pace',
      chargeTime: '4-5 hours (Standard Charger)',
      weight: '74 kg (163 lbs)',
      suspension: 'Full MX-Spec Long-Travel Inverted Forks & Rear Shock',
      brakes: 'Hydraulic Disc, Front & Rear',
      frame: 'Forged Aluminium Alloy',
      maxLoad: '135 kg (297 lbs)',
      waterproof: 'IP65 Splash Proof'
    },
    image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Competitive riders and full-size motocross racers wanting the highest-output Surron platform.'
  },
  {
    id: 'surron-ultra-bee-road-adr',
    name: 'Surron Ultra Bee Road (ADR L1e)',
    slug: 'surron-ultra-bee-road-adr',
    category: 'Surron',
    subcategory: 'Road Legal (ADR)',
    price: 10490,
    badge: 'New',
    description: 'The road-registerable Ultra Bee. Australian Design Rules (ADR) compliant with mirrors, indicators, horn, and dual-sport road gear, so it can be registered for street use as well as trail riding.',
    features: [
      'ADR L1e Road Compliance Package (Mirrors, Indicators, Horn)',
      '12.5 kW Peak Motor with 440 Nm Torque',
      '74V 55Ah High-Capacity Battery',
      'Dual-sport tyres for road and trail'
    ],
    specs: {
      peakPower: '12.5 kW Peak',
      topSpeed: '90 km/h (56 mph)',
      batteryWh: '74V 55Ah',
      range: 'Up to 140 km @ trail pace',
      chargeTime: '4-5 hours (Standard Charger)',
      weight: '70 kg (154 lbs)',
      suspension: 'Long-Travel Adjustable Forks & Rear Monoshock',
      brakes: 'Hydraulic Disc, Front & Rear',
      frame: 'Forged Aluminium Alloy',
      maxLoad: '130 kg (287 lbs)',
      waterproof: 'IP65 Splash Proof'
    },
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Riders who want one bike that can be registered for the street and still ride trails on weekends. Road registration requires state-based compliance — confirm requirements with Kanvale before ordering.'
  },
  {
    id: 'talaria-sting-r-mx4',
    name: 'Talaria Sting R MX4',
    slug: 'talaria-sting-r-mx4',
    category: 'Talaria',
    subcategory: 'Trail & Mid-Weight Enduro',
    price: 7000,
    badge: 'Popular',
    description: 'A gearbox-driven 60V electric dirt bike with a sealed oil-bath primary transmission and IPM motor — built for riders who want the mechanical feel of a geared drivetrain without belt failures.',
    features: [
      '8 kW Peak Gearbox-Driven Motor',
      'Sealed Oil-Bath Primary Transmission',
      'IPM (Interior Permanent Magnet) Motor',
      'No primary belt to wear or fail'
    ],
    specs: {
      peakPower: '8.0 kW Peak',
      topSpeed: '85 km/h (53 mph)',
      batteryWh: '60V High-Capacity Pack',
      range: 'Up to 85 km @ trail pace',
      chargeTime: '3-4 hours (Standard Charger)',
      weight: '62 kg (137 lbs)',
      suspension: 'Adjustable Front Forks & Rear Monoshock',
      brakes: 'Hydraulic Disc, Front & Rear',
      frame: 'Aluminium Alloy',
      maxLoad: '120 kg (265 lbs)',
      waterproof: 'IP65 Splash Proof'
    },
    image: 'https://images.unsplash.com/photo-1509744645300-a2098b11871a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509744645300-a2098b11871a?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Trail riders who prefer a gearbox-driven drivetrain over a belt or direct-drive system.'
  },
  {
    id: 'talaria-sting-pro-mx5',
    name: 'Talaria Sting Pro MX5',
    slug: 'talaria-sting-pro-mx5',
    category: 'Talaria',
    subcategory: 'Trail & Mid-Weight Enduro',
    price: 8000,
    badge: 'Premium',
    description: 'The flagship factory hot-rod of the Sting lineup. A 72V 13.5 kW motor produces 500 Nm of wheel torque, matched to upgraded FastAce inverted forks and oversized DOT-rated brake rotors.',
    features: [
      '13.5 kW Peak Motor with 500 Nm Wheel Torque',
      'FastAce Inverted Front Forks',
      'Oversized DOT-Rated Brake Rotors',
      'Sealed Oil-Bath Gearbox Transmission'
    ],
    specs: {
      peakPower: '13.5 kW Peak',
      topSpeed: '95 km/h (59 mph)',
      batteryWh: '72V High-Capacity Pack',
      range: 'Up to 100 km @ trail pace',
      chargeTime: '3-4 hours (Standard Charger)',
      weight: '65 kg (143 lbs)',
      suspension: 'FastAce Inverted Front Forks & Rear Monoshock',
      brakes: 'Oversized DOT-Rated Hydraulic Disc, Front & Rear',
      frame: 'Aluminium Alloy',
      maxLoad: '125 kg (276 lbs)',
      waterproof: 'IP65 Splash Proof'
    },
    image: 'https://images.unsplash.com/photo-1571932646633-8758b29c9b1f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571932646633-8758b29c9b1f?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Advanced trail riders wanting the highest-spec Sting model before stepping up to the full-size Komodo.'
  },
  {
    id: 'talaria-komodo',
    name: 'Talaria Komodo',
    slug: 'talaria-komodo',
    category: 'Talaria',
    subcategory: 'Full-Size Motocross',
    price: 9000,
    badge: 'New',
    description: 'A high-voltage 84V full-size electric motocross contender. Link-type rear suspension and a full 21"/18" wheelset put it in direct competition with full-size four-stroke motocrossers.',
    features: [
      '22 kW Peak Motor',
      '84V High-Voltage Battery System',
      'Link-Type Rear Suspension',
      'Full-Size 21" Front / 18" Rear Wheelset'
    ],
    specs: {
      peakPower: '22.0 kW Peak',
      topSpeed: '115 km/h (71 mph)',
      batteryWh: '84V High-Capacity Pack',
      range: 'Up to 110 km @ trail pace',
      chargeTime: '4-5 hours (Standard Charger)',
      weight: '72 kg (159 lbs)',
      suspension: 'Link-Type Rear Suspension & Full MX Front Forks',
      brakes: 'Hydraulic Disc, Front & Rear',
      frame: 'Aluminium Alloy',
      maxLoad: '135 kg (297 lbs)',
      waterproof: 'IP65 Splash Proof'
    },
    image: 'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Competitive riders wanting Talaria\'s full-size motocross platform.'
  },
  {
    id: 'stark-varg-mx-60hp',
    name: 'Stark VARG MX (60hp)',
    slug: 'stark-varg-mx-60hp',
    category: 'Stark Future',
    subcategory: 'Full-Size Motocross',
    price: 18990,
    badge: 'Premium',
    description: 'The Swedish-engineered electric motocross revolution. A 360V carbon-sleeve motor produces up to 45 kW (60hp) and 938 Nm of wheel torque, with smartphone-adjustable power curves for every track condition.',
    features: [
      '45 kW (60hp) Peak Output',
      '938 Nm Wheel Torque',
      'Carbon-Sleeve Motor Construction',
      'Smartphone App Power Curve Tuning'
    ],
    specs: {
      peakPower: '45.0 kW (60 hp) Peak',
      topSpeed: '130 km/h (81 mph)',
      batteryWh: '360V High-Voltage System',
      range: 'Up to 6 hours trail riding / full Pro MX moto',
      chargeTime: '4-5 hours (Standard Charger)',
      weight: '108 kg (238 lbs)',
      suspension: 'Full Works-Level MX Suspension, Front & Rear',
      brakes: 'Hydraulic Disc, Front & Rear',
      frame: 'Full-Size Motocross Chassis',
      maxLoad: '140 kg (309 lbs)',
      waterproof: 'IP65 Splash Proof'
    },
    image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Serious competitive motocross racers wanting the highest-output electric bike in the Kanvale lineup.'
  },
  {
    id: '79bikes-viper-s',
    name: '79Bikes Viper S',
    slug: '79bikes-viper-s',
    category: '79Bikes',
    subcategory: 'Off-Road Only',
    price: 3750,
    badge: 'Best Value',
    description: 'A lightweight electric bike with a unique design somewhere between a dirt bike and a scooter. A 3,500W mid-drive motor, FastAce suspension, and hydraulic brakes deliver strong torque and quick acceleration.',
    features: [
      '3,500W Mid-Drive Motor, 165 Nm Max Torque',
      '48V 25Ah Battery with 48V 200A Controller',
      'FastAce Suspension, Front & Rear',
      'TFT Display with Regenerative Braking'
    ],
    specs: {
      peakPower: '3.5 kW (3,500W)',
      topSpeed: '50 km/h (31 mph)',
      batteryWh: '48V 25Ah',
      range: '60 km @ 25 km/h',
      chargeTime: '3-4 hours (48V 4A Charger)',
      weight: '43 kg (95 lbs)',
      suspension: 'FastAce 155mm Front / 42mm Rear Travel',
      brakes: 'Hydraulic 203mm Discs, Front & Rear',
      frame: 'Steel/Aluminium Composite',
      maxLoad: '100 kg (220 lbs)',
      waterproof: 'IP65 Splash Proof'
    },
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Riders wanting something different from the standard dirt-bike form factor for off-road fun.'
  },
  {
    id: '79bike-falcon-gt',
    name: '79Bike Falcon GT',
    slug: '79bike-falcon-gt',
    category: '79Bikes',
    subcategory: 'Off-Road Only',
    price: 4799,
    originalPrice: 4999,
    badge: 'Premium',
    description: '79Bike\'s flagship model. A 16.8 kW peak motor and adjustable FastAce fork with high/low-speed tuning give the GT the most refined ride in the 79Bike lineup, plus an NFC-unlock dashboard.',
    features: [
      '16.8 kW Peak Mid-Mounted Motor, 610 Nm Torque',
      '72V 40Ah Samsung 50S Battery',
      'FastAce Fork with High & Low-Speed Adjustment',
      'Upgraded Dashboard with NFC Unlock'
    ],
    specs: {
      peakPower: '16.8 kW Peak',
      topSpeed: '95 km/h (59 mph)',
      batteryWh: '72V 40Ah (Samsung 50S)',
      range: 'Up to 120 km',
      chargeTime: '3-4 hours',
      weight: '69 kg (152 lbs)',
      suspension: 'FastAce Adjustable Fork & Rear Shock',
      brakes: '220mm Hydraulic Disc, Front & Rear',
      frame: 'Aluminum Alloy',
      maxLoad: 'Not published by manufacturer',
      waterproof: 'Not published by manufacturer'
    },
    image: 'https://images.unsplash.com/photo-1571932646633-8758b29c9b1f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571932646633-8758b29c9b1f?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Riders who want the highest-spec 79Bike model with the most refined suspension and tech.'
  },
  {
    id: '79bike-falcon-pro',
    name: '79Bike Falcon Pro',
    slug: '79bike-falcon-pro',
    category: '79Bikes',
    subcategory: 'Off-Road Only',
    price: 3799,
    originalPrice: 3999,
    badge: 'Popular',
    description: '79Bike\'s best-known model. A 10 kW mid-mounted motor and 72V 35Ah LG battery deliver a claimed 75-mile range, with an NFC-unlock dashboard and light-sensing day/night display.',
    features: [
      '10 kW Peak Mid-Mounted Motor, 410 Nm Torque',
      '72V 35Ah LG Lithium Battery',
      'Fastace 2.0 Front Fork',
      'NFC Unlock & Auto Day/Night Dashboard'
    ],
    specs: {
      peakPower: '10.0 kW Peak',
      topSpeed: '90 km/h (56 mph)',
      batteryWh: '72V 35Ah (LG Lithium)',
      range: 'Up to 121 km (75 miles)',
      chargeTime: '3.5 hours',
      weight: '59 kg (130 lbs)',
      suspension: 'Fastace 2.0 Front Fork & Rear Shock',
      brakes: 'Hydraulic Disc, Front & Rear',
      frame: 'Aluminum Alloy',
      maxLoad: 'Not published by manufacturer',
      waterproof: 'Not published by manufacturer'
    },
    image: 'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: '79Bike\'s most popular all-round model for trail riders wanting a balance of power and range.'
  },
  {
    id: '79bike-falcon-lite',
    name: '79Bike Falcon Lite',
    slug: '79bike-falcon-lite',
    category: '79Bikes',
    subcategory: 'Off-Road Only',
    price: 2499,
    badge: 'Best Value',
    description: 'The entry point into the 79Bike range. Built for beginners and everyday trail riding, with an 8 kW mid-drive motor and adjustable 200mm front fork at the lowest price in the lineup.',
    features: [
      '8 kW Peak Mid-Drive Motor, 340 Nm Torque',
      '72V 30Ah NMC Lithium Battery (M50LT Cells)',
      'Adjustable 200mm Front Fork, 85mm Rear Travel',
      'E / D / S Multi-Mode Power Control'
    ],
    specs: {
      peakPower: '8.0 kW Peak',
      topSpeed: '84 km/h (52 mph)',
      batteryWh: '72V 30Ah (NMC Lithium)',
      range: 'Up to 80 km (50 miles)',
      chargeTime: '3-4 hours',
      weight: '63 kg (138 lbs)',
      suspension: 'Adjustable 200mm Front Fork & 85mm Rear Travel',
      brakes: 'Front 220mm / Rear 203mm Hydraulic Disc',
      frame: 'Aluminum Alloy',
      maxLoad: 'Not published by manufacturer',
      waterproof: 'Not published by manufacturer'
    },
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Beginner riders wanting the most affordable genuine 79Bike model.'
  },
  {
    id: '79bike-lynx',
    name: '79Bike Lynx',
    slug: '79bike-lynx',
    category: '79Bikes',
    subcategory: 'Off-Road Only',
    price: 3999,
    originalPrice: 4199,
    badge: 'New',
    description: 'A 12 kW mid-drive motor and long-range 72V 40Ah battery, with a built-in Bluetooth speaker system and dual suspension tuned to soak up rough terrain.',
    features: [
      '12 kW Peak Mid-Drive Motor, 410 Nm Torque',
      '72V 40Ah Long-Range Battery',
      'Built-in Bluetooth Speaker System',
      'FastAce Front Fork & Rear Shock Absorber'
    ],
    specs: {
      peakPower: '12.0 kW Peak',
      topSpeed: '90 km/h (56 mph)',
      batteryWh: '72V 40Ah',
      range: 'Long-range (exact figure not published)',
      chargeTime: '4 hours',
      weight: '66 kg (146 lbs)',
      suspension: 'FastAce Front Fork & Rear Shock Absorber',
      brakes: 'Hydraulic Disc, Front & Rear',
      frame: 'Aluminum Alloy',
      maxLoad: 'Not published by manufacturer',
      waterproof: 'Not published by manufacturer'
    },
    image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Riders who want dual suspension comfort and a built-in Bluetooth speaker on the trail.'
  },
  {
    id: '79bike-yvolt-surge-v',
    name: '79Bike Yvolt Surge V',
    slug: '79bike-yvolt-surge-v',
    category: '79Bikes',
    subcategory: 'Off-Road Only',
    price: 5999,
    badge: 'Premium',
    description: '79Bike\'s most powerful model. A 97.2V system delivers 35 kW peak and 948 Nm of torque for instant acceleration, wrapped in a forged aluminum frame with pro-grade air suspension and full IP67 protection.',
    features: [
      '35 kW Peak Motor, 948 Nm Torque',
      '97.2V 45Ah High-Voltage Battery',
      'Forged Aluminum Frame with Pro-Grade Air Suspension',
      'IP67 Fully Submersible Waterproof Rating'
    ],
    specs: {
      peakPower: '35.0 kW Peak (47.6 PS)',
      topSpeed: '110 km/h (68 mph)',
      batteryWh: '97.2V 45Ah',
      range: 'Up to 120 km @ 25 km/h',
      chargeTime: 'Fast Charge (15A)',
      weight: 'Not published by manufacturer',
      suspension: 'Pro-Grade Air Suspension',
      brakes: 'Hydraulic Disc, Front & Rear',
      frame: 'Forged Aluminum',
      maxLoad: '120 kg (265 lbs)',
      waterproof: 'IP67 Fully Submersible'
    },
    image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Advanced riders wanting the single most powerful bike in the entire Kanvale range.'
  },
  {
    id: 'yotsuba-moto-12',
    name: 'Yotsuba Moto 12 Electric Kids Bike',
    slug: 'yotsuba-moto-12',
    category: 'Yotsuba',
    subcategory: 'Kids 2-6 years old',
    price: 799,
    originalPrice: 999,
    badge: 'Sale',
    description: 'A compact 12" wheel electric kids bike for riders aged 2 to 6 (height 85-90cm). No chain or sprocket — the motor sits in the rear hub — with a 3-axis crash sensor and key-locked speed settings.',
    features: [
      'Rear Hub Motor — No Chain or Sprocket',
      '3-Axis Crash Sensor with Automatic Power Cutoff',
      'Key-Locked 3-Speed Settings (6.5 / 11 / 18 km/h)',
      'Just 12.5 kg total weight'
    ],
    specs: {
      peakPower: 'Rear Hub Motor',
      topSpeed: '18 km/h (11 mph) — Key-Locked to 6.5, 11, or 18 km/h',
      batteryWh: 'Removable Lithium-Ion Pack',
      range: 'Approx. 30-60 minutes riding time',
      chargeTime: 'Approx. 2 hours',
      weight: '12.5 kg (28 lbs)',
      suspension: 'None (rigid frame)',
      brakes: 'None (motor cutoff on crash sensor)',
      frame: 'Lightweight Aluminum',
      maxLoad: '35 kg (77 lbs)',
      waterproof: 'Splash Resistant'
    },
    image: 'https://images.unsplash.com/photo-1547025603-ef90c50b64d0?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1547025603-ef90c50b64d0?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'The youngest riders (ages 2-6, height 85-90cm) taking their first steps into powered two wheels.'
  },
  {
    id: 'yotsuba-moto-16',
    name: 'Yotsuba Moto 16 Electric Kids Bike',
    slug: 'yotsuba-moto-16',
    category: 'Yotsuba',
    subcategory: 'Kids 6-10 years old',
    price: 1099,
    badge: 'Popular',
    description: 'A 16" wheel step-up from the Moto 12 for riders aged 6 to 12 (height 100cm+). Same chain-free rear hub motor design and 3-axis crash sensor, with a higher top speed setting for growing confidence.',
    features: [
      'Rear Hub Motor — No Chain or Sprocket',
      '3-Axis Crash Sensor with Steering Dampening',
      'Key-Locked 3-Speed Settings (7 / 13 / 21 km/h)',
      'Just 12 kg total weight'
    ],
    specs: {
      peakPower: 'Rear Hub Motor',
      topSpeed: '21 km/h (13 mph) — Key-Locked to 7, 13, or 21 km/h',
      batteryWh: 'Removable Lithium-Ion Pack',
      range: 'Approx. 30-60 minutes riding time',
      chargeTime: 'Approx. 2 hours',
      weight: '12.0 kg (26 lbs)',
      suspension: 'None (rigid frame)',
      brakes: 'None (motor cutoff on crash sensor)',
      frame: 'Lightweight Aluminum',
      maxLoad: '40 kg (88 lbs)',
      waterproof: 'Splash Resistant'
    },
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Kids ages 6-12 (height 100cm+) ready to progress beyond the Moto 12.'
  },
  {
    id: 'kka-electric-balance-bike-12',
    name: 'KKA Electric Balance Bike - 12"',
    slug: 'kka-electric-balance-bike-12',
    category: 'Electric Balance Bikes',
    subcategory: 'Ages 2+',
    price: 649,
    badge: 'none',
    description: 'An electric balance bike for the youngest riders (2+ years, under 35kg) with little or no experience on a balance bike, ready to learn balance and throttle confidence.',
    features: [
      'Quick-Change Lithium-Ion Battery (Push-Button Release)',
      'Ultra-Low Adjustable Seat Height (max 33cm)',
      'Lightweight Aluminum TIG-Welded Frame (7.7 kg)',
      'Tapered Footrests for Growing Confidence'
    ],
    specs: {
      peakPower: '18V / 120W',
      topSpeed: '8-13 km/h',
      batteryWh: '18V 5Ah Lithium Battery',
      range: '30-60 minutes per charge',
      chargeTime: 'Approx. 1.5 hours',
      weight: '7.7 kg (17 lbs)',
      suspension: 'None (rigid frame)',
      brakes: 'None (balance bike — throttle release to stop)',
      frame: 'Aluminum TIG-Welded, Steel BMX-Style Fork',
      maxLoad: '35 kg (77 lbs)',
      waterproof: 'Splash Resistant'
    },
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Riders 2+ years old, under 35kg, with little or no balance bike experience.'
  },
  {
    id: 'kka-electric-balance-bike-16',
    name: 'KKA Electric Balance Bike - 16"',
    slug: 'kka-electric-balance-bike-16',
    category: 'Electric Balance Bikes',
    subcategory: 'Ages 6+',
    price: 795,
    originalPrice: 895,
    badge: 'Sale',
    description: 'For young riders 6+ years old, under 40kg, who have some balance bike experience and need a taller, more powerful step-up model. A high-output brushless motor adds low-end power and torque.',
    features: [
      'Quick-Change Lithium-Ion Battery (Push-Button Release)',
      'Ultra-Low Adjustable Seat Height (max 17")',
      'Lightweight Aluminum TIG-Welded Frame (9 kg)',
      'Tapered Footrests for Confident Foot Position'
    ],
    specs: {
      peakPower: '18V / 180W',
      topSpeed: '10-16 km/h',
      batteryWh: '18V 5Ah Lithium Battery',
      range: '30-60 minutes per charge',
      chargeTime: 'Approx. 1.5 hours',
      weight: '9.0 kg (20 lbs)',
      suspension: 'None (rigid frame)',
      brakes: 'None (balance bike — throttle release to stop)',
      frame: 'Aluminum TIG-Welded, Steel BMX-Style Fork',
      maxLoad: '45 kg (99 lbs)',
      waterproof: 'Splash Resistant'
    },
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Riders 6+ years old, under 40kg, stepping up from a smaller balance bike.'
  },
  {
    id: 'takani-tk1652-rs',
    name: 'TAKANI TK1652-RS 16" Electric Balance Bike',
    slug: 'takani-tk1652-rs',
    category: 'Electric Balance Bikes',
    subcategory: 'Ages 5+',
    price: 1300,
    badge: 'Premium',
    description: 'Australia\'s highest-powered electric balance bike. A 52V system with a hot-swappable 180Wh battery, adjustable hydraulic front suspension, and a stiffened frame — built for kids ready to push past a basic balance bike.',
    features: [
      '52V High-Speed Brushless Hub Motor (350W, optional 700W upgrade)',
      'Hot-Swappable 52V 180Wh Battery (Tool-less)',
      'Adjustable Hydraulic Front Suspension (70mm Travel)',
      '3 Selectable Speed Settings (10 / 18 / 27 km/h)'
    ],
    specs: {
      peakPower: '350W (Optional 700W Racing Controller)',
      topSpeed: '27 km/h (Optional upgrade to 35 km/h)',
      batteryWh: '52V Lithium-Ion, 180Wh (Hot-Swappable)',
      range: 'Approx. 20 km',
      chargeTime: '2-3 hours',
      weight: '12.5 kg (28 lbs)',
      suspension: 'Adjustable Hydraulic Front Fork (70mm Travel)',
      brakes: 'Rear 160mm Disc (Front-Brake-Ready, Optional Kit)',
      frame: '6061 Aluminium Alloy',
      maxLoad: '45 kg (99 lbs)',
      waterproof: 'Not IP-rated (electronic motor shut-off on fault)'
    },
    image: 'https://images.unsplash.com/photo-1547025603-ef90c50b64d0?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1547025603-ef90c50b64d0?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Riders 5-10 years old, under 45kg, wanting the highest-powered balance bike on the market.'
  },
  {
    id: 'takani-tk1010-20',
    name: 'TAKANI TK1010-20 2400W Kids Electric Dirt Bike',
    slug: 'takani-tk1010-20',
    category: 'Takani',
    subcategory: 'Kids Electric Dirt Bikes',
    price: 2499,
    badge: 'Popular',
    description: 'A fully automatic electric dirt bike for young riders — no clutch, no gears, just twist and go. A 600mm seat height and adjustable, lockable top speed make it a natural step up from a balance bike.',
    features: [
      '2,400W Peak Power, Fully Automatic Chain Drive',
      'LiFePO4 Battery with 90-Second Swap',
      'Adjustable & Lockable Top Speed (Parent-Controlled)',
      'Light Anodised Aluminium Wheels'
    ],
    specs: {
      peakPower: '2,400W Peak',
      topSpeed: '55 km/h (Adjustable & Lockable)',
      batteryWh: 'LiFePO4 (Samford EMX)',
      range: 'Approx. 1 hour continuous riding',
      chargeTime: '3 hours',
      weight: 'Not published by manufacturer',
      suspension: 'Standard Front Forks & Rear Shock',
      brakes: 'Adjustable E-Bike Brakes (Samford EMX)',
      frame: 'Steel, Seat Height 600mm',
      maxLoad: 'Not published by manufacturer',
      waterproof: 'Not IP-rated (electronic motor shut-off on fault)'
    },
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Kids ages 4-7, comparable in size/performance to a 50cc petrol trail bike but far easier to ride.'
  },
  {
    id: 'takani-tk1412-20',
    name: 'TAKANI TK1412-20 2400W Electric Dirt Bike',
    slug: 'takani-tk1412-20',
    category: 'Takani',
    subcategory: 'Kids Electric Dirt Bikes',
    price: 2649,
    badge: 'Popular',
    description: 'The larger-wheeled sibling of the TK1010-20, identical in every way except a taller 680mm seat height and bigger wheels — built for riders who\'ve outgrown the smaller model.',
    features: [
      '2,400W Peak Power, Fully Automatic Chain Drive',
      'LiFePO4 Battery with 90-Second Swap',
      'Adjustable & Lockable Top Speed (Parent-Controlled)',
      'Heavy-Duty Adjustable E-Moto Brakes'
    ],
    specs: {
      peakPower: '2,400W Peak',
      topSpeed: '55 km/h (Adjustable & Lockable)',
      batteryWh: 'LiFePO4 (Samford EMX)',
      range: 'Approx. 1 hour continuous riding',
      chargeTime: '3 hours',
      weight: 'Not published by manufacturer',
      suspension: 'Standard Front Forks & Rear Shock',
      brakes: 'Adjustable Heavy-Duty E-Moto Brakes (Samford EMX)',
      frame: 'Steel, Seat Height 680mm',
      maxLoad: 'Not published by manufacturer',
      waterproof: 'Not IP-rated (electronic motor shut-off on fault)'
    },
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Kids ages 7-11, comparable in size/performance to a 50-80cc petrol trail bike but far easier to ride.'
  },
  {
    id: 'takani-tk1714-70',
    name: 'TAKANI TK1714-70 72V Electric Dirt Bike',
    slug: 'takani-tk1714-70',
    category: 'Takani',
    subcategory: 'Adult & Teen Electric Dirt Bikes',
    price: 4500,
    originalPrice: 5000,
    badge: 'Sale',
    description: 'TAKANI\'s serious-performance model for riders 16+. An 8,000W encoder-controlled mid-drive motor and genuine Samsung 35Ah swappable battery deliver comparable performance to an 85cc two-stroke, fully automatic with no clutch or gears.',
    features: [
      '8,000W Peak Motor, 240 Nm Adjustable Torque',
      'Genuine Samsung 35Ah Swappable Battery',
      '3 Selectable Speed Settings (45 / 65 / 80 km/h)',
      'Hydraulic Upside-Down Forks & 4-Piston Hydraulic Brakes'
    ],
    specs: {
      peakPower: '8,000W Peak (240 Nm Adjustable Torque)',
      topSpeed: '80 km/h (45 / 65 / 80 km/h settings)',
      batteryWh: '84V Max (72V Nominal) 35Ah Samsung Cells',
      range: 'Approx. 60 minutes runtime',
      chargeTime: '5-6 hours',
      weight: '72 kg (159 lbs)',
      suspension: 'Hydraulic Upside-Down Front Fork & Adjustable Mono Shock',
      brakes: 'Hydraulic 4-Piston Calipers with Electronic Motor Shut-Off',
      frame: 'Aluminium Cast/Forged Triple Clamp, Seat Height 820mm',
      maxLoad: '90 kg (198 lbs)',
      waterproof: 'Not IP-rated (electronic motor shut-off on fault)'
    },
    image: 'https://images.unsplash.com/photo-1509744645300-a2098b11871a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509744645300-a2098b11871a?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Riders 16+ years old, 158cm+, up to 90kg, wanting a serious-performance step up from a learner bike. Off-road/private property use only — not road legal.'
  },
  {
    id: 'rapid-supercharger-15a-72v-80v',
    name: 'Rapid Supercharger 15A (72V/80V Smart Charger)',
    slug: 'rapid-supercharger-15a-72v-80v',
    category: 'Parts & Upgrades',
    subcategory: 'Batteries & Fast Chargers',
    price: 349,
    badge: 'Best Value',
    description: 'Cuts charging time by more than 50%. Built with smart active cooling fans, aluminum heat sinks, and multi-stage CC/CV digital microprocessor charging to maximize cell longevity.',
    features: [
      'Smart 15 Amp Ultra-Fast Output',
      'Dual Voltage Auto-Detection (72V & 80V packs)',
      'Digital LED Display showing real-time voltage, current, and temperature',
      'Short-circuit, over-current, and thermal auto-cutoff safety protection'
    ],
    specs: {
      peakPower: '1200W Output',
      topSpeed: 'N/A',
      batteryWh: 'Compatible with 60V-80V packs',
      range: 'N/A',
      chargeTime: 'Cuts recharge to ~2 hours',
      weight: '3.2 kg',
      suspension: 'N/A',
      brakes: 'N/A',
      frame: 'Anodized Billet Aluminum Enclosure',
      maxLoad: 'N/A',
      waterproof: 'IP54 Splash Resistant'
    },
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'All electric dirt bike owners wanting rapid pit-stop charges between rides.'
  },
  {
    id: 'gmx-70cc-kids-dirt-bike',
    name: 'GMX 70cc Kids Dirt Bike (Semi-Auto)',
    slug: 'gmx-70cc-kids-dirt-bike-semi-auto',
    category: 'GMX Australian Dirt Bikes',
    subcategory: 'GMX Kids Series (70cc - 110cc)',
    price: 879,
    originalPrice: 1099,
    badge: 'Sale',
    description: 'Designed specifically for young Australian trail riders transitioning from balance bikes. Powered by a dependable 70cc 4-stroke engine with push-button electric start, smooth 4-speed semi-automatic transmission (no clutch stalling), and an adjustable parental throttle speed limiter.',
    features: [
      '70cc 4-Stroke High-Reliability Air-Cooled Engine',
      'Push-Button Electric Start & Kick Start Backup',
      '4-Speed Semi-Automatic Gearbox (Effortless Foot Shifting Without Clutch)',
      'Parental Adjustable Throttle Governor to limit top speed for beginners',
      'Front & Rear Hydraulic Wave Disc Brakes with Child-Sized Levers',
      'Heavy-Duty Cradle Steel Tube Frame with Protective Bash Plate'
    ],
    specs: {
      peakPower: '70cc 4-Stroke (4.5 HP)',
      topSpeed: '50 km/h (Governed to 15-50 km/h)',
      batteryWh: '3.0L Unleaded Fuel Tank + 12V Starter Battery',
      range: '75 km trail range per tank',
      chargeTime: 'Instant Refuel (Push-Button Start)',
      weight: '52 kg (115 lbs)',
      suspension: 'Heavy-Duty Front Telescopic Inverted Forks & Rear Monoshock',
      brakes: 'Front & Rear Hydraulic Wave Disc Brakes',
      frame: 'Reinforced Cradle Steel Tube Frame',
      maxLoad: '65 kg (143 lbs)',
      waterproof: 'Weatherproof Sealed Airbox & Electrical Harness'
    },
    image: 'https://images.unsplash.com/photo-1547025603-ef90c50b64d0?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1547025603-ef90c50b64d0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Kids ages 6 to 11 learning trail control, throttle discipline, and foot shifting.'
  },
  {
    id: 'gmx-crossfire-cf110-youth',
    name: 'GMX Crossfire CF110 110cc Youth Dirt Bike',
    slug: 'gmx-crossfire-cf110-110cc-youth-dirt-bike',
    category: 'GMX Australian Dirt Bikes',
    subcategory: 'GMX Kids Series (70cc - 110cc)',
    price: 1770,
    badge: 'Best Value',
    description: 'The premier intermediate youth dirt bike built tough for Australian paddock and trail conditions. Features an electric-start 110cc 4-stroke engine, 4-speed semi-automatic gearbox, upside-down hydraulic front forks, and 14"/12" knobby off-road wheels.',
    features: [
      '110cc 4-Stroke OHC High-Torque Engine',
      'Push-Button Electric Start with Keyed Ignition',
      '4-Speed Semi-Automatic Transmission',
      'Upside Down (USD) Hydraulic Front Forks & Preload-Adjustable Rear Shock',
      'Hydraulic Ventilated Disc Brakes Front and Rear',
      'High-Impact Polypropylene Motocross Plastics'
    ],
    specs: {
      peakPower: '110cc 4-Stroke (7.0 HP)',
      topSpeed: '65 km/h (40 mph)',
      batteryWh: '3.5L Unleaded Fuel Tank + 12V 4Ah Starter Battery',
      range: '85 km trail range per tank',
      chargeTime: 'Instant Refuel (Key Electric Start)',
      weight: '64 kg (141 lbs)',
      suspension: 'USD Inverted Front Telescopic Shocks & Linkage Rear Monoshock',
      brakes: 'Front & Rear Hydraulic Wave Disc Brakes',
      frame: 'Thick-Wall High-Tensile Steel Cradle Chassis',
      maxLoad: '80 kg (176 lbs)',
      waterproof: 'IP65 Weatherproof Sealed Wiring Loom'
    },
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Youth riders ages 8 to 14 seeking increased power, agility, and trail capability.'
  },
  {
    id: 'gmx-125cc-pro-x-pit-bike',
    name: 'GMX 125cc Pro X Pit & Trail Dirt Bike',
    slug: 'gmx-125cc-pro-x-pit-trail-dirt-bike',
    category: 'GMX Australian Dirt Bikes',
    subcategory: 'GMX Pit Bikes (125cc - 140cc)',
    price: 1399,
    badge: 'Popular',
    description: 'GMX\'s best-selling 125cc manual dirt bike across Australia. Engineered with a punchy 125cc 4-stroke single-cylinder engine, 4-speed manual clutch transmission (1-N-2-3-4), heavy-duty inverted front forks, and dual hydraulic disc brakes for spirited trail and pit track riding.',
    features: [
      '125cc 4-Stroke Air-Cooled High-Torque Single Cylinder',
      '4-Speed Manual Transmission (1-N-2-3-4) with Wet Multi-Plate Clutch',
      'Heavy-Duty Inverted Front Forks & Nitrogen-Assisted Rear Shock',
      'Twin-Piston Front & Single-Piston Rear Hydraulic Disc Brakes',
      'Reinforced Tri-Bar Backbone Chassis with Engine Skid Plate',
      'Aggressive 14" Front / 12" Rear Motocross Knobby Tires'
    ],
    specs: {
      peakPower: '125cc 4-Stroke (8.5 HP)',
      topSpeed: '80 km/h (50 mph)',
      batteryWh: '3.8L Unleaded Fuel Tank',
      range: '90 km trail range per tank',
      chargeTime: 'Instant Refuel (Kick Start)',
      weight: '68 kg (150 lbs)',
      suspension: 'Heavy-Duty Inverted Hydraulic Front Forks & Rear Monoshock',
      brakes: 'Dual Hydraulic Wave Disc Brakes with Steel-Braided Lines',
      frame: 'Reinforced Tri-Bar High-Tensile Tubular Steel Frame',
      maxLoad: '95 kg (209 lbs)',
      waterproof: 'Splashproof Sealed Airbox & Motocross Wiring'
    },
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Confident teenagers and adult pit-bike enthusiasts seeking authentic manual clutch dirt riding.'
  },
  {
    id: 'gmx-crossfire-cf140-performance',
    name: 'GMX Crossfire CF140 140cc Performance Dirt Bike',
    slug: 'gmx-crossfire-cf140-140cc-performance-dirt-bike',
    category: 'GMX Australian Dirt Bikes',
    subcategory: 'GMX Pit Bikes (125cc - 140cc)',
    price: 2220,
    badge: 'Best Value',
    description: 'A race-ready 140cc monster fitted with an oil-cooled 4-stroke powerplant, genuine Mikuni-style carburetor, alloy rear swingarm, and big 17"/14" wheels. Delivers massive mid-range grunt to tear through sand berms and forest singletracks.',
    features: [
      '140cc Oil-Cooled 4-Stroke High-Output Racing Engine with External Oil Cooler',
      'Performance Mikuni 26mm Carburetor for Crisp Throttle Response',
      'Big Wheel Setup: 17" Front and 14" Rear Deep-Tread Knobby Tires',
      'Lightweight CNC Aluminum Rear Swingarm & High-Flow Alloy Exhaust',
      'Fully Adjustable 735mm USD Inverted Front Forks',
      'Heavy-Duty 4-Speed Manual Gearbox with Race Clutch'
    ],
    specs: {
      peakPower: '140cc Oil-Cooled 4-Stroke (11.5 HP)',
      topSpeed: '90 km/h (56 mph)',
      batteryWh: '4.0L Unleaded Fuel Tank',
      range: '95 km aggressive trail riding',
      chargeTime: 'Instant Refuel (Kick Start with Decompression)',
      weight: '71 kg (156 lbs)',
      suspension: '735mm USD Inverted Oil-Damped Forks & Piggyback Rear Shock',
      brakes: 'Oversized Hydraulic Front & Rear Wave Disc Brakes',
      frame: 'Chromoly Steel Cradle Chassis with Billet Triple Clamps',
      maxLoad: '110 kg (242 lbs)',
      waterproof: 'Sealed Heavy-Duty Off-Road Wiring'
    },
    image: 'https://images.unsplash.com/photo-1509744645300-a2098b11871a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509744645300-a2098b11871a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571932646633-8758b29c9b1f?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Aggressive teenagers and adult riders looking for competition pit-bike power and big-wheel clearance.'
  },
  {
    id: 'gmx-x-series-x250-dirt-bike',
    name: 'GMX X Series X-250 250cc Full-Size Dirt Bike',
    slug: 'gmx-x-series-x250-250cc-full-size-dirt-bike',
    category: 'GMX Australian Dirt Bikes',
    subcategory: 'GMX Enduro (250cc Full-Size)',
    price: 2499,
    badge: 'Popular',
    description: 'The powerhouse of the GMX petrol lineup. Armed with a 250cc vertical 4-stroke engine delivering up to 12 kW of raw torque, 5-speed manual transmission, full-size 21" front / 18" rear wheels with MOJO deep-tooth tires, and both electric push-button and kick start.',
    features: [
      '250cc Vertical 4-Stroke Air-Cooled Engine (12 kW / 16.3 HP)',
      '5-Speed Manual Transmission (1-N-2-3-4-5) with Wet Multi-Plate Clutch',
      'Full-Size Motocross Geometry: 21" Front & 18" Rear MOJO Deep Tooth Tires',
      'Dual Start: Push-Button Electric Start & Heavy-Duty Kick Start',
      'Long-Travel 840mm Inverted Front Forks & 450mm Reservoir Rear Monoshock',
      'High-Volume Performance Header with Matte Black Anodized Silencer'
    ],
    specs: {
      peakPower: '250cc 4-Stroke (12 kW / 16.3 HP)',
      topSpeed: '105 km/h (65 mph)',
      batteryWh: '6.5L Unleaded Fuel Tank + 12V Starter Battery',
      range: '140 km outback trail endurance',
      chargeTime: 'Instant Refuel (Push-Button Start)',
      weight: '108 kg (238 lbs)',
      suspension: '840mm USD Inverted Hydraulic Forks & 450mm Linkage Rear Shock',
      brakes: 'Twin-Piston Front & Single-Piston Rear Hydraulic Wave Discs',
      frame: 'Reinforced Heavy-Wall Steel Tube Double-Cradle Frame',
      maxLoad: '135 kg (297 lbs)',
      waterproof: 'Sealed Dust & Water Off-Road Electrical System'
    },
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Adult riders demanding full-size enduro ergonomics, ground clearance, and steep hill climb power.'
  },
  {
    id: 'gmx-crossfire-cf250-outlaw-enduro',
    name: 'GMX Crossfire CF250 Outlaw Enduro Dirt Bike',
    slug: 'gmx-crossfire-cf250-outlaw-enduro-dirt-bike',
    category: 'GMX Australian Dirt Bikes',
    subcategory: 'GMX Enduro (250cc Full-Size)',
    price: 2830,
    badge: 'Premium',
    description: 'Engineered for harsh Australian bush conditions and farm endurance. The CF250 features a torquey 250cc 4-stroke OHC engine, linkage rear suspension system, 21"/18" aluminum spoke wheels, and a heavy-duty luggage/grab rack.',
    features: [
      '250cc 4-Stroke High-Compression OHC Engine',
      'Linkage Rear Suspension for Superior Bump Compliance and Traction',
      'Electric Start with Auxiliary Kick Start Lever',
      'Heavy-Duty 21" Front and 18" Rear Spoked Wheels with Rim Locks',
      'Reinforced Steel Perimeter Frame Built for Rough Bush Tracks',
      'Wide Serrated Motocross Footpegs with Mud-Clearing Grooves'
    ],
    specs: {
      peakPower: '250cc 4-Stroke (13.5 kW / 18.1 HP)',
      topSpeed: '110 km/h (68 mph)',
      batteryWh: '7.0L High-Capacity Fuel Tank',
      range: '155 km outback trail range',
      chargeTime: 'Instant Refuel (Push-Button Electric Start)',
      weight: '112 kg (247 lbs)',
      suspension: 'Long-Travel Hydraulic USD Forks & Linkage Piggyback Monoshock',
      brakes: 'Front 240mm & Rear 220mm Hydraulic Disc Brakes',
      frame: 'High-Tensile Steel Perimeter Box-Section Chassis',
      maxLoad: '145 kg (320 lbs)',
      waterproof: 'Weather-Sealed Wiring Harness & Sealed Air Filter Box'
    },
    image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558981420-87aa9dad1c89?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Rural property owners, weekend trail blazers, and enduro riders seeking dependable 4-stroke performance.'
  },
  {
    id: 'gmx-crossfire-ecr-3000hpu-electric',
    name: 'GMX Crossfire ECR 3000HPU Electric Dirt Bike',
    slug: 'gmx-crossfire-ecr-3000hpu-electric-dirt-bike',
    category: 'GMX Australian Dirt Bikes',
    subcategory: 'GMX Electric Series',
    price: 3849,
    badge: 'New',
    description: 'GMX\'s flagship electric off-roader. Equipped with a 72V 35Ah (2,520 Wh) high-capacity lithium battery and an upgraded 8,000W peak brushless mid-drive motor. Delivers 85 km/h top speed, triple ride modes (Eco, Standard, Race), full digital cockpit, and whisper-quiet stealth trail dominance.',
    features: [
      '8,000W (8 kW) Peak High-Performance Brushless Mid-Drive Motor',
      '72V 35Ah (2,520 Wh) Swappable Samsung Lithium Battery Pack',
      'Triple Riding Modes: Eco (Efficiency), Standard (Trail), Race (Max Torque)',
      'Full Digital Instrument Cluster with Real-Time Voltage and Speed',
      'Inverted Long-Travel Front Forks & Nitrogen Gas Rear Shock',
      'Dual Hydraulic Disc Brakes with Regenerative Motor Braking'
    ],
    specs: {
      peakPower: '8.0 kW Peak (10.7 HP)',
      topSpeed: '85 km/h (53 mph)',
      batteryWh: '72V 35Ah (2,520 Wh)',
      range: '50 km hard race pace / up to 80 km eco trail pace',
      chargeTime: '3.5 hours (Rapid Smart Charger included)',
      weight: '75.5 kg (166 lbs)',
      suspension: 'Inverted Front Hydraulic Dual Suspension & High-Impact Rear Monoshock',
      brakes: 'Hydraulic Quad-Piston Disc Brakes with Electronic Regen',
      frame: 'Lightweight High-Strength Tubular Steel Chassis',
      maxLoad: '130 kg (286 lbs)',
      waterproof: 'IP66 Water & Dust Resistant'
    },
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Modern dirt bike riders wanting high-torque zero-emission performance with proven GMX chassis ergonomics.'
  },
  {
    id: 'gmx-crossfire-ecr1500-electric-mini',
    name: 'GMX Crossfire ECR1500 Electric Mini Dirt Bike',
    slug: 'gmx-crossfire-ecr1500-electric-mini-dirt-bike',
    category: 'GMX Australian Dirt Bikes',
    subcategory: 'GMX Electric Series',
    price: 1749,
    badge: 'Best Value',
    description: 'A quiet electric starter bike from GMX for kids ages 6 to 12. Armed with a 1,500W brushless motor, parental-lockable speed limiter, front and rear disc brakes, and zero exhaust burns or maintenance.',
    features: [
      '1,500W (1.5 kW) High-Efficiency Brushless Neodymium Motor',
      'Parental Key-Lockable Speed Limiter',
      '48V Quick-Swap Lithium Battery Pack',
      'Dual Cable-Actuated Hydraulic Disc Brakes with Motor Safety Cutoff',
      'Low Seat Height for Confident Foot Placement',
      'Whisper-Quiet Operation: Ride in backyards and suburban acreage without noise complaints'
    ],
    specs: {
      peakPower: '1.5 kW (2.0 HP)',
      topSpeed: '35 km/h (22 mph) [Parental Speed Lock]',
      batteryWh: '48V 15Ah (720 Wh)',
      range: '35 km or approx. 2 hours continuous riding',
      chargeTime: '2.0 hours',
      weight: '34 kg (75 lbs)',
      suspension: 'Telescopic Front Inverted Shocks & Rear Preload Coil Shock',
      brakes: 'Front & Rear Ventilated Wave Disc Brakes',
      frame: 'Tubular Steel Double-Cradle Chassis',
      maxLoad: '65 kg (143 lbs)',
      waterproof: 'IP65 Weather & Splash Resistant'
    },
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547025603-ef90c50b64d0?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Kids ages 6-12 learning motorcycle controls, throttle finesse, and singletrack balance.'
  },
  {
    id: 'gmx-v75-hyper-electric-dirt-bike',
    name: 'GMX V75 Hyper Electric Dirt Bike (72V 10kW)',
    slug: 'gmx-v75-hyper-electric-dirt-bike-72v-10kw',
    category: 'GMX Australian Dirt Bikes',
    subcategory: 'GMX Electric Series',
    price: 5799,
    originalPrice: 7999,
    badge: 'Sale',
    description: 'The ultimate Australian high-power electric trail weapon. Delivering an explosive 10 kW peak from an axial flux direct-drive motor, 72V 40Ah swappable Samsung lithium pack, 95 km/h top speed, and 240mm fully adjustable inverted suspension.',
    features: [
      '10 kW Peak High-Torque Axial Flux Mid-Motor',
      '72V 40Ah (2,880 Wh) Samsung High-Drain Swappable Battery',
      'Adjustable 240mm Inverted Air/Oil Front Suspension & Multi-Link Monoshock',
      'Oversized 4-Piston Hydraulic Disc Brakes with 220mm Floating Rotors',
      'Aircraft 6061 Forged Aluminum Lightweight Chassis',
      'Bluetooth App for Real-Time Throttle Curve Customization'
    ],
    specs: {
      peakPower: '10.0 kW (13.4 HP)',
      topSpeed: '95 km/h (59 mph)',
      batteryWh: '72V 40Ah (2,880 Wh)',
      range: '95 km trail range @ 45 km/h',
      chargeTime: '2.5 hours (10A Fast Charger)',
      weight: '68 kg (150 lbs)',
      suspension: '240mm Fully Adjustable Inverted Dual-Chamber Forks & Linkage Shock',
      brakes: '4-Piston Ceramic Hydraulic Disc Brakes with Regen',
      frame: 'Cold-Forged 6061-T6 Aircraft Aluminum',
      maxLoad: '135 kg (297 lbs)',
      waterproof: 'IP67 Submersible Rated'
    },
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Enthusiasts and racers seeking maximum electric torque, aggressive geometry, and Australian outback endurance.'
  }
];
