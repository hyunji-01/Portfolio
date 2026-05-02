import './Jikpick.css'

export default function Jikpick() {
  return (
    <article className="pd jikpick">
      <div className="pd-hero">
        <p className="pd-num">Project 03</p>
        <h1 className="pd-title">JIKPICK</h1>
        <p className="pd-subtitle">직접 픽업을 중심으로 설계한 중고거래 플랫폼</p>
        <div className="pd-tags">
          {['React', 'Spring Boot', 'MySQL', 'Kakao Map API'].map(t => (
            <span key={t} className="pd-tag">{t}</span>
          ))}
        </div>
        <div className="pd-achievements">
          <span>예정 기한 내 마감</span>
          <span>Git 협업 규칙 정립</span>
        </div>
      </div>

      <div className="pd-body">
        <section className="pd-section">
          <h2>개요</h2>
          <p>
            중고거래에서 발생하는 비대면 거래 불안과 위치 조율 문제를 줄이기 위해 만든 웹 프로젝트입니다.
            사용자가 반경 3km 이내의 거래 지점을 추천받고, 상품 등록부터 검색과 마이페이지까지 사용할 수 있도록 설계했습니다.
          </p>
        </section>

        <section className="pd-section">
          <h2>주요 기능</h2>
          <div className="pd-features">
            <div className="pd-feature">
              <h3>위치 기반 지점 추천</h3>
              <p>Kakao Map API를 활용해 사용자의 위치 주변 거래 장소를 탐색하는 흐름을 구현했습니다.</p>
            </div>
            <div className="pd-feature">
              <h3>상품 CRUD</h3>
              <p>상품 등록, 검색, 카테고리, 마이페이지 등 중고거래에 필요한 기본 기능을 구성했습니다.</p>
            </div>
            <div className="pd-feature">
              <h3>팀 협업 체계</h3>
              <p>Git 브랜치 전략과 커밋 메시지 규칙을 정리해 팀 작업 충돌을 줄이도록 했습니다.</p>
            </div>
          </div>
        </section>

        <section className="pd-section">
          <h2>담당 역할</h2>
          <ul className="pd-list">
            <li>Git 브랜치 전략 수립 및 커밋 메시지 규칙 제안</li>
            <li>일정 조율과 역할 분배 참여</li>
            <li>UI 구성 작성 및 화면 구조 통일</li>
            <li>Kakao Map API를 활용한 직거래 지점 기능 구현</li>
            <li>데이터베이스 테이블 구조 작성과 설계</li>
            <li>상품 등록, 검색, 카테고리, 마이페이지 관련 CRUD 구현</li>
          </ul>
        </section>

        <section className="pd-section">
          <h2>배운 점</h2>
          <ul className="pd-list learned">
            <li>팀 프로젝트에서는 기능 구현만큼 작업 규칙과 일정 공유가 중요하다는 점을 배웠습니다.</li>
            <li>지도 API처럼 외부 서비스와 연결되는 기능은 예외 상황과 권한 흐름을 함께 고려해야 했습니다.</li>
            <li>공통 레이아웃과 UI 기준을 먼저 맞추면 이후 화면 추가와 수정이 훨씬 수월해졌습니다.</li>
          </ul>
        </section>
      </div>
    </article>
  )
}
