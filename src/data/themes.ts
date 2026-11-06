export const criteria = [
  { key: "distinct", label: "Distinctiveness" },
  { key: "range", label: "Range across formats" },
  { key: "small", label: "Reads at small size" },
  { key: "story", label: "Story / meaning" },
  { key: "motion", label: "Motion potential" },
  { key: "mark", label: "Fit with I&I identifier" },
] as const;

export type CriterionKey = (typeof criteria)[number]["key"];

export type Role =
  | "Lead"
  | "Flagship accent"
  | "Detail layer"
  | "Atmospheric"
  | "Editorial tool"
  | "Motion / transition"
  | "Set aside";

export type Theme = {
  slug: string;
  name: string;
  aka: string;
  familiar: string;
  distinctive: string;
  role: Role;
  rank: number;
  why: string;
  owns: string[];
  scores: Record<CriterionKey, number>;
};

export const themes: Theme[] = [
  {
    slug: "signal", name: "Signal", aka: "What Comes Into Focus",
    familiar: "Dot grids, halftones, and density gradients",
    distinctive: "A small positional change changes how you read the whole field. Threshold uses one dot just across a boundary. Counterpoint uses two unequal clusters. Turning Point uses a row that changes direction. Those are three different observations, and the system can grow from them.",
    role: "Lead", rank: 1,
    why: "The only concept with three distinct, repeatable behaviours. It scales from a 1920px cover to a thumbnail, leaves room for copy, and animates naturally from scattered to aligned. The idea is the work of insight itself: noticing the one thing that changed. In the FY27 template it leads the covers (pages 5–10) and keeps the title area clean every time.",
    owns: ["PowerPoint covers (3)", "PowerPoint dividers (3)", "Teams backgrounds (2)", "Email banner", "One-page marker", "Recurring report covers", "Social cards (3)", "Event / webinar set"],
    scores: { distinct: 4, range: 5, small: 5, story: 5, motion: 5, mark: 4 },
  },
  {
    slug: "relief", name: "Relief", aka: "Cobalt and Ivory",
    familiar: "Layered paper, sculpted folds, and topographic cutaways",
    distinctive: "The best image is the cobalt fault line. Two ivory planes shift and expose a precise seam of blue. The seam has a reason to be there. The fan of blue and ivory layers on the last board diluted that idea.",
    role: "Flagship accent", rank: 2,
    why: "Premium and tactile, with a single meaningful gesture: the seam. Kept rare, it signals 'flagship'. Used everywhere, it turns into wallpaper. The template confirms two jobs for it: flagship covers (pages 1–4) and the image panel on content pages.",
    owns: ["Flagship PowerPoint cover", "Light Teams background", "Email banner (Relief crop)", "Flagship report covers"],
    scores: { distinct: 5, range: 3, small: 3, story: 4, motion: 2, mark: 3 },
  },
  {
    slug: "imprint", name: "Imprint", aka: "Every Layer Leaves a Trace",
    familiar: "Fingerprint-like rings and decorative contours",
    distinctive: "Give each layer a crisp trace that stays visible when another layer crosses it. You can see how the evidence accumulated. This has more substance than we gave it credit for and could work in both hero art and small editorial graphics.",
    role: "Detail layer", rank: 3,
    why: "Its parallel crisp lines are the identifier's own language. That makes it the natural connective tissue: margins, quieter dividers, and detail beside data. It absorbs Linear Circles: repeating rings where one break reveals a previous layer or a shift in alignment.",
    owns: ["Quiet PowerPoint divider (cropped crossing)", "One-page margin detail", "Repeat-and-interrupt ring detail"],
    scores: { distinct: 4, range: 4, small: 4, story: 4, motion: 3, mark: 5 },
  },
  {
    slug: "spectrum", name: "Spectrum", aka: "A Clearer Horizon / Colour on White",
    familiar: "Grainy color blooms and gradients",
    distinctive: "Keep the white space and saturated edge color as an atmospheric layer. It gives the system range, especially in banners and backgrounds.",
    role: "Atmospheric", rank: 4,
    why: "Not an idea on its own, but useful warmth and range behind Signal on banners and backgrounds. The template uses it most for the quiet jobs (dividers and the contact page), which is the right role for it.",
    owns: ["Atmospheric layer behind banners"],
    scores: { distinct: 2, range: 4, small: 3, story: 2, motion: 3, mark: 2 },
  },
  {
    slug: "topography", name: "Topography", aka: "Understand the Landscape",
    familiar: "Contour maps and elevation lines",
    distinctive: "Use it when the story calls for navigating an actual landscape of choices. The strongest version shows a meaningful pass, threshold, or route. That makes it an editorial tool with a specific job.",
    role: "Editorial tool", rank: 4,
    why: "Strong when the content literally is a landscape of options. Kept out of the core system.",
    owns: ["Editorial illustration (as needed)"],
    scores: { distinct: 2, range: 2, small: 2, story: 4, motion: 2, mark: 3 },
  },
  {
    slug: "assembly", name: "Assembly Studies", aka: "Refracted Modules",
    familiar: "Interlocking glass blocks and exploded 3D objects",
    distinctive: "Keyway has a specific moment worth keeping. The seam lights up when the pieces fit. That could be a strong editorial image about synthesis, particularly when the story is about how parts of a whole work together.",
    role: "Editorial tool", rank: 4,
    why: "Keyway is a good synthesis image, but the 3D rendering cost and lack of small-size legibility keep it editorial.",
    owns: ["Synthesis editorial image (Keyway)"],
    scores: { distinct: 3, range: 2, small: 2, story: 4, motion: 3, mark: 2 },
  },
  {
    slug: "strings", name: "Strings of Connection", aka: "Connective tissue: relay, cross, branch",
    familiar: "Glowing threads converging in a dark field",
    distinctive: "The original references had visible anchor points on successive planes. You could trace where a strand came from, where it was handed off, and where it went next. That's more distinctive than the luminous X we made the hero. Relay is the part I'd save.",
    role: "Editorial tool", rank: 4,
    why: "Relay suits hand-off stories, and its strands rhyme with the identifier's lines. Keep it as a story device, not a hero. The dark neon versions in the template (pages 18 and 21) drift off-palette, so use them for events only. Template pages 18–21 and 25 are all one family: strands, threads and particle flows.",
    owns: ["Hand-off / process editorial (Relay)"],
    scores: { distinct: 3, range: 2, small: 2, story: 4, motion: 4, mark: 4 },
  },
  {
    slug: "interference", name: "Interference", aka: "Resolve / Prismatic Drift",
    familiar: "Neon convergence, spectral flares, and optical distortion",
    distinctive: "The promising idea is a field changing state. That works best as a transition or motion study, where the viewer can see what happens before and after.",
    role: "Motion / transition", rank: 4,
    why: "Its state change is the same move Signal's motion makes, so it is used as a transition only.",
    owns: ["Motion transitions"],
    scores: { distinct: 3, range: 1, small: 1, story: 3, motion: 5, mark: 1 },
  },
  {
    slug: "journey", name: "Journey", aka: "Connections That Click",
    familiar: "Paths converging into a route",
    distinctive: "Give the meeting point a consequence. Two routes arrive independently and, when they connect, open a third route that wasn't available before. Strong story, especially in motion.",
    role: "Set aside", rank: 5,
    why: "A strong story, but the imagery is familiar. Its idea can live inside Signal's Counterpoint and Relay.",
    owns: [],
    scores: { distinct: 2, range: 3, small: 3, story: 4, motion: 4, mark: 3 },
  },
  {
    slug: "geometry", name: "Geometry", aka: "The Pattern Within",
    familiar: "Modular tiles and colorful geometry",
    distinctive: "One tile breaks the rule and reveals the larger pattern. The exception could become a recurring device, though the geometry needs more character to carry a hero.",
    role: "Set aside", rank: 5,
    why: "The 'one exception' device is better carried by Signal's dots.",
    owns: [],
    scores: { distinct: 2, range: 3, small: 3, story: 3, motion: 2, mark: 2 },
  },
  {
    slug: "glass", name: "Glass in Motion", aka: "Iridescent ribbons, orbiting rings",
    familiar: "Iridescent ribbons and orbiting rings",
    distinctive: "The actual references were stronger in their restraint. Clear glass, near-black rims, a deliberate break, and a pinpoint of cobalt give the form tension. The most interesting version would reveal a different relationship as the object turns. The last board repeated the same crossing too often to prove that range.",
    role: "Set aside", rank: 5,
    why: "Hasn't yet proved range. Could return as an optical study It also absorbs Geo Spheres' one idea: a form that reveals a different relationship from another angle.",
    owns: [],
    scores: { distinct: 3, range: 2, small: 2, story: 3, motion: 4, mark: 2 },
  },
  {
    slug: "perspectives", name: "Perspectives", aka: "Overlap (new studies)",
    familiar: "Translucent overlapping organic shapes",
    distinctive: "Where viewpoints overlap, a new colour (the ember centre) appears that neither shape had alone. That's a clear metaphor for synthesis. It sits close to Imprint's accumulated layers, but softer.",
    role: "Set aside", rank: 5,
    why: "A clear metaphor and attractive, but it looks like widely used corporate abstraction, it doesn't share the identifier's line language, and its colours pull away from cobalt. Worth keeping for one-off editorial use.",
    owns: [],
    scores: { distinct: 2, range: 3, small: 4, story: 4, motion: 2, mark: 1 },
  },
];

