import { createFileRoute, Link } from "@tanstack/react-router";
import { ImprintTrace, Lockup, Mark, ReliefLayers, SignalField } from "@/components/motifs";
import { artById, artFor } from "@/data/art";
import { ranked } from "@/data/themes";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/")({
  head: () => meta("Overview", "Which visual theme should carry Insights & Intelligence? A side-by-side exploration of 11 concepts and a recommended system."),
  component: Index,
});

const system = [
  { role: "Sensing", name: "Signal", slug: "signal", line: "A small change in the field becomes visible.", art: <SignalField variant="threshold" /> },
  { role: "Depth", name: "Relief / Topography", slug: "relief", line: "Layered planes and contour bands reveal what sits beneath.", art: <ReliefLayers /> },
  { role: "Detail", name: "Imprint", slug: "imprint", line: "Crisp strands that echo the identifier's lines.", art: <div className="flex h-full items-center justify-center bg-card p-6"><ImprintTrace className="h-full w-auto" /></div> },
];

function Index() {
  return (
    <main>
      <section className="relative overflow-hidden border-b">
        <img src={artById("dot-grid").url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-90" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <p className="kicker text-primary">Visual system exploration</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-[1.02] md:text-7xl">Insights at Intelligent Design System Exploration</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {ranked.filter((t) => t.slug !== "strings").length} concepts, 22 pieces of art, and 22 assets to build. This site weighs each theme against the work it has to do and lands on one system.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/verdict" className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90">See the verdict</Link>
            <Link to="/themes" className="rounded-full border border-foreground/20 bg-card px-6 py-3 font-medium hover:bg-secondary">Browse all themes</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="kicker text-muted-foreground">Recommended system</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">One system, different but harmonious.</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">Each theme brings one trait. Together they make the unseen visible.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {system.map((s) => (
            <Link key={s.slug} to="/themes/$slug" params={{ slug: s.slug }} className="group overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-lg">
              <div className="aspect-[16/9] overflow-hidden">{s.art}</div>
              <div className="p-6">
                <p className="kicker text-primary">{s.role}</p>
                <h3 className="mt-1 text-2xl font-bold">{s.name}</h3>
                <p className="mt-2 text-muted-foreground">{s.line}</p>
              </div>
            </Link>
          ))}
          <div className="flex flex-col overflow-hidden rounded-lg border-2 border-dashed bg-card">
            <div className="flex aspect-[16/9] items-center justify-center bg-secondary text-sm text-muted-foreground">Photography to come</div>
            <div className="p-6">
              <p className="kicker text-primary">Humanity</p>
              <h3 className="mt-1 text-2xl font-bold">People</h3>
              <p className="mt-2 text-muted-foreground">Photo and content capture in January 2027 adds emotion and the human side.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-navy text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[auto_1fr]">
          <Mark className="h-40 text-primary-foreground" />
          <div>
            <p className="kicker opacity-70">The identifier</p>
            <h2 className="mt-2 text-3xl font-bold">Many strands, one group.</h2>
            <p className="mt-4 max-w-2xl opacity-80">
              The I&amp;I identifier is built from separate lines that cross and come together without losing who they are, just as several groups across the firm now form I&amp;I. Our mission is to make the unseen visible and deliver actionable intelligence. The system follows that idea: Signal senses the change, Relief reveals the depth beneath it, and Imprint carries the identifier's crisp detail. Photography in January 2027 will add the human side.
            </p>
            <Lockup inverse className="mt-8 text-2xl" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="kicker text-muted-foreground">Starting point</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-bold">What we're working with</h2>
          <Link to="/themes" className="font-medium text-primary hover:underline">See how each theme scores →</Link>
        </div>
        <p className="mt-3 max-w-2xl text-muted-foreground">Every theme in the running, at a glance. The Themes page holds the scores, roles and notes.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ranked.filter((t) => t.slug !== "strings").map((t) => {
            const img = artFor(t.slug)[0];
            return (
              <Link key={t.slug} to="/themes/$slug" params={{ slug: t.slug }} className="group overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  {img ? <img src={img.url} alt={img.title} loading="lazy" className={"h-full w-full " + (img.id === "signal-row" ? "object-contain bg-card p-2" : "object-cover")} /> : <SignalField variant="quiet" />}
                </div>
                <div className="px-4 py-3">
                  <h3 className="text-lg font-bold">{t.name}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
