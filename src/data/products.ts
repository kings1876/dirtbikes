import { Product } from '../types';

export const CATEGORIES = [
  {
    name: 'Adult Electric Dirt Bikes',
    subcategories: [
      'Trail & Enduro',
      'Motocross & Competition',
      'High-Performance Hyper',
      'Urban / Trail Commuter',
      'Adventure Dual Sport'
    ],
    description: 'High-torque, lightweight electric beasts built to dominate steep technical climbs and off-road tracks without engine roar.'
  },
  {
    name: 'Youth & Childrens E-Dirt Bikes',
    subcategories: ['Mini Rippers (Ages 4-8)', 'Junior Cross (Ages 8-14)'],
    description: 'Engineered for young riders with 3-speed parental governor limiters, instant throttle control, and whisper-quiet operation.'
  },
  {
    name: 'Electric Balance Bikes',
    subcategories: ['First Ride (Ages 2-4)', 'Pedal-Free Trainers (Ages 4-6)'],
    description: 'Ultra-lightweight, pedal-free electric balance bikes that teach the youngest riders throttle control and trail confidence before they ever swing a leg over a geared bike.'
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
    id: 'apex-16kw-hyper-cross',
    name: 'Apex 16kW Hyper Cross Motocross',
    slug: 'apex-16kw-hyper-cross',
    category: 'Adult Electric Dirt Bikes',
    subcategory: 'High-Performance Hyper',
    price: 6499,
    originalPrice: 7199,
    badge: 'Premium',
    description: 'The pinnacle of electric motocross engineering. Generating an earth-shaking 16 kW peak output with 920 Nm of wheel torque, the Apex Hyper Cross smokes 450cc four-strokes off the line with instantaneous zero-lag throttle response.',
    features: [
      '16 kW Peak Brushless IPM Motor',
      '80V 50Ah Samsung 21700 High-Drain Cell Pack',
      'CNC Aircraft-Grade Forged Aluminum Alloy Frame',
      'Dual-Chamber Fully Rebound-Adjustable 280mm Inverted Forks',
      'Smartphone App with 5 Custom Ride Modes & Regenerative Braking'
    ],
    specs: {
      peakPower: '16.0 kW (21.5 HP)',
      topSpeed: '115 km/h (72 mph)',
      batteryWh: '80V 50Ah (4,000 Wh)',
      range: '135 km (84 miles) @ trail pace',
      chargeTime: '2.5 hours (15A Rapid Charger included)',
      weight: '72 kg (158 lbs)',
      suspension: 'FastAce 280mm Inverted Air/Hydraulic Dual-Chamber',
      brakes: 'Performance 4-Piston Ceramic Hydraulic with 240mm Rotors',
      frame: 'Cold-Forged 6061-T6 Aircraft Aluminum (8.8 kg)',
      maxLoad: '140 kg (308 lbs)',
      waterproof: 'IP67 Submersible Rated Motor & Controller'
    },
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547025603-ef90c50b64d0?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Experienced off-road riders & competition racers seeking extreme acceleration.'
  },
  {
    id: 'storm-pro-72v-enduro',
    name: 'Storm Pro 72V Enduro Trail',
    slug: 'storm-pro-72v-enduro',
    category: 'Adult Electric Dirt Bikes',
    subcategory: 'Trail & Enduro',
    price: 4899,
    originalPrice: 5399,
    badge: 'Popular',
    description: 'Australia and America\'s favorite all-terrain electric dirt bike. Perfectly balanced for tight single-track forest runs, steep rocky ascents, and weekend bush exploration. Features a swappable battery system allowing unlimited trail time.',
    features: [
      '12 kW Peak Mid-Drive Motor with 1:7.2 Primary Reduction',
      '72V 42Ah High-Energy Swappable Lithium Battery',
      'Off-Road CST Knobby Tires (19" Front / 16" Rear)',
      'Digital Cockpit with GPS Speedometer & Battery Health Diagnostic',
      'Silent Belt Primary Drive with Heavy-Duty 428 O-Ring Final Chain'
    ],
    specs: {
      peakPower: '12.0 kW (16.1 HP)',
      topSpeed: '95 km/h (59 mph)',
      batteryWh: '72V 42Ah (3,024 Wh)',
      range: '110 km (68 miles) @ 40 km/h',
      chargeTime: '3.0 hours',
      weight: '64 kg (141 lbs)',
      suspension: 'KKE Adjustable 200mm Travel Front & Rear Linkage Shock',
      brakes: 'Dual Dual-Piston Hydraulic with Motor Cutoff Sensor',
      frame: 'Ultra-Tough Hydroformed Aluminum Alloy',
      maxLoad: '130 kg (286 lbs)',
      waterproof: 'IP67 High-Pressure Wash Resistant'
    },
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Intermediate to advanced riders looking for the ideal trail and hill-climbing bike.'
  },
  {
    id: 'volt-junior-48v',
    name: 'Volt Junior 48V Youth Dirt Bike (Ages 8-14)',
    slug: 'volt-junior-48v-youth',
    category: 'Youth & Childrens E-Dirt Bikes',
    subcategory: 'Junior Cross (Ages 8-14)',
    price: 1799,
    originalPrice: 1999,
    badge: 'Best Value',
    description: 'The premier youth electric motocross bike. Built with authentic hydraulic suspension, disc brakes, and progressive throttle mapping that lets parents lock power modes at 15 km/h, 30 km/h, or full 50 km/h as confidence builds.',
    features: [
      '3.5 kW Peak Brushless Mid-Drive Motor',
      'Parental Key-Locked 3-Speed Switch (Eco, Mid, Race)',
      'Adjustable Seat Height (680mm to 720mm)',
      'Lightweight 39 kg chassis so youth riders never feel overpowered',
      'Low Maintenance: No carburetor jetting, no oil changes, no hot exhausts'
    ],
    specs: {
      peakPower: '3.5 kW (4.7 HP)',
      topSpeed: '50 km/h (31 mph) [Governor can lock to 15 or 30 km/h]',
      batteryWh: '48V 20Ah (960 Wh)',
      range: '45 km (28 miles) or 2.5 hours riding time',
      chargeTime: '2.0 hours',
      weight: '39 kg (86 lbs)',
      suspension: 'Telescopic Inverted Front Fork & Rear Monoshock',
      brakes: 'Front & Rear Cable-Actuated Hydraulic Disc',
      frame: 'High-Tensile Steel Backbone with Aluminum Swingarm',
      maxLoad: '75 kg (165 lbs)',
      waterproof: 'IP65 Weatherproof'
    },
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Ages 8 to 14 years old. Ideal transition from balance bikes to full-size dirt bikes.'
  },
  {
    id: 'micro-ripper-36v',
    name: 'Micro Ripper 36V Mini Kids Dirt Bike',
    slug: 'micro-ripper-36v-mini',
    category: 'Youth & Childrens E-Dirt Bikes',
    subcategory: 'Mini Rippers (Ages 4-8)',
    price: 999,
    originalPrice: 1199,
    badge: 'New',
    description: 'Designed specifically for the youngest dirt bike prodigies (ages 4 to 8). Ultra-low 520mm stand-over height, soft-compound grip handles, automatic gradual torque roll-on, and zero burning exhaust pipes.',
    features: [
      '1.2 kW Safe-Torque Brushless Motor',
      'Removable Training Stabilizer Wheels included in box',
      'Featherweight 24 kg frame for effortless maneuvering',
      'Remote Safety Tether Kill Switch for parental peace of mind'
    ],
    specs: {
      peakPower: '1.2 kW (1.6 HP)',
      topSpeed: '28 km/h (17 mph) [Limiters: 10 km/h, 18 km/h, 28 km/h]',
      batteryWh: '36V 12Ah (432 Wh)',
      range: '32 km (20 miles) / ~90 min run time',
      chargeTime: '1.5 hours',
      weight: '24 kg (53 lbs)',
      suspension: 'Soft-Tuned Front Spring Fork & Coil Shock',
      brakes: 'Front & Rear Mechanical Disc with Easy-Reach Levers',
      frame: 'Reinforced Lightweight Tubular Steel',
      maxLoad: '50 kg (110 lbs)',
      waterproof: 'IP65 Splash Proof'
    },
    image: 'https://images.unsplash.com/photo-1547025603-ef90c50b64d0?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1547025603-ef90c50b64d0?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Beginner young riders ages 4-8 learning balance, throttle control, and trail riding.'
  },
  {
    id: 'nomad-72v-dual-sport',
    name: 'Nomad 72V Dual-Sport (Street & Trail)',
    slug: 'nomad-72v-dual-sport',
    category: 'Adult Electric Dirt Bikes',
    subcategory: 'Urban / Trail Commuter',
    price: 5299,
    originalPrice: 5799,
    badge: 'New',
    description: 'The ultimate crossover e-moto. Equipped with high-output LED projector headlights, turn indicators, side mirrors, horn, and VIN plate for street registration, paired with knobby dual-sport tires ready to tackle dirt trails the moment you leave the pavement.',
    features: [
      'DOT & ADR Compliant Lighting Package (Turn signals, high/low beam, brake light)',
      '10 kW High-Torque Motor with Quiet Carbon Belt Drive',
      'Comfort Ergonomic Dual Seat with Passenger Footpegs',
      'Built-in USB-C Quick Charge Port for Phone/GPS Navigation'
    ],
    specs: {
      peakPower: '10.0 kW (13.4 HP)',
      topSpeed: '90 km/h (56 mph)',
      batteryWh: '72V 45Ah (3,240 Wh)',
      range: '120 km (75 miles) City / 80 km (50 miles) Trail',
      chargeTime: '3.0 hours',
      weight: '69 kg (152 lbs)',
      suspension: 'Heavy-Duty 220mm Dual Inverted Forks & Gas Reservoir Monoshock',
      brakes: 'Hydraulic Quad-Piston with Regenerative Electronic Braking',
      frame: 'Aviation Aluminum Twin-Spar Geometry',
      maxLoad: '150 kg (330 lbs)',
      waterproof: 'IP67 Rated'
    },
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Riders who want to commute through the city on weekdays and hit rugged trails on weekends.'
  },
  {
    id: 'stealth-beast-80v-competition',
    name: 'Stealth Beast 80V Competition Motocross',
    slug: 'stealth-beast-80v-competition',
    category: 'Adult Electric Dirt Bikes',
    subcategory: 'Motocross & Competition',
    price: 7890,
    badge: 'Premium',
    description: 'Factory-tuned race weapon built for competitive electric motocross circuits. Titanium hardware, carbon fiber body panels, and a blistering 18 kW motor that launches from 0 to 80 km/h in just 3.1 seconds.',
    features: [
      '18 kW Competition Motor with Liquid Coolant Sump',
      'Genuine Carbon Fiber Skid Plate & Number Plates',
      'Brembo-compatible Racing Calipers with Floating Discs',
      'Pro Taper High-Bend Fat Bars & Quick-Turn Billet Throttle'
    ],
    specs: {
      peakPower: '18.0 kW (24.1 HP)',
      topSpeed: '120 km/h (75 mph)',
      batteryWh: '80V 55Ah (4,400 Wh)',
      range: '140 km (87 miles) or 40+ min hard moto laps',
      chargeTime: '2.0 hours (20A Supercharger included)',
      weight: '70 kg (154 lbs)',
      suspension: '300mm Pro-Level Adjustable Gas Reservoir Suspension',
      brakes: 'Forged 4-Piston Ceramic Competition Discs',
      frame: 'Carbon Fiber Reinforced Aerospace Alloy',
      maxLoad: '135 kg (297 lbs)',
      waterproof: 'IP67 Submersible'
    },
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Hardcore motocross racers and extreme freeriders who demand the absolute maximum power.'
  },
  {
    id: 'trail-blazer-60v-lite',
    name: 'Trail Blazer 60V Lite Singletrack',
    slug: 'trail-blazer-60v-lite',
    category: 'Adult Electric Dirt Bikes',
    subcategory: 'Trail & Enduro',
    price: 3299,
    originalPrice: 3699,
    badge: 'Sale',
    description: 'The sweet spot between high-end mountain bikes and heavy dirt bikes. Weighing only 53 kg, this nimble e-dirt bike carves through technical singletrack, hops logs with ease, and is easy to transport on standard hitch racks.',
    features: [
      '6 kW High-Efficiency Mid-Motor',
      '60V 35Ah LG Chem High-Density Cells',
      'Lightweight 53 kg agile chassis',
      'Direct Drive Primary with Silent Poly-V Belt'
    ],
    specs: {
      peakPower: '6.0 kW (8.0 HP)',
      topSpeed: '75 km/h (47 mph)',
      batteryWh: '60V 35Ah (2,100 Wh)',
      range: '90 km (56 miles) @ moderate trail speed',
      chargeTime: '3.0 hours',
      weight: '53 kg (117 lbs)',
      suspension: 'Dorado Style 180mm Inverted Fork & Linkage Air Shock',
      brakes: 'Hydraulic Quad-Piston with 203mm Rotors',
      frame: 'Extruded Aluminum Matrix',
      maxLoad: '120 kg (265 lbs)',
      waterproof: 'IP66 Weather Resistant'
    },
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Trail riders, mountain bike converts, and everyday explorers looking for light, playful agility.'
  },
  {
    id: 'ranger-x-outback-adventure',
    name: 'Ranger X Outback Adventure Dual-Sport',
    slug: 'ranger-x-outback-adventure',
    category: 'Adult Electric Dirt Bikes',
    subcategory: 'Adventure Dual Sport',
    price: 5699,
    badge: 'Popular',
    description: 'Engineered specifically for long-distance remote touring. Equipped with heavy-duty rear luggage rack, dual battery bays for extended 220 km range, rugged crash cages, and ultra-wide desert knobby tires.',
    features: [
      'Dual Battery Bay System (up to 6.4 kWh capacity)',
      'Integrated Modular Rear Cargo Rack (35 kg payload)',
      'Desert-proof air filtration and sealed controller housing',
      'Over-the-air firmware updates with trail map sync'
    ],
    specs: {
      peakPower: '11.0 kW (14.7 HP)',
      topSpeed: '95 km/h (59 mph)',
      batteryWh: '72V 45Ah Primary (Supports secondary dual pack)',
      range: '125 km (single pack) / 220 km (dual pack)',
      chargeTime: '3.5 hours',
      weight: '74 kg (163 lbs)',
      suspension: 'Heavy-Spring Tourer 240mm Long-Travel Suspension',
      brakes: 'Oversized 260mm Floating Hydraulic Rotors',
      frame: 'Reinforced Box-Section Steel & Cast Aluminum',
      maxLoad: '160 kg (352 lbs)',
      waterproof: 'IP67 Outback Rated'
    },
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    riderSuitability: 'Overlanders, outback adventurers, and long-range trail tourers.'
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
    price: 1099,
    originalPrice: 1249,
    badge: 'Popular',
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
    price: 1299,
    originalPrice: 1449,
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
    originalPrice: 1599,
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
    price: 1899,
    originalPrice: 2099,
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
    price: 2599,
    originalPrice: 2899,
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
    price: 2799,
    originalPrice: 3099,
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
    price: 3799,
    originalPrice: 4199,
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
    id: 'gmx-go-skitz-ecr1300-youth-electric',
    name: 'GMX Go Skitz ECR1300 Youth Electric Dirt Bike',
    slug: 'gmx-go-skitz-ecr1300-youth-electric-dirt-bike',
    category: 'GMX Australian Dirt Bikes',
    subcategory: 'GMX Electric Series',
    price: 1099,
    originalPrice: 1299,
    badge: 'Best Value',
    description: 'The premier quiet electric starter bike from GMX for kids ages 6 to 12. Armed with a 48V 1300W brushless motor, 3-speed parental lockable speed switch (10, 20, 35 km/h), front and rear disc brakes, and zero exhaust burns or maintenance.',
    features: [
      '1300W (1.3 kW) 48V High-Efficiency Brushless Neodymium Motor',
      'Parental Key-Lockable 3-Speed Limiter (10 km/h, 20 km/h, 35 km/h)',
      '48V Quick-Swap Lithium Battery Pack',
      'Dual Cable-Actuated Hydraulic Disc Brakes with Motor Safety Cutoff',
      'Low 620mm Seat Height for Confident Foot Placement',
      'Whisper-Quiet Operation: Ride in backyards and suburban acreage without noise complaints'
    ],
    specs: {
      peakPower: '1.3 kW (1.7 HP)',
      topSpeed: '35 km/h (22 mph) [Parental Lock at 10, 20, or 35 km/h]',
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
    price: 4299,
    originalPrice: 4699,
    badge: 'Premium',
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
