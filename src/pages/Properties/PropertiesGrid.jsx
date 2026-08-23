import PropertyCard from '../../components/PropertyCard.jsx'
import { Reveal } from '../../components/Reveal.jsx'

export default function PropertiesGrid({ properties }) {
  return (
    <section data-testid="properties-grid" className="scroll-mt-12 bg-[#f9fafb] px-5 py-10 md:px-10 md:py-12">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-5xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-5xl">
              Explore the portfolio
            </h2>
            <p className="text-sm text-[#4b5563]">
              Showing{' '}
              <span className="font-semibold text-[#0a192f]">{properties.length}</span> propert
              {properties.length === 1 ? 'y' : 'ies'}
            </p>
          </div>
        </Reveal>

        {properties.length === 0 ? (
          <div data-testid="no-properties" className="mt-8 rounded-3xl border border-black/6 bg-white p-12 text-center">
            <p className="font-heading text-xl font-bold text-[#0a192f]">No properties match your current filters.</p>
            <p className="mt-3 text-base text-[#4b5563]">Try clearing or adjusting the filters above.</p>
          </div>
        ) : (
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((p, i) => (
              <PropertyCard key={p.id} property={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}