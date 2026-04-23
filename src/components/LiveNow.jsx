import { liveStreams } from '../data/content';

export default function LiveNow() {
  return (
    <section className="py-12 px-20 max-[1280px]:px-10 max-[768px]:px-4 max-[768px]:py-8 transition-colors duration-350">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full animate-[pulse_2s_ease-in-out_infinite]" style={{ background: 'var(--accent-red)' }} />
          <h2 className="text-[22px] font-bold transition-colors" style={{ color: 'var(--text-primary)' }}>지금 라이브</h2>
        </div>
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

      <div className="grid grid-cols-4 max-[1280px]:grid-cols-3 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1 gap-5">
        {liveStreams.map((s, i) => (
          <a key={i} href="#" className="cursor-pointer no-underline group" style={{ color: 'inherit' }}>
            <div className="relative w-full rounded-xl overflow-hidden transition-transform duration-250 ease-out group-hover:scale-[1.02]" style={{ aspectRatio: '16/9.5' }}>
              <div className="w-full h-full transition-[filter] duration-250 group-hover:brightness-[1.12]" style={{ background: s.color }} />
              <div className="absolute top-2.5 left-2.5 flex gap-1.5">
                <span className="px-2 py-1 rounded text-white text-[10px] font-bold" style={{ background: 'var(--accent-red)' }}>LIVE</span>
                <span className="px-2 py-1 rounded text-white text-[10px] font-medium" style={{ background: 'var(--badge-bg)' }}>{s.viewers}</span>
              </div>
            </div>
            <div className="flex gap-2.5 mt-3">
              <div className="w-9 h-9 rounded-full shrink-0" style={{ background: s.color }} />
              <div className="flex flex-col gap-1 min-w-0">
                <div className="text-sm font-medium truncate transition-colors" style={{ color: 'var(--text-secondary)' }}>{s.title}</div>
                <div className="text-xs truncate transition-colors" style={{ color: 'var(--text-muted)' }}>{s.streamer} · {s.game}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
