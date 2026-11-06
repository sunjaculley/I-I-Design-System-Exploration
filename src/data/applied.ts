import t01 from "@/assets/teams/teams_bg_01.png.asset.json";
import t02 from "@/assets/teams/teams_bg_02.webp.asset.json";
import t03 from "@/assets/teams/teams_bg_03.webp.asset.json";
import t04 from "@/assets/teams/teams_bg_04.webp.asset.json";
import t05 from "@/assets/teams/teams_bg_05.png.asset.json";
import t06 from "@/assets/teams/teams_bg_06.webp.asset.json";
import t07 from "@/assets/teams/teams_bg_07.webp.asset.json";
import t08 from "@/assets/teams/teams_bg_08.webp.asset.json";
import t10 from "@/assets/teams/teams_bg_10.webp.asset.json";
import b01 from "@/assets/banners/email_banner_01.png.asset.json";
import b02 from "@/assets/banners/email_banner_02.png.asset.json";
import b03 from "@/assets/banners/email_banner_03.png.asset.json";
import b04 from "@/assets/banners/email_banner_04.png.asset.json";
import b05 from "@/assets/banners/email_banner_05.png.asset.json";

export type Tier = "Core" | "Supporting" | "Event only" | "Rethink";
export type Tone = "Light" | "Mid-tone" | "Dark";

export type TeamsBg = { num: string; url: string; title: string; theme: string; tier: Tier; tone: Tone; use: string; stock?: boolean };

export const tiers: { tier: Tier; note: string }[] = [
  { tier: "Core", note: "Everyday choices in the cobalt palette: light, mid and dark." },
  { tier: "Supporting", note: "Good alternatives for feature calls and launches." },
  { tier: "Event only", note: "High-mood art for large screens, webinars and stage moments." },
  { tier: "Rethink", note: "Off-palette. Keep out of the core set." },
];

export const teamsBackgrounds: TeamsBg[] = [
  { num: "10", url: t10.url, title: "Ivory dot grid, cobalt-violet focus", theme: "signal", tier: "Core", tone: "Light", use: "The default. Clearly Signal, calm behind the head." },
  { num: "01", url: t01.url, title: "Cobalt chamber, layered steps", theme: "relief", tier: "Core", tone: "Dark", use: "Rich option for light shirts and executive briefings." },
  { num: "02", url: t02.url, title: "Ivory waves, cobalt seams", theme: "relief", tier: "Core", tone: "Light", use: "Relief's seam with Strings' branching. Bright rooms, dark outfits." },
  { num: "06", url: t06.url, title: "Blue paper contour map", theme: "topography", tier: "Core", tone: "Mid-tone", use: "Topography depth. Works with most outfits." },
  { num: "05", url: t05.url, title: "Clear glass modules with cobalt", theme: "assembly", tier: "Supporting", tone: "Light", use: "Feature calls and synthesis stories." },
  { num: "07", url: t07.url, title: "Glass \"i&\" letterforms on lavender", theme: "glass", tier: "Supporting", tone: "Light", use: "Very ownable, but repeats the mark. Use sparingly." },
  { num: "04", url: t04.url, title: "Dark glass ribbon, neon colour", theme: "glass", tier: "Event only", tone: "Dark", use: "Large screens and webinar holding moments.", stock: true },
  { num: "08", url: t08.url, title: "Glitch spectral texture", theme: "interference", tier: "Event only", tone: "Dark", use: "Transitions and stage walk-ins.", stock: true },
  { num: "03", url: t03.url, title: "Overlapping coral and violet shapes", theme: "perspectives", tier: "Rethink", tone: "Mid-tone", use: "Coral pulls away from cobalt." },
];

export type Banner = { num: string; url: string; title: string; theme: string; lead?: boolean; note?: string };

export const emailBanners: Banner[] = [
  { num: "04", url: b04.url, title: "Signal threshold: one cobalt dot in the cluster", theme: "signal", lead: true },
  { num: "05", url: b05.url, title: "Relief fault line: a single cobalt seam", theme: "relief", lead: true },
  { num: "01", url: b01.url, title: "Signal field: cobalt focus at the right", theme: "signal", note: "The I&I mark is white on a light area and almost disappears. Use navy or cobalt, as on 03–05." },
  { num: "02", url: b02.url, title: "Topography: pale blue paper contours", theme: "topography", note: "The I&I mark is white on a light area and almost disappears. Use navy or cobalt, as on 03–05." },
  { num: "03", url: b03.url, title: "Topography: ivory into violet bands", theme: "topography" },
];
