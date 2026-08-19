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
      className="flex items-center"
    >
      <img
        src={logo}
        alt="BADAWAREHOUSE"
        className="h-14 w-auto object-contain md:h-18"
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

  return (
    <header
      data-testid="navbar"
      className="fixed inset-x-0 top-0 z-50 bg-white text-[#0a192f] shadow-[0_1px_0_rgb(10,25,47,0.08)]"
    >
      {/* =========================================================
          NAVBAR CONTENT
          ========================================================= */}
      <div className="mx-auto flex h-19 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Brand */}
        <Brand />

        {/* =====================================================
            DESKTOP NAVIGATION
            ===================================================== */}
        <nav className="hidden items-center gap-11 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className="text-md font-medium text-[#0a192f] transition-colors duration-300 hover:text-[#748c70]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* =====================================================
            DESKTOP PHONE BUTTON
            ===================================================== */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
            className="group inline-flex items-center gap-2 rounded-full border border-[#0a192f]/15 px-5 py-2.5 text-sm font-semibold text-[#0a192f] transition-all duration-300 hover:border-[#748c70] hover:bg-[#748c70] hover:text-white"
          >
            <Phone className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            Enquire
          </a>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
            ===================================================== */}
        <button
          type="button"
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#0a192f] transition-colors hover:bg-[#f5f6f3] lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* =======================================================
          MOBILE MENU
          ======================================================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-60 flex flex-col bg-white text-[#0a192f] lg:hidden"
          >
            {/* Mobile menu header */}
            <div className="mx-auto flex h-19 w-full max-w-7xl items-center justify-between px-5 sm:px-6">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="flex items-center"
              >
                <img
                  src={logo}
                  alt="BADAWAREHOUSE"
                  className="h-14 w-auto object-contain"
                />
              </Link>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#0a192f] transition-colors hover:bg-[#f5f6f3]"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile navigation */}
            <nav className="mx-auto flex w-full max-w-7xl flex-col px-5 pt-6 sm:px-6">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.07,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    to={l.to}
                    data-testid={`nav-mobile-${l.label.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-[#0a192f]/10 py-5 font-heading text-2xl font-extrabold tracking-tight text-[#0a192f] transition-colors hover:text-[#748c70]"
                  >
                    {l.label}

                    <ArrowUpRight className="h-6 w-6 text-[#748c70]" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile phone button */}
            <div className="mx-auto mt-auto w-full max-w-7xl p-5 sm:p-6">
              <a
                href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-[#748c70] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#5f7a5c]"
              >
                <Phone className="h-4 w-4" />
                Enquire
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}