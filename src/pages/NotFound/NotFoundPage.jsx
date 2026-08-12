import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="font-heading text-6xl font-extrabold tracking-tight text-[#748c70] sm:text-7xl">
          404
        </p>

        <h1 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-[#0a192f] sm:text-5xl">
          Page not found
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-[#4b5563] sm:text-lg">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to our properties.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="group flex items-center justify-center gap-2 rounded-full bg-[#0a192f] px-7 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-[#748c70]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back Home
          </Link>

          {/* <Link
            to="/properties"
            className="group flex items-center justify-center gap-2 rounded-full border border-[#0a192f]/20 px-7 py-3.5 font-semibold text-[#0a192f] transition-colors duration-300 hover:border-[#748c70] hover:bg-[#748c70] hover:text-white"
          >
            View Properties
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link> */}
        </div>
      </motion.div>
    </section>
  )
}