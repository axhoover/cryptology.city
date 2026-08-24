# Contributing to Cryptology City

Content lives in `content/` as Markdown with KaTeX math and pseudocode blocks.
Every page carries machine-validated frontmatter, and CI runs the lint plus a
full Quartz build on every PR. Run both locally before pushing:

```bash
npm install
git submodule update --init --recursive   # cryptobib, for BibTeX buttons
npm run lint                              # schema, hyperedges, wikilinks, aliases, macros
node scripts/generate-relations.mjs --check   # generated sections and relations.json are current
npm test                                  # unit tests
npx quartz build --serve                  # site at http://localhost:8080
```

If `--check` fails, run `node scripts/generate-relations.mjs` (no flag) and
commit what it changes.

House style (voice, quantifiers, section order, security-definition templates)
is documented in [CLAUDE.md](CLAUDE.md); this file covers the mechanical
contract the lint enforces.

## Frontmatter schema

Every page under `content/` (Templates excluded) declares:

```yaml
type: primitive | assumption | complexity-class | glossary | folklore | reference | note
status: stub | draft | complete
title: <string> # references: the citation key, e.g. "AMR25"
aliases: [] # list, may be empty; each alias unique across the site
```

- `type` must match the directory (`Primitives/` → `primitive`, and so on;
  root pages are `note`).
- `status: stub` means skeletal or missing mandated sections; `draft` is the
  default working state; `complete` is a human judgment — the lint then
  requires zero TODO markers and the full section contract for the type.
- Optional everywhere: `tags`, `defined-in` (wikilinks to the References pages
  where the object was introduced), `unlisted` (see below).
- `unlisted: true` keeps a page built, linkable and in `relations.json` but out
  of the explorer tree and folder listings. It is for the long tail of object
  pages that exist so a hyperedge endpoint resolves.

Object pages (everything except references and the two edge types) additionally
declare **identity**:

```yaml
id: lwe # stable, independent of the filename
variants: # named sub-objects that live as SECTIONS of this page
  ring-lwe: "#ring-lwe"
  module-lwe: "#module-lwe"
```

`id` is what the graph, `relations.json`, and the future Lean/EasyCrypt repo
join on, so it must survive a rename — never change one once published.
`variants` lets a hyperedge name `ring-lwe` without splitting the LWE page; the
lint checks the anchor is a real heading.

**Object pages never carry relation fields.** `implies`, `implied-by`,
`reductions`, `from`, `to` and friends are a hard lint error, because an edge
list cannot express `{DDH, CRHF} ⇒ B` without misrepresenting each hypothesis.
Relations live on their own pages, and each object page gets a **generated**
"Participates in" section instead — see below.

References additionally require:

```yaml
authors: First Author, Second Author # one comma-separated string
venue: Eurocrypt 2025 # "preprint" is fine
published: 2025-02-09 # YYYY-MM-DD or YYYY
source: https://eprint.iacr.org/2025/190 # canonical: eprint > arXiv abs > DOI
cryptobib_key: EC:SilWic25 # exactly ONE of cryptobib_key | bibtex
```

Use `bibtex:` (a YAML block scalar) for papers cryptobib does not carry; add
`cryptobib_pending: true` if cryptobib is expected to pick the paper up later.

## Worked examples

### Primitive (`content/Primitives/`)

[`pseudorandom-function.md`](content/Primitives/pseudorandom-function.md) is
the exemplar. The shape:

````markdown
---
type: primitive
status: draft
aliases:
  - PRF
title: Pseudorandom function
---

# Pseudorandom function

One or two sentences saying what the object is — an informal version of the
formal definition, not a motivation.

## Syntax

A PRF is a pair of efficient algorithms $\PRF = (\KeyGen, \Eval)$ ...

## Properties

