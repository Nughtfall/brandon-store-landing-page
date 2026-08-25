import React from 'react';
import { Layers, Code2, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AboutViewProps {
  onBackToHome: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onBackToHome }) => {
  return (
    <div className="bg-white rounded-lg border border-slate-200/90 shadow-sm p-6 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-slate-900">About Brandon Store</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Crafted for modern design systems, UI architecture, and frontend fundamentals.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={onBackToHome} className="text-xs">
          ← Back to Home
        </Button>
      </div>

      <div className="prose prose-sm max-w-none text-slate-600 space-y-4 text-xs sm:text-sm">
        <p>
          <strong>Brandon Store</strong> is an open-concept digital design hub founded by Brandon Hernandez. We focus on bridging the gap between interactive design, visual clarity, and rock-solid frontend engineering.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-100 space-y-2">
            <Palette className="w-6 h-6 text-blue-600" />
            <h3 className="font-bold text-slate-800 text-sm">Design Craft</h3>
            <p className="text-xs text-slate-500">
              Clean grids, intentional white space, and pixel-precise vector assets built for modern screens.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-100 space-y-2">
            <Layers className="w-6 h-6 text-blue-600" />
            <h3 className="font-bold text-slate-800 text-sm">Design Systems</h3>
            <p className="text-xs text-slate-500">
              Reusable UI component primitives powered by Radix UI and Tailwind CSS for rapid scaling.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-100 space-y-2">
            <Code2 className="w-6 h-6 text-blue-600" />
            <h3 className="font-bold text-slate-800 text-sm">Code Quality</h3>
            <p className="text-xs text-slate-500">
              Strict TypeScript typing, semantic HTML5 structure, and optimal accessibility standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
