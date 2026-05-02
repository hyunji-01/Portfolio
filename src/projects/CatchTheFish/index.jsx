import './CatchTheFish.css'

export default function CatchTheFish() {
  return (
    <article className="pd catch-the-fish">
      <div className="pd-hero">
        <p className="pd-num">Project 02</p>
        <h1 className="pd-title">Catch The Fish</h1>
        <p className="pd-subtitle">직접 그린 픽셀 아트 기반 2D 낚시 게임</p>
        <div className="pd-tags">
          {['Python', 'Pygame', 'Pixel Art'].map(t => (
            <span key={t} className="pd-tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="pd-body">
        <section className="pd-section">
          <h2>개요</h2>
          <p>
            고전 낚시 게임을 모티브로 만든 Pygame 기반 2D 게임입니다.
            플레이어가 캐릭터를 선택하고 제한 시간 안에 물고기를 낚으며 레벨을 올리는 구조로 제작했습니다.
          </p>
        </section>

        <section className="pd-section">
          <h2>주요 기능</h2>
          <div className="pd-features">
            <div className="pd-feature">
              <h3>픽셀 그래픽</h3>
              <p>배경, 고양이 캐릭터, 물고기 그래픽을 직접 제작해 게임의 톤을 통일했습니다.</p>
            </div>
            <div className="pd-feature">
              <h3>캐릭터 선택</h3>
              <p>여러 캐릭터 중 하나를 선택해 플레이할 수 있는 시작 화면을 구성했습니다.</p>
            </div>
            <div className="pd-feature">
              <h3>레벨과 아이템</h3>
              <p>물고기 획득 수에 따라 레벨이 오르고, 특정 레벨부터 아이템이 등장하도록 구현했습니다.</p>
            </div>
            <div className="pd-feature">
              <h3>레트로 사운드</h3>
              <p>게임 분위기에 맞는 사운드를 선정해 조작과 결과 피드백을 보강했습니다.</p>
            </div>
          </div>
        </section>

        <section className="pd-section">
          <h2>담당 역할</h2>
          <ul className="pd-list">
            <li>Pygame 기반 게임 구조 설계 및 구현</li>
            <li>게임 설명 화면과 플레이 화면 디자인</li>
            <li>물고기와 캐릭터 그래픽 제작</li>
            <li>레벨 시스템과 난이도 조정</li>
            <li>사운드 효과 선정 및 적용</li>
          </ul>
        </section>

        <section className="pd-section">
          <h2>배운 점</h2>
          <ul className="pd-list learned">
            <li>게임은 기능 구현만큼 조작감과 피드백 타이밍이 중요하다는 점을 체감했습니다.</li>
            <li>프레임, 생성 주기, 충돌 판정을 직접 다루며 이벤트 기반 구현에 익숙해졌습니다.</li>
            <li>작은 그래픽 자산도 전체 콘셉트에 맞춰 관리해야 완성도가 올라간다는 것을 배웠습니다.</li>
          </ul>
        </section>
      </div>
    </article>
  )
}
