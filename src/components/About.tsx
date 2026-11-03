import React from 'react'
import about from '../data/about.json'

const skills = ['Excel & reporting', 'Data quality', 'Zoho CRM', 'Process improvement', 'SQL fundamentals', 'React & TypeScript']

export default function About() {
  return (
    <section id="about" className="about container about-grid">
      <div>
        <p className="section-kicker">Background</p>
        <h2>{about.title}</h2>
        <p>{about.body}</p>
      </div>
      <div className="skills-panel">
        <h3>Core skills</h3>
        <p>Tools and capabilities I use professionally or develop through hands-on projects.</p>
        <ul className="tag-list">
          {skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    </section>
  )
}
