import { cn } from "@/lib/utils";

export type SignalVariant = "threshold" | "counterpoint" | "turn" | "edges" | "strip" | "quiet";

/** Signal dot field, drawn in SVG so it holds at any size. */
export function SignalField({
  variant = "threshold",
  cols = 24,
  rows = 13,
  className,
  animate = false,
}: {
  variant?: SignalVariant;
  cols?: number;
  rows?: number;
  className?: string;
  animate?: boolean;
}) {
  const g = 10;
  const dots: { x: number; y: number; tone: number; key: string; dx: number; dy: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let x = c * g + g / 2;
      let y = r * g + g / 2;
      const u = c / (cols - 1);
      const v = r / (rows - 1);
      let tone = 0.08;
      if (variant === "threshold") {
        tone = u > 0.62 ? 0.22 + (u - 0.62) * 1.2 : 0.08;
        if (c === Math.round(cols * 0.62) - 1 && r === Math.round(rows / 2)) tone = 1;
      } else if (variant === "counterpoint") {
        const d1 = Math.hypot(u - 0.55, v - 0.62);
        const d2 = Math.hypot(u - 0.78, v - 0.35);
        tone = Math.max(0.08, 0.95 - d1 * 4.2, 0.8 - d2 * 7);
      } else if (variant === "turn") {
        const mid = Math.round(rows / 2);
        if (r === mid) {
          const pivot = Math.round(cols * 0.6);
          tone = 0.35 + 0.6 * u;
          if (c > pivot) y -= (c - pivot) * g * 0.55;
        }
      } else if (variant === "edges") {
        tone = Math.max(0.06, 0.9 - Math.hypot(u, v) * 1.8, 0.9 - Math.hypot(1 - u, 1 - v) * 1.8);
      } else if (variant === "strip") {
        tone = 0.1 + u * 0.35;
        if (c === Math.round(cols * 0.7) && r === Math.floor(rows / 2)) {
          tone = 1;
          y -= g * 0.5;
        }
      }
      dots.push({ x, y, tone: Math.min(1, tone), key: `${r}-${c}`, dx: ((c * 37) % 23) - 11, dy: ((r * 53) % 19) - 9 });
    }
  }
  return (
    <svg viewBox={`0 0 ${cols * g} ${rows * g}`} className={cn("block h-full w-full", className)} preserveAspectRatio="xMidYMid slice" aria-hidden>
      {dots.map((d) => (
        <circle
          key={d.key}
          cx={d.x}
          cy={d.y}
          r={g * 0.38}
          className={cn(d.tone > 0.85 ? "fill-navy" : d.tone > 0.45 ? "fill-cobalt" : "fill-violet", animate && "animate-align")}
          style={{
            opacity: d.tone > 0.85 ? 1 : 0.15 + d.tone * 0.85,
            ...(animate ? ({ "--dx": `${d.dx}px`, "--dy": `${d.dy}px`, animationDelay: `${(d.x + d.y) * 4}ms` } as React.CSSProperties) : {}),
          }}
        />
      ))}
    </svg>
  );
}

/** Relief: two ivory planes and a precise cobalt seam. */
export function ReliefSeam({ className, edge = false }: { className?: string; edge?: boolean }) {
  const x = edge ? 205 : 130;
  return (
    <svg viewBox="0 0 240 135" className={cn("block h-full w-full bg-ivory", className)} preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="rs" x1="0" x2="1">
          <stop offset="0" className="[stop-color:var(--navy)]" />
          <stop offset="1" className="[stop-color:var(--cobalt)]" />
        </linearGradient>
      </defs>
      <path d={`M0 0 H${x} C${x - 20} 50 ${x + 25} 80 ${x - 5} 135 H0 Z`} className="fill-ivory" />
      <path d={`M${x + 4} 0 C${x - 16} 50 ${x + 29} 80 ${x - 1} 135 H${x + 9} C${x + 37} 80 ${x - 8} 50 ${x + 12} 0 Z`} fill="url(#rs)" />
      <path d={`M${x + 12} 0 C${x - 8} 50 ${x + 37} 80 ${x + 9} 135 H240 V0 Z`} className="fill-card" opacity={0.85} />
    </svg>
  );
}

