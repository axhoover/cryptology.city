#!/usr/bin/env node
// One-shot migration: prose relation bullets -> first-class reduction/barrier pages.
//
//   node scripts/migrate-reductions.mjs                 dry run, prints the plan
//   node scripts/migrate-reductions.mjs --write         apply
//   node scripts/migrate-reductions.mjs --write --only=ids,nodes,reductions,barriers,pointers
//
// Inputs (both committed, so the migration is reproducible):
//   .reductions/worklist.json         canonical hyperedges, merged from the audit
//   .reductions/node-decisions.json   how each unresolved endpoint resolves
//
// Stages, in dependency order:
//   ids        `id:` frontmatter on every object page
//   nodes      `variants:` frontmatter, plus new `unlisted: true` stub pages
//   reductions content/Reductions/*.md
//   barriers   content/Barriers/*.md
//   pointers   replace each migrated bullet on its source page with a pointer
//
// Nothing is emitted for an edge whose endpoints do not resolve; those are
// reported, never guessed at.

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const matter = require("gray-matter");

const ROOT = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  "..",
);
const CONTENT = path.join(ROOT, "content");
const WRITE = process.argv.includes("--write");
const onlyArg = process.argv.find((a) => a.startsWith("--only="));
const STAGES = onlyArg
  ? new Set(onlyArg.slice("--only=".length).split(","))
  : new Set([
      "ids",
      "nodes",
      "props",
      "reductions",
      "inclusions",
      "barriers",
      "pointers",
    ]);

const read = (p) => JSON.parse(fs.readFileSync(p, "utf8"));
const worklist = read(path.join(ROOT, ".reductions", "worklist.json"));
const decisionsPath = path.join(ROOT, ".reductions", "node-decisions.json");
if (!fs.existsSync(decisionsPath)) {
  console.error(
    `missing ${path.relative(ROOT, decisionsPath)} — run the node-triage pass first.`,
  );
  process.exit(2);
}
const decisions = read(decisionsPath);

const report = {
  ids: [],
  variants: [],
  newPages: [],
  propositions: [],
  reductions: [],
  barriers: [],
  pointers: [],
  skipped: [],
  warnings: [],
};
const skip = (what, id, why) => report.skipped.push({ what, id, why });
const warn = (msg) => report.warnings.push(msg);

// ------------------------------------------------------------------ helpers --
const OBJECT_DIRS = [
  "Primitives",
  "Assumptions",
  "Complexity",
  "Glossary",
  "Folklore",
];
function walkMd(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walkMd(p));
    else if (e.name.endsWith(".md")) out.push(p);
  }
  return out;
}

// Mirrors github-slugger closely enough for the anchors this repo uses, and
// exactly matches the anchor check in scripts/lint.mjs.
const anchorOf = (heading) =>
  heading
    .replace(/[^\w\s-]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

const kebab = (s) =>
  String(s)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// Splice a block of YAML lines in before the closing `---` of the frontmatter.
function addFrontmatter(file, lines) {
  const src = fs.readFileSync(file, "utf8");
  if (!src.startsWith("---\n")) {
    warn(`${path.relative(ROOT, file)}: no frontmatter block; skipped`);
    return null;
  }
  const close = src.indexOf("\n---\n", 3) + 1;
  if (close === 0) {
    warn(`${path.relative(ROOT, file)}: unterminated frontmatter; skipped`);
    return null;
  }
  return src.slice(0, close) + lines.join("\n") + "\n" + src.slice(close);
}

const write = (file, contents) => {
  if (!WRITE) return;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, contents);
};

// ------------------------------------------------------- the object id table --
// id -> {file, kind: page|variant, anchor, display}
const nodes = new Map();
const pageOf = new Map(); // repo-relative file -> {fm, body, file}

for (const dir of OBJECT_DIRS) {
  for (const f of walkMd(path.join(CONTENT, dir))) {
    const { data, content } = matter(fs.readFileSync(f, "utf8"));
    pageOf.set(path.relative(ROOT, f), { fm: data, body: content, file: f });
  }
}
for (const f of walkMd(CONTENT).filter((f) => path.dirname(f) === CONTENT)) {
  const { data, content } = matter(fs.readFileSync(f, "utf8"));
  pageOf.set(path.relative(ROOT, f), { fm: data, body: content, file: f });
}

