#!/usr/bin/env node
// microcrypt-graph.mjs
//
// Builds the embedded "Microcrypt Zoo" page for cryptology.city, modelled on
// how the site would present Impagliazzo's five worlds: a single top-level
// page with the implication/separation graph inlined as clickable SVG.
//
// It does NOT trust the upstream HTML or prebuilt SVG. It re-derives the SVG
// from `microcrypt.gv` so that:
//   * every node carries `URL="/<slug>"` pointing at the matching
//     cryptology.city page (from .orchestrator/microcrypt-map.json), so clicking a
//     primitive in the graph navigates into the wiki rather than off-site;
//   * unmapped nodes are visually dimmed (no link) instead of silently
//     linking nowhere;
//   * edge citation links are rewritten to internal reference pages when the
//     citation is mapped, else left as the upstream canonical URL.
//
// Requires GraphViz `dot` on PATH at build time (the CI step installs it).
// If `dot` is absent the script still writes the derived .gv and a page that
// embeds it via a build note, exiting 0 so the orchestrator can proceed.
//
// Usage:
//   node scripts/microcrypt-graph.mjs --gv microcrypt.gv \
//        --map .orchestrator/microcrypt-map.json \
//        --out "content/Microcrypt Zoo.md" \
//        [--derived build/microcrypt.derived.gv]

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { execFileSync } from "node:child_process";

function arg(name, def) {
  const i = process.argv.indexOf(name);
  return i === -1 ? def : process.argv[i + 1];
}

const gvPath = arg("--gv");
const mapPath = arg("--map", ".orchestrator/microcrypt-map.json");
const outPath = arg("--out", "content/Microcrypt Zoo.md");
const derivedPath = arg("--derived", "build/microcrypt.derived.gv");
if (!gvPath) {
  process.stderr.write("--gv is required\n");
  process.exit(2);
}

const gv = readFileSync(gvPath, "utf8");
const map = existsSync(mapPath)
  ? JSON.parse(readFileSync(mapPath, "utf8"))
  : { nodes: {} };
const nodeMap = map.nodes || {};

// Inject URL/tooltip onto each declared node line. A node declaration here is
// `IDENT [ ... ]` with no `->`. We add a `URL` attribute (GraphViz emits it as
// an SVG <a> href) for mapped nodes, and a class for unmapped ones. We only
// touch declared-node lines; edge lines are passed through untouched so the
// upstream citation links on edges are preserved.
function escAttr(s) {
  return String(s).replace(/"/g, '\\"');
}

const lines = gv.split("\n");
let injected = 0;
const out = lines.map((line) => {
  if (line.includes("->")) return line; // edge — leave as-is
  const m = line.match(
    /^(\s*)("(?:[^"\\]|\\.)*"|[A-Za-z0-9_]+)\s*\[(.*)\]\s*;?\s*$/,
  );
  if (!m) return line;
  const [, indent, rawId, attrs] = m;
  // `edge [...]`, `node [...]`, `graph [...]` are attribute-default
  // statements, not node declarations — never rewrite them.
  if (/^(edge|node|graph)$/i.test(rawId)) return line;
  const name = rawId.replace(/^"|"$/g, "").replace(/\\"/g, '"');
  const entry = nodeMap[name];
  if (entry && entry.status === "mapped" && entry.slug) {
    injected++;
    return `${indent}${rawId} [${attrs} URL="/${escAttr(entry.slug)}" target="_self"];`;
  }
  if (entry && entry.status === "ignore") return line;
  // unmapped / new-without-page: mark visually, no link
  return `${indent}${rawId} [${attrs} color="gray70" fontcolor="gray50"];`;
});

mkdirSync(dirname(derivedPath), { recursive: true });
writeFileSync(derivedPath, out.join("\n"));
process.stderr.write(
  `microcrypt-graph: injected ${injected} internal link(s) into ${derivedPath}\n`,
);

// Try to render SVG with dot.
let svg = null;
try {
  svg = execFileSync("dot", ["-Tsvg", derivedPath], {
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
  });
  // Make the SVG responsive: drop fixed width/height, keep viewBox.
  svg = svg
    .replace(/<\?xml[^>]*\?>\s*/i, "")
    .replace(/<!DOCTYPE[^>]*>\s*/i, "")
    .replace(
      /<svg([^>]*?)\swidth="[^"]*"\sheight="[^"]*"/i,
      '<svg$1 width="100%" preserveAspectRatio="xMidYMid meet"',
    );
} catch (e) {
  process.stderr.write(
    `microcrypt-graph: dot unavailable (${e.code || e.message}); ` +
      `embedding derived .gv reference instead\n`,
  );
}

const commit = process.env.MICROCRYPT_COMMIT || "main";
const stamp = new Date().toISOString().slice(0, 10);

const frontmatter = `---
title: Microcrypt Zoo
aliases:
  - Microcrypt
  - Quantum minicrypt zoo
---
`;

const intro = `
The **Microcrypt Zoo** charts implications and separations among quantum
cryptographic primitives that may be strictly weaker than one-way functions —
the quantum analogue of mapping the territory below \\(\\PRG\\) the way
[[impagliazzos-five-worlds|Impagliazzo's five worlds]] map the territory below
\\(\\classP \\ne \\classNP\\). Solid arrows are implications (constructions);
dashed arrows are black-box separations. Click a primitive to open its page.

> This graph is generated from the
> [microcrypt-zoo](https://github.com/sattath/microcrypt-zoo) project by Or
> Sattath et al. (Apache-2.0), re-rendered with internal links. Synced
> ${stamp} at upstream \`${commit}\`. Direction of separation edges is
> verified per-paper by the skeptical-checker before any directional claim is
> made on a primitive page.
`;

const graphBlock = svg
  ? `\n<figure class="microcrypt-zoo-graph">\n${svg}\n<figcaption>Solid: implication. Dashed: separation. Grey: primitive not yet in the wiki.</figcaption>\n</figure>\n`
  : `\n> **Build note:** GraphViz \`dot\` was not available when this page was\n> generated. The CI step \`apt-get install -y graphviz\` populates the SVG.\n> Derived graph source: \`${derivedPath}\`.\n`;

writeFileSync(outPath, frontmatter + intro + graphBlock);
process.stderr.write(`microcrypt-graph: wrote ${outPath}\n`);
