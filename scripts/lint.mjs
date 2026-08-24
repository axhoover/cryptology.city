#!/usr/bin/env node
// Content lint for cryptology.city.
//
//   node scripts/lint.mjs            lint all of content/
//   node scripts/lint.mjs <files..>  lint specific files (schema/macros only;
//                                    link resolution always loads every page)
//
// Checks, per page:
//   frontmatter    parses, has the required fields for its `type`, values valid
//   wikilinks      every [[target]] resolves to a page slug, alias, folder, or
//                  embedded file; known-missing targets live in
//                  scripts/stub-inventory.json and only warn
//   aliases        no alias (or page slug) is claimed by two pages
//   macros         every \command in math or pseudocode is a KaTeX built-in or
//                  defined in macros.ts; no \newcommand/\def in content
//   status         `complete` pages carry no TODO markers and have the
//                  mandated sections for their type
//   generated      "Participates in" regions match their checksum (no hand edits)
//   contradiction  no reduction claims a class a barrier rules out on the same
//                  hyperedge; the class partial order decides when it bites
//   hyperedges     reduction/barrier pages are well-formed: >=1 hypothesis,
//                  exactly one conclusion, every endpoint resolves to an object
//                  id or variant, class is in schema/reduction-classes.yaml, no
//                  self-loops; object pages never hand-author relation fields
//
// Errors print as  file:line: [rule] message  and exit 1. Warnings exit 0.

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const matter = require("gray-matter");
const yaml = require("js-yaml");
import { closure as classClosureOf, bites } from "./reduction-classes.mjs";

const ROOT = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  "..",
);
const CONTENT = path.join(ROOT, "content");
const STUB_INVENTORY = path.join(ROOT, "scripts", "stub-inventory.json");

// ---------------------------------------------------------------- schema ----
const TYPES = {
  primitive: { dir: "Primitives", object: true },
  assumption: { dir: "Assumptions", object: true },
  "complexity-class": { dir: "Complexity", object: true },
  glossary: { dir: "Glossary", object: true },
  folklore: { dir: "Folklore", object: true },
  reference: { dir: "References" },
  // Root notes host object ids too — content/impagliazzos-five-worlds.md is
  // where minicrypt / cryptomania / pessiland are defined.
  note: { dir: "", object: true }, // root pages
  reduction: {
    dir: "Reductions",
    required: [
      "id",
      "kind",
      "hypotheses",
      "conclusion",
      "class",
      "model",
      "source",
    ],
  },
  barrier: {
    dir: "Barriers",
    required: [
      "id",
      "hypotheses",
      "conclusion",
      "class",
      "consequences",
      "strength",
      "source",
    ],
  },
};
const STATUSES = ["stub", "draft", "complete"];
const COMMON_REQUIRED = ["type", "status", "title", "aliases"];
const REFERENCE_REQUIRED = ["authors", "venue", "published", "source"];
// Keys accepted beyond the required ones (typo defense: anything else errors).
const OPTIONAL_KEYS = new Set([
  "tags",
  "created",
  "defined-in",
  "cryptobib_key",
  "bibtex",
  "cryptobib_pending",
  "draft", // Quartz: draft: true unpublishes the page
  "unlisted", // built and linkable, hidden from the explorer and folder listings
  "id", // stable object id, independent of the slug
  "variants", // named sub-objects living as sections of this page
  "kind",
  "model",
  "security-loss",
  "via",
  "oracle",
  "conditional-on",
  "source",
]);
// Relation fields may never be hand-authored on an object page: an edge list
// cannot express {DDH, CRHF} => B without misrepresenting each hypothesis.
// Object pages get generated sections instead.
const FORBIDDEN_ON_OBJECTS = [
  "implies",
  "implied-by",
  "implied_by",
  "reductions",
  "barriers",
  "separations",
  "from",
  "to",
  "between",
  "hypotheses",
  "conclusion",
];
const MODELS = [
  "standard",
  "rom",
  "crs",
  "generic-group",
  "algebraic-group",
  "quantum",
  "other",
];
// What the hyperedge asserts. Implicit typing is how the prose lost equalities:
// "AM[k] = AM[2] = AM" and "QIP = PSPACE" both read as one-way implications once
// split into sub-edges. `kind` makes the assertion explicit.
//   implication  the hypotheses jointly imply the conclusion
//   inclusion    the conclusion contains the hypothesis (IP subset-of PSPACE)
//   equivalence  hypothesis and conclusion are equivalent, both directions
const KINDS = ["implication", "inclusion", "equivalence"];
const BINARY_KINDS = ["inclusion", "equivalence"]; // exactly one hypothesis
const STRENGTHS = ["unconditional", "conditional"];
const CONSEQUENCE_KINDS = [
  "contradiction",
  "object",
  "complexity",
  "reduction",
];
const CITATION_KEY = /^[A-Za-z][A-Za-z+]*\d{2}[a-z]?$/; // AGGM06, BFL+24, vAH04, SW25a, ElGamal85
const OBJECT_ID = /^[a-z0-9]+(-[a-z0-9]+)*$/;

