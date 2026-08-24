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
  (the RTV04 taxonomy as a partial order); use `unstated` when the source does
  not say which notion it means. Recording a class the wiki does not state adds
  a mathematical claim. `black-box` and `non-black-box` are rejected values —
  the lint message names the notion to use instead.
- **Do not invent a citation.** `source` is either `[[KEY - Full Title|KEY]]`
  wikilinks or the bare token `folklore`. `standard` is not a provenance value.
- Idealized models (ROM, GGM, AGM) are the `model` axis, never `class`.

A **barrier** generalizes separations: `(exists a reduction of class C from
{A_i} to B) => Q`, where Q is `contradiction`, an object, a complexity claim
(a key of `schema/propositions.yaml`), or another hyperedge. `consequences` is a
LIST — one theorem can carry several framings over one hyperedge.

Object pages declare **identity**, which is allowed because it is not an edge:
`id` (stable, survives renames — the formalization repo joins on it) and
`variants` (named sub-objects living as sections, e.g. `ring-lwe` on the LWE
page). Full contract: `schema/README.md`; worked examples: `CONTRIBUTING.md`.

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
