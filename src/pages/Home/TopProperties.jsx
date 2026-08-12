import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal, Overline } from '../../components/Reveal.jsx'
import { PROPERTIES } from '../../data/properties.js'

export default function TopProperties() {
  // Spotlight the industrial land opportunity (for sale) as a featured highlight.
  const spot = PROPERTIES.find((p) => p.id === 'kansal-village-industrial-land')
  const rest = PROPERTIES.filter((p) => p.id !== (spot && spot.id))

  if (spot) {
    const image = (spot.images && spot.images[0]) || ''
    return (
      <section data-testid="top-properties-section" className="scroll-mt-24 bg-[#f9fafb] px-5 py-10 md:px-10 md:py-20">
        <div className="mx-auto max-w-350">
          <Reveal>
            <Overline>Featured Industrial Opportunity</Overline>
            <h2 className="mt-6 max-w-full font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-5xl">
              Industrial land with clear title, on the highway.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-16 grid items-stretch overflow-hidden rounded-3xl border border-black/[0.07] bg-white lg:grid-cols-2">
              <div className="relative aspect-4/3 overflow-hidden lg:aspect-auto">
                <img
                  src={image}
                  alt={spot.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#0a192f] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    For Sale
                  </span>
                  <span className="rounded-full bg-[#748c70]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#748c70]">
                    {spot.type}
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-2xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-4xl">
                  {spot.title}
                </h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#748c70]">
                  {spot.location}
                </p>
                <p className="mt-6 text-base leading-relaxed text-[#4b5563]">{spot.description}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {spot.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-[#0a192f]"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-black/6 pt-6">
                  <p className="font-heading text-2xl font-extrabold text-[#0a192f]">
                    {spot.price}
                  </p>
                  <Link
                    to={`/properties/${spot.id}`}
                    className="group inline-flex items-center gap-2 rounded-full bg-[#0a192f] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#748c70]"
                  >
                    View Property
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    )
  }

  // Fallback grid if the spotlight property is not available.
  return (
    <section data-testid="top-properties-section" className="scroll-mt-24 bg-[#f9fafb] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-350">
        <Overline>Featured Industrial Opportunities</Overline>
        <h2 className="mt-6 max-w-5xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-5xl">
          More opportunities
        </h2>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Link
              key={p.id}
              to={`/properties/${p.id}`}
              className="group block overflow-hidden rounded-2xl border border-black/[0.07] bg-white"
            >
              <img
                src={(p.images && p.images[0]) || ''}
                alt={p.title}
                loading="lazy"
                className="aspect-4/3 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-[#0a192f]">{p.title}</h3>
                <p className="mt-2 text-sm font-semibold text-[#748c70]">{p.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
