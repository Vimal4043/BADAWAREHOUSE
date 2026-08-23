import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { Reveal, Overline } from '../../components/Reveal.jsx'

const QUESTIONS = [
  {
    q: 'How do you verify property titles?',
    a: 'We review title chains, encumbrance certificates, mutation records, and approvals. For new projects, we check RERA registration, layout sanctions, and builder compliance before recommending.',
  },
  {
    q: 'Do you assist with legal and technical due diligence?',
    a: 'Yes. We can coordinate with empaneled lawyers and engineers for document vetting, site measurements, and compliance checks so you move ahead with clarity.',
  },
  {
    q: 'How do you handle payments securely?',
    a: 'Payments are made directly to sellers or developers via traceable modes. We align payment milestones with verified project progress or agreed sale agreements.',
  },
  {
    q: 'What precautions do you take for site visits?',
    a: 'We schedule daylight visits, share location pins, and ensure a team representative is present. For under-construction sites, we check access permissions and basic safety readiness.',
  },
  {
    q: 'How is my personal data treated?',
    a: 'We use your contact details only for property coordination and do not sell or share them with third parties without consent, except where required for banking or legal processing you approve.',
  },
  {
    q: 'How can I report concerns or fraud?',
    a: 'Call +91 1234567890 or email badawarehouse@gmail.com with details. We will pause the engagement, review documents, and advise next steps or alternate options.',
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

export default function FAQSafety() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section data-testid="faq-safety" className="scroll-mt-12 bg-white px-5 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Overline>Safety and Security</Overline>
          <h2 className="mt-6 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-5xl">
            Questions about verification, payments and privacy
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
