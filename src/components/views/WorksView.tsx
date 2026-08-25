import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface WorksViewProps {
  onBackToHome: () => void;
}

export const WorksView: React.FC<WorksViewProps> = ({ onBackToHome }) => {
  const projects = [
    {
      title: 'Conditional CSS & Interactive Layouts',
      category: 'Frontend Engineering',
      desc: 'Interactive guides and visual demonstrations on modern CSS Container Queries and Flexbox/Grid patterns.',
      tags: ['CSS', 'Interactive', 'Grid'],
      date: '2026',
    },
    {
      title: 'Design System Iconography Library',
      category: 'Visual Design',
      desc: 'A comprehensive collection of 400+ scalable vector icons and isometric product illustrations.',
      tags: ['Vector', 'Icons', 'Figma'],
      date: '2026',
    },
    {
      title: 'E-Commerce Storefront UI Kit',
      category: 'Product Design',
      desc: 'Accessible, component-driven UI pattern library crafted for next-generation digital marketplaces.',
      tags: ['React', 'Tailwind', 'Shadcn'],
      date: '2026',
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-slate-200/90 shadow-sm p-6 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Featured Works & Case Studies</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Curated selection of open-source resources, design systems, and frontend architectures.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={onBackToHome} className="text-xs">
          ← Back to Home
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group bg-white"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">
                  {proj.category}
                </span>
                <span className="text-[11px] text-slate-400">{proj.date}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                {proj.title}
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">{proj.desc}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <div className="flex gap-1.5">
                {proj.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="text-[10px] px-1.5 py-0">
                    {t}
                  </Badge>
                ))}
              </div>
              <span className="text-blue-600 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
