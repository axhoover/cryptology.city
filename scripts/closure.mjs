// Forward chaining over reduction hyperedges, keeping model provenance.
//
// Shared by scripts/generate-relations.mjs (--derive, --redundant) and
// test/closure.test.ts.
//
// Hypergraph reachability is Horn-clause forward chaining: a reduction fires
// once every hypothesis is derived. Each derived object also carries its
// *scope*: the set of idealised models (every model outside UNSCOPED_MODELS)
// that the chain reaching it was proved in. An object derived through `{ggm} => cdh` holds for generic
// algorithms only, not for any group with code, so it is scoped to
// `generic-group`; one derived through a random-oracle proof is scoped to `rom`.
//
// A scoped object may be consumed only by an edge whose class relativizes
// (fully-black-box or relativizing: the construction uses its hypotheses as
// oracles and the theorem holds relative to every oracle). A `free`,
// `unstated` or other edge may use the code of its hypothesis, which a generic
// group or a random oracle does not have — DG17a's CDH => IBE runs the group
// inside garbled circuits — so it fires only on unscoped hypotheses. The
// conclusion's scope is the union of the hypotheses' scopes and the edge's own
// model.
//
// An object can be derived with several scopes; only the minimal ones are
// kept, since a smaller scope licenses everything a larger one does.
//
// An ideal resource given as a hypothesis — the OT functionality, a trusted
// dealer of correlated randomness — puts the conclusion in that hybrid model:
// Kil88's `{ideal-ot} => two-party-computation` gives 2PC in the OT-hybrid
// model, not a protocol over plain channels. The conclusion carries the
// resource as a scope, which, like a model's, every later step keeps: a
// relativizing edge may consume the object (UC => stand-alone holds in every
// surrounding hybrid model), and what it derives stays scoped, so a
// hybrid-model result never becomes a plain-model one (2PC => malicious OT
// gives OT in the OT-hybrid model, not an OT protocol).
//
// `kind: inclusion` and `kind: equivalence` also propagate — an equivalence in
// both directions. A `heuristic` edge is a candidate construction with no
// security reduction, not a theorem, so it never fires.

// Models whose theorems hold for every algorithm with code: an edge proved in
// one of these leaves its conclusion unscoped. Every other model scopes it —
// the idealised ones below by name, and any further value (`other`, e.g.
// DLO24's generic ring model with preprocessing) as itself, so an unknown model
// fails closed rather than passing as standard.
export const UNSCOPED_MODELS = ["standard", "crs", "quantum"];
export const SCOPED_MODELS = [
  "generic-group",
  "rom",
  "algebraic-group",
  "ideal-ot",
  "correlated-randomness",
];

// Ideal resources that scope a conclusion to their hybrid model.
export const HYBRID_RESOURCES = ["ideal-ot", "correlated-randomness"];
/** The hybrid-resource scope bits of a hypothesis list. */
const hybridBits = (hypotheses) =>
  hypotheses.reduce(
    (a, h) =>
      HYBRID_RESOURCES.includes(h) ? a | (1 << SCOPED_MODELS.indexOf(h)) : a,
    0,
  );

/**
 * The scope bits an edge adds to its conclusion: its model's bit, plus the
 * bit of each ideal resource among its hypotheses.
 */
export const edgeScope = (r) =>
  modelBit(r.model) | hybridBits(r.hypotheses ?? []);

/** The scope bit of a model; a model first met here is appended. */
export const modelBit = (model) => {
  if (model === undefined || UNSCOPED_MODELS.includes(model)) return 0;
  let i = SCOPED_MODELS.indexOf(model);
  if (i < 0) i = SCOPED_MODELS.push(model) - 1;
  return 1 << i;
};

/** The scope bitmask as model names, in SCOPED_MODELS order. */
export const scopeNames = (mask) =>
  SCOPED_MODELS.filter((_, i) => mask & (1 << i));

export function buildRules(reductions) {
  const rules = [];
  for (const r of reductions) {
    if (!r.conclusion || !r.hypotheses?.length || r.heuristic) continue;
    const base = { model: edgeScope(r), cls: r.class ?? "unstated" };
    rules.push({ id: r.id, body: r.hypotheses, head: r.conclusion, ...base });
    if (r.kind === "equivalence")
      rules.push({
        id: r.id + "~",
        body: [r.conclusion],
        head: r.hypotheses[0],
        ...base,
      });
  }
  return rules;
}

