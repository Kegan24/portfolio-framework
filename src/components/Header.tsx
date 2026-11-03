import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import site from '../data/site.json'
import ThemeToggle from './ThemeToggle'

type NavItem = { label: string; href: string }

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="site-title">{site.title}</Link>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            {site.nav.map((n: NavItem) => (
              <li key={n.href}>
                <NavLink to={n.href} end={n.href === '/'}>
                  {n.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
