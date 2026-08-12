import { useState } from 'react'
import { toast } from 'sonner'
import { Send } from 'lucide-react'
import { Reveal, Overline } from '../../components/Reveal.jsx'
import { PROPERTY_TYPES } from '../../data/properties.js'

const inputCls =
  'w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-[#0a192f] outline-none transition-colors duration-300 placeholder:text-[#0a192f]/35 focus:border-[#748c70] focus:ring-2 focus:ring-[#748c70]/20'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: 'Any commercial property',
    requirement: '',
    message: '',
  })

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    toast.success("Thanks — we'll be in touch within one business day.")
    setForm({
      name: '',
      company: '',
      email: '',
      phone: '',
      interest: 'Any commercial property',
      requirement: '',
      message: '',
    })
  }

  return (
    <section data-testid="contact-form-section" className="scroll-mt-24 bg-white px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Overline>Enquire About a Property</Overline>
          <h2 className="mt-6 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-5xl">
            Send an Enquiry
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#4b5563] md:text-lg">
            Tell us about the commercial or industrial space you need — warehouses, industrial
            buildings, commercial spaces or industrial land — and our advisors will respond.
          </p>
        </Reveal>

        <form onSubmit={submit} data-testid="contact-form" className="mt-16">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[#0a192f]">Name</span>
              <input
                data-testid="contact-name"
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
                data-testid="contact-company"
                type="text"
                value={form.company}
                onChange={set('company')}
                placeholder="Enter your company name"
                className={inputCls}
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[#0a192f]">Email</span>
              <input
                data-testid="contact-email"
                type="email"
                value={form.email}
                onChange={set('email')}
                placeholder="Enter your email"
                required
                className={inputCls}
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[#0a192f]">Phone</span>
              <input
                data-testid="contact-phone"
                type="tel"
                value={form.phone}
                onChange={set('phone')}
                placeholder="Enter your phone number"
                required
                className={inputCls}
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-[#0a192f]">
                Property Interested In
              </span>
              <select
                data-testid="contact-interest"
                value={form.interest}
                onChange={set('interest')}
                className={inputCls}
              >
                <option>Any commercial property</option>
                {PROPERTY_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
                <option>Multiple / not sure</option>
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-[#0a192f]">Requirement</span>
              <input
                data-testid="contact-requirement"
                type="text"
                value={form.requirement}
                onChange={set('requirement')}
                placeholder="e.g. 50,000 sq ft warehouse for rent with docks"
                className={inputCls}
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-medium text-[#0a192f]">Message</span>
            <textarea
              data-testid="contact-message"
              value={form.message}
              onChange={set('message')}
              rows={5}
              placeholder="Tell us more about your requirements and preferred location..."
              required
              className={`${inputCls} resize-none`}
            />
          </label>

          <button
            type="submit"
            data-testid="contact-submit"
            className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0a192f] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#748c70] hover:-translate-y-0.5"
          >
            Send Enquiry
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </form>
      </div>
    </section>
  )
}
