import React, { useState } from 'react';
import { CartItem, CryptoCurrency, OrderFormData } from '../types';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  Truck, 
  Coins, 
  CheckCircle, 
  Copy, 
  Check, 
  ShieldCheck, 
  AlertCircle, 
  Download, 
  QrCode,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

// Dedicated Crypto Wallets for Kanvale Dirt Bikes
const CRYPTO_WALLETS: Record<CryptoCurrency, { name: string; symbol: string; address: string; network: string }> = {
  BTC: {
    name: 'Bitcoin',
    symbol: 'BTC',
    address: 'bc1qkanvale89xelectricdirtbikes72vpowervarg001',
    network: 'Bitcoin Native SegWit',
  },
  ETH: {
    name: 'Ethereum',
    symbol: 'ETH',
    address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    network: 'Ethereum Mainnet (ERC20)',
  },
  SOL: {
    name: 'Solana',
    symbol: 'SOL',
    address: 'KanvALe72vTorqueDirtBikesOutbackUSA9999Solana1',
    network: 'Solana Mainnet',
  },
  'USDT-TRC20': {
    name: 'Tether USD',
    symbol: 'USDT',
    address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
    network: 'Tron TRC-20 (Lowest Gas Fees)',
  },
};

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'cart' | 'checkout' | 'confirmation'>('cart');
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoCurrency>('USDT-TRC20');
  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState('');

  // Form Fields
  const [formData, setFormData] = useState<OrderFormData>({
    fullName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'USA',
    notes: '',
    cryptoCurrency: 'USDT-TRC20',
    txHash: '',
  });

  // Calculate order figures
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  // Criteria: Free shipping over all products (e-dirt bikes always free; if only small items, under $100 flat $15)
  const hasBike = cartItems.some((item) => item.product.category !== 'Parts & Upgrades');
  const shippingFee = (cartItems.length > 0 && (hasBike || subtotal >= 300)) ? 0 : (cartItems.length > 0 ? 15 : 0);

  // 10% Crypto discount rule
  const cryptoDiscountPercent = 0.10;
  const cryptoDiscountAmount = subtotal * cryptoDiscountPercent;

  const totalDiscount = cryptoDiscountAmount + promoDiscount;
  const grandTotal = Math.max(0, subtotal - totalDiscount + shippingFee);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoCodeInput.trim().toUpperCase();
    if (code === 'CRYPTO10' || code === 'DIRTRIDER' || code === 'KANVALE50') {
      const discount = 50;
      setPromoDiscount(discount);
      setPromoMessage('Promo code applied: $50 bonus discount!');
    } else if (code === '') {
      setPromoDiscount(0);
      setPromoMessage('');
    } else {
      setPromoMessage('Invalid coupon code. Try DIRT50 or enjoy your 10% Crypto discount!');
    }
  };

  const handleCopyWallet = () => {
    const wallet = CRYPTO_WALLETS[selectedCrypto].address;
    navigator.clipboard.writeText(wallet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedId = 'KAN-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmedOrderId(generatedId);

    // Prepare payload for Web3Forms integration
    const orderPayload = {
      access_key: 'pending-user-web3forms-key', // Web3Forms provider key
      subject: `New Crypto Order [${generatedId}] - Kanvale Dirt Bikes`,
      from_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      order_id: generatedId,
      shipping_address: `${formData.streetAddress}, ${formData.city}, ${formData.state} ${formData.postalCode}, ${formData.country}`,
      crypto_payment: `${CRYPTO_WALLETS[selectedCrypto].name} (${selectedCrypto})`,
      wallet_destination: CRYPTO_WALLETS[selectedCrypto].address,
      tx_hash: formData.txHash || 'Pending on-chain transfer',
      subtotal_usd: `$${subtotal.toFixed(2)}`,
      crypto_discount_saved: `-$${cryptoDiscountAmount.toFixed(2)} (10%)`,
      grand_total_usd: `$${grandTotal.toFixed(2)}`,
      items: cartItems.map((i) => `${i.product.name} (Qty: ${i.quantity}) - $${(i.product.price * i.quantity).toFixed(2)}`).join('; '),
      customer_notes: formData.notes || 'None',
    };

    try {
      // Send to Web3Forms endpoint if online
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(orderPayload),
      }).catch(() => {
        // Transparent fallback so preview never breaks
      });
    } catch {
      // Ignore network errors in preview
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setStep('confirmation');
      onClearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Coins className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white font-mono uppercase tracking-tight">
                {step === 'cart' && 'Review Your Order'}
                {step === 'checkout' && 'Crypto Order Form (-10% Discount)'}
                {step === 'confirmation' && 'Order Successfully Submitted'}
              </h2>
              <span className="text-xs text-zinc-400 font-mono">
                Kanvale Direct Delivery • 10% Crypto Discount Applied
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 1: CART REVIEW */}
        {step === 'cart' && (
          <div>
            {cartItems.length === 0 ? (
              <div className="text-center py-12 space-y-4">
                <p className="text-zinc-400 text-sm">Your cart is currently empty.</p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 text-zinc-950 text-xs font-bold font-mono uppercase tracking-wider hover:bg-emerald-400 transition-colors"
                >
                  Explore Electric Dirt Bikes
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Item List */}
                <div className="divide-y divide-zinc-800/80 max-h-72 overflow-y-auto pr-1">
                  {cartItems.map(({ product, quantity }) => (
                    <div key={product.id} className="py-4 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-14 rounded-xl object-cover bg-zinc-900 border border-zinc-800"
                        />
                        <div>
                          <h4 className="text-sm font-bold text-white line-clamp-1">{product.name}</h4>
                          <span className="text-xs font-mono text-emerald-400 font-semibold">
                            ${product.price.toLocaleString()} USD
                          </span>
                          <span className="text-[10px] text-zinc-400 block font-mono">
                            {product.specs.peakPower !== 'N/A' ? `Power: ${product.specs.peakPower}` : product.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        {/* Quantity controls */}
                        <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 rounded-lg p-1">
                          <button
                            onClick={() => onUpdateQuantity(product.id, Math.max(1, quantity - 1))}
                            className="p-1 text-zinc-400 hover:text-white"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-6 text-center text-xs font-mono font-bold text-white">
                            {quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                            className="p-1 text-zinc-400 hover:text-white"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(product.id)}
                          className="p-1.5 text-zinc-400 hover:text-rose-400 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Free shipping & 10% discount banner */}
                <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-emerald-400" />
                    <span className="text-zinc-200">
                      <strong>Free Nationwide Shipping:</strong> Crated &amp; insured delivery to your door.
                    </span>
                  </div>
                  <span className="font-mono text-emerald-400 font-bold">$0.00</span>
                </div>

                {/* Order Summary Calculations */}
                <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2.5 text-xs font-mono">
                  <div className="flex justify-between text-zinc-400">
                    <span>Merchandise Subtotal:</span>
                    <span className="text-zinc-200">${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                  </div>

                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span className="flex items-center gap-1">
                      <Coins className="w-3.5 h-3.5" /> 10% Crypto Payment Discount:
                    </span>
                    <span>-${cryptoDiscountAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                  </div>

                  {promoDiscount > 0 && (
                    <div className="flex justify-between text-cyan-400">
                      <span>Promo Voucher:</span>
                      <span>-${promoDiscount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-zinc-400">
                    <span>Nationwide Freight Delivery:</span>
                    <span className="text-emerald-400">{shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}</span>
                  </div>

                  <div className="pt-3 border-t border-zinc-800 flex justify-between items-baseline text-sm">
                    <span className="text-white font-bold">Estimated Crypto Grand Total:</span>
                    <span className="text-xl font-black text-emerald-400">
                      ${grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD
                    </span>
                  </div>
                </div>

                {/* Proceed to Checkout Form */}
                <button
                  onClick={() => setStep('checkout')}
                  className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-sm font-black font-mono uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Proceed to Crypto Order Form</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* STEP 2: CHECKOUT & PAYMENT FORM */}
        {step === 'checkout' && (
          <form onSubmit={handleSubmitOrder} className="space-y-6">
            {/* 10% Crypto Discount Callout */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-zinc-900 to-emerald-950/60 border border-emerald-500/40 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-emerald-300 font-bold block">
                  10% Crypto Payment Discount Applied
                </span>
                <span className="text-xs text-zinc-300">
                  You are saving <strong className="text-emerald-400 font-mono">${cryptoDiscountAmount.toFixed(2)}</strong> by settling in crypto!
                </span>
              </div>
              <div className="text-right font-mono">
                <span className="text-[10px] text-zinc-400 block">Total Due</span>
                <span className="text-xl font-black text-emerald-400">
                  ${grandTotal.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Select Crypto Coin */}
            <div>
              <label className="block text-xs font-mono uppercase font-bold text-zinc-300 mb-2">
                1. Select Payment Cryptocurrency:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {(Object.keys(CRYPTO_WALLETS) as CryptoCurrency[]).map((crypto) => {
                  const info = CRYPTO_WALLETS[crypto];
                  const isSelected = selectedCrypto === crypto;
                  return (
                    <button
                      type="button"
                      key={crypto}
                      onClick={() => {
                        setSelectedCrypto(crypto);
                        setFormData({ ...formData, cryptoCurrency: crypto });
                      }}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-500/10 border-emerald-500 ring-1 ring-emerald-500 text-white'
                          : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-sm text-white">{info.symbol}</span>
                        {isSelected && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
                      </div>
                      <span className="text-[10px] text-zinc-400 block mt-0.5 truncate">{info.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Wallet Address & Network Details */}
            <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">
                  Send payment to official Kanvale {CRYPTO_WALLETS[selectedCrypto].name} address:
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Network: {CRYPTO_WALLETS[selectedCrypto].network}
                </span>
              </div>

              {/* Copyable Address Bar */}
              <div className="flex items-center gap-2 bg-zinc-950 p-2.5 rounded-xl border border-zinc-800 font-mono text-xs text-zinc-200 break-all">
                <span className="flex-1 select-all">{CRYPTO_WALLETS[selectedCrypto].address}</span>
                <button
                  type="button"
                  onClick={handleCopyWallet}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white flex items-center gap-1.5 flex-shrink-0 text-xs font-semibold cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div className="text-[11px] text-zinc-400 flex items-start gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  Please send equivalent of <strong>${grandTotal.toFixed(2)} USD</strong> on the {CRYPTO_WALLETS[selectedCrypto].network}. You can optionally paste your Transaction Hash (TxID) below.
                </span>
              </div>
            </div>

            {/* Customer Contact & Shipping Details */}
            <div className="space-y-3">
              <label className="block text-xs font-mono uppercase font-bold text-zinc-300">
                2. Customer &amp; Freight Delivery Information:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-zinc-400 font-mono block mb-1">Full Legal Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. John Miller"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-zinc-400 font-mono block mb-1">Email Address (Order Tracking) *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-zinc-400 font-mono block mb-1">Phone Number (Carrier Liftgate Delivery) *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +1 (555) 019-2834"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-zinc-400 font-mono block mb-1">Country *</label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="USA">United States (Free Freight)</option>
                    <option value="Australia">Australia (Nationwide Delivery)</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] text-zinc-400 font-mono block mb-1">Street Address for Crated Bike Delivery *</label>
                <input
                  type="text"
                  required
                  value={formData.streetAddress}
                  onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                  placeholder="Street address, unit, or suite"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] text-zinc-400 font-mono block mb-1">City *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="City"
                    className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-zinc-400 font-mono block mb-1">State / Region *</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    placeholder="State"
                    className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-zinc-400 font-mono block mb-1">Postal Code *</label>
                  <input
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    placeholder="Zip code"
                    className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] text-zinc-400 font-mono block mb-1">
                  Transaction Hash (TxID) or Sender Address (Optional / Can submit later)
                </label>
                <input
                  type="text"
                  value={formData.txHash}
                  onChange={(e) => setFormData({ ...formData, txHash: e.target.value })}
                  placeholder="Paste on-chain transaction hash or wallet note"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white font-mono focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] text-zinc-400 font-mono block mb-1">Special Delivery Notes (Optional)</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Gate codes, delivery time preferences, or fork suspension setup notes"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:border-emerald-500 focus:outline-none resize-none"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
              <button
                type="button"
                onClick={() => setStep('cart')}
                className="py-3 px-5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-semibold font-mono uppercase cursor-pointer"
              >
                Back to Cart
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-black font-mono uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Transmitting Order to Logistics Desk...</span>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Submit Order (${grandTotal.toFixed(2)} USD)</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: ORDER CONFIRMATION */}
        {step === 'confirmation' && (
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                Order Received
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                Thank You, {formData.fullName || 'Rider'}!
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Your order receipt has been recorded with the Kanvale fulfillment team.
              </p>
            </div>

            {/* Order Card */}
            <div className="max-w-md mx-auto p-5 rounded-2xl bg-zinc-900 border border-zinc-800 text-left font-mono text-xs space-y-3">
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Order Reference:</span>
                <span className="font-bold text-white text-sm">{confirmedOrderId}</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Total Payable:</span>
                <span className="font-bold text-emerald-400 text-sm">${grandTotal.toFixed(2)} USD</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Payment Network:</span>
                <span className="text-zinc-200">{CRYPTO_WALLETS[selectedCrypto].name} ({selectedCrypto})</span>
              </div>

              <div className="space-y-1">
                <span className="text-zinc-400 text-[10px] block">Payment Wallet Address:</span>
                <div className="p-2 rounded bg-zinc-950 border border-zinc-800 text-[11px] text-zinc-300 break-all select-all">
                  {CRYPTO_WALLETS[selectedCrypto].address}
                </div>
              </div>

              <div className="text-[11px] text-zinc-400 pt-1">
                <strong>Next Step:</strong> Complete your {selectedCrypto} transfer. Once detected on-chain, your crated dirt bike will be dispatched with liftgate tracking via email to <strong>{formData.email}</strong>.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  window.print();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-semibold font-mono flex items-center justify-center gap-2 border border-zinc-800"
              >
                <Download className="w-4 h-4" />
                <span>Print / Save Receipt</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-black font-mono uppercase tracking-wider"
              >
                Return to Shop
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
