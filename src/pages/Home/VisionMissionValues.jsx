import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Eye,
    title: "Our Vision",
    text: "To become a trusted destination for commercial and industrial properties by connecting businesses with spaces that support long-term growth.",
  },
  {
    icon: Target,
    title: "Our Mission",
    text: "To provide businesses with suitable warehouses, industrial buildings, commercial spaces and land through a transparent and reliable property experience.",
  },
  {
    icon: ShieldCheck,
    title: "Our Values",
    text: "We believe in transparency, reliability, responsiveness and building long-term relationships with every client we work with.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function VisionMissionValues() {
  return (
    <section
      id="vision-mission-values"
      data-testid="vision-mission-values-section"
      className="bg-white py-8 md:py-10"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#748c70]">
              What drives us
            </p>

            <h2 className="mt-4 max-w-3xl font-heading text-3xl font-extrabold leading-[1.08] tracking-tight text-[#0a192f] sm:text-4xl md:text-5xl lg:text-[54px]">
              Built on trust.
              <br />
              Focused on business.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#0a192f]/60 md:pb-1 md:text-base">
            We focus on making commercial and industrial property decisions
            simpler by connecting businesses with spaces that match their
            operational needs.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="group rounded-3xl border border-[#0a192f]/10 bg-[#f6f7f4] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#748c70]/40 hover:bg-[#0a192f] sm:p-8"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#748c70]/15 text-[#748c70] transition-all duration-500 group-hover:bg-[#748c70] group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>

                  <h3 className="font-heading text-xl font-extrabold tracking-tight text-[#0a192f] transition-colors duration-500 group-hover:text-white sm:text-2xl">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-6 text-sm leading-7 text-[#0a192f]/60 transition-colors duration-500 group-hover:text-white/65">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}