import { createFileRoute, Link } from "@tanstack/react-router";
import board from "@/assets/art/inspiration_board.png.asset.json";
import { artById } from "@/data/art";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/inspiration")({
  head: () => meta("Inspiration", "Outside references, reduced to principles and re-imagined as original I&I studies."),
  component: Inspiration,
});

const principles: { from: string; to: string; slug: string; study?: string; note: string }[] = [
  { from: "Dots on a coloured band", to: "Signal · Threshold", slug: "signal", study: "orig-band", note: "An aligned band of colour, with the dots leaving it. The one navy dot that crosses the boundary is the finding." },
  { from: "Capsule grids with a broken run", to: "Signal · Counterpoint / Geometry's exception", slug: "signal", study: "orig-capsule", note: "A strict grid where one diagonal run breaks rank, revealing a larger pattern. Geometry's best idea, carried in Signal's language." },
  { from: "Overlapping translucent circles", to: "Perspectives", slug: "perspectives", note: "If this direction returns, use perfect circles in the cobalt palette, where the overlap is the only warm colour." },
  { from: "Poster type cropped by a form", to: "Typography rule", slug: "signal", note: "On flagship covers, large headlines can be partly overlapped by the art, but never in the left third the template keeps clear." },
];

function Inspiration() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <p className="kicker text-muted-foreground">Influences</p>
      <h1 className="mt-2 text-4xl font-bold md:text-5xl">Inspiration, re-imagined</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        We take principles from outside work, never the images. Each idea below is rebuilt as an original I&I study in our own palette and logic.
      </p>

      <figure className="mt-10 rounded-lg border bg-card p-4">
        <img src={board.url} alt="Inspiration board of third-party artwork" loading="lazy" className="w-full rounded opacity-90" />
        <figcaption className="mt-3 flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
          <span>Works by Jerry-Lee Bosmans, Arthur Kenzo, Dimitris Ladopoulos and others, via Behance and Pinterest.</span>
          <span className="kicker text-destructive">Internal reference only · not for reuse</span>
        </figcaption>
      </figure>

      <div className="mt-16 space-y-12">
        {principles.map((p) => {
          const s = p.study ? artById(p.study) : null;
          return (
            <section key={p.from} className="grid items-center gap-8 md:grid-cols-[1fr_1.4fr]">
              <div>
                <p className="kicker text-muted-foreground">Principle</p>
                <h2 className="mt-1 text-2xl font-bold">{p.from}</h2>
                <p className="mt-1 font-display text-primary">→ <Link to="/themes/$slug" params={{ slug: p.slug }} className="underline-offset-4 hover:underline">{p.to}</Link></p>
                <p className="mt-3 text-muted-foreground">{p.note}</p>
              </div>
              {s ? (
                <figure>
                  <img src={s.url} alt={s.title} loading="lazy" className="w-full rounded-lg border" />
                  <figcaption className="mt-2 text-sm text-muted-foreground">{s.title} · original concept, awaiting approval</figcaption>
                </figure>
              ) : (
                <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">Rule only, no study needed</div>
              )}
            </section>
          );
        })}
      </div>

      <p className="mt-16 rounded-lg bg-secondary p-6 text-sm">
        <span className="font-semibold">What this adds to the verdict:</span> the references support a little more colour range within Signal and Imprint, with a controlled coral accent used once per composition, without leaving the cobalt base.
      </p>
    </main>
  );
}
