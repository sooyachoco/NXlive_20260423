import { MoonIcon, SunIcon } from './Icons';

export default function ThemeToggle({ theme, onToggle }) {
  const isLight = theme === 'light';

  return (
    <button
      className="relative w-14 h-[30px] rounded-[15px] cursor-pointer border-none p-0 mr-2 transition-colors duration-350"
      style={{ background: 'var(--toggle-bg)' }}
      onClick={onToggle}
      aria-label="테마 전환"
    >
      <MoonIcon
        className="absolute top-1/2 left-2 w-3.5 h-3.5 -translate-y-1/2 transition-opacity duration-350"
        style={{ color: 'var(--toggle-icon-moon)', opacity: isLight ? 0.4 : 1 }}
      />
      <SunIcon
        className="absolute top-1/2 right-2 w-3.5 h-3.5 -translate-y-1/2 transition-opacity duration-350"
        style={{ color: 'var(--toggle-icon-sun)', opacity: isLight ? 1 : 0.5 }}
      />
      <div
        className="absolute top-[3px] left-[3px] w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-350"
        style={{
          background: 'var(--toggle-knob)',
          boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
          transform: isLight ? 'translateX(26px)' : 'translateX(0)',
          transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
        }}
      />
    </button>
  );
}
