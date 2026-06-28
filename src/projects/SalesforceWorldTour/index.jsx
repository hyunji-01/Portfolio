import './SalesforceWorldTour.css'

export default function SalesforceWorldTour() {
  return (
    <article className="pd salesforce-world-tour">
      <div className="pd-hero">
        <p className="pd-num">Project 02</p>
        <h1 className="pd-title">Salesforce World Tour</h1>
        <p className="pd-subtitle">Agentforce 데모 제작 및 O2O 행사 운영</p>
        <div className="pd-tags">
          {['Salesforce', 'Agentforce', 'O2O', 'Live Demo'].map(t => (
            <span key={t} className="pd-tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="pd-body">
        <section className="pd-section">
          <h2>개요</h2>
          <p>
            국내 최대 규모 Salesforce 행사인 World Tour에서 Agentforce 교육 플랫폼 데모 제작부터 현장 기술 시연,
            온·오프라인 연계(O2O) 시스템 빌드업까지 담당한 행사 운영 프로젝트입니다.
            화면을 만드는 데 그치지 않고, 행사 현장에서 실제로 작동하는 데모와 방문객 경험까지 함께 설계했습니다.
          </p>
        </section>

        <section className="pd-section">
          <h2>수행 업무</h2>
          <div className="pd-features">
            <div className="pd-feature">
              <h3>Agentforce 데모 제작</h3>
              <p>행사장에서 시연할 Agentforce 교육 플랫폼 데모를 기획·제작해 글로벌 고객에게 실제 기능을 보여줄 수 있도록 준비했습니다.</p>
            </div>
            <div className="pd-feature">
              <h3>O2O 시스템 빌드업</h3>
              <p>온라인 사전 신청과 오프라인 현장 경험을 연결하는 O2O 시스템을 기술 시연 준비 과정에서 함께 구축했습니다.</p>
            </div>
            <div className="pd-feature">
              <h3>현장 기술 시연</h3>
              <p>행사 당일 글로벌 고객을 대상으로 Agentforce 데모를 직접 시연하며 기술적인 질문에 대응했습니다.</p>
            </div>
            <div className="pd-feature">
              <h3>오프라인 유저 여정 가이드</h3>
              <p>현장 O2O 스태프로 운영에 참여해 방문객의 부스 이동과 체험 흐름을 안내했습니다.</p>
            </div>
          </div>
        </section>

        <section className="pd-section">
          <h2>담당 역할</h2>
          <ul className="pd-list">
            <li>Salesforce World Tour 행사 데모 제작</li>
            <li>기술 시연 준비 및 진행</li>
            <li>온·오프라인 연계(O2O) 시스템 빌드업</li>
            <li>현장 O2O 스태프 운영</li>
            <li>글로벌 고객 대상 기술 시연</li>
            <li>오프라인 유저 여정 가이드</li>
          </ul>
        </section>

        <section className="pd-section">
          <h2>배운 점</h2>
          <ul className="pd-list learned">
            <li>데모는 화면을 만드는 것으로 끝나지 않고, 현장에서 바로 작동해야 한다는 책임감을 배웠습니다.</li>
            <li>글로벌 고객에게 기술을 설명하면서, 기능보다 사용자가 얻는 가치를 먼저 전달하는 법을 익혔습니다.</li>
            <li>온라인과 오프라인을 잇는 O2O 흐름은 화면 설계만큼 현장 운영의 디테일이 중요하다는 걸 체감했습니다.</li>
          </ul>
        </section>
      </div>
    </article>
  )
}
