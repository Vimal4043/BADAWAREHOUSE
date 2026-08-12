import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../../components/Navbar.jsx'
import PropertiesHero from './PropertiesHero.jsx'
import PropertiesFilters from './PropertiesFilters.jsx'
import PropertiesGrid from './PropertiesGrid.jsx'
import PropertiesCTA from './PropertiesCTA.jsx'
import { PROPERTIES } from '../../data/properties.js'

export default function PropertiesPage() {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState(() => ({
    type: searchParams.get('type') || 'all',
    listingType: searchParams.get('availability') || 'all',
    location: searchParams.get('location') || 'all',
    query: '',
  }))

  const filtered = PROPERTIES.filter((p) => {
    if (filters.type !== 'all' && p.type !== filters.type) return false
    if (filters.listingType !== 'all' && p.listingType !== filters.listingType) return false
    if (filters.location !== 'all') {
      const hay = `${p.location} ${p.city}`.toLowerCase()
      if (!hay.includes(filters.location.toLowerCase())) return false
    }
    if (filters.query.trim()) {
      const q = filters.query.toLowerCase()
      const hay = `${p.title} ${p.location} ${p.city} ${p.description || ''}`.toLowerCase()
      if (!hay.includes(q)) return false
    }
    return true
  })

  return (
    <>
      <main>
        <PropertiesHero />
        <PropertiesFilters filters={filters} onChange={setFilters} />
        <PropertiesGrid properties={filtered} />
        <PropertiesCTA />
      </main>
    </>
  )
}