#!/usr/bin/env node
// Derives everything the hypergraph implies, and writes it back.
//
//   node scripts/generate-relations.mjs              regenerate
//   node scripts/generate-relations.mjs --check      fail if regenerating would change anything
//   node scripts/generate-relations.mjs --derive=lwe,ddh
//                                                    what follows from an assumption set
//   node scripts/generate-relations.mjs --redundant  reductions already implied by a shorter chain
//
// Two outputs:
//
//   content/**/*.md   a "Participates in" section on every object page, inside
//                     a delimited region carrying a checksum: the edges on the
//                     page's id or its variants, the reductions proved in the
//                     model it defines, and those using it via `via` (built by
//                     scripts/participates-in.mjs). Regenerating when
//                     nothing changed produces no diff, and a hand edit inside
//                     the region is a lint error rather than something the next
//                     regeneration silently reverts.
//
//   .reductions/relations.json
//                     the machine-readable manifest: objects, propositions, the
//                     class partial order, hyperedges, barriers (each with its
//                     frontmatter `rationale`, when it has one). This is the
//                     interface CCwiki consumes and the formalization repo joins
//                     against — see docs/relations-json.md. It carries no
//                     timestamp, on purpose: the file is a pure function of the
//                     content, so an unchanged wiki produces a byte-identical
//                     manifest.

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { createRequire } from "node:module";
import { makeParticipatesIn } from "./participates-in.mjs";
import {
  closure as closureOf,
  derivation,
  scopeNames,
  edgeScope,
} from "./closure.mjs";
import { loadClasses, closure as classClosure } from "./reduction-classes.mjs";
import { rationaleRecord } from "./lint-edges.mjs";
import { headingsByAnchor, headingAt } from "./markdown-text.mjs";
const require = createRequire(import.meta.url);
const matter = require("gray-matter");
const yaml = require("js-yaml");

const ROOT = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  "..",
);
const CONTENT = path.join(ROOT, "content");
const CHECK = process.argv.includes("--check");
const deriveArg = process.argv.find((a) => a.startsWith("--derive="));
const SHOW_REDUNDANT = process.argv.includes("--redundant");

const BEGIN = "<!-- BEGIN GENERATED participates-in";
const END = "<!-- END GENERATED participates-in -->";
const OBJECT_TYPES = new Set([
  "primitive",
  "assumption",
  "complexity-class",
  "glossary",
  "folklore",
  "note",
]);

// ------------------------------------------------------------------- load ----
function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith(".md")) out.push(p);
  }
  return out;
}

const pages = [];
for (const f of walk(CONTENT)) {
  if (path.relative(CONTENT, f).startsWith("Templates/")) continue;
  const { data, content } = matter(fs.readFileSync(f, "utf8"));
  pages.push({
    file: f,
    rel: path.relative(ROOT, f),
    slug: path.basename(f, ".md"),
    // The slug Quartz addresses this page by, which is what the graph joins on.
    graphSlug: path
      .relative(CONTENT, f)
      .replace(/\.md$/, "")
      .split(path.sep)
      .join("/"),
    fm: data,
    body: content,
  });
}

const classSchema = yaml.load(
  fs.readFileSync(path.join(ROOT, "schema", "reduction-classes.yaml"), "utf8"),
);
const propositions =
  yaml.load(
    fs.readFileSync(path.join(ROOT, "schema", "propositions.yaml"), "utf8"),
  )?.propositions ?? {};

// ------------------------------------------------------------------ model ----
// A variant is titled by the heading its anchor points at on the host page,
// markdown removed and math kept (`Ring LWE`, `$k$-Linear assumption`). The
// anchor is matched the way a link to it resolves: OFM slugs a wikilink's
// anchor, and rehype-slug gives each heading its id. With no matching heading
// the title falls back to the id, and the lint rejects the anchor
// (`variant-anchor`).
const variantTitle = (headings, vid, anchor) =>
  (typeof anchor === "string" && headingAt(headings, anchor)) || vid;

const objects = new Map(); // id -> object record
for (const p of pages) {
  if (!OBJECT_TYPES.has(p.fm.type)) continue;
  const headings = p.fm.variants ? headingsByAnchor(p.body) : new Map();
  if (p.fm.id)
    objects.set(p.fm.id, {
      id: p.fm.id,
      kind: "object",
      type: p.fm.type,
      page: p.rel,
      slug: p.slug,
      graphSlug: p.graphSlug,
      title: p.fm.title ?? p.slug,
      aliases: p.fm.aliases ?? [],
      unlisted: p.fm.unlisted === true,
    });
  for (const [vid, v] of Object.entries(p.fm.variants ?? {})) {
    const anchor = typeof v === "string" ? v : v?.anchor;
    objects.set(vid, {
      id: vid,
      kind: "variant",
      type: p.fm.type,
      page: p.rel,
      slug: p.slug,
      graphSlug: p.graphSlug,
      anchor,
      of: p.fm.id,
      title: variantTitle(headings, vid, anchor),
      aliases: [],
      unlisted: p.fm.unlisted === true,
      ...(typeof v === "object" && v?.formal ? { formal: v.formal } : {}),
    });
  }
}

