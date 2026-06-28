import './GongchaRedesign.css'

export default function GongchaRedesign() {
  return (
    <article className="pd gongcha">
      <div className="pd-hero">
        <p className="pd-num">Project 07</p>
        <h1 className="pd-title">공차 리디자인</h1>
        <p className="pd-subtitle">더블 다이아몬드 프로세스를 적용한 UI/UX 리디자인</p>
        <div className="pd-tags">
          {['Figma', 'UX Research', 'Double Diamond', 'Prototyping'].map(t => (
            <span key={t} className="pd-tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="pd-body">
        <section className="pd-section">
          <h2>개요</h2>
          <p>
            공차 서비스 화면을 대상으로 사용자가 메뉴 탐색과 주문 정보를 더 쉽게 이해할 수 있도록 리디자인한 프로젝트입니다.
            문제 발견, 정의, 아이디어 확장, 설계의 흐름으로 Figma 프로토타입을 제작했습니다.
          </p>
        </section>

        <section className="pd-section">
          <h2>기획 프로세스</h2>
          <div className="pd-features">
            {[
              { step: '01', title: '문제 발견', desc: '정성 리서치와 데스크 리서치를 통해 사용자가 불편을 느끼는 지점을 정리했습니다.' },
              { step: '02', title: '문제 정의', desc: 'AS-IS와 TO-BE를 비교해 개선해야 할 정보 구조와 화면 흐름을 정리했습니다.' },
              { step: '03', title: '페르소나', desc: '주문 전 탐색이 필요한 사용자 관점으로 주요 시나리오를 세웠습니다.' },
              { step: '04', title: '설계', desc: 'IA, 사용자 플로우, 스케치, Figma 실행 화면을 순서대로 제작했습니다.' },
            ].map(item => (
              <div key={item.step} className="pd-feature">
                <h3>{item.step} / {item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pd-section">
          <h2>담당 역할</h2>
          <ul className="pd-list">
            <li>UX 리서치 자료 정리</li>
            <li>AS-IS / TO-BE 분석</li>
            <li>정보 구조와 사용자 흐름 설계</li>
            <li>Figma 기반 화면 리디자인</li>
            <li>프로토타입 연결 및 발표 자료 정리</li>
          </ul>
        </section>
      </div>
    </article>
  )
}
