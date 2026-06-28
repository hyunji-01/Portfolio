import useReveal from '../hooks/useReveal'
import { education } from '../data/portfolioData'
import './Education.css'

export default function Education() {
  const [ref, visible] = useReveal()

  return (
    <section id="education" className="education">
      <div className={`education-inner reveal ${visible ? 'visible' : ''}`} ref={ref}>
        <p className="section-label">Education</p>
        <h2 className="section-title">학력 및 교육</h2>
        <div className="edu-list">
          {education.map((edu, i) => (
            <div key={edu.school} className="edu-item" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="edu-left">
                <h3 className="edu-school">{edu.school}</h3>
                <p className="edu-period">{edu.period}</p>
              </div>
              <div className="edu-depts">
                {edu.departments.map((d) => (
                  <div key={d.name} className="edu-dept">
                    <span className="edu-dept-name">{d.name}</span>
                    <span className="edu-dept-desc">{d.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
