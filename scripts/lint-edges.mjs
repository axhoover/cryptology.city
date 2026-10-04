// Checks on the hyperedge graph and on reduction and barrier pages.
//
// Shared by scripts/lint.mjs, scripts/generate-relations.mjs and the tests in
// test/. The cross-page checks take pages as { file, fm } (fm is the parsed
// frontmatter); the per-page checks take one page's frontmatter or body. Every
// check returns findings; the lint decides whether a finding is an error or a
// warning and words the message.

/**
 * The hyperedge a reduction or barrier page sits on: its hypothesis SET and its
 * conclusion, keyed by id. Two ids for one notion are two nodes here, which is
 * why `sharedVariantAnchors` exists.
 */
export const hyperKey = (fm) =>
  `${[...(fm.hypotheses ?? [])].sort().join("+")}=>${fm.conclusion}`;

const ofType = (pages, type) => pages.filter((p) => p.fm?.type === type);
const consequencesOf = (fm) =>
  Array.isArray(fm.consequences) ? fm.consequences : [];

/**
 * Reduction–barrier pairs on one hyperedge that the contradiction check cannot
 * decide, because the reduction's class, or a class one of the barrier's
 * consequences rules out, lies outside the order (the `unstated` sentinel).
 *
 * Two cases are already reconciled and are skipped: a reduction the barrier
 * lists in `circumvented-by`, and a `heuristic` reduction, which records a
 * candidate with no security reduction and so is no theorem a barrier could
 * contradict.
 *
 * `classes` is the `classes` map of schema/reduction-classes.yaml.
 */
export function undecidedConflicts(pages, classes) {
  const barriersByEdge = new Map();
  for (const b of ofType(pages, "barrier")) {
    const k = hyperKey(b.fm);
    if (!barriersByEdge.has(k)) barriersByEdge.set(k, []);
    barriersByEdge.get(k).push(b);
  }
  const out = [];
  for (const r of ofType(pages, "reduction")) {
    if (r.fm.heuristic === true) continue;
    const claimed = String(r.fm.class ?? "unstated");
    for (const b of barriersByEdge.get(hyperKey(r.fm)) ?? []) {
      const circumvented = b.fm["circumvented-by"];
      if (Array.isArray(circumvented) && circumvented.includes(r.fm.id))
        continue;
      const cs = consequencesOf(b.fm).filter((c) => c && typeof c === "object");
      const ruledOut = [
        ...new Set(
          (cs.length ? cs : [{}]).map((c) =>
            String(c.class ?? b.fm.class ?? "unstated"),
          ),
        ),
      ];
      if (!classes[claimed] || ruledOut.some((c) => !classes[c]))
        out.push({ reduction: r, barrier: b, claimed, ruledOut });
    }
  }
  return out;
}

/**
 * Variant ids declared on one page that point at the same anchor. Either they
 * are synonyms, which split one hyperedge into several that the contradiction
 * check never compares, or they are distinct notions sharing a section.
 */
export function sharedVariantAnchors(pages) {
  const out = [];
  for (const p of pages) {
    const v = p.fm?.variants;
    if (!v || typeof v !== "object" || Array.isArray(v)) continue;
    const byAnchor = new Map();
    for (const [id, x] of Object.entries(v)) {
      const anchor = typeof x === "string" ? x : x?.anchor;
      if (typeof anchor !== "string" || !anchor.startsWith("#")) continue;
      const k = anchor.toLowerCase();
      if (!byAnchor.has(k)) byAnchor.set(k, { anchor, ids: [] });
      byAnchor.get(k).ids.push(id);
    }
    for (const { anchor, ids } of byAnchor.values())
      if (ids.length > 1) out.push({ page: p, anchor, ids });
  }
  return out;
}

/**
 * Barrier consequence targets that do not resolve for their kind:
 * `kind: object` against object ids and variant ids, `kind: reduction` against
 * the ids of reduction pages. (`complexity` targets are checked against
 * schema/propositions.yaml by the per-page schema check; `contradiction` takes
 * no target.)
 *
 * `objectIds` and `reductionIds` are anything with `has(id)` (a Set or Map).
 */
