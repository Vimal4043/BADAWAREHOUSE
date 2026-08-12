import { Reveal, Overline } from '../../components/Reveal.jsx'

const STORY = [
  {
    n: '01',
    title: 'Our Beginning',
    body: 'Established in Patna, BADAWAREHOUSE began as a boutique real-estate consultancy. Over time our work has focused on commercial and industrial property — warehouses, industrial buildings, commercial spaces and industrial land — helping businesses relocate and expand with confidence.',
  },
  {
    n: '02',
    title: 'Our People',
    body: 'Led by Mr. Kundan Mukherjee, our team combines deep experience across commercial, industrial and investment real estate. Every advisor is chosen for market knowledge, integrity and a commitment to the businesses we serve.',
  },
  {
    n: '03',
    title: 'Our Reach',
    body: 'We work across key industrial locations including Taloja MIDC, Bhiwandi, Khopoli–Pen Road and Raigad. We maintain a deep understanding of local industrial markets, property specifications and title diligence across the regions that matter most to growing operations.',
  },
]

export default function AboutStory() {
  return (
    <section data-testid="about-story" className="scroll-mt-24 bg-[#f9fafb] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-350">
        <Reveal>
          <Overline>Our Story</Overline>
          <h2 className="mt-6 max-w-3xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0a192f] md:text-5xl">
            Built on relationships, not just listings.
          </h2>
        </Reveal>

        <div className="mt-16">
          {STORY.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="flex gap-8 border-t border-black/6 py-8 first:border-t-0 md:py-9">
                <span className="font-heading text-sm font-extrabold text-[#748c70]">{s.n}</span>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#0a192f] md:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-5xl text-[15px] leading-relaxed text-[#4b5563] md:text-base">
                    {s.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
