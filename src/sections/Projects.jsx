import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import { projects } from '../data/portfolioData'
import './Projects.css'

export default function Projects() {
  const [ref, visible] = useReveal()

  return (
    <section id="projects" className="projects">
      <div className={`projects-inner reveal ${visible ? 'visible' : ''}`} ref={ref}>
        <p className="section-label">Projects</p>
        <h2 className="section-title">실제로 만든 궤적</h2>
        <div className="projects-list">
          {projects.map((p, i) => (
            <Link
              key={p.id}
              to={`/project/${p.id}`}
              className="project-card"
              style={{ '--accent': p.color, transitionDelay: `${i * 0.07}s` }}
            >
              <div className="pc-inner">
                <span className="pc-num">{p.num}</span>
                <div className="pc-info">
                  <div className="pc-title-row">
                    <h3 className="pc-title">{p.title}</h3>
                    {p.type && <span className="pc-type">{p.type}</span>}
                  </div>
                  <p className="pc-sub">{p.subtitle}</p>
                  <p className="pc-desc">{p.desc}</p>
                  <div className="pc-tags">
                    {p.tags.map(t => <span key={t} className="pc-tag">{t}</span>)}
                  </div>
                  {p.achievements.length > 0 && (
                    <div className="pc-awards">
                      {p.achievements.map(a => (
                        <span key={a} className="pc-award">{a}</span>
                      ))}
                    </div>
                  )}
                </div>
                <span className="pc-arrow">View</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
