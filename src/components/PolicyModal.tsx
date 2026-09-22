import React from 'react';
import { PolicyPage } from '../types';
import { X, Truck, RotateCcw, Shield, FileText, AlertTriangle } from 'lucide-react';

interface PolicyModalProps {
  policy: PolicyPage;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ policy, onClose }) => {
  if (!policy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {policy === 'shipping' && (
          <div className="space-y-4 text-xs text-zinc-300 leading-relaxed">
            <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-base border-b border-zinc-800 pb-3">
              <Truck className="w-5 h-5" />
              <span>Nationwide Shipping &amp; Crated Freight Policy</span>
            </div>
            <p>
              <strong>1. Free Nationwide Delivery:</strong> All electric and petrol dirt bikes qualify for 100% Free Nationwide Shipping to residential and commercial addresses across the United States and Australia.
            </p>
            <p>
              <strong>2. Freight Packaging:</strong> Every bike is shipped 90% pre-assembled inside a reinforced steel crate with protective high-density foam wrapping to guarantee zero cosmetic or mechanical transit damage.
            </p>
            <p>
              <strong>3. Delivery Timelines:</strong> Orders placed via crypto order form are validated within 24 hours. Transit typically takes 3 to 7 business days with scheduled liftgate carrier dispatch.
            </p>
            <p>
              <strong>4. Parts &amp; Accessories:</strong> Apparel, tires, and small replacement parts under the free freight threshold carry a flat $15 delivery fee.
            </p>
          </div>
        )}

        {policy === 'refund' && (
          <div className="space-y-4 text-xs text-zinc-300 leading-relaxed">
            <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-base border-b border-zinc-800 pb-3">
              <RotateCcw className="w-5 h-5" />
              <span>30-Day Return &amp; Refund Policy</span>
            </div>
            <p>
              <strong>1. 30-Day Inspection Guarantee:</strong> If your electric dirt bike arrives with manufacturing defects or shipping damage, we provide immediate free replacement parts or full return pickup.
            </p>
            <p>
              <strong>2. Return Conditions:</strong> Unridden bikes returned in original packaging within 30 days are eligible for a complete refund or exchange. For crypto orders, refunds are disbursed in USD equivalent or stablecoin.
            </p>
            <p>
              <strong>3. 2-Year Factory Warranty:</strong> Frames, motors, vector controllers, and battery packs are covered under our 24-month comprehensive replacement warranty.
            </p>
          </div>
        )}

        {policy === 'privacy' && (
          <div className="space-y-4 text-xs text-zinc-300 leading-relaxed">
            <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-base border-b border-zinc-800 pb-3">
              <Shield className="w-5 h-5" />
              <span>Privacy &amp; Data Protection</span>
            </div>
            <p>
              At Kanvale Dirt Bikes, we value your privacy. We never sell, rent, or trade your personal or shipping information.
            </p>
            <p>
              Information collected through our order form (name, address, email, phone) is used strictly to fulfill freight carrier delivery, issue warranty certificates, and confirm on-chain crypto transactions.
            </p>
          </div>
        )}

        {policy === 'terms' && (
          <div className="space-y-4 text-xs text-zinc-300 leading-relaxed">
            <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-base border-b border-zinc-800 pb-3">
              <FileText className="w-5 h-5" />
              <span>Terms &amp; Conditions</span>
            </div>
            <p>
              By ordering through Kanvale Dirt Bikes, you certify that you will operate all off-road vehicles in accordance with state and regional powersport regulations.
            </p>
            <p>
              High-powered electric dirt bikes (6kW–18kW) are intended for closed circuits, private property, and designated OHV parks unless designated as dual-sport street legal with state registration.
            </p>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-zinc-800 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-mono font-semibold"
          >
            Close Policy
          </button>
        </div>
      </div>
    </div>
  );
};
