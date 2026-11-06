// Generated from the FY27 template PDF: one entry per page.
import p1 from "@/assets/template/fy27_page_1.jpg.asset.json";
import p2 from "@/assets/template/fy27_page_2.jpg.asset.json";
import p3 from "@/assets/template/fy27_page_3.jpg.asset.json";
import p4 from "@/assets/template/fy27_page_4.jpg.asset.json";
import p5 from "@/assets/template/fy27_page_5.jpg.asset.json";
import p6 from "@/assets/template/fy27_page_6.jpg.asset.json";
import p7 from "@/assets/template/fy27_page_7.jpg.asset.json";
import p8 from "@/assets/template/fy27_page_8.jpg.asset.json";
import p9 from "@/assets/template/fy27_page_9.jpg.asset.json";
import p10 from "@/assets/template/fy27_page_10.jpg.asset.json";
import p11 from "@/assets/template/fy27_page_11.jpg.asset.json";
import p12 from "@/assets/template/fy27_page_12.jpg.asset.json";
import p13 from "@/assets/template/fy27_page_13.jpg.asset.json";
import p14 from "@/assets/template/fy27_page_14.jpg.asset.json";
import p15 from "@/assets/template/fy27_page_15.jpg.asset.json";
import p16 from "@/assets/template/fy27_page_16.jpg.asset.json";
import p17 from "@/assets/template/fy27_page_17.jpg.asset.json";
import p18 from "@/assets/template/fy27_page_18.jpg.asset.json";
import p19 from "@/assets/template/fy27_page_19.jpg.asset.json";
import p20 from "@/assets/template/fy27_page_20.jpg.asset.json";
import p21 from "@/assets/template/fy27_page_21.jpg.asset.json";
import p22 from "@/assets/template/fy27_page_22.jpg.asset.json";
import p24 from "@/assets/template/fy27_page_24.jpg.asset.json";
import p25 from "@/assets/template/fy27_page_25.jpg.asset.json";
import p26 from "@/assets/template/fy27_page_26.jpg.asset.json";
import p27 from "@/assets/template/fy27_page_27.jpg.asset.json";

export type TemplatePage = { page: number; url: string; theme: string; kind: string; dark: boolean };
export const templatePages: TemplatePage[] = [
  { page: 1, url: p1.url, theme: "relief", kind: "Cover", dark: false },
  { page: 2, url: p2.url, theme: "relief", kind: "Cover", dark: false },
  { page: 3, url: p3.url, theme: "relief", kind: "Cover", dark: false },
  { page: 4, url: p4.url, theme: "relief", kind: "Cover", dark: false },
  { page: 5, url: p5.url, theme: "signal", kind: "Cover", dark: false },
  { page: 6, url: p6.url, theme: "signal", kind: "Cover", dark: false },
  { page: 7, url: p7.url, theme: "signal", kind: "Cover", dark: false },
  { page: 8, url: p8.url, theme: "signal", kind: "Cover", dark: false },
  { page: 9, url: p9.url, theme: "signal", kind: "Cover", dark: false },
  { page: 10, url: p10.url, theme: "signal", kind: "Cover", dark: false },
  { page: 11, url: p11.url, theme: "assembly", kind: "Cover", dark: false },
  { page: 12, url: p12.url, theme: "perspectives", kind: "Cover", dark: false },
  { page: 13, url: p13.url, theme: "spectrum", kind: "Cover", dark: false },
  { page: 14, url: p14.url, theme: "geometry", kind: "Cover", dark: true },
  { page: 15, url: p15.url, theme: "spectrum", kind: "Cover", dark: false },
  { page: 16, url: p16.url, theme: "spectrum", kind: "Cover", dark: true },
  { page: 17, url: p17.url, theme: "glass", kind: "Cover", dark: true },
  { page: 18, url: p18.url, theme: "strings", kind: "Cover", dark: true },
  { page: 19, url: p19.url, theme: "strings", kind: "Cover", dark: true },
  { page: 20, url: p20.url, theme: "strings", kind: "Cover", dark: true },
  { page: 21, url: p21.url, theme: "strings", kind: "Cover", dark: true },
  { page: 22, url: p22.url, theme: "relief", kind: "Content", dark: false },
  { page: 24, url: p24.url, theme: "spectrum", kind: "Divider", dark: false },
  { page: 25, url: p25.url, theme: "strings", kind: "Divider", dark: false },
  { page: 26, url: p26.url, theme: "spectrum", kind: "Divider", dark: false },
  { page: 27, url: p27.url, theme: "spectrum", kind: "Contact", dark: false },
];
export const templateFor = (t: string) => templatePages.filter((p) => p.theme === t);
