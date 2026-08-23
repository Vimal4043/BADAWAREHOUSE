import { Reveal, Overline } from '../../../components/Reveal.jsx'
import { MapPin } from 'lucide-react'

export default function PropertyOverview({ property }) {
  return (
    <section data-testid="property-overview" className="scroll-mt-12 bg-white px-5 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <Overline>Property Overview</Overline>
          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-5xl">
                {property.title}
              </h1>
              <p className="mt-4 inline-flex items-center gap-2 text-base leading-relaxed text-[#4b5563] md:text-lg">
                <MapPin className="h-4 w-4 text-[#748c70]" />
                {property.location}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {property.listingType === 'For Sale' ? (
                  <span className="rounded-full bg-[#0a192f] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                    For Sale
                  </span>
                ) : (
                  <span className="rounded-full bg-[#d4e0b3] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#0a192f]">
                    For Rent
                  </span>
                )}
                {property.type && (
                  <span className="rounded-full bg-[#748c70]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#748c70]">
                    {property.type}
                  </span>
                )}
                {property.availabilityNote && (
                  <span className="rounded-full border border-black/10 px-4 py-1.5 text-xs font-semibold text-[#0a192f]">
                    {property.availabilityNote}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 lg:items-end">
              <p className="font-heading text-3xl font-extrabold tracking-tight text-[#0a192f] md:text-4xl">
                {property.price || 'On request'}
              </p>
              {property.area && (
                <p className="text-sm font-semibold text-[#748c70]">{property.area}</p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}