// "## Somewhat homomorphic encryption (SHE)" -> "Somewhat homomorphic encryption (SHE)"
const headingDisplay = (heading, fallback) => {
  const h = String(heading ?? "")
    .replace(/^#+\s*/, "")
    .trim();
  if (h && h.length <= 60) return h;
  // Fall back to titleizing the id. Short tokens are usually acronyms (prf,
  // abe, ot) but not always, so common words stay lowercase.
  const LOWER = new Set([
    "with",
    "from",
    "over",
    "and",
    "or",
    "to",
    "in",
    "of",
    "for",
    "the",
    "a",
    "an",
    "on",
    "by",
    "via",
    "per",
    "vs",
  ]);
  return String(fallback)
    .split("-")
    .map((w, i) =>
      LOWER.has(w) && i > 0 ? w : w.length <= 4 ? w.toUpperCase() : w,
    )
    .join("-")
    .replace(/^./, (c) => c.toUpperCase());
};

// Hyperedge titles use each object's canonical abbreviation (its first alias),
// which is what a cryptographer reads fastest. A page whose first alias names
// only PART of what the page covers gets an override: hash-function aliases
// both OWF and CRH, so an edge about one-wayness would otherwise be titled
// "CRH => PRG" — the exact conflation the variants exist to prevent.
const DISPLAY_OVERRIDE = decisions.displayOverrides ?? {};
const displayFor = (fm, fallback, id) =>
  DISPLAY_OVERRIDE[id] ??
  ((Array.isArray(fm?.aliases) && fm.aliases[0]) || fm?.title || fallback);

// Variant headings live in the decisions file; a variant already written to a
// page's frontmatter carries only its anchor, so recover the display name here.
const variantHeading = new Map(
  (decisions.variants ?? []).map((v) => [v.variantId, v.anchorHeading]),
);

// Existing ids (the pilot already placed seven).
for (const [relFile, p] of pageOf) {
  if (p.fm.id)
    nodes.set(p.fm.id, {
      file: relFile,
      kind: "page",
      display: displayFor(p.fm, p.fm.id, p.fm.id),
    });
  for (const [vid, v] of Object.entries(p.fm.variants ?? {})) {
    nodes.set(vid, {
      file: relFile,
      kind: "variant",
      anchor: typeof v === "string" ? v : v?.anchor,
      display: headingDisplay(variantHeading.get(vid), vid),
    });
  }
}

// ------------------------------------------------------------- stage: ids ----
if (STAGES.has("ids")) {
  const pending = new Map(); // relFile -> id
  for (const row of decisions.pageIds ?? []) {
    const rel = row.file.startsWith("content/")
      ? row.file
      : path.join("content", row.file);
    const p = pageOf.get(rel);
    if (!p) {
      warn(`pageIds: no such page ${rel}`);
      continue;
    }
    if (p.fm.id) continue; // pilot pages keep theirs
    if (nodes.has(row.id)) {
      skip("id", row.id, `already claimed by ${nodes.get(row.id).file}`);
      continue;
    }
    pending.set(rel, row.id);
    nodes.set(row.id, {
      file: rel,
      kind: "page",
      display: displayFor(p.fm, row.id, row.id),
    });
  }
  for (const [rel, id] of pending) {
    const out = addFrontmatter(path.join(ROOT, rel), [`id: ${id}`]);
    if (out) {
      write(path.join(ROOT, rel), out);
      report.ids.push({ file: rel, id });
    }
  }
}

// ----------------------------------------------------------- stage: nodes ----
if (STAGES.has("nodes")) {
  // variants, grouped per page so each file is rewritten once
  const byPage = new Map();
  for (const v of decisions.variants ?? []) {
    const rel = v.file.startsWith("content/")
      ? v.file
      : path.join("content", v.file);
    if (!pageOf.has(rel)) {
      warn(`variants: no such page ${rel}`);
      continue;
    }
    if (nodes.has(v.variantId)) {
      skip(
        "variant",
        v.variantId,
        `already an id on ${nodes.get(v.variantId).file}`,
      );
      continue;
    }
    // The anchor must be a real heading, or the lint rejects it at emit time.
    const headings = [
      ...pageOf.get(rel).body.matchAll(/^#{1,6}\s+(.+?)\s*$/gm),
    ].map((m) => anchorOf(m[1]));
    const want = String(v.anchor || "").replace(/^#/, "");
    if (!headings.includes(want)) {
      skip(
        "variant",
        v.variantId,
        `anchor #${want} is not a heading on ${rel} (has: ${headings.slice(0, 8).join(", ")})`,
      );
      continue;
    }
    if (!byPage.has(rel)) byPage.set(rel, []);
    byPage.get(rel).push(v);
    nodes.set(v.variantId, {
      file: rel,
      kind: "variant",
      anchor: "#" + want,
      // A variant's display name is the heading it points at, so titles read
      // "Ring-LWE" rather than the raw id "ring-lwe".
      display: headingDisplay(v.anchorHeading, v.variantId),
    });
  }
  for (const [rel, vs] of byPage) {
    const file = path.join(ROOT, rel);
    const existing = pageOf.get(rel).fm.variants ?? {};
    const lines = Object.keys(existing).length
      ? vs.map((v) => `  ${v.variantId}: "${v.anchor}"`)
      : ["variants:", ...vs.map((v) => `  ${v.variantId}: "${v.anchor}"`)];
    // When the page already has a variants block we must splice into it, not
    // re-declare the key.
    let out;
    if (Object.keys(existing).length) {
      const src = fs.readFileSync(file, "utf8");
      const m = src.match(/^variants:\n((?:[ \t]+.*\n)+)/m);
      if (!m) {
        warn(
          `${rel}: has variants in frontmatter but no literal block; skipped`,
        );
        continue;
      }
      out = src.replace(m[0], m[0] + lines.join("\n") + "\n");
    } else {
      out = addFrontmatter(file, lines);
    }
    if (out) {
      write(file, out);
      for (const v of vs)
        report.variants.push({ file: rel, id: v.variantId, anchor: v.anchor });
    }
  }

  // aliases: an id that is simply another spelling of a real one
  for (const a of decisions.aliases ?? []) {
    if (nodes.has(a.canonicalId))
      nodes.set(a.objectId, {
        ...nodes.get(a.canonicalId),
        aliasOf: a.canonicalId,
      });
    else
      skip(
        "alias",
        a.objectId,
        `canonical id ${a.canonicalId} does not resolve`,
      );
  }

  // new unlisted stub pages
  for (const n of decisions.newPages ?? []) {
    const rel = path.join("content", n.directory, n.filename);
    const file = path.join(ROOT, rel);
    if (fs.existsSync(file)) {
      skip("new-page", n.objectId, `${rel} already exists`);
      nodes.set(n.objectId, {
        file: rel,
        kind: "page",
        display: n.abbrev || n.title,
      });
      continue;
    }
    const type = {
      Primitives: "primitive",
      Assumptions: "assumption",
      Complexity: "complexity-class",
      Glossary: "glossary",
      Folklore: "folklore",
    }[n.directory];
    if (!type) {
      skip("new-page", n.objectId, `unknown directory ${n.directory}`);
      continue;
    }
    const aliases = [n.abbrev, n.title]
      .filter(Boolean)
      .filter((a, i, xs) => xs.indexOf(a) === i);
    const fm = [
      "---",
      `type: ${type}`,
      "status: stub",
      "aliases:",
      ...aliases.map((a) => `  - ${a}`),
      `title: ${n.title}`,
      `id: ${n.objectId}`,
      ...(n.unlisted === false ? [] : ["unlisted: true"]),
      "---",
      "",
      `# ${n.title}`,
      "",
      n.definition,
      "",
      "TODO: syntax and security definition.",
      "",
    ].join("\n");
    write(file, fm);
    nodes.set(n.objectId, {
      file: rel,
      kind: "page",
      display: n.abbrev || n.title,
    });
    report.newPages.push({ file: rel, id: n.objectId, title: n.title });
  }
}

// ----------------------------------------------------------- stage: props ----
// Barrier consequences of kind `complexity` resolve against propositions.yaml
// rather than against a page, so the registry has to grow before the barriers
// that reference it are emitted.
const propositionKeys = new Set();
{
  const pf = path.join(ROOT, "schema", "propositions.yaml");
  const src = fs.readFileSync(pf, "utf8");
  for (const m of src.matchAll(/^  ([a-z0-9-]+):$/gm))
    propositionKeys.add(m[1]);

  if (STAGES.has("props")) {
    const add = [];
    for (const p of decisions.propositions ?? []) {
      if (propositionKeys.has(p.key)) continue;
      propositionKeys.add(p.key);
      add.push(p);
    }
    if (add.length) {
      const block = add
        .map((p) =>
          [
            "",
            `  ${p.key}:`,
            `    title: ${JSON.stringify(p.title)}`,
            `    believed: ${p.believed === true}`,
            ...(p.page ? [`    page: ${p.page}`] : []),
          ].join("\n"),
        )
        .join("\n");
      write(pf, src.trimEnd() + "\n" + block + "\n");
      report.propositions.push(...add.map((p) => p.key));
    }
  }
}

// --------------------------------------------------------- edge emission ----
const CITEKEY = /\[\[[^\]|]*\|([^\]]+)\]\]/;

// The house citation form is [[<filename minus .md, byte-for-byte>|<key>]].
// The audit recorded bare keys ("GGM86"), so build the key -> filename index
// from disk. Reconstructing a filename from a paper title is not possible —
// case, commas, and double spaces are all unrecoverable — so this must come
// from the real directory listing.
const refIndex = new Map();
for (const f of fs.existsSync(path.join(CONTENT, "References"))
  ? fs.readdirSync(path.join(CONTENT, "References"))
  : []) {
  if (!f.endsWith(".md")) continue;
  const stem = f.slice(0, -3);
  const filePrefix = stem.split(" - ")[0];
  const { data } = matter(
    fs.readFileSync(path.join(CONTENT, "References", f), "utf8"),
  );
  const key = String(data.title ?? filePrefix);
  if (!refIndex.has(key)) refIndex.set(key, stem);
  if (!refIndex.has(filePrefix)) refIndex.set(filePrefix, stem);
}

const missingRefs = new Set();
const asCitation = (src) => {
  const v = String(src).trim();
  if (/^\[\[.+\|.+\]\]$/.test(v)) return v; // already the house form
  if (v === "folklore") return null;
  const stem = refIndex.get(v);
  if (!stem) {
    missingRefs.add(v);
    return null; // never invent a reference page
  }
  return `[[${stem}|${v}]]`;
};

const citeKeyOf = (src) => {
  const v = String(src).trim();
  const m = v.match(CITEKEY);
  return m ? m[1].trim() : refIndex.has(v) ? v : null;
};

const abbrev = (id) => {
  const n = nodes.get(id);
  const d = n?.display ?? id;
  return kebab(d) || kebab(id);
};

// The audit recorded class values that are not classes: vague ones the wiki
// never disambiguated, and idealized MODELS mis-filed on the class axis. Map
// them conservatively — always toward the weaker claim, so the migration never
// asserts more than the source did.
//
//   For a REDUCTION the weaker claim is the broader class (`free` claims least
//   about the proof technique). For a BARRIER it is the opposite: ruling out a
//   broader class is a STRONGER barrier, so anything unclear becomes
//   `unstated`, which the contradiction check treats as comparable to nothing.
const CLASS_MODEL = {
  "generic-group-model": "generic-group",
  "generic-ring-model": "other",
  "algebraic-group-model": "algebraic-group",
};
function normalizeClass(raw, isBarrier) {
  const c = String(raw ?? "").trim();
  if (CLASS_MODEL[c]) return { class: "free", model: CLASS_MODEL[c] };
  if (!c || c === "unstated" || c === "any") return { class: "unstated" };
  if (c === "non-black-box") return { class: isBarrier ? "unstated" : "free" };
  // "black-box", "black-box-construction", "black-box-simulator", ... — real
  // information, but not enough to name an RTV notion.
  if (c.includes("black-box")) {
    const known = [
      "fully-black-box",
      "semi-black-box",
      "weakly-black-box",
      "forall-exists-semi-black-box",
      "forall-exists-weakly-black-box",
    ];
    return { class: known.includes(c) ? c : "unstated" };
  }
  if (c === "relativizing" || c === "free") return { class: c };
  return { class: "unstated" };
}

const usedIds = new Set();
const usedFiles = new Set();
// A reduction and a barrier can share a hyperedge, so `red-pke-to-ot` and
// `bar-pke-to-ot` would both want the filename `pke-to-ot`. Barrier files read
// as what they assert — "no reduction from X to Y" — and collisions are broken
// globally rather than per-type.
function fileStem(id) {
  const base = id.startsWith("bar-")
    ? "no-" + id.slice(4)
    : id.replace(/^red-/, "");
  let stem = base,
    i = 2;
  while (usedFiles.has(stem)) stem = `${base}-${i++}`;
  usedFiles.add(stem);
  return stem;
}
function edgeId(prefix, hyps, concl, sources) {
  const key = sources.map(citeKeyOf).find(Boolean);
  const base = [
    prefix,
    hyps.map(abbrev).join("-and-"),
    "to",
    abbrev(concl),
    key ? kebab(key) : null,
  ]
    .filter(Boolean)
    .join("-");
  let id = base,
    i = 2;
  while (usedIds.has(id)) id = `${base}-${i++}`;
  usedIds.add(id);
  return id;
}

const linkTo = (id) => {
  const n = nodes.get(id);
  if (!n) return `\`${id}\``;
  const slug = path.basename(n.file, ".md");
  const disp = n.display ?? id;
  return n.kind === "variant"
    ? `[[${slug}${n.anchor}|${disp}]]`
    : `[[${slug}|${disp}]]`;
};

const display = (id) => nodes.get(id)?.display ?? id;

const yamlList = (xs) =>
  xs.length === 1 && !String(xs[0]).includes('"')
    ? null
    : xs.map((x) => `  - ${JSON.stringify(String(x))}`);

function sourceBlock(sources) {
  const cited = sources.map(asCitation).filter(Boolean);
  if (!cited.length) return ["source: folklore"];
  return ["source:", ...cited.map((s) => `  - ${JSON.stringify(s)}`)];
}

// The verbatim statements a page carries, quoted with provenance.
function statementSection(edge) {
  const out = [];
  const seen = new Set();
  for (const st of edge.statedOn ?? []) {
    const v = String(st.verbatim ?? "").trim();
    if (!v || seen.has(v)) continue;
    seen.add(v);
    const rel = st.sourcePage.replace(/^content\//, "").replace(/\.md$/, "");
    const slug = path.basename(rel);
    const raw = String(st.section ?? "")
      .replace(/^#+\s*/, "")
      .trim();
    // The audit sometimes recorded a note where a heading belongs, e.g.
    // "(bare paragraph; page has NO H1 ...)". Only real headings are labels.
    const sect =
      raw && raw.length <= 48 && !/[();]/.test(raw) ? ` § ${raw}` : "";
    out.push(`Migrated verbatim from [[${slug}]]${sect}:`, "");
    out.push(...v.split("\n").map((l) => (l.trim() ? `> ${l}` : ">")), "");
  }
  return out;
}

function notesSection(edge, extra = []) {
  const out = [];
  const problems = [...new Set(edge.problems ?? [])].filter(Boolean);
  if (!edge.sources?.length)
    out.push(
      "`source: folklore`: the claim carried no citation on the page it was",
      "migrated from, and none was invented.",
      "",
    );
  if (edge.class === "unstated")
    out.push(
      "`class: unstated`: no citing page says which notion of reduction is meant.",
      "Recording a class the wiki does not state would add a claim.",
      "",
    );
  out.push(...extra);
  if (problems.length) {
    out.push(
      "Recorded during migration and **not fixed** — these are claims about the",
      "source text, not changes to it:",
      "",
      ...problems.map((p) => `- ${deLink(p)}`),
      "",
    );
  }
  return out;
}

// The triage produced a map from every endpoint spelling seen in the audit to
// the id it actually resolves to (e.g. one-way-function -> owf, ideal-lattices
// -> ideal-svp). Apply it before checking resolution, or correct edges look
// broken purely because the audit and the wiki spell a node differently.
const endpointMap = decisions.endpointMap ?? {};

// The audit keyed endpoints by FILENAME SLUG (public-key-encryption); the
// triage assigned abbreviation ids (pke). Bridge the two, plus every alias a
// page declares, so an endpoint spelled any of the three ways lands on the id.
const slugToId = new Map();
for (const [id, n] of nodes) {
  if (n.kind !== "page") continue;
  slugToId.set(path.basename(n.file, ".md"), id);
  const fm = pageOf.get(n.file)?.fm;
  for (const a of Array.isArray(fm?.aliases) ? fm.aliases : []) {
    const k = kebab(a);
    if (k && !slugToId.has(k)) slugToId.set(k, id);
  }
}

const remap = (id) => {
  if (!id) return id;
  if (nodes.has(id)) return id;
  const to = endpointMap[id];
  const mapped =
    typeof to === "string"
      ? to
      : to && typeof to === "object" && typeof to.id === "string"
        ? to.id
        : null;
  if (mapped && nodes.has(mapped)) return mapped;
  if (slugToId.has(id)) return slugToId.get(id);
  if (mapped && slugToId.has(mapped)) return slugToId.get(mapped);
  return mapped ?? id;
};

// Audit commentary frequently *mentions* the citation form, e.g. "should be
// cited as [[KEY - Full Title|KEY]]". Rendered as-is those become live links to
// nothing. They are prose about links, not links, so they become inline code.
const deLink = (t) =>
  String(t)
    .replace(/\[\[([^\]]+)\]\]/g, "`[[$1]]`")
    .replace(/\n+/g, " ")
    .trim();

const AMBIGUOUS = new Set(decisions.ambiguousEndpoints ?? []);

// Hyperedges already on disk. The pilot pages were hand-authored and carry
// judgements the generator cannot reproduce (a verified class, the folklore/via
// decision, flagged math errors), so a generated page never overwrites or
// duplicates one.
const existingEdges = new Set();
for (const d of ["Reductions", "Barriers"]) {
  const dir = path.join(CONTENT, d);
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith(".md")) continue;
    const { data } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
    existingEdges.add(
      `${d}|${[...(data.hypotheses ?? [])].sort().join("+")}=>${data.conclusion}`,
    );
  }
}

