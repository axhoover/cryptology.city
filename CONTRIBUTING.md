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
type: primitive | assumption | complexity-class | glossary | folklore | reference | note | reduction | barrier
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
lint checks the anchor is a real heading, and warns when two variants share one
(synonym ids split one hyperedge in two — keep one id; distinct notions get a
heading each).

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
of some reduction class. Start from
[`content/Templates/Reduction.md`](content/Templates/Reduction.md). The page
below is
[`prg-to-prf-ggm86.md`](content/Reductions/prg-to-prf-ggm86.md) in final form:

````markdown
---
type: reduction
status: draft
title: PRG ⇒ PRF (GGM)
aliases:
  - GGM construction
id: red-prg-to-prf-ggm86 # stable while the page states this theorem
kind: implication # implication | inclusion | equivalence
hypotheses: [prg] # a LIST, >= 1 — a conjunction, never a disjunction
conclusion: prf # exactly one
class: fully-black-box # from schema/reduction-classes.yaml, or `unstated`
model: standard # standard | rom | crs | generic-group | algebraic-group | quantum | other
source:
  - "[[GGM86 - How to construct random functions|GGM86]]"
security-loss: "" # free text
# via: [] # optional: a transform, lemma or technique used (Fiat–Shamir, the switching lemma) — never a hypothesis
# heuristic: true # optional: a candidate construction whose source gives no security reduction
rationale: # optional: one single-line sentence per field, saying why its value was recorded
  class: "The construction calls the PRG only as an oracle, once per input bit, and the hybrid reduction runs any PRF distinguisher only as an oracle."
---

# PRG ⇒ PRF (GGM)

## Statement

A length-doubling [[pseudorandom-generator|PRG]] $G : \bits^n \to \bits^{2n}$ yields a [[pseudorandom-function|PRF]] with key space and range $\bits^n$ and domain $\bits^\ell$: $\KeyGen(1^\secpar)$ outputs $k \getsr \bits^n$ and, writing $G(s) = G_0(s) \| G_1(s)$, $\Eval(k, x_1 \cdots x_\ell) := G_{x_\ell}(G_{x_{\ell-1}}(\cdots G_{x_1}(k) \cdots))$ — [[GGM86 - How to construct random functions|GGM86]].

## Sketch

The construction walks a binary tree of depth $\ell$: start from $k$ and, on bit $x_i$, keep the left or right half of $G$'s output. A hybrid over the $\ell$ tree levels reduces any $q$-query PRF distinguisher to a PRG distinguisher with a factor $q\ell$ loss — standard.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\Eval(k, x_1 \cdots x_\ell)$}
\begin{algorithmic}
\State $y \gets k$
\Comment{$G(s) = G_0(s) \,\|\, G_1(s)$ with $|G_0(s)| = |G_1(s)| = |s|$}
\For{$i = 1, \ldots, \ell$}
\State $y \gets G_{x_i}(y)$
\EndFor
\Return $y$
\end{algorithmic}
\end{algorithm}
```
````

The body is the H1 (identical to `title`), a cited `## Statement`, and the
optional `## Sketch` and `## Notes`, in that order and nothing else; this page
has nothing for Notes, so it has no Notes heading. The site renders the
relation fields and sources in one line under the H1, so no intro sentence
restates the edge. Why a field holds its value is the frontmatter `rationale`,
never a body paragraph, and maintenance history (sourcing passes, migrations,
slug history, notes about other pages) goes nowhere: git keeps it, and work
still to do goes to `TODO_SUMMARY.md`. `schema/README.md` § Reduction and
barrier pages has the full contract; the lint names each violation
(`body-preamble`, `body-field-justification`, …).

**Two rules the lint cannot check for you, and that matter most:**

- **Conjunction vs disjunction.** `hypotheses` is a conjunction. Several
  assumptions each _independently_ sufficient are **separate pages with one
  hypothesis each** — `{lwe} ⇒ pke` and `{ddh} ⇒ pke` are two pages. Several
  assumptions _jointly_ required are **one page with several hypotheses** —
  `{sparse-lpn, ddh} ⇒ she`. Never encode a disjunction inside one page.
- **Split composite chains.** "OWF → PRG (HILL99) → PRF via GGM (GGM86)" is
  **two** pages, each with its own `source`. Never one OWF ⇒ PRF page.

