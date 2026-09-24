import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ActivePage, CartItem, PolicyPage, Product } from './types';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { SearchModal } from './components/SearchModal';
import { LiveChatDrawer } from './components/LiveChatDrawer';
import { PolicyModal } from './components/PolicyModal';
import { CookieBanner } from './components/CookieBanner';
import { ScrollToTop } from './components/ScrollToTop';
import { HomeView } from './views/HomeView';
import { ShopView } from './views/ShopView';
import { BlogView } from './views/BlogView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { FaqView } from './views/FaqView';
import { ProductPageView } from './views/ProductPageView';
import { NotFoundView } from './views/NotFoundView';

// Each nav tab now maps to a real, crawlable URL instead of client-only state.
const PAGE_PATHS: Record<ActivePage, string> = {
  home: '/',
  shop: '/shop',
  blog: '/blog',
  about: '/about',
  contact: '/contact',
  faq: '/faq',
};

function pathToActivePage(pathname: string): ActivePage {
  const match = (Object.entries(PAGE_PATHS) as [ActivePage, string][]).find(
    ([, path]) => pathname === path
  );
  return match ? match[0] : 'home';
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Derived from the URL so the Navbar/Footer highlight the correct tab on load, back/forward, etc.
  const activePage = pathToActivePage(location.pathname);
  const [shopCategory, setShopCategory] = useState<string>('All');

  const handleSetActivePage = (page: ActivePage) => {
    navigate(PAGE_PATHS[page]);
  };

  const goToProduct = (product: Product) => {
    navigate(`/product/${product.slug}`);
  };

  // Cart & Order State
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('kanvale_cart');
      if (saved) return JSON.parse(saved);
    } catch {}
    // Default with top popular bike pre-loaded so cart is ready to inspect
    return [
      {
        product: PRODUCTS[1], // Storm Pro 72V Enduro Trail
        quantity: 1,
      },
    ];
  });

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState<PolicyPage>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('kanvale_cart', JSON.stringify(cartItems));
    } catch {}
  }, [cartItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to Cart. Free shipping & 10% crypto discount applied!`);
  };

  const handleInstantOrder = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev;
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500 selection:text-black">
      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 py-3 px-4 rounded-2xl bg-emerald-950 border border-emerald-500/50 text-emerald-300 text-xs font-mono font-semibold shadow-2xl backdrop-blur-md animate-bounce">
          ⚡ {toastMessage}
        </div>
      )}

      <ScrollToTop />

      {/* Main Sticky Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={handleSetActivePage}
        cartItems={cartItems}
        setIsCartOpen={setIsCartOpen}
        setIsSearchOpen={setIsSearchOpen}
        setIsChatOpen={setIsChatOpen}
        onSelectGMX={() => {
          navigate('/shop');
          setShopCategory('GMX Australian Dirt Bikes');
        }}
      />

      {/* Page Content View — each menu item is now a real, crawlable route */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomeView
                onSelectProduct={goToProduct}
                onAddToCart={handleAddToCart}
                onSelectGMX={() => {
                  navigate('/shop');
                  setShopCategory('GMX Australian Dirt Bikes');
                }}
                onSelectCategory={setShopCategory}
              />
            }
          />

          <Route
            path="/shop"
            element={
              <ShopView
                onSelectProduct={goToProduct}
                onAddToCart={handleAddToCart}
                onInstantOrder={handleInstantOrder}
                openChat={() => setIsChatOpen(true)}
                selectedCategory={shopCategory}
                onSelectCategory={setShopCategory}
              />
            }
          />

          <Route path="/blog" element={<BlogView />} />

          <Route path="/about" element={<AboutView onExploreShop={() => navigate('/shop')} />} />

          <Route
            path="/contact"
            element={<ContactView openLiveChat={() => setIsChatOpen(true)} />}
          />

          <Route path="/faq" element={<FaqView />} />

          <Route
            path="/product/:slug"
            element={
              <ProductPageView
                onAddToCart={handleAddToCart}
                onInstantOrder={handleInstantOrder}
                onSelectProduct={goToProduct}
              />
            }
          />

          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer setActivePage={handleSetActivePage} openPolicy={setActivePolicy} />

      {/* Full Order & Cart Form Modal with Crypto 10% Discount */}
      <OrderModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Instant Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={goToProduct}
      />

      {/* Live Chat Desk Drawer (Tawk.to Integration) */}
      <LiveChatDrawer
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

      {/* Policy Modal (Shipping, Refund, Privacy, Terms) */}
      <PolicyModal
        policy={activePolicy}
        onClose={() => setActivePolicy(null)}
      />

      {/* Cookie / GDPR Notice */}
      <CookieBanner />
    </div>
  );
}
