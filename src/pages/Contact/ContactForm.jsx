import { useState } from "react";
import { toast } from "sonner";
import { Send, User, MapPin, Phone, Mail, Building2 } from "lucide-react";

import { Reveal, Overline } from "../../components/Reveal.jsx";
import { PROPERTY_TYPES, BRAND } from "../../data/properties.js";
import { sendForm } from "../../lib/formsubmit.js";

const inputCls =
  "w-full border border-black/10 bg-white px-4 py-3.5 text-[#0a192f] outline-none transition-colors duration-300 placeholder:text-[#0a192f]/35 focus:border-[#748c70] focus:ring-2 focus:ring-[#748c70]/20";

const CONTACT_ITEMS = [
  {
    icon: User,
    label: "Contact Person",
    value: "Nitin Waghmare",
  },
  {
    icon: MapPin,
    label: "Address",
    value: BRAND.address,
    // href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    //   BRAND.address,
    // )}`,
  },
  {
    icon: Phone,
    label: "Call Us",
    value: BRAND.phone,
    href: `tel:${BRAND.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "Any commercial property",
    requirement: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const set = (key) => (e) =>
    setForm((f) => ({
      ...f,
      [key]: e.target.value,
    }));

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await sendForm(
        {
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          interest: form.interest,
          requirement: form.requirement,
          message: form.message,
        },
        "New contact enquiry — BADAWAREHOUSE",
      );

      toast.success("Thanks — we'll be in touch within one business day.");

      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        interest: "Any commercial property",
        requirement: "",
        message: "",
      });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      data-testid="contact-form-section"
      className="scroll-mt-12 bg-white px-5 py-10 md:px-10 md:py-12"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ================================================================
            CONTACT CONTAINER
        ================================================================= */}
        <div className="grid overflow-hidden rounded-2xl border border-black/10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ==============================================================
              LEFT — CONTACT INFORMATION
          =============================================================== */}
          <div className="bg-[#f3f3f3] px-7 py-8 md:px-10 md:py-10 lg:px-12">
            <Reveal>
              <h3 className="text-3xl font-medium tracking-tight text-[#0a192f] md:text-4xl">
                {BRAND.name}
              </h3>

              <div className="mt-4 h-0.5 w-20 bg-[#748c70]" />
            </Reveal>

            <div className="mt-7">
              {CONTACT_ITEMS.map((item, i) => {
                const Icon = item.icon;

                const content = (
                  <>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0a192f] text-[#d4e0b3]">
                      <Icon className="h-4 w-4" />
                    </span>

                    <div className="min-w-0">
                      <h6 className="text-base font-medium text-[#0a192f]">
                        {item.label}
                      </h6>

                      <p
                        className={`mt-1 text-sm leading-6 ${
                          item.href
                            ? "text-[#748c70] underline-offset-4 hover:underline"
                            : "text-[#6b7280]"
                        }`}
                      >
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                return (
                  <Reveal key={item.label} delay={i * 0.07}>
                    <div
                      className={`flex gap-4 border-b border-black/10 py-5 ${
                        i === 0 ? "pt-0" : ""
                      }`}
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.label === "Address" ? "_blank" : undefined
                          }
                          rel={
                            item.label === "Address"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex min-w-0 gap-4"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Property Types */}
            <Reveal delay={0.3}>
              <div className="mt-7">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-[#748c70]" />

                  <h6 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0a192f]">
                    What We Handle
                  </h6>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {PROPERTY_TYPES.map((type) => (
                    <span
                      key={type}
                      className="rounded-full border border-[#0a192f]/10 bg-white px-3 py-1.5 text-xs text-[#4b5563]"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* ==============================================================
              RIGHT — ENQUIRY FORM
          =============================================================== */}
          <div className="bg-white px-7 py-8 md:px-10 md:py-10 lg:px-12">
            <Reveal>
              <Overline>Enquire About a Property</Overline>

              <h3 className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-4xl">
                Send an Enquiry
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#6b7280] md:text-base">
                Tell us what kind of commercial or industrial property you need
                and our team will get back to you.
              </p>
            </Reveal>

            <form onSubmit={submit} data-testid="contact-form" className="mt-7">
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#0a192f]">
                    Your Name <span className="text-red-500">*</span>
                  </span>

                  <input
                    data-testid="contact-name"
                    type="text"
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Your Name"
                    required
                    className={inputCls}
                  />
                </label>

                {/* Company */}
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#0a192f]">
                    Company Name
                  </span>

                  <input
                    data-testid="contact-company"
                    type="text"
                    value={form.company}
                    onChange={set("company")}
                    placeholder="Company Name"
                    className={inputCls}
                  />
                </label>

                {/* Email */}
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#0a192f]">
                    Email <span className="text-red-500">*</span>
                  </span>

                  <input
                    data-testid="contact-email"
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="Email"
                    required
                    className={inputCls}
                  />
                </label>

                {/* Phone */}
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#0a192f]">
                    Phone / Mobile <span className="text-red-500">*</span>
                  </span>

                  <input
                    data-testid="contact-phone"
                    type="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="Phone / Mobile"
                    required
                    className={inputCls}
                  />
                </label>

                {/* Property Interest */}
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-medium text-[#0a192f]">
                    I want to
                  </span>

                  <select
                    data-testid="contact-interest"
                    value={form.interest}
                    onChange={set("interest")}
                    className={inputCls}
                  >
                    <option>Any commercial property</option>

                    {PROPERTY_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}

                    <option>Multiple / not sure</option>
                  </select>
                </label>

                {/* Requirement */}
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-medium text-[#0a192f]">
                    Property Requirement
                  </span>

                  <input
                    data-testid="contact-requirement"
                    type="text"
                    value={form.requirement}
                    onChange={set("requirement")}
                    placeholder="e.g. 50,000 sq ft warehouse for rent with docks"
                    className={inputCls}
                  />
                </label>

                {/* Message */}
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-medium text-[#0a192f]">
                    Enquiry Details <span className="text-red-500">*</span>
                  </span>

                  <textarea
                    data-testid="contact-message"
                    value={form.message}
                    onChange={set("message")}
                    rows={5}
                    placeholder="Tell us about your requirement..."
                    required
                    className={`${inputCls} resize-none`}
                  />
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                data-testid="contact-submit"
                disabled={sending}
                className="group mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-[#0a192f] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#748c70] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Sending…" : "Send Enquiry"}

                {!sending && (
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
