import React from 'react'
import experiences from '../data/experience.json'

export default function Experience() {
  return (
    <section id="experience" className="experience container">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((e: any) => (
          <div key={e.id} className="experience-item">
            <h3>{e.role} — {e.company}</h3>
            <p className="period">{e.period}</p>
            <p>{e.description}</p>
            <ul>
              {e.highlights.map((h: string, i: number) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
