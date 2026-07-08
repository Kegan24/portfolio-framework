import React from 'react'
import resume from '../data/resume.json'

type ResumeLink = {
  label: string
  href: string
}

type ResumeEntry = {
  id: string
  title: string
  organization: string
  location?: string
  period: string
  description?: string
  highlights?: string[]
}

type Certification = {
  id: string
  title: string
  status: string
}

type ResumeData = {
  name: string
  headline: string
  downloadFile: string
  contact: {
    location: string
    phone: string
    email: string
    links: ResumeLink[]
  }
  summary: string
  skills: string[]
  experience: ResumeEntry[]
  education: ResumeEntry[]
  certifications: Certification[]
}

export default function ResumePage() {
  const data = resume as ResumeData
  const downloadHref = `${import.meta.env.BASE_URL}${data.downloadFile}`

  return (
    <section className="resume container">
      <div className="resume-header">
        <div>
          <h2>{data.name}</h2>
          <p className="resume-headline">{data.headline}</p>
        </div>
        <a href={downloadHref} download className="button-link">
          Download Resume
        </a>
      </div>

      <div className="resume-contact">
        <span>{data.contact.location}</span>
        <a href={`tel:${data.contact.phone.replace(/\D/g, '')}`}>{data.contact.phone}</a>
        <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
        {data.contact.links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <section className="resume-section">
        <h3>Summary</h3>
        <p>{data.summary}</p>
      </section>

      <section className="resume-section">
        <h3>Technical Skills</h3>
        <ul className="tag-list">
          {data.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="resume-section">
        <h3>Professional Experience</h3>
        <div className="experience-list">
          {data.experience.map((item) => (
            <ResumeEntry key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h3>Education</h3>
        <div className="experience-list">
          {data.education.map((item) => (
            <ResumeEntry key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h3>Certifications</h3>
        <ul className="resume-list">
          {data.certifications.map((certification) => (
            <li key={certification.id}>
              {certification.title} - {certification.status}
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

function ResumeEntry({ item }: { item: ResumeEntry }) {
  return (
    <article className="experience-item">
      <h4>
        {item.title} - {item.organization}
      </h4>
      <p className="period">
        {[item.location, item.period].filter(Boolean).join(' | ')}
      </p>
      {item.description && <p>{item.description}</p>}
      {item.highlights && (
        <ul>
          {item.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}
    </article>
  )
}