// The canonicalizer keyed edges by (hypotheses, conclusion, CLASS), so one
// hyperedge stated with two different class guesses became two pages. Merge on
// the hyperedge alone — the class is a property of the claim, not part of its
// identity — unioning sources, statements and problems.
function mergeByHyperedge(edges, dirLabel) {
  const byKey = new Map();
  for (const raw of edges) {
    const hyps = [...new Set((raw.hypotheses ?? []).map(remap))].sort();
    const concl = remap(raw.conclusion);
    const key = `${dirLabel}|${hyps.join("+")}=>${concl}`;
    const prev = byKey.get(key);
    if (!prev) {
      byKey.set(key, { ...raw, __key: key });
      continue;
    }
    prev.sources = [
      ...new Set([...(prev.sources ?? []), ...(raw.sources ?? [])]),
    ];
    prev.statedOn = [...(prev.statedOn ?? []), ...(raw.statedOn ?? [])];
    prev.problems = [
      ...new Set([...(prev.problems ?? []), ...(raw.problems ?? [])]),
    ];
    prev.__mergedFrom = [...(prev.__mergedFrom ?? [prev.id]), raw.id];
    // Prefer a stated class/model over an unstated one.
    if ((!prev.class || prev.class === "unstated") && raw.class)
      prev.class = raw.class;
    if ((!prev.model || prev.model === "unstated") && raw.model)
      prev.model = raw.model;
    if (!prev.sketchVerbatim && raw.sketchVerbatim)
      prev.sketchVerbatim = raw.sketchVerbatim;
  }
  return [...byKey.values()];
}

