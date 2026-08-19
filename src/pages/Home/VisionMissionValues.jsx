import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Eye,
    title: "Vision",
    text: "BADAWAREHOUSE is a flourishing name in the commercial and industrial property space. The company got established with a sole motive to make the commercial property trading process simple and affordable for all.",
  },
  {
    icon: Target,
    title: "Mission",
    text: "BADAWAREHOUSE is committed to providing reliable commercial and industrial property solutions. Client satisfaction is our foremost priority. And, to achieve that, we modify our approach according to the requirements of our clients.",
  },
  {
    icon: ShieldCheck,
    title: "Values",
    text: "At BADAWAREHOUSE, we majorly operate around key industrial locations and commercial hubs. We believe in transparency, reliability, responsiveness and building long-term relationships with our clients.",
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
      className="bg-white py-12 md:py-16"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        
        {/* Heading */}
        {/* <div className="mb-10 max-w-3xl md:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#748c70]">
            What drives us
          </p>

          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-[1.08] tracking-tight text-[#0a192f] sm:text-4xl md:text-5xl">
            Built on trust.
            <br />
            Focused on business.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#0a192f]/60 md:text-base">
            We focus on making commercial and industrial property decisions
            simpler by connecting businesses with spaces that match their
            operational needs.
          </p>
        </div> */}

        {/* =====================================================
            VISION / MISSION / VALUES
        ===================================================== */}
        <div className="grid overflow-hidden rounded-3xl md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            const isMiddle = index === 1;

            return (
              <motion.article
                key={item.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`flex min-h-75 flex-col items-center px-7 py-10 text-center transition-all duration-500 sm:px-10 sm:py-12 ${
                  isMiddle
                    ? "bg-[#748c70] text-white"
                    : "bg-[#0a192f] text-white"
                }`}
              >
                {/* Icon */}
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full border-2 ${
                    isMiddle
                      ? "border-white/70 bg-white text-[#0a192f]"
                      : "border-white/50 bg-white/10 text-[#d4e0b3]"
                  }`}
                >
                  <Icon
                    className="h-9 w-9"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 font-heading text-2xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>

                {/* Divider */}
                <div
                  className={`mt-3 h-px w-11 ${
                    isMiddle ? "bg-white/80" : "bg-white/40"
                  }`}
                />

                {/* Description */}
                <p
                  className={`mt-6 max-w-sm text-sm leading-7 ${
                    isMiddle ? "text-white/90" : "text-white/70"
                  }`}
                >
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