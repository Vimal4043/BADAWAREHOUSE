import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { Reveal, Overline } from '../../components/Reveal.jsx'

const QUESTIONS = [
  {
    q: 'What types of commercial properties are available?',
    a: 'We offer warehouses, industrial buildings, commercial buildings and industrial land — each available for rent or for sale depending on the listing.',
  },
  {
    q: 'Do you offer warehouses?',
    a: 'Yes. We have warehouses in locations such as Bhiwandi and on the Khopoli–Pen Road, with details like built-up area, clear height, loading docks, ramps and flooring shown on each listing.',
  },
  {
    q: 'Do you offer industrial land?',
    a: 'Yes. We offer industrial land such as the freehold, clear-title plot in Kansal Village (Raigad) on the Khopoli–Pali Highway.',
  },
  {
    q: 'Are properties available for sale and rent?',
    a: 'Yes. The portfolio includes properties available for rent and others available for sale. Use the availability filter to view either.',
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

export default function FAQPropertyInfo() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section data-testid="faq-property-info" className="scroll-mt-24 bg-white px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Overline>Property Information</Overline>
          <h2 className="mt-6 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-5xl">
            Questions about our commercial properties
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