export function unresolvedConsequenceTargets(pages, objectIds, reductionIds) {
  const out = [];
  for (const b of ofType(pages, "barrier")) {
    consequencesOf(b.fm).forEach((c, index) => {
      if (!c || typeof c !== "object") return;
      const target = c.target;
      if (typeof target !== "string" || !target) return;
      if (c.kind === "object" && !objectIds.has(target))
        out.push({ page: b, index, kind: "object", target });
      else if (c.kind === "reduction" && !reductionIds.has(target))
        out.push({ page: b, index, kind: "reduction", target });
    });
  }
  return out;
}

/**
 * `kind: complexity` consequences whose proposition is marked `believed: true`
 * in schema/propositions.yaml. A barrier says a reduction would force its
 * consequence; forcing something already proved or expected rules nothing out,
 * so such a page is usually a reduction {A} => Q, or a proved fact, written up
 * as a barrier.
 */
export function believedConsequences(pages, propositions) {
  const out = [];
  for (const b of ofType(pages, "barrier")) {
    consequencesOf(b.fm).forEach((c, index) => {
      if (!c || typeof c !== "object" || c.kind !== "complexity") return;
      const prop = Object.hasOwn(propositions, String(c.target))
        ? propositions[c.target]
        : undefined;
      if (prop?.believed === true)
        out.push({ page: b, index, target: c.target, title: prop.title });
    });
  }
  return out;
}

/**
 * `conditional-on` entries that are neither an object id (or variant id) nor
 * multi-word free text. An entry names the assumption a conditional barrier
 * rests on: by id where the wiki has a node (`[owf]`, `[pke-cpa-security]`),
 * in free text only for an assumption with none. A single token that resolves
 * to nothing is a typo for an id, or a node that does not exist yet.
 *
 * `objectIds` is anything with `has(id)` (a Set or Map).
 */
export function unnamedConditions(pages, objectIds) {
  const out = [];
  for (const b of ofType(pages, "barrier")) {
    const cs = b.fm["conditional-on"];
    if (!Array.isArray(cs)) continue;
    cs.forEach((entry, index) => {
      if (typeof entry === "string") {
        const v = entry.trim();
        if (objectIds.has(v) || /\s/.test(v)) return;
      }
      out.push({ page: b, index, entry });
    });
  }
  return out;
}

// ------------------------------------------------------------ rationale ----

/**
 * The fields a `rationale` entry may explain, per page type, each mapped to the
 * key its value has in a relations.json record: the typing decisions
 * (schema/README.md § Why a field holds its value: class, model, kind, strength,
 * conditional-on, heuristic, security-loss, via, oracle, source). The endpoints
 * (hypotheses, conclusion), the consequences and circumvented-by take none: a
 * remark about them a reader needs is a Notes bullet. Insertion order is the
 * record's field order, which is the order `rationaleRecord` emits. `oracle` is
 * not exported on barrier records, so its rationale keeps the frontmatter name.
 */
export const RATIONALE_FIELDS = {
  reduction: {
    kind: "kind",
    class: "class",
    model: "model",
    source: "source",
    via: "via",
    heuristic: "heuristic",
    "security-loss": "securityLoss",
  },
  barrier: {
    class: "class",
    strength: "strength",
    "conditional-on": "conditionalOn",
    oracle: "oracle",
    source: "source",
  },
};

/**
 * Stock sentences that carry no information about the page. They are dropped
 * with no rationale entry rather than moved into one.
 */
export const STOCK_RATIONALE = [
  /does not state which notion of reduction/i,
  /reduction-class axis does not apply/i,
];

const isMapping = (x) =>
  typeof x === "object" && x !== null && !Array.isArray(x);

/**
 * Problems with a page's `rationale` mapping, as { code, field?, value? }:
 *
 *   wrong-type     the page is not a reduction or barrier
 *   not-mapping    `rationale` is not a YAML mapping
 *   empty-mapping  `rationale` is a mapping with no entries
 *   unknown-field  the key is not a field whose value a rationale explains
 *   absent-field   the key names a field this page does not set
 *   not-string     the value is not a string
 *   empty          the value is blank
 *   multiline      the value spans several lines
 *   todo           the value carries a TODO / FIXME / TBD marker
 *   stock          the value is a stock sentence that is dropped, not kept
 *   scaffolding    the value carries history, a review label or a reading
 *                  note (the body's rules of those kinds; `rule`, `match`)
 */
