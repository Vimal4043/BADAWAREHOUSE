import { Reveal, Overline } from '../../components/Reveal.jsx'

export default function ContactMap() {
  return (
    <section data-testid="contact-map" className="scroll-mt-24 bg-white px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <Overline>Our Location</Overline>
          <h2 className="mt-6 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-5xl">
            Visit our office
          </h2>
        </Reveal>

        <div className="mt-16 overflow-hidden rounded-3xl border border-black/6">
          <div className="relative aspect-video w-full bg-[#f9fafb]">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80&auto=format&fit=crop"
              alt="Map placeholder"
              className="h-full w-full object-cover opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-2xl border border-black/10 bg-white/90 px-8 py-6 text-center backdrop-blur">
                <p className="font-heading text-xl font-bold text-[#0a192f]">Patna, Bihar, India</p>
                <p className="mt-2 text-sm text-[#4b5563]">Detailed site visit address shared on scheduling</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#748c70] px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#5f7a5c]"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
