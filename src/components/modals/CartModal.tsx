import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Trash2, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  details?: string;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearCart,
}) => {
  const [checkedOut, setCheckedOut] = React.useState(false);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = items.length > 0 ? 10 : 0;
  const total = Math.max(0, subtotal - discount);

  const handleCheckout = () => {
    setCheckedOut(true);
    setTimeout(() => {
      onClearCart();
      setCheckedOut(false);
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md p-6 rounded-xl border border-slate-200">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-blue-600" />
            <DialogTitle className="text-lg font-bold text-slate-900">
              Your Shopping Cart
            </DialogTitle>
          </div>
          <DialogDescription className="text-xs text-slate-500">
            Review design packages and resources selected in Brandon Store
          </DialogDescription>
        </DialogHeader>

        {checkedOut ? (
          <div className="py-10 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
            <h3 className="text-base font-bold text-slate-800">Order Placed Successfully!</h3>
            <p className="text-xs text-slate-500">
              Receipt and download links have been sent to your email.
            </p>
          </div>
        ) : items.length === 0 ? (
          <div className="py-10 text-center space-y-2">
            <ShoppingBag className="w-10 h-10 text-slate-300 mx-auto" />
            <p className="text-sm font-semibold text-slate-700">Your cart is currently empty</p>
            <p className="text-xs text-slate-400">
              Select a seller package or design asset from the store.
            </p>
          </div>
        ) : (
          <div className="space-y-4 my-2">
            <div className="max-h-60 overflow-y-auto space-y-2 pr-1">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100"
                >
                  <div>
                    <p className="text-xs font-bold text-slate-800">{item.name}</p>
                    <p className="text-[11px] text-slate-400">{item.details || 'Design Asset / Service'}</p>
                    <p className="text-xs font-semibold text-blue-600 mt-1">${item.price}</p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1.5 text-slate-400 hover:text-red-500 rounded-md transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Price Summary */}
            <div className="pt-3 border-t border-slate-200 space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-emerald-600">
                <span>Store Discount (PROMO)</span>
                <span>-${discount}</span>
              </div>
              <div className="flex justify-between font-bold text-sm text-slate-900 pt-1 border-t border-slate-100">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
          </div>
        )}

        <DialogFooter className="mt-2 sm:justify-between flex-row gap-2">
          <Button variant="outline" size="sm" onClick={onClose} className="text-xs">
            Continue Browsing
          </Button>
          {items.length > 0 && !checkedOut && (
            <Button
              size="sm"
              onClick={handleCheckout}
              className="bg-[#1b62d8] hover:bg-[#1553bd] text-white text-xs gap-1.5"
            >
              <span>Complete Checkout (${total})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
