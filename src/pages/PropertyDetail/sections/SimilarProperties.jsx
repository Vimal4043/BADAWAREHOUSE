import { Reveal } from '../../../components/Reveal.jsx'
import PropertyCard from '../../../components/PropertyCard.jsx'
import { PROPERTIES } from '../../../data/properties.js'

export default function SimilarProperties({ currentId }) {
  // Prefer same-type properties, then fill the rest from the portfolio.
  const others = PROPERTIES.filter((p) => p.id !== currentId)
  const current = PROPERTIES.find((p) => p.id === currentId)
  const sameType = others.filter((p) => current && p.type === current.type)
  const diffType = others.filter((p) => current && p.type !== current.type)
  const similar = current ? [...sameType, ...diffType].slice(0, 3) : others.slice(0, 3)

  return (
    <section data-testid="similar-properties" className="scroll-mt-12 bg-[#f9fafb] px-5 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h3 className="font-heading text-2xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-4xl">
            Similar properties
          </h3>
          <p className="mt-3 text-base text-[#4b5563] md:text-lg">
            You may also like these commercial and industrial opportunities.
          </p>
        </Reveal>

        {similar.length > 0 && (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {similar.map((p, i) => (
              <PropertyCard key={p.id} property={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}