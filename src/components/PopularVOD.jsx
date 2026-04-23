import { useState } from 'react';
import { vodFilters, vods } from '../data/content';
import { BookmarkIcon } from './Icons';

export default function PopularVOD() {
  const [activeFilter, setActiveFilter] = useState(0);
  const [bookmarks, setBookmarks] = useState(new Set());

  const toggleBookmark = (index) => {
    setBookmarks((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section className="transition-colors" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-[1440px] mx-auto px-20 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[22px] font-bold transition-colors" style={{ color: 'var(--text-primary)' }}>인기 VOD</h2>
          <a
            href="#"
            className="text-sm font-medium no-underline transition-colors"
            style={{ color: 'var(--text-tertiary)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-tertiary)'}
          >
            전체보기 →
          </a>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 mb-6 flex-wrap" role="tablist">
          {vodFilters.map((f, i) => (
            <button
              key={f}
              role="tab"
              aria-selected={activeFilter === i}
              className="px-4 py-2 rounded-[20px] text-[13px] font-medium cursor-pointer transition-all duration-200"
              style={{
                background: activeFilter === i ? 'var(--chip-active-bg)' : 'var(--chip-bg)',
                color: activeFilter === i ? 'var(--chip-active-text)' : 'var(--chip-text)',
                border: activeFilter === i ? '1px solid transparent' : '1px solid var(--chip-border)',
                fontFamily: 'inherit',
              }}
              onClick={() => setActiveFilter(i)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* VOD Grid */}
        <div className="grid grid-cols-4 gap-5">
          {vods.map((v, i) => (
            <a key={i} href="#" className="cursor-pointer no-underline group" style={{ color: 'inherit' }}>
              <div className="relative w-full h-[160px] rounded-[10px] overflow-hidden transition-transform duration-200 group-hover:scale-[1.02]">
                <div className="w-full h-full transition-[filter] duration-200 group-hover:brightness-110" style={{ background: v.color }} />

                {/* Bookmark */}
                <button
                  className={`absolute top-2.5 right-2.5 w-7 h-7 rounded-md flex items-center justify-center cursor-pointer border-none p-0 transition-all duration-200 ${
                    bookmarks.has(i) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                  style={{
                    background: 'rgba(0,0,0,0.4)',
                    backdropFilter: 'blur(4px)',
                    color: bookmarks.has(i) ? 'var(--accent-yellow)' : 'rgba(255,255,255,0.85)',
                  }}
                  aria-label="즐겨찾기"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleBookmark(i);
                  }}
                >
                  <BookmarkIcon />
                </button>

                {/* Duration */}
                <span
                  className="absolute bottom-2 right-2 px-1.5 py-[3px] rounded text-white text-[11px] font-medium"
                  style={{ background: 'rgba(0,0,0,0.75)' }}
                >
                  {v.duration}
                </span>
              </div>

              <div
                className="mt-2.5 text-[13px] font-medium leading-[1.4] transition-colors"
                style={{
                  color: 'var(--text-secondary)',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {v.title}
              </div>
              <div className="mt-1 text-[11px] transition-colors" style={{ color: 'var(--text-muted)' }}>
                조회수 {v.views}회 · {v.date}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
