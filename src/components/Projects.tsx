import React from 'react'
import ProjectCard, { type Project } from './ProjectCard'
import projects from '../data/projects.json'

export default function Projects() {
  return (
    <section id="projects" className="projects container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {(projects as Project[]).map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
