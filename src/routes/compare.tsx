import { createFileRoute } from "@tanstack/react-router";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Legend } from "recharts";
import { artById } from "@/data/art";
import { criteria, themeBySlug, total } from "@/data/themes";
import { ScoreBars } from "@/components/score";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/compare")({
  head: () => meta("Compare", "Signal, Relief and Imprint scored side by side against the work the I&I system has to do."),
  component: Compare,
});

const picks = ["signal", "relief", "imprint", "assembly"].map((s) => themeBySlug(s)!);
const colors = ["var(--cobalt)", "var(--navy)", "var(--violet)", "var(--ember)"];

function Compare() {
  const data = criteria.map((c) => ({ c: c.label, ...Object.fromEntries(picks.map((p) => [p.name, p.scores[c.key]])) }));
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <p className="kicker text-muted-foreground">Head to head</p>
      <h1 className="mt-2 text-4xl font-bold md:text-5xl">Compare the finalists</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">The three-directions board tested Signal, Relief and Refracted Modules on the same four formats. We're not choosing one winner. We're choosing the traits that work together: Signal's sensing, Relief's depth, and Imprint's detail, which comes straight from the identifier's lines.</p>
      <div className="mt-10 aspect-[1536/952] overflow-hidden rounded-lg border"><img src={artById("three-directions").url} alt="Signal, Relief and Refraction applied to cover, divider, Teams and one-pager" className="h-full w-full object-cover object-bottom" /></div>
      <div className="mt-8">
        <p className="kicker text-muted-foreground">Imprint / every layer leaves a trace</p>
        <div className="mt-3 grid gap-4">
          {(["imprint-board"] as const).map((id) => (
            <figure key={id}>
              <img src={artById(id).url} alt={artById(id).title} loading="lazy" className="w-full rounded-lg border" />
              <figcaption className="mt-2 text-xs text-muted-foreground">{artById(id).title}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="h-[420px] rounded-lg border bg-card p-4">
          <ResponsiveContainer>
            <RadarChart data={data} outerRadius="72%">
              <PolarGrid stroke="var(--border)" />
              <PolarAngleAxis dataKey="c" tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} />
              {picks.map((p, i) => (
                <Radar key={p.slug} dataKey={p.name} stroke={colors[i]} fill={colors[i]} fillOpacity={i === 0 ? 0.25 : 0.05} strokeWidth={i === 0 ? 2.5 : 1.5} />
              ))}
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {picks.map((p) => (
            <div key={p.slug} className="rounded-lg border bg-card p-5">
              <div className="flex items-baseline justify-between">
                <h2 className="text-xl font-bold">{p.name}</h2>
                <span className="font-display text-2xl font-bold text-primary">{total(p)}</span>
              </div>
              <p className="kicker mb-4 mt-1 text-muted-foreground">{p.role}</p>
              <div className="text-xs"><ScoreBars theme={p} /></div>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          ["Signal: sensing", "It holds at every size, from a 1920px cover to a social thumbnail, and its three behaviours show one change becoming visible. It carries most of the recurring work."],
          ["Relief: depth", "Layered planes and contour bands show what sits beneath the surface. It leads flagship pieces and gives dividers, social and backgrounds a calmer counterweight to the dots."],
          ["Imprint: detail", "Its crisp parallel lines are the identifier's own language, so it ties the system to the mark. It works quietly in margins, dividers and beside data, where Signal would be too loud."],
          ["Why not Refraction", "Keyway's lit seam is a strong synthesis story, but 3D glass is costly to produce, muddy at small sizes and hard for non-designers to edit."],
        ].map(([h, b]) => (
          <div key={h} className="rounded-lg bg-secondary p-6">
            <h3 className="text-lg font-bold">{h}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
