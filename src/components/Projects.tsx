import React from 'react'
import { Link } from 'react-router-dom'
import ProjectCard, { type Project } from './ProjectCard'
import projects from '../data/projects.json'

export default function Projects({ featured = false }: { featured?: boolean }) {
  const allProjects = projects as Project[]
  const visibleProjects = featured ? allProjects.filter(p => p.status !== 'Planned') : allProjects

  return (
    <section id="projects" className="projects container">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Selected work</p>
          <h2>{featured ? 'Featured projects' : 'Projects'}</h2>
        </div>
        {featured && <Link to="/projects" className="project-link">All projects →</Link>}
      </div>
      <div className={featured ? 'projects-grid featured-grid' : 'projects-grid'}>
        {visibleProjects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}
