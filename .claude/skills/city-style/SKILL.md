---
name: city-style
description: House style and mechanical contract for cryptology.city wiki pages. Use whenever creating or editing any page under content/ (Primitives, Assumptions, Complexity, Glossary, Folklore, References), writing security definitions or pseudocode games, adding citations or references, or preparing a PR against this repo.
---

# Cryptology City house style

Reference wiki for working cryptographers. Definition-first, no motivation
paragraphs, no recaps. Full style guide: `CLAUDE.md`; mechanical contract:
`CONTRIBUTING.md`. **Run `npm run lint` before every commit** — CI enforces it
plus `node scripts/generate-relations.mjs --check`, `npm test`, and
`npx quartz build` on every PR. If `--check` fails, run the script without the
flag and commit what it changes.

## Frontmatter schema (lint-enforced)

Every page: `type`, `status`, `title`, `aliases`.

- `type` matches the directory: `primitive` (Primitives/), `assumption`
  (Assumptions/), `complexity-class` (Complexity/), `glossary`, `folklore`,
  `reference` (References/), `note` (root), `reduction` (Reductions/),
  `barrier` (Barriers/).
- `status`: `stub` | `draft` | `complete`. Only a human sets `complete`; the
  lint then forbids TODO markers and requires the full section contract.
- Aliases are unique site-wide; the canonical abbreviation (`PRF`, `LWE`) is
  the first alias.

References additionally: `authors` (one comma-separated string), `venue`,
`published` (`YYYY-MM-DD` or `YYYY`), `source` (canonical URL: eprint >
arXiv abs > DOI), and exactly one of `cryptobib_key` | `bibtex`. Frontmatter
`title` is the **citation key** (`"AMR25"`), never the paper title — the paper
title lives in the filename `KEY - Full Title.md` and the H1 `# [KEY] Title`.

## Relations are data, not prose

**This is the rule that most often gets broken.** A reduction is a HYPEREDGE: a
_set_ of hypotheses implying _one_ conclusion, of some reduction class.

```
{A_1, ..., A_n}  ==>  B   of class C
```

- **Never hand-author relation fields on an object page.** `implies`,
  `implied-by`, `reductions`, `from`, `to` are a hard lint error there. An edge
  list cannot express `{DDH, CRHF} => B` without misrepresenting each
  hypothesis. Create a page under `content/Reductions/` instead.
- **Never hand-edit a `<!-- BEGIN GENERATED participates-in ... -->` region.**
  It carries a checksum. Edit the reduction pages and run
  `node scripts/generate-relations.mjs`.
- **Conjunction vs disjunction.** Assumptions each _independently_ sufficient
  are separate pages with one hypothesis each (`{lwe} => pke` and
  `{ddh} => pke`). Assumptions _jointly_ required are one page with several
  hypotheses (`{sparse-lpn, ddh} => she`). Disjunction is never encoded inside
  a page.
- **Split composite chains.** "OWF -> PRG (HILL99) -> PRF via GGM (GGM86)" is
  TWO pages, each with its own `source` — never one OWF => PRF page.
- **Do not invent a class.** `class` comes from `schema/reduction-classes.yaml`
  (the RTV04 taxonomy as a partial order, plus `fixed-construction`); use
  `unstated` when the source does not say which notion it means, unless the
  Notes justify `fully-black-box` from the proof shape (fixed construction,
  adversary used only as an oracle). A construction using a scheme's code is
  `free`; a barrier refuting one named construction (the identity map,
  Fiat–Shamir) is `fixed-construction`, never `free`. Recording a class nobody
  justifies adds a mathematical claim. Class notes use the stock sentences in
  `schema/README.md` § Reduction classes. `black-box` and `non-black-box` are
  rejected values — the lint message names the notion to use instead.
- **Do not invent a citation.** `source` is either `[[KEY - Full Title|KEY]]`
  wikilinks or the bare token `folklore`. `standard` is not a provenance value.
  It lists every paper whose theorem the Statement asserts; a paper that only
  introduced the notion is cited in the body. A paper suffix in the slug is
  historical — `source` is authoritative, and slugs are never renamed.
- **Barrier `strength`** is `conditional` iff the barrier theorem assumes an
  unproven hardness assumption, named in `conditional-on`. An oracle
  separation is `unconditional`; its oracle is `class: relativizing`.
