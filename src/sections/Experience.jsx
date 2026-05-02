import useReveal from '../hooks/useReveal'
import { experiences } from '../data/portfolioData'
import './Experience.css'

export default function Experience() {
  const [ref, visible] = useReveal()

  return (
    <section id="experience" className="experience">
      <div className={`experience-inner reveal ${visible ? 'visible' : ''}`} ref={ref}>
        <div className="exp-header">
          <p className="section-label">Experience</p>
          <h2 className="section-title">경력과 활동</h2>
        </div>
        <div className="exp-list">
          {experiences.map((exp, i) => (
            <div key={exp.id} className={`exp-item${exp.current ? ' is-current' : ''}`} style={{ transitionDelay: `${i * 0.09}s` }}>
              <div className="exp-meta">
                <p className="exp-period">{exp.period}</p>
              </div>
              <div className="exp-content">
                <div className="exp-title-row">
                  <h3 className="exp-company">{exp.company}</h3>
                  {exp.current && <span className="exp-badge current">재직중</span>}
                  {exp.award && <span className="exp-badge award">{exp.award}</span>}
                </div>
                {exp.department && <p className="exp-dept">{exp.department}</p>}
                <ul className="exp-tasks">
                  {exp.tasks.map((t, j) => <li key={`${exp.id}-${j}`}>{t}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
