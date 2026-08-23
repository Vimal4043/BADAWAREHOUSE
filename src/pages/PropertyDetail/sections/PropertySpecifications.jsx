import { Reveal } from '../../../components/Reveal.jsx'

export default function PropertySpecifications({ property }) {
  if (!property.specifications || property.specifications.length === 0) return null

  return (
    <section data-testid="property-specifications" className="scroll-mt-12 bg-[#f9fafb] px-5 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h3 className="font-heading text-2xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-4xl">
            Specifications
          </h3>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {property.specifications.map((d) => (
            <Reveal key={d.label} delay={0.03}>
              <div className="rounded-2xl border border-black/6 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#748c70]">
                  {d.label}
                </p>
                <p className="mt-2 text-base font-semibold text-[#0a192f]">{d.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}