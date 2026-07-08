import React from 'react'
import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects.json'
import { type Project } from '../components/ProjectCard'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = (projects as Project[]).find((item) => item.slug === slug)

  if (!project) {
    return (
      <section className="project-detail container">
        <h2>Project not found</h2>
        <p>The requested project does not exist.</p>
        <Link to="/projects" className="project-link">
          Back to projects
        </Link>
      </section>
    )
  }

  return (
    <section className="project-detail container">
      <Link to="/projects" className="project-link">
        Back to projects
      </Link>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {project.details && <p>{project.details}</p>}
      {project.technologies && (
        <>
          <h3>Technologies</h3>
          <ul className="tag-list">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}
