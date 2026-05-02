import { profile } from '../data/portfolioData'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-logo">YHJ</span>
          <p className="footer-sub">FE Developer / UI/UX Designer / Service Planner</p>
        </div>
        <div className="footer-right">
          <a href={`mailto:${profile.email}`} className="footer-link">{profile.email}</a>
          <span className="footer-sep">/</span>
          <span className="footer-text">{profile.phone}</span>
        </div>
      </div>
      <p className="footer-copy">© 2025 유현지. All rights reserved.</p>
    </footer>
  )
}
