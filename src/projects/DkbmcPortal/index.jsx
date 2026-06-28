import './DkbmcPortal.css'

const SECTIONS = [
  {
    id: '기획',
    summary: '교촌 F&B 가맹점주들의 분산된 업무 프로세스를 하나의 디지털 포탈로 통합하기 위한 요구사항 분석 및 기능 정의를 수행했습니다.',
    items: [
      { icon: '📋', title: '배경 및 목적', desc: '기존 오프라인·다채널로 처리되던 가맹점 업무(공지 확인, 교육 신청, AS 접수, 계약 관리)를 단일 포탈로 통합. 업무 효율화 및 데이터 일원화가 목표.' },
      { icon: '👤', title: '사용자 분석', desc: '타겟 유저: 교촌 가맹점주(사장님). 주요 페인포인트: 공지 누락, 교육 신청 번거로움, AS 처리 현황 불투명. 모바일 접근성 중요.' },
      { icon: '📐', title: '기능 정의', desc: '공지사항 / 교육 수강·이력 / AS·VOC 접수 / 계약서 열람 / 마일리지 정산 / 체크리스트 / 커뮤니티 게시판' },
      { icon: '🗺️', title: '정보 구조 (IA)', desc: '홈 대시보드를 허브로 각 기능 모듈이 독립 페이지로 분리. 목록 → 상세 → 작성/수정 3단계 구조 표준화.' },
    ],
  },
  {
    id: '디자인',
    summary: '브랜드 일관성과 확장성을 위해 디자인 시스템을 직접 설계·구축했습니다. CSS 변수 기반 토큰 체계부터 공통 컴포넌트 패턴까지 전부 정의했습니다.',
    items: [
      { icon: '🎨', title: '디자인 시스템 구축', desc: 'CSS 변수로 Color / Spacing / Typography / Shadow / Border-radius 토큰 정의. 하드코딩 값 완전 배제, 변수 기반 관리.' },
      { icon: '🟡', title: '브랜드 컬러 시스템', desc: 'Primary #F9BA15 (교촌 노랑) / Secondary #000000 / Error #EF4444 / Success #3CBB6B. 버튼 4 variants (Primary · Secondary · Outline · Danger) 정의.' },
      { icon: '🧩', title: '공통 컴포넌트', desc: '커스텀 드롭다운 (SLDS 대체) / 파일 업로드 필드 / 확인 모달 / 브레드크럼 / 페이지네이션 — 재사용 가능한 단위로 분리 설계.' },
      { icon: '📱', title: '반응형 전략', desc: 'Desktop-first 방식. 8개 Breakpoint (1440 / 1200 / 1024 / 768 / 600 / 480 / 375 / 320px). POS 디스플레이(1024×768) 최적화 포함.' },
    ],
    palette: [
      { name: 'Primary', hex: '#F9BA15', token: '--kc-color-primary', desc: '교촌 노랑, 주요 액션' },
      { name: 'Secondary', hex: '#000000', token: '--kc-color-secondary', desc: '블랙, 강조 텍스트' },
      { name: 'Success', hex: '#3CBB6B', token: '--kc-color-success', desc: '완료/성공 상태' },
      { name: 'Error', hex: '#EF4444', token: '--kc-color-error', desc: '에러/실패 상태' },
      { name: 'Info', hex: '#4A90D9', token: '--kc-color-info', desc: '정보/진행중' },
      { name: 'BG Page', hex: '#F9FAFB', token: '--kc-color-bg-page', desc: '페이지 배경' },
    ],
    buttons: [
      { label: '저장', variant: 'primary' },
      { label: '취소', variant: 'secondary' },
      { label: '확인', variant: 'outline' },
      { label: '삭제', variant: 'danger' },
    ],
  },
  {
    id: '설계',
    summary: 'Salesforce Experience Cloud 환경 특성에 맞춰 레이어드 아키텍처를 설계했습니다. 공통 컴포넌트는 독립 모듈로 분리하여 재사용성을 극대화했습니다.',
    items: [
      { icon: '🏗️', title: '아키텍처', desc: 'LWC (View) → Apex Controller (Business Logic) → SOQL/DML (Data) 3-tier 구조. Controller는 cacheable 여부로 Read/Write 역할 분리.' },
      { icon: '⚡', title: 'Governor Limits 설계', desc: 'SOQL/DML을 루프 밖으로 분리, Map<Id, SObject> 패턴으로 벌크 처리 표준화. 10,000건 DML 제한 대비 설계.' },
      { icon: '🔄', title: '배포 프로세스', desc: 'Safe Deploy 설계 — 배포 전 원격 코드 Retrieve → diff 비교 → 충돌 감지 → Merge/Force/Cancel 선택.' },
      { icon: '📁', title: '파일 관리 설계', desc: 'ContentVersion + ContentDocumentLink 패턴. DocTaskType__c 피클리스트로 썸네일/첨부파일 역할 분리. 오브젝트별 연결 구조 설계.' },
    ],
    arch: [
      { layer: 'View', color: '#F9BA15', items: ['LWC Components', 'Custom Design System', 'Reusable UI Modules'] },
      { layer: 'Controller', color: '#4A90D9', items: ['Apex @AuraEnabled', 'Business Logic', 'Error Handling'] },
      { layer: 'Data', color: '#3CBB6B', items: ['SOQL Queries', 'DML Operations', 'Custom Objects'] },
    ],
  },
  {
    id: '구현',
    summary: '13주+ 동안 30개 이상의 주요 화면을 단독 구현했습니다. D3.js 지도 시각화부터 Masonry 레이아웃, Shadow DOM 스타일 관통 주입까지 다양한 기술 문제를 직접 해결했습니다.',
    stats: [
      { num: '30+', label: '구현 화면' },
      { num: '136개', label: 'LWC 컴포넌트' },
      { num: '13주+', label: '개발 기간' },
    ],
    items: [
      { icon: '🗺️', title: 'D3.js 한국 지도 시각화', desc: '백수클럽 대시보드에 D3.js v3 + GeoJSON으로 17개 시/도 지도 구현. LWC Shadow DOM에서 lwc:dom="manual"로 외부 라이브러리 DOM 조작 허용. Mercator 투영법 좌표 수동 조정 및 카운트업 애니메이션(requestAnimationFrame + easeOutExpo) 적용.' },
      { icon: '📋', title: '공통 테이블 리스트 엔진', desc: 'kcDeCommonList — PRESET 객체 하나로 공지·장터·경조사·VOC·교육이력 등 20종 이상 페이지를 단일 컴포넌트로 처리. COLUMN_TYPE_MAP 30개 이상 컬럼 타입 자동 매핑, 피드/테이블 뷰 토글 구현.' },
      { icon: '🧭', title: '브레드크럼 내비게이션', desc: 'NavigationMixin 직접 호출 시 fromPage 컨텍스트 소실 문제 해결. LWC Shadow DOM 프록시 객체 이슈 → pathnavigate 커스텀 이벤트로 부모에 Navigate 위임.' },
      { icon: '🔽', title: '커스텀 드롭다운 시스템', desc: 'SLDS lightning-combobox의 디자인 한계 극복. stopPropagation + document click 패턴으로 외부 클릭 닫기 구현. 검색 바·폼·필터 3종 variant 설계.' },
      { icon: '🎭', title: 'Shadow DOM 스타일 오버라이드', desc: 'document.body 전역 <style> 주입으로 lightning-input/textarea 폰트 크기 제어. CSS 변수가 미치지 못하는 깊은 Shadow DOM에 !important 선택적 적용.' },
      { icon: '🖼️', title: 'Masonry 레이아웃 & 파일 업로드', desc: 'CSS Columns의 세로 채움 순서 문제를 JS Masonry 알고리즘으로 해결. 드래그앤드롭 파일 업로드 — 썸네일 프리뷰, ContentVersion/DocTaskType__c 연동까지 단독 구현.' },
    ],
    screens: [
      '교육 홈 & 강좌 목록', '강좌 상세 & 수강 신청',
      '시험 응시 (5-View)', '공지 & 게시판 목록',
      'AS 접수 & VOC', '백수클럽 대시보드',
      '장터 & 사진 게시판', '모바일 반응형',
    ],
  },
]

