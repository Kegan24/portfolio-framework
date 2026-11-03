import React from 'react'
import { Link } from 'react-router-dom'
import experiences from '../data/experience.json'

type ExperienceItem = {
  id: string
  company: string
  role: string
  period: string
  description: string
  highlights: string[]
}

export default function Experience() {
  const employment = (experiences as ExperienceItem[]).filter(e => e.company !== 'Northern Illinois University')
  return (
    <section id="experience" className="experience container">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Professional background</p>
          <h2>Experience</h2>
        </div>
        <Link to="/resume" className="project-link">Full resume →</Link>
      </div>
      <div className="experience-list">
        {employment.map(e => (
          <article key={e.id} className="experience-item">
            <h3>{e.role} — {e.company}</h3>
            <p className="period">{e.period}</p>
            <p>{e.description}</p>
            <ul>{e.highlights.map(h => <li key={h}>{h}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  )
}
