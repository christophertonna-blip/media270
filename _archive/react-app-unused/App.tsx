import { ThemeProvider } from '@/context/ThemeContext'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks/HowItWorks'
import { Audience } from '@/components/sections/Audience/Audience'
import { Specs } from '@/components/sections/Specs/Specs'
import { CtaBand } from '@/components/sections/CtaBand/CtaBand'
import { StoryScroll } from '@/components/sections/StoryScroll/StoryScroll'
import { TweaksPanel } from '@/components/tweaks/TweaksPanel'

function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <StoryScroll />
        <Audience />
        <Specs />
        <CtaBand />
      </main>
      <Footer />
      {import.meta.env.DEV && <TweaksPanel />}
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  )
}
