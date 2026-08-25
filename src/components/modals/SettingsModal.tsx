import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Settings, Check } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [userName, setUserName] = useState('Brandon Hernandez');
  const [email, setEmail] = useState('brandon@ishadeed.com');
  const [notifications, setNotifications] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1200);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md p-6 rounded-xl border border-slate-200">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-slate-700" />
            <DialogTitle className="text-lg font-bold text-slate-900">
              Account Settings
            </DialogTitle>
          </div>
          <DialogDescription className="text-xs text-slate-500">
            Manage your store preferences and profile details
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 my-2 text-xs">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Display Name
            </label>
            <Input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="text-xs h-9"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email Address
            </label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-xs h-9"
            />
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <div>
              <p className="font-semibold text-slate-700">Email Notifications</p>
              <p className="text-[11px] text-slate-400">Receive order receipts and article updates</p>
            </div>
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="h-4 w-4 text-blue-600 rounded cursor-pointer"
            />
          </div>
        </div>

        <DialogFooter className="mt-3 sm:justify-between flex-row gap-2">
          <Button variant="outline" size="sm" onClick={onClose} className="text-xs">
            Cancel
          </Button>
          <Button
            size="sm"
            onClick={handleSave}
            className="bg-[#1b62d8] hover:bg-[#1553bd] text-white text-xs gap-1"
          >
            {saved ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Saved!</span>
              </>
            ) : (
              'Save Changes'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
