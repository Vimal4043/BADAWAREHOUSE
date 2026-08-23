import { motion } from 'framer-motion'
import { Building2, Warehouse, Landmark, AreaChart, KeyRound, Factory } from 'lucide-react'
import { Reveal, Overline } from '../../components/Reveal.jsx'

const EXPERTISE = [
  { icon: Warehouse, title: 'Warehousing', body: 'Large-format warehouses, fully compliant facilities and high-clearance storage built for logistics.' },
  { icon: Building2, title: 'Industrial Buildings', body: 'RCC and industrial buildings for manufacturing, warehousing, offices and training uses.' },
  { icon: Factory, title: 'Commercial Spaces', body: 'Commercial buildings and units suited to offices, food & beverage, R&D and electronics.' },
  { icon: Landmark, title: 'Industrial Land', body: 'Freehold, clear-title land plots with highway access for industrial development.' },
  { icon: KeyRound, title: 'Leasing', body: 'Long-term rentals across warehouses, buildings and commercial units, matched to your operations.' },
  { icon: AreaChart, title: 'Property Sales', body: 'Industrial land and buildings for sale, with clear-title diligence and guided handover.' },
]

export default function AboutExpertise() {
  return (
    <section data-testid="about-expertise" className="scroll-mt-12 bg-white px-5 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-350">
        <Reveal>
          <Overline>Expertise</Overline>
          <h2 className="mt-6 max-w-3xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-5xl">
            Commercial &amp; industrial property, across every asset class.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERTISE.map((e, i) => {
            const Icon = e.icon
            return (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col rounded-2xl border border-black/[0.07] bg-[#f9fafb] p-8 transition-colors duration-500 hover:bg-[#0a192f]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a192f] text-[#d4e0b3] transition-colors duration-500 group-hover:bg-[#748c70] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-heading text-xl font-bold text-[#0a192f] transition-colors duration-500 group-hover:text-white">
                  {e.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#4b5563] transition-colors duration-500 group-hover:text-white/70">
                  {e.body}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
