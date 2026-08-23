import { Search, X } from 'lucide-react'
import { PROPERTY_TYPES, AVAILABILITY, LOCATIONS } from '../../data/properties.js'

const inputCls =
  'w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-[#0a192f] outline-none transition-colors duration-300 focus:border-[#748c70] focus:ring-2 focus:ring-[#748c70]/20'

export default function PropertiesFilters({ filters, onChange }) {
  const set = (key) => (e) => onChange({ ...filters, [key]: e.target.value })

  const reset = () =>
    onChange({ type: 'all', location: 'all', listingType: 'all', query: '' })

  return (
    <section data-testid="properties-filters" className="scroll-mt-12 bg-[#f9fafb] px-5 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-black/6 bg-white p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-[#748c70]">
                Property type
              </label>
              <select
                value={filters.type}
                onChange={set('type')}
                data-testid="filter-type"
                className={inputCls}
              >
                <option value="all">All types</option>
                {PROPERTY_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-[#748c70]">
                Availability
              </label>
              <select
                value={filters.listingType}
                onChange={set('listingType')}
                data-testid="filter-availability"
                className={inputCls}
              >
                <option value="all">Rent or Sale</option>
                {AVAILABILITY.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-[#748c70]">
                Location
              </label>
              <select
                value={filters.location}
                onChange={set('location')}
                data-testid="filter-location"
                className={inputCls}
              >
                <option value="all">All locations</option>
                {LOCATIONS.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-[#748c70]">
                Keyword
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#748c70]" />
                <input
                  type="text"
                  value={filters.query}
                  onChange={set('query')}
                  placeholder="Search by name or location"
                  data-testid="filter-keyword"
                  className={`${inputCls} pl-10`}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-end gap-4">
            <button
              type="button"
              onClick={reset}
              data-testid="filter-reset"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 text-sm font-semibold text-[#0a192f] transition-colors duration-300 hover:bg-[#0a192f] hover:text-white"
            >
              <X className="h-4 w-4" />
              Reset filters
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}