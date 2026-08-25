import React, { useState } from 'react';
import { Flame, SlidersHorizontal, Check } from 'lucide-react';
import { Seller } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface TopSellersProps {
  sellers: Seller[];
  onSelectSeller?: (seller: Seller) => void;
}

type SortOption = 'default' | 'orders-desc' | 'orders-asc' | 'name-asc' | 'rating-desc';

export const TopSellers: React.FC<TopSellersProps> = ({ sellers, onSelectSeller }) => {
  const [sortBy, setSortBy] = useState<SortOption>('default');

  const sortedSellers = [...sellers].sort((a, b) => {
    if (sortBy === 'orders-desc') return b.orders - a.orders;
    if (sortBy === 'orders-asc') return a.orders - b.orders;
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    if (sortBy === 'rating-desc') return (b.rating || 0) - (a.rating || 0);
    return 0; // default order
  });

  return (
    <section className="bg-white rounded-lg border border-slate-200/90 shadow-sm p-4 sm:p-5">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center text-amber-500">
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
          </span>
          <h2 className="text-sm sm:text-base font-bold text-slate-800 tracking-tight">
            Top Sellers
          </h2>
        </div>

        {/* Filter Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors py-1 px-2 rounded-md hover:bg-slate-50 focus:outline-none">
            <span className="font-normal">Filter By</span>
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuLabel className="text-xs">Sort Sellers By</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => setSortBy('default')}
              className="flex items-center justify-between text-xs cursor-pointer"
            >
              <span>Default / Featured</span>
              {sortBy === 'default' && <Check className="w-3.5 h-3.5 text-blue-600" />}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setSortBy('rating-desc')}
              className="flex items-center justify-between text-xs cursor-pointer"
            >
              <span>Highest Rating</span>
              {sortBy === 'rating-desc' && <Check className="w-3.5 h-3.5 text-blue-600" />}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setSortBy('orders-desc')}
              className="flex items-center justify-between text-xs cursor-pointer"
            >
              <span>Most Orders</span>
              {sortBy === 'orders-desc' && <Check className="w-3.5 h-3.5 text-blue-600" />}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setSortBy('name-asc')}
              className="flex items-center justify-between text-xs cursor-pointer"
            >
              <span>Name (A to Z)</span>
              {sortBy === 'name-asc' && <Check className="w-3.5 h-3.5 text-blue-600" />}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* 4x2 Grid of Sellers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {sortedSellers.map((seller, index) => (
          <div
            key={`${seller.id}-${index}`}
            onClick={() => onSelectSeller?.(seller)}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all cursor-pointer group"
          >
            {/* Avatar */}
            <div className="relative">
              <Avatar className="h-10 w-10 ring-1 ring-slate-200">
                <AvatarImage src={seller.avatar} alt={seller.name} />
                <AvatarFallback className="bg-blue-100 text-blue-700 text-xs font-semibold">
                  {seller.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              {index === 0 && (
                <div className="absolute -bottom-1 -right-1 bg-amber-400 text-[9px] font-black text-slate-900 rounded-full w-4 h-4 flex items-center justify-center shadow-xs">
                  ★
                </div>
              )}
            </div>

            {/* Seller Info */}
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-slate-800 truncate group-hover:text-blue-600 transition-colors">
                {seller.name}
              </p>
              <p className="text-[11px] text-slate-400 font-normal truncate mt-0.5">
                {seller.orders} orders
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
