import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import PortraitSlot from "@/components/shared/PortraitSlot";
import { PORTFOLIO } from "@/lib/content";

export default function About() {
  const P = PORTFOLIO;
  return (
    <section className="section-block" id="about">
      <div className="wrap">
        <SectionHeader num="002" label="about" annotation="the developer in question" />

        {/* mobile: single column stack; lg+: two-column side-by-side */}
        <div className="grid grid-cols-1 gap-11 items-start lg:grid-cols-[1fr_380px] lg:gap-[72px]">

          {/* prose */}
          <div>
            <ScrollReveal>
              <p
                className="text-[23px] md:text-[30px] font-light mb-7"
                style={{ lineHeight: 1.38 }}
              >
                Two years in, six products shipped, and one operating principle:{" "}
                <em style={{ color: "var(--accent-ink)", fontStyle: "italic" }}>
                  the boring parts decide everything.
                </em>
              </p>
            </ScrollReveal>
            {P.about.map((para, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <p className="mb-5" style={{ color: "var(--muted-ink)" }}>{para}</p>
              </ScrollReveal>
            ))}
          </div>

          {/* portrait — full width on mobile, constrained on tablet, fixed on lg */}
          <ScrollReveal>
            <div
              className="w-full sm:max-w-110 lg:max-w-none"
              style={{
                border: "1px solid var(--line)", padding: 14,
                background: "var(--panel)", transition: "background .35s ease",
              }}
            >
              <PortraitSlot />
              <div className="flex justify-between pt-3">
                <span className="mono">fig. 01 — the author</span>
                <span className="mono acc">lagos, ng</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
