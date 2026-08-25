import React, { useState } from 'react';
import { Flame, BookOpen } from 'lucide-react';
import { Article } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { WireframePlaceholderGraphic } from '@/components/common/GraphicIcons';

interface LatestSectionProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const LatestSection: React.FC<LatestSectionProps> = ({
  articles,
  onSelectArticle,
  searchQuery,
  setSearchQuery,
}) => {
  const [localInput, setLocalInput] = useState(searchQuery);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localInput);
  };

  const filteredArticles = articles.filter(
    (art) =>
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-white rounded-lg border border-slate-200/90 shadow-sm p-4 sm:p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="flex items-center justify-center text-amber-500">
          <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
        </span>
        <h2 className="text-sm sm:text-base font-bold text-slate-800 tracking-tight">
          Latest Bla Bla
        </h2>
      </div>

      {/* Search Input Bar */}
      <form
        onSubmit={handleSearchSubmit}
        className="flex items-center gap-2 mb-6 max-w-full"
      >
        <div className="relative flex-1">
          <Input
            type="text"
            value={localInput}
            onChange={(e) => {
              setLocalInput(e.target.value);
              setSearchQuery(e.target.value);
            }}
            placeholder="What are you looking for?"
            className="w-full h-10 pl-4 pr-10 text-xs sm:text-sm bg-slate-50/70 border-slate-200 focus-visible:bg-white focus-visible:ring-blue-500 rounded-md placeholder:text-slate-400"
          />
          {localInput && (
            <button
              type="button"
              onClick={() => {
                setLocalInput('');
                setSearchQuery('');
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-semibold"
            >
              ✕
            </button>
          )}
        </div>
        <Button
          type="submit"
          className="h-10 px-5 bg-[#1b62d8] hover:bg-[#1553bd] text-white font-medium text-xs sm:text-sm rounded-md shadow-xs transition-colors shrink-0"
        >
          Search
        </Button>
      </form>

      {/* 3-Column Card Grid */}
      {filteredArticles.length === 0 ? (
        <div className="py-8 text-center bg-slate-50 rounded-lg border border-dashed border-slate-200">
          <BookOpen className="w-8 h-8 text-slate-300 mx-auto mb-2" />
          <p className="text-sm text-slate-600 font-medium">No matching articles found</p>
          <p className="text-xs text-slate-400 mt-1">Try clearing your search query</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setLocalInput('');
              setSearchQuery('');
            }}
            className="mt-3 text-xs"
          >
            Reset Search
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredArticles.map((article, index) => (
            <div
              key={`${article.id}-${index}`}
              onClick={() => onSelectArticle(article)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Graphic Wireframe Box matching screenshot with diagonal crossed lines */}
              <div className="w-full h-28 sm:h-32 rounded-md overflow-hidden bg-[#1e62d4] relative shadow-xs group-hover:shadow-md group-hover:scale-[1.01] transition-all duration-200">
                <WireframePlaceholderGraphic className="w-full h-full" />
              </div>

              {/* Title & Author */}
              <div className="mt-2.5 flex-1 flex flex-col">
                <h3 className="text-xs sm:text-sm font-bold text-slate-800 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-blue-600 font-medium mt-1">
                  {article.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
