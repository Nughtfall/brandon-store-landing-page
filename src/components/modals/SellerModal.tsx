import React from 'react';
import { Seller } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, ShoppingBag, CheckCircle } from 'lucide-react';

interface SellerModalProps {
  seller: Seller | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (seller: Seller) => void;
}

export const SellerModal: React.FC<SellerModalProps> = ({
  seller,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  if (!seller) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md p-6 rounded-xl border border-slate-200">
        <DialogHeader className="text-center sm:text-center flex flex-col items-center">
          <Avatar className="h-20 w-20 ring-4 ring-blue-100 shadow-md mb-3">
            <AvatarImage src={seller.avatar} alt={seller.name} />
            <AvatarFallback className="bg-blue-600 text-white text-lg font-bold">
              {seller.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-1.5 justify-center">
            <DialogTitle className="text-lg font-bold text-slate-900">
              {seller.name}
            </DialogTitle>
            <CheckCircle className="w-4 h-4 text-blue-500 fill-blue-100" />
          </div>
          <DialogDescription className="text-xs text-slate-500">
            {seller.category || 'Top Rated Design Specialist'}
          </DialogDescription>
        </DialogHeader>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2 my-2 py-3 bg-slate-50 rounded-lg border border-slate-100 text-center">
          <div>
            <p className="text-xs text-slate-400">Orders</p>
            <p className="text-sm font-bold text-slate-800">{seller.orders}</p>
          </div>
          <div className="border-x border-slate-200">
            <p className="text-xs text-slate-400">Rating</p>
            <p className="text-sm font-bold text-amber-600 flex items-center justify-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              {seller.rating || 4.9}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Response</p>
            <p className="text-sm font-bold text-emerald-600">&lt; 1 hr</p>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-2 text-xs">
          <p className="font-semibold text-slate-700">Available Design Packages:</p>
          <div className="space-y-1.5">
            <div className="p-2.5 rounded-md border border-slate-100 bg-white hover:border-blue-200 flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-800">Vector Logo & Brand Identity</p>
                <p className="text-[11px] text-slate-400">Includes SVG, EPS, typography & color guidelines</p>
              </div>
              <span className="font-bold text-blue-600 text-sm">$49</span>
            </div>
            <div className="p-2.5 rounded-md border border-slate-100 bg-white hover:border-blue-200 flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-800">UI/UX Wireframing Consultation</p>
                <p className="text-[11px] text-slate-400">1-on-1 design sprint & prototype audit</p>
              </div>
              <span className="font-bold text-blue-600 text-sm">$89</span>
            </div>
          </div>
        </div>

        <DialogFooter className="mt-4 sm:justify-between flex-row gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
            className="flex-1 text-xs"
          >
            Close
          </Button>
          <Button
            size="sm"
            onClick={() => {
              onAddToCart(seller);
              onClose();
            }}
            className="flex-1 bg-[#1b62d8] hover:bg-[#1553bd] text-white text-xs gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Hire / Add Service ($49)
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