### Security

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{prf}}_{\PRF,\calA}(\secpar)$}
...
\end{algorithm}
```

A PRF $\PRF$ is **pseudorandom** if for all efficient $\calA$, ... is negligible.

# Variations

# Other results

- PRF implies X — [[GGM86 - How to construct random functions|GGM86]]
````

### Assumption (`content/Assumptions/`)

Same frontmatter with `type: assumption`; sections `## Assumption`,
`## Known Results`, `# Variations`, `# Attacks`. See
[`learning-with-errors.md`](content/Assumptions/learning-with-errors.md).

### Complexity class (`content/Complexity/`)

`type: complexity-class`; a short definition, then `## Notable problems` and
`## Known relationships`. See
[`statistical-zero-knowledge.md`](content/Complexity/statistical-zero-knowledge.md).

### Reduction (`content/Reductions/`)

A reduction is a **hyperedge**: a _set_ of hypotheses implying _one_ conclusion,
of some reduction class.

```markdown
---
type: reduction
status: draft
title: PRG ⇒ PRF (GGM)
aliases: []
id: red-prg-to-prf-ggm86 # stable; never changes
kind: implication # implication | inclusion | equivalence
hypotheses: [prg] # a LIST, >= 1 — a conjunction, never a disjunction
conclusion: prf # exactly one
class: fully-black-box # from schema/reduction-classes.yaml, or `unstated`
model: standard # standard | rom | crs | generic-group | algebraic-group | quantum | other
source:
  - "[[GGM86 - How to construct random functions|GGM86]]"
via: [] # optional: a lemma or technique used, e.g. the switching lemma
security-loss: "" # free text
---

# PRG ⇒ PRF (GGM)

A length-doubling [[pseudorandom-generator|PRG]] implies a
[[pseudorandom-function|PRF]], by the GGM binary-tree construction.

## Construction

Migrated verbatim from [[pseudorandom-function|PRF]] § Other results:

> The GGM tree construction: given a length-doubling PRG $G : \bits^n \to \bits^{2n}$, ...

## Notes

Why this class, what the caveats are, anything suspected and left unfixed.
```

**Two rules the lint cannot check for you, and that matter most:**

- **Conjunction vs disjunction.** `hypotheses` is a conjunction. Several
  assumptions each _independently_ sufficient are **separate pages with one
  hypothesis each** — `{lwe} ⇒ pke` and `{ddh} ⇒ pke` are two pages. Several
  assumptions _jointly_ required are **one page with several hypotheses** —
  `{sparse-lpn, ddh} ⇒ she`. Never encode a disjunction inside one page.
- **Split composite chains.** "OWF → PRG (HILL99) → PRF via GGM (GGM86)" is
  **two** pages, each with its own `source`. Never one OWF ⇒ PRF page.

`class` is `unstated` unless the source says which notion it means. Recording a
class the wiki does not state adds a mathematical claim, which is not your job
when transcribing one. `source` is either citations or the bare token
`folklore`; never invent a reference, and `standard` is not a provenance value.

### Barrier (`content/Barriers/`)

A barrier says what the _existence_ of a reduction would imply:

```
(exists a reduction of class C from {A_i} to B)  ⇒  Q
```

A classical black-box separation is the case `Q = contradiction`;
Impagliazzo–Rudich is the general case, `Q = P ≠ NP`. One type covers both.

```markdown
---
type: barrier
status: draft
title: No relativizing reduction from OWP to key agreement
aliases: [Impagliazzo–Rudich]
id: bar-owp-to-ka-ir89
hypotheses: [owp] # the hyperedge being ruled out
conclusion: key-agreement
class: relativizing # the class of reduction the barrier applies to
consequences: # a LIST — one hyperedge can carry several framings
  - kind: complexity # contradiction | object | complexity | reduction
    target: p-neq-np # a key of schema/propositions.yaml
    class: relativizing
  - kind: contradiction
    target: "" # contradiction takes no target
    class: fully-black-box
strength: unconditional # unconditional | conditional
conditional-on: [] # required when strength is conditional
oracle: "a uniformly random permutation π : {0,1}^n → {0,1}^n"
source:
  - "[[IR89 - Limits on the provable consequences of one-way permutations|IR89]]"
---
```

