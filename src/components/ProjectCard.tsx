import React from 'react'

export default function ProjectCard({ project }: { project: { id: string; title: string; description: string; url: string } }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.url} className="project-link">
        View
      </a>
    </article>
  )
}
