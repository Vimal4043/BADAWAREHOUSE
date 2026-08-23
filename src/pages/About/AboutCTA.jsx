import { BRAND } from '../../data/properties.js'
import { Reveal } from '../../components/Reveal.jsx'

export default function AboutCTA() {
  return (
    <section data-testid="about-cta" className="scroll-mt-12 bg-white px-5 py-10 md:px-10 md:py-12">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-black/[0.07] bg-[#f9fafb] p-10 md:p-16">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
              <div>
                <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-5xl">
                  Ready to find the right space for your business?
                </h2>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-[#4b5563] md:text-lg">
                  Speak with one of our advisors today. Whether you are leasing a warehouse, acquiring
                  industrial land or buying a commercial building, we bring the market insight and
                  diligence you deserve.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <a
                  href={`tel:${BRAND.phone}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#748c70] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#5f7a5c]"
                >
                  Call {BRAND.phone}
                </a>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#0a192f]/15 px-7 py-3.5 text-sm font-semibold text-[#0a192f] transition-colors duration-300 hover:bg-[#0a192f] hover:text-white"
                >
                  Email {BRAND.email}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
