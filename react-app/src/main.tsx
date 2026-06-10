import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Eski sayfa: import App from './App.tsx'
import AppStory from './AppStory.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppStory />
  </StrictMode>,
)