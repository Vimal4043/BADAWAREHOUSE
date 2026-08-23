import { BRAND } from "../../data/properties.js";
import { Reveal, Overline } from "../../components/Reveal.jsx";

import aboutImage from "../../assets/about.jpg";

export default function AboutIntroduction() {
  return (
    <section
      data-testid="about-intro"
      className="scroll-mt-12 bg-white px-5 py-12 md:px-10 md:py-12"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Page Title */}
        <Reveal>
          <h2 className="font-heading text-4xl font-medium tracking-tight text-[#0a192f] md:text-5xl">
            About Us
          </h2>
        </Reveal>

        {/* Main Content */}
        <div className="mt-5 grid items-start gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-10">
          {/* Left - Content */}
          <Reveal>
            <div className="text-[#24344d]">
              <p className="text-base leading-7 md:text-lg">
                <strong>{BRAND.name}</strong> is a commercial and industrial
                real estate platform focused on helping businesses find spaces
                that fit their operational requirements. We work across
                warehouses, industrial buildings, commercial spaces and
                industrial land, providing practical support throughout the
                property search and transaction process.
              </p>

              <p className="mt-4 text-base leading-7 md:text-lg">
                Our approach combines local market knowledge with a
                business-focused understanding of what makes a property suitable
                for its intended use. Whether a business is looking to lease a
                warehouse, acquire industrial land or secure an industrial
                building, we help identify relevant options and support the
                process from initial enquiry through site visits and handover.
              </p>

              <p className="mt-4 text-base leading-7 md:text-lg">
                We operate across key industrial and commercial locations in
                Maharashtra, with a focus on properties that offer practical
                connectivity, suitable infrastructure and long-term value for
                businesses.
              </p>

              <p className="mt-4 text-base leading-7 md:text-lg">
                Our goal is simple: to make the process of finding commercial
                and industrial property clearer, more efficient and aligned with
                the real needs of every business we work with.
              </p>
            </div>
          </Reveal>

          {/* Right - Image */}
          <Reveal delay={0.1}>
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-xl p-1.5">
                <img
                  src={aboutImage}
                  alt={`${BRAND.name} commercial and industrial property`}
                  className="h-auto max-h-100 w-full rounded-lg object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
