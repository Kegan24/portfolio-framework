import React from 'react'
import site from '../data/site.json'
import ThemeToggle from './ThemeToggle'

type NavItem = { label: string; href: string }

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="site-title">{site.title}</h1>
        <nav>
          <ul className="nav-list">
            {site.nav.map((n: NavItem) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div style={{ marginLeft: '1rem' }}>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
