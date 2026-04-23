import { schedules } from '../data/content';

export default function Schedule() {
  return (
    <section className="transition-colors" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-[1440px] mx-auto px-20 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[22px] font-bold transition-colors" style={{ color: 'var(--text-primary)' }}>오늘의 스케줄</h2>
          <a
            href="#"
            className="text-sm font-medium no-underline transition-colors"
            style={{ color: 'var(--text-tertiary)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-tertiary)'}
          >
            전체 스케줄 →
          </a>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {schedules.map((s, i) => (
            <div
              key={i}
              className="rounded-xl p-5 flex flex-col gap-3.5 transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--text-muted)';
                e.currentTarget.style.boxShadow = 'var(--shadow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="text-2xl font-bold transition-colors" style={{ color: 'var(--text-primary)' }}>{s.time}</div>
              <div className="h-px transition-colors" style={{ background: 'var(--divider)' }} />
              <div className="text-sm font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}>{s.title}</div>
              <div className="text-xs transition-colors" style={{ color: 'var(--text-muted)' }}>{s.game}</div>
              <span
                className="inline-block px-3 py-1.5 rounded-md text-xs font-medium w-fit"
                style={{
                  background: s.type === 'scheduled' ? 'rgba(61,145,255,0.15)' : 'rgba(229,153,26,0.15)',
                  color: s.type === 'scheduled' ? 'var(--accent-blue)' : 'var(--accent-yellow)',
                }}
              >
                {s.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
