import { createContext, useContext, useEffect, useState } from 'react'

export type Mood  = 'operational' | 'editorial' | 'night'
export type Tempo = 'compact' | 'standard' | 'theatrical'

interface ThemeState {
  mood:      Mood
  tempo:     Tempo
  accent:    string
  setMood:   (m: Mood)   => void
  setTempo:  (t: Tempo)  => void
  setAccent: (a: string) => void
}

const ThemeContext = createContext<ThemeState | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mood,   setMood]   = useState<Mood>('operational')
  const [tempo,  setTempo]  = useState<Tempo>('standard')
  const [accent, setAccent] = useState('#FF5E1A')

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-mood',  mood)
    root.setAttribute('data-tempo', tempo)
    root.style.setProperty('--color-orange', accent)
  }, [mood, tempo, accent])

  return (
    <ThemeContext.Provider value={{ mood, tempo, accent, setMood, setTempo, setAccent }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeState {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}
