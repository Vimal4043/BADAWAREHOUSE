import { Reveal } from '../../../components/Reveal.jsx'

export default function PropertyFeatures({ property }) {
  if (!property.features || property.features.length === 0) return null

  return (
    <section data-testid="property-features" className="scroll-mt-24 bg-[#f9fafb] px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="font-heading text-2xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-4xl">
            Features
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {property.features.map((f, i) => (
            <Reveal key={f} delay={i * 0.03}>
              <div className="flex items-center gap-3 rounded-2xl border border-black/6 bg-white p-5">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#748c70]" />
                <p className="text-sm font-semibold text-[#0a192f]">{f}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}