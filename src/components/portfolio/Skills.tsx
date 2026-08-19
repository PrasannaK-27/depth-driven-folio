import { motion } from "motion/react";
import { ClipboardList, Database, HeartHandshake } from "lucide-react";
import { SectionHeading } from "@/components/Reveal";

const groups = [
  {
    icon: ClipboardList,
    label: "Business Analysis",
    tint: "var(--amber-accent)",
    items: [
      "Requirements gathering",
      "Stakeholder communication",
      "Process mapping",
      "User stories",
      "Gap analysis",
      "Documentation (BRD/FRD)",
    ],
  },
  {
    icon: Database,
    label: "Data & Analytics Tools",
    tint: "var(--plum)",
    items: [
      "Power BI",
      "SQL (joins, CTEs, window fns)",
      "Excel (pivots, Power Query)",
      "Data cleaning",
      "KPI design",
      "RFM segmentation",
    ],
  },
  {
    icon: HeartHandshake,
    label: "Soft Skills",
    tint: "var(--amber-accent)",
    items: [
      "Communication",
      "Problem-solving",
      "Client handling",
      "Attention to detail",
      "Cross-team coordination",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit built around the question, not the tool."
        />

        <div className="mt-12 space-y-6">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.55, delay: gi * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="surface-card grid gap-5 p-6 sm:grid-cols-[minmax(0,220px)_1fr] sm:items-center sm:p-7"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className="grid size-10 shrink-0 place-items-center rounded-xl"
                  style={{ background: `color-mix(in oklab, ${g.tint} 18%, transparent)` }}
                >
                  <g.icon className="size-5" style={{ color: g.tint }} />
                </span>
                <h3 className="truncate text-base font-semibold">{g.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {g.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * i }}
                    whileHover={{ y: -3, scale: 1.04 }}
                    className="rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:border-primary/60 hover:text-foreground"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
