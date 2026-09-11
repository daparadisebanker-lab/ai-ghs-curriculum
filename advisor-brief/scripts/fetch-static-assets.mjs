// Pulls the large static public/ assets (the real curriculum subpage and the
// real Scholar OS engine + decks) directly from the repo's own GitHub branch
// at build time, instead of inlining hundreds of KB of static HTML/CSS/JS
// into every deploy payload. These files are already committed to the repo —
// this just avoids re-transmitting them through the deploy mechanism.
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const RAW_BASE =
  "https://raw.githubusercontent.com/daparadisebanker-lab/ai-ghs-curriculum/claude/new-session-l79r1k/advisor-brief/public";

const FILES = [
  "curriculum.html",
  "scholar-engine.css",
  "scholar-engine.js",
  "slides_w2_pathfinders.html",
  "slides_w2_innovators.html",
  "slides_w2_leaders.html",
];

async function main() {
  await mkdir("public", { recursive: true });
  for (const file of FILES) {
    const url = `${RAW_BASE}/${file}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
    }
    const text = await res.text();
    const dest = path.join("public", file);
    await writeFile(dest, text, "utf-8");
    console.log(`Fetched ${file} (${text.length.toLocaleString()} bytes)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
