import ThemeToggle from './ThemeToggle';
import { SearchIcon, AlarmIcon, UserIcon } from './Icons';

export default function Header({ theme, onToggleTheme }) {
  return (
    <header
      className="sticky top-0 z-50 transition-colors"
      style={{
        background: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-16 px-20">
        {/* Left */}
        <div className="flex items-center gap-10">
          <a href="#" className="text-xl font-bold tracking-tight no-underline transition-colors" style={{ color: 'var(--text-primary)' }}>
            NEXON <span style={{ color: 'var(--accent-red)' }}>Live TV</span>
          </a>
          <nav className="flex gap-7">
            {['홈', '라이브', '스케줄', 'VOD', '클립'].map((item, i) => (
              <a
                key={item}
                href="#"
                className={`text-sm no-underline px-3 py-2 rounded-lg relative transition-all duration-200 ${
                  i === 0 ? 'font-medium' : 'font-normal'
                }`}
                style={{
                  color: i === 0 ? 'var(--text-primary)' : 'var(--text-tertiary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.background = 'var(--thumb-overlay-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = i === 0 ? 'var(--text-primary)' : 'var(--text-tertiary)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {item}
                {i === 0 && (
                  <span
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-[18px] h-[3px] rounded-sm"
                    style={{ background: 'var(--nav-active-bar)' }}
                  />
                )}
              </a>
            ))}
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <IconButton label="검색"><SearchIcon /></IconButton>
          <IconButton label="알림"><AlarmIcon /></IconButton>
          <div
            className="w-8 h-8 rounded-full ml-1 flex items-center justify-center cursor-pointer"
            style={{ background: '#3D6BFF' }}
            aria-label="프로필"
          >
            <UserIcon className="w-[18px] h-[18px] text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}

function IconButton({ label, children }) {
  return (
    <button
      className="w-9 h-9 rounded-[10px] border-none bg-transparent cursor-pointer flex items-center justify-center transition-all duration-200"
      style={{ color: 'var(--text-tertiary)' }}
      aria-label={label}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--chip-bg)';
        e.currentTarget.style.color = 'var(--text-primary)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = 'var(--text-tertiary)';
      }}
    >
      {children}
    </button>
  );
}