export const total = (t: Theme) => Object.values(t.scores).reduce((a, b) => a + b, 0);
export const themeBySlug = (s: string) => themes.find((t) => t.slug === s);
export const ranked = [...themes].sort((a, b) => a.rank - b.rank || total(b) - total(a));

export const assetFamilies = [
  { name: "PowerPoint covers", count: 4, themes: ["signal", "relief"], spec: "Three Signal compositions built around a threshold, an unequal pair of clusters, and a turn. One Relief fault-line cover for flagship presentations.", motif: "threshold" },
  { name: "PowerPoint dividers", count: 4, themes: ["signal", "imprint"], spec: "Three simplified Signal compositions that can mark stages in a story, plus one cropped Imprint crossing for decks that need a quieter pace.", motif: "turn" },
  { name: "Teams backgrounds", count: 3, themes: ["signal", "relief"], spec: "Two Signal options with the activity at opposite edges and a quiet center. One light Relief option with the cobalt seam pushed to the edge.", motif: "edges" },
  { name: "Email banners", count: 2, themes: ["signal", "relief"], spec: "A Signal strip with one clear change in the dot field and a Relief crop with a single cobalt seam. Test both with the actual identifier and full name at display size.", motif: "strip" },
  { name: "One-page templates", count: 1, themes: ["signal", "imprint"], spec: "One editable layout. Use a small Signal marker beside the main finding and a restrained Imprint detail at the margin. Give the copy and charts most of the page.", motif: "onepager" },
  { name: "Report covers", count: 2, themes: ["signal", "relief"], spec: "Signal for recurring research series and Relief for flagship reports. Build the portrait compositions from the start so the focal point survives the format.", motif: "portrait" },
  { name: "Social / digital cards", count: 3, themes: ["signal"], spec: "One each for a statistic, a finding, and a report launch. Signal can shift position or density around the message and still read at thumbnail size.", motif: "social" },
  { name: "Event / webinar assets", count: 3, themes: ["signal", "interference"], spec: "An invitation, opening slide, and holding screen. The dot field can move from scattered to aligned in a short motion treatment.", motif: "event" },
];
