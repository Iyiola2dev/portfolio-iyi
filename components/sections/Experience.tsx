import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { PORTFOLIO } from "@/lib/content";

export default function Experience() {
  const { experience } = PORTFOLIO;
  return (
    <section className="section-block" id="experience">
      <div className="wrap">
        <SectionHeader num="005" label="experience" annotation="a short, busy record" />
        <div className="exp-list">
          {experience.map((e, i) => (
            <ScrollReveal key={e.org} delay={i * 0.1}>
              <div className="exp-item">
                <span className="mono">{e.period}</span>
                {/* org name: smaller on mobile, larger on sm+ */}
                <h3
                  className="text-[22px] sm:text-[28px] font-normal mt-[6px] mb-0 inline-block"
                >
                  {e.org}
                </h3>
                <p className="mt-[2px] mb-[10px] text-[17px] md:text-[18px] italic" style={{ color: "var(--accent-ink)" }}>
                  {e.role}
                </p>
                <p className="m-0 max-w-[620px]" style={{ color: "var(--muted-ink)" }}>{e.note}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
