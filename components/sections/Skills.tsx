import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { PORTFOLIO } from "@/lib/content";

export default function Skills() {
  const { skills } = PORTFOLIO;
  return (
    <section className="section-block" id="skills">
      <div className="wrap">
        <SectionHeader num="003" label="toolkit" annotation="spec sheet" />
        <ScrollReveal>
          <div className="spec">
            {skills.map((group) => (
              <div className="spec-row" key={group.group}>
                <div className="spec-key">{group.group}</div>
                <div className="spec-val">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
