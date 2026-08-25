import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User, LogOut, Heart, ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSettings: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
  onOpenSettings,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Works', id: 'works' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#1b62d8] shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('home');
              }}
              className="group flex items-center gap-2 focus:outline-none"
            >
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:opacity-95 transition-opacity">
                Brandon Store.
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links & User Profile */}
          <div className="hidden md:flex items-center space-x-7">
            <nav className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setActiveTab(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-white ${
                    activeTab === link.id
                      ? 'text-white font-semibold underline underline-offset-8 decoration-2 decoration-white/90'
                      : 'text-blue-100 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Divider */}
            <div className="h-5 w-px bg-blue-400/40" />

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-blue-100 hover:text-white hover:bg-blue-700/50 rounded-full transition-colors focus:outline-none"
              title="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-slate-900 shadow-sm animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2.5 p-1 rounded-full hover:bg-blue-700/40 transition-colors focus:outline-none ring-offset-blue-600 focus:ring-2 focus:ring-white">
                <span className="text-sm font-medium text-white select-none">
                  Brandon Hernandez
                </span>
                <Avatar className="h-8 w-8 ring-2 ring-white/90 shadow-sm cursor-pointer">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&auto=format&fit=crop&q=80"
                    alt="Brandon Hernandez"
                  />
                  <AvatarFallback className="bg-blue-800 text-white font-semibold text-xs">
                    BH
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52 mt-1">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-semibold text-slate-800 leading-none">Brandon Hernandez</p>
                    <p className="text-xs text-slate-500 leading-none">brandon@ishadeed.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onOpenCart} className="cursor-pointer">
                  <ShoppingBag className="mr-2 h-4 w-4 text-blue-600" />
                  <span>My Cart ({cartCount})</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveTab('favorites')} className="cursor-pointer">
                  <Heart className="mr-2 h-4 w-4 text-pink-500" />
                  <span>Saved Items</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onOpenSettings} className="cursor-pointer">
                  <User className="mr-2 h-4 w-4 text-slate-600" />
                  <span>Account Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenCart}
              className="relative p-2 text-white hover:bg-blue-700/50 rounded-lg transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute 0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[9px] font-bold text-slate-900">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:bg-blue-700/50 rounded-lg transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-blue-500/50 space-y-2 bg-[#1b62d8]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeTab === link.id
                    ? 'bg-blue-700 text-white font-semibold'
                    : 'text-blue-100 hover:bg-blue-700/40 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-2 border-t border-blue-500/40 flex items-center justify-between px-3 py-2">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 ring-1 ring-white">
                  <AvatarImage src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&auto=format&fit=crop&q=80" alt="Brandon Hernandez" />
                  <AvatarFallback>BH</AvatarFallback>
                </Avatar>
                <span className="text-white text-sm font-medium">Brandon Hernandez</span>
              </div>
              <button
                onClick={() => {
                  onOpenSettings();
                  setMobileMenuOpen(false);
                }}
                className="text-xs text-blue-200 underline"
              >
                Settings
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
