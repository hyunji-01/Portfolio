import './Gachwitgayop.css'

export default function Gachwitgayop() {
  return (
    <article className="pd gachwitgayop">
      <div className="pd-hero">
        <p className="pd-num">Project 06</p>
        <h1 className="pd-title">가취가욥</h1>
        <p className="pd-subtitle">여행 계획을 빠르게 정리하는 앱 UI/UX 기획</p>
        <div className="pd-tags">
          {['Adobe XD', 'UI Design', 'Prototyping', 'SWOT 분석'].map(t => (
            <span key={t} className="pd-tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="pd-body">
        <section className="pd-section">
          <h2>개요</h2>
          <p>
            여행지를 고르고 경비를 계산하는 과정을 간단하게 만들기 위해 기획한 앱 UI/UX 프로젝트입니다.
            MBTI 기반 추천, 예상 경비 계산, 교통수단 안내를 중심 기능으로 설정했습니다.
          </p>
        </section>

        <section className="pd-section">
          <h2>주요 기능</h2>
          <div className="pd-features">
            <div className="pd-feature">
              <h3>교통수단 추천</h3>
              <p>출발지와 목적지를 입력하면 적절한 이동 수단과 계획을 확인하는 흐름을 설계했습니다.</p>
            </div>
            <div className="pd-feature">
              <h3>예상 경비 계산</h3>
              <p>가격대와 사용 항목을 선택해 입장료와 이용 요금을 계산하는 화면을 구성했습니다.</p>
            </div>
            <div className="pd-feature">
              <h3>MBTI별 여행 플랜</h3>
              <p>사용자의 성향에 맞는 여행 톤과 장소를 추천하는 콘셉트를 잡았습니다.</p>
            </div>
          </div>
        </section>

        <section className="pd-section">
          <h2>담당 역할</h2>
          <ul className="pd-list">
            <li>SWOT 분석</li>
            <li>경쟁사 조사와 사용자 관점 분석</li>
            <li>타깃 설정과 페르소나 정리</li>
            <li>디자인 콘셉트와 스토리보드 작성</li>
            <li>Adobe XD 프로토타입 연결</li>
          </ul>
        </section>

        <section className="pd-section">
          <h2>배운 점</h2>
          <ul className="pd-list learned">
            <li>추천 서비스는 사용자가 입력해야 하는 정보가 많아지지 않도록 화면 단계를 조절해야 했습니다.</li>
            <li>Adobe XD로 화면을 연결하면서 실제 사용 흐름처럼 검토하는 방법을 익혔습니다.</li>
          </ul>
        </section>
      </div>
    </article>
  )
}
