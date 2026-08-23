import { Reveal, Overline } from "../../components/Reveal.jsx";
import { Phone, Mail, MapPin } from "lucide-react";

const INFO = [
  {
    icon: MapPin,
    label: "Address",
    value: "Patna, Bihar, India",
    href: "https://www.google.com/maps/search/?api=1&query=Patna%2C+Bihar%2C+India",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 1234567890",
    href: "tel:+911234567890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "realestategurukripa@gmail.com",
    href: "mailto:realestategurukripa@gmail.com",
  },
];

export default function ContactInformation() {
  return (
    <section
      data-testid="contact-info"
      className="scroll-mt-12 bg-[#f9fafb] px-5 py-10 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Overline>Contact Information</Overline>

          <h2 className="mt-6 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-5xl">
            Get in touch
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INFO.map((item, i) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.label} delay={i * 0.08}>
                <a
                  href={item.href}
                  target={item.target}
                  rel={item.rel}
                  className="group flex h-full min-w-0 flex-col rounded-2xl border border-black/6 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#748c70]/30 hover:shadow-lg"
                >
                  {/* Icon + Label */}
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0a192f] text-[#d4e0b3] transition-colors duration-300 group-hover:bg-[#748c70]">
                      <Icon className="h-5 w-5" />
                    </span>

                    <p className="text-xs font-semibold uppercase tracking-wide text-[#748c70]">
                      {item.label}
                    </p>
                  </div>

                  {/* Value */}
                  <h5 className="mt-5 break-words text-base font-semibold leading-6 text-[#0a192f] md:text-lg">
                    {item.value}
                  </h5>

                  {item.note && (
                    <p className="mt-1 text-sm text-[#4b5563]">{item.note}</p>
                  )}
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
