import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { Reveal, Overline } from '../../components/Reveal.jsx'

const QUESTIONS = [
  {
    q: 'How are your consulting fees structured?',
    a: 'Fees depend on the service: buyer representation, seller mandates, or investment advisory. We share a written fee quote upfront and proceed only after your approval.',
  },
  {
    q: 'Do you charge any hidden costs?',
    a: 'No. All brokerage or consulting charges are disclosed in writing. Government duties (stamp duty, registration) and bank charges are paid directly by clients to respective authorities.',
  },
  {
    q: 'Which payment modes do you accept?',
    a: 'We accept bank transfer, UPI, and cheque for professional fees. Property payments go directly to the seller or developer as per the agreed schedule.',
  },
  {
    q: 'Can you help estimate total purchase costs?',
    a: 'Yes. We provide a breakup of base price, taxes, stamp duty, registration, maintenance deposits, parking, and any applicable club or development charges before you decide.',
  },
  {
    q: 'Do you assist with home loans?',
    a: 'We can connect you with lending partners and help with documentation, eligibility checks, and property papers required for sanction.',
  },
  {
    q: 'What if a deal does not close?',
    a: 'If a transaction falls through due to title or compliance issues uncovered during diligence, we pause and realign options. Fees are charged only as per the agreed milestones.',
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

export default function FAQCosts() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section data-testid="faq-costs" className="scroll-mt-12 bg-[#f9fafb] px-5 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Overline>Costs and Payments</Overline>
          <h2 className="mt-6 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-5xl">
            Questions about fees, payments and costs
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
