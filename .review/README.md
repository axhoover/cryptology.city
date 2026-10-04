# `.review/` — the monthly review pipeline

A review round runs monthly as a Claude Code routine: it applies the
decisions the maintainer marked on the review page
(https://claude.ai/artifact/HnCB6oD1FDbTLG1NjxeQfh, private to its owner),
audits the pages changed on `main` since the last round plus a rotating
slice of the rest, opens one pull request with the round's changes, and
republishes the page. The runbook is `.claude/skills/review-round/SKILL.md`;
the routine's prompt is one line, "Run the review-round skill", and the
maintainer can run it by hand the same way.

| Path                                   | What it is                                                                                                    |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `state.json`                           | the artifact link, the last round, the last audited `main` commit, the rotation cursor and slice              |
| `rounds/<n>.json`                      | one record per round (below)                                                                                  |
| `prompts/`                             | the agents' instructions: `apply-exec.md`, `apply-verify.md`, `audit.md`, `audit-verify.md`, `consolidate.md` |
| `page/template.html`                   | the review page; `__DATA__` and `__MACROS__` are filled by `scripts/review/build-page.mjs`                    |
| `work/`                                | a round's working files (git-ignored)                                                                         |
| `../.claude/workflows/review-apply.js` | executor + verifier per file-disjoint group, a coordinator; used for decisions and mechanical fixes           |
| `../.claude/workflows/review-audit.js` | an auditor per batch, two adversarial verifiers per finding, a consolidator                                   |
| `../scripts/review/select-pages.mjs`   | the pages a round audits                                                                                      |
| `../scripts/review/round.mjs`          | `plan`, `known`, `findings`, `record`: the round's bookkeeping                                                |
| `../scripts/review/build-page.mjs`     | builds the page from the records; `--inspect` reads a published page back                                     |

## The decisions

The page stores each mark in the artifact's database, collection
`decisions`, one document per item id:
`{"item", "section", "decision": "approve" | "change" | "reject", "note", "at"}`.
Applied changes show their buttons as Keep / Amend / Revert (the same three
values). Ids are stable across rounds — new items are `r<n>:<kind>-<k>`
(kinds `math`, `cite`, `edge`, `contract`, `style`, `link`, `other`), and
carried items keep their id, including round 1's `fu:` and round 2's `fu2:`
— so a decision stays attached to its item. A decision the pipeline has
acted on stays in the database; the card showing the result carries it as
`consumed`, the page shows that card as undecided, and only a new click
(a different decision, note or time) counts. A round reads the collection
with `ArtifactData` `list` and `out_dir` (one file per document,
`<out_dir>/decisions/<item id>.json`), and `round.mjs plan --decisions <out_dir>`
reads that directory.

## `state.json`

```json
{
  "artifact": "https://claude.ai/artifact/…",
  "repo": "https://github.com/axhoover/cryptology.city",
  "last_round": 2,
  "last_audited_commit": "<sha on main>",
  "rotation": { "cursor": 0, "slice": 149 },
  "proposal_cap": 40,
  "audit_carry": ["pages a failed audit batch left, audited next round"]
}
```

`last_audited_commit` starts as round 2's last commit (`c86c43f`, which
reaches `main` with the branch that added this pipeline), so round 3 audits
every page changed since round 2; each round's record step then sets it to
the `main` commit that round audited. If it names a commit the clone lacks
(a squash merge whose branch was deleted) or a placeholder starting with
`<`, `select-pages.mjs` counts no page as changed, audits the rotation slice
only and says so in its `notes`. `slice` is at least a third of the auditable corpus
(Reductions, Barriers, Primitives, Assumptions, Complexity, Glossary,
Folklore, root notes), so every page is audited at least once every three
rounds; `select-pages.mjs` raises it if the corpus grows. The record step
also stores `rotation.next`, the page the next slice starts at;
`select-pages.mjs` starts from it (or the first page after it, if it was
deleted) rather than from the index `cursor`, so pages added or deleted
before it do not shift the rotation.

## `rounds/<n>.json`

| Field                         | Meaning                                                                                                                                                                                                         |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `round`, `dates`, `branch`    | the round, `{start, end}` (YYYY-MM-DD), the branch it ran on                                                                                                                                                    |
| `commits`                     | `{base, from, to}`: the commit the round started from and its first and last commits                                                                                                                            |
| `pr`                          | the round's pull request, or `null` (no wiki changes)                                                                                                                                                           |
| `paper_hosts`                 | `{reachable}`: whether eprint, arXiv and doi.org answered                                                                                                                                                       |
| `scope`                       | `{summary, since, main, rotation, pages: [{path, why}], not_audited}`: what was audited and why (`changed`, `rotation`, `carried`)                                                                              |
| `applied`                     | what the round did with the previous page's decisions and the audit's mechanical fixes: `{id, source: decision \| audit, decision, note, action, status, what, reason, files, verified, verifier_note, commit}` |
| `items`                       | every card the round's page shows, in order: `{id, section: applied \| proposals \| paper, kind: fix \| proposal, edge, slug, chips, summary, blocks, url, pages, origin, applied_in, consumed}`                |
| `overflow`                    | confirmed findings over the proposal cap (and any no verifier checked), offered to the next round                                                                                                               |
| `decisions`, `decisions_read` | the decisions on this round's items, as the next round read them, and when (`null` until then)                                                                                                                  |
| `outcomes`                    | what the next round did with each item: `{status, round, commit, reason}` (`null` until then)                                                                                                                   |
| `history`, `page`             | optional overrides of the Rounds-table row and of the page's section help and meta line (rounds 1 and 2 use them)                                                                                               |

`action` is one of `execute`, `amend`, `revert`, `keep`, `drop`, `carry`,
`fix`; `status` one of `applied`, `partial`, `already-done`, `skipped`,
`reverted`, `kept`, `dropped`, `carried`, `failed`. An item counts as done
only when the commit holding its change is on the branch: a report whose
group was restored (a verifier or coordinator that did not commit, a group
the coordinator restored) is `failed`, and the item comes back with its
decision still live. Rounds 1 and 2 ran
before the pipeline and are backfilled: round 1 by its counts (its 790 items
were embedded in the page published then; the 16 still open are itemized
in round 2), round 2 item by item, with its page as first published (the
45 follow-ups and the 16 carried paper checks) under `proposed`.
