import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { Reveal, Overline } from '../../components/Reveal.jsx'

const QUESTIONS = [
  {
    q: 'How do I book a site visit in Patna?',
    a: 'Call +91 1234567890 or email realestategurukripa@gmail.com with your preferred date and property type. We confirm availability and share the meet-up point before the visit.',
  },
  {
    q: 'Which cities do you cover beyond Patna?',
    a: 'We assist clients across Delhi, Noida, Gurugram, and Jharkhand alongside Patna, handling both residential and commercial requirements.',
  },
  {
    q: 'Can you help with home loans and paperwork?',
    a: 'Yes. We coordinate with lending partners, prepare property documents for sanction, and guide you through registration and stamping steps.',
  },
  {
    q: 'How do you ensure properties are legally clear?',
    a: 'We review titles, approvals, encumbrance certificates, and compliance. For projects, we verify RERA details and sanctioned plans before recommending options.',
  },
  {
    q: 'What is the fastest way to reach you?',
    a: 'Phone is fastest: +91 1234567890. You can also email realestategurukripa@gmail.com for detailed requirements or documents.',
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

export default function ContactFAQs() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section data-testid="contact-faqs" className="scroll-mt-24 bg-[#f9fafb] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Overline>FAQs</Overline>
          <h2 className="mt-6 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-5xl">
            Contact-related questions
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
