import React from 'react';
import { Article } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bookmark, Clock, Calendar, ThumbsUp, UserCheck } from 'lucide-react';
import { IsometricCubeIcon, UxDesignIcon, WireframePlaceholderGraphic } from '@/components/common/GraphicIcons';

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (article: Article) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  isOpen,
  onClose,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [likes, setLikes] = React.useState(24);
  const [hasLiked, setHasLiked] = React.useState(false);

  if (!article) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-xl p-0 overflow-hidden rounded-xl border border-slate-200">
        {/* Banner Graphic Header */}
        <div className="w-full h-40 sm:h-48 bg-[#1e62d4] flex items-center justify-center relative">
          {article.type === 'logo' ? (
            <IsometricCubeIcon className="w-20 h-20 text-white drop-shadow-md" />
          ) : article.type === 'ux' ? (
            <UxDesignIcon className="w-20 h-20 text-white drop-shadow-md" />
          ) : (
            <WireframePlaceholderGraphic className="w-full h-full opacity-90" />
          )}

          <div className="absolute bottom-3 left-4 flex gap-2">
            {article.tags?.map((tag) => (
              <Badge key={tag} className="bg-white/20 hover:bg-white/30 text-white text-[10px] backdrop-blur-xs border-0">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          <DialogHeader>
            <div className="flex items-center gap-3 text-xs text-slate-500 mb-1">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {article.date || 'Aug 24, 2026'}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {article.readTime || '5 min read'}
              </span>
            </div>
            <DialogTitle className="text-xl font-bold text-slate-900 leading-snug">
              {article.title}
            </DialogTitle>
            <DialogDescription className="text-sm text-blue-600 font-medium pt-0.5">
              {article.author}
            </DialogDescription>
          </DialogHeader>

          <p className="text-sm text-slate-600 leading-relaxed">
            {article.description ||
              'In this article, we explore actionable design methodologies, layout composition, color harmony, and strategic typography to build compelling visual identities and scalable digital interfaces.'}
          </p>

          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-100 space-y-2 text-xs text-slate-600">
            <p className="font-semibold text-slate-800 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-blue-600" />
              Key Takeaways from {article.author}:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
              <li>Always start with low-fidelity wireframing and sketching before jumping into vector tools.</li>
              <li>Maintain strict visual balance and harmonic proportions across viewports.</li>
              <li>Ensure high contrast ratios for accessible user experience.</li>
            </ul>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <DialogFooter className="p-4 bg-slate-50/80 border-t border-slate-100 flex-row items-center justify-between sm:justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setHasLiked(!hasLiked);
                setLikes(hasLiked ? likes - 1 : likes + 1);
              }}
              className={`text-xs gap-1.5 ${hasLiked ? 'text-blue-600 border-blue-200 bg-blue-50' : 'text-slate-600'}`}
            >
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>{likes}</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => onToggleBookmark(article)}
              className={`text-xs gap-1.5 ${isBookmarked ? 'text-amber-600 border-amber-200 bg-amber-50' : 'text-slate-600'}`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500' : ''}`} />
              <span>{isBookmarked ? 'Saved' : 'Save'}</span>
            </Button>
          </div>

          <Button
            size="sm"
            onClick={onClose}
            className="bg-[#1b62d8] hover:bg-[#1553bd] text-white text-xs"
          >
            Close Reader
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