const withRationale = (fm) => {
  const rationale = rationaleRecord(fm);
  return rationale ? { rationale } : {};
};
const reductions = [];
const barriers = [];
for (const p of pages) {
  if (p.fm.type === "reduction") {
    reductions.push({
      id: p.fm.id,
      kind: p.fm.kind ?? "implication",
      hypotheses: p.fm.hypotheses ?? [],
      conclusion: p.fm.conclusion,
      class: p.fm.class ?? "unstated",
      model: p.fm.model ?? "standard",
      source: [].concat(p.fm.source ?? []),
      via: [].concat(p.fm.via ?? []),
      heuristic: p.fm.heuristic === true,
      securityLoss: p.fm["security-loss"] ?? "",
      // Why a field holds its value, keyed by this record's field names; the
      // key is omitted when the page has no `rationale`.
      ...withRationale(p.fm),
      status: p.fm.status,
      page: p.rel,
      slug: p.slug,
      graphSlug: p.graphSlug,
      title: p.fm.title,
    });
  } else if (p.fm.type === "barrier") {
    barriers.push({
      id: p.fm.id,
      hypotheses: p.fm.hypotheses ?? [],
      conclusion: p.fm.conclusion,
      class: p.fm.class ?? "unstated",
      consequences: p.fm.consequences ?? [],
      strength: p.fm.strength,
      conditionalOn: p.fm["conditional-on"] ?? [],
      circumventedBy: [].concat(p.fm["circumvented-by"] ?? []),
      source: [].concat(p.fm.source ?? []),
      ...withRationale(p.fm),
      status: p.fm.status,
      page: p.rel,
      slug: p.slug,
      graphSlug: p.graphSlug,
      title: p.fm.title,
    });
  }
}
reductions.sort((a, b) => a.id.localeCompare(b.id));
barriers.sort((a, b) => a.id.localeCompare(b.id));

// -------------------------------------------------------------- closure -----
// Forward chaining with model provenance lives in scripts/closure.mjs, which
// the tests share. An edge whose class relativizes (fully-black-box or
// relativizing) may consume an object scoped to an idealised model; any other
// edge may use its hypothesis' code and fires only on unscoped objects. A result
// proved from an ideal resource (ideal OT, correlated randomness, secure
// channels) is scoped to that hybrid model.
const { classes: CLASS_DEFS } = loadClasses(ROOT);
const relativizes = (cls) =>
  cls === "relativizing" ||
  (CLASS_DEFS[cls] !== undefined &&
    classClosure(CLASS_DEFS, cls).has("relativizing"));
const closure = (seed, opts = {}) =>
  closureOf(reductions, seed, { ...opts, relativizes });

// A reduction is redundant when its conclusion already follows from its own
// hypotheses without it — i.e. some other chain gets there. Reported, never
// deleted: a direct one-step construction is usually worth keeping even when a
// longer path exists, and the shorter path may rest on a weaker class.
function redundant() {
  const out = [];
  for (const r of reductions) {
    if (!r.conclusion || !r.hypotheses.length || r.heuristic) continue;
    const result = closure(r.hypotheses, { exclude: r.id });
    // Another chain counts only if it needs no idealised model beyond this
    // edge's own.
    const own = edgeScope(r);
    const m = (result.scopes.get(r.conclusion) ?? []).find(
      (x) => (x & own) === x,
    );
    if (m !== undefined)
      out.push({
        id: r.id,
        page: r.page,
        hypotheses: r.hypotheses,
        conclusion: r.conclusion,
        alsoVia: derivation(r.conclusion, r.hypotheses, result, m),
      });
  }
  return out;
}

// ------------------------------------------------------- participates-in -----
// The section itself is built in scripts/participates-in.mjs, which the tests
// share: edges on the page's id or one of its variants, then the reductions
// proved in the model the page defines or using it via `via`.
const participatesIn = makeParticipatesIn({ objects, reductions, barriers });

const digest = (s) =>
  crypto.createHash("sha256").update(s, "utf8").digest("hex").slice(0, 12);

function regionFor(id) {
  const inner = participatesIn(id);
  if (!inner) return null;
  // Blank lines around the markers so `prettier --write` leaves the region
  // byte-identical; otherwise formatting alone would break every checksum.
  return `${BEGIN} ${digest(inner)} -->\n\n${inner}\n\n${END}`;
}

