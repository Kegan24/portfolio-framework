import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../data/hero.json'

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <p className="eyebrow">Business analysis · Data quality · Technology</p>
      <h2>{hero.heading}</h2>
      <p className="hero-subheading">{hero.subheading}</p>
      <p className="hero-intro">I turn complex operational data into clearer processes, reliable reporting, and practical solutions. Explore my professional experience and hands-on technical projects.</p>
      <div className="hero-actions">
        <Link to="/projects" className="button-link">Explore projects</Link>
        <Link to="/resume" className="button-link button-secondary">View resume</Link>
      </div>
    </section>
  )
}
