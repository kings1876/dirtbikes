export interface FAQItem {
  id: string;
  category: 'Orders & Shipping' | 'Crypto & Discounts' | 'Battery & Tech' | 'Warranty & Maintenance';
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-free-shipping',
    category: 'Orders & Shipping',
    question: 'How does shipping work, and is shipping really free on all electric dirt bikes?',
    answer: 'Yes! We provide Free Nationwide Shipping on all Kanvale electric dirt bikes to every address across the continental USA and Australia. Bicycles are securely crated in steel-reinforced cardboard containers with foam shock absorbers. Courier transit usually takes 3 to 7 business days with end-to-end freight tracking. Small individual accessories or apparel orders below the threshold carry a flat $15 delivery fee.'
  },
  {
    id: 'faq-order-process',
    category: 'Orders & Shipping',
    question: 'How do I place an order through your order form?',
    answer: 'Simply click "Order Now" or add items to your cart, then complete our streamlined checkout order form. Select your preferred cryptocurrency (BTC, ETH, SOL, or USDT). The system automatically deducts your 10% Crypto Discount instantly. You receive dedicated wallet transfer details and QR code. Once you submit the form, our dispatch logistics team verifies the transaction on-chain and dispatches your crated bike within 24 hours.'
  },
  {
    id: 'faq-crypto-discount',
    category: 'Crypto & Discounts',
    question: 'How is the 10% crypto discount applied, and which cryptocurrencies do you accept?',
    answer: 'When you select Crypto at checkout, a flat 10% deduction is applied to your entire merchandise subtotal automatically. We accept Bitcoin (BTC), Ethereum (ETH), Solana (SOL), and Tether (USDT on TRC20/ERC20 networks). You can also apply valid promotional coupon codes alongside your order for additional bonus savings.'
  },
  {
    id: 'faq-water-mud',
    category: 'Battery & Tech',
    question: 'Are the electric dirt bikes waterproof? Can I ride through creeks and muddy tracks?',
    answer: 'Yes! Our adult e-moto bikes (Apex 16kW, Storm Pro 72V, Nomad Dual-Sport) carry IP67 submersible ingress protection on the brushless IPM motor, battery enclosure, and sine-wave vector controller. You can blast through rain, mud, wheel-deep river crossings, and power wash your bike after a heavy weekend of trail riding without electrical short risk.'
  },
  {
    id: 'faq-battery-life',
    category: 'Battery & Tech',
    question: 'How long do the lithium battery packs last, and are they removable?',
    answer: 'Our battery packs utilize premium automotive-grade Samsung 21700 and LG Chem high-drain cylindrical cells with intelligent active Battery Management Systems (BMS). They are rated for over 1,500 full charge cycles while maintaining 80%+ original capacity (equivalent to 5–8 years of regular weekend riding). All our performance e-bikes feature rapid quick-release swappable battery trays, allowing you to swap fresh packs in under 30 seconds.'
  },
  {
    id: 'faq-maintenance',
    category: 'Warranty & Maintenance',
    question: 'What ongoing maintenance does an electric dirt bike require compared to a gas bike?',
    answer: 'Almost zero compared to combustion motocross bikes! There are no oil changes, no spark plugs, no air filters to oil, no valves to adjust, and no carburetor rebuilds. Regular maintenance is limited to keeping chain tension adjusted & lubricated, checking brake pads, and setting tire pressures. Operating costs are estimated at less than 1/10th of a gas 250cc/450cc bike.'
  },
  {
    id: 'faq-street-legal',
    category: 'Orders & Shipping',
    question: 'Are these electric dirt bikes street legal or off-road only?',
    answer: 'Models like the Nomad 72V Dual-Sport come equipped with DOT/ADR approved high-low beam headlights, turn signals, mirrors, horn, brake lights, and a manufacturer 17-digit VIN plate ready for state highway vehicle registration as an electric motorcycle/moped. Dedicated motocross models (Apex 16kW and Storm Pro 72V) are designed for closed-course tracks, private land, and designated off-highway vehicle (OHV) trail networks.'
  },
  {
    id: 'faq-warranty',
    category: 'Warranty & Maintenance',
    question: 'What warranty is included with dirt bikes purchased here?',
    answer: 'All new electric and petrol dirt bikes include our comprehensive 2-Year Factory Warranty covering the frame, brushless motor/engine, vector controller, and lithium battery pack against manufacturing defects. We also provide a 30-Day trial return policy and stock 100% of replacement parts in our US and Australian distribution centers for same-day dispatch.'
  }
];
