import { Reveal } from "@/components/common/reveal";
import { siteConfig } from "@/data/site";

const verbs = [
  {
    label: "Build",
    text: "I try to make the first version real quickly, then let the working product expose what the next version needs.",
  },
  {
    label: "Break",
    text: "The useful part starts when the happy path stops working and the assumptions become visible.",
  },
  {
    label: "Debug",
    text: "I like tracing problems through the UI, API, data layer, and deployment boundary until the explanation is boring.",
  },
  {
    label: "Explain",
    text: "Writing the build note keeps the project honest because it has to include the messy middle, not only the final screenshot.",
  },
];

export function PhilosophySection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mx-auto grid max-w-7xl gap-10 border-t border-[color:var(--line)] pt-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
                Philosophy
              </p>
              <h2 className="mt-4 text-4xl font-bold text-[color:var(--foreground)] md:text-6xl md:leading-[1.02]">
                {siteConfig.philosophyTitle}
              </h2>
              <p className="mt-6 text-lg leading-[1.7] text-[color:var(--muted)]">
                {siteConfig.philosophy}
              </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {verbs.map((item) => (
              <div key={item.label} className="pt-1">
                <h3 className="text-xl font-bold text-[color:var(--foreground)]">
                  {item.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
