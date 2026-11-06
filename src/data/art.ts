import overview from "@/assets/art/insights_intelligence_visual_direction_b.webp.asset.json";
import threeDirections from "@/assets/art/three_directions_signal_relief_refractio.png.asset.json";
import reliefBoard from "@/assets/art/cobalt_and_ivory_relief_mood_board.webp.asset.json";
import imprintBoard from "@/assets/art/every_layer_leaves_a_trace.webp.asset.json";
import geometryBoard from "@/assets/art/find_the_pattern_within.png.asset.json";
import glassBoard from "@/assets/art/glass_in_motion.webp.asset.json";
import prismBoard from "@/assets/art/prismatic_drift_optical_study.webp.asset.json";
import modulesBoard from "@/assets/art/refracted_glass_modules_mood_board.png.asset.json";
import spectrumBoard from "@/assets/art/spectrum_a_clearer_horizon.png.asset.json";
import topoBoard from "@/assets/art/topography_of_insight_and_action.webp.asset.json";
import dotGrid from "@/assets/art/ivory_dot_grid_with_indigo_lavender_focu.png.asset.json";
import signalFocus from "@/assets/art/untitled_2.png.asset.json";
import signalScatter from "@/assets/art/untitled_3.png.asset.json";
import connectors from "@/assets/art/image_1793813955914887.png.asset.json";
import reliefIvory from "@/assets/art/firefly_2.png.asset.json";
import reliefWave from "@/assets/art/firefly_remove_the_yellowish_small_brigh.png.asset.json";
import stockGlitch from "@/assets/art/adobestock_1629167139.jpeg.asset.json";
import stockGlass from "@/assets/art/adobestock_2017275602.jpeg.asset.json";
import stockBlur from "@/assets/art/adobestock_2125335668.jpeg.asset.json";
import signalRow from "@/assets/art/signal_three_behaviours_row.jpg.asset.json";
import stringsPage from "@/assets/template/fy27_page_21.jpg.asset.json";
import persp1 from "@/assets/art/perspectives_23307.png.asset.json";
import persp2 from "@/assets/art/perspectives_42784.png.asset.json";
import persp3 from "@/assets/art/perspectives_801797.png.asset.json";

import { emailBanners, teamsBackgrounds } from "@/data/applied";
import studyBand from "@/assets/studies/signal_band_threshold.jpg";
import studyArcs from "@/assets/studies/imprint_banded_arcs.jpg";
import studySeam from "@/assets/studies/relief_folded_seam_clean.jpg";
import studyCapsule from "@/assets/studies/signal_capsule_exception.jpg";

export type Art = { id: string; url: string; title: string; kind: "board" | "study" | "stock" | "original" | "applied"; theme: string };

export const art: Art[] = [
  { id: "overview", url: overview.url, title: "I&I visual direction board", kind: "board", theme: "overview" },
  { id: "three-directions", url: threeDirections.url, title: "Signal, Relief, Refraction: three directions", kind: "board", theme: "overview" },
  { id: "signal-row", url: signalRow.url, title: "Signal: three behaviours (cover, divider, Teams, one-pager)", kind: "board", theme: "signal" },
  { id: "dot-grid", url: dotGrid.url, title: "Ivory dot grid, indigo focus", kind: "study", theme: "signal" },
  { id: "signal-focus", url: signalFocus.url, title: "Signal: a single point resolves", kind: "study", theme: "signal" },
  { id: "signal-scatter", url: signalScatter.url, title: "Signal: the field breaks loose", kind: "study", theme: "signal" },
  { id: "relief-board", url: reliefBoard.url, title: "Cobalt and ivory relief", kind: "board", theme: "relief" },
  { id: "relief-ivory", url: reliefIvory.url, title: "Relief: ivory planes, edge seam", kind: "study", theme: "relief" },
  { id: "relief-wave", url: reliefWave.url, title: "Relief: layered fault line", kind: "study", theme: "relief" },
  { id: "imprint-board", url: imprintBoard.url, title: "Every layer leaves a trace", kind: "board", theme: "imprint" },
  { id: "geometry-board", url: geometryBoard.url, title: "Find the pattern within", kind: "board", theme: "geometry" },
  { id: "connectors", url: connectors.url, title: "Interlocking connectors", kind: "study", theme: "journey" },
  { id: "spectrum-board", url: spectrumBoard.url, title: "Spectrum: a clearer horizon", kind: "board", theme: "spectrum" },
  { id: "stock-blur", url: stockBlur.url, title: "Spectral blur (stock)", kind: "stock", theme: "spectrum" },
  { id: "topo-board", url: topoBoard.url, title: "Topography of insight and action", kind: "board", theme: "topography" },
  { id: "modules-board", url: modulesBoard.url, title: "Refracted glass modules", kind: "board", theme: "assembly" },
  { id: "glass-board", url: glassBoard.url, title: "Glass in motion", kind: "board", theme: "glass" },
  { id: "stock-glass", url: stockGlass.url, title: "Liquid glass (stock)", kind: "stock", theme: "glass" },
  { id: "prism-board", url: prismBoard.url, title: "Prismatic drift optical study", kind: "board", theme: "interference" },
  { id: "stock-glitch", url: stockGlitch.url, title: "Signal glitch texture (stock)", kind: "stock", theme: "interference" },
  { id: "strings-template", url: stringsPage.url, title: "Strings of Connection: FY27 template cover", kind: "board", theme: "strings" },
  { id: "persp-1", url: persp1.url, title: "Perspectives: overlap I", kind: "study", theme: "perspectives" },
  { id: "persp-2", url: persp2.url, title: "Perspectives: overlap II", kind: "study", theme: "perspectives" },
  { id: "persp-3", url: persp3.url, title: "Perspectives: overlap III", kind: "study", theme: "perspectives" },
  { id: "orig-band", url: studyBand, title: "I&I study: dots leave the band", kind: "original", theme: "signal" },
  { id: "orig-capsule", url: studyCapsule, title: "I&I study: the tiles that break rank", kind: "original", theme: "signal" },
  { id: "orig-arcs", url: studyArcs, title: "I&I study: banded arcs, one interrupted", kind: "original", theme: "imprint" },
  { id: "orig-seam", url: studySeam, title: "I&I study: the seam as one folded band", kind: "original", theme: "relief" },
];

art.push(
  ...teamsBackgrounds.map((b) => ({ id: `teams-${b.num}`, url: b.url, title: `Teams background ${b.num}: ${b.title}`, kind: "applied" as const, theme: b.theme })),
  ...emailBanners.map((b) => ({ id: `banner-${b.num}`, url: b.url, title: `Email banner ${b.num}: ${b.title}`, kind: "applied" as const, theme: b.theme })),
);

export const artFor = (theme: string) => art.filter((a) => a.theme === theme && a.kind !== "applied");
export const artById = (id: string) => art.find((a) => a.id === id)!;