const REGION_RE =
  /<!-- BEGIN GENERATED participates-in [0-9a-f]+ -->[\s\S]*?<!-- END GENERATED participates-in -->/g;

let changed = [];
for (const p of pages) {
  if (!OBJECT_TYPES.has(p.fm.type) || !p.fm.id) continue;
  const region = regionFor(p.fm.id);
  const src = fs.readFileSync(p.file, "utf8");
  const has = REGION_RE.test(src);
  REGION_RE.lastIndex = 0;
  let out;
  if (region && has) out = src.replace(REGION_RE, region);
  else if (region) out = src.trimEnd() + "\n\n" + region + "\n";
  else if (has) out = src.replace(REGION_RE, "").replace(/\n{3,}$/, "\n");
  else continue;
  if (out !== src) {
    changed.push(p.rel);
    if (!CHECK) fs.writeFileSync(p.file, out);
  }
}

// --------------------------------------------------------- relations.json ----
const manifest = {
  version: 1,
  schema: "https://cryptology.city/docs/relations-json",
  classes: Object.fromEntries(
    Object.entries(classSchema.classes ?? {}).map(([k, v]) => [
      k,
      { title: v.title, implies: v.implies ?? [] },
    ]),
  ),
  classSentinels: Object.keys(classSchema.sentinels ?? {}),
  propositions: Object.fromEntries(
    Object.entries(propositions).map(([k, v]) => [
      k,
      { title: v.title, believed: v.believed === true, page: v.page ?? null },
    ]),
  ),
  objects: [...objects.values()].sort((a, b) => a.id.localeCompare(b.id)),
  reductions,
  barriers,
};
const manifestPath = path.join(ROOT, ".reductions", "relations.json");
const manifestText = JSON.stringify(manifest, null, 1) + "\n";
const manifestChanged =
  !fs.existsSync(manifestPath) ||
  fs.readFileSync(manifestPath, "utf8") !== manifestText;
if (manifestChanged) {
  changed.push(path.relative(ROOT, manifestPath));
  if (!CHECK) {
    fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
    fs.writeFileSync(manifestPath, manifestText);
  }
}

// ------------------------------------------------------------------ modes ----
if (deriveArg) {
  const seed = deriveArg.slice("--derive=".length).split(",").filter(Boolean);
  const unknown = seed.filter((s) => !objects.has(s));
  if (unknown.length) {
    console.error(`unknown object id(s): ${unknown.join(", ")}`);
    process.exit(2);
  }
  const { derived, used, scopes } = closure(seed);
  const gained = [...derived].filter((d) => !seed.includes(d)).sort();
  console.log(
    `from {${seed.join(", ")}} the wiki derives ${gained.length} object(s):\n`,
  );
  // An object reached only through idealised-model edges is listed with the
  // models it holds in; one reached without any is listed bare.
  for (const g of gained) {
    const ms = scopes.get(g) ?? [];
    console.log(
      ms.includes(0)
        ? `  ${g}`
        : `  ${g}  [${ms.map((m) => scopeNames(m).join(" + ")).join(" | ")}]`,
    );
  }
  console.log(`\nvia ${new Set(used).size} reduction(s).`);
  process.exit(0);
}

if (SHOW_REDUNDANT) {
  const rs = redundant();
  console.log(
    `${rs.length} reduction(s) whose conclusion already follows from their own hypotheses by another chain.`,
  );
  console.log(
    "Reported, not deleted — a direct construction is often worth keeping.\n",
  );
  rs.sort(
    (a, b) => a.alsoVia.length - b.alsoVia.length || a.id.localeCompare(b.id),
  );
  for (const r of rs) {
    console.log(`  ${r.id}   {${r.hypotheses.join(", ")}} => ${r.conclusion}`);
    for (const step of r.alsoVia) console.log(`      ${step}`);
    console.log("");
  }
  process.exit(0);
}

// ----------------------------------------------------------------- report ----
console.log(
  `${objects.size} objects, ${reductions.length} reductions, ${barriers.length} barriers`,
);
if (CHECK) {
  if (changed.length) {
    console.error(
      `\n${changed.length} file(s) are out of date. Run: node scripts/generate-relations.mjs\n`,
    );
    for (const c of changed.slice(0, 20)) console.error(`  ${c}`);
    if (changed.length > 20)
      console.error(`  ... and ${changed.length - 20} more`);
    process.exit(1);
  }
  console.log("generated regions and relations.json are up to date");
} else {
  console.log(
    changed.length
      ? `updated ${changed.length} file(s)`
      : "no changes (already up to date)",
  );
}