// ------------------------------------------------------- schema vocabulary ----
const SCHEMA_DIR = path.join(ROOT, "schema");
const loadYaml = (f) => {
  const p = path.join(SCHEMA_DIR, f);
  if (!fs.existsSync(p)) return null;
  try {
    return yaml.load(fs.readFileSync(p, "utf8"));
  } catch (e) {
    console.error(`error: schema/${f}: does not parse: ${e.message}`);
    process.exit(1);
  }
};
const CLASS_SCHEMA = loadYaml("reduction-classes.yaml") ?? {
  classes: {},
  sentinels: {},
  rejected: {},
};
const PROPOSITIONS = loadYaml("propositions.yaml")?.propositions ?? {};
const CLASSES = CLASS_SCHEMA.classes ?? {};
const CLASS_SENTINELS = CLASS_SCHEMA.sentinels ?? {};
const CLASS_REJECTED = CLASS_SCHEMA.rejected ?? {};
const CLASS_VALUES = [...Object.keys(CLASSES), ...Object.keys(CLASS_SENTINELS)];

// Transitive closure of `implies`, narrower -> broader. Used by the Phase-5
// contradiction check; computed here so a cycle in the vocabulary is caught the
// moment the file is edited, not the first time a barrier is written.
const classClosure = (name) => classClosureOf(CLASSES, name);
for (const name of Object.keys(CLASSES)) {
  for (const next of CLASSES[name].implies ?? []) {
    if (!CLASSES[next]) {
      console.error(
        `error: schema/reduction-classes.yaml: class "${name}" implies "${next}", which is not a defined class.`,
      );
      process.exit(1);
    }
  }
  if (classClosure(name).has(name)) {
    console.error(
      `error: schema/reduction-classes.yaml: the "implies" graph has a cycle through "${name}"; the partial order must be acyclic.`,
    );
    process.exit(1);
  }
}

// ------------------------------------------------------------- utilities ----
function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}
const slugify = (s) =>
  String(s).replace(/\.md$/, "").trim().toLowerCase().replace(/\s+/g, "-");
