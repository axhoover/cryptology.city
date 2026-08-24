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
//                     a delimited region carrying a checksum. Regenerating when
//                     nothing changed produces no diff, and a hand edit inside
//                     the region is a lint error rather than something the next
//                     regeneration silently reverts.
//
//   .reductions/relations.json
//                     the machine-readable manifest: objects, propositions, the
//                     class partial order, hyperedges, barriers. This is the
//                     interface CCwiki consumes and the formalization repo joins
//                     against — see docs/relations-json.md. It carries no
//                     timestamp, on purpose: the file is a pure function of the
//                     content, so an unchanged wiki produces a byte-identical
//                     manifest.

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { createRequire } from "node:module";
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
const objects = new Map(); // id -> object record
for (const p of pages) {
  if (!OBJECT_TYPES.has(p.fm.type)) continue;
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
      title: vid,
      aliases: [],
      unlisted: p.fm.unlisted === true,
      ...(typeof v === "object" && v?.formal ? { formal: v.formal } : {}),
    });
  }
}

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
      securityLoss: p.fm["security-loss"] ?? "",
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
      source: [].concat(p.fm.source ?? []),
      status: p.fm.status,
      page: p.rel,
      slug: p.slug,
      graphSlug: p.graphSlug,
      title: p.fm.title,
    });
  }
}
const byId = (xs) => [...xs].sort((a, b) => a.id.localeCompare(b.id));
reductions.sort((a, b) => a.id.localeCompare(b.id));
barriers.sort((a, b) => a.id.localeCompare(b.id));

// -------------------------------------------------------------- closure -----
// Hypergraph reachability is Horn-clause forward chaining: a reduction fires
// once every hypothesis is in the derived set. Linear in the total size of the
// rules if each rule is woken only by its own hypotheses, which is what the
// waiting-count index below does.
//
// `kind: inclusion` and `kind: equivalence` also propagate — an equivalence in
// both directions — because "IP subset-of PSPACE" licenses concluding PSPACE
// from IP exactly as an implication does.
function buildRules() {
  const rules = [];
  for (const r of reductions) {
    if (!r.conclusion || !r.hypotheses.length) continue;
    rules.push({ id: r.id, body: r.hypotheses, head: r.conclusion });
    if (r.kind === "equivalence")
      rules.push({
        id: r.id + "~",
        body: [r.conclusion],
        head: r.hypotheses[0],
      });
  }
  return rules;
}

function closure(seed, { exclude } = {}) {
  const rules = buildRules().filter(
    (r) => r.id !== exclude && r.id !== exclude + "~",
  );
  const wakes = new Map(); // object id -> rule indices waiting on it
  const remaining = rules.map((r) => new Set(r.body).size);
  rules.forEach((r, i) => {
    for (const b of new Set(r.body)) {
      if (!wakes.has(b)) wakes.set(b, []);
      wakes.get(b).push(i);
    }
  });
  const derived = new Set();
  const queue = [];
  // Which rule first derived each object, so a derivation can be replayed
  // rather than reported as "everything that happened to fire".
  const provenance = new Map();
  const add = (x, rule) => {
    if (!x || derived.has(x)) return;
    derived.add(x);
    if (rule) provenance.set(x, rule);
    queue.push(x);
  };
  for (const s of seed) add(s, null);
  const used = [];
  while (queue.length) {
    const cur = queue.pop();
    for (const i of wakes.get(cur) ?? []) {
      if (--remaining[i] === 0) {
        used.push(rules[i].id.replace(/~$/, ""));
        add(rules[i].head, rules[i]);
      }
    }
  }
  return { derived, used, provenance };
}

// Walk `provenance` back from a target to the seed, so the report shows the
// chain that actually reaches the conclusion.
function derivation(target, seed, provenance) {
  const seen = new Set();
  const steps = [];
  const visit = (obj) => {
    if (seen.has(obj) || seed.includes(obj)) return;
    seen.add(obj);
    const rule = provenance.get(obj);
    if (!rule) return;
    for (const b of rule.body) visit(b);
    steps.push(
      `{${rule.body.join(", ")}} => ${rule.head}  (${rule.id.replace(/~$/, "")})`,
    );
  };
  visit(target);
  return steps;
}

// A reduction is redundant when its conclusion already follows from its own
// hypotheses without it — i.e. some other chain gets there. Reported, never
// deleted: a direct one-step construction is usually worth keeping even when a
// longer path exists, and the shorter path may rest on a weaker class.
function redundant() {
  const out = [];
  for (const r of reductions) {
    if (!r.conclusion || !r.hypotheses.length) continue;
    const { derived, provenance } = closure(r.hypotheses, { exclude: r.id });
    if (derived.has(r.conclusion))
      out.push({
        id: r.id,
        page: r.page,
        hypotheses: r.hypotheses,
        conclusion: r.conclusion,
        alsoVia: derivation(r.conclusion, r.hypotheses, provenance),
      });
  }
  return out;
}

// ------------------------------------------------------- participates-in -----
const linkTo = (id) => {
  const o = objects.get(id);
  if (!o) return `\`${id}\``;
  return o.kind === "variant"
    ? `[[${o.slug}${o.anchor}|${o.title}]]`
    : `[[${o.slug}|${o.title}]]`;
};
const edgeLink = (e) => `[[${e.slug}|${e.title}]]`;

function participatesIn(id) {
  const asHyp = reductions.filter((r) => r.hypotheses.includes(id));
  const asConcl = reductions.filter((r) => r.conclusion === id);
  const bars = barriers.filter(
    (b) => b.hypotheses.includes(id) || b.conclusion === id,
  );
  if (!asHyp.length && !asConcl.length && !bars.length) return null;

  const lines = ["## Participates in", ""];
  const section = (heading, xs) => {
    if (!xs.length) return;
    lines.push(`**${heading}**`, "");
    for (const e of xs) lines.push(`- ${edgeLink(e)}`);
    lines.push("");
  };
  section(`Builds on ${objects.get(id)?.title ?? id}`, byId(asHyp));
  section(`Produces ${objects.get(id)?.title ?? id}`, byId(asConcl));
  section("Barriers", byId(bars));
  return lines.join("\n").trimEnd();
}

const digest = (s) =>
  crypto.createHash("sha256").update(s, "utf8").digest("hex").slice(0, 12);

function regionFor(id) {
  const inner = participatesIn(id);
  if (!inner) return null;
  return `${BEGIN} ${digest(inner)} -->\n${inner}\n${END}`;
}

const REGION_RE = new RegExp(
  `${BEGIN.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&")}[^>]*-->\\n?[\\s\\S]*?${END.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&",
  )}`,
  "g",
);

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
  const { derived, used } = closure(seed);
  const gained = [...derived].filter((d) => !seed.includes(d)).sort();
  console.log(
    `from {${seed.join(", ")}} the wiki derives ${gained.length} object(s):\n`,
  );
  for (const g of gained) console.log(`  ${g}`);
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
