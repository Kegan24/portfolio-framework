import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import ExperiencePage from './pages/Experience'
import HomePage from './pages/Home'
import ProjectDetailPage from './pages/ProjectDetail'
import ProjectsPage from './pages/Projects'
import ResumePage from './pages/Resume'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </main>
      <Footer footer={{ copyright: '(c) 2026 Jane Doe' }} />
    </div>
  )
}
