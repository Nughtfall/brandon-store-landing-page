import React from 'react';
import { Star, BookOpen, Trash2 } from 'lucide-react';
import { Article } from '@/types';
import { Button } from '@/components/ui/button';
import { IsometricCubeIcon, UxDesignIcon, WireframePlaceholderGraphic } from '@/components/common/GraphicIcons';

interface FavoritesViewProps {
  favorites: Article[];
  onSelectArticle: (article: Article) => void;
  onRemoveFavorite: (article: Article) => void;
  onBackToHome: () => void;
}

export const FavoritesView: React.FC<FavoritesViewProps> = ({
  favorites,
  onSelectArticle,
  onRemoveFavorite,
  onBackToHome,
}) => {
  return (
    <div className="bg-white rounded-lg border border-slate-200/90 shadow-sm p-5 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
          <h2 className="text-base font-bold text-slate-800">Your Saved Articles ({favorites.length})</h2>
        </div>
        <Button variant="outline" size="sm" onClick={onBackToHome} className="text-xs">
          ← Back to All Articles
        </Button>
      </div>

      {favorites.length === 0 ? (
        <div className="py-12 text-center space-y-2">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
          <p className="text-sm font-semibold text-slate-700">No saved articles yet</p>
          <p className="text-xs text-slate-400">
            Click the save bookmark icon on any article to keep it here for quick access.
          </p>
          <Button size="sm" onClick={onBackToHome} className="bg-[#1b62d8] text-white text-xs mt-3">
            Explore Articles
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {favorites.map((article) => (
            <div
              key={article.id}
              className="p-3 rounded-lg border border-slate-200/80 hover:border-blue-300 hover:shadow-sm flex items-center justify-between transition-all bg-white"
            >
              <div
                onClick={() => onSelectArticle(article)}
                className="flex items-center gap-3 flex-1 cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#1e62d4] rounded-md flex items-center justify-center shrink-0">
                  {article.type === 'logo' ? (
                    <IsometricCubeIcon className="w-6 h-6 text-white" />
                  ) : article.type === 'ux' ? (
                    <UxDesignIcon className="w-6 h-6 text-white" />
                  ) : (
                    <WireframePlaceholderGraphic className="w-full h-full" />
                  )}
                </div>
                <div className="min-w-0 pr-2">
                  <h4 className="text-xs font-bold text-slate-800 line-clamp-1 hover:text-blue-600">
                    {article.title}
                  </h4>
                  <p className="text-[11px] text-blue-600 font-medium">{article.author}</p>
                </div>
              </div>

              <button
                onClick={() => onRemoveFavorite(article)}
                className="p-1.5 text-slate-400 hover:text-red-500 rounded-md transition-colors"
                title="Remove from saved"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