export function rationaleProblems(fm) {
  if (!fm || fm.rationale === undefined) return [];
  const fields = RATIONALE_FIELDS[fm.type];
  if (!fields) return [{ code: "wrong-type" }];
  const r = fm.rationale;
  if (!isMapping(r)) return [{ code: "not-mapping", value: r }];
  if (!Object.keys(r).length) return [{ code: "empty-mapping" }];
  const out = [];
  for (const [field, value] of Object.entries(r)) {
    if (!Object.hasOwn(fields, field)) {
      out.push({ code: "unknown-field", field });
      continue;
    }
    // `via:` with no value is null in YAML, and as absent as no key.
    if (fm[field] === undefined || fm[field] === null)
      out.push({ code: "absent-field", field });
    if (typeof value !== "string") {
      out.push({ code: "not-string", field, value });
      continue;
    }
    const v = value.trim();
    if (!v) out.push({ code: "empty", field });
    else if (/[\r\n]/.test(v)) out.push({ code: "multiline", field });
    if (/\b(TODO|FIXME|TBD)\b/.test(v)) out.push({ code: "todo", field });
    if (STOCK_RATIONALE.some((re) => re.test(v)))
      out.push({ code: "stock", field });
    for (const x of rationaleScaffolding(v))
      out.push({ code: "scaffolding", field, rule: x.rule, match: x.match });
  }
  return out;
}

/**
 * The `rationale` of a reduction or barrier as relations.json carries it: keyed
 * by the record's own field names, in the record's field order, values trimmed.
 * Undefined when the page has none, so the key is omitted from the record.
 */
export function rationaleRecord(fm) {
  const fields = RATIONALE_FIELDS[fm?.type];
  if (!fields || !isMapping(fm.rationale)) return undefined;
  const out = {};
  for (const [field, key] of Object.entries(fields)) {
    const v = fm.rationale[field];
    if (typeof v === "string" && v.trim()) out[key] = v.trim();
  }
  return Object.keys(out).length ? out : undefined;
}

/**
 * Reductions and barriers that record a class in the order (not the `unstated`
 * sentinel) without saying why in `rationale.class`. The one stock case is
 * exempt: `free` on an inclusion or equivalence with a complexity-class
 * endpoint, where the reduction-class axis does not apply.
 *
 * `classes` is the `classes` map of schema/reduction-classes.yaml;
 * `endpointType(id)` is the page type of the object an endpoint id names.
 */
export function unjustifiedClasses(pages, classes, endpointType) {
  const out = [];
  for (const p of pages) {
    const fm = p.fm;
    if (fm?.type !== "reduction" && fm?.type !== "barrier") continue;
    const cls = String(fm.class ?? "unstated");
    if (!Object.hasOwn(classes, cls)) continue;
    const why = isMapping(fm.rationale) ? fm.rationale.class : undefined;
    if (typeof why === "string" && why.trim()) continue;
    const stockFree =
      cls === "free" &&
      fm.type === "reduction" &&
      (fm.kind === "inclusion" || fm.kind === "equivalence") &&
      [...(fm.hypotheses ?? []), fm.conclusion].some(
        (id) => endpointType(id) === "complexity-class",
      );
    if (!stockFree) out.push({ page: p, class: cls });
  }
  return out;
}

// ------------------------------------------------- reduction / barrier body ----

/** The H2 sections a reduction or barrier body may have, in this order. */
export const BODY_SECTIONS = ["Statement", "Sketch", "Notes"];

/** Every frontmatter key a reduction or barrier page can carry. */
const EDGE_FRONTMATTER = [
  "type",
  "status",
  "title",
  "aliases",
  "id",
  "kind",
  "hypotheses",
  "conclusion",
  "class",
  "model",
  "source",
  "via",
  "heuristic",
  "security-loss",
  "consequences",
  "strength",
  "conditional-on",
  "circumvented-by",
  "oracle",
  "rationale",
];

