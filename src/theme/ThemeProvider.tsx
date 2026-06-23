import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import themeConfig from '../data/theme.json'

type Theme = 'light' | 'dark' | 'system'

type ThemeContextValue = {
  theme: Theme
  setTheme: (t: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

function resolveTheme(theme: Theme): 'light' | 'dark' {
  if (theme === 'system') {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return theme
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const storageKey = themeConfig.key || 'theme-preference'
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const raw = localStorage.getItem(storageKey)
      if (raw === 'light' || raw === 'dark' || raw === 'system') return raw
    } catch {
      /* ignore */
    }
    return (themeConfig.default as Theme) || 'system'
  })

  useEffect(() => {
    const apply = () => {
      const resolved = resolveTheme(theme)
      document.documentElement.classList.toggle('theme-dark', resolved === 'dark')
      document.documentElement.classList.toggle('theme-light', resolved === 'light')
    }

    apply()

    let mql: MediaQueryList | null = null
    if (theme === 'system' && window.matchMedia) {
      mql = window.matchMedia('(prefers-color-scheme: dark)')
      const handler = () => apply()
      mql.addEventListener ? mql.addEventListener('change', handler) : mql.addListener(handler)
      return () => {
        if (!mql) return
        mql.removeEventListener ? mql.removeEventListener('change', handler) : mql.removeListener(handler)
      }
    }
  }, [theme])

  const setTheme = (t: Theme) => {
    setThemeState(t)
    try {
      localStorage.setItem(storageKey, t)
    } catch {
      /* ignore */
    }
  }

  const toggleTheme = () => {
    setThemeState((current) => {
      const currentResolved = current === 'system' ? resolveTheme(current) : current
      const next = currentResolved === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(storageKey, next)
      } catch {}
      return next
    })
  }

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

export default ThemeProvider