function emitEdge(edge, kindLabel) {
  const hyps = [...new Set((edge.hypotheses ?? []).map(remap))];
  const concl = remap(edge.conclusion);
  if (!hyps.length) {
    skip(
      kindLabel,
      edge.id,
      "no hypotheses; an unconditional claim is not a hyperedge",
    );
    return null;
  }
  if (!concl) {
    skip(kindLabel, edge.id, "no conclusion");
    return null;
  }
  const amb = [...hyps, concl].filter((o) => AMBIGUOUS.has(o));
  if (amb.length) {
    (report.ambiguous ??= []).push({
      edge: edge.id,
      endpoints: amb,
      why: "resolves to a page that covers two distinct objects; needs the variant id instead",
    });
  }
  const unresolved = [...hyps, concl].filter((o) => !o || !nodes.has(o));
  if (unresolved.length) {
    skip(kindLabel, edge.id, `unresolved endpoints: ${unresolved.join(", ")}`);
    return null;
  }
  return { hyps, concl };
}

// ------------------------------------------------------ stage: reductions ----
if (STAGES.has("reductions")) {
  for (const edge of mergeByHyperedge(
    worklist.reductions ?? [],
    "Reductions",
  )) {
    if (existingEdges.has(edge.__key)) {
      skip("reduction", edge.id, "hyperedge already has a hand-authored page");
      continue;
    }
    const r = emitEdge(edge, "reduction");
    if (!r) continue;
    const { hyps, concl } = r;
    if (hyps.includes(concl)) {
      skip("reduction", edge.id, `self-loop on ${concl}`);
      continue;
    }
    const sources = edge.sources ?? [];
    const norm = normalizeClass(edge.class, false);
    const kind =
      edge.direction === "equivalent" && hyps.length === 1
        ? "equivalence"
        : edge.category === "class-inclusion" && hyps.length === 1
          ? "inclusion"
          : "implication";
    const id = edgeId("red", hyps, concl, sources);
    const arrow =
      kind === "equivalence" ? "⇔" : kind === "inclusion" ? "⊆" : "⇒";
    const title = `${hyps.map(display).join(" + ")} ${arrow} ${display(concl)}`;
    const status =
      sources.length && edge.confidence !== "low" ? "draft" : "stub";
    const body = [
      "---",
      "type: reduction",
      `status: ${status}`,
      `title: ${JSON.stringify(title)}`,
      "aliases: []",
      `id: ${id}`,
      `kind: ${kind}`,
      `hypotheses: [${hyps.join(", ")}]`,
      `conclusion: ${concl}`,
      `class: ${norm.class}`,
      `model: ${norm.model ?? (edge.model && edge.model !== "unstated" ? edge.model : "standard")}`,
      ...sourceBlock(sources),
      'security-loss: ""',
      "---",
      "",
      `# ${title}`,
      "",
      `${hyps.map(linkTo).join(" together with ")} ${
        kind === "equivalence"
          ? "is equivalent to"
          : kind === "inclusion"
            ? "is contained in"
            : "implies"
      } ${linkTo(concl)}.`,
      "",
      "## Statement",
      "",
      ...statementSection(edge),
    ];
    const extra = [];
    if ((edge.statedOn ?? []).length > 1)
      extra.push(
        `This relation is stated on ${edge.statedOn.length} pages; the statements above are all of them.`,
        "",
      );
    if (edge.sourceConflict)
      extra.push(`Citations disagree across pages: ${edge.sourceConflict}`, "");
    if (edge.classConflict)
      extra.push(`Class disagrees across pages: ${edge.classConflict}`, "");
    const notes = notesSection(edge, extra);
    if (notes.length) body.push("## Notes", "", ...notes);
    const file = path.join(CONTENT, "Reductions", `${fileStem(id)}.md`);
    write(
      file,
      body
        .join("\n")
        .replace(/\n{3,}/g, "\n\n")
        .trimEnd() + "\n",
    );
    report.reductions.push({
      id,
      file: path.relative(ROOT, file),
      status,
      kind,
      title,
      sourceEdge: edge.id,
      mergedFrom: edge.__mergedFrom ?? [],
    });
  }
}

