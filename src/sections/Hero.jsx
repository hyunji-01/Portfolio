import { useEffect, useState } from 'react'
import { profile } from '../data/portfolioData'
import heroImg from '../assets/hero.png'
import './Hero.css'

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % profile.roles.length)
        setFade(true)
      }, 300)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero">
      <div className="hero-orbit" aria-hidden="true" />
      <div className="hero-inner">
        <p className="hero-greeting">Mission Portfolio</p>
        <h1 className="hero-name">{profile.name}</h1>
        <div className="hero-roles">
          <span className={`hero-role-current ${fade ? 'role-in' : 'role-out'}`}>
            {profile.roles[roleIdx]}
          </span>
          <span className="hero-role-sep">/</span>
          <span className="hero-role-static">기획부터 개발까지</span>
        </div>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-contact">
          <a href={`mailto:${profile.email}`} className="hero-contact-item">{profile.email}</a>
          <span className="hero-dot">/</span>
          <span className="hero-contact-item">{profile.phone}</span>
        </div>
      </div>
      <div className="hero-photo-wrap">
        <img src={heroImg} alt="유현지 프로필" className="hero-photo" />
        <div className="hero-photo-glow" />
      </div>
      <div className="hero-scroll-hint">
        <span className="scroll-line" />
        <span className="scroll-text">SCROLL</span>
      </div>
    </section>
  )
}
