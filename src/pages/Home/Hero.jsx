import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import homeHero from "../../assets/homeHero.avif";

const HERO_IMG = homeHero;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.25 } },
};

const lineVar = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative flex min-h-svh w-full items-center justify-center overflow-hidden"
    >
      {/* Full-width hero image */}
      <motion.img
        src={HERO_IMG}
        alt="Industrial warehouse interior"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/45 to-black/25" />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.04]" />

      {/* Content inside constant container */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-5 text-center text-white sm:px-6 lg:px-8">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl font-heading text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <motion.span variants={lineVar} className="block">
            Commercial spaces
          </motion.span>

          <motion.span variants={lineVar} className="block">
            built for <span className="text-[#d4e0b3]">business.</span>
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg"
        >
          Warehouses, industrial buildings, commercial spaces and industrial
          land — for rent and for sale across key industrial locations.
        </motion.p>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.05,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            to="/properties"
            className="group flex items-center justify-center gap-3 rounded-full bg-[#748c70] px-7 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-[#d4e0b3] hover:text-[#0a192f]"
          >
            View Properties
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            to="/contact"
            className="group flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-[#0a192f]"
          >
            Contact Us
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white">
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
          Scroll
        </span>

        <ArrowDown className="h-4 w-4 animate-floaty" />
      </div>
    </section>
  );
}