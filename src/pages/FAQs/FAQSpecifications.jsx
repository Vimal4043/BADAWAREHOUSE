import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { Reveal, Overline } from '../../components/Reveal.jsx'

const QUESTIONS = [
  {
    q: 'How can I get detailed property specifications?',
    a: 'Each listing shows the specifications that are available for that property — for example area, clear height, floor height, water capacity, power provision and road frontage. Full specification sheets are shared on enquiry.',
  },
  {
    q: 'Can I arrange a site visit?',
    a: 'Yes. Arrange a site visit at a time convenient to you through the enquiry form on the property page or the contact page, and we will coordinate it.',
  },
  {
    q: 'Are loading docks available?',
    a: 'Yes, where a property has docks. For example, the warehouse in Bhiwandi has 3 loading docks and the 70,000 sq ft warehouse on the Khopoli–Pen Road has 11 docks and 2 ramps.',
  },
  {
    q: 'What infrastructure is available?',
    a: 'Infrastructure varies by property and is listed where known. Examples include 15 ft floor height, 1.2 lakh litre water capacity, power provisions of 67/100/200 HP and a 20-metre road frontage at the Taloja MIDC building.',
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

export default function FAQSpecifications() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section data-testid="faq-specifications" className="scroll-mt-12 bg-white px-5 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Overline>Property Specifications</Overline>
          <h2 className="mt-6 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-5xl">
            Questions about specifications and site visits
          </h2>
        </Reveal>

        <div className="mt-8">
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