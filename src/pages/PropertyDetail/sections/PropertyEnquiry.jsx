import { useState } from 'react'
import { toast } from 'sonner'
import { Reveal } from '../../../components/Reveal.jsx'

const inputCls =
  'w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-[#0a192f] outline-none transition-colors duration-300 placeholder:text-[#0a192f]/35 focus:border-[#748c70] focus:ring-2 focus:ring-[#748c70]/20'

export default function PropertyEnquiry({ property }) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirement: '',
  })

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    toast.success('Thank you. Our team will contact you shortly about this property.')
    setForm({ name: '', company: '', email: '', phone: '', requirement: '' })
  }

  return (
    <section data-testid="property-enquiry" className="scroll-mt-24 bg-white px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="rounded-3xl border border-black/[0.07] bg-[#f9fafb] p-8 md:p-12">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-5xl">
                Enquire About This Property
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#4b5563] md:text-lg">
                Interested in {property.title}? Submit an enquiry and our advisors will share full
                details and arrange a site visit.
              </p>
            </div>

            <form onSubmit={submit} data-testid="property-enquiry-form" className="mt-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#0a192f]">Full Name</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={set('name')}
                    placeholder="Enter your full name"
                    required
                    className={inputCls}
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#0a192f]">Company Name</span>
                  <input
                    type="text"
                    value={form.company}
                    onChange={set('company')}
                    placeholder="Enter your company name"
                    className={inputCls}
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#0a192f]">Email Address</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    placeholder="Enter your email"
                    required
                    className={inputCls}
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#0a192f]">Phone Number</span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={set('phone')}
                    placeholder="Enter your phone number"
                    required
                    className={inputCls}
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-medium text-[#0a192f]">Requirement</span>
                <textarea
                  value={form.requirement}
                  onChange={set('requirement')}
                  rows={4}
                  placeholder="Tell us about your requirements and preferred terms..."
                  required
                  className={`${inputCls} resize-none`}
                />
              </label>

              <button
                type="submit"
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0a192f] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#748c70] hover:-translate-y-0.5 sm:w-auto"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}