`consequences` is a list because one theorem can carry several framings over the
same hyperedge and one proof — IR89 is both "no relativizing reduction exists"
and "a proof would give P ≠ NP". Splitting those into two pages would duplicate
the sketch.

**How the classes interact.** `schema/reduction-classes.yaml` is a partial order
of generality (see `schema/README.md`). A barrier ruling out class `B`
contradicts a reduction of class `C` on the same hyperedge **iff `C implies* B`**
— so a barrier against `relativizing` kills a fully-black-box reduction, while a
barrier against `fully-black-box` does not touch a `free` one. The lint enforces
this as a hard error, and warns separately when a reduction would prove
something a barrier says is a major result.

### Generated sections — do not hand-edit

Every object page carries a generated region:

```
<!-- BEGIN GENERATED participates-in <checksum> -->
## Participates in
...
<!-- END GENERATED participates-in -->
```

It lists the reductions the object is a hypothesis of, the reductions that
produce it, and the barriers touching it. The checksum makes a hand edit a lint
error rather than something the next regeneration silently reverts. To change
what appears there, edit the reduction or barrier page and run:

```bash
node scripts/generate-relations.mjs
```

Prose about the object goes _outside_ the markers.

### Glossary / Folklore / Note

`type: glossary` (models, frameworks, terminology — see
[`random-oracle-model.md`](content/Glossary/random-oracle-model.md)),
`type: folklore` (well-known results without a canonical citation), and
`type: note` for root-level essays.

### Reference (`content/References/`)

Filename is `KEY - Full Title.md` — **the filename is the URL; never rename
it.** Frontmatter `title` is the _citation key_, not the paper title:

```markdown
---
type: reference
status: draft
title: "BGI15"
source: https://link.springer.com/chapter/10.1007/978-3-662-46803-6_12
authors: Elette Boyle, Niv Gilboa, Yuval Ishai
venue: Eurocrypt 2015
published: 2015-01-01
aliases:
  - BGI15
cryptobib_key: EC:BoyGilIsh15
---

# [BGI15] Function Secret Sharing

**Authors:** Elette Boyle, Niv Gilboa, Yuval Ishai | **Venue:** Eurocrypt 2015 | [Source](...)

## Abstract

The paper's verbatim abstract. Editorial commentary goes under `# Notes`.
```

Citation keys are author initials + two-digit year (`BGI15`, `BFL+24`); if a
key is taken by a different paper, disambiguate with a suffix in `title`, the
H1, and `aliases` (`SW25a`, `SW25b`) — the filename keeps the bare key it was
created with.

## Links, citations, macros

- Wikilinks: `[[page-slug]]`, `[[page-slug|Display]]`. Every link must resolve
  to a page, an alias, or a folder. A link whose target is intentionally
  deferred goes in `scripts/stub-inventory.json` (the lint then warns instead
  of failing).
- Every factual claim needs `[[KEY - Full Title|KEY]]` or an explicit
  _— folklore_ / _— standard_ flag. If the reference page is missing, create
  the stub first (see `content/Templates/Reference.md` — it takes a minute).
- All math uses the macros in `macros.ts` (documented in
  [`content/Glossary/latex-macros.md`](content/Glossary/latex-macros.md)).
  Never define macros inline; to add one, edit `macros.ts` _and_ the glossary
  page in the same commit.

## PRs

- Branch from `main`, named `topic/short-description` (e.g. `content/lwe-attacks`,
  `fix/broken-links`).
- One topic per PR. Small commits, one logical change each, imperative
  subject lines prefixed by area (`references: …`, `lwe: …`, `lint: …`).
- Run `npm run lint` before every commit; CI enforces it plus `npx quartz build`.
- Never commit `public/`, never rename or move files under `content/`
  (live URLs), never touch `.orchestrator/state/` or `.fact-check/queue.json`
  outside the rules in [CLAUDE.md](CLAUDE.md).
