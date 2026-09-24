import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { ActivePage, CartItem } from '../types';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  Zap, 
  ShieldCheck, 
  Truck, 
  MessageSquare,
  Coins
} from 'lucide-react';

interface NavbarProps {
  activePage: ActivePage;
  cartItems: CartItem[];
  setIsCartOpen: (open: boolean) => void;
  setIsSearchOpen: (open: boolean) => void;
  setIsChatOpen: (open: boolean) => void;
  onSelectGMX?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  cartItems,
  setIsCartOpen,
  setIsSearchOpen,
  setIsChatOpen,
  onSelectGMX,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Strictly respect user-specified menu order: Shop, Blog, About, Contact, FAQ
  const navLinks: { name: string; page: ActivePage; path: string }[] = [
    { name: 'Shop', page: 'shop', path: '/shop' },
    { name: 'Blog', page: 'blog', path: '/blog' },
    { name: 'About', page: 'about', path: '/about' },
    { name: 'Contact', page: 'contact', path: '/contact' },
    { name: 'FAQ', page: 'faq', path: '/faq' },
  ];

  // Real <Link> elements handle navigation; this just tidies up UI state on click.
  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
      {/* Top Banner: Free Nationwide Shipping & 10% Crypto Discount */}
      <div className="bg-gradient-to-r from-emerald-950 via-zinc-900 to-emerald-950 border-b border-emerald-500/20 py-1.5 px-4 text-xs font-mono text-zinc-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 font-bold text-emerald-400 border border-emerald-500/30">
              <Truck className="w-3.5 h-3.5 text-emerald-400" />
              FREE NATIONWIDE SHIPPING
            </span>
            {onSelectGMX && (
              <Link
                to="/shop"
                onClick={() => {
                  onSelectGMX();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hidden sm:inline-flex items-center gap-1 rounded bg-amber-500/20 px-2 py-0.5 font-bold text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-colors cursor-pointer"
              >
                <span>🇦🇺 NEW: GMX Motorbikes Added (70cc - 250cc &amp; ECR)</span>
              </Link>
            )}
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-emerald-300 font-semibold">
              <Coins className="w-3.5 h-3.5 text-emerald-400" />
              Pay with Crypto &amp; Get 10% Instant Discount
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-zinc-400">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
              2-Year Factory Warranty
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="flex items-center text-left focus:outline-none group cursor-pointer"
            aria-label="Kanvale Dirt Bikes Home"
          >
            <Logo size="md" />
          </Link>

          {/* Desktop Nav Links in strict user order: Shop, Blog, About, Contact, FAQ */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activePage === link.page;
              return (
                <Link
                  key={link.page}
                  to={link.path}
                  onClick={handleNavClick}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-zinc-800 text-emerald-400 font-semibold shadow-sm'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {onSelectGMX && (
              <Link
                to="/shop"
                onClick={() => {
                  onSelectGMX();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="ml-2 px-3 py-1.5 rounded-lg font-mono text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-500/40 hover:bg-amber-900/60 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm shadow-amber-500/10"
              >
                <span>🇦🇺 GMX Range (9)</span>
              </Link>
            )}
          </nav>

          {/* Action Buttons: Search, Live Chat, Cart */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800 transition-colors cursor-pointer"
              title="Search electric dirt bikes"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Live Chat Trigger */}
            <button
              onClick={() => setIsChatOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors cursor-pointer"
              title="Live Chat Support"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Live Chat</span>
            </button>

            {/* Cart / Order Drawer Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Cart / Order</span>
              {totalCartCount > 0 && (
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-zinc-950 text-emerald-400 text-xs font-bold font-mono">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-800 bg-zinc-950 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.page}
              to={link.path}
              onClick={handleNavClick}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                activePage === link.page
                  ? 'bg-zinc-800 text-emerald-400 font-semibold'
                  : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
              }`}
            >
              <span>{link.name}</span>
              <Zap className="w-4 h-4 text-emerald-500/60" />
            </Link>
          ))}

          {onSelectGMX && (
            <Link
              to="/shop"
              onClick={() => {
                onSelectGMX();
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full text-left px-4 py-3 rounded-lg text-sm font-mono font-bold bg-amber-950/40 border border-amber-500/30 text-amber-300 flex items-center justify-between"
            >
              <span>🇦🇺 GMX Motorbikes (70cc - 250cc &amp; ECR)</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500 text-black font-bold">9 Models</span>
            </Link>
          )}

          <div className="pt-3 border-t border-zinc-900 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsChatOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-zinc-900 text-zinc-200 text-sm font-medium border border-zinc-800"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Open Live Chat Support</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
