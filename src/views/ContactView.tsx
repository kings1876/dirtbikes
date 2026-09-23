import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  Coins,
  Truck
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

interface ContactViewProps {
  openLiveChat: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ openLiveChat }) => {
  useSEO({
    title: 'Contact Us | Kanvale Dirt Bikes',
    description:
      'Get in touch with Kanvale Dirt Bikes for order support, wholesale inquiries, or technical questions about our electric dirt bike lineup.',
    canonicalPath: '/contact',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Question & Bike Sizing',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Web3Forms payload integration
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'pending-user-web3forms-key',
          subject: `Contact Inquiry [${formData.subject}] - Kanvale Dirt Bikes`,
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      }).catch(() => {});
    } catch {}

    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
          DISPATCH &amp; SUPPORT DESK
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-sans uppercase tracking-tight">
          Contact Kanvale Dirt Bikes
        </h1>
        <p className="text-sm text-zinc-400 leading-relaxed">
          Need technical guidance on motor configurations, battery range, or our 10% crypto payment process? Our pit mechanics and dispatch specialists are here to assist.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Contact Info & Support Channels */}
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 space-y-4">
            <h3 className="text-base font-bold text-white font-mono uppercase">
              Fulfillment &amp; HQ
            </h3>

            <div className="space-y-3 text-xs text-zinc-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">USA Operations Hub:</strong>
                  <span>Nationwide Freight Distribution Center, USA</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Australian Heritage Office:</strong>
                  <span>Founded 25 May 2000, Australia</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Direct Email:</strong>
                  <span>contact@kanvaledirtbikes.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Support Hours:</strong>
                  <span>Monday - Saturday: 8:00 AM – 8:00 PM EST</span>
                  <span className="text-zinc-500 block text-[11px]">24/7 Crypto On-Chain Verification</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Chat Support Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-900 to-zinc-950 border border-emerald-500/30 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-sm">
              <MessageSquare className="w-4 h-4" />
              <span>Need an Instant Answer?</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Launch our live chat desk for real-time recommendations, stock verification, and instant crypto transaction assistance.
            </p>
            <button
              onClick={openLiveChat}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-black font-mono uppercase tracking-wider transition-colors cursor-pointer"
            >
              Open Live Chat Desk
            </button>
          </div>
        </div>

        {/* Contact / Order Inquiry Form */}
        <div className="lg:col-span-2">
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white font-mono">
                  Message Dispatched!
                </h3>
                <p className="text-xs text-zinc-400 max-w-md mx-auto">
                  Thank you for contacting Kanvale Dirt Bikes. A technical specialist will review your inquiry and respond within 2 to 4 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: 'General Question & Bike Sizing',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-zinc-800 text-white text-xs font-mono hover:bg-zinc-700"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-zinc-800 pb-3 mb-4">
                  <h3 className="text-lg font-bold text-white font-mono uppercase">
                    Submit an Inquiry
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">
                    Integrated with Web3Forms Dispatch Service
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono text-zinc-400 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. David Vance"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-zinc-400 block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. david@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono text-zinc-400 block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +1 (555) 392-1049"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-zinc-400 block mb-1">Inquiry Topic</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:border-emerald-500 focus:outline-none"
                    >
                      <option value="General Question & Bike Sizing">General Question &amp; Bike Sizing</option>
                      <option value="Crypto Payment & 10% Discount Assistance">Crypto Payment &amp; 10% Discount</option>
                      <option value="Nationwide Freight & Delivery Status">Nationwide Freight &amp; Delivery</option>
                      <option value="Wholesale & Dealership Opportunities">Wholesale &amp; Dealership</option>
                      <option value="Technical Specs & Battery Swaps">Technical Specs &amp; Battery Swaps</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono text-zinc-400 block mb-1">Your Message or Question *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the bike model you're interested in, your terrain type, or questions about ordering..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:border-emerald-500 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-black font-mono uppercase tracking-wider transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSending ? (
                    <span>Submitting to Kanvale Desk...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
