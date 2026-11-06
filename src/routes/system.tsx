import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ImprintStrand, ImprintTrace, Lockup, Mark, ReliefLayers, ReliefSeam, SignalField } from "@/components/motifs";
import { assetFamilies, themeBySlug } from "@/data/themes";
import { emailBanners, teamsBackgrounds, tiers } from "@/data/applied";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/system")({
  head: () => meta("Asset system", "How Signal, Relief and Imprint divide the 22 I&I assets, with the identifier tested at display size."),
  component: System,
});

function Frame({ label, ratio = "aspect-video", children }: { label: string; ratio?: string; children: ReactNode }) {
  return (
    <figure>
      <div className={`relative overflow-hidden rounded-md border bg-card shadow-sm ${ratio}`}>
        {children}
        <Mark className="absolute bottom-[6%] right-[4%] h-[9%] min-h-3 text-navy" />
      </div>
      <figcaption className="mt-2 text-xs text-muted-foreground">{label}</figcaption>
    </figure>
  );
}

const Strand = () => <ImprintStrand className="absolute right-[4%] top-[6%] h-[18%] w-auto opacity-80" />;

const Fade = () => <div className="pointer-events-none absolute inset-y-0 left-0 w-[62%] bg-gradient-to-r from-card via-card/90 to-transparent" />;

const Title = ({ children, sub }: { children: ReactNode; sub?: string }) => (
  <>
  <Fade />
  <div className="absolute left-[6%] top-[12%] max-w-[38%]">
    <p className="font-display text-[0.55rem] font-semibold leading-tight text-navy md:text-xs">Insights &amp;<br />Intelligence</p>
    <p className="mt-3 font-display text-base font-bold leading-tight md:text-xl">{children}</p>
    {sub && <p className="mt-1 text-[0.6rem] text-muted-foreground">{sub}</p>}
  </div>
  </>
);

