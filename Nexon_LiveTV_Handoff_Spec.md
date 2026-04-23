# Handoff Spec: Nexon Live TV 메인페이지

## Overview

넥슨 게임의 라이브 방송, VOD, 스케줄을 통합 제공하는 스트리밍 플랫폼 메인페이지입니다. 다크 테마 기반 1440px 데스크톱 레이아웃이며, Nexon Basic 1.0v 디자인 시스템을 적용했습니다.

**Figma 파일:** [https://www.figma.com/design/Yub9CcIlP2WXggNZRhW4WH/Untitled?m=dev](https://www.figma.com/design/Yub9CcIlP2WXggNZRhW4WH/Untitled?m=dev)

---

## Layout

전체 페이지는 Vertical Auto Layout으로 구성되며, 콘텐츠 영역 좌우 패딩은 80px입니다.

| 속성 | 값 |
|------|------|
| 페이지 너비 | 1440px |
| 콘텐츠 너비 | 1280px (좌우 80px 패딩) |
| 배경색 | #111113 |
| 레이아웃 방향 | Vertical, Auto Height |
| 섹션 간격 | 0 (각 섹션 내부 패딩으로 관리) |

---

## Design Tokens Used

### Colors (Nexon Basic 1.0v 스타일 참조)

| Token | Hex | Usage |
|-------|-----|-------|
| Background Primary | #111113 | 페이지 배경 |
| Background Secondary | #141417 | 카테고리 섹션 배경 |
| Background Card | #1C1C21 | 스케줄 카드 배경 |
| Surface Border | #2E2E33 | 카드 보더, 구분선 |
| Text Primary | #FFFFFF | 제목, 로고, 활성 네비 |
| Text Secondary (BC100) | #E8EBF2 | 카드 타이틀 |
| Text Tertiary (BC600) | #8F96A3 | 네비게이션, 서브텍스트 |
| Text Muted (BC700) | #747A86 | 메타 정보, 날짜 |
| Accent Red (R300) | #D84141 | LIVE 뱃지, CTA 버튼 |
| Accent Blue (PC700) | #3D91FF | 유저 아바타, 예정 뱃지 |
| Accent Yellow (Y200) | #FFBB00 | 알림 설정 뱃지 |
| Point Color (PC500) | Nexon Basic 라이브러리 참조 | 포인트 컬러 |
| Basic Color (BC700) | Nexon Basic 라이브러리 참조 | 기본 텍스트 |

### Typography

| Token | Size / Weight | Usage |
|-------|---------------|-------|
| Logo | 20px / Bold | 헤더 로고 "NEXON Live TV" |
| Section Title | 22px / Bold | 섹션 제목 |
| Hero Title | 28px / Bold | 메인 스트림 타이틀 |
| Schedule Time | 24px / Bold | 스케줄 시간 |
| Card Title | 14px / Semi Bold | 라이브/스케줄 카드 제목 |
| VOD Title | 13px / Semi Bold | VOD 카드 제목 |
| Nav Item | 14px / Regular (활성: Semi Bold) | 상단 네비게이션 |
| Body Small | 12-13px / Regular | 부가 정보, 메타 텍스트 |
| Badge Text | 10-12px / Bold or Medium | LIVE, 시청자수, 필터칩 |

### Spacing

| Token | Value | Usage |
|-------|-------|-------|
| Page Padding | 80px | 좌우 여백 |
| Section Padding Top/Bottom | 48px | 섹션 상하 패딩 |
| Card Gap | 20px | 카드 간 수평 간격 |
| Card Inner Spacing | 10-14px | 카드 내부 요소 간격 |
| Header Padding | 16px top/bottom | 상단 헤더 |
| Category Gap | 32px | 게임 카테고리 아이콘 간격 |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| Hero Thumbnail | 16px | 히어로 비디오 영역 |
| Card Thumbnail | 10-12px | 라이브/VOD 카드 썸네일 |
| Schedule Card | 12px | 스케줄 카드 |
| Badge | 4-6px | LIVE 뱃지, 상태 뱃지 |
| Filter Chip | 20px (pill) | VOD 필터 탭 |
| Category Icon | 40px (원형) | 게임 카테고리 아이콘 |

---

## Components

### 1. Top Header Bar

| 속성 | 값 |
|------|------|
| 높이 | Auto (약 64px) |
| 레이아웃 | Horizontal, Space Between |
| 패딩 | 16px 80px |
| 배경 | #111113, opacity 95% |

**좌측:** 로고 + 네비게이션 (홈, 라이브, 스케줄, VOD, 클립), gap: 40px (로고-네비), 28px (네비 간)

**우측:** Search 아이콘 (24px) + Notification 아이콘 (24px) + User Avatar (32px), gap: 20px

### 2. Hero Section (Featured Live Stream)

| 속성 | 값 |
|------|------|
| 비디오 영역 높이 | 520px |
| 모서리 | 16px radius |
| 배경 | 썸네일 이미지 + 하단 그라디언트 오버레이 |
| 그라디언트 | linear-gradient(to bottom, transparent, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.85) 100%) |

