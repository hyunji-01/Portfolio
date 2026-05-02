import './PureTicket.css'

export default function PureTicket() {
  return (
    <article className="pd pure-ticket">
      <div className="pd-hero">
        <p className="pd-num">Project 01</p>
        <h1 className="pd-title">Pure Ticket</h1>
        <p className="pd-subtitle">공정한 티켓 예매 환경을 목표로 한 웹 서비스</p>
        <div className="pd-tags">
          {['PHP', 'MySQL', 'Toss API', 'Naver CAPTCHA API'].map(t => (
            <span key={t} className="pd-tag">{t}</span>
          ))}
        </div>
        <div className="pd-achievements">
          <span>교내 SW 공모전 우수상</span>
          <span>ICT 공모전 본선 진출</span>
          <span>캡스톤디자인 A+</span>
        </div>
      </div>

      <div className="pd-body">
        <section className="pd-section">
          <h2>개요</h2>
          <p>
            매크로 예매로 인한 불공정 문제를 줄이기 위해 기획한 티켓 예매 프로젝트입니다.
            예매 과정에 CAPTCHA와 좌석 색상 랜덤화 흐름을 넣어 자동화된 접근을 어렵게 만드는 방향으로 설계했습니다.
          </p>
        </section>

        <section className="pd-section">
          <h2>주요 기능</h2>
          <div className="pd-features">
            <div className="pd-feature">
              <h3>CAPTCHA 인증</h3>
              <p>예매 진입 단계에서 Naver CAPTCHA API를 적용해 사람과 자동화 접근을 구분하도록 구성했습니다.</p>
            </div>
            <div className="pd-feature">
              <h3>좌석 색상 랜덤화</h3>
              <p>예매 창 진입 시 좌석 색상 구역을 변경해 이미지 인식 기반 매크로 접근을 방해하는 흐름을 설계했습니다.</p>
            </div>
            <div className="pd-feature">
              <h3>간편 결제</h3>
              <p>Toss API를 활용해 티켓 결제 화면과 결제 완료 흐름을 구현했습니다.</p>
            </div>
          </div>
        </section>

        <section className="pd-section">
          <h2>담당 역할</h2>
          <ul className="pd-list">
            <li>데이터베이스 테이블 구조 작성 및 설계</li>
            <li>메인, 공연 정보, 좌석 선택, 예매 창, 결제 완료 화면 디자인</li>
            <li>PHP 기반 화면 구현</li>
            <li>Toss 결제 API와 Naver CAPTCHA API를 활용한 예매 흐름 구현</li>
            <li>좌석 번호 관리와 티켓 예매 데이터 구조 설계</li>
          </ul>
        </section>

        <section className="pd-section">
          <h2>배운 점</h2>
          <ul className="pd-list learned">
            <li>보안 기능은 화면 마지막에 붙이는 요소가 아니라 서비스 흐름 안에서 설계해야 한다는 점을 배웠습니다.</li>
            <li>API 연동, 결제 흐름, DB 설계가 한 화면 안에서 연결될 때 예외 상황을 먼저 정리하는 습관이 생겼습니다.</li>
            <li>공모전 제출을 위해 기능 의도와 구현 과정을 문서로 설명하는 경험을 쌓았습니다.</li>
          </ul>
        </section>
      </div>
    </article>
  )
}