const stripCode = (s) =>
  s
    .replace(/```[\s\S]*?```/g, (m) => m.replace(/[^\n]/g, " "))
    .replace(/`[^`\n]*`/g, "");
const lineOf = (src, index) => src.slice(0, index).split("\n").length;

// ------------------------------------------------------------ load pages ----
const allFiles = walk(CONTENT);
const mdFiles = allFiles.filter(
  (f) =>
    f.endsWith(".md") && !path.relative(CONTENT, f).startsWith("Templates/"),
);
const assetFiles = allFiles.filter((f) => !f.endsWith(".md"));
const rel = (f) => path.relative(ROOT, f);

const pages = [];
const errors = [];
const warnings = [];
const err = (file, line, rule, msg) =>
  errors.push(`${rel(file)}${line ? ":" + line : ""}: [${rule}] ${msg}`);
const warn = (file, line, rule, msg) =>
  warnings.push(`${rel(file)}${line ? ":" + line : ""}: [${rule}] ${msg}`);

for (const f of mdFiles) {
  const src = fs.readFileSync(f, "utf8");
  let fm, body;
  try {
    const parsed = matter(src);
    fm = parsed.data;
    body = parsed.content;
  } catch (e) {
    err(
      f,
      1,
      "frontmatter-parse",
      `YAML frontmatter does not parse: ${e.message.split("\n")[0]}. Every page starts with a --- delimited YAML block.`,
    );
    continue;
  }
  if (!src.startsWith("---")) {
    err(
      f,
      1,
      "frontmatter-missing",
      "page has no YAML frontmatter; every page needs a --- block with type, status, title, aliases",
    );
    continue;
  }
  // gray-matter strips the frontmatter block; keep an offset so reported
  // line numbers are file-absolute, not body-relative
  const fmLines = src.split("\n").length - body.split("\n").length;
  pages.push({
    file: f,
    relFile: path.relative(CONTENT, f),
    src,
    fm,
    body,
    fmLines,
  });
}

// ------------------------------------------------------- schema per page ----
for (const p of pages) {
  const { file: f, fm } = p;
  const dir = p.relFile.includes("/") ? p.relFile.split("/")[0] : "";

  for (const k of COMMON_REQUIRED) {
    if (fm[k] === undefined || fm[k] === null || fm[k] === "") {
      err(
        f,
        1,
        "schema-required",
        `missing required frontmatter field "${k}". Every page needs type, status, title, aliases (aliases may be an empty list: "aliases: []").`,
      );
    }
  }
  if (fm.type !== undefined && !(fm.type in TYPES)) {
    err(
      f,
      1,
      "schema-type",
      `type "${fm.type}" is not valid. Valid types: ${Object.keys(TYPES).join(" | ")}.`,
    );
  } else if (fm.type in TYPES) {
    const expected = TYPES[fm.type].dir;
    if (expected !== null && expected !== dir) {
      err(
        f,
        1,
        "schema-type-dir",
        `type "${fm.type}" belongs in content/${expected || "(root)"}/ but this page is in content/${dir || "(root)"}/. Use type "${Object.entries(TYPES).find(([, v]) => v.dir === dir)?.[0] ?? "note"}" or move the discussion to the right directory (never rename existing files).`,
      );
    }
  }
  if (fm.status !== undefined && !STATUSES.includes(fm.status)) {
    err(
      f,
      1,
      "schema-status",
      `status "${fm.status}" is not valid. Valid statuses: ${STATUSES.join(" | ")}.`,
    );
  }
  if (
    fm.aliases !== undefined &&
    fm.aliases !== null &&
    !Array.isArray(fm.aliases)
  ) {
    err(
      f,
      1,
      "schema-aliases",
      `aliases must be a YAML list of strings (e.g. "aliases:\\n  - PRF"), got ${typeof fm.aliases}.`,
    );
  }
  for (const k of Object.keys(fm)) {
    const required = new Set([
      ...COMMON_REQUIRED,
      ...(fm.type === "reference" ? REFERENCE_REQUIRED : []),
      ...(TYPES[fm.type]?.required ?? []),
    ]);
    // Relation keys on an object page get the specific object-relation-field
    // message below; don't also report them as typos.
    const handledElsewhere =
      TYPES[fm.type]?.object && FORBIDDEN_ON_OBJECTS.includes(k);
    if (!required.has(k) && !OPTIONAL_KEYS.has(k) && !handledElsewhere) {
      err(
        f,
        1,
        "schema-unknown-key",
        `unknown frontmatter key "${k}". Allowed keys: the required set for type "${fm.type}" plus ${[...OPTIONAL_KEYS].join(", ")}. Remove it or fix the spelling.`,
      );
    }
  }

  if (fm.type === "reference") {
    for (const k of REFERENCE_REQUIRED) {
      if (fm[k] === undefined || fm[k] === null || fm[k] === "") {
        err(
          f,
          1,
          "ref-required",
          `reference pages need "${k}". Required: authors (comma-separated string), venue, published (YYYY or YYYY-MM-DD), source (canonical URL), and exactly one of cryptobib_key | bibtex.`,
        );
      }
    }
    if (typeof fm.authors === "object")
      err(
        f,
        1,
        "ref-authors",
        `authors must be a single comma-separated string ("First Author, Second Author"), not a YAML list.`,
      );
    // js-yaml hands back a Date for YYYY-MM-DD and a number for bare YYYY
    const pub = fm.published;
    const pubOk =
      pub instanceof Date ||
      (typeof pub === "number" &&
        Number.isInteger(pub) &&
        pub >= 1900 &&
        pub <= 2100) ||
      (typeof pub === "string" && /^\d{4}(-\d{2}-\d{2})?$/.test(pub));
    if (pub !== undefined && pub !== null && !pubOk) {
      err(
        f,
        1,
        "ref-published",
        `published "${pub}" must be YYYY or YYYY-MM-DD.`,
      );
    }
    if (fm.source && !/^https?:\/\//.test(String(fm.source))) {
      err(
        f,
        1,
        "ref-source",
        `source "${fm.source}" must be a URL. Prefer canonical forms: https://eprint.iacr.org/<year>/<num>, https://arxiv.org/abs/<id>, https://doi.org/<doi>.`,
      );
    }
    const hasKey = !!fm.cryptobib_key,
      hasBib = !!fm.bibtex;
    if (hasKey === hasBib) {
      err(
        f,
        1,
        "ref-bibtex",
        hasKey
          ? `both cryptobib_key and bibtex are set; keep only cryptobib_key.`
          : `set exactly one of cryptobib_key (preferred, when the paper is in cryptobib) or bibtex (inline, YAML block scalar).`,
      );
    }
    if (fm.cryptobib_pending && !hasBib) {
      err(
        f,
        1,
        "ref-pending",
        `cryptobib_pending is only meaningful on pages using inline bibtex.`,
      );
    }
    const key = String(fm.title ?? "");
    const filePrefix = path.basename(p.relFile, ".md").split(" - ")[0];
    if (key && !CITATION_KEY.test(key)) {
      err(
        f,
        1,
        "ref-key",
        `title "${key}" is not a citation key. Reference titles hold the citation key (initials + 2-digit year, optional disambiguator: "BGI15", "BFL+24", "SW25a"); the paper title lives in the filename and the H1.`,
      );
    }
    if (key && filePrefix !== key && !key.startsWith(filePrefix)) {
      err(
        f,
        1,
        "ref-key-filename",
        `title "${key}" does not match the filename key "${filePrefix}" ("KEY - Full Title.md"). They must agree (a disambiguating suffix like "SW25a" on filename key "SW25" is allowed). Never rename the file — filenames are URLs.`,
      );
    }
    if (fm.status !== "stub") {
      const h1 = p.body.match(/^# \[([^\]]+)\]/m);
      if (!h1)
        err(
          f,
          1,
          "ref-h1",
          `non-stub reference pages need an H1 of the form "# [${key}] Full Paper Title".`,
        );
      else if (h1[1] !== key)
        err(
          f,
          1,
          "ref-h1",
          `H1 key "[${h1[1]}]" disagrees with frontmatter title "${key}".`,
        );
    }
  }

  if (fm.unlisted !== undefined && typeof fm.unlisted !== "boolean") {
    err(
      f,
      1,
      "schema-unlisted",
      `unlisted must be true or false, got ${JSON.stringify(fm.unlisted)}. "unlisted: true" keeps the page built and linkable but hides it from the explorer and folder listings.`,
    );
  }

  const isEdge = fm.type === "reduction" || fm.type === "barrier";

  // Object pages declare identity (id, variants) but never relations.
  if (TYPES[fm.type]?.object) {
    for (const k of FORBIDDEN_ON_OBJECTS) {
      if (fm[k] !== undefined) {
        err(
          f,
          1,
          "object-relation-field",
          `"${k}" may not be hand-authored on a ${fm.type} page. A reduction is a hyperedge — a SET of hypotheses implying one conclusion — and an edge list on an object page cannot express {DDH, CRHF} => B without misrepresenting each hypothesis. Create a page under content/Reductions/ instead (see schema/README.md); this page's relations are generated into its "Participates in" section.`,
        );
      }
    }
  }

  if (fm.id !== undefined && !OBJECT_ID.test(String(fm.id))) {
    err(
      f,
      1,
      "schema-id",
      `id "${fm.id}" must be lowercase kebab-case (e.g. "prf", "learning-with-errors", "red-ddh-to-prf-nr97").`,
    );
  }

  if (fm.variants !== undefined) {
    if (
      typeof fm.variants !== "object" ||
      fm.variants === null ||
      Array.isArray(fm.variants)
    ) {
      err(
        f,
        1,
        "schema-variants",
        `variants must be a YAML mapping of id -> anchor, e.g.\n  variants:\n    ring-lwe: "#ring-lwe"`,
      );
    } else {
      for (const [vid, v] of Object.entries(fm.variants)) {
        if (!OBJECT_ID.test(vid))
          err(
            f,
            1,
            "schema-variants",
            `variant id "${vid}" must be lowercase kebab-case (e.g. "ring-lwe").`,
          );
        const anchor = typeof v === "string" ? v : v?.anchor;
        if (typeof anchor !== "string" || !anchor.startsWith("#"))
          err(
            f,
            1,
            "schema-variants",
            `variant "${vid}" must map to an anchor on this page, e.g. "#ring-lwe" (or a mapping with an "anchor" key). Got ${JSON.stringify(v)}.`,
          );
      }
    }
  }

  if (isEdge) {
    for (const k of TYPES[fm.type].required) {
      if (fm[k] === undefined || fm[k] === null || fm[k] === "")
        err(
          f,
          1,
          "schema-required",
          `type "${fm.type}" requires "${k}". See schema/README.md for a worked example.`,
        );
    }

    if (fm.hypotheses !== undefined) {
      if (!Array.isArray(fm.hypotheses) || fm.hypotheses.length === 0) {
        err(
          f,
          1,
          "edge-hypotheses",
          `hypotheses must be a non-empty YAML list of object ids, e.g.\n  hypotheses: [ddh]\nor, for a genuine conjunction,\n  hypotheses: [sparse-lpn, ddh]\nSeveral assumptions each independently sufficient are SEPARATE pages, one hypothesis each — never a list.`,
        );
      } else if (new Set(fm.hypotheses).size !== fm.hypotheses.length) {
        err(
          f,
          1,
          "edge-hypotheses",
          `hypotheses contains a duplicate. Each hypothesis appears once: hypotheses: [${[...new Set(fm.hypotheses)].join(", ")}].`,
        );
      }
    }

    if (fm.conclusion !== undefined && typeof fm.conclusion !== "string") {
      err(
        f,
        1,
        "edge-conclusion",
        `conclusion must be exactly one object id (a string), e.g.\n  conclusion: prf\nA claim with two conclusions is two pages.`,
      );
    }

    if (fm.kind !== undefined && !KINDS.includes(String(fm.kind))) {
      err(
        f,
        1,
        "edge-kind",
        `kind "${fm.kind}" is not valid. Valid: ${KINDS.join(" | ")}. Use "implication" for a construction, "inclusion" for a class containment (IP subset-of PSPACE), "equivalence" when both directions hold.`,
      );
    }
    if (
      BINARY_KINDS.includes(String(fm.kind)) &&
      Array.isArray(fm.hypotheses) &&
      fm.hypotheses.length !== 1
    ) {
      err(
        f,
        1,
        "edge-kind",
        `kind "${fm.kind}" relates exactly two objects, so it takes exactly one hypothesis (got ${fm.hypotheses.length}). A conjunction of hypotheses is an "implication".`,
      );
    }

    if (
      Array.isArray(fm.hypotheses) &&
      typeof fm.conclusion === "string" &&
      fm.hypotheses.includes(fm.conclusion)
    ) {
      err(
        f,
        1,
        "edge-self-loop",
        `"${fm.conclusion}" is both a hypothesis and the conclusion. If the claim is a security upgrade (e.g. {mac, ske} => authenticated-encryption), give the upgraded notion its own id — declare it under "variants:" on the page that defines it.`,
      );
    }

    if (fm.class !== undefined) {
      const c = String(fm.class);
      if (CLASS_REJECTED[c]) {
        err(
          f,
          1,
          "edge-class",
          `class "${c}" is not a class. ${String(CLASS_REJECTED[c].message).trim()}`,
        );
      } else if (!CLASS_VALUES.includes(c)) {
        err(
          f,
          1,
          "edge-class",
          `class "${c}" is not in schema/reduction-classes.yaml. Valid: ${CLASS_VALUES.join(" | ")}. Use "unstated" when the source does not say.`,
        );
      }
    }

    if (fm.model !== undefined && !MODELS.includes(String(fm.model))) {
      err(
        f,
        1,
        "edge-model",
        `model "${fm.model}" is not valid. Valid models: ${MODELS.join(" | ")}. Idealized models belong here, never in "class" — a generic-group lower bound is class: free, model: generic-group.`,
      );
    }

    if (fm.source !== undefined) {
      const srcs = Array.isArray(fm.source) ? fm.source : [fm.source];
      if (srcs.length === 0)
        err(
          f,
          1,
          "edge-source",
          `source must name a citation or the token "folklore". Example:\n  source: ["[[GGM86 - How to construct random functions|GGM86]]"]\nNever invent a citation; "folklore" is the honest value when there is none.`,
        );
      for (const s of srcs) {
        const v = String(s).trim();
        if (v === "folklore") continue;
        if (!/^\[\[.+\|.+\]\]$/.test(v))
          err(
            f,
            1,
            "edge-source",
            `source entry ${JSON.stringify(s)} must be a citation wikilink "[[KEY - Full Title|KEY]]" (byte-for-byte the reference filename) or the bare token folklore. "standard" is not a provenance value.`,
          );
      }
    }
  }

  if (fm.type === "barrier") {
    if (fm.strength !== undefined && !STRENGTHS.includes(String(fm.strength))) {
      err(
        f,
        1,
        "barrier-strength",
        `strength "${fm.strength}" is not valid. Valid: ${STRENGTHS.join(" | ")}.`,
      );
    }
    if (
      String(fm.strength) === "conditional" &&
      (!Array.isArray(fm["conditional-on"]) ||
        fm["conditional-on"].length === 0)
    ) {
      err(
        f,
        1,
        "barrier-conditional",
        `strength: conditional requires a non-empty "conditional-on" list naming the oracle or assumption the barrier rests on, e.g.\n  conditional-on: [lwe]`,
      );
    }
    if (fm.consequences !== undefined) {
      if (!Array.isArray(fm.consequences) || fm.consequences.length === 0) {
        err(
          f,
          1,
          "barrier-consequences",
          `consequences must be a non-empty YAML list. One barrier can carry several framings over the same hyperedge — Impagliazzo-Rudich is both "no relativizing reduction exists" and "a proof would give P != NP". Example:\n  consequences:\n    - kind: complexity\n      target: p-neq-np\n      class: relativizing`,
        );
      } else {
        fm.consequences.forEach((c, i) => {
          const where = `consequences[${i}]`;
          if (typeof c !== "object" || c === null) {
            err(
              f,
              1,
              "barrier-consequences",
              `${where} must be a mapping with keys kind, target, class.`,
            );
            return;
          }
          if (!CONSEQUENCE_KINDS.includes(String(c.kind)))
            err(
              f,
              1,
              "barrier-consequences",
              `${where}.kind "${c.kind}" is not valid. Valid: ${CONSEQUENCE_KINDS.join(" | ")}.`,
            );
          if (c.kind === "contradiction" && c.target)
            err(
              f,
              1,
              "barrier-consequences",
              `${where}.kind is "contradiction", so target must be empty (got "${c.target}"). A contradiction has no target.`,
            );
          if (c.kind !== "contradiction" && !c.target)
            err(
              f,
              1,
              "barrier-consequences",
              `${where}.kind is "${c.kind}", which needs a target: an object id, a key in schema/propositions.yaml (for kind: complexity), or a reduction id (for kind: reduction).`,
            );
          if (c.kind === "complexity" && c.target && !PROPOSITIONS[c.target])
            err(
              f,
              1,
              "barrier-consequences",
              `${where}.target "${c.target}" is not in schema/propositions.yaml. Add it there (with a title and a "believed" flag) rather than inventing a page. Known: ${Object.keys(PROPOSITIONS).join(", ")}.`,
            );
          if (c.class !== undefined && !CLASS_VALUES.includes(String(c.class)))
            err(
              f,
              1,
              "barrier-consequences",
              `${where}.class "${c.class}" is not in schema/reduction-classes.yaml. Valid: ${CLASS_VALUES.join(" | ")}.`,
            );
        });
      }
    }
  }
}

