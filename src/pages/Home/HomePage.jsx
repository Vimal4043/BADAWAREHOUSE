import Navbar from '../../components/Navbar.jsx'
import Hero from './Hero.jsx'
import FeaturedProperties from './FeaturedProperties.jsx'
import Form from './Form.jsx'
import ExploreCities from './ExploreCities.jsx'
import Services from './Services.jsx'
import Benefits from './Benefits.jsx'
import Testimonials from './Testimonials.jsx'
import VisionMissionValues from './VisionMissionValues.jsx'
import AboutUs from './AboutUs.jsx'
import ContactInfo from './ContactInfo.jsx'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <FeaturedProperties />
        <Form />
        {/* <ExploreCities /> */}
        {/* <Services /> */}
        <VisionMissionValues />
        {/* <Benefits /> */}
        {/* <Testimonials /> */}
        <ContactInfo />
      </main>
    </>
  )
}
