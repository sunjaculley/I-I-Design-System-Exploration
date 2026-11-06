import { criteria, total, type Theme } from "@/data/themes";

export function ScoreBars({ theme }: { theme: Theme }) {
  return (
    <div className="space-y-2">
      {criteria.map((c) => (
        <div key={c.key} className="grid grid-cols-[10rem_1fr_1.5rem] items-center gap-3 text-sm">
          <span className="text-muted-foreground">{c.label}</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <span key={n} className={n <= theme.scores[c.key] ? "h-2 flex-1 rounded-full bg-primary" : "h-2 flex-1 rounded-full bg-secondary"} />
            ))}
          </div>
          <span className="text-right font-display font-semibold">{theme.scores[c.key]}</span>
        </div>
      ))}
      <p className="pt-2 text-xs text-muted-foreground">
        Total {total(theme)} / 30 · Draft scores, open to adjustment.
      </p>
    </div>
  );
}

export function RoleBadge({ role }: { role: Theme["role"] }) {
  const lead = role === "Lead";
  const aside = role === "Set aside";
  return (
    <span
      className={
        "kicker inline-block rounded-full px-3 py-1 " +
        (lead ? "bg-primary text-primary-foreground" : aside ? "bg-muted text-muted-foreground" : "bg-accent text-accent-foreground")
      }
    >
      {role}
    </span>
  );
}
