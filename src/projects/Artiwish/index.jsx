import './Artiwish.css'

export default function Artiwish() {
  return (
    <article className="pd artiwish">
      <div className="pd-hero">
        <p className="pd-num">Project 04</p>
        <h1 className="pd-title">ARTIWISH</h1>
        <p className="pd-subtitle">아티스트와 팬을 연결하는 전시 후원 플랫폼 기획</p>
        <div className="pd-tags">
          {['Figma', 'UI/UX Design', 'Service Planning', 'Prototyping'].map(t => (
            <span key={t} className="pd-tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="pd-body">
        <section className="pd-section">
          <h2>개요</h2>
          <p>
            아티스트가 전시를 열기 전 후원을 모집하고, 팬이 전시 제작 과정에 참여할 수 있도록 기획한 UI/UX 프로젝트입니다.
            서비스 콘셉트 정리부터 정보 구조, 주요 화면, Figma 프로토타입 제작까지 진행했습니다.
          </p>
        </section>

        <section className="pd-section">
          <h2>주요 기능</h2>
          <div className="pd-features">
            <div className="pd-feature">
              <h3>전시 리스팅</h3>
              <p>아티스트가 전시 정보를 등록하고 팬이 참여 여부를 판단할 수 있도록 목록 구조를 설계했습니다.</p>
            </div>
            <div className="pd-feature">
              <h3>후원 흐름</h3>
              <p>목표 금액, 후원 현황, 참여 액션이 자연스럽게 이어지는 화면 흐름을 구성했습니다.</p>
            </div>
            <div className="pd-feature">
              <h3>아티스트 프로필</h3>
              <p>작업 정보, 후원 이력, 팬과의 소통 영역을 포함한 프로필 화면을 설계했습니다.</p>
            </div>
          </div>
        </section>

        <section className="pd-section">
          <h2>기획 프로세스</h2>
          <div className="pd-features">
            {[
              { step: '01', title: '사용자 조사', desc: '예술가와 문화 참여자의 니즈를 파악하기 위한 리서치를 진행했습니다.' },
              { step: '02', title: '페르소나 설정', desc: '전시를 만들고 싶은 아티스트와 후원에 참여하는 팬의 사용 맥락을 나눠 정리했습니다.' },
              { step: '03', title: '서비스 구조 설계', desc: 'IA와 사용자 흐름을 정리해 핵심 기능의 우선순위를 잡았습니다.' },
              { step: '04', title: 'Figma 프로토타입', desc: '와이어프레임에서 시각 디자인과 인터랙션 프로토타입까지 제작했습니다.' },
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
            <li>서비스 콘셉트 기획 및 핵심 가치 정의</li>
            <li>사용자 리서치와 페르소나 설정</li>
            <li>정보 구조와 사용자 흐름 설계</li>
            <li>Figma 기반 전체 화면 UI 디자인</li>
            <li>인터랙티브 프로토타입 제작</li>
          </ul>
        </section>
      </div>
    </article>
  )
}
