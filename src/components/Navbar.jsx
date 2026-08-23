import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { BRAND } from "../data/properties.js";
import logo from "../assets/badawarehouse-logo.png";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Properties", to: "/properties" },
  { label: "About", to: "/about" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

function Brand({ onClick }) {
  return (
    <Link
      to="/"
      data-testid="nav-home"
      onClick={onClick}
      className="flex min-w-0 shrink-0 items-center"
    >
      <img
        src={logo}
        alt="BADAWAREHOUSE"
        className="h-11 w-auto object-contain sm:h-12 xl:h-14"
      />
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const phoneHref = `tel:${BRAND.phone.replace(/\s+/g, "")}`;

  return (
    <header
      data-testid="navbar"
      className="fixed inset-x-0 top-0 z-50 bg-white text-[#0a192f] shadow-[0_1px_0_rgb(10,25,47,0.08)]"
    >
      {/* =========================================================
          MAIN NAVBAR
      ========================================================= */}
      <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Brand />

        {/* =======================================================
            DESKTOP NAVIGATION
            xl = 1280px and above
        ======================================================= */}
        <nav className="hidden items-center gap-7 xl:flex 2xl:gap-9">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              data-testid={`nav-${link.label.toLowerCase()}`}
              className="whitespace-nowrap text-sm font-medium text-[#0a192f] transition-colors duration-300 hover:text-[#748c70] 2xl:text-base"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* =======================================================
            DESKTOP PHONE
        ======================================================= */}
        <div className="hidden xl:flex">
          <a
            href={phoneHref}
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#0a192f]/15 px-4 py-2.5 text-sm font-semibold text-[#0a192f] transition-all duration-300 hover:border-[#748c70] hover:bg-[#748c70] hover:text-white 2xl:px-5"
          >
            <Phone className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />

            <span>{BRAND.phone}</span>
          </a>
        </div>

        {/* =======================================================
            TABLET / MOBILE CONTROLS
            Visible below xl
        ======================================================= */}
        <div className="flex items-center gap-2 xl:hidden">
          {/* Phone */}
          <a
            href={phoneHref}
            onClick={() => setOpen(false)}
            aria-label={`Call ${BRAND.phone}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#748c70] text-white transition-colors duration-300 hover:bg-[#5f7a5c] sm:h-11 sm:w-11"
          >
            <Phone className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
          </a>

          {/* Menu */}
          <button
            type="button"
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#0a192f] transition-colors hover:bg-[#f5f6f3] sm:h-11 sm:w-11"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* =========================================================
          MOBILE / TABLET MENU
      ========================================================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex min-h-screen flex-col overflow-y-auto bg-white text-[#0a192f] xl:hidden"
          >
            {/* -----------------------------------------------------
                MENU HEADER
            ----------------------------------------------------- */}
            <div className="mx-auto flex h-[76px] w-full max-w-7xl shrink-0 items-center justify-between px-4 sm:px-6 lg:px-8">
              <Brand onClick={() => setOpen(false)} />

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#0a192f] transition-colors hover:bg-[#f5f6f3] sm:h-11 sm:w-11"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* -----------------------------------------------------
                MOBILE NAVIGATION
            ----------------------------------------------------- */}
            <nav className="mx-auto flex w-full max-w-7xl flex-col px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8">
              {LINKS.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 + index * 0.06,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    to={link.to}
                    data-testid={`nav-mobile-${link.label.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-[#0a192f]/10 py-5 font-heading text-xl font-extrabold tracking-tight text-[#0a192f] transition-colors hover:text-[#748c70] sm:py-6 sm:text-2xl"
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight className="h-5 w-5 shrink-0 text-[#748c70] sm:h-6 sm:w-6" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* -----------------------------------------------------
                MOBILE CONTACT AREA
            ----------------------------------------------------- */}
            <div className="mx-auto mt-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <div className="border-t border-[#0a192f]/10 pt-5 sm:pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#748c70]">
                  Call us
                </p>

                <a
                  href={phoneHref}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#748c70] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#5f7a5c]"
                >
                  <Phone className="h-4 w-4" />
                  {BRAND.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
