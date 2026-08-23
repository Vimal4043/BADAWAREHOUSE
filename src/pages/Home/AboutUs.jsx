import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1600&q=85&auto=format&fit=crop";

export default function AboutUs() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="bg-[#f5f6f3] py-10 md:py-12"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* =====================================================
              IMAGE
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <img
              src={ABOUT_IMG}
              alt="Commercial and industrial property"
              className="aspect-4/3 w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* =====================================================
              CONTENT
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#748c70]">
              About Us
            </p>

            <h2 className="mt-5 max-w-xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] sm:text-4xl md:text-5xl">
              About BADAWAREHOUSE
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-7 text-[#0a192f]/65 md:text-base">
              <p>
                BADAWAREHOUSE is a flourishing name in the commercial and
                industrial property space. The company was established with a
                sole motive to make the commercial property trading process
                simple and affordable for all.
              </p>

              <p>
                We provide professional property solutions for buying,
                selling, and renting all types and sizes of commercial and
                industrial properties, including warehouses, industrial
                buildings, commercial spaces and industrial land.
              </p>

              <p>
                Working with a clear understanding of business requirements,
                we focus on providing reliable property options and making the
                entire property search process straightforward, transparent
                and responsive for our clients.
              </p>
            </div>

            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#748c70] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#5f7a5c]"
            >
              Know more about us

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}