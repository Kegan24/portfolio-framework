import React from 'react'
import contact from '../data/contact.json'

type SocialLink = { label: string; href: string }

export default function Contact() {
  return (
    <section id="contact" className="contact container">
      <div className="contact-panel">
        <p className="section-kicker">Get in touch</p>
        <h2>Let's connect</h2>
        <p>Interested in discussing business analysis, data quality, or technical projects? Reach out by email or connect with me online.</p>
        <div className="contact-actions">
          <a className="button-link" href={`mailto:${contact.email}`}>Email me</a>
          {(contact.social as SocialLink[]).map(s => <a key={s.href} className="button-link button-secondary" href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>)}
        </div>
      </div>
    </section>
  )
}