const blank = (s) => s.replace(/[^\n]/g, " ");
const maskWith = (s, re) => s.replace(re, blank);
const FENCE = /^[ \t]*(`{3,}|~{3,})[^\n]*\n[\s\S]*?^[ \t]*\1[ \t]*$/gm;
const HTML_COMMENT = /<!--[\s\S]*?-->/g;
const GENERATED_REGION =
  /<!-- BEGIN GENERATED ([\w-]+)[^\n]*?-->[\s\S]*?<!-- END GENERATED \1 -->/g;
const DISPLAY_MATH = /\$\$[\s\S]*?\$\$/g;
const INLINE_MATH = /\$[^$\n]+\$/g;
const INLINE_CODE = /`[^`\n]*`/g;
const URL = /\bhttps?:\/\/[^\s)\]>]+/g;
// Keep `[[` and the display text so a phrase that only links still reads;
// blank the target, whose reference titles are not the page's own prose.
const maskLinkTargets = (s) =>
  s.replace(
    /\[\[([^\]|]*)(\|[^\]]*)?\]\]/g,
    (m, target, display) => `[[${blank(target)}${display ?? ""}]]`,
  );
const maskLinks = (s) => s.replace(/\[\[[^\]]*\]\]/g, blank);

// Two or more all-caps words, each of four letters or more, one of six or more.
const CAPS_PHRASE =
  "(?<![\\w$\\\\-])(?=[A-Z ]*[A-Z]{6})[A-Z]{4,}(?: [A-Z]{4,})+(?![\\w-])";

// A line opening with a frontmatter field in backticks, after an optional
// bullet, list number and emphasis: "`class: free`", "- **`model: rom`**".
const FIELD_OPENER =
  "^[ \\t]*(?:[-*+][ \\t]+|\\d+[.)][ \\t]+)?(?:\\*\\*|__|\\*|_)?`(?:" +
  EDGE_FRONTMATTER.join("|") +
  ")(?:[ \\t]*:[^`\\n]*)?`";