- Idealized models (ROM, GGM, AGM) are the `model` axis, never `class`, and
  are not also listed in `hypotheses` (`{dlog} => schnorr-signature`,
  `model: rom`). A lower bound on attacks in an idealized model is a reduction
  with the model as sole hypothesis (`{ggm} => dlog`, `model: generic-group`: DLOG
  holds in the model), never a barrier. Transforms and techniques
  (Fiat–Shamir, arithmetization) go in `via`. A candidate construction with
  no security reduction is `heuristic: true`. Exceptions and the `model`
  conventions: `schema/README.md` § What a hypothesis is, § Which model to
  record.

A **barrier** generalizes separations: `(exists a reduction of class C from
{A_i} to B) => Q`, where Q is `contradiction`, an object, a complexity claim
(a key of `schema/propositions.yaml`), or another hyperedge (a reduction `id`).
`consequences` is a LIST — one theorem can carry several framings over one
hyperedge. A `complexity` consequence marked `believed: true` is almost never a
barrier (the lint warns): "A gives Q" is a reduction `{A} => Q`, and a proved
separation rules nothing out. A reduction
that gets around a barrier is listed in the barrier's optional
`circumvented-by` (reduction ids). A refutation of an assumption variant is
never a barrier: it goes in the assumption page's `# Attacks` section.

Object pages declare **identity**, which is allowed because it is not an edge:
`id` (stable, survives renames — the formalization repo joins on it) and
`variants` (named sub-objects living as sections, e.g. `ring-lwe` on the LWE
page). One variant per heading: two ids on one anchor split a hyperedge in two,
so the contradiction check misses conflicts (the lint warns). Full contract:
`schema/README.md`; worked examples: `CONTRIBUTING.md`.

## Page structure

`content/Primitives/pseudorandom-function.md` is the exemplar. Primitives:
intro (one or two sentences stating what the object _is_), `## Syntax` (typed
algorithm tuple), `## Properties` (correctness + one subsection per security
notion, each with a pseudocode game), `# Variations`, `# Other results`.
Assumptions: `## Assumption`, `## Known Results`, `# Variations`, `# Attacks`.
Never create a primitive page without `## Syntax` and at least one security
game — use TODO placeholders instead of omitting sections.

Games follow the templates in `CLAUDE.md` §Security Definition Conventions:
caption `$\Game^{\mathrm{name}}_{\Primitive,\calA}(\secpar)$`, advantage
`|2\Pr[...] - 1|` for indistinguishability, `\Pr[...]` for search games,
closing with "is negligible". World 0 is real, world 1 is ideal.

## Notation and macros

All LaTeX macros come from `macros.ts` (documented in
`content/Glossary/latex-macros.md`). **Never define macros inline**
(`\newcommand` etc. is a lint error) and never use raw `\mathsf{...}` where a
macro exists (`\Enc`, `\KeyGen`, `\calA`, `\secpar`, `\negl`, `\getsr`, ...).
To add a macro: edit `macros.ts` _and_ the glossary page in the same commit.
Quantify precisely: _for all efficient $\calA$_, _$\Pr[E]$ is negligible_ —
match the formal statement's quantifiers in prose.

## Citations

Every factual claim (construction, implication, separation, parameter, attack)
gets `[[KEY - Full Title|KEY]]`, or an explicit _— folklore_ / _— standard_
flag when genuinely unattributable. Missing reference? Create the stub first
from `content/Templates/Reference.md` — a minute of work. Citation keys are
author initials + two-digit year (`BGI15`, `BFL+24`); on a key collision,
disambiguate title/H1/aliases with a letter suffix (`SW25a`) but never rename
existing files — filenames are live URLs. Wikilinks must resolve (page,
alias, or folder); intentionally deferred targets go in
`scripts/stub-inventory.json`.

## PRs

Branch `topic/short-description`; one topic per PR; small commits with
area-prefixed imperative subjects (`references: ...`, `lwe: ...`). Never
commit `public/`, never rename or move content files, never hand-edit
`.orchestrator/state/` or `.fact-check/queue.json` outside the rules in
`CLAUDE.md`. If an edit changes a claim on a page the fact-check queue marks
`human_verified`, set that entry to `stale`.
