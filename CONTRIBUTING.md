# Contributing to Cryptology City

Content lives in `content/` as Markdown with KaTeX math and pseudocode blocks.
Every page carries machine-validated frontmatter, and CI runs the lint plus a
full Quartz build on every PR. Run both locally before pushing:

```bash
npm install
git submodule update --init --recursive   # cryptobib, for BibTeX buttons
npm run lint                              # frontmatter schema, wikilinks, aliases, macros
npx quartz build --serve                  # site at http://localhost:8080
```

House style (voice, quantifiers, section order, security-definition templates)
is documented in [CLAUDE.md](CLAUDE.md); this file covers the mechanical
contract the lint enforces.

## Frontmatter schema

Every page under `content/` (Templates excluded) declares:

```yaml
type: primitive | assumption | complexity-class | glossary | folklore | reference | note
status: stub | draft | complete
title: <string>       # references: the citation key, e.g. "AMR25"
aliases: []           # list, may be empty; each alias unique across the site
```

- `type` must match the directory (`Primitives/` → `primitive`, and so on;
  root pages are `note`).
- `status: stub` means skeletal or missing mandated sections; `draft` is the
  default working state; `complete` is a human judgment — the lint then
  requires zero TODO markers and the full section contract for the type.
- Optional everywhere: `tags`, `defined-in` (wikilinks to the References pages
  where the object was introduced).
- The types `reduction` and `separation` are reserved for first-class
  reduction pages (fields `from`, `to`, `model`, `black-box`, `security-loss`,
  `source`); no such pages exist yet.

References additionally require:

```yaml
authors: First Author, Second Author   # one comma-separated string
venue: Eurocrypt 2025                  # "preprint" is fine
published: 2025-02-09                  # YYYY-MM-DD or YYYY
source: https://eprint.iacr.org/2025/190   # canonical: eprint > arXiv abs > DOI
cryptobib_key: EC:SilWic25             # exactly ONE of cryptobib_key | bibtex
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

### Glossary / Folklore / Note

`type: glossary` (models, frameworks, terminology — see
[`random-oracle-model.md`](content/Glossary/random-oracle-model.md)),
`type: folklore` (well-known results without a canonical citation), and
`type: note` for root-level essays.

### Reference (`content/References/`)

Filename is `KEY - Full Title.md` — **the filename is the URL; never rename
it.** Frontmatter `title` is the *citation key*, not the paper title:

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
  *— folklore* / *— standard* flag. If the reference page is missing, create
  the stub first (see `content/Templates/Reference.md` — it takes a minute).
- All math uses the macros in `macros.ts` (documented in
  [`content/Glossary/latex-macros.md`](content/Glossary/latex-macros.md)).
  Never define macros inline; to add one, edit `macros.ts` *and* the glossary
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