/** Markdown backslash escapes, `MIP\*` -> `MIP*`, so an H1 compares to `title`. */
export const unescapeMarkdown = (s) =>
  String(s).replace(/\\([\\`*_{}\[\]()#+\-.!|$<>~])/g, "$1");

/**
 * Scaffolding that never belongs in a reduction or barrier body: field
 * justifications (which move to `rationale`), maintenance history, notes about
 * the wiki itself, and review labels. Each rule is a list of patterns run over
 * one view of the body:
 *
 *   structural  code fences, HTML comments and generated regions blanked
 *   prose       structural, with math, URLs and wikilink targets blanked
 *   plain       prose, with inline code and whole wikilinks blanked
 *
 * A pattern is a RegExp, or { re, hint, skipFieldLines } when the lint words
 * its message from `hint` or the pattern skips lines that open with a
 * frontmatter field (already body-field-justification). The patterns are
 * deliberately literal: each must match maintenance prose and nothing a
 * cryptographer would write about the mathematics (test/reduction-pages.test.ts
 * pins both sides).
 */
export const SCAFFOLDING = [
  {
    // A paragraph or bullet opening with a frontmatter field in backticks,
    // whatever follows it: "`class: free`: …", "`model: rom` — …",
    // "- `heuristic: true` because …".
    rule: "body-field-justification",
    view: "structural",
    patterns: [new RegExp(FIELD_OPENER, "gm")],
  },
  {
    rule: "body-sourcing-pass",
    view: "prose",
    patterns: [/\bsourcing pass\b/gi],
  },
  {
    rule: "body-page-history",
    view: "prose",
    patterns: [
      // Not key, ciphertext or data migration, which are mathematics.
      /(?<!\b(?:key|ciphertext|data) )\bmigrat(?:e|ed|es|ing|ion|ions)\b/gi,
      // What the page or file used to say. A bare "previously recorded" is
      // lazy sampling ("returns the previously recorded answer"), so the
      // subject must be the page, or the old value must follow in backticks.
      /\b(?:page|file|edge) (?:previously|formerly) (?:recorded|credited|cited|asserted|attributed|stated)\b/gi,
      /\b(?:previously|formerly) (?:recorded|credited|cited|asserted|attributed) (?=`)/gi,
      /\b(?:page|file|edge|id|title) used to (?:record|claim|cite|credit|assert|state)\b/gi,
      /\b(?:this|the) (?:page|file) (?:replaces|previously|formerly|used to)\b/gi,
      /^[ \t]*(?:[-*+][ \t]+)?Replaces (?:`|content\/)/gm,
      /\b(?:hypothesis|hypotheses|conclusion|title|H1|class|model|kind|source)\b[^.\n]{0,40}\bchanged from\b/gi,
    ],
  },
  {
    rule: "body-slug-history",
    view: "prose",
    patterns: [/\bslugs?\b/gi, /\bfile ?names?\b/gi],
  },
  {
    rule: "body-reported-not-fixed",
    view: "prose",
    patterns: [/\breported, not fixed\b/gi],
  },
  {
    rule: "body-suspected-error",
    view: "prose",
    patterns: [/\bsuspected errors?\b/gi],
  },
  {
    rule: "body-machine-label",
    view: "plain",
    patterns: [
      // An all-caps label: two or more all-caps words, each of four letters
      // or more and one of six or more, opening a paragraph or bullet or
      // followed by a colon (GENUINELY CONJUNCTIVE:, COLLIDING IDENTIFIERS:).
      // Acronyms (IND-CPA KEM, RSAES-OAEP, NIST PQC) are hyphenated or short,
      // and a venue in running text (USENIX SECURITY 2022) takes no colon.
      new RegExp(
        `^[ \\t]*(?:[-*+][ \\t]+)?(?:\\*\\*)?${CAPS_PHRASE}|${CAPS_PHRASE}(?:\\*\\*)?:`,
        "gm",
      ),
      /^[ \t]*(?:[-*+][ \t]+)?(?:\*\*)?(?:NOTE|NB|CAVEAT|WARNING|FLAG|FLAGGED|UNVERIFIED|SUSPECT|SUSPECTED|HISTORY|PROVENANCE|MIGRATED|DEFERRED|FIXED|REPORTED)(?:\*\*)?:/gm,
      // The same labels in sentence case ("Conjunctive: the theorem needs…").
      /^[ \t]*(?:[-*+][ \t]+)?(?:\*\*)?(?:genuinely )?(?:conjunctive|disjunctive)(?:\*\*)?[:.]/gim,
    ],
  },
  {
    // Each pattern carries a hint the lint words its message from:
    //   files   repository files, the schema, the wiki itself
    //   pages   a wiki page, its state, or a claim made on it
    //   review  the review process and instructions to editors
    //   model   how the graph records the result: nodes, ids, edges, fields
    //   code    an id or field quoted in backticks
    rule: "body-wiki-state",
    view: "prose",
    patterns: [
      { re: /\b[\w./-]+\.(?:md|ya?ml|json|mjs)\b/g, hint: "files" },
      { re: /\bREADME\b/g, hint: "files" },
      { re: /\bschema\b/gi, hint: "files" },
      { re: /\bfront-?matter\b/gi, hint: "files" },
      { re: /\bwiki\b/gi, hint: "files" },
      // "page 12" of a paper is a location, not a wiki page.
      { re: /\bpages?\b(?![ \t]*\d)/gi, hint: "pages" },
      { re: /\bstubs?\b/gi, hint: "pages" },
      { re: /\bunlisted\b/gi, hint: "pages" },
      { re: /\bexists only as\b/gi, hint: "pages" },
      { re: /\b(?:is|as) an? (?:variant )?section of\b/gi, hint: "pages" },
      { re: /\buncited\b/gi, hint: "pages" },
      { re: /\bover-?claim(?:s|ed)?\b|\boverstates\b/gi, hint: "pages" },
      { re: /\bbullets?\b/gi, hint: "pages" },
      {
        re: /\b(?:variant|page|node|id|section|anchor)\b[^.\n]{0,40}\bdoes not (?:yet )?exist(?: yet)?\b/gi,
        hint: "pages",
      },
      { re: /\bTODO_SUMMARY\b/g, hint: "review" },
      { re: /\bfact-?check\w*/gi, hint: "review" },
      { re: /\bskeptical[- ]checker\b/gi, hint: "review" },
      {
        re: /\bchange (?:the|its) (?:conclusion|hypothes[ie]s|class|model|kind|source|title)\b/gi,
        hint: "review",
      },
      { re: /\bhyper-?edges?\b/gi, hint: "model" },
      { re: /`[\w-]+` nodes?\b/g, hint: "model" },
      {
        re: /\b(?:conclusion|hypothesis|endpoint|object) nodes?\b/gi,
        hint: "model",
      },
      { re: /\b(?:has|have|had) no nodes?\b/gi, hint: "model" },
      { re: /\bnodes? (?:is|are|gets?) added\b/gi, hint: "model" },
      { re: /\bnotion-level\b/gi, hint: "model" },
      { re: /\b(?:object|variant|reduction|barrier) ids?\b/gi, hint: "model" },
      {
        re: /\b(?:conclusion|hypothesis|object|variant) (?:identifiers?|keys?)\b/gi,
        hint: "model",
      },
      {
        re: /\b(?:flat|typed) (?:`[^`\n]*` )?(?:hypothes[ie]s|conclusions?|nodes?|ids?|identifiers?|objects?|slugs?)\b/gi,
        hint: "model",
      },
      { re: /\bmodel objects?\b/gi, hint: "model" },
      { re: /\btarget model\b/gi, hint: "model" },
      { re: /\bmodell?ing gaps?\b/gi, hint: "model" },
      { re: /\bparameter fields?\b/gi, hint: "model" },
      { re: /\bsingle-hypothesis\b/gi, hint: "model" },
      {
        re: /\b(?:disjunction, not (?:a )?conjunction|conjunction, not (?:a )?disjunction)\b/gi,
        hint: "model",
      },
      { re: /\bsplit chains?\b|\bone per link\b/gi, hint: "model" },
      { re: /\bnot a separate (?:claim|edge)\b/gi, hint: "model" },
      { re: /\b(?:folklore|standard) label\b/gi, hint: "model" },
      // "Edge" as the wiki's word for a reduction. Only phrasings no graph
      // argument uses: "a random edge", "the edge must carry distinct colors"
      // and "this edge does not by itself place OT in Minicrypt" stay clean.
      {
        re: /\b(?:this|that) edge (?:cannot|can ?not|must|needs|reads|concludes|records?|(?:does|do) not (?:record|capture|carry|cover|express))\b/gi,
        hint: "model",
      },
      {
        re: /\bthe edge (?:reads as|concludes|cannot record|(?:does|do) not record|must not be split)\b/gi,
        hint: "model",
      },
      {
        re: /\b(?:part of|covered by|carried by|captured by|recorded by|expressed by|a hypothesis of|the conclusion of) (?:this|that) edge\b/gi,
        hint: "model",
      },
      { re: /\b(?:this|that) edge's\b/gi, hint: "model" },
      { re: /\bsplit (?:this|that|the) edge\b/gi, hint: "model" },
      {
        re: /\brecorded as an? (?:separate |distinct |own )?(?:edge|barrier|reduction|node)\b/gi,
        hint: "model",
      },
      {
        re: /\b(?:edge|hypothesis|conclusion|node) (?:cannot|can ?not|does not|do not) (?:record|capture|express)\b/gi,
        hint: "model",
      },
      // Any inline code: an object id (`crhf`), a variant id, a field value
      // quoted mid-sentence (`class: free`). A line opening with a frontmatter
      // field is reported once, as body-field-justification.
      { re: INLINE_CODE, hint: "code", skipFieldLines: true },
    ],
  },
  {
    rule: "body-reading-notes",
    view: "prose",
    patterns: [
      /(?<!\b(?:an?|in|extended) )\babstracts?\b(?! (?:groups?|models?|algebras?|machines?|interpretations?|settings?|spaces?|notions?|syntax|frameworks?|primitives?|objects?|definitions?|class(?:es)?|versions?|forms?|cryptography|interfaces?|functionalit(?:y|ies)|adversar(?:y|ies)|algorithms?|protocols?|schemes?|games?|oracles?|security))/gi,
      /\bfull text\b/gi,
      /\b(?:could|can) ?not be (?:checked|verified|confirmed)\b/gi,
      /\b(?:has|have|had) not been (?:checked|verified|confirmed|read)\b/gi,
    ],
  },
];

