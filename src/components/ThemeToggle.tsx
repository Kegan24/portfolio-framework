import React from 'react'
import { useTheme } from '../theme/ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  const label =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? 'Switch to light theme'
      : 'Switch to dark theme'

  return (
    <button onClick={toggleTheme} aria-label={label} className="theme-toggle">
      {label.includes('light') ? 'Light' : 'Dark'}
    </button>
  )
}
