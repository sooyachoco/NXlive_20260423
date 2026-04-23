import { PlayIcon, FullscreenIcon } from './Icons';

export default function Hero() {
  return (
    <section className="py-6 pb-12 px-20 max-[1280px]:px-10 max-[768px]:px-4 max-[768px]:py-4" style={{ background: '#111113' }}>
      <div className="flex gap-6 w-full h-[420px] max-[1024px]:h-[360px] max-[768px]:flex-col max-[768px]:h-auto">
        {/* Left: Stream Info */}
        <div className="flex-1 min-w-0 flex flex-col justify-center gap-5 py-10 max-[768px]:py-5">
          <div
            className="inline-flex items-center gap-1.5 w-fit px-3.5 py-1.5 rounded-[20px] text-xs font-medium"
            style={{ background: '#1C1C21', border: '1px solid #2E2E33', color: '#8F96A3' }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#59E387' }} />
            메이플스토리 · 라이브 중
          </div>

          <h1 className="text-[32px] max-[1024px]:text-[26px] max-[768px]:text-[22px] font-bold leading-[1.3]" style={{ color: '#FFFFFF' }}>
            메이플스토리 월드<br />신규 업데이트 라이브
          </h1>

          <p className="text-[15px] max-[768px]:text-[13px] leading-[1.6]" style={{ color: '#8F96A3' }}>
            신규 월드 컨텐츠와 캐릭터 밸런스 패치를<br />공식 스트리머가 실시간으로 소개합니다.
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full" style={{ background: 'linear-gradient(135deg, #4CA64C, #2E8B2E)' }} />
              <div>
                <span className="text-sm font-medium block" style={{ color: '#E8EBF2' }}>NEXON 공식</span>
                <span className="text-[13px]" style={{ color: '#747A86' }}>메이플스토리</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[13px]" style={{ color: '#8F96A3' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-[pulse_2s_ease-in-out_infinite]" style={{ background: '#D84141' }} />
              12,483명 시청 중
            </div>
          </div>

          <div className="flex gap-3 mt-1">
            <button
              className="px-6 py-3 rounded-[5px] border-none text-white text-sm font-medium cursor-pointer transition-colors duration-200"
              style={{ background: '#D84141', fontFamily: 'inherit' }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#E05555'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#D84141'}
            >
              ▶ 지금 시청하기
            </button>
            <button
              className="px-6 py-3 rounded-[5px] text-white text-sm font-medium cursor-pointer transition-all duration-200"
              style={{
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.1)',
                fontFamily: 'inherit',
                backdropFilter: 'blur(4px)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              🔔 알림 설정
            </button>
          </div>
        </div>

        {/* Right: Video Preview */}
        <div
          className="w-[520px] max-[1024px]:w-[420px] max-[768px]:w-full max-[768px]:h-60 shrink-0 relative rounded-2xl max-[768px]:rounded-xl overflow-hidden cursor-pointer group"
          style={{ background: '#0c0c14' }}
        >
          <div
            className="w-full h-full transition-[filter] duration-300 group-hover:brightness-115"
            style={{ background: 'linear-gradient(135deg, #142840, #261A38, #1A1430)' }}
          />
          {/* LIVE badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-[5px] rounded-md text-white text-xs font-bold tracking-wider animate-[pulse_2s_ease-in-out_infinite]" style={{ background: '#D84141' }}>
              LIVE
            </span>
            <span className="px-2.5 py-[5px] rounded-md text-white text-xs font-medium" style={{ background: 'rgba(0,0,0,0.6)' }}>
              HD
            </span>
          </div>
          {/* Center play button */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
            style={{
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(8px)',
              border: '2px solid rgba(255,255,255,0.2)',
              transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            <PlayIcon className="w-6 h-6 ml-0.5" />
          </div>
          {/* Bottom bar */}
          <div
            className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}
          >
            <span className="px-2 py-[3px] rounded text-white text-[11px] font-medium" style={{ background: 'rgba(255,255,255,0.15)' }}>
              1080p
            </span>
            <button className="w-7 h-7 flex items-center justify-center bg-transparent border-none cursor-pointer text-white/70 hover:text-white transition-colors" aria-label="전체화면">
              <FullscreenIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
