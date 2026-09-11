export type SectionMeta = {
  id: string;
  index: string;
  label: string;
  navLabel: string;
  dark?: boolean;
};

export const sectionList: SectionMeta[] = [
  { id: "cover", index: "00", label: "Cover", navLabel: "Cover" },
  { id: "opportunity", index: "01", label: "The Course", navLabel: "The Course" },
  { id: "architecture", index: "02", label: "The Three-Layer Architecture", navLabel: "Architecture" },
  { id: "pedagogical-layer", index: "03", label: "The Pedagogical Layer", navLabel: "Pedagogy" },
  { id: "governance-layer", index: "04", label: "The Governance Layer", navLabel: "Governance", dark: true },
  { id: "interlock", index: "05", label: "How They Interlock", navLabel: "Interlock", dark: true },
  { id: "roadmap", index: "06", label: "The Roadmap", navLabel: "Roadmap" },
  { id: "team", index: "07", label: "Team, Roles & Open Decisions", navLabel: "Team & Decisions" },
  { id: "invitation", index: "08", label: "What This Needs From You", navLabel: "Next", dark: true },
];
