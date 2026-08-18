import { Mail, MapPin, Phone } from "lucide-react";
import { BRAND } from "../../data/properties.js";

const contactItems = [
  {
    icon: MapPin,
    title: "Location",
    content: BRAND.address,
  },
  {
    icon: Phone,
    title: "Mobile",
    content: BRAND.phone,
    href: `tel:${BRAND.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: Mail,
    title: "Email",
    content: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
];

export default function ContactInfo() {
  return (
    <section
      id="contact-info"
      data-testid="contact-info-section"
      className="bg-[#f5f6f3] text-[#0a192f]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#748c70]/25 bg-[#748c70] text-white shadow-sm">
                  <Icon className="h-7 w-7" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="mt-5 font-heading text-xl font-bold text-[#0a192f]">
                  {item.title}
                </h3>

                {/* Content */}
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-2 max-w-sm text-sm leading-relaxed text-[#0a192f]/65 underline-offset-4 transition-colors duration-300 hover:text-[#748c70] hover:underline"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#0a192f]/65">
                    {item.content}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}