// ------------------------------------------------------ stage: inclusions ----
// Containments and equalities between complexity classes. They were held back
// from the first pass because they have no adversary and no primitive, so the
// reduction-class axis does not discriminate — but they ARE hyperedges, and
// leaving them in prose is what let "AM[k] = AM[2] = AM" read as a one-way
// implication in the first place.
//
// `class: free` is the honest value, not `unstated`: a containment is proved by
// any argument whatsoever, which is exactly what `free` denotes. It also makes
// a complexity separation expressible as a barrier ruling out `free`.
if (STAGES.has("inclusions")) {
  const KIND_OF = {
    "class-inclusion": "inclusion",
    equivalent: "equivalence",
    implies: "implication",
  };
  const flat = (worklist.deferred?.classInclusions ?? []).map((e) => ({
    ...e,
    sources: e.sources ?? [],
    statedOn: [
      {
        sourcePage: e.sourcePage,
        line: e.line,
        section: e.section,
        verbatim: e.verbatim,
        sources: e.sources ?? [],
      },
    ],
  }));
  for (const edge of mergeByHyperedge(flat, "Reductions")) {
    if (existingEdges.has(edge.__key)) {
      skip(
        "inclusion",
        edge.id ?? edge.recordId,
        "hyperedge already has a page",
      );
      continue;
    }
    const kind = KIND_OF[edge.direction];
    if (!kind) {
      skip(
        "inclusion",
        edge.recordId,
        `direction "${edge.direction}" is not a containment; a separation belongs in content/Barriers/`,
      );
      continue;
    }
    const r = emitEdge(edge, "inclusion");
    if (!r) continue;
    const { hyps, concl } = r;
    if (hyps.includes(concl)) {
      skip("inclusion", edge.recordId, `self-loop on ${concl}`);
      continue;
    }
    // inclusion and equivalence relate exactly two objects.
    if (kind !== "implication" && hyps.length !== 1) {
      skip(
        "inclusion",
        edge.recordId,
        `kind ${kind} needs exactly one hypothesis, got ${hyps.length}`,
      );
      continue;
    }
    const sources = edge.sources ?? [];
    const id = edgeId("red", hyps, concl, sources);
    const arrow =
      kind === "equivalence" ? "=" : kind === "inclusion" ? "⊆" : "⇒";
    const title = `${hyps.map(display).join(" + ")} ${arrow} ${display(concl)}`;
    const status =
      sources.length && edge.confidence !== "low" ? "draft" : "stub";
    const body = [
      "---",
      "type: reduction",
      `status: ${status}`,
      `title: ${JSON.stringify(title)}`,
      "aliases: []",
      `id: ${id}`,
      `kind: ${kind}`,
      `hypotheses: [${hyps.join(", ")}]`,
      `conclusion: ${concl}`,
      "class: free",
      `model: ${edge.model === "quantum" ? "quantum" : "standard"}`,
      ...sourceBlock(sources),
      'security-loss: ""',
      "---",
      "",
      `# ${title}`,
      "",
      `${linkTo(hyps[0])} ${
        kind === "equivalence"
          ? "is equal to"
          : kind === "inclusion"
            ? "is contained in"
            : "implies"
      } ${linkTo(concl)}.`,
      "",
      "## Statement",
      "",
      ...statementSection(edge),
    ];
    const notes = notesSection(edge, [
      "`class: free` because a containment between complexity classes is proved",
      "by any argument at all; the reduction-class axis does not discriminate",
      "here, and `unstated` would wrongly suggest the information is missing.",
      "",
    ]);
    if (notes.length) body.push("## Notes", "", ...notes);
    const file = path.join(CONTENT, "Reductions", `${fileStem(id)}.md`);
    write(
      file,
      body
        .join("\n")
        .replace(/\n{3,}/g, "\n\n")
        .trimEnd() + "\n",
    );
    report.reductions.push({
      id,
      file: path.relative(ROOT, file),
      status,
      kind,
      title,
      sourceEdge: edge.recordId,
      mergedFrom: edge.__mergedFrom ?? [],
    });
  }
}

