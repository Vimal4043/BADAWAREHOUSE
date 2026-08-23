import { BRAND } from '../../data/properties.js'
import { Reveal, Overline } from '../../components/Reveal.jsx'

export default function AboutIntroduction() {
  return (
    <section data-testid="about-intro" className="scroll-mt-12 bg-white px-5 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-350">
        <Reveal>
          <Overline>Introduction</Overline>
          <h2 className="mt-6 max-w-3xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-5xl">
            {BRAND.name} helps businesses find the right space — warehouses, industrial buildings,
            commercial spaces and industrial land.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-base leading-relaxed text-[#4b5563] md:text-lg">
                We work across commercial and industrial real estate, sourcing, leasing and selling
                properties that fit the operational needs of growing businesses. Our approach
                combines local market knowledge with clear, business-focused guidance at every step.
              </p>
            </div>
            <div>
              <p className="text-base leading-relaxed text-[#4b5563] md:text-lg">
                Whether you are leasing a warehouse, acquiring industrial land or securing an
                industrial building, our team shortlists verified options, arranges site visits and
                supports the process from first enquiry to handover.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
