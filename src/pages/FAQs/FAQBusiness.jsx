import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { Reveal, Overline } from '../../components/Reveal.jsx'

const QUESTIONS = [
  {
    q: 'Which industries can use the properties?',
    a: 'Suitability varies by property and is listed where provided. For example, the RCC building in Taloja MIDC is suitable for warehousing, industrial units, offices, training centres, food & beverages, R&D, pharma, electronics and logistics.',
  },
  {
    q: 'Are the properties suitable for logistics?',
    a: 'Yes. Warehouses with loading docks and ramps are well suited to logistics — such as the warehouses in Bhiwandi and on the Khopoli–Pen Road.',
  },
  {
    q: 'Are they suitable for manufacturing?',
    a: 'Some industrial buildings and warehouses can support manufacturing uses. Confirm suitability against a specific property’s specifications during enquiry.',
  },
  {
    q: 'Are they suitable for warehousing?',
    a: 'Yes. Several properties are designed for warehousing, including high-clearance warehouses and the multi-floor RCC building in Taloja MIDC.',
  },
  {
    q: 'How can I enquire about a property?',
    a: 'Use the enquiry form on the property page or the contact page. Provide your name, company, contact details and requirement, and we will respond.',
  },
  {
    q: 'Can I schedule a property visit?',
    a: 'Yes. Schedule a site visit through the enquiry form or contact page, and we will coordinate a convenient time.',
  },
  {
    q: 'How quickly can I receive property details?',
    a: 'We respond to enquiries promptly, typically the same business day, and share full specifications and availability.',
  },
]

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-black/6">
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-heading text-lg font-bold text-[#0a192f] md:text-xl">
          {question}
        </span>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10">
          {isOpen ? (
            <Minus className="h-4 w-4 text-[#748c70]" />
          ) : (
            <Plus className="h-4 w-4 text-[#748c70]" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-base leading-relaxed text-[#4b5563] md:text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQBusiness() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section data-testid="faq-business" className="scroll-mt-12 bg-[#f9fafb] px-5 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Overline>Business Use &amp; Enquiry</Overline>
          <h2 className="mt-6 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-5xl">
            Questions about business use and getting in touch
          </h2>
        </Reveal>

        <div className="mt-16">
          {QUESTIONS.map((item, i) => (
            <AccordionItem
              key={i}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}