// -------------------------------------------------------- stage: barriers ----
// The canonicalizer put several barriers' CONSEQUENCE in the conclusion slot:
// "a reduction ... would imply a contradiction" became conclusion: contradiction.
// The triage recovered the real conclusion for the eight `contradiction` cases;
// where it could not, the hyperedge has no conclusion to state and the page is
// not emitted, because inventing one would be fabricating the theorem.
const conclusionFix = new Map();
for (const b of decisions.contradictionBarriers ?? []) {
  if (b.realConclusion) conclusionFix.set(b.barrierId, b);
}
const propositionSlots = new Set(
  (decisions.contradictionBarriers ?? [])
    .filter((b) => !b.realConclusion)
    .map((b) => b.currentConclusion)
    .filter(Boolean),
);

if (STAGES.has("barriers")) {
  for (const raw of mergeByHyperedge(worklist.barriers ?? [], "Barriers")) {
    let edge = raw;
    if (existingEdges.has(edge.__key)) {
      skip("barrier", edge.id, "hyperedge already has a hand-authored page");
      continue;
    }
    const fix = conclusionFix.get(edge.id);
    if (fix) {
      edge = {
        ...edge,
        conclusion: fix.realConclusion,
        consequenceKind: "contradiction",
        consequenceTarget: "",
      };
    } else if (
      !edge.conclusion ||
      propositionSlots.has(edge.conclusion) ||
      propositionKeys.has(edge.conclusion)
    ) {
      skip(
        "barrier",
        edge.id,
        `conclusion slot holds a consequence ("${edge.conclusion}"), not an object; the real conclusion is not recoverable from the source bullet`,
      );
      continue;
    }
    const r = emitEdge(edge, "barrier");
    if (!r) continue;
    const { hyps, concl } = r;
    const sources = edge.sources ?? [];
    const id = edgeId("bar", hyps, concl, sources);
    const kindRaw = edge.consequenceKind;
    const cKind = [
      "contradiction",
      "object",
      "complexity",
      "reduction",
    ].includes(kindRaw)
      ? kindRaw
      : "contradiction";
    const target =
      cKind === "contradiction" ? "" : (edge.consequenceTarget ?? "");
    if (cKind !== "contradiction" && !target) {
      skip("barrier", edge.id, `consequence kind ${cKind} with no target`);
      continue;
    }
    if (cKind === "complexity" && !propositionKeys.has(target)) {
      skip(
        "barrier",
        edge.id,
        `consequence target ${target} is not in schema/propositions.yaml`,
      );
      continue;
    }
    if (cKind === "object" && !nodes.has(target)) {
      skip(
        "barrier",
        edge.id,
        `consequence target ${target} does not resolve to an object`,
      );
      continue;
    }
    if (hyps.includes(concl)) {
      skip("barrier", edge.id, `self-loop on ${concl}`);
      continue;
    }
    const bnorm = normalizeClass(edge.class, true);
    const cls = bnorm.class;
    const strength =
      edge.strength === "conditional" ? "conditional" : "unconditional";
    const condOn = Array.isArray(edge.conditionalOn) ? edge.conditionalOn : [];
    if (strength === "conditional" && !condOn.length) {
      skip("barrier", edge.id, "conditional but no conditional-on");
      continue;
    }
    const title =
      `No ${cls === "unstated" ? "" : cls + " "}reduction from ${hyps
        .map(display)
        .join(" + ")} to ${display(concl)}`.replace(/\s+/g, " ");
    const status =
      sources.length && edge.confidence !== "low" ? "draft" : "stub";
    const body = [
      "---",
      "type: barrier",
      `status: ${status}`,
      `title: ${JSON.stringify(title)}`,
      "aliases: []",
      `id: ${id}`,
      `hypotheses: [${hyps.join(", ")}]`,
      `conclusion: ${concl}`,
      `class: ${cls}`,
      "consequences:",
      `  - kind: ${cKind}`,
      `    target: ${JSON.stringify(target)}`,
      `    class: ${cls}`,
      `strength: ${strength}`,
      ...(strength === "conditional"
        ? ["conditional-on:", ...condOn.map((c) => `  - ${c}`)]
        : []),
      ...sourceBlock(sources),
      "---",
      "",
      `# ${title}`,
      "",
      `A reduction of class \`${cls}\` from ${hyps.map(linkTo).join(" together with ")} to ${linkTo(concl)} would imply ${
        cKind === "contradiction" ? "a contradiction" : `\`${target}\``
      }.`,
      "",
      "## Statement",
      "",
      ...statementSection(edge),
    ];
    const notes = notesSection(edge);
    if (notes.length) body.push("## Notes", "", ...notes);
    const file = path.join(CONTENT, "Barriers", `${fileStem(id)}.md`);
    write(
      file,
      body
        .join("\n")
        .replace(/\n{3,}/g, "\n\n")
        .trimEnd() + "\n",
    );
    report.barriers.push({
      id,
      file: path.relative(ROOT, file),
      status,
      title,
      sourceEdge: edge.id,
      mergedFrom: edge.__mergedFrom ?? [],
    });
  }
}

// -------------------------------------------------------- stage: pointers ----
// Replace each migrated bullet, on the page it came from, with a pointer. The
// match is byte-exact against the recorded verbatim; a miss is reported, never
// approximated, because a fuzzy match here silently mangles page content.
if (STAGES.has("pointers")) {
  // worklist edge id -> the page we actually emitted for it
  const emitted = new Map();
  for (const p of [...report.reductions, ...report.barriers]) {
    emitted.set(p.sourceEdge, p);
    for (const alsoFrom of p.mergedFrom ?? []) emitted.set(alsoFrom, p);
  }

  // A single bullet can be the source of several hyperedges (a composite chain
  // splits into one page per link), so group by page and then by verbatim.
  const byPage = new Map(); // relFile -> Map(verbatim -> [emitted pages])
  for (const edge of [
    ...(worklist.reductions ?? []),
    ...(worklist.barriers ?? []),
  ]) {
    const page = emitted.get(edge.id);
    if (!page) continue; // never emitted; leave its bullet alone
    for (const st of edge.statedOn ?? []) {
      const v = String(st.verbatim ?? "").trim();
      if (!v) continue;
      if (!byPage.has(st.sourcePage)) byPage.set(st.sourcePage, new Map());
      const m = byPage.get(st.sourcePage);
      if (!m.has(v)) m.set(v, []);
      if (!m.get(v).some((p) => p.id === page.id)) m.get(v).push(page);
    }
  }

  for (const [rel, verbatims] of byPage) {
    const file = path.join(ROOT, rel);
    if (!fs.existsSync(file)) {
      warn(`pointers: no such page ${rel}`);
      continue;
    }
    let src = fs.readFileSync(file, "utf8");
    let changed = 0;
    for (const [verbatim, pages] of verbatims) {
      if (!pages.length) continue;
      if (!src.includes(verbatim)) {
        skip(
          "pointer",
          rel,
          "verbatim no longer matches the page byte-for-byte; bullet left as-is",
        );
        continue;
      }
      // Only BULLETS are rewritten. A recorded verbatim can also be a prose
      // sentence in the middle of a paragraph; swapping that for a bare link
      // mangles the surrounding text, so those are left in place and reported.
      const marker = verbatim.match(/^([ \t]*)-[ \t]+/);
      if (!marker) {
        skip(
          "pointer",
          rel,
          "statement is prose, not a bullet; left in place for a human to rewrite",
        );
        continue;
      }
      const indent = marker[1];
      const pointer = pages
        .map(
          (p) =>
            `${indent}- [[${path.basename(p.file, ".md")}|${p.title ?? path.basename(p.file, ".md")}]]`,
        )
        .join("\n");
      src = src.replace(verbatim, pointer);
      changed++;
    }
    if (changed) {
      write(file, src);
      report.pointers.push({ file: rel, replaced: changed });
    }
  }
}

// ------------------------------------------------------------------ report ----
const n = (x) => String(x).padStart(5);
console.log(WRITE ? "APPLIED\n" : "DRY RUN (pass --write to apply)\n");
console.log(`${n(report.ids.length)}  object pages given an id`);
console.log(`${n(report.variants.length)}  variants declared`);
console.log(`${n(report.newPages.length)}  new unlisted stub pages`);
console.log(`${n(report.reductions.length)}  reduction pages`);
console.log(`${n(report.barriers.length)}  barrier pages`);
console.log(`${n(report.pointers.length)}  source pages rewritten to pointers`);
console.log(`${n(report.skipped.length)}  skipped`);
console.log(`${n(report.warnings.length)}  warnings`);

const bucket = {};
for (const s of report.skipped) {
  const k = `${s.what}: ${s.why.replace(/:.*/, "")}`;
  bucket[k] = (bucket[k] ?? 0) + 1;
}
if (Object.keys(bucket).length) {
  console.log("\nskips by reason:");
  for (const [k, v] of Object.entries(bucket).sort((a, b) => b[1] - a[1]))
    console.log(`  ${String(v).padStart(4)}  ${k}`);
}
fs.mkdirSync(path.join(ROOT, ".reductions"), { recursive: true });
fs.writeFileSync(
  path.join(ROOT, ".reductions", "migration-report.json"),
  JSON.stringify(report, null, 1),
);
if (missingRefs.size) {
  report.missingReferences = [...missingRefs].sort();
  console.log(
    `\n${missingRefs.size} citation key(s) with no page under content/References/ — recorded as uncited, never invented:`,
  );
  console.log("  " + [...missingRefs].sort().join(", "));
}
console.log("\nfull report: .reductions/migration-report.json");
