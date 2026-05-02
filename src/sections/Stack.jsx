import useReveal from '../hooks/useReveal'
import { stacks } from '../data/portfolioData'
import './Stack.css'

export default function Stack() {
  const [ref, visible] = useReveal()

  return (
    <section id="stack" className="stack">
      <div className={`stack-inner reveal ${visible ? 'visible' : ''}`} ref={ref}>
        <p className="section-label">Stack</p>
        <h2 className="section-title">사용해 온 기술</h2>
        <div className="stack-groups">
          {Object.entries(stacks).map(([cat, items], i) => (
            <div key={cat} className="stack-group" style={{ transitionDelay: `${i * 0.08}s` }}>
              <h4 className="stack-cat">{cat}</h4>
              <div className="stack-tags">
                {items.map(item => (
                  <span key={item} className="stack-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
