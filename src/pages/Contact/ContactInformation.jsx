import { Reveal, Overline } from '../../components/Reveal.jsx'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const INFO = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Patna, Bihar, India',
    note: 'Detailed site visit address shared on scheduling',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 1234567890',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'realestategurukripa@gmail.com',
  },
  {
    icon: Clock,
    label: 'Opening Hours',
    value: 'Monday – Saturday: 09:30 – 19:30',
    note: 'Sunday: By appointment',
  },
]

export default function ContactInformation() {
  return (
    <section data-testid="contact-info" className="scroll-mt-12 bg-[#f9fafb] px-5 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <Overline>Contact Information</Overline>
          <h2 className="mt-6 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-5xl">
            Get in touch
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {INFO.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.label} delay={i * 0.08}>
                <div className="flex flex-col rounded-2xl border border-black/6 bg-white p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a192f] text-[#d4e0b3]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#748c70]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-base font-semibold text-[#0a192f]">{item.value}</p>
                  {item.note && (
                    <p className="mt-1 text-sm text-[#4b5563]">{item.note}</p>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
