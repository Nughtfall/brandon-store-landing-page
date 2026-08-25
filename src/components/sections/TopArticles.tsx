import React from 'react';
import { Flame } from 'lucide-react';
import { Article } from '@/types';
import { IsometricCubeIcon, UxDesignIcon } from '@/components/common/GraphicIcons';

interface TopArticlesProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const TopArticles: React.FC<TopArticlesProps> = ({
  articles,
  onSelectArticle,
}) => {
  return (
    <section className="bg-white rounded-lg border border-slate-200/90 shadow-sm p-4 sm:p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="flex items-center justify-center text-amber-500">
          <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
        </span>
        <h2 className="text-sm sm:text-base font-bold text-slate-800 tracking-tight">
          Top Articles
        </h2>
      </div>

      {/* 2x2 Grid of Article Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((article, index) => {
          const isLogo = article.type === 'logo' || index % 2 === 0;

          return (
            <div
              key={`${article.id}-${index}`}
              onClick={() => onSelectArticle(article)}
              className="bg-white rounded-md border border-slate-200/80 p-2.5 sm:p-3 flex items-center gap-3.5 hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group"
            >
              {/* Graphic Thumbnail */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-md bg-[#1e62d4] flex items-center justify-center shadow-xs group-hover:scale-[1.03] transition-transform duration-200">
                {isLogo ? (
                  <IsometricCubeIcon className="w-9 h-9 sm:w-11 sm:h-11 text-white" />
                ) : (
                  <UxDesignIcon className="w-9 h-9 sm:w-11 sm:h-11 text-white" />
                )}
              </div>

              {/* Text Info */}
              <div className="min-w-0 flex-1">
                <h3 className="text-xs sm:text-sm font-bold text-slate-800 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-blue-600 font-medium mt-1.5 flex items-center gap-1">
                  <span>{article.author}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
