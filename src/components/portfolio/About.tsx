import { motion } from "motion/react";
import { BarChart3, MessagesSquare, Workflow, GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";

const cards = [
  {
    icon: GraduationCap,
    title: "B.Com graduate",
    body: "Commerce foundation in finance, operations and business fundamentals.",
    span: "sm:col-span-3",
  },
  {
    icon: MessagesSquare,
    title: "2 yrs client-facing",
    body: "Support and content coordination across enterprise accounts.",
    span: "sm:col-span-2",
  },
  {
    icon: BarChart3,
    title: "Power BI · SQL · Excel",
    body: "Daily toolkit for modelling, querying and dashboarding.",
    span: "sm:col-span-3",
  },
  {
    icon: Workflow,
    title: "Process-first thinking",
    body: "Requirements, process maps, and measurable outcomes.",
    span: "sm:col-span-2",
  },
];

export function About() {
  return (
    <section id="about" className="section-light py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="About" title="From frontline operations to analytics." />
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-5 text-muted-foreground">
              <p>
                I'm a B.Com graduate stepping into Business Analysis. My first two years were spent
                close to customers and content operations — handling escalations, coordinating
                delivery timelines, and learning how a business really runs beneath the reporting
                layer.
              </p>
              <p>
                That frontline view is now paired with an analytics toolkit: SQL for interrogating
                data, Power BI for making it legible, and Excel for the fast, scrappy modelling in
                between. My aim is simple — turn operational questions into insights someone can act
                on this week.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`surface-card p-6 ${c.span}`}
            >
              <span
                className="inline-flex size-10 items-center justify-center rounded-xl"
                style={{
                  background: "color-mix(in oklab, var(--amber-accent) 14%, transparent)",
                }}
              >
                <c.icon className="size-5 text-primary" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
