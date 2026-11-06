import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { RoleBadge, ScoreBars } from "@/components/score";
import { art, artFor } from "@/data/art";
import { themeBySlug } from "@/data/themes";
import { templateFor } from "@/data/template";

export const Route = createFileRoute("/themes/$slug")({
  loader: ({ params }) => {
    const theme = themeBySlug(params.slug);
    if (!theme) throw notFound();
    return theme;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.name} · I&I Theme Exploration` : "Theme not found";
    const desc = loaderData ? `${loaderData.name} (${loaderData.aka}): role, scores and supporting art.` : "This theme doesn't exist.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-3xl font-bold">Theme not found</h1>
      <Link to="/themes" className="mt-6 inline-block text-primary underline">Back to themes</Link>
    </main>
  ),
  component: ThemePage,
});

function ThemePage() {
  const t = Route.useLoaderData();
  const images = artFor(t.slug);
  const pages = templateFor(t.slug);
  const inUse = art.filter((a) => a.kind === "applied" && a.theme === t.slug);
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <Link to="/themes" className="text-sm text-muted-foreground hover:text-foreground">← All themes</Link>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <RoleBadge role={t.role} />
      </div>
      <h1 className="mt-3 text-5xl font-bold md:text-6xl">{t.name}</h1>
      <p className="mt-2 text-xl text-muted-foreground">{t.aka}</p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-8">
          <div>
            <p className="kicker text-muted-foreground">What feels familiar</p>
            <p className="mt-2 text-lg">{t.familiar}</p>
          </div>
          <div>
            <p className="kicker text-primary">Where the distinctive idea is</p>
            <p className="mt-2 text-lg leading-relaxed">{t.distinctive}</p>
          </div>
          <div className="rounded-lg border-l-4 border-primary bg-secondary p-6">
            <p className="kicker text-muted-foreground">Recommendation</p>
            <p className="mt-2">{t.why}</p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="rounded-lg border bg-card p-6">
            <p className="kicker mb-4 text-muted-foreground">Scores</p>
            <ScoreBars theme={t} />
          </div>
          <div className="rounded-lg border bg-card p-6">
            <p className="kicker mb-3 text-muted-foreground">Assets it should own</p>
            {t.owns.length ? (
              <ul className="space-y-1.5 text-sm">{t.owns.map((o) => <li key={o}>· {o}</li>)}</ul>
            ) : (
              <p className="text-sm text-muted-foreground">None in the core system.</p>
            )}
          </div>
        </div>
      </div>

      {pages.length > 0 && (
        <section className="mt-16">
          <div className="flex items-baseline justify-between">
            <p className="kicker text-muted-foreground">Seen in the FY27 template · {pages.length} {pages.length === 1 ? "page" : "pages"}</p>
            <Link to="/template" className="text-sm text-primary">Full template →</Link>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {pages.map((p) => (
              <img key={p.page} src={p.url} alt={`FY27 template page ${p.page}`} loading="lazy" className="w-full rounded border" />
            ))}
          </div>
        </section>
      )}

      {inUse.length > 0 && (
        <section className="mt-16">
          <div className="flex items-baseline justify-between">
            <p className="kicker text-muted-foreground">In use: Teams and email</p>
            <Link to="/system" className="text-sm text-primary">Asset system →</Link>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {inUse.map((a) => (
              <figure key={a.id}>
                <img src={a.url} alt={a.title} loading="lazy" className="w-full rounded border" />
                <figcaption className="mt-2 text-xs text-muted-foreground">{a.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="mt-16">
        <p className="kicker text-muted-foreground">Supporting art</p>
        {images.length ? (
          <div className="mt-6 grid gap-6">
            {images.map((a) => (
              <figure key={a.id}>
                <img src={a.url} alt={a.title} loading="lazy" className="w-full rounded-lg border" />
                <figcaption className="mt-2 text-sm text-muted-foreground">
                  {a.title}
                  {a.kind === "stock" && " · Stock reference: check the licence before using it in final assets"}
                  {a.kind === "original" && " · Original I&I concept, from the inspiration principles"}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-muted-foreground">No dedicated art yet. This theme is shown in the original direction board.</p>
        )}
      </section>
    </main>
  );
}
