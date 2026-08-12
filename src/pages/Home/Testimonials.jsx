import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react'

const REVIEWS = [
  {
    quote:
      "BADAWAREHOUSE shortlisted warehouses that actually matched our operations — right clearance, docks and access. We leased in Bhiwandi without wasting a single week.",
    name: 'Logistics Operator',
    role: 'Leased in Bhiwandi',
  },
  {
    quote:
      'Clear title, honest specification sheets and a quick site visit. They handled the industrial land enquiry from end to end with real professionalism.',
    name: 'Manufacturing Director',
    role: 'Land enquiry, Raigad',
  },
  {
    quote:
      'The team understood floor-wise layout and power requirements immediately. A smooth, business-first experience from first call to handover.',
    name: 'Operations Head',
    role: 'Rented in Taloja MIDC',
  },
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  const r = REVIEWS[i]
  const go = (d) => setI((p) => (p + d + REVIEWS.length) % REVIEWS.length)

  return (
    <section data-testid="testimonials-section" className="relative overflow-hidden bg-[#0a192f] px-5 py-24 text-white md:px-10 md:py-32">
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.05]" />

      <div className="relative mx-auto grid max-w-350 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80&auto=format&fit=crop"
              alt="Industrial warehouse"
              className="aspect-4/5 w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#d4e0b3] px-7 py-5 text-[#0a192f] md:right-6">
            <p className="font-heading text-3xl font-extrabold tracking-tight">4.98</p>
            <p className="text-xs font-semibold uppercase tracking-wider">Avg. client rating</p>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#748c70]">Client stories</h3>
          <Quote className="mt-8 h-12 w-12 text-[#748c70]" />
          <div className="mt-6 min-h-55 md:min-h-50">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading text-2xl font-bold leading-snug tracking-tight md:text-3xl"
              >
                &ldquo;{r.quote}&rdquo;
              </motion.blockquote>
            </AnimatePresence>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div>
              <p className="text-base font-semibold">{r.name}</p>
              <p className="mt-1 text-sm text-white/50">{r.role}</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-colors duration-300 hover:bg-white hover:text-[#0a192f]"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-colors duration-300 hover:bg-white hover:text-[#0a192f]"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}