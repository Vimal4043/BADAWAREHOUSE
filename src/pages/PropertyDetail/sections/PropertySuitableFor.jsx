import { Reveal } from '../../../components/Reveal.jsx'

export default function PropertySuitableFor({ property }) {
  if (!property.suitableFor || property.suitableFor.length === 0) return null

  return (
    <section data-testid="property-suitable-for" className="scroll-mt-12 bg-white px-5 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h3 className="font-heading text-2xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-4xl">
            Suitable for
          </h3>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3">
          {property.suitableFor.map((s, i) => (
            <Reveal key={s} delay={i * 0.03}>
              <span className="inline-flex rounded-full bg-[#0a192f] px-5 py-2.5 text-sm font-semibold text-[#d4e0b3]">
                {s}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}