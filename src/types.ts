export type ProductBadge = 'Popular' | 'New' | 'Best Value' | 'Premium' | 'Sale' | 'none';

export interface ProductSpecs {
  peakPower: string;       // e.g. "16 kW (21.5 HP)"
  topSpeed: string;        // e.g. "110 km/h (68 mph)"
  batteryWh: string;       // e.g. "72V 45Ah (3,240 Wh)"
  range: string;           // e.g. "120 km (75 miles) @ 40 km/h"
  chargeTime: string;      // e.g. "2.5 - 3 hours (Fast Charger)"
  weight: string;          // e.g. "68 kg (150 lbs)"
  suspension: string;      // e.g. "Fully Adjustable Dual-Chamber Inverted Forks"
  brakes: string;          // e.g. "Hydraulic 4-Piston Ceramic Disc"
  frame: string;           // e.g. "Aviation-Grade Forged Aluminum Alloy"
  maxLoad: string;         // e.g. "135 kg (297 lbs)"
  waterproof: string;      // e.g. "IP67 Submersible Waterproof"
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'Surron' | 'Talaria' | 'Stark Future' | '79Bikes' | 'Yotsuba' | 'Electric Balance Bikes' | 'GMX Australian Dirt Bikes' | 'Parts & Upgrades';
  subcategory: string;
  price: number;
  originalPrice?: number;
  badge: ProductBadge;
  description: string;
  features: string[];
  specs: ProductSpecs;
  image: string;
  gallery: string[];
  inStock: boolean;
  riderSuitability: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type CryptoCurrency = 'BTC' | 'ETH' | 'SOL' | 'USDT-TRC20';

export interface OrderFormData {
  fullName: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  notes?: string;
  cryptoCurrency: CryptoCurrency;
  promoCode?: string;
  txHash?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  image: string;
  content: string[];
}

export type ActivePage = 'home' | 'shop' | 'blog' | 'about' | 'contact' | 'faq';
export type PolicyPage = 'shipping' | 'refund' | 'privacy' | 'terms' | null;
