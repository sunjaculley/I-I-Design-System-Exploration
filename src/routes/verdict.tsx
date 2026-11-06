import { createFileRoute, Link } from "@tanstack/react-router";
import { RoleBadge } from "@/components/score";
import { artFor } from "@/data/art";
import { ranked, total, type Theme } from "@/data/themes";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/verdict")({
  head: () => meta("Verdict", "The ranked recommendation: Signal leads, Relief marks flagship work, Imprint provides detail."),
  component: Verdict,
});

const tiers: { rank: number; title: string; note: string }[] = [
  { rank: 1, title: "Lead concept", note: "Carries most of the 22 assets." },
  { rank: 2, title: "Flagship accent", note: "Rare by design." },
  { rank: 3, title: "Detail layer", note: "Margins, quiet dividers, and the identifier's echo." },
  { rank: 4, title: "Supporting tools", note: "Each one has a specific job, not a hero role." },
  { rank: 5, title: "Set aside", note: "Their best ideas are absorbed elsewhere." },
];

function Row({ t }: { t: Theme }) {
  const thumbs = artFor(t.slug).slice(0, 3);
  return (
    <Link to="/themes/$slug" params={{ slug: t.slug }} className="grid items-center gap-6 rounded-lg border bg-card p-5 transition-shadow hover:shadow-md md:grid-cols-[1fr_auto]">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-bold">{t.name}</h3>
          <RoleBadge role={t.role} />
          <span className="font-display text-sm text-muted-foreground">{total(t)}/30</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{t.why}</p>
      </div>
      <div className="flex gap-2">
        {thumbs.map((a) => <img key={a.id} src={a.url} alt={a.title} loading="lazy" className="h-16 w-24 rounded object-cover" />)}
      </div>
    </Link>
  );
}

function Verdict() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <p className="kicker text-muted-foreground">Recommendation</p>
      <h1 className="mt-2 text-4xl font-bold md:text-6xl">Signal leads.</h1>
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
        Insight is the act of noticing the one thing that changed. Signal is the only concept that makes that act visible, and that does it at every size. Relief gives flagship work its weight. Imprint ties the art to the identifier's crossing lines.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {[
          ["The FY27 template agrees", "Signal leads the covers and Relief owns the flagship covers. The light covers clearly read as one family.", "/template"],
          ["The dark neon covers drift", "Pages 13–21 move away from cobalt and ivory. Keep them for events and motion, or retire them.", "/template"],
          ["Glass earns a second look", "In the November Teams set, the glass pieces (05, 07) hold up well as light backgrounds. Glass could return as an optical accent. Your call.", "/system"],
          ["Inspiration adds range", "Allow a little more colour range within Signal and Imprint, with one coral accent per composition.", "/inspiration"],
        ].map(([h, b, to]) => (
          <Link key={h} to={to as "/template"} className="rounded-lg bg-secondary p-5 transition-colors hover:bg-accent">
            <h3 className="font-bold">{h}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{b}</p>
          </Link>
        ))}
      </div>
      <div className="mt-14 space-y-14">
        {tiers.map((tier) => {
          const list = ranked.filter((t) => t.rank === tier.rank);
          return (
            <section key={tier.rank}>
              <div className="flex items-baseline gap-4 border-b pb-3">
                <span className="font-display text-4xl font-bold text-primary">{tier.rank}</span>
                <div>
                  <h2 className="text-2xl font-bold">{tier.title}</h2>
                  <p className="text-sm text-muted-foreground">{tier.note}</p>
                </div>
              </div>
              <div className="mt-5 space-y-3">{list.map((t) => <Row key={t.slug} t={t} />)}</div>
            </section>
          );
        })}
      </div>
      <p className="mt-16 text-xs text-muted-foreground">Scores are draft judgements based on your notes and the art provided. Stock images are references only: check the licences before using them in final assets.</p>
    </main>
  );
}
