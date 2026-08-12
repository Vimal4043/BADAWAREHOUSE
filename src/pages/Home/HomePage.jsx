import Navbar from '../../components/Navbar.jsx'
import Hero from './Hero.jsx'
import FeaturedProperties from './FeaturedProperties.jsx'
import ExploreCities from './ExploreCities.jsx'
import Services from './Services.jsx'
import Benefits from './Benefits.jsx'
import TopProperties from './TopProperties.jsx'
import Testimonials from './Testimonials.jsx'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProperties />
        <ExploreCities />
        <Services />
        <Benefits />
        <TopProperties />
        {/* <Testimonials /> */}
      </main>
    </>
  )
}