export default function DkbmcPortal() {
  return (
    <article className="kc-page">
      {SECTIONS.map(sec => (
        <div key={sec.id} className="kc-block">

          {/* 섹션 헤딩 */}
          <h3 className="kc-block__heading">{sec.id}</h3>

          {/* 요약 배너 */}
          <div className="kc-summary-bar">
            <div className="kc-summary-bar__accent" />
            <p className="kc-summary-bar__text">{sec.summary}</p>
          </div>

          {/* 구현 탭: 수치 */}
          {sec.stats && (
            <div className="kc-stats-row">
              {sec.stats.map(s => (
                <div key={s.label} className="kc-stat-box">
                  <span className="kc-stat-box__num">{s.num}</span>
                  <span className="kc-stat-box__label">{s.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* 아이템 카드 그리드 */}
          <div className="kc-card-grid">
            {sec.items.map(item => (
              <div key={item.title} className="kc-card">
                <div className="kc-card__icon">{item.icon}</div>
                <h4 className="kc-card__title">{item.title}</h4>
                <p className="kc-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* 디자인: 컬러 팔레트 */}
          {sec.palette && (
            <div className="kc-section">
              <h4 className="kc-section__title">Color Tokens</h4>
              <div className="kc-palette">
                {sec.palette.map(c => (
                  <div key={c.hex} className="kc-swatch">
                    <div className="kc-swatch__color" style={{ background: c.hex }} />
                    <div className="kc-swatch__info">
                      <span className="kc-swatch__name">{c.name}</span>
                      <code className="kc-swatch__token">{c.token}</code>
                      <span className="kc-swatch__hex">{c.hex}</span>
                      <span className="kc-swatch__desc">{c.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 디자인: 버튼 시스템 */}
          {sec.buttons && (
            <div className="kc-section">
              <h4 className="kc-section__title">Button Variants</h4>
              <div className="kc-btn-row">
                {sec.buttons.map(b => (
                  <button key={b.label} className={`kc-btn kc-btn--${b.variant}`}>{b.label}</button>
                ))}
              </div>
            </div>
          )}

          {/* 설계: 아키텍처 */}
          {sec.arch && (
            <div className="kc-section">
              <h4 className="kc-section__title">Architecture Layers</h4>
              <div className="kc-arch">
                {sec.arch.map(layer => (
                  <div key={layer.layer} className="kc-arch__layer" style={{ '--layer-color': layer.color }}>
                    <div className="kc-arch__label">{layer.layer}</div>
                    <div className="kc-arch__chips">
                      {layer.items.map(item => (
                        <span key={item} className="kc-arch__chip">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 구현: 화면 목록 */}
          {sec.screens && (
            <div className="kc-section">
              <h4 className="kc-section__title">구현 화면 목록</h4>
              <div className="kc-screens">
                {sec.screens.map(label => (
                  <div key={label} className="kc-screen">
                    <div className="kc-screen__thumb">
                      <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                        <rect x="2" y="6" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="10" cy="14" r="3" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M2 22l8-6 6 5 5-4 9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>준비 중</span>
                    </div>
                    <p className="kc-screen__label">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      ))}
    </article>
  )
}
