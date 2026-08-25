import React from 'react';
import { Home, ShoppingCart, Percent, Star, Settings } from 'lucide-react';
import { NavItemKey } from '@/types';

interface SidebarProps {
  activeTab: NavItemKey;
  setActiveTab: (tab: NavItemKey) => void;
  cartCount: number;
  favoritesCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  favoritesCount,
}) => {
  const menuItems: { id: NavItemKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'cart', label: 'Cart', icon: ShoppingCart },
    { id: 'discount', label: 'Discount', icon: Percent },
    { id: 'favorites', label: 'Favourite Items', icon: Star },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-full md:w-52 lg:w-60 shrink-0">
      <div className="bg-white rounded-lg border border-slate-200/90 shadow-sm p-4 flex flex-col justify-between min-h-[580px] h-full">
        {/* Navigation List */}
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-md text-sm font-medium transition-all group ${
                  isActive
                    ? 'bg-[#1b62d8] text-white shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50/70'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 group-hover:text-blue-600'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>

                {/* Badges for cart / favorites */}
                {item.id === 'cart' && cartCount > 0 && (
                  <span
                    className={`text-[11px] px-1.5 py-0.5 rounded-full font-bold ${
                      isActive
                        ? 'bg-white text-blue-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {cartCount}
                  </span>
                )}
                {item.id === 'favorites' && favoritesCount > 0 && (
                  <span
                    className={`text-[11px] px-1.5 py-0.5 rounded-full font-bold ${
                      isActive
                        ? 'bg-white text-amber-600'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {favoritesCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Footer info matching screenshot */}
        <div className="pt-6 mt-8 border-t border-slate-100 text-slate-400 text-xs flex flex-col space-y-1.5 select-none">
          <p className="font-normal text-slate-400">© Brandon Hernandez 2026</p>
          <p className="text-[11px] text-slate-400 hover:text-slate-600 leading-relaxed cursor-pointer transition-colors">
            Privacy Policy | Terms and Conditions
          </p>
        </div>
      </div>
    </aside>
  );
};
