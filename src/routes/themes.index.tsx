import { createFileRoute, Link } from "@tanstack/react-router";
import { RoleBadge } from "@/components/score";
import { artFor } from "@/data/art";
import { ranked, total } from "@/data/themes";
import { SignalField } from "@/components/motifs";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/themes/")({
  head: () => meta("Themes", "11 candidate themes for Insights & Intelligence: what feels familiar, the distinctive idea, and each theme's role."),
  component: Themes,
});

function Themes() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <p className="kicker text-muted-foreground">All concepts</p>
      <h1 className="mt-2 text-4xl font-bold md:text-5xl">Themes</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">Each theme scored out of 30, with its role, what feels familiar, and where the distinctive idea is.</p>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ranked.filter((t) => t.slug !== "strings").map((t) => {
          const img = artFor(t.slug)[0];
          return (
            <Link key={t.slug} to="/themes/$slug" params={{ slug: t.slug }} className="group flex flex-col overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-lg">
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                {img ? (
                  <img src={img.url} alt={img.title} loading="lazy" className={"h-full w-full transition-transform " + (img.id === "signal-row" ? "object-contain bg-card p-2" : "object-cover") + " duration-500 group-hover:scale-105"} />
                ) : (
                  <SignalField variant="quiet" />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-2">
                  <RoleBadge role={t.role} />
                  <span className="font-display text-sm text-muted-foreground">{total(t)}/30</span>
                </div>
                <h2 className="mt-4 text-2xl font-bold">{t.name}</h2>
                <p className="text-sm text-muted-foreground">{t.aka}</p>
                <p className="mt-4 text-sm"><span className="font-semibold">Familiar:</span> {t.familiar}</p>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{t.distinctive}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
