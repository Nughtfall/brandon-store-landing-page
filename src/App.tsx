import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Sidebar } from '@/components/layout/Sidebar';
import { TopSellers } from '@/components/sections/TopSellers';
import { TopArticles } from '@/components/sections/TopArticles';
import { LatestSection } from '@/components/sections/LatestSection';
import { ArticleModal } from '@/components/modals/ArticleModal';
import { SellerModal } from '@/components/modals/SellerModal';
import { CartModal, CartItem } from '@/components/modals/CartModal';
import { DiscountModal } from '@/components/modals/DiscountModal';
import { SettingsModal } from '@/components/modals/SettingsModal';
import { FavoritesView } from '@/components/views/FavoritesView';
import { AboutView } from '@/components/views/AboutView';
import { WorksView } from '@/components/views/WorksView';
import { mockSellers, mockTopArticles, mockLatestArticles } from '@/data/mockData';
import { Article, Seller, NavItemKey } from '@/types';

export function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<string>('home');

  // Interactive Data States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedSeller, setSelectedSeller] = useState<Seller | null>(null);
  const [favorites, setFavorites] = useState<Article[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'c1',
      name: 'Logo Design Masterclass Bundle',
      price: 29,
      quantity: 1,
      details: 'Full vector asset kit & 5-step tutorial',
    },
  ]);

  // Modal Control States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDiscountOpen, setIsDiscountOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Handlers
  const handleSidebarTabChange = (tabKey: NavItemKey) => {
    if (tabKey === 'cart') {
      setIsCartOpen(true);
    } else if (tabKey === 'discount') {
      setIsDiscountOpen(true);
    } else if (tabKey === 'settings') {
      setIsSettingsOpen(true);
    } else if (tabKey === 'favorites') {
      setActiveTab('favorites');
    } else {
      setActiveTab('home');
    }
  };

  const handleToggleBookmark = (article: Article) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === article.id);
      if (exists) {
        return prev.filter((item) => item.id !== article.id);
      } else {
        return [...prev, article];
      }
    });
  };

  const handleAddToCartFromSeller = (seller: Seller) => {
    const newItem: CartItem = {
      id: `service-${seller.id}-${Date.now()}`,
      name: `${seller.name} - Brand Design Package`,
      price: 49,
      quantity: 1,
      details: `Custom design consultation with ${seller.name}`,
    };
    setCartItems((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-[#eef2f8] flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Main Blue Navbar matching mockup */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Main Workspace / Dashboard Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Left Sidebar matching mockup */}
          <Sidebar
            activeTab={
              activeTab === 'home'
                ? 'home'
                : activeTab === 'favorites'
                ? 'favorites'
                : 'home'
            }
            setActiveTab={handleSidebarTabChange}
            cartCount={cartItems.length}
            favoritesCount={favorites.length}
          />

          {/* Right Main Content Area */}
          <div className="flex-1 w-full space-y-6">
            {activeTab === 'home' && (
              <>
                {/* 1. Top Sellers Section */}
                <TopSellers
                  sellers={mockSellers}
                  onSelectSeller={(seller) => setSelectedSeller(seller)}
                />

                {/* 2. Top Articles Section */}
                <TopArticles
                  articles={mockTopArticles}
                  onSelectArticle={(article) => setSelectedArticle(article)}
                />

                {/* 3. Latest Bla Bla Section */}
                <LatestSection
                  articles={mockLatestArticles}
                  onSelectArticle={(article) => setSelectedArticle(article)}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              </>
            )}

            {activeTab === 'favorites' && (
              <FavoritesView
                favorites={favorites}
                onSelectArticle={(article) => setSelectedArticle(article)}
                onRemoveFavorite={handleToggleBookmark}
                onBackToHome={() => setActiveTab('home')}
              />
            )}

            {activeTab === 'about' && (
              <AboutView onBackToHome={() => setActiveTab('home')} />
            )}

            {activeTab === 'works' && (
              <WorksView onBackToHome={() => setActiveTab('home')} />
            )}
          </div>
        </div>
      </main>

      {/* Modals & Dialogs */}
      <ArticleModal
        article={selectedArticle}
        isOpen={Boolean(selectedArticle)}
        onClose={() => setSelectedArticle(null)}
        isBookmarked={
          selectedArticle
            ? favorites.some((f) => f.id === selectedArticle.id)
            : false
        }
        onToggleBookmark={handleToggleBookmark}
      />

      <SellerModal
        seller={selectedSeller}
        isOpen={Boolean(selectedSeller)}
        onClose={() => setSelectedSeller(null)}
        onAddToCart={handleAddToCartFromSeller}
      />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      <DiscountModal
        isOpen={isDiscountOpen}
        onClose={() => setIsDiscountOpen(false)}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
}

export default App;
