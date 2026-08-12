import Navbar from '../../components/Navbar.jsx'
import ContactHero from './ContactHero.jsx'
import ContactForm from './ContactForm.jsx'
import ContactInformation from './ContactInformation.jsx'
import ContactMap from './ContactMap.jsx'
import ContactFAQs from './ContactFAQs.jsx'
import ContactCTA from './ContactCTA.jsx'

export default function ContactPage() {
  return (
    <>
      <main>
        <ContactHero />
        <ContactForm />
        <ContactInformation />
        <ContactMap />
        <ContactFAQs />
        <ContactCTA />
      </main>
    </>
  )
}
