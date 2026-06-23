import React from 'react'
import hero from '../data/hero.json'

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <h2>{hero.heading}</h2>
      <p>{hero.subheading}</p>
    </section>
  )
}
