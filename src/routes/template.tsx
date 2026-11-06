import { createFileRoute, Link } from "@tanstack/react-router";
import { templatePages } from "@/data/template";
import { themeBySlug } from "@/data/themes";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/template")({
  head: () => meta("In the template", "The pages of the I&I FY27 template, sorted by theme, with the layout rules they share."),
  component: TemplatePage,
});

const rules = [
  ["Keep the left third clear", "The title lockup and copy own the left side. The art never crosses into it."],
  ["Title lockup top-left", "KPMG logo, a stacked “Insights & Intelligence” title, then a small template line."],
  ["Identifier bottom-right", "The I&I mark sits small in the corner as a sign-off, never as the hero."],
  ["Art bleeds off the edge", "Compositions run off the right or bottom edge, so the focal point sits in the right two-thirds."],
  ["Light by default", "Signal and Relief on ivory/white carry most of the deck. Dark backgrounds are an exception."],
];

function TemplatePage() {
  const counts = Object.entries(
    templatePages.reduce<Record<string, number>>((a, p) => ((a[p.theme] = (a[p.theme] ?? 0) + 1), a), {}),
  ).sort((a, b) => b[1] - a[1]);
  const max = counts[0]?.[1] ?? 1;
  const groups = counts.map(([t]) => t);
  const light = templatePages.filter((p) => !p.dark && p.kind === "Cover");
  const dark = templatePages.filter((p) => p.dark);

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <p className="kicker text-muted-foreground">FY27 template</p>
      <h1 className="mt-2 text-4xl font-bold md:text-5xl">In the template</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Testing in the FY27 template. Here's what it uses, and what it shows about each theme.
      </p>

      <section className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <p className="kicker mb-4 text-muted-foreground">Pages per theme</p>
          <div className="space-y-2">
            {counts.map(([t, n]) => (
              <div key={t} className="grid grid-cols-[8rem_1fr_1.5rem] items-center gap-3 text-sm">
                <span>{themeBySlug(t)?.name ?? t}</span>
                <div className="h-2 rounded-full bg-secondary">
                  <div className={"h-2 rounded-full " + (t === "signal" || t === "relief" ? "bg-primary" : "bg-lavender")} style={{ width: `${(n / max) * 100}%` }} />
                </div>
                <span className="text-right font-display font-semibold">{n}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Spectrum appears most often because it does the quiet jobs: dividers, contact and backgrounds. Signal leads the covers.</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <p className="kicker mb-4 text-muted-foreground">Layout rules the template follows</p>
          <ol className="space-y-3">
            {rules.map(([h, b], i) => (
              <li key={h} className="grid grid-cols-[1.5rem_1fr] gap-2 text-sm">
                <span className="font-display font-bold text-primary">{i + 1}</span>
                <span><span className="font-semibold">{h}.</span> <span className="text-muted-foreground">{b}</span></span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">Light base vs. dark mode</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          The light covers (Signal, Relief) clearly belong to one family. The dark neon covers drift away from cobalt and ivory. Recommendation: keep dark backgrounds for events, webinars and motion only, and retire the rest.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[["Light: the system", light.slice(0, 6)], ["Dark: events and motion only", dark.slice(0, 6)]].map(([label, list]) => (
            <div key={label as string}>
              <p className="kicker mb-3 text-muted-foreground">{label as string}</p>
              <div className="grid grid-cols-3 gap-2">
                {(list as typeof templatePages).map((p) => <img key={p.page} src={p.url} alt={`Template page ${p.page}`} loading="lazy" className="w-full rounded border" />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16 space-y-14">
        {groups.map((t) => {
          const th = themeBySlug(t);
          const pages = templatePages.filter((p) => p.theme === t);
          return (
            <section key={t}>
              <div className="flex items-baseline justify-between border-b pb-3">
                <h2 className="text-2xl font-bold">{th?.name ?? t}</h2>
                {th && <Link to="/themes/$slug" params={{ slug: t }} className="text-sm text-primary">Theme notes →</Link>}
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pages.map((p) => (
                  <figure key={p.page}>
                    <img src={p.url} alt={`FY27 template page ${p.page}`} loading="lazy" className="w-full rounded-md border shadow-sm" />
                    <figcaption className="mt-1.5 text-xs text-muted-foreground">Page {p.page} · {p.kind}{p.dark ? " · dark" : ""}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
