import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/portfolioData'
import PureTicket from '../projects/PureTicket'
import CatchTheFish from '../projects/CatchTheFish'
import Jikpick from '../projects/Jikpick'
import Artiwish from '../projects/Artiwish'
import GongchaRedesign from '../projects/GongchaRedesign'
import Gachwitgayop from '../projects/Gachwitgayop'
import DkbmcPortal from '../projects/DkbmcPortal'
import SalesforceWorldTour from '../projects/SalesforceWorldTour'
import './ProjectDetail.css'

const COMPONENTS = {
  'dkbmc-portal':          DkbmcPortal,
  'salesforce-world-tour': SalesforceWorldTour,
  'pure-ticket':           PureTicket,
  'catch-the-fish':        CatchTheFish,
  'jikpick':               Jikpick,
  'artiwish':              Artiwish,
  'gongcha-redesign':      GongchaRedesign,
  'gachwitgayop':          Gachwitgayop,
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r}, ${g}, ${b}`
}

function FloatingPanel({ project }) {
  const color = project.color || 'var(--cyan)'
  const isHex = color.startsWith('#')

  return (
    <aside
      className="pd-panel"
      style={{
        '--panel-color': color,
        '--panel-glow': isHex ? hexToRgb(color) : '92, 228, 255',
      }}
    >
      {project.type && (
        <span className="pd-panel__type">{project.type}</span>
      )}

      <p className="pd-panel__desc">{project.desc}</p>

      <div className="pd-panel__divider" />

      {project.tags?.length > 0 && (
        <>
          <p className="pd-panel__label">Stack</p>
          <div className="pd-panel__tags">
            {project.tags.map(t => (
              <span key={t} className="pd-panel__tag">{t}</span>
            ))}
          </div>
        </>
      )}

      {project.achievements?.length > 0 && (
        <>
          <div className="pd-panel__divider" />
          <p className="pd-panel__label">Highlights</p>
          <div className="pd-panel__stats">
            {project.achievements.map(a => (
              <div key={a} className="pd-panel__stat">
                <span className="pd-panel__stat-num">—</span>
                <span className="pd-panel__stat-label">{a}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {isHex && (
        <>
          <div className="pd-panel__divider" />
          <p className="pd-panel__label">Brand Color</p>
          <div className="pd-panel__color">
            <div className="pd-panel__color-dot" style={{ background: color }} />
            <span className="pd-panel__color-val">{color}</span>
          </div>
        </>
      )}
    </aside>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const Component = COMPONENTS[id]
  const project = projects.find(p => p.id === id)

  const isKcTheme = id === 'dkbmc-portal'

  return (
    <div className={`pd-page${isKcTheme ? ' pd-page--kc' : ''}`}>
      <div className="pd-page-inner">

        <div className="pd-back-row">
          <Link to="/" className="pd-back">목록으로</Link>
        </div>

        {/* 프로젝트 타이틀 — 레이아웃 전체 상단 */}
        {project && (
          <div className="pd-page-header">
            <p className="pd-page-num">Project {project.num}</p>
            <h1 className="pd-page-title" style={{ '--title-color': project.color || 'var(--cyan)' }}>
              {project.title}
            </h1>
            <p className="pd-page-subtitle">{project.subtitle}</p>
          </div>
        )}

        {Component ? (
          <div className="pd-layout">
            <div className="pd-main">
              <Component />
            </div>
            {project && <FloatingPanel project={project} />}
          </div>
        ) : (
          <p className="pd-not-found">프로젝트를 찾을 수 없습니다.</p>
        )}

      </div>
    </div>
  )
}
