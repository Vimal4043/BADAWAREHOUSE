import { motion } from 'framer-motion'
import { Shield, Clock, Award } from 'lucide-react'

const BENEFITS = [
  {
    icon: Shield,
    title: 'Verified & clear title',
    body: 'Every property is shortlisted with clear-title and compliance checks, so your business moves ahead with confidence, not surprises.',
  },
  {
    icon: Clock,
    title: 'Efficient process',
    body: 'From specification sheets and site visits to documentation and handover, we coordinate each step to keep your timeline intact.',
  },
  {
    icon: Award,
    title: 'Right space, right location',
    body: 'We match your operational requirements — area, height, docks, power and access — with the right space in the right industrial hub.',
  },
]

export default function Benefits() {
  return (
    <section data-testid="benefits-section" className="scroll-mt-12 bg-[#f6f7f4] px-5 py-10 text-[#0a192f] md:px-10 md:py-12">
      <div className="mx-auto max-w-350">
        <h2 className="max-w-5xl font-heading text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">
          Why Choose BADAWAREHOUSE
        </h2>
        <p className="mt-4 max-w-5xl text-base leading-relaxed text-[#0a192f]/60 md:text-lg">
          A professional, business-focused service built on diligence and results.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-start gap-5"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#748c70] text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-heading text-xl font-bold">{b.title}</h3>
                <p className="text-[15px] leading-relaxed text-white/70">{b.body}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