`hypotheses` holds assumed objects only. An idealised model goes in `model`,
not also in `hypotheses` — DLOG ⇒ Schnorr signatures is
`hypotheses: [dlog], model: rom` — and a transform or technique (Fiat–Shamir,
arithmetization) goes in `via`. A candidate construction with no security
reduction is `heuristic: true`. `schema/README.md` has the exceptions and the
conventions for `model` (quantum, hybrid models, two idealised models at once).

`class` is `unstated` unless the source says which notion it means, or the
proof shape justifies `fully-black-box`: one fixed construction using the
hypotheses only as oracles, and one fixed reduction using the adversary only as
an oracle (for a hardness assumption, the reduction turns the adversary into a
solver for it). A construction that uses a hypothesis scheme's code
(bootstrapping, recursive SNARKs) is `free`. Recording a class nobody justifies
adds a mathematical claim, which is not your job when transcribing one. Say why
in `rationale.class`, one sentence; `schema/README.md` § Recording why lists
the two stock cases (`unstated` with nothing more known, `free` on a
complexity-class containment) that get no entry. `source` is either citations
or the bare token `folklore`; never invent a reference, and `standard` is not a
provenance value.

**Which paper goes in `source`.** List every paper whose theorem the Statement
asserts. A paper that only introduced the notion, or proved a weaker precursor,
is cited in the Statement or Notes, not in `source` — `relations.json`
attributes the edge to its `source`. On
[`snark-to-recursive-snarks.md`](content/Reductions/snark-to-recursive-snarks.md)
the Statement asserts BCCT13's plain-model theorem, so `source` is BCCT13;
Val08, which introduced IVC, is cited in the Statement. A paper suffix in the
slug (`-gkm-00`) records where the page came from; `source` is authoritative,
the Statement cites the real source, and the body never mentions the slug (see
`schema/README.md` § Object ids).

### Barrier (`content/Barriers/`)

A barrier says what the _existence_ of a reduction would imply:

```
(exists a reduction of class C from {A_i} to B)  ⇒  Q
```

A classical black-box separation is the case `Q = contradiction`;
Impagliazzo–Rudich is the general case, `Q = P ≠ NP`. One type covers both.
Start from [`content/Templates/Barrier.md`](content/Templates/Barrier.md). The
page below is
[`no-owp-to-ke-ir89.md`](content/Barriers/no-owp-to-ke-ir89.md) in final form,
with `oracle` and the theorem's second framing filled in to show both fields:

```markdown
---
type: barrier
status: draft
title: "No relativizing reduction from OWP to KE"
aliases: []
id: bar-owp-to-ke-ir89
hypotheses: [owp] # the hyperedge being ruled out
conclusion: ke
class: relativizing # the class of reduction the barrier applies to
consequences: # a LIST — one hyperedge can carry several framings
  - kind: contradiction # contradiction | object | complexity | reduction
    target: "" # contradiction takes no target
    class: relativizing
  - kind: complexity
    target: p-neq-np # a key of schema/propositions.yaml
    class: fully-black-box
strength: unconditional # unconditional | conditional
conditional-on: [] # required when conditional: the unproven assumption(s) the theorem rests on, by object id where one exists
oracle: "a random permutation together with a PSPACE-complete oracle"
# circumvented-by: [<reduction id>] # optional, non-empty when present: reductions that reach the conclusion outside this class or scope
source:
  - "[[IR89 - Limits on the provable consequences of one-way permutations|IR89]]"
rationale:
  class: "A construction and security proof that hold relative to every oracle hold relative to IR89's, under which one-way permutations exist and key agreement does not."
---

# No relativizing reduction from OWP to KE

## Statement

There is an oracle — a random permutation together with a $\classPSPACE$-complete oracle — relative to which [[one-way-permutation|one-way permutations]] exist but no [[key-exchange|key-agreement]] protocol is secure; hence no relativizing, and in particular no fully-black-box, construction of key agreement from a one-way permutation exists. The theorem's primary form is conditional: relative to a random permutation, if $\classP = \classNP$ then every key-agreement protocol is broken, so proving secure any key-agreement protocol that uses the permutation as a black box is as hard as proving $\classP \neq \classNP$ — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]].

## Sketch

Relative to a random permutation $\pi$, the eavesdropper, holding the transcript, repeatedly samples executions of the two parties consistent with everything she knows and queries $\pi$ at every point such executions query with non-negligible probability; once she holds every query the parties have in common, a fresh consistent view of one party yields that party's key. The sampling is not efficient in general but is if $\classP = \classNP$, which turns the attack into the barrier.

## Notes

- Against honest parties making $\ell$ queries, IR89's eavesdropper makes roughly $\ell^{6}$ for a random function and roughly $\ell^{12}$ for a random permutation, as BM09 report; BM09 reduce both to $O(\ell^2)$, matching Merkle's puzzles, so no random-oracle key agreement achieves a better-than-quadratic query gap — [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]].
- PKE gives two-message key agreement and a one-way permutation is a one-way function, so the same oracle rules out relativizing constructions of [[public-key-encryption|PKE]] from one-way functions ([[no-hash-function-to-pke-gkm-00]]) — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]].
```

