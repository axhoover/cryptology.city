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
//
// Errors print as  file:line: [rule] message  and exit 1. Warnings exit 0.

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
const STUB_INVENTORY = path.join(ROOT, "scripts", "stub-inventory.json");

// ---------------------------------------------------------------- schema ----
const TYPES = {
  primitive: { dir: "Primitives" },
  assumption: { dir: "Assumptions" },
  "complexity-class": { dir: "Complexity" },
  glossary: { dir: "Glossary" },
  folklore: { dir: "Folklore" },
  reference: { dir: "References" },
  note: { dir: "" }, // root pages
  // Reserved for the reduction-page refactor; no pages of these types yet.
  reduction: { dir: null, required: ["from", "to", "model", "source"] },
  separation: { dir: null, required: ["between", "model", "source"] },
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
  "from",
  "to",
  "between",
  "model",
  "black-box",
  "security-loss",
  "source",
]);
const REDUCTION_MODELS = ["standard", "rom", "crs", "ggm", "agm", "other"];
const CITATION_KEY = /^[A-Za-z][A-Za-z+]*\d{2}[a-z]?$/; // AGGM06, BFL+24, vAH04, SW25a, ElGamal85

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
    if (!required.has(k) && !OPTIONAL_KEYS.has(k)) {
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

  if (fm.type === "reduction" || fm.type === "separation") {
    for (const k of TYPES[fm.type].required) {
      if (fm[k] === undefined)
        err(f, 1, "schema-required", `type "${fm.type}" requires "${k}".`);
    }
    if (fm.model !== undefined && !REDUCTION_MODELS.includes(fm.model)) {
      err(
        f,
        1,
        "schema-model",
        `model "${fm.model}" is not valid. Valid models: ${REDUCTION_MODELS.join(" | ")}.`,
      );
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
