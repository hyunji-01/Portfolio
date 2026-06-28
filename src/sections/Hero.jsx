import { profile } from '../data/portfolioData'
import './Hero.css'

const heroRoles = ['Frontend Developer', 'UI·UX Designer', 'Service Planner']

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-inner">

        <p className="hero-eyebrow">
          {heroRoles.map((role, i) => (
            <span key={role}>
              {i > 0 && <span className="eyebrow-sep">/</span>}
              {role}
            </span>
          ))}
        </p>

        <h1 className="hero-name">{profile.name}</h1>

        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">프로젝트 보기</a>
          <a href={`mailto:${profile.email}`} className="btn-secondary">연락하기</a>
        </div>

      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span className="scroll-line" />
        <span className="scroll-label">SCROLL</span>
      </div>
    </section>
  )
}
