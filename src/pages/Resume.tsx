import React from 'react'
import experiences from '../data/experience.json'
import contact from '../data/contact.json'

type ExperienceItem = {
  id: string
  company: string
  role: string
  period: string
  description: string
  highlights: string[]
}

export default function ResumePage() {
  const resumeItems = experiences as ExperienceItem[]

  return (
    <section className="resume container">
      <h2>Resume</h2>
      <p>
        <strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
      <div className="experience-list">
        {resumeItems.map((item) => (
          <div key={item.id} className="experience-item">
            <h3>{item.role} - {item.company}</h3>
            <p className="period">{item.period}</p>
            <p>{item.description}</p>
            <ul>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
