import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '../data/projects.json'

export default function Projects() {
  return (
    <section id="projects" className="projects container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p: any) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