/**
 * closure(seed) over `reductions`. `relativizes(cls)` says whether an edge of
 * class `cls` may consume scoped hypotheses.
 *
 * Returns { derived, scopes, used, provenance }:
 *   derived     Set of every object reached, seed included
 *   scopes      Map object -> minimal scope bitmasks (0 = no idealised model)
 *   used        ids of the reductions that fired
 *   provenance  Map object -> { rule, bodyMasks } for its first minimal scope
 */
export function closure(reductions, seed, { exclude, relativizes } = {}) {
  const rules = buildRules(reductions).filter(
    (r) => r.id !== exclude && r.id !== exclude + "~",
  );
  const wakes = new Map();
  rules.forEach((r, i) => {
    for (const b of new Set(r.body)) {
      if (!wakes.has(b)) wakes.set(b, []);
      wakes.get(b).push(i);
    }
  });
  const scopes = new Map(); // object -> array of minimal masks
  const provenance = new Map(); // `${object}|${mask}` -> { rule, bodyMasks }
  const used = new Set();
  const queue = [];
  const add = (x, mask, how) => {
    const have = scopes.get(x) ?? [];
    if (have.some((m) => (m & mask) === m)) return; // dominated
    scopes.set(x, have.filter((m) => (m & mask) !== mask).concat(mask));
    if (how) provenance.set(`${x}|${mask}`, how);
    queue.push([x, mask]);
  };
  for (const s of seed) add(s, 0, null);
  while (queue.length) {
    const [cur, curMask] = queue.pop();
    // The object may have been superseded by a smaller scope meanwhile.
    if (!(scopes.get(cur) ?? []).includes(curMask)) continue;
    for (const i of wakes.get(cur) ?? []) {
      const rule = rules[i];
      const body = [...new Set(rule.body)];
      if (!body.every((b) => scopes.has(b))) continue;
      // Every combination of current scopes with `cur` fixed at `curMask`.
      let combos = [[]];
      for (const b of body) {
        const options = b === cur ? [curMask] : scopes.get(b);
        combos = combos.flatMap((c) => options.map((m) => [...c, m]));
      }
      for (const masks of combos) {
        const hyp = masks.reduce((a, m) => a | m, 0);
        if (hyp && !(relativizes ?? (() => false))(rule.cls)) continue;
        used.add(rule.id.replace(/~$/, ""));
        const bodyMasks = Object.fromEntries(body.map((b, k) => [b, masks[k]]));
        add(rule.head, hyp | rule.model, { rule, bodyMasks });
      }
    }
  }
  const derived = new Set(scopes.keys());
  const first = new Map();
  for (const [x, ms] of scopes) {
    const m = [...ms].sort((a, b) => popcount(a) - popcount(b) || a - b)[0];
    const how = provenance.get(`${x}|${m}`);
    if (how) first.set(x, { ...how, mask: m });
  }
  return {
    derived,
    scopes,
    used: [...used],
    provenance: first,
    all: provenance,
  };
}

const popcount = (m) => {
  let c = 0;
  for (; m; m &= m - 1) c++;
  return c;
};

/**
 * The chain reaching `target` with scope `mask` (default: its first minimal
 * scope), as printable steps, seed objects omitted.
 */
export function derivation(target, seed, result, mask) {
  const { scopes, all } = result;
  const start =
    mask ??
    [...(scopes.get(target) ?? [])].sort(
      (a, b) => popcount(a) - popcount(b) || a - b,
    )[0];
  const seen = new Set();
  const steps = [];
  const visit = (obj, m) => {
    const key = `${obj}|${m}`;
    if (seen.has(key) || (seed.includes(obj) && m === 0)) return;
    seen.add(key);
    const how = all.get(key);
    if (!how) return;
    for (const b of how.rule.body) visit(b, how.bodyMasks[b]);
    const scope = scopeNames(m);
    steps.push(
      `{${how.rule.body.join(", ")}} => ${how.rule.head}  (${how.rule.id.replace(/~$/, "")})${scope.length ? `  [${scope.join(", ")}]` : ""}`,
    );
  };
  visit(target, start);
  return steps;
}
