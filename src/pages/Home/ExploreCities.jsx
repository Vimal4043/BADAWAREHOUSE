import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { HUBS } from '../../data/properties.js'

export default function ExploreCities() {
  return (
    <section data-testid="explore-cities-section" className="scroll-mt-24 bg-[#f9fafb] px-5 py-10 md:px-10 md:py-20">
      <div className="mx-auto max-w-350">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#748c70]">
          Business Locations
        </p>
        <h2 className="mt-6 max-w-full font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-5xl">
          Industrial hubs worth locating to.
        </h2>
        <p className="mt-4 max-w-5xl text-base leading-relaxed text-[#4b5563] md:text-lg">
          Strategically placed warehouses, industrial buildings and land across Maharashtra&apos;s key
          logistics and manufacturing corridors.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HUBS.map((c, i) => (
            <motion.a
              key={c.name}
              href="/properties"
              data-testid={`location-${c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-4/5 overflow-hidden rounded-3xl"
            >
              <img
                src={c.image}
                alt={`${c.name} commercial properties`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/70" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
                <div>
                  <h3 className="font-heading text-xl font-extrabold tracking-tight">{c.name}</h3>
                  <p className="mt-1 text-xs text-white/70">{c.descriptor}</p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-colors duration-300 group-hover:bg-[#d4e0b3] group-hover:text-[#0a192f]">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
