import React from 'react'
import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects.json'
import { type Project } from '../components/ProjectCard'

type CaseStudy = Project & {
  objective?: string
  approach?: string[]
  challenges?: string[]
  outcomes?: string[]
  repository?: string
  screenshots?: { src: string; alt: string; caption?: string }[]
}

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = (projects as CaseStudy[]).find(item => item.slug === slug)

  if (!project) {
    return (
      <section className="project-detail container">
        <h2>Project not found</h2>
        <p>The requested project does not exist.</p>
        <Link to="/projects" className="project-link">Back to projects</Link>
      </section>
    )
  }

  return (
    <article className="project-detail container">
      <Link to="/projects" className="project-link">← All projects</Link>
      <header className="case-study-header">
        <p className="section-kicker">Project case study</p>
        <div className="case-study-title">
          <h2>{project.title}</h2>
          {project.status && <span className="project-status">{project.status}</span>}
        </div>
        <p className="case-study-lead">{project.description}</p>
        {project.technologies && (
          <ul className="tag-list" aria-label="Technologies">
            {project.technologies.map(technology => <li key={technology}>{technology}</li>)}
          </ul>
        )}
        {project.repository && (
          <a className="button-link button-secondary" href={project.repository} target="_blank" rel="noopener noreferrer">View source on GitHub ↗</a>
        )}
      </header>

      <div className="case-study-body">
        <section className="case-study-section">
          <h3>Overview</h3>
          <p>{project.details || project.description}</p>
        </section>
        {project.objective && (
          <section className="case-study-section">
            <h3>Objective</h3>
            <p>{project.objective}</p>
          </section>
        )}
        {project.approach && project.approach.length > 0 && (
          <section className="case-study-section">
            <h3>Implementation</h3>
            <ul>{project.approach.map(item => <li key={item}>{item}</li>)}</ul>
          </section>
        )}
        {project.challenges && project.challenges.length > 0 && (
          <section className="case-study-section">
            <h3>Challenges and decisions</h3>
            <ul>{project.challenges.map(item => <li key={item}>{item}</li>)}</ul>
          </section>
        )}
        {project.outcomes && project.outcomes.length > 0 && (
          <section className="case-study-section">
            <h3>Current results and next steps</h3>
            <ul>{project.outcomes.map(item => <li key={item}>{item}</li>)}</ul>
          </section>
        )}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="case-study-section">
            <h3>Screenshots</h3>
            <div className="case-study-gallery">
              {project.screenshots.map(shot => (
                <figure key={shot.src}>
                  <img src={`${import.meta.env.BASE_URL}${shot.src.replace(/^\//, '')}`} alt={shot.alt} loading="lazy" />
                  {shot.caption && <figcaption>{shot.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  )
}
