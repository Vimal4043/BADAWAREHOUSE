import { motion } from 'framer-motion'
import { Shield, Handshake, Eye } from 'lucide-react'
import { Reveal, Overline } from '../../components/Reveal.jsx'

const VALUES = [
  {
    icon: Shield,
    title: 'Trust',
    body: 'Every relationship is built on transparency, integrity and consistent delivery. Our clients return to us because we do what we say we will.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    body: 'We do not simply find properties — we walk alongside you, understanding your goals and advocating for your interests at every stage.',
  },
  {
    icon: Eye,
    title: 'Vision',
    body: 'With 13+ years of market insight, we see opportunities others miss and guide you toward decisions that stand the test of time.',
  },
]

export default function AboutValues() {
  return (
    <section data-testid="about-values" className="scroll-mt-12 bg-[#0a192f] px-5 py-10 text-white md:px-10 md:py-12">
      <div className="mx-auto max-w-350">
        <Reveal>
          <Overline light>Our Values</Overline>
          <h2 className="mt-6 max-w-3xl font-heading text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            The principles that guide every decision we make.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {VALUES.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-start gap-5"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#748c70] text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-heading text-xl font-bold">{v.title}</h3>
                <p className="text-[15px] leading-relaxed text-white/70">{v.body}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
