import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BRAND } from "../data/properties.js";
import logo from "../assets/badawarehouse-logo.png";

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
      className="bg-[#0a192f] pb-4 pt-16 text-white md:pt-20"
    >
      {/* Main container */}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand / About */}
          <div>
            <Link to="/" className="inline-flex items-center">
              <img
                src={logo}
                alt="BADAWAREHOUSE"
                className="h-14 w-auto object-contain md:h-18"
              />
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              A professional platform for finding commercial and industrial
              properties — warehouses, industrial buildings, commercial spaces
              and industrial land.
            </p>
          </div>

          {/* Navigation */}
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

                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
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

              <li>
                <a
                  href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                  className="transition-colors duration-300 hover:text-[#d4e0b3]"
                >
                  {BRAND.phone}
                </a>
              </li>

              <li className="mt-2 leading-relaxed text-white/50">
                {BRAND.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-7 text-center text-xs text-white/40 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. Built for growing
            businesses.
          </p>

          <p>
            Commercial &amp; Industrial Properties · Privacy · Terms
          </p>
        </div>
      </div>
    </footer>
  );
}