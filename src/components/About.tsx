import React from 'react'
import about from '../data/about.json'

export default function About() {
  return (
    <section id="about" className="about container">
      <h2>{about.title}</h2>
      <p>{about.body}</p>
    </section>
  )
}
