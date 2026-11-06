import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { art } from "@/data/art";
import { themeBySlug } from "@/data/themes";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/gallery")({
  head: () => meta("Gallery", "Every piece of I&I theme art, boards, studies and stock references, filterable by theme."),
  component: Gallery,
});

function Gallery() {
  const tags = Array.from(new Set(art.map((a) => a.theme)));
  const [f, setF] = useState<string>("all");
  const items = f === "all" ? art : art.filter((a) => a.theme === f);
  const label = (t: string) => themeBySlug(t)?.name ?? "Overview";
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <p className="kicker text-muted-foreground">Evidence</p>
      <h1 className="mt-2 text-4xl font-bold md:text-5xl">Gallery</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">Every board, study and reference in one place. Theme pages show one theme at a time; use this page to compare art across all of them, filtered by theme.</p>
      <div className="mt-8 flex flex-wrap gap-2">
        {["all", ...tags].map((t) => (
          <button key={t} onClick={() => setF(t)} className={"rounded-full border px-4 py-1.5 text-sm transition-colors " + (f === t ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:bg-secondary")}>
            {t === "all" ? "All" : label(t)}
          </button>
        ))}
      </div>
      <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {items.map((a) => (
          <figure key={a.id} className="mb-6 break-inside-avoid">
            <img src={a.url} alt={a.title} loading="lazy" className="w-full rounded-lg border" />
            <figcaption className="mt-2 flex justify-between gap-2 text-sm">
              <span>{a.title}</span>
              {themeBySlug(a.theme) ? (
                <Link to="/themes/$slug" params={{ slug: a.theme }} className="shrink-0 text-primary">{label(a.theme)}</Link>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
