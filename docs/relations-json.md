# `relations.json` — the relationship manifest

The machine-readable form of everything the wiki asserts about how cryptographic
objects relate. This is an **interface**: CCwiki renders from it, and the
Lean/EasyCrypt formalization repo joins against it. Treat the field names and
the id namespace as a contract.

|              |                                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Built by     | `node scripts/generate-relations.mjs`                                                                                            |
| Committed at | `.reductions/relations.json`                                                                                                     |
| Served at    | `https://cryptology.city/static/relations.json`                                                                                  |
| Validated by | `node scripts/lint.mjs` (on the source frontmatter) and `node scripts/generate-relations.mjs --check` (that the file is current) |

The manifest is a pure function of `content/` and `schema/`. It carries **no
timestamp and no build id**, so an unchanged wiki produces a byte-identical
file, and a diff always means the content changed. Since `--check` compares
bytes, `.prettierignore` excludes `.reductions/*.json` from `npm run format`
and `npm run check`.

## Stability contract

- **Ids never change while a page states the same theorem.** A page rewritten
  to state a different theorem (reversed direction, different conclusion, or a
  different source theorem) retires its id and takes
  `red-<hypotheses>-to-<conclusion>[-<source>]` (`bar-…` on a barrier);
  refining a node on the same theorem keeps the id. The commit that retires an
  id names it. An object's `id` is independent of its filename, so a page can be
  renamed — or a variant promoted to its own page — without breaking a
  formalization link. Ids are what you join on; `slug` and `page` are
  presentation and may move.
- **`version` is bumped on any breaking change** to field names, types, or
  semantics. Additive fields do not bump it, so consumers must ignore unknown
  keys.
- Arrays are sorted by `id`, so diffs stay readable.

## Top level

```jsonc
{
  "version": 1,
  "schema": "https://cryptology.city/docs/relations-json",
  "classes": { ... },          // the reduction-class partial order
  "classSentinels": ["unstated"],
  "propositions": { ... },     // complexity claims that are not wiki objects
  "objects": [ ... ],          // nodes
  "reductions": [ ... ],       // hyperedges
  "barriers": [ ... ]          // statements about which hyperedges can exist
}
```

## `objects`

A node in the hypergraph. Either a page, or a **variant**: a named sub-object
that lives as a section of a page, so the graph can name `ring-lwe` without the
wiki having to split the LWE page.

```jsonc
{
  "id": "ring-lwe", // stable; join on this
  "kind": "variant", // "object" | "variant"
  "type": "assumption", // primitive | assumption | complexity-class | glossary | folklore | note
  "page": "content/Assumptions/learning-with-errors.md",
  "slug": "learning-with-errors",
  "anchor": "#ring-lwe", // variants only
  "of": "lwe", // variants only: the host object's id
  "title": "Ring LWE", // a page: its frontmatter title; a variant: the heading its anchor points at
  "aliases": ["RLWE"],
  "unlisted": false, // hidden from the explorer and folder listings
  "formal": "CryptoCity.Assumptions.RLWE", // optional, reserved for the formalization repo
}
```

A variant's `title` is the text of the heading its `anchor` points at on the
host page, with markdown (links, emphasis, code) removed and math kept as
`$…$` TeX: `"$k$-Linear assumption"`, `"Honest majority ($t < n/2$)"`. The
anchor is matched as the site resolves a link to it, against the heading ids
rehype-slug assigns, and the lint rejects an anchor that matches no heading;
`title` falls back to the variant's `id` only if one slips through. Any
`title` may contain `$…$` math, and a literal `$` stands for itself
(`"IND$-CPA Security"`), so a consumer rendering titles as markdown escapes a
`$` that opens no math span, as the wiki's own generated links do.

`formal` is the seam for Lean/EasyCrypt: a variant is already a named security
notion or syntax, so pointing one at a formal definition needs no new mechanism.
Nothing consumes it yet.

## `reductions`

A hyperedge: a **set** of hypotheses implying **one** conclusion.

