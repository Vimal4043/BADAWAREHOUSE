import { Reveal } from '../../components/Reveal.jsx'

export default function ContactCTA() {
  return (
    <section data-testid="contact-cta" className="scroll-mt-12 bg-[#0a192f] px-5 py-10 text-white md:px-10 md:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Prefer to speak directly?
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-base leading-relaxed text-white/70 md:text-lg">
            Our advisors are available Monday–Saturday, 09:30–19:30. Sunday appointments by request.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+911234567890"
              className="inline-flex items-center gap-2 rounded-full bg-[#748c70] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#5f7a5c]"
            >
              Call +91 1234567890
            </a>
            <a
              href="mailto:realestategurukripa@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#0a192f]"
            >
              Email us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
