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
      className="bg-[#f5f6f3] py-8 md:py-10"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-[#0a192f]">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left content */}
            <div className="flex flex-col justify-center p-8 sm:p-10 md:p-14 lg:p-16">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d4e0b3]">
                Get in touch
              </p>

              <h2 className="mt-5 max-w-lg font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Looking for the right space for your business?
              </h2>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
                Tell us what you're looking for and our team will get back to
                you with suitable commercial and industrial property options.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/75">
                  Warehouses
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/75">
                  Industrial Buildings
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/75">
                  Commercial Spaces
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/75">
                  Industrial Land
                </span>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12">
              {submitted ? (
                <div className="flex min-h-112 flex-col items-center justify-center text-center">
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
                  <div className="mb-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#748c70]">
                      Enquiry form
                    </p>

                    <h3 className="mt-3 font-heading text-2xl font-extrabold text-[#0a192f] md:text-3xl">
                      Tell us what you need
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Required FormSubmit fields */}
                    <input
                      type="hidden"
                      name="_subject"
                      value="New Property Enquiry — BADAWAREHOUSE"
                    />

                    <input type="hidden" name="_captcha" value="false" />

                    <input type="hidden" name="_template" value="table" />

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-[#0a192f]"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl border border-[#0a192f]/10 bg-[#f8f9f7] px-4 py-3.5 text-sm text-[#0a192f] outline-none transition-all placeholder:text-[#0a192f]/35 focus:border-[#748c70] focus:ring-2 focus:ring-[#748c70]/10"
                      />
                    </div>

                    {/* Email + Phone */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-semibold text-[#0a192f]"
                        >
                          Email
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          className="w-full rounded-xl border border-[#0a192f]/10 bg-[#f8f9f7] px-4 py-3.5 text-sm text-[#0a192f] outline-none transition-all placeholder:text-[#0a192f]/35 focus:border-[#748c70] focus:ring-2 focus:ring-[#748c70]/10"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-semibold text-[#0a192f]"
                        >
                          Phone
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+91"
                          className="w-full rounded-xl border border-[#0a192f]/10 bg-[#f8f9f7] px-4 py-3.5 text-sm text-[#0a192f] outline-none transition-all placeholder:text-[#0a192f]/35 focus:border-[#748c70] focus:ring-2 focus:ring-[#748c70]/10"
                        />
                      </div>
                    </div>

                    {/* Requirement */}
                    <div>
                      <label
                        htmlFor="requirement"
                        className="mb-2 block text-sm font-semibold text-[#0a192f]"
                      >
                        Looking for
                      </label>

                      <select
                        id="requirement"
                        name="requirement"
                        required
                        defaultValue=""
                        className="w-full appearance-none rounded-xl border border-[#0a192f]/10 bg-[#f8f9f7] px-4 py-3.5 text-sm text-[#0a192f] outline-none transition-all focus:border-[#748c70] focus:ring-2 focus:ring-[#748c70]/10"
                      >
                        <option value="" disabled>
                          Select property type
                        </option>

                        <option value="Warehouse">Warehouse</option>
                        <option value="Industrial Building">
                          Industrial Building
                        </option>
                        <option value="Commercial Building">
                          Commercial Building
                        </option>
                        <option value="Industrial Land">Industrial Land</option>
                      </select>
                    </div>

                    {/* Rent / Sale */}
                    <div>
                      <label
                        htmlFor="listingType"
                        className="mb-2 block text-sm font-semibold text-[#0a192f]"
                      >
                        Requirement type
                      </label>

                      <select
                        id="listingType"
                        name="listingType"
                        required
                        defaultValue=""
                        className="w-full appearance-none rounded-xl border border-[#0a192f]/10 bg-[#f8f9f7] px-4 py-3.5 text-sm text-[#0a192f] outline-none transition-all focus:border-[#748c70] focus:ring-2 focus:ring-[#748c70]/10"
                      >
                        <option value="" disabled>
                          Select requirement
                        </option>

                        <option value="For Rent">For Rent</option>
                        <option value="For Sale">For Sale</option>
                      </select>
                    </div>

                    {/* Location */}
                    <div>
                      <label
                        htmlFor="location"
                        className="mb-2 block text-sm font-semibold text-[#0a192f]"
                      >
                        Preferred location
                      </label>

                      <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="e.g. Taloja, Bhiwandi, Khopoli"
                        className="w-full rounded-xl border border-[#0a192f]/10 bg-[#f8f9f7] px-4 py-3.5 text-sm text-[#0a192f] outline-none transition-all placeholder:text-[#0a192f]/35 focus:border-[#748c70] focus:ring-2 focus:ring-[#748c70]/10"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-semibold text-[#0a192f]"
                      >
                        Additional details
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Tell us about your space, area requirement, budget, etc."
                        className="w-full resize-none rounded-xl border border-[#0a192f]/10 bg-[#f8f9f7] px-4 py-3.5 text-sm text-[#0a192f] outline-none transition-all placeholder:text-[#0a192f]/35 focus:border-[#748c70] focus:ring-2 focus:ring-[#748c70]/10"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#748c70] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#5f7a5c] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <span>{loading ? "Sending..." : "Send Enquiry"}</span>

                      {!loading && (
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