```jsonc
{
  "id": "red-prg-to-prf-ggm86",
  "kind": "implication", // implication | inclusion | equivalence
  "hypotheses": ["prg"], // >= 1 object id; assumed objects only
  "conclusion": "prf", // exactly one object id
  "class": "fully-black-box", // a key of `classes`, or "unstated"
  "model": "standard", // standard | rom | crs | generic-group | algebraic-group | quantum | other
  "source": ["[[GGM86 - How to construct random functions|GGM86]]"],
  "via": [], // transform, lemma or technique used, e.g. Fiat–Shamir, the switching lemma
  "heuristic": false, // true: a candidate construction with no security reduction
  "securityLoss": "", // free text
  "rationale": {
    // optional: why a field holds its value, keyed by this record's field names
    "class": "The construction calls the PRG only as an oracle, once per input bit, and the hybrid reduction runs any PRF distinguisher only as an oracle.",
  },
  "status": "draft", // stub | draft | complete
  "page": "content/Reductions/prg-to-prf-ggm86.md",
  "slug": "prg-to-prf-ggm86",
  "title": "PRG ⇒ PRF (GGM)",
}
```

Four rules a consumer can rely on:

- **`hypotheses` is a conjunction, never a disjunction.** Several assumptions
  each independently sufficient are separate entries with one hypothesis each.
  `{lwe} ⇒ pke` and `{ddh} ⇒ pke` are two reductions; `{sparse-lpn, ddh} ⇒ she`
  is one. Flattening a multi-hypothesis edge into pairwise object-to-object
  edges misrepresents it as several independent implications — which is why the
  graph view is bipartite.
- **Chains are already split.** No entry covers "OWF → PRG → PRF"; that is two
  entries, each with its own `source`.
- **`hypotheses` lists assumed objects only.** An idealised model the proof
  relies on is in `model`, not also a hypothesis, and a transform or technique
  (Fiat–Shamir, arithmetization) is in `via`, so one theorem yields one
  hyperedge. A model or technique id is a hypothesis only when it is the sole
  one: `{rom} ⇒ X` reads "X holds in the random-oracle model", so a
  generic-group lower bound is the edge `{ggm} ⇒ dlog`.
- **`source` is either citations or the token `folklore`.** A citation is the
  wiki's own link form, `[[<reference filename minus .md>|<key>]]`. `folklore`
  means the wiki has no attribution — never that none exists. No source is ever
  invented.

`kind` matters for reasoning: `inclusion` is containment (`IP ⊆ PSPACE`, not
"IP implies PSPACE") and `equivalence` holds in both directions. Both take
exactly one hypothesis.

### `rationale`

`rationale`, on a reduction or a barrier, says in one sentence per field why the
page records the value it does. It comes from the page's frontmatter
`rationale` mapping and is the only place that justification lives: the page
body states the result and does not repeat it (`schema/README.md` § Reduction
and barrier pages).

- The key is **omitted** when the page has no rationale. Most entries have
  none: a stock case (`class: unstated` with nothing more known, `class: free`
  on a complexity-class containment) never gets one.
- Keys are the record's own field names, in the record's field order:
  `kind`, `class`, `model`, `source`, `via`, `heuristic`, `securityLoss` on a
  reduction; `class`, `strength`, `conditionalOn`, `oracle`, `source` on a
  barrier. `oracle` is the one key with no field of the same name in the
  record. The endpoints, `consequences` and `circumventedBy` never carry one.
- Each value is a single-line string. It explains a recorded value; it never
  changes what the value means, so a consumer reasoning over the graph can
  ignore it.

## `barriers`

A barrier says what the _existence_ of a reduction would imply:

```
(exists a reduction of class C from {A_i} to B)  ⇒  Q
```

A classical black-box separation is `Q = contradiction`; Impagliazzo–Rudich is
the general case, `Q = P ≠ NP`. One type covers both.

```jsonc
{
  "id": "bar-owp-to-ke-ir89",
  "hypotheses": ["owp"], // the hyperedge being ruled out
  "conclusion": "ke",
  "class": "relativizing", // the class of reduction the barrier applies to
  "consequences": [
    // a LIST: one hyperedge can carry several framings
    { "kind": "contradiction", "target": "", "class": "relativizing" },
    { "kind": "complexity", "target": "p-neq-np", "class": "fully-black-box" },
  ],
  "strength": "unconditional", // unconditional | conditional
  "conditionalOn": [], // unproven assumption(s) the barrier theorem rests on: an objects[].id, or free text when no node exists
  "circumventedBy": [], // reductions[].id that reach the conclusion outside the barrier's class or scope
  "source": ["[[IR89 - ...|IR89]]"],
  "rationale": {
    // optional, as on reductions
    "class": "A construction and security proof that hold relative to every oracle hold relative to IR89's, under which one-way permutations exist and key agreement does not.",
  },
  "status": "draft",
  "page": "content/Barriers/no-owp-to-ke-ir89.md",
  "slug": "no-owp-to-ke-ir89",
  "title": "No relativizing reduction from OWP to KE",
}
```

