import { Link } from 'react-router-dom'
import './Navbar.css'

const LINKS = [
  { label: 'About',      href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects',   href: '/#projects' },
  { label: 'Stack',      href: '/#stack' },
]

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">YHJ</Link>
      <ul className="navbar-links">
        {LINKS.map(l => (
          <li key={l.label}>
            <a href={l.href} className="navbar-link">{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
