import useReveal from '../hooks/useReveal'
import { about, profile, projects, experiences, stacks } from '../data/portfolioData'
import './About.css'

const stats = [
  { label: 'Projects', value: projects.length },
  { label: 'Stack', value: Object.values(stacks).flat().length },
  { label: 'Experience & Activities', value: experiences.length },
  { label: 'Awards', value: experiences.filter(e => e.award).length },
]

export default function About() {
  const [ref, visible] = useReveal()

  return (
    <section id="about" className="about">
      <div className={`about-inner reveal ${visible ? 'visible' : ''}`} ref={ref}>
        <div className="about-header">
          <p className="section-label">About</p>
          <h2 className="section-title">기획과 구현 사이를 잇습니다</h2>
        </div>
        <div className="about-stats">
          {stats.map((s, i) => (
            <div key={s.label} className="about-stat" style={{ transitionDelay: `${i * 0.07}s` }}>
              <span className="about-stat-value">{s.value}</span>
              <span className="about-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="about-body">
          <ul className="about-list">
            {about.map((item, i) => (
              <li
                key={item.text}
                className={`about-item ${item.highlight ? 'highlight' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span className="about-bullet" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <div className="about-contact-card">
            <p className="about-contact-label">Contact</p>
            <a href={`mailto:${profile.email}`} className="about-contact-line">{profile.email}</a>
            <span className="about-contact-line">{profile.phone}</span>
            <span className="about-contact-line">{profile.address}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
