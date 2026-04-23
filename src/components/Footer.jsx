export default function Footer() {
  return (
    <footer
      className="transition-all"
      style={{ background: 'var(--footer-bg)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-[1440px] mx-auto px-20 py-10">
        <div className="flex justify-between items-start mb-8">
          <div>
            <a href="#" className="text-base font-bold no-underline" style={{ color: 'var(--text-primary)' }}>
              NEXON <span style={{ color: 'var(--accent-red)' }}>Live TV</span>
            </a>
            <p className="text-[13px] leading-[1.6] mt-3 transition-colors" style={{ color: 'var(--text-muted)' }}>
              넥슨 게임의 모든 라이브 방송과<br />VOD를 한 곳에서 만나보세요.
            </p>
          </div>
          <div className="flex gap-16">
            <FooterCol title="서비스" links={['이용약관', '개인정보처리방침', '고객센터']} />
            <FooterCol title="소셜" links={['YouTube', 'X (Twitter)', 'Discord']} />
            <FooterCol title="넥슨" links={['넥슨 홈', '채용', '뉴스룸']} />
          </div>
        </div>
        <p className="text-xs transition-colors" style={{ color: 'var(--text-muted)' }}>
          &copy; 2026 NEXON Korea Corporation. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div className="text-[13px] font-medium mb-3 transition-colors" style={{ color: 'var(--text-tertiary)' }}>{title}</div>
      {links.map((link) => (
        <a
          key={link}
          href="#"
          className="block text-[13px] no-underline mb-2 transition-colors"
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
        >
          {link}
        </a>
      ))}
    </div>
  );
}
