// Cross-page checks on the hyperedge graph.
//
// Shared by scripts/lint.mjs and test/lint-edges.test.ts. Each check takes pages
// as { file, fm } (fm is the parsed frontmatter) and returns findings; the lint
// decides whether a finding is an error or a warning and words the message.

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