/** Relief / Topography: stacked contour bands that reveal depth beneath the surface. */
export function ReliefLayers({ className, soft = false }: { className?: string; soft?: boolean }) {
  const bands = [0, 1, 2, 3, 4, 5, 6, 7];
  const fills = ["fill-card", "fill-ivory", "fill-lavender", "fill-card", "fill-cobalt", "fill-ivory", "fill-navy", "fill-lavender"];
  return (
    <svg viewBox="0 0 240 135" className={cn("block h-full w-full bg-ivory", className)} preserveAspectRatio="xMidYMid slice" aria-hidden>
      {bands.map((i) => {
        const x = 120 + i * 15;
        return (
          <path
            key={i}
            d={`M${x} 0 C${x - 30} 35 ${x + 30} 70 ${x - 10} 100 S${x + 10} 130 ${x} 135 H240 V0 Z`}
            className={cn(fills[i], "stroke-navy/20")}
            strokeWidth={0.4}
            opacity={soft ? 0.45 : 1}
          />
        );
      })}
    </svg>
  );
}

/** Imprint accent: a few crisp parallel strands, echoing the identifier. */
export function ImprintStrand({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={cn("block", className)} aria-hidden>
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M${6 + i * 6} 58 C${6 + i * 6} 25 ${30 + i * 6} 30 ${54} ${6 + i * 6}`} fill="none" strokeWidth={1.2} className={i === 1 ? "stroke-cobalt" : "stroke-navy"} />
      ))}
    </svg>
  );
}

/** Imprint: crisp layered traces that stay visible where they cross. */
export function ImprintTrace({ className }: { className?: string }) {
  const lines = [0, 1, 2, 3];
  return (
    <svg viewBox="0 0 120 120" className={cn("block h-full w-full", className)} aria-hidden>
      {lines.map((i) => (
        <circle key={`a${i}`} cx={50} cy={60} r={18 + i * 7} fill="none" strokeWidth={1.4} className="stroke-navy" />
      ))}
      {lines.map((i) => (
        <circle key={`b${i}`} cx={78} cy={58} r={14 + i * 7} fill="none" strokeWidth={1.4} className={i === 2 ? "stroke-cobalt" : "stroke-navy"} opacity={i === 2 ? 1 : 0.35} />
      ))}
    </svg>
  );
}

export function Mark({ className }: { className?: string }) {
  return <span role="img" aria-label="I&I identifier" className={cn("ii-mark", className)} />;
}

export function Lockup({ className, inverse = false }: { className?: string; inverse?: boolean }) {
  return (
    <div className={cn("flex items-center gap-3", inverse ? "text-primary-foreground" : "text-navy", className)}>
      <Mark className="h-[1.6em]" />
      <span className="font-display font-semibold leading-none tracking-tight">Insights &amp; Intelligence</span>
    </div>
  );
}

/** Relay: a strand handed from anchor to anchor across three planes. */
export function RelayStrands({ className }: { className?: string }) {
  const planes = [60, 160, 260];
  return (
    <svg viewBox="0 0 320 180" className={cn("block h-full w-full bg-card", className)} aria-hidden>
      {planes.map((x) => <line key={x} x1={x} y1={20} x2={x} y2={160} strokeWidth={1} className="stroke-violet" opacity={0.5} />)}
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M0 ${50 + i * 18} C40 ${50 + i * 18} 40 90 60 90 S120 ${40 + i * 22} 160 ${70 + i * 8} S220 ${130 - i * 10} 260 ${110 - i * 6} S300 ${60 + i * 20} 320 ${60 + i * 20}`}
          fill="none" strokeWidth={i === 2 ? 2.2 : 1} className={cn(i === 2 ? "stroke-cobalt" : "stroke-navy", "animate-draw")} opacity={i === 2 ? 1 : 0.35}
          pathLength={1} style={{ animationDelay: `${i * 180}ms` }} />
      ))}
      {planes.map((x, i) => <circle key={x} cx={x} cy={[90, 86, 98][i]} r={4} className="fill-navy animate-pulse-dot" style={{ animationDelay: `${0.8 + i * 1.1}s` }} />)}
    </svg>
  );
}

/** Imprint build: traces accumulate one layer at a time and stay visible. */
export function ImprintBuild({ className }: { className?: string }) {
  const sets = [{ cx: 120, cy: 90 }, { cx: 175, cy: 85 }, { cx: 150, cy: 120 }];
  return (
    <svg viewBox="0 0 320 180" className={cn("block h-full w-full bg-card", className)} aria-hidden>
      {sets.map((s, k) => [0, 1, 2, 3].map((i) => (
        <circle key={`${k}-${i}`} cx={s.cx} cy={s.cy} r={14 + i * 9} fill="none" strokeWidth={1.4} pathLength={1}
          className={cn(k === 2 && i === 1 ? "stroke-cobalt" : "stroke-navy", "animate-draw")}
          opacity={k === 0 ? 0.9 : k === 1 ? 0.55 : 0.8} style={{ animationDelay: `${k * 1.2 + i * 0.15}s` }} />
      )))}
    </svg>
  );
}
