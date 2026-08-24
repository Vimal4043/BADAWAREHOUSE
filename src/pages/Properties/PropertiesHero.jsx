import { motion } from 'framer-motion'
import propertyHero from '../../assets/propertyHero.avif'

const HERO_IMG = propertyHero;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.25 } },
}

const lineVar = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function PropertiesHero() {
  return (
    <section
      data-testid="properties-hero"
      className="relative flex min-h-[60vh] items-center justify-center overflow-hidden md:min-h-[70vh]"
    >
      <motion.img
        src={HERO_IMG}
        alt="Industrial warehouse"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/45 to-black/25" />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.04]" />

      <div className="relative z-10 flex flex-col items-center px-5 text-center text-white">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl font-heading text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <motion.span variants={lineVar} className="block">
            Properties
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-5xl text-base leading-relaxed text-white/85 md:text-lg"
        >
          Warehouses, industrial buildings, commercial spaces and industrial land — for rent and
          for sale across key industrial locations.
        </motion.p>
      </div>
    </section>
  )
}