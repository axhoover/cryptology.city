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
// An edge proved in several models at once (`model: [algebraic-group, rom]`,
// PLONK's AGM + ROM proof) adds all of them to its conclusion's scope.
//
// An object can be derived with several scopes; only the minimal ones are
// kept, since a smaller scope licenses everything a larger one does.
//
// A generic group without a pairing oracle (Shoup's, Maurer's) is a weaker
// adversary model than a generic bilinear group: a bound proved in it says
// nothing about generic algorithms that may also evaluate a pairing. A
// `generic-group` edge none of whose hypotheses is a bilinear node (a pairing,
// or the generic bilinear group model) is read as pairing-free, and its
// conclusion also carries the scope bit `no-pairing`; an edge with a bilinear
// hypothesis never consumes a `no-pairing` object. LRSW99's GGM => LRSW thus
// cannot feed CL04's Type 1 pairing + LRSW => DS, while BB08's bound in generic
// bilinear groups can feed pairing-based constructions.
//
// An ideal resource given as a hypothesis — the OT functionality, a trusted
// dealer of correlated randomness, private point-to-point channels — puts the
// conclusion in that hybrid model: Kil88's
// `{ideal-ot} => two-party-computation` gives 2PC in the OT-hybrid model, not
// a protocol over plain channels. The conclusion carries the resource as a
// scope, which, like a model's, every later step keeps, so a hybrid-model
// result never becomes a plain-model one. A hybrid resource is not an oracle,
// though: commitments exist information-theoretically in the OT-hybrid model,
// so a relativizing proof such as commitments => OWF does not carry over, and
// a non-interactive conclusion (a one-way function) reads the same in the
// hybrid model as in the plain model. A hybrid-scoped object is therefore
// consumed only by a relativizing edge whose conclusion is itself a protocol
// notion, a node of the MPC or OT page (`protocolNodes`): UC => stand-alone
// and 2PC => malicious OT fire inside the hybrid model, commitments => OWF
// does not.
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
  "no-pairing",
  "ideal-ot",
  "correlated-randomness",
  "secure-channels",
];

// Bilinear nodes: the pairing object and its variants, and the generic
// bilinear group model. `bilinearNodes(objects)` reads them off the manifest's
// objects, so a new pairing variant is picked up; DEFAULT_BILINEAR is the set
// when no objects are given.
export const DEFAULT_BILINEAR = [
  "bilinear-pairing",
  "type-1-pairing",
  "type-3-pairing",
  "generic-bilinear-group-model",
];
export const bilinearNodes = (objects) =>
  new Set(
    objects
      .filter(
        (o) =>
          o.id === "bilinear-pairing" ||
          o.of === "bilinear-pairing" ||
          o.id === "generic-bilinear-group-model",
      )
      .map((o) => o.id),
  );
const NO_PAIRING = 1 << SCOPED_MODELS.indexOf("no-pairing");

// Ideal resources that scope a conclusion to their hybrid model.
export const HYBRID_RESOURCES = [
  "ideal-ot",
  "correlated-randomness",
  "secure-channels",
];
/** The hybrid-resource scope bits of a hypothesis list. */
const hybridBits = (hypotheses) =>
  hypotheses.reduce(
    (a, h) =>
      HYBRID_RESOURCES.includes(h) ? a | (1 << SCOPED_MODELS.indexOf(h)) : a,
    0,
  );

const HYBRID = HYBRID_RESOURCES.reduce(
  (a, h) => a | (1 << SCOPED_MODELS.indexOf(h)),
  0,
);

/**
 * Protocol nodes, which a hybrid-scoped object may feed: the MPC and OT pages'
 * objects and variants, read off the manifest's objects.
 */
export const protocolNodes = (objects) =>
  new Set(
    objects
      .filter(
        (o) => ["mpc", "ot"].includes(o.id) || ["mpc", "ot"].includes(o.of),
      )
      .map((o) => o.id),
  );

/** The scope bit of a model; a model first met here is appended. */
export const modelBit = (model) => {
  if (model === undefined || UNSCOPED_MODELS.includes(model)) return 0;
  let i = SCOPED_MODELS.indexOf(model);
  if (i < 0) i = SCOPED_MODELS.push(model) - 1;
  return 1 << i;
};

/** Every model an edge is proved in: its `models` list, else its `model`. */
export const modelsOf = (r) => [].concat(r.models ?? r.model ?? "standard");

/** The scope bits an edge adds to its conclusion: one per model it uses. */
export const modelMask = (r) =>
  modelsOf(r).reduce((a, m) => a | modelBit(m), 0);

/**
 * The scope bits an edge adds to its conclusion: one per model it uses, the
 * bit of each ideal resource among its hypotheses, and `no-pairing` for a
 * generic-group edge with no bilinear hypothesis.
 */
export const edgeScope = (r, bilinear = new Set(DEFAULT_BILINEAR)) =>
  modelMask(r) |
  hybridBits(r.hypotheses ?? []) |
  (modelsOf(r).includes("generic-group") &&
  !(r.hypotheses ?? []).some((h) => bilinear.has(h))
    ? NO_PAIRING
    : 0);

/** The scope bitmask as model names, in SCOPED_MODELS order. */
export const scopeNames = (mask) =>
  SCOPED_MODELS.filter((_, i) => mask & (1 << i));

export function buildRules(reductions, bilinear = new Set(DEFAULT_BILINEAR)) {
  const rules = [];
  for (const r of reductions) {
    if (!r.conclusion || !r.hypotheses?.length || r.heuristic) continue;
    const base = {
      model: edgeScope(r, bilinear),
      cls: r.class ?? "unstated",
      pairing: r.hypotheses.some((h) => bilinear.has(h)),
    };
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
 * class `cls` may consume scoped hypotheses; `bilinear` is the set of bilinear
 * node ids (default DEFAULT_BILINEAR); `protocol` is the set of protocol nodes
 * a hybrid-scoped object may feed (none when omitted).
 *
 * Returns { derived, scopes, used, provenance }:
 *   derived     Set of every object reached, seed included
 *   scopes      Map object -> minimal scope bitmasks (0 = no idealised model)
 *   used        ids of the reductions that fired
 *   provenance  Map object -> { rule, bodyMasks } for its first minimal scope
 */
export function closure(
  reductions,
  seed,
  { exclude, relativizes, bilinear, protocol } = {},
) {
  const rules = buildRules(reductions, bilinear).filter(
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
        // A pairing-based edge cannot run in a generic group with no pairing.
        if (rule.pairing && hyp & NO_PAIRING) continue;
        // A hybrid-model object feeds only protocol notions.
        if (hyp & HYBRID && !protocol?.has(rule.head)) continue;
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
