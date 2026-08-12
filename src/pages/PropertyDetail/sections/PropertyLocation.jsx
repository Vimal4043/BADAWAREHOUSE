import { Reveal, Overline } from '../../../components/Reveal.jsx'
import { MapPin, ArrowUpRight } from 'lucide-react'

export default function PropertyLocation({ property }) {
  const hasConnectivity = property.connectivity && property.connectivity.length > 0
  return (
    <section data-testid="property-location" className="scroll-mt-24 bg-[#f9fafb] px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <Overline>Location &amp; Connectivity</Overline>
          <h2 className="mt-6 font-heading text-2xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-4xl">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-6 w-6 text-[#748c70]" />
              {property.location}
            </span>
          </h2>
          <p className="mt-3 text-base text-[#4b5563] md:text-lg">
            {property.city}
            {property.state ? `, ${property.state}` : ''}
          </p>
        </Reveal>

        {hasConnectivity && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {property.connectivity.map((c, i) => (
              <Reveal key={c} delay={i * 0.03}>
                <div className="flex items-center gap-3 rounded-2xl border border-black/6 bg-white p-5">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#748c70]" />
                  <p className="text-sm font-semibold text-[#0a192f]">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-black/6">
            <div className="relative aspect-video w-full bg-white">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80&auto=format&fit=crop"
                alt="Map placeholder"
                className="h-full w-full object-cover opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-2xl border border-black/10 bg-white/90 px-8 py-6 text-center backdrop-blur">
                  <p className="font-heading text-xl font-bold text-[#0a192f]">{property.location}</p>
                  <p className="mt-2 text-sm text-[#4b5563]">
                    {property.city}
                    {property.state ? `, ${property.state}` : ''}
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#748c70] px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#5f7a5c]"
                  >
                    Open in Google Maps
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}