import React from 'react'
import contact from '../data/contact.json'

export default function Contact() {
  return (
    <section id="contact" className="contact container">
      <h2>Contact</h2>
      <p>
        <strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
      <ul>
        {contact.social.map((s: any) => (
          <li key={s.href}>
            <a href={s.href}>{s.label}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
