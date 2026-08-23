import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PropertyCard({ property, index = 0 }) {
  const image = (property.images && property.images[0]) || ''
  const badges = [property.listingType, property.type].filter(Boolean)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/properties/${property.id}`}
        data-testid={`property-${property.id}`}
        className="group block overflow-hidden rounded-2xl border border-black/[0.07] bg-white transition-shadow duration-500 hover:shadow-[0_24px_60px_rgb(10,25,47,0.12)]"
      >
        <div className="relative aspect-4/3 overflow-hidden">
          <img
            src={image}
            alt={`${property.title}, ${property.location}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {property.listingType === 'For Sale' ? (
              <span className="rounded-full bg-[#0a192f]/85 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur">
                For Sale
              </span>
            ) : (
              <span className="rounded-full bg-[#d4e0b3] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#0a192f]">
                For Rent
              </span>
            )}
            {property.type && (
              <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur">
                {property.type}
              </span>
            )}
          </div>
        </div>

        <div className="p-6">
          <p className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-[#0a192f]">
            {property.location}
          </p>
          <h4 className="mt-2 font-heading font-bold text-[#0a192f]">
            {property.title}
          </h4>

          <p className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-[#0a192f]">
            {property.area}
          </p>

          {property.highlights?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {property.highlights.slice(0, 3).map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-black/10 px-3 py-1 text-xs font-semibold text-[#0a192f]"
                >
                  {h}
                </span>
              ))}
            </div>
          )}

          <div className="mt-5 flex items-center justify-between border-t border-black/6 pt-4">
            <p className="font-heading text-lg font-bold text-[#0a192f]">
              {property.price || 'On request'}
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#748c70] transition-colors duration-300 group-hover:text-[#0a192f]">
              View Property
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}