`consequences[].kind` is one of:

| `kind`          | `target` resolves to                               |
| --------------- | -------------------------------------------------- |
| `contradiction` | nothing — `target` must be empty                   |
| `object`        | an `objects[].id`                                  |
| `complexity`    | a key of `propositions`                            |
| `reduction`     | a `reductions[].id` — these chain into the closure |

`circumventedBy` lists reductions that get around the barrier — BH26's
non-black-box OIHF ⇒ OT is `circumventedBy` on the fully-black-box barrier
`bar-oihf-to-ot-bh26`. A circumventing reduction need not share the barrier's
hyperedge. A consumer must not read a barrier as the last word on its
conclusion without checking this list.

## `classes` — the partial order

```jsonc
"classes": {
  "fully-black-box": { "title": "Fully black-box", "implies": ["semi-black-box", "relativizing"] },
  "free":            { "title": "Free", "implies": [] }
}
```

`implies` points from the **narrower** notion to the **broader** one and means
set containment on reductions: every `fully-black-box` reduction is also a
`relativizing` one.

**The rule a consumer needs.** A barrier ruling out class `B` contradicts a
reduction of class `C` on the same hyperedge **iff `C implies* B`** in the
transitive closure. A barrier against `relativizing` kills a `fully-black-box`
reduction; a barrier against `fully-black-box` does not touch a `free` one.
`fixed-construction` is not an RTV04 class: it marks a barrier refuting one
construction named on the page (the identity map on schemes, Fiat–Shamir), and
implies only `free`, so such a barrier bites no RTV04-classed reduction.

`classSentinels` lists values that are _not_ classes and sit outside the order —
currently just `unstated`, which is comparable to nothing, so the contradiction
rule never fires on it. Most of the corpus is `unstated`, because the source
pages rarely say which notion they mean. A `fully-black-box` the source does not
state appears only where the proof shape justifies it, and the record's
`rationale.class` says why (see `schema/README.md` § Reduction classes).

## `propositions`

Complexity claims a barrier can point at that are not wiki objects.

```jsonc
"propositions": {
  "p-neq-np": { "title": "$\\classP \\neq \\classNP$", "believed": true, "page": "Complexity/nondeterministic-polynomial-time" }
}
```

`believed` is the community's working belief. It is what drives the lint's soft
flag: a reduction whose existence a barrier says would imply something with
`believed: false` reads as _"this would be a major result — confirm the class"_,
never as an error. A barrier consequence with `believed: true` draws a lint
warning, since forcing something expected rules nothing out; `p-neq-np` for
Impagliazzo–Rudich, an open problem whose proof would itself be a major result,
is the case where it stands.

## Closure

Hypergraph reachability is Horn-clause forward chaining and runs in linear time:
a reduction fires once every hypothesis is derived.

```bash
node scripts/generate-relations.mjs --derive=lwe,ddh   # what follows from an assumption set
node scripts/generate-relations.mjs --redundant        # conclusions already reachable another way
```

Neither mode uses a `heuristic` edge. Both ignore `model`, so a chain may mix
standard-model and idealised-model edges.

`--redundant` lists reductions whose conclusion already follows from their own
hypotheses without them, with the chain that reaches it. These are **reported,
never deleted**: a direct one-step construction is usually worth keeping even
when a longer path exists, and the longer path may rest on a weaker class or a
worse loss.

## Caveats a consumer should encode

- `status: "stub"` means the page is skeletal: the relation is recorded but its
  fields were not typed confidently. Do not treat a stub's `class` or `model`
  as evidence.
- `class: "unstated"` is the honest majority, not a defect to be defaulted away.
- `heuristic: true` marks a candidate construction whose source gives no
  security reduction (GGHRSW13's iO from multilinear maps). It is an edge of
  the graph, not a theorem: skip it when deriving consequences.
- A derivation that must stay in the standard model filters on `model`;
  idealised models never appear in `hypotheses` except as a sole hypothesis.
- An object with `unlisted: true` is a real node; it is only hidden from
  navigation.
- Not every relation on the wiki is in here. Class inclusions between complexity
  classes, attacks, and definitional statements were deferred rather than
  forced into a shape that would misrepresent them. A refutation of an
  assumption is an attack, recorded in the assumption page's prose, never a
  barrier.