`consequences` is a list because one theorem can carry several framings over the
same hyperedge and one proof — IR89 is both "no relativizing reduction exists"
and "a proof would give P ≠ NP". Splitting those into two pages would duplicate
the sketch.

`strength` is `conditional` iff the barrier theorem assumes an unproven hardness
assumption, which `conditional-on` names: by object id where the wiki has a
node (`[owf]`), in free text only where it has none — GW11's SNARG separation
assumes a language with a sub-exponentially hard subset-membership problem. A
property of the scheme the barrier is about stays in the Statement. An oracle
separation is `unconditional`: its oracle is carried by `class: relativizing`
and described in `oracle`, not listed in `conditional-on`. A barrier has no
`security-loss`; the cost of the attack it gives goes in the Notes.

**How the classes interact.** `schema/reduction-classes.yaml` is a partial order
of generality (see `schema/README.md`). A barrier ruling out class `B`
contradicts a reduction of class `C` on the same hyperedge **iff `C implies* B`**
— so a barrier against `relativizing` kills a fully-black-box reduction, while a
barrier against `fully-black-box` does not touch a `free` one. The lint enforces
this as a hard error, and warns separately when a reduction would prove
something a barrier says is a major result. It also warns when a reduction and
a barrier share a hyperedge and either class is `unstated`, since the order
cannot then decide whether they conflict (a `heuristic` reduction, or one
listed in the barrier's `circumvented-by`, is exempt), and when a `complexity` consequence is
`believed: true` in `schema/propositions.yaml` — forcing something expected
rules nothing out, so such a page is usually a reduction or a proved fact.
A `kind: reduction` consequence names a reduction page by `id`.

A barrier that refutes one named construction — the identity map on schemes
("selective security of a HIBE does not give its adaptive security"), or a
transform such as Fiat–Shamir — is `class: fixed-construction`, titled "No
fixed-construction reduction from A to B", and its Statement names the
construction. Never record it as `free`: that would say the conclusion cannot
be built from the hypothesis at all, which is usually open or false.

A reduction that gets around a barrier — BH26's non-black-box OIHF ⇒ OT
against the fully-black-box barrier — goes in the barrier's `circumvented-by`
by reduction id. Two things are never barriers: a lower bound on attacks in an
idealised model, which is a reduction with the model as its sole hypothesis
(`{ggm} ⇒ dlog`, `model: generic-group`: DLOG holds in the model), and a
refutation of an assumption variant, which goes in the assumption page's
`# Attacks` section (`schema/README.md` § Refutations are attacks).

### Generated sections — do not hand-edit

Every object page carries a generated region:

```
<!-- BEGIN GENERATED participates-in <checksum> -->
## Participates in
...
<!-- END GENERATED participates-in -->
```

It lists the reductions the object is a hypothesis of (**Builds on**), the
reductions that produce it (**Produces**), and the barriers touching it
(**Barriers**). An edge counts when an endpoint is the page's `id` or one of
its `variants`; a line reached only through a variant names it by its heading,
as in `(via [[public-key-encryption#cca-security|CCA Security]])`. Two more
headings list edges that use the page without having it as an endpoint:
**Proved in the …** on a model page, for reductions whose `model` it defines
(`rom`, `generic-group` and `algebraic-group` map to the `rom`, `ggm` and `agm`
pages), and **Used via …** for reductions whose `via` links to the page. No
reduction is listed twice in one region. The checksum makes a hand edit a lint
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
