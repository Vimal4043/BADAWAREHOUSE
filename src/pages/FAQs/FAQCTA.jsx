import { BRAND } from '../../data/properties.js'
import { Reveal } from '../../components/Reveal.jsx'

export default function FAQCTA() {
  return (
    <section data-testid="faq-cta" className="scroll-mt-12 bg-[#0a192f] px-5 py-10 text-white md:px-10 md:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Still have questions?
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-base leading-relaxed text-white/70 md:text-lg">
            Our team is here to help. Reach out directly and we will get back to you promptly.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${BRAND.phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#748c70] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#5f7a5c]"
            >
              Call {BRAND.phone}
            </a>
            <a
              href={`mailto:badawarehouse@gmail.com`}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#0a192f]"
            >
              Email badawarehouse@gmail.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