const mocks: Record<string, ReactNode> = {
  threshold: (
    <div className="grid gap-4 sm:grid-cols-2">
      <Frame label="Signal · Threshold"><SignalField variant="threshold" /><Title>Quarterly outlook</Title><Strand /></Frame>
      <Frame label="Signal · Counterpoint"><SignalField variant="counterpoint" /><Title>Two markets, one answer</Title><Strand /></Frame>
      <Frame label="Relief · Topography contour"><ReliefLayers /><Title>Where demand shifts</Title><Strand /></Frame>
      <Frame label="Relief · Flagship fault line"><ReliefSeam /><Title>State of the industry 2027</Title><Strand /></Frame>
    </div>
  ),
  turn: (
    <div className="grid gap-4 sm:grid-cols-2">
      <Frame label="Signal divider · Stage 01"><SignalField variant="strip" /><Fade /><span className="absolute bottom-[10%] left-[6%] font-display text-2xl font-bold">01 Context</span></Frame>
      <Frame label="Relief divider · Stage 02"><ReliefSeam /><Fade /><span className="absolute bottom-[10%] left-[6%] font-display text-2xl font-bold">02 Shift</span></Frame>
      <Frame label="Topography divider · Stage 03"><ReliefLayers /><Fade /><span className="absolute bottom-[10%] left-[6%] font-display text-2xl font-bold">03 Action</span></Frame>
      <Frame label="Imprint divider · Quiet crossing"><div className="absolute -right-10 -top-10 h-[140%] w-[70%]"><ImprintTrace /></div><Fade /><span className="absolute bottom-[10%] left-[6%] font-display text-2xl font-bold">Appendix</span></Frame>
    </div>
  ),
  edges: (
    <div className="space-y-8">
      {tiers.map(({ tier, note }) => (
        <div key={tier}>
          <div className="flex flex-wrap items-baseline gap-3 border-b pb-2">
            <h3 className="font-display text-lg font-bold">{tier}</h3>
            <p className="text-xs text-muted-foreground">{note}</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
            {teamsBackgrounds.filter((b) => b.tier === tier).map((b) => (
              <figure key={b.num}>
                <img src={b.url} alt={`Teams background ${b.num}: ${b.title}`} loading="lazy" className="aspect-video w-full rounded-md border object-cover" />
                <figcaption className="mt-2 text-xs">
                  <span className="font-semibold">{b.num} · {b.title}</span>
                  <span className="text-muted-foreground"> · {themeBySlug(b.theme)?.name ?? b.theme} · {b.tone}</span>
                  <p className="text-muted-foreground">{b.use}{b.stock && " Stock-based: check the licence."}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      ))}
      <p className="text-xs text-muted-foreground">No Imprint background yet. That's expected, since Imprint is the detail layer. Background 09 wasn't in this set.</p>
    </div>
  ),
  strip: (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
      {emailBanners.map((b) => (
        <figure key={b.num}>
          <img src={b.url} alt={`Email banner ${b.num}: ${b.title}`} loading="lazy" className="w-full rounded-md border" />
          <figcaption className="mt-2 text-xs">
            {b.lead && <span className="mr-2 rounded bg-primary px-1.5 py-0.5 font-semibold text-primary-foreground">Lead pair</span>}
            <span className="font-semibold">{b.num} · {b.title}</span>
            {b.note && <p className="mt-1 text-muted-foreground">{b.note}</p>}
          </figcaption>
        </figure>
      ))}
    </div>
  ),
  onepager: (
    <div className="mx-auto max-w-sm">
      <Frame label="One-pager · Signal marker + Imprint margin" ratio="aspect-[8.5/11]">
        <div className="absolute inset-0 p-[8%]">
          <div className="absolute inset-x-0 top-0 h-[8%] opacity-50"><ReliefLayers /></div>
          <Lockup className="text-[0.55rem]" />
          <div className="mt-6 flex items-start gap-3">
            <div className="h-8 w-8 shrink-0 overflow-hidden rounded"><SignalField variant="threshold" cols={4} rows={4} /></div>
            <p className="font-display text-sm font-bold leading-tight">Main finding: one sentence that carries the page.</p>
          </div>
          <div className="mt-4 space-y-1.5">{[90, 80, 85, 60].map((w) => <div key={w} className="h-1.5 rounded bg-muted" style={{ width: `${w}%` }} />)}</div>
          <div className="mt-5 flex h-20 items-end gap-1.5">{[40, 55, 35, 70, 90, 60].map((h, i) => <div key={i} className={i === 4 ? "flex-1 bg-primary" : "flex-1 bg-lavender"} style={{ height: `${h}%` }} />)}</div>
          <div className="mt-4 space-y-1.5">{[85, 75, 88].map((w) => <div key={w} className="h-1.5 rounded bg-muted" style={{ width: `${w}%` }} />)}</div>
        </div>
        <div className="absolute -bottom-6 -right-6 h-20 w-20 opacity-60"><ImprintTrace /></div>
      </Frame>
    </div>
  ),
  portrait: (
    <div className="mx-auto grid max-w-xl grid-cols-2 gap-4">
      <Frame label="Signal · Recurring series" ratio="aspect-[3/4]"><SignalField variant="threshold" cols={12} rows={16} /><Title sub="Issue 04">Insight Series</Title><Strand /></Frame>
      <Frame label="Relief · Flagship report" ratio="aspect-[3/4]"><ReliefSeam /><Title sub="2027">The Flagship Report</Title><Strand /></Frame>
    </div>
  ),
  social: (
    <div className="grid grid-cols-3 gap-4">
      <Frame label="Statistic · Signal" ratio="aspect-square"><SignalField variant="threshold" cols={12} rows={12} /><Fade /><span className="absolute left-[8%] top-[10%] font-display text-4xl font-bold">62%</span></Frame>
      <Frame label="Finding · Relief layers" ratio="aspect-square"><ReliefLayers /><Fade /><p className="absolute left-[8%] top-[10%] max-w-[70%] font-display text-sm font-bold leading-tight">Small shifts, big signals</p></Frame>
      <Frame label="Report launch · combined" ratio="aspect-square"><ReliefLayers soft /><div className="absolute bottom-[10%] right-[10%] h-[40%] w-[40%]"><SignalField variant="turn" cols={6} rows={6} /></div><Strand /><Fade /><p className="absolute left-[8%] top-[10%] font-display text-sm font-bold">New report</p></Frame>
    </div>
  ),
  event: (
    <div className="grid gap-4 sm:grid-cols-3">
      <Frame label="Invitation · scattered"><SignalField animate cols={20} rows={11} /><Title>You're invited</Title></Frame>
      <Frame label="Opening slide · aligning"><SignalField variant="strip" /><Title>Welcome</Title></Frame>
      <Frame label="Holding screen · aligned, Relief behind"><ReliefLayers soft /><div className="absolute inset-0 opacity-60"><SignalField variant="quiet" /></div><div className="absolute inset-0 flex items-center justify-center"><Lockup className="text-sm" /></div></Frame>
    </div>
  ),
};

function System() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <p className="kicker text-muted-foreground">Applied</p>
      <h1 className="mt-2 text-4xl font-bold md:text-5xl">Asset system</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Signal senses, Relief adds depth and Imprint carries the detail, so each family mixes them rather than leaning on one. Each is drawn live, using the FY27 template's layout: the title stacked top-left, the left third kept clear, and the I&I identifier bottom-right. The titles are placeholder copy.
      </p>
      <div className="mt-16 space-y-20">
        {assetFamilies.map((f) => (
          <section key={f.name} className="grid gap-8 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="kicker text-primary">{f.count} {f.count === 1 ? "asset" : "assets"}</p>
              <h2 className="mt-1 text-2xl font-bold">{f.name}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{f.spec}</p>
              <p className="mt-4 text-xs text-muted-foreground">Themes: {f.themes.join(" · ")}</p>
            </div>
            <div>{mocks[f.motif]}</div>
          </section>
        ))}
      </div>
    </main>
  );
}
