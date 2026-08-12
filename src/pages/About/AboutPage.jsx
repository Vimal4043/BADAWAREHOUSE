import Navbar from '../../components/Navbar.jsx'
import AboutHero from './AboutHero.jsx'
import AboutIntroduction from './AboutIntroduction.jsx'
import AboutStory from './AboutStory.jsx'
import AboutExpertise from './AboutExpertise.jsx'
import AboutValues from './AboutValues.jsx'
import AboutCTA from './AboutCTA.jsx'

export default function AboutPage() {
  return (
    <>
      <main>
        <AboutHero />
        <AboutIntroduction />
        <AboutStory />
        <AboutExpertise />
        <AboutValues />
        <AboutCTA />
      </main>
    </>
  )
}
