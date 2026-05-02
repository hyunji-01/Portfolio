import { useParams, Link } from 'react-router-dom'
import Stars from '../components/Stars'
import PureTicket from '../projects/PureTicket'
import CatchTheFish from '../projects/CatchTheFish'
import Jikpick from '../projects/Jikpick'
import Artiwish from '../projects/Artiwish'
import GongchaRedesign from '../projects/GongchaRedesign'
import Gachwitgayop from '../projects/Gachwitgayop'
import DkbmcPortal from '../projects/DkbmcPortal'
import './ProjectDetail.css'

const COMPONENTS = {
  'pure-ticket': PureTicket,
  'catch-the-fish': CatchTheFish,
  'jikpick': Jikpick,
  'artiwish': Artiwish,
  'gongcha-redesign': GongchaRedesign,
  'gachwitgayop': Gachwitgayop,
  'dkbmc-portal': DkbmcPortal,
}

export default function ProjectDetail() {
  const { id } = useParams()
  const Component = COMPONENTS[id]

  return (
    <div className="pd-page">
      <Stars count={80} />
      <div className="pd-page-inner">
        <div className="pd-back-row">
          <Link to="/" className="pd-back">목록으로 돌아가기</Link>
        </div>
        {Component ? <Component /> : (
          <p className="pd-not-found">프로젝트를 찾을 수 없습니다.</p>
        )}
      </div>
    </div>
  )
}
