import { Reveal } from '../../../components/Reveal.jsx'

export default function PropertyDescription({ property }) {
  if (!property.description) return null

  return (
    <section data-testid="property-description" className="scroll-mt-24 bg-white px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="font-heading text-2xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-4xl">
            Description
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#4b5563] md:text-lg">
            {property.description}
          </p>
        </Reveal>
      </div>
    </section>
  )
}