**오버레이 콘텐츠 (하단 40px 패딩):**
- LIVE 뱃지 (빨간색 #E62626, 6px radius)
- 시청자 수 뱃지 (검정 60% opacity)
- 스트림 제목 (28px Bold, white)
- 스트리머 정보 (아바타 28px + 이름 14px Semi Bold + 게임명 14px Regular)
- CTA 버튼 행: "지금 시청하기" (빨간 배경) + "알림 설정" (투명 + 흰색 보더)

### 3. Live Now Cards (4열 그리드)

| 속성 | 값 |
|------|------|
| 썸네일 높이 | 170px |
| 카드 간격 | 20px |
| 카드 너비 | Fill (4등분) |

**카드 구조:** Thumbnail (LIVE + 시청자수 뱃지) → Avatar(36px) + Title(14px) + Streamer·Game(12px)

### 4. Game Categories (가로 스크롤 가능)

| 속성 | 값 |
|------|------|
| 아이콘 크기 | 80px 원형 |
| 아이콘 간격 | 32px |
| 라벨 | 12px Medium, #BFBFC4 |
| 섹션 배경 | #141417 |

### 5. Today's Schedule Cards (4열)

| 속성 | 값 |
|------|------|
| 카드 배경 | #1C1C21 |
| 보더 | 1px #2E2E33 |
| 카드 radius | 12px |
| 내부 패딩 | 20px |

**카드 구조:** 시간(24px Bold) → 구분선(1px) → 제목(14px) → 게임명(12px) → 상태 뱃지

### 6. Popular VOD Section

**필터 칩:**
- 활성: 흰색 배경, 다크 텍스트, 13px Semi Bold
- 비활성: #262629 배경, #B3B3B8 텍스트, 1px #38383D 보더
- Radius: 20px (pill)

**VOD 카드 (4열 x 2행):**
- 썸네일 160px, 10px radius
- Duration 뱃지 (우하단, 검정 75%, 4px radius)
- 제목 13px Semi Bold + 메타 11px Regular

### 7. Footer

| 속성 | 값 |
|------|------|
| 배경 | #0D0D0F |
| 패딩 | 40px 80px |

**구조:** 구분선(1px) → 좌측 회사정보 + 우측 링크 3열 (서비스/소셜/넥슨) → 저작권

---

## States and Interactions

| Element | State | Behavior |
|---------|-------|----------|
| Nav Item | Hover | 텍스트 #FFFFFF로 전환, 0.2s ease |
| Nav Item | Active | Semi Bold, #FFFFFF |
| Live Card | Hover | 썸네일 scale(1.02), 0.2s ease, 커서 pointer |
| VOD Card | Hover | 썸네일 brightness(1.1), 0.2s ease |
| CTA "지금 시청하기" | Hover | 배경 밝기 +10% (#FF2D2D) |
| CTA "지금 시청하기" | Active | 배경 밝기 -5% |
| CTA "알림 설정" | Hover | 배경 opacity 0.2로 증가 |
| Filter Chip | Hover | 비활성 상태에서 보더 #555로 밝아짐 |
| Filter Chip | Active/Selected | 흰색 배경 + 다크 텍스트 전환 |
| Schedule Card | Hover | 보더 색상 밝아짐 (#444) |
| Category Icon | Hover | scale(1.08), 0.3s ease |
| LIVE Badge | - | 2초 주기 pulse 애니메이션 (opacity 0.7 ↔ 1) |
| Hero Thumbnail | - | 16:9 비디오 재생 또는 정적 이미지 |

---

## Responsive Behavior

| Breakpoint | Changes |
|------------|---------|
| Desktop (>1280px) | 기본 레이아웃, 4열 카드 그리드 |
| Desktop (1024-1280px) | 좌우 패딩 40px로 축소, 카드 3열 |
| Tablet (768-1024px) | 카드 2열, 히어로 높이 400px, 카테고리 좌우 스크롤 |
| Mobile (<768px) | 카드 1열, 히어로 높이 240px, 네비 햄버거 메뉴로 전환, 패딩 16px |

---

## Edge Cases

- **라이브 없음 (Empty State):** 히어로 영역에 "현재 진행 중인 라이브가 없습니다" + 다음 스케줄 안내
- **긴 제목 (Truncation):** 카드 제목 2줄까지, 이후 말줄임(...). 최대 40자 권장
- **시청자 수 0:** "방송 준비 중" 텍스트로 대체
- **스케줄 없음:** "오늘 예정된 스케줄이 없습니다" + 지난 VOD 추천
- **이미지 로드 실패:** 게임별 기본 플레이스홀더 컬러 + 게임 로고
- **Loading State:** 카드 영역에 Skeleton UI (배경색 #1C1C21 → #252529 shimmer)
- **국제화:** 한국어 기본, 텍스트 길이 30% 증가 고려 (영어 전환 시)

---

## Animation / Motion

| Element | Trigger | Animation | Duration | Easing |
|---------|---------|-----------|----------|--------|
| 페이지 진입 | Load | 섹션별 fade-in + translateY(20px→0) | 400ms | ease-out |
| LIVE 뱃지 | 항상 | Opacity pulse (0.7 ↔ 1) | 2000ms | ease-in-out |
| 카드 Hover | mouseenter | scale(1.02) | 200ms | ease |
| 필터 전환 | Click | 배경색 crossfade | 150ms | ease |
| 히어로 전환 | Auto/Click | 슬라이드 + fade | 500ms | cubic-bezier(0.4, 0, 0.2, 1) |

---

## Accessibility Notes

- **포커스 순서:** Header → Hero CTA → Live Cards → Categories → Schedule → VOD Filters → VOD Cards → Footer
- **ARIA Labels:** 
  - LIVE 뱃지: `aria-label="실시간 방송 중"`
  - 시청자 수: `aria-label="현재 시청자 12,483명"`
  - 필터 칩: `role="tablist"`, 각 칩 `role="tab"`, `aria-selected`
  - 카드: `role="article"`, 썸네일에 `alt` 텍스트 필수
- **키보드 인터랙션:**
  - Tab: 모든 인터랙티브 요소 순회
  - Enter/Space: 카드 클릭, 필터 선택
  - Arrow Keys: 필터 칩 간 이동 (tablist 패턴)
- **스크린 리더:** 
  - 시청자 수 동적 업데이트: `aria-live="polite"`
  - 섹션 구분: `<section>` + `aria-labelledby`
- **색상 대비:** 모든 텍스트 WCAG AA 기준 충족 (최소 4.5:1)
- **모션 감소:** `prefers-reduced-motion` 미디어 쿼리로 pulse/hover 애니메이션 비활성화

---

## Implementation Notes

- **디자인 시스템:** Nexon Basic 1.0v 라이브러리의 Button, Header, Footer, Text Field, Search, Image 컴포넌트를 기반으로 확장
- **컬러 스타일:** Nexon Basic의 Point Color (PC300~PC900), Basic Color (BC100~BC800), Theme Color 시리즈 활용
- **아이콘:** Nexon Basic의 Search, Bookmark, Chevron-right, Settings, More-horizontal 아이콘 컴포넌트 사용
- **다크 테마 전용:** 현재 라이트 모드 미지원, 추후 테마 변수화 시 대응 가능
