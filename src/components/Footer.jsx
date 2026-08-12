import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BRAND } from "../data/properties.js";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Properties", to: "/properties" },
  { label: "About", to: "/about" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="bg-[#0a192f] px-5 pb-4 pt-16 text-white md:px-10 md:pt-20"
    >
      <div className="mx-auto max-w-350">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d4e0b3] font-heading text-base font-extrabold text-[#0a192f]">
                B
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-heading text-lg font-extrabold tracking-tight">
                  {BRAND.name}
                </span>
                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-white/40">
                  {BRAND.tagline}
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              A professional platform for finding commercial and industrial
              properties — warehouses, industrial buildings, commercial spaces
              and industrial land.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.label}>
                  <Link
                    to={n.to}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors duration-300 hover:text-[#d4e0b3]"
                  >
                    {n.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="transition-colors duration-300 hover:text-[#d4e0b3]"
                >
                  {BRAND.email}
                </a>
              </li>
              <a href="tel:+911234567890">{BRAND.phone}</a>
              <li className="mt-2 leading-relaxed text-white/50">{BRAND.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-7 text-xs text-white/40 md:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. Built for growing
            businesses.
          </p>
          <p>Commercial &amp; Industrial Properties · Privacy · Terms</p>
        </div>
      </div>
    </footer>
  );
}
