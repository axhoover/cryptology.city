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
file, and a diff always means the content changed.

## Stability contract

- **Ids never change.** An object's `id` is independent of its filename, so a
  page can be renamed — or a variant promoted to its own page — without breaking
  a formalization link. Ids are what you join on; `slug` and `page` are
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
  "title": "Ring-LWE",
  "aliases": ["RLWE"],
  "unlisted": false, // hidden from the explorer and folder listings
  "formal": "CryptoCity.Assumptions.RLWE", // optional, reserved for the formalization repo
}
```

`formal` is the seam for Lean/EasyCrypt: a variant is already a named security
notion or syntax, so pointing one at a formal definition needs no new mechanism.
Nothing consumes it yet.

## `reductions`

A hyperedge: a **set** of hypotheses implying **one** conclusion.

```jsonc
{
  "id": "red-prg-to-prf-ggm86",
  "kind": "implication", // implication | inclusion | equivalence
  "hypotheses": ["prg"], // >= 1 object id
  "conclusion": "prf", // exactly one object id
  "class": "fully-black-box", // a key of `classes`, or "unstated"
  "model": "standard", // standard | rom | crs | generic-group | algebraic-group | quantum | other
  "source": ["[[GGM86 - How to construct random functions|GGM86]]"],
  "via": [], // lemma or technique used, e.g. the switching lemma
  "securityLoss": "", // free text
  "status": "draft", // stub | draft | complete
  "page": "content/Reductions/prg-to-prf-ggm86.md",
  "slug": "prg-to-prf-ggm86",
  "title": "PRG ⇒ PRF (GGM)",
}
```

Three rules a consumer can rely on:

- **`hypotheses` is a conjunction, never a disjunction.** Several assumptions
  each independently sufficient are separate entries with one hypothesis each.
  `{lwe} ⇒ pke` and `{ddh} ⇒ pke` are two reductions; `{sparse-lpn, ddh} ⇒ she`
  is one. Flattening a multi-hypothesis edge into pairwise object-to-object
  edges misrepresents it as several independent implications — which is why the
  graph view is bipartite.
- **Chains are already split.** No entry covers "OWF → PRG → PRF"; that is two
  entries, each with its own `source`.
- **`source` is either citations or the token `folklore`.** A citation is the
  wiki's own link form, `[[<reference filename minus .md>|<key>]]`. `folklore`
  means the wiki has no attribution — never that none exists. No source is ever
  invented.

`kind` matters for reasoning: `inclusion` is containment (`IP ⊆ PSPACE`, not
"IP implies PSPACE") and `equivalence` holds in both directions. Both take
exactly one hypothesis.

## `barriers`

A barrier says what the _existence_ of a reduction would imply:

```
(exists a reduction of class C from {A_i} to B)  ⇒  Q
```

A classical black-box separation is `Q = contradiction`; Impagliazzo–Rudich is
the general case, `Q = P ≠ NP`. One type covers both.

```jsonc
{
  "id": "bar-owp-to-ka-ir89",
  "hypotheses": ["owp"], // the hyperedge being ruled out
  "conclusion": "key-agreement",
  "class": "relativizing", // the class of reduction the barrier applies to
  "consequences": [
    // a LIST: one hyperedge can carry several framings
    { "kind": "complexity", "target": "p-neq-np", "class": "relativizing" },
    { "kind": "contradiction", "target": "", "class": "fully-black-box" },
  ],
  "strength": "unconditional", // unconditional | conditional
  "conditionalOn": [], // oracle or assumption the barrier rests on
  "source": ["[[IR89 - ...|IR89]]"],
  "status": "draft",
  "page": "content/Barriers/no-owp-to-key-agreement-ir89.md",
  "slug": "no-owp-to-key-agreement-ir89",
  "title": "No relativizing reduction from OWP to key agreement",
}
```

`consequences[].kind` is one of:

| `kind`          | `target` resolves to                               |
| --------------- | -------------------------------------------------- |
| `contradiction` | nothing — `target` must be empty                   |
| `object`        | an `objects[].id`                                  |
| `complexity`    | a key of `propositions`                            |
| `reduction`     | a `reductions[].id` — these chain into the closure |

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

`classSentinels` lists values that are _not_ classes and sit outside the order —
currently just `unstated`, which is comparable to nothing, so the contradiction
rule never fires on it. Most of the corpus is `unstated`, because the source
pages rarely say which notion they mean, and recording a class the wiki does not
state would fabricate a claim.

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
never as an error.

## Closure

Hypergraph reachability is Horn-clause forward chaining and runs in linear time:
a reduction fires once every hypothesis is derived.

```bash
node scripts/generate-relations.mjs --derive=lwe,ddh   # what follows from an assumption set
node scripts/generate-relations.mjs --redundant        # conclusions already reachable another way
```

`--redundant` lists reductions whose conclusion already follows from their own
hypotheses without them, with the chain that reaches it. These are **reported,
never deleted**: a direct one-step construction is usually worth keeping even
when a longer path exists, and the longer path may rest on a weaker class or a
worse loss.

## Caveats a consumer should encode

- `status: "stub"` means the relation was migrated but could not be typed
  confidently. Do not treat a stub's `class` or `model` as evidence.
- `class: "unstated"` is the honest majority, not a defect to be defaulted away.
- An object with `unlisted: true` is a real node; it is only hidden from
  navigation.
- Not every relation on the wiki is in here. Class inclusions between complexity
  classes, attacks, and definitional statements were deferred rather than
  forced into a shape that would misrepresent them.