const lineAt = (s, index) => s.slice(0, index).split("\n").length;

/**
 * Body-contract findings for a reduction or barrier page, as
 * { rule, line, ...detail } with `line` relative to the body (1-based):
 *
 *   body-h1                 missing, repeated, or not equal to `title`
 *   body-preamble           text before the H1 or between it and ## Statement
 *   body-statement          no ## Statement
 *   body-sections           an H2 other than Statement / Sketch / Notes, a
 *                           repeated or out-of-order one, or an empty one
 *   body-statement-source   a `source` entry the Statement does not cite
 *   SCAFFOLDING rules       one finding per rule per line, with the match
 *                           (and the pattern's hint, if it has one); a
 *                           preamble is not scanned for them
 *
 * Generated regions, code fences and HTML comments are ignored throughout.
 */
export function bodyContract(body, fm = {}) {
  const out = [];
  const src = String(body ?? "");
  // A section holding only a pseudocode block is not empty, so emptiness is
  // judged with code fences kept.
  const content = maskWith(maskWith(src, GENERATED_REGION), HTML_COMMENT);
  const structural = maskWith(content, FENCE);
  const prose = maskWith(
    maskLinkTargets(
      maskWith(
        maskWith(structural.replace(/\\\$/g, "  "), DISPLAY_MATH),
        INLINE_MATH,
      ),
    ),
    URL,
  );
  const plain = maskWith(maskLinks(prose), INLINE_CODE);
  const views = { structural, prose, plain };

  const headings = [
    ...structural.matchAll(/^(#{1,2})[ \t]+(.+?)[ \t]*$/gm),
  ].map((m) => ({
    level: m[1].length,
    text: m[2].replace(/[ \t]+#+$/, "").trim(),
    index: m.index,
    end: m.index + m[0].length,
  }));
  const at = (index) => lineAt(src, index);

  // H1: exactly one, equal to the frontmatter title.
  const h1s = headings.filter((h) => h.level === 1);
  if (!h1s.length) out.push({ rule: "body-h1", line: 1, problem: "missing" });
  for (const h of h1s.slice(1))
    out.push({
      rule: "body-h1",
      line: at(h.index),
      problem: "extra",
      heading: h.text,
    });
  const title = fm.title === undefined ? undefined : String(fm.title).trim();
  if (
    h1s.length &&
    title !== undefined &&
    unescapeMarkdown(h1s[0].text) !== title
  )
    out.push({
      rule: "body-h1",
      line: at(h1s[0].index),
      problem: "title",
      heading: h1s[0].text,
      title,
    });

  // Nothing before the H1, and nothing between it and the first H2.
  const h2s = headings.filter((h) => h.level === 2);
  const statement = h2s.find((h) => h.text === "Statement");
  const preambleEnd = (statement ?? h2s[0])?.index ?? structural.length;
  let pre = structural.slice(0, preambleEnd);
  if (h1s[0] && h1s[0].index < preambleEnd)
    pre =
      pre.slice(0, h1s[0].index) +
      blank(pre.slice(h1s[0].index, h1s[0].end)) +
      pre.slice(h1s[0].end);
  const firstText = pre.search(/\S/);
  if (firstText !== -1)
    out.push({
      rule: "body-preamble",
      line: at(firstText),
      text: pre.slice(firstText).trim().split("\n")[0].slice(0, 80),
      ...(h1s[0] && firstText < h1s[0].index ? { beforeH1: true } : {}),
    });

  if (!statement) out.push({ rule: "body-statement", line: 1 });

  // H2s: only the three, once each, in order, none empty.
  const seen = new Set();
  let last = -1;
  h2s.forEach((h) => {
    const line = at(h.index);
    const rank = BODY_SECTIONS.indexOf(h.text);
    if (rank === -1) {
      out.push({
        rule: "body-sections",
        line,
        problem: "unknown",
        heading: h.text,
      });
      return;
    }
    if (seen.has(h.text))
      out.push({
        rule: "body-sections",
        line,
        problem: "duplicate",
        heading: h.text,
      });
    else if (rank < last)
      out.push({
        rule: "body-sections",
        line,
        problem: "order",
        heading: h.text,
        after: BODY_SECTIONS[last],
      });
    seen.add(h.text);
    last = Math.max(last, rank);
    const next = headings.find((x) => x.index > h.index);
    if (!content.slice(h.end, next?.index ?? content.length).trim())
      out.push({
        rule: "body-sections",
        line,
        problem: "empty",
        heading: h.text,
      });
  });

  // The Statement cites every `source` entry where the result is stated.
  if (statement) {
    const next = headings.find((x) => x.index > statement.index);
    const text = maskWith(
      structural.slice(statement.end, next?.index ?? structural.length),
      INLINE_CODE,
    );
    const linked = new Set(
      [...text.matchAll(/\[\[([^\]|#]*)/g)].map((m) =>
        m[1].trim().toLowerCase(),
      ),
    );
    for (const s of [].concat(fm.source ?? [])) {
      const v = String(s).trim();
      const cited =
        v === "folklore"
          ? /\bfolklore\b|—\s*standard\b/i.test(text)
          : linked.has(
              (/\[\[([^\]|#]*)/.exec(v)?.[1] ?? "").trim().toLowerCase(),
            );
      if (!cited)
        out.push({
          rule: "body-statement-source",
          line: at(statement.index),
          entry: v,
        });
    }
  }

  // Scaffolding, at most one finding per rule per line. A preamble is reported
  // once, as body-preamble, and deleted whole, so its text is not scanned again
  // (unless the page has no H2 at all, when everything would be preamble).
  const skip =
    firstText !== -1 && preambleEnd < structural.length
      ? [firstText, preambleEnd]
      : null;
  const scanned = (s) =>
    skip
      ? s.slice(0, skip[0]) +
        blank(s.slice(skip[0], skip[1])) +
        s.slice(skip[1])
      : s;
  const fieldLines = new Set(
    [...structural.matchAll(new RegExp(FIELD_OPENER, "gm"))].map((m) =>
      at(m.index),
    ),
  );
  for (const { rule, view, patterns } of SCAFFOLDING) {
    const text = scanned(views[view]);
    const lines = new Map();
    for (const p of patterns) {
      const { re, hint, skipFieldLines } = p instanceof RegExp ? { re: p } : p;
      for (const m of text.matchAll(re)) {
        const line = at(m.index);
        if (lines.has(line) || (skipFieldLines && fieldLines.has(line)))
          continue;
        const match = src.slice(m.index, m.index + m[0].length).trim();
        lines.set(line, hint ? { match, hint } : { match });
      }
    }
    for (const [line, x] of [...lines].sort((a, b) => a[0] - b[0]))
      out.push({ rule, line, ...x });
  }
  return out;
}

/** The SCAFFOLDING rules whose phrases never belong in a `rationale` value. */
const RATIONALE_SCAFFOLDING = new Set([
  "body-sourcing-pass",
  "body-page-history",
  "body-slug-history",
  "body-reported-not-fixed",
  "body-suspected-error",
  "body-machine-label",
  "body-reading-notes",
]);

/**
 * History, review labels and reading notes in one `rationale` value, as
 * { rule, match }. A rationale may describe how the graph records the result
 * (nodes, ids, the class vocabulary), so body-wiki-state does not apply.
 */
export function rationaleScaffolding(value) {
  const prose = maskWith(
    maskLinkTargets(
      maskWith(String(value).replace(/\\\$/g, "  "), INLINE_MATH),
    ),
    URL,
  );
  const views = {
    structural: String(value),
    prose,
    plain: maskWith(maskLinks(prose), INLINE_CODE),
  };
  const out = [];
  for (const { rule, view, patterns } of SCAFFOLDING) {
    if (!RATIONALE_SCAFFOLDING.has(rule)) continue;
    for (const p of patterns) {
      const m = views[view].match(
        new RegExp((p.re ?? p).source, (p.re ?? p).flags.replace("g", "")),
      );
      if (m) {
        out.push({
          rule,
          match: String(value)
            .slice(m.index, m.index + m[0].length)
            .trim(),
        });
        break;
      }
    }
  }
  return out;
}
