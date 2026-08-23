import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const FORM_ENDPOINT = "https://formsubmit.co/YOUR_EMAIL@example.com";

export default function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="inquiry"
      data-testid="inquiry-section"
      className="bg-[#f5f6f3] py-10 md:py-12"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

            {/* =====================================================
                LEFT — SEND ENQUIRY
            ===================================================== */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex flex-col justify-center overflow-hidden bg-[#748c70] p-8 sm:p-10 md:p-14 lg:p-16"
            >
              {/* Subtle background pattern */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
                <div className="absolute -left-10 top-10 h-40 w-40 rounded-full border-30px border-white" />
                <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full border-40px border-white" />
                <div className="absolute left-1/3 top-1/3 h-24 w-24 rounded-full border-18px border-white" />
              </div>

              <div className="relative z-10">
                {/* Heading */}
                <div className="text-center lg:text-left">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
                    Get in touch
                  </p>

                  <h2 className="mt-4 font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                    Send <span className="text-[#d4e0b3]">Enquiry</span>
                  </h2>

                  <div className="mx-auto mt-4 h-0.5 w-20 bg-white/80 lg:mx-0" />

                  <p className="mt-6 max-w-lg text-sm leading-7 text-white/80 md:text-base">
                    Looking for the right commercial or industrial space? Share
                    your requirement with us and our team will help you find a
                    suitable property.
                  </p>
                </div>

                {/* Property types */}
                <div className="mt-10 grid grid-cols-2 gap-3">
                  {[
                    "Warehouses",
                    "Industrial Buildings",
                    "Commercial Spaces",
                    "Industrial Land",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-center text-xs font-semibold text-white backdrop-blur-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Bottom message */}
                <div className="mt-10 border-t border-white/15 pt-6">
                  <p className="text-sm leading-relaxed text-white/65">
                    Tell us what you need, where you need it and whether you are
                    looking to rent or buy.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =====================================================
                RIGHT — FORM
            ===================================================== */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-white p-5 sm:p-6 md:p-8 lg:p-10"
            >
              {submitted ? (
                <div className="flex min-h-125 flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-14 w-14 text-[#748c70]" />

                  <h3 className="mt-6 font-heading text-2xl font-extrabold text-[#0a192f] md:text-3xl">
                    Thank you for your enquiry.
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[#0a192f]/60 md:text-base">
                    We've received your details and will get back to you
                    shortly.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 rounded-full bg-[#748c70] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#5f7a5c]"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <>
                  {/* Form heading */}
                  {/* <div className="mb-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#748c70]">
                      Enquiry form
                    </p>

                    <h3 className="mt-3 font-heading text-2xl font-extrabold text-[#0a192f] md:text-3xl">
                      Tell us what you need
                    </h3>
                  </div> */}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* FormSubmit */}
                    <input
                      type="hidden"
                      name="_subject"
                      value="New Property Enquiry — BADAWAREHOUSE"
                    />

                    <input
                      type="hidden"
                      name="_captcha"
                      value="false"
                    />

                    <input
                      type="hidden"
                      name="_template"
                      value="table"
                    />

                    {/* Name */}
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Name"
                      aria-label="Name"
                      className="w-full rounded-xl border border-[#0a192f]/10 bg-[#f8f9f7] px-4 py-3.5 text-sm text-[#0a192f] outline-none transition-all placeholder:text-[#0a192f]/40 focus:border-[#748c70] focus:ring-2 focus:ring-[#748c70]/10"
                    />

                    {/* Address */}
                    <input
                      id="address"
                      name="address"
                      type="text"
                      required
                      placeholder="Address"
                      aria-label="Address"
                      className="w-full rounded-xl border border-[#0a192f]/10 bg-[#f8f9f7] px-4 py-3.5 text-sm text-[#0a192f] outline-none transition-all placeholder:text-[#0a192f]/40 focus:border-[#748c70] focus:ring-2 focus:ring-[#748c70]/10"
                    />

                    {/* Email + Phone */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="E-mail"
                        aria-label="Email"
                        className="w-full rounded-xl border border-[#0a192f]/10 bg-[#f8f9f7] px-4 py-3.5 text-sm text-[#0a192f] outline-none transition-all placeholder:text-[#0a192f]/40 focus:border-[#748c70] focus:ring-2 focus:ring-[#748c70]/10"
                      />

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Cell / Ph."
                        aria-label="Phone"
                        className="w-full rounded-xl border border-[#0a192f]/10 bg-[#f8f9f7] px-4 py-3.5 text-sm text-[#0a192f] outline-none transition-all placeholder:text-[#0a192f]/40 focus:border-[#748c70] focus:ring-2 focus:ring-[#748c70]/10"
                      />
                    </div>

                    {/* Country */}
                    <select
                      id="country"
                      name="country"
                      required
                      defaultValue=""
                      aria-label="Country"
                      className="w-full appearance-none rounded-xl border border-[#0a192f]/10 bg-[#f8f9f7] px-4 py-3.5 text-sm text-[#0a192f]/60 outline-none transition-all focus:border-[#748c70] focus:ring-2 focus:ring-[#748c70]/10"
                    >
                      <option value="" disabled>
                        Select Country
                      </option>

                      <option value="India">India</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United States">
                        United States
                      </option>
                      <option value="United Kingdom">
                        United Kingdom
                      </option>
                      <option value="Other">Other</option>
                    </select>

                    {/* Property Type */}
                    <select
                      id="requirement"
                      name="requirement"
                      required
                      defaultValue=""
                      aria-label="Property type"
                      className="w-full appearance-none rounded-xl border border-[#0a192f]/10 bg-[#f8f9f7] px-4 py-3.5 text-sm text-[#0a192f]/60 outline-none transition-all focus:border-[#748c70] focus:ring-2 focus:ring-[#748c70]/10"
                    >
                      <option value="" disabled>
                        Buy a Property
                      </option>

                      <option value="Warehouse">
                        Warehouse
                      </option>

                      <option value="Industrial Building">
                        Industrial Building
                      </option>

                      <option value="Commercial Building">
                        Commercial Building
                      </option>

                      <option value="Industrial Land">
                        Industrial Land
                      </option>
                    </select>

                    {/* Rent / Sale */}
                    <select
                      id="listingType"
                      name="listingType"
                      required
                      defaultValue=""
                      aria-label="Requirement type"
                      className="w-full appearance-none rounded-xl border border-[#0a192f]/10 bg-[#f8f9f7] px-4 py-3.5 text-sm text-[#0a192f]/60 outline-none transition-all focus:border-[#748c70] focus:ring-2 focus:ring-[#748c70]/10"
                    >
                      <option value="" disabled>
                        Requirement Type
                      </option>

                      <option value="For Rent">
                        For Rent
                      </option>

                      <option value="For Sale">
                        For Sale
                      </option>
                    </select>

                    {/* Location */}
                    <input
                      id="location"
                      name="location"
                      type="text"
                      placeholder="Preferred Location"
                      aria-label="Preferred location"
                      className="w-full rounded-xl border border-[#0a192f]/10 bg-[#f8f9f7] px-4 py-3.5 text-sm text-[#0a192f] outline-none transition-all placeholder:text-[#0a192f]/40 focus:border-[#748c70] focus:ring-2 focus:ring-[#748c70]/10"
                    />

                    {/* Message */}
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Detail"
                      aria-label="Additional details"
                      className="w-full resize-none rounded-xl border border-[#0a192f]/10 bg-[#f8f9f7] px-4 py-3.5 text-sm text-[#0a192f] outline-none transition-all placeholder:text-[#0a192f]/40 focus:border-[#748c70] focus:ring-2 focus:ring-[#748c70]/10"
                    />

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#748c70] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#5f7a5c] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <span>
                        {loading ? "Sending..." : "Send Enquiry"}
                      </span>

                      {!loading && (
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}