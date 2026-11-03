import React from 'react'
import { Link } from 'react-router-dom'

export type Project = {
  id: string
  slug: string
  title: string
  description: string
  url: string
  details?: string
  technologies?: string[]
  status?: 'Completed' | 'In progress' | 'Planned'
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card-heading">
        <h3>{project.title}</h3>
        {project.status && <span className="project-status">{project.status}</span>}
      </div>
      <p>{project.description}</p>
      {project.technologies && (
        <ul className="tag-list" aria-label="Technologies">
          {project.technologies.map(technology => <li key={technology}>{technology}</li>)}
        </ul>
      )}
      <Link to={project.url} className="project-link" aria-label={`View details for ${project.title}`}>
        View project details →
      </Link>
    </article>
  )
}
