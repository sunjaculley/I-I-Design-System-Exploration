import { createFileRoute } from "@tanstack/react-router";
import { ImprintBuild, Lockup, RelayStrands, SignalField } from "@/components/motifs";
import { artById } from "@/data/art";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/motion")({
  head: () => meta("Motion", "The Signal dot field moving from scattered to aligned, the motion idea for I&I events and webinars."),
  component: Motion,
});

function Motion() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <p className="kicker text-muted-foreground">Event / webinar</p>
      <h1 className="mt-2 text-4xl font-bold md:text-5xl">Scattered to aligned</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        A short loop for the event set. The field starts scattered, resolves into order, then lets go. Interference's "field changing state" lives here as a transition, not as a hero.
      </p>
      <div className="relative mt-10 aspect-video overflow-hidden rounded-lg border bg-card">
        <SignalField animate cols={32} rows={18} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute bottom-[8%] left-[5%]"><Lockup className="text-xl md:text-3xl" /></div>
      </div>
      <div className="mt-16 grid gap-10 md:grid-cols-2">
        <section>
          <p className="kicker text-muted-foreground">Strings of Connection</p>
          <h2 className="mt-1 text-2xl font-bold">Relay</h2>
          <p className="mt-2 text-sm text-muted-foreground">A strand is handed from anchor to anchor across three planes. Good for hand-off and process stories.</p>
          <div className="mt-4 aspect-video overflow-hidden rounded-lg border"><RelayStrands /></div>
        </section>
        <section>
          <p className="kicker text-muted-foreground">Imprint</p>
          <h2 className="mt-1 text-2xl font-bold">Every layer leaves a trace</h2>
          <p className="mt-2 text-sm text-muted-foreground">Line traces build one layer at a time and stay crisp where they cross, showing evidence adding up.</p>
          <div className="mt-4 aspect-video overflow-hidden rounded-lg border"><ImprintBuild /></div>
        </section>
      </div>
      <p className="mt-12 text-sm text-muted-foreground">Interference's field-changing-state idea is carried by the Scattered to aligned loop above.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {(["signal-scatter", "signal-focus"] as const).map((id) => {
          const a = artById(id);
          return (
            <figure key={id}>
              <img src={a.url} alt={a.title} loading="lazy" className="aspect-video w-full rounded-lg border object-cover" />
              <figcaption className="mt-2 text-sm text-muted-foreground">{a.title}</figcaption>
            </figure>
          );
        })}
      </div>
    </main>
  );
}