// ------------------------------------------------ alias & slug collisions ----
const claims = new Map(); // slug -> Set of files claiming it
const claim = (slug, f) => {
  if (!slug) return;
  if (!claims.has(slug)) claims.set(slug, new Set());
  claims.get(slug).add(f);
};
for (const p of pages) {
  claim(slugify(path.basename(p.relFile)), p.file);
  if (Array.isArray(p.fm.aliases))
    for (const a of p.fm.aliases) claim(slugify(a), p.file);
}
for (const [slug, files] of claims) {
  if (files.size > 1) {
    err(
      [...files][0],
      1,
      "alias-collision",
      `"${slug}" is claimed by ${[...files].map(rel).join(" and ")} (as filename slug or alias). Every alias must resolve to exactly one page; remove it from all but one.`,
    );
  }
}

// --------------------------------------------------------- object id graph ----
// The node namespace a hyperedge endpoint resolves against: page ids, variant
// ids declared by a page, and (for barrier consequences only) propositions.
const objectIds = new Map(); // id -> {file, kind, anchor?}
const declareId = (id, file, kind, anchor) => {
  if (!id) return;
  const prev = objectIds.get(id);
  if (prev && prev.file !== file) {
    err(
      file,
      1,
      "id-collision",
      `object id "${id}" is claimed by both ${rel(prev.file)} and ${rel(file)}. Every id resolves to exactly one node; rename one, or declare it as a variant of the page that defines it.`,
    );
    return;
  }
  objectIds.set(id, { file, kind, anchor });
};
for (const p of pages) {
  if (!TYPES[p.fm.type]?.object) continue;
  declareId(p.fm.id, p.file, "page");
  if (p.fm.variants && typeof p.fm.variants === "object") {
    for (const [vid, v] of Object.entries(p.fm.variants)) {
      const anchor = typeof v === "string" ? v : v?.anchor;
      declareId(vid, p.file, "variant", anchor);
      // The anchor must be a real heading on the declaring page.
      if (typeof anchor === "string" && anchor.startsWith("#")) {
        const want = anchor.slice(1).toLowerCase();
        const headings = [...p.body.matchAll(/^#{1,6}\s+(.+?)\s*$/gm)].map(
          (m) =>
            m[1]
              .replace(/[^\w\s-]/g, "")
              .trim()
              .toLowerCase()
              .replace(/\s+/g, "-"),
        );
        if (!headings.includes(want))
          err(
            p.file,
            1,
            "variant-anchor",
            `variant "${vid}" points at "${anchor}", which is not a heading on this page. Headings here: ${headings.map((h) => "#" + h).join(", ") || "(none)"}.`,
          );
      }
    }
  }
}
for (const id of Object.keys(PROPOSITIONS)) {
  if (objectIds.has(id))
    err(
      objectIds.get(id).file,
      1,
      "id-collision",
      `object id "${id}" collides with a proposition of the same name in schema/propositions.yaml. Rename one.`,
    );
}

// Every hyperedge endpoint must resolve.
const resolveEndpoint = (p, id, field) => {
  if (typeof id !== "string" || !id) return;
  if (objectIds.has(id)) return;
  const near = [...objectIds.keys()]
    .filter((k) => k.includes(id) || id.includes(k))
    .slice(0, 3);
  err(
    p.file,
    1,
    "edge-unresolved-id",
    `${field} "${id}" does not resolve to any object id. Declare "id: ${id}" in the frontmatter of the page that defines it, or — if it is a notion documented as a section of an existing page — add it under that page's "variants:" (e.g. variants:\n    ${id}: "#${id}"). ${near.length ? `Did you mean: ${near.join(", ")}?` : ""}`,
  );
};
for (const p of pages) {
  if (p.fm.type !== "reduction" && p.fm.type !== "barrier") continue;
  if (Array.isArray(p.fm.hypotheses))
    for (const h of new Set(p.fm.hypotheses))
      resolveEndpoint(p, h, "hypothesis");
  if (typeof p.fm.conclusion === "string")
    resolveEndpoint(p, p.fm.conclusion, "conclusion");
  for (const c of Array.isArray(p.fm.consequences) ? p.fm.consequences : []) {
    if (c && c.kind === "object" && c.target)
      resolveEndpoint(p, c.target, "consequence target");
  }
}

// ------------------------------------------------- generated region integrity ----
// Generated sections carry a checksum of their own contents. A hand edit inside
// one is an error rather than something the next regeneration silently reverts.
const GEN_BEGIN = "<!-- BEGIN GENERATED participates-in";
const GEN_END = "<!-- END GENERATED participates-in -->";
const GEN_RE =
  /<!-- BEGIN GENERATED participates-in ([0-9a-f]+) -->([\s\S]*?)<!-- END GENERATED participates-in -->/g;
for (const p of pages) {
  const opens = p.body.split(GEN_BEGIN).length - 1;
  const closes = p.body.split(GEN_END).length - 1;
  if (opens !== closes) {
    err(
      p.file,
      1,
      "generated-region",
      `unbalanced generated-region markers (${opens} BEGIN, ${closes} END). Do not hand-edit the markers; run "node scripts/generate-relations.mjs" to rebuild the region.`,
    );
    continue;
  }
  for (const m of p.body.matchAll(GEN_RE)) {
    const actual = crypto
      .createHash("sha256")
      .update(m[2].trim(), "utf8")
      .digest("hex")
      .slice(0, 12);
    if (actual !== m[1]) {
      err(
        p.file,
        p.fmLines + lineOf(p.body, m.index),
        "generated-region-edited",
        `this "Participates in" section was hand-edited (checksum ${m[1]}, contents hash to ${actual}). Generated regions are rebuilt from the reduction and barrier pages — edit those, then run "node scripts/generate-relations.mjs". To add prose about this object, put it outside the BEGIN/END markers.`,
      );
    }
  }
}

// --------------------------------------------------- barriers vs reductions ----
// A barrier ruling out class B contradicts a reduction of class C on the same
// hyperedge IFF C implies* B — iff every C-reduction is also a B-reduction.
// Stated in one direction only, because the other reading is a live bug: a
// barrier against a NARROWER class than the reduction claims is not a
// contradiction and must not fire.
const hyperKey = (fm) =>
  `${[...(fm.hypotheses ?? [])].sort().join("+")}=>${fm.conclusion}`;

const barriersByEdge = new Map();
for (const p of pages) {
  if (p.fm.type !== "barrier") continue;
  const k = hyperKey(p.fm);
  if (!barriersByEdge.has(k)) barriersByEdge.set(k, []);
  barriersByEdge.get(k).push(p);
}

for (const p of pages) {
  if (p.fm.type !== "reduction") continue;
  const claimed = String(p.fm.class ?? "unstated");
  // `unstated` sits outside the order and is comparable to nothing.
  if (!CLASSES[claimed]) continue;
  for (const b of barriersByEdge.get(hyperKey(p.fm)) ?? []) {
    for (const c of Array.isArray(b.fm.consequences) ? b.fm.consequences : []) {
      const ruledOut = String(c.class ?? b.fm.class ?? "unstated");
      if (!bites(CLASSES, claimed, ruledOut)) continue;

      if (c.kind === "contradiction") {
        err(
          p.file,
          1,
          "barrier-contradiction",
          `this page claims a ${claimed} reduction {${(p.fm.hypotheses ?? []).join(", ")}} => ${p.fm.conclusion}, but ${rel(b.file)} rules out ${ruledOut} reductions on the same hyperedge with consequence "contradiction". Every ${claimed} reduction is a ${ruledOut} reduction${claimed === ruledOut ? "" : " (see schema/reduction-classes.yaml)"}, so both cannot hold. Either weaken class (e.g. class: free), correct the barrier, or — if the reduction is real — that is a publishable refutation and belongs in a paper before it belongs here.`,
        );
      } else if (c.kind === "complexity") {
        const prop = PROPOSITIONS[c.target];
        warn(
          p.file,
          1,
          "barrier-major-result",
          `this page claims a ${claimed} reduction {${(p.fm.hypotheses ?? []).join(", ")}} => ${p.fm.conclusion}. ${rel(b.file)} says a ${ruledOut} reduction on that hyperedge would prove ${prop?.title ?? c.target}. This would be a major result — confirm the class is really ${claimed} and not something weaker.`,
        );
      }
    }
  }
}

// -------------------------------------------------------------- wikilinks ----
const targets = new Set(claims.keys());
for (const p of pages) targets.add(slugify(p.relFile)); // full-path slugs
for (const d of fs.readdirSync(CONTENT, { withFileTypes: true }))
  if (d.isDirectory()) targets.add(slugify(d.name)); // folder index pages
const assetNames = new Set(
  assetFiles.map((f) => path.basename(f).toLowerCase()),
);
const stubInventory = new Set(
  fs.existsSync(STUB_INVENTORY)
    ? JSON.parse(fs.readFileSync(STUB_INVENTORY, "utf8"))
    : [],
);

const WIKILINK = /(!?)\[\[([^\]|#]*)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]/g;
for (const p of pages) {
  const scan = stripCode(p.body);
  for (const m of scan.matchAll(WIKILINK)) {
    const target = m[2].trim();
    if (!target) continue; // [[#same-page-anchor]]
    const line = p.fmLines + lineOf(p.body, m.index);
    if (m[1] === "!" && /\.[a-z]{2,4}$/i.test(target)) {
      if (!assetNames.has(target.toLowerCase())) {
        err(
          p.file,
          line,
          "embed-missing",
          `embedded file "${target}" not found under content/ (assets live in content/Files/).`,
        );
      }
      continue;
    }
    if (!targets.has(slugify(target))) {
      if (stubInventory.has(slugify(target))) {
        warn(
          p.file,
          line,
          "link-stub-inventory",
          `"[[${target}]]" has no page yet (tracked in scripts/stub-inventory.json).`,
        );
      } else {
        err(
          p.file,
          line,
          "link-unresolved",
          `"[[${target}]]" does not resolve to any page slug or alias. Create the page (References stubs are cheap — see content/Templates/Reference.md), fix the link, or add the slug to scripts/stub-inventory.json if the page is intentionally deferred.`,
        );
      }
    }
  }
}

// ----------------------------------------------------------------- macros ----
const macroSrc = fs.readFileSync(path.join(ROOT, "macros.ts"), "utf8");
const MACROS = new Set(
  [...macroSrc.matchAll(/"\\\\([A-Za-z]+)":/g)].map((m) => m[1]),
);
const KATEX = new Set(
  `alpha beta gamma delta epsilon varepsilon zeta eta theta vartheta iota kappa lambda mu nu xi pi varpi rho varrho sigma varsigma tau upsilon phi varphi chi psi omega Gamma Delta Theta Lambda Xi Pi Sigma Upsilon Phi Psi Omega
  mathbf mathsf mathcal mathbb mathrm mathit mathtt mathfrak mathscr boldsymbol bm text textbf textit texttt textsf textrm textnormal operatorname mathop mathbin mathrel mathord mathopen mathclose mathpunct
  frac dfrac tfrac cfrac binom dbinom tbinom sqrt overline underline underbrace overbrace overset underset stackrel substack hat tilde bar vec dot ddot widehat widetilde acute grave breve check mathring
  left right big Big bigg Bigg bigl bigr Bigl Bigr biggl biggr langle rangle lfloor rfloor lceil rceil vert Vert lvert rvert lVert rVert backslash
  sum prod coprod int iint iiint oint bigcup bigcap bigsqcup bigoplus bigotimes bigodot bigvee bigwedge bigcirc
  cup cap sqcup setminus times div cdot cdots circ bullet oplus ominus otimes oslash odot ast star dagger ddagger amalg wr diamond
  le ge leq geq ll gg neq ne equiv approx cong sim simeq asymp propto prec succ preceq succeq mid nmid parallel nparallel perp
  subset supset subseteq supseteq subsetneq supsetneq sqsubseteq sqsupseteq in notin ni owns
  to gets rightarrow leftarrow Rightarrow Leftarrow leftrightarrow Leftrightarrow mapsto longmapsto longrightarrow longleftarrow Longrightarrow Longleftarrow xrightarrow xleftarrow hookrightarrow hookleftarrow uparrow downarrow Uparrow Downarrow updownarrow nearrow searrow swarrow nwarrow iff implies impliedby
  forall exists nexists neg lnot land lor wedge vee top bot emptyset varnothing infty partial nabla aleph hbar imath jmath ell Re Im wp
  quad qquad hspace vspace enspace phantom hphantom vphantom smash kern mkern mspace
  dots ldots vdots ddots dotsb dotsc dotsm dotso
  displaystyle textstyle scriptstyle scriptscriptstyle limits nolimits
  begin end label tag notag nonumber
  Pr log ln lg exp sin cos tan cot sec csc arcsin arccos arctan sinh cosh tanh coth min max arg sup inf lim liminf limsup gcd deg det dim hom ker mod bmod pmod pod
  pm mp prime angle measuredangle triangle triangleq square blacksquare Box Diamond
  coloneqq eqqcolon coloneq dashrightarrow dashleftarrow rightrightarrows rightleftarrows twoheadrightarrow twoheadleftarrow rightsquigarrow leadsto
  not cancel bcancel xcancel sout boxed color textcolor colorbox fcolorbox rule overbracket underbracket
  atop choose over middle genfrac
  arraystretch hline hdashline cr newline
  because therefore models vdash dashv Vdash vDash nvdash nvDash
  lhd rhd unlhd unrhd triangleleft triangleright vartriangleleft vartriangleright
  natural sharp flat checkmark
  ss S P copyright dag ddag space nobreakspace allowbreak relax
  bf it rm sf tt cal frak Bbb scr boldmath`
    .split(/\s+/)
    .filter(Boolean),
);
const PSEUDO = new Set(
  `State Return If EndIf Else ElsIf ElseIf For EndFor ForAll While EndWhile Repeat Until Loop EndLoop Function EndFunction Procedure EndProcedure Require Ensure Input Output Call Comment caption algname begin end true false and or not to downto`.split(
    /\s+/,
  ),
);
const REDEFINE =
  /\\(newcommand|renewcommand|providecommand|def|DeclareMathOperator)\b/g;

function mathSegments(body) {
  const segs = [];
  for (const m of body.matchAll(/```pseudocode\n([\s\S]*?)```/g))
    segs.push({ kind: "pseudocode", text: m[1], index: m.index });
  const noCode = body
    .replace(/```[\s\S]*?```/g, (s) => s.replace(/[^\n]/g, " "))
    .replace(/`[^`\n]*`/g, (s) => " ".repeat(s.length));
  for (const m of noCode.matchAll(/\$\$([\s\S]*?)\$\$/g))
    segs.push({ kind: "math", text: m[1], index: m.index });
  const noDisplay = noCode.replace(/\$\$[\s\S]*?\$\$/g, (s) =>
    s.replace(/[^\n]/g, " "),
  );
  for (const m of noDisplay.matchAll(/\$([^$\n]+)\$/g))
    segs.push({ kind: "math", text: m[1], index: m.index });
  return segs;
}

for (const p of pages) {
  if (p.relFile === "Glossary/latex-macros.md") continue; // documents the macros themselves
  for (const m of p.body.matchAll(REDEFINE)) {
    err(
      p.file,
      p.fmLines + lineOf(p.body, m.index),
      "macro-redefine",
      `\\${m[1]} is not allowed in content; all macros are defined once in macros.ts (and documented in content/Glossary/latex-macros.md).`,
    );
  }
  for (const seg of mathSegments(p.body)) {
    for (const m of seg.text.matchAll(/\\([A-Za-z]+)/g)) {
      const cmd = m[1];
      if (MACROS.has(cmd) || KATEX.has(cmd)) continue;
      if (seg.kind === "pseudocode" && PSEUDO.has(cmd)) continue;
      err(
        p.file,
        p.fmLines + lineOf(p.body, seg.index + m.index),
        "macro-undefined",
        `\\${cmd} is not a KaTeX built-in and not defined in macros.ts. Use an existing macro, or add it to macros.ts AND content/Glossary/latex-macros.md.`,
      );
    }
  }
}

// ------------------------------------------------------- status: complete ----
const SECTIONS = {
  primitive: ["## Syntax", "## Properties"],
  assumption: ["## Assumption"],
};
for (const p of pages) {
  if (p.fm.status !== "complete") continue;
  for (const m of p.body.matchAll(/\b(TODO|FIXME|TBD)\b/g)) {
    err(
      p.file,
      p.fmLines + lineOf(p.body, m.index),
      "complete-todo",
      `status is "complete" but the page contains ${m[1]}. Finish the item or set status: draft.`,
    );
  }
  for (const h of SECTIONS[p.fm.type] ?? []) {
    if (!p.body.includes("\n" + h) && !p.body.startsWith(h)) {
      err(
        p.file,
        1,
        "complete-sections",
        `status is "complete" but the "${h}" section is missing (required for type "${p.fm.type}").`,
      );
    }
  }
  if (p.fm.type === "primitive" && !/```pseudocode/.test(p.body)) {
    err(
      p.file,
      1,
      "complete-game",
      `status is "complete" but the page has no pseudocode security game (required for primitives).`,
    );
  }
}

// ------------------------------------------------------------------ report ----
const filter = process.argv.slice(2).map((f) => path.resolve(f));
const shown = (msg) =>
  !filter.length || filter.some((f) => msg.startsWith(rel(f)));
const shownErrors = errors.filter(shown);
const shownWarnings = warnings.filter(shown);
for (const w of shownWarnings) console.log(`warning: ${w}`);
for (const e of shownErrors) console.log(`error: ${e}`);
console.log(
  `\n${pages.length} pages checked: ${shownErrors.length} error(s), ${shownWarnings.length} warning(s)`,
);
process.exit(shownErrors.length ? 1 : 0);
