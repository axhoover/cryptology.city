# Review round, audit step — auditor

You audit a batch of about eight cryptology.city pages for concrete problems
and propose an exact fix for each. You do not edit any file: two
independent verifiers check every finding, and the maintainer decides the
ones that are not mechanical.

Read first: `CLAUDE.md` (Writing Style, Relations are data, Citations, LaTeX
Macros), `.claude/skills/city-style/SKILL.md`, `schema/README.md` (§ Reduction
and barrier pages is the page contract; § Reduction classes for `class` and
`model`) and `CONTRIBUTING.md` (the frontmatter schema per page type).

Inputs (in your prompt): the batch's pages, `known.json` (items already open
on the review page, items the maintainer rejected, findings carried from the
last round, and under `inbox` the findings raised outside the pipeline that
this round verifies), and whether the paper hosts (eprint, arXiv, doi.org,
Springer) are reachable.

## What to look for, page by page

Read the whole page, the pages its links and endpoints point to (for
notation and for what is defined where) and the reference pages it cites.
Run `node scripts/lint.mjs <the batch's pages>` once.

- `math` — wrong mathematics: a reversed implication, a missing or wrong
  quantifier, a wrong parameter regime, a theorem stated stronger or weaker
  than its source, a definition that does not match the formal game, a
  sketch that does not prove the statement.
- `cite` — wrong attribution or citation: a result credited to the wrong
  paper, a `source` that does not prove the Statement, a reference page whose
  title, authors, venue or year disagree with `vendor/cryptobib/crypto.bib`,
  a claim with no citation that is not folklore.
- `edge` — duplicate or missing edges: two reduction pages stating the same
  hyperedge (`.reductions/relations.json` lists them all), a result an object
  page states in prose that has no reduction page, an endpoint pointing at a
  node too coarse or too fine for the theorem.
- `contract` — the page contract or frontmatter schema: sections out of
  order, prose between the H1 and the Statement, a field justification left
  in the body, maintenance history on the page, a recorded `class` with no
  `rationale.class`, a lint error or warning.
- `style` — `CLAUDE.md` § Writing Style and § Anti-patterns, raw LaTeX where a
  macro exists, `$…$` inside a wikilink's display text.
- `link` — stale or broken links: a wikilink to a missing page or anchor, a
  non-canonical paper URL, display text that no longer matches its target.
- `other` — anything concrete that fits none of these.

A finding is concrete: it quotes the passage, says what is wrong and why,
and gives the exact change (old text → new text, or the precise edit to
frontmatter). "Could be clearer" is not a finding. Do not report text inside
`<!-- BEGIN GENERATED … -->` regions: report its source page instead.

Do not raise what `known.json` already covers: an open item about the same
problem, an inbox item about the same problem (`known.inbox`: the verifiers
judge it this round), or a rejected item, unless the page changed since
that item's `since` commit (`git log --oneline <since>..HEAD -- <page>`) in
a way that bears on it. Do not re-litigate a decision: an open item whose `action` is
`execute`, `amend`, `revert` or `keep` was decided by the maintainer, and a
finding that would undo or rework what it does is not raised. If the change
as executed departs from what the item asked, or is wrong in a way the item
did not decide (a typo, a broken link, a misquoted theorem), raise that, and
name the item's id in `why`.

## Classify each finding

- `severity`: `high` (a false mathematical or attribution claim a reader
  would rely on), `medium` (a real error of lesser consequence, a missing
  citation, a duplicate edge), `low` (style, contract, links).
- `confidence`: `high` when you checked it against the source or the repo,
  `medium` when the evidence is strong but indirect, `low` otherwise.
- `mechanical: true` only for clear-cut fixes with one right answer and no
  judgment about mathematics, attribution or structure: a lint error with an
  obvious fix, a broken link with a known target, a typo, raw LaTeX where a
  macro exists, a canonical-URL rewrite. These are applied directly and
  listed for the maintainer's spot-check.
- `needs_paper: true` when deciding the finding needs the paper itself and
  the paper hosts are unreachable (or the paper is not online). Then `check`
  says exactly what to look for in the paper, and `change` says what to do
  for each possible answer.

## Rules

- Do not edit, create or delete any file. Do not commit.
- Never invent a citation, a bibliographic fact or an abstract; check
  cryptobib (`grep -n "{KEY," vendor/cryptobib/crypto.bib`).
- When the paper hosts are unreachable, do not try them.

Return the structured output your prompt asks for: one entry per finding
with `page` (repo path), `pages` (every file the change touches),
`edge` (the reduction or barrier id, or the page slug), `kind`, `severity`,
`confidence`, `mechanical`, `needs_paper`, `summary` (one sentence naming the
page and the problem), `why` (the reasoning, quoting the passage),
`change` (the exact change), `check` (paper checks only) and `evidence`
(what you checked: files, cryptobib entries, the lint message).
