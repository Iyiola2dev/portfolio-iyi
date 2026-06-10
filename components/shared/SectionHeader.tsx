import ScrollReveal from "./ScrollReveal";

interface Props {
  num: string;
  label: string;
  annotation: string;
}

export default function SectionHeader({ num, label, annotation }: Props) {
  return (
    <ScrollReveal>
      {/* mobile: smaller gap; md+: full spacing */}
      <div className="flex justify-between items-baseline mb-9 md:mb-[52px]">
        <h2 className="mono m-0 font-normal" style={{ color: "var(--ink)" }}>
          <span className="acc">{num}</span> — {label}
        </h2>
        <span className="mono hidden sm:block">{annotation}</span>
      </div>
    </ScrollReveal>
  );
}
