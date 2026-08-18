import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PropertyCard from "../../components/PropertyCard.jsx";
import { PROPERTIES } from "../../data/properties.js";

export default function FeaturedProperties() {
  const featured = PROPERTIES.filter((p) => p.featured).slice(0, 3);

  return (
    <section
      id="featured"
      data-testid="featured-section"
      className="scroll-mt-24 bg-white py-8 md:py-12"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#748c70]">
              Featured Properties
            </p>

            <h2 className="mt-4 max-w-5xl font-heading text-xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-4xl">
              Commercial &amp; industrial spaces, ready for business.
            </h2>
          </div>

          {/* View all button */}
          <Link
            to="/properties"
            data-testid="featured-view-all"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#0a192f]/15 bg-[#0a192f] px-7 py-3.5 text-sm font-semibold text-white"
          >
            {/* Green sweep */}
            <span className="absolute inset-y-0 left-0 w-[115%] translate-x-[-105%] -skew-x-12 rounded-full bg-[#748c70] transition-transform duration-500 ease-out group-hover:translate-x-[-5%]" />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
              View all properties
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>

        {/* Featured property cards */}
        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <PropertyCard key={p.id} property={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
