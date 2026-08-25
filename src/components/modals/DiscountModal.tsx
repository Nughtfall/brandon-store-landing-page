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
import { Percent, Copy, Check } from 'lucide-react';

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiscountModal: React.FC<DiscountModalProps> = ({ isOpen, onClose }) => {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const coupons = [
    { code: 'BRANDON2026', discount: '20% OFF', desc: 'Valid across all UI/UX consulting and icon packs' },
    { code: 'FIRSTORDER', discount: '$15 OFF', desc: 'Instant discount on your first order with top sellers' },
    { code: 'SUMMERDESIGN', discount: '10% OFF', desc: 'Available for all store items this season' },
  ];

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md p-6 rounded-xl border border-slate-200">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Percent className="w-5 h-5 text-amber-500" />
            <DialogTitle className="text-lg font-bold text-slate-900">
              Active Discounts & Vouchers
            </DialogTitle>
          </div>
          <DialogDescription className="text-xs text-slate-500">
            Copy discount codes to apply savings during checkout
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 my-3">
          {coupons.map((c) => (
            <div
              key={c.code}
              className="p-3 bg-blue-50/50 rounded-lg border border-blue-100 flex items-center justify-between"
            >
              <div>
                <span className="inline-block font-mono font-bold text-xs bg-blue-600 text-white px-2 py-0.5 rounded">
                  {c.code}
                </span>
                <p className="text-xs font-semibold text-slate-800 mt-1">{c.discount}</p>
                <p className="text-[11px] text-slate-500">{c.desc}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCopy(c.code)}
                className="text-xs gap-1 h-8 shrink-0 bg-white"
              >
                {copiedCode === c.code ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span className="text-emerald-600">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </Button>
            </div>
          ))}
        </div>

        <DialogFooter>
          <Button size="sm" onClick={onClose} className="w-full bg-[#1b62d8] text-white text-xs">
            Done
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
