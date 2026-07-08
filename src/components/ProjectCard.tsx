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
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <Link to={project.url} className="project-link">
        View
      </Link>
    </article>
  )
}
