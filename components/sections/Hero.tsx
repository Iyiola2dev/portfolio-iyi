import ScrollReveal from "@/components/shared/ScrollReveal";
import { PORTFOLIO } from "@/lib/content";

export default function Hero() {
  const P = PORTFOLIO;
  return (
    /* mobile: less padding; lg+: full padding */
    <section className="px-4 pt-14 pb-14 md:pt-20 lg:pt-24 lg:pb-24" id="top">

      {/* annotation row */}
      <ScrollReveal>
        <div className="flex justify-between mb-5 md:mb-7.5">
          <span className="mono"><span className="acc">001</span> — index</span>
          <span className="mono hidden sm:block">{P.location}</span>
        </div>
      </ScrollReveal>

      {/* headline — fluid size from 40px (mobile) to 104px (desktop) */}
      <ScrollReveal delay={0.08}>
        <h1
          style={{
            fontSize: "clamp(40px, 7.4vw, 104px)",
            fontWeight: 300,
            lineHeight: 1.04,
            letterSpacing: "-.02em",
            margin: 0,
            maxWidth: 1080,
          }}
        >
          {P.name}. Full-stack &amp; mobile developer who ships{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent-ink)", fontWeight: 400 }}>
            finished things.
          </em>
        </h1>
      </ScrollReveal>

      {/* sub tagline — smaller on mobile, larger on md+ */}
      <ScrollReveal delay={0.16}>
        <p
          className="mt-7 md:mt-9 text-[19px] md:text-[22px]"
          style={{ color: "var(--muted-ink)", maxWidth: 640, margin: undefined, lineHeight: 1.62 }}
        >
          {P.positioning}
        </p>
      </ScrollReveal>

      {/* availability badge */}
      <ScrollReveal delay={0.24}>
        <div className="flex flex-wrap gap-[14px] mt-9 md:mt-11 items-center">
          <span className="avail-badge">
            <i className="avail-dot blink-slow" aria-hidden="true" />
            {P.availability}
          </span>
        </div>
      </ScrollReveal>
    </section>
  );
}
