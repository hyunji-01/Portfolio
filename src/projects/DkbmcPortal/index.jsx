import './DkbmcPortal.css'

export default function DkbmcPortal() {
  return (
    <article className="pd dkbmc">
      <div className="pd-hero">
        <p className="pd-num">Project 07</p>
        <h1 className="pd-title">DKBMC 포털</h1>
        <p className="pd-subtitle">Salesforce 기반 B2B 업무 포털 실무 프로젝트</p>
        <div className="pd-tags">
          {['Salesforce', 'LWC', 'Apex', 'Figma', 'D3.js', 'CSS'].map(t => (
            <span key={t} className="pd-tag">{t}</span>
          ))}
        </div>
        <div className="pd-achievements">
          <span>136개 LWC 컴포넌트</span>
          <span>30+ 화면 구현</span>
          <span>13주 개발 기간</span>
        </div>
      </div>

      <div className="pd-body">
        <section className="pd-section">
          <h2>개요</h2>
          <p>
            DKBMC 재직 중 참여한 Salesforce Experience Cloud 기반 B2B 업무 포털 프로젝트입니다.
            점주가 매장 운영에 필요한 정보와 업무를 한 곳에서 확인하고 처리할 수 있도록 교육, 공지, 매장 현황, VOC,
            마이페이지 등 주요 화면을 설계하고 구현했습니다.
          </p>
        </section>

        <section className="pd-section">
          <h2>담당 역할</h2>
          <div className="pd-features">
            <div className="pd-feature">
              <h3>UI/UX 디자인</h3>
              <p>Figma 기반 전체 화면 구조와 디자인 시스템을 정리하고, 토큰과 공통 컴포넌트 패턴을 정의했습니다.</p>
            </div>
            <div className="pd-feature">
              <h3>프론트엔드</h3>
              <p>LWC로 화면 컴포넌트를 구현하고, 반복되는 UI를 공통화해 유지보수성을 높이는 방향으로 작업했습니다.</p>
            </div>
            <div className="pd-feature">
              <h3>백엔드 연동</h3>
              <p>Apex 기반 비즈니스 로직과 데이터 연동 흐름을 일부 구현하고 Salesforce 데이터 구조에 맞춰 화면을 연결했습니다.</p>
            </div>
            <div className="pd-feature">
              <h3>문서화</h3>
              <p>디자인 가이드라인과 UI 사용 규칙을 문서화해 협업자가 같은 기준으로 화면을 만들 수 있도록 정리했습니다.</p>
            </div>
          </div>
        </section>

        <section className="pd-section">
          <h2>구현 내용</h2>
          <ul className="pd-list learned">
            <li><strong>D3.js 지도 시각화</strong> 전국 지점 데이터를 시각적으로 확인할 수 있는 화면을 구현했습니다.</li>
            <li><strong>공통 테이블 컴포넌트</strong> 여러 화면에서 재사용 가능한 리스트 구조를 정리했습니다.</li>
            <li><strong>커스텀 셀렉트</strong> 기본 컴포넌트 제약을 보완해 포털 UI에 맞는 선택 인터랙션을 구현했습니다.</li>
            <li><strong>Shadow DOM 스타일 조정</strong> Lightning 컴포넌트의 스타일 제약을 고려해 필요한 영역을 제어했습니다.</li>
            <li><strong>반응형 대응</strong> 데스크톱과 POS 환경을 고려해 화면 폭에 따른 배치를 조정했습니다.</li>
          </ul>
        </section>

        <section className="pd-section">
          <h2>디자인 시스템</h2>
          <div className="pd-features">
            <div className="pd-feature">
              <h3>브랜드 컬러</h3>
              <p>Primary #F9BA15를 중심으로 버튼, 상태, 강조 색상을 정의했습니다.</p>
            </div>
            <div className="pd-feature">
              <h3>토큰 체계</h3>
              <p>Color, Spacing, Typography, Shadow, Border-radius를 변수화해 화면 간 일관성을 맞췄습니다.</p>
            </div>
            <div className="pd-feature">
              <h3>컴포넌트 규칙</h3>
              <p>버튼, 테이블, 필터, 폼 요소 등 반복 UI의 사용 기준을 정리했습니다.</p>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}
