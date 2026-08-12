import Navbar from '../../components/Navbar.jsx'
import FAQHero from './FAQHero.jsx'
import FAQPropertyInfo from './FAQPropertyInfo.jsx'
import FAQLeasing from './FAQLeasing.jsx'
import FAQSpecifications from './FAQSpecifications.jsx'
import FAQBusiness from './FAQBusiness.jsx'
import FAQCTA from './FAQCTA.jsx'

export default function FAQsPage() {
  return (
    <>
      <main>
        <FAQHero />
        <FAQPropertyInfo />
        <FAQLeasing />
        <FAQSpecifications />
        <FAQBusiness />
        <FAQCTA />
      </main>
    </>
  )
}
