import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { Reveal, Overline } from '../../components/Reveal.jsx'

const QUESTIONS = [
  {
    q: 'What areas does BADAWAREHOUSE serve?',
    a: 'We serve clients across Delhi, Noida, Gurugram, Patna, and Jharkhand, offering end-to-end guidance for buying, selling, and investing in residential, commercial, industrial, and land parcels.',
  },
  {
    q: 'Who leads BADAWAREHOUSE?',
    a: 'The firm is led by Mr. Kundan Mukherjee, a 13+ years experienced real estate professional known for transparent dealings, market expertise, and client-first advice.',
  },
  {
    q: 'What services do you provide?',
    a: 'We handle property discovery, site visits, due diligence, pricing guidance, negotiation, documentation, and closing support for both end-users and investors.',
  },
  {
    q: 'How do you tailor solutions for clients?',
    a: 'We start with your budget, timeline, and risk appetite, then shortlist properties that match your goals, providing transparent pros and cons, comparables, and legal checks before you decide.',
  },
  {
    q: 'How can I reach you quickly?',
    a: 'Call +91 1234567890 or email badawarehouse@gmail.com. We typically respond the same business day and can schedule site visits promptly.',
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

export default function FAQOverview() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section data-testid="faq-overview" className="scroll-mt-12 bg-white px-5 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Overline>Overview</Overline>
          <h2 className="mt-6 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-5xl">
            General questions about BADAWAREHOUSE
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
