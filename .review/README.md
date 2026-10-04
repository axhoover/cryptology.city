# `.review/` — the monthly review pipeline

A review round runs monthly as a Claude Code routine: it applies the
decisions the maintainer marked on the review page
(https://claude.ai/artifact/HnCB6oD1FDbTLG1NjxeQfh, private to its owner),
audits the pages changed on `main` since the last round plus a rotating
slice of the rest, verifies the findings waiting in the inbox, opens one
pull request with the round's changes, and republishes the page. The
runbook is `.claude/skills/review-round/SKILL.md`; the routine's prompt is
one line, "Run the review-round skill", and the maintainer can run it by
hand the same way.

| Path                                   | What it is                                                                                                    |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `state.json`                           | the artifact link, the last round, the last audited `main` commit, the rotation cursor and slice              |
| `rounds/<n>.json`                      | one record per round (below)                                                                                  |
| `inbox/<name>.json`                    | findings raised outside the pipeline, waiting for a round to verify and propose them (§ The inbox)            |
| `inbox/done/`                          | inbox files a round consumed, moved there by that round's record step; not read again                         |
| `prompts/`                             | the agents' instructions: `apply-exec.md`, `apply-verify.md`, `audit.md`, `audit-verify.md`, `consolidate.md` |
| `page/template.html`                   | the review page; `__DATA__` and `__MACROS__` are filled by `scripts/review/build-page.mjs`                    |
| `work/`                                | a round's working files (git-ignored)                                                                         |
| `../.claude/workflows/review-apply.js` | executor + verifier per file-disjoint group, a coordinator; used for decisions and mechanical fixes           |
| `../.claude/workflows/review-audit.js` | an auditor per batch, two adversarial verifiers per finding, a consolidator                                   |
| `../scripts/review/select-pages.mjs`   | the pages a round audits                                                                                      |
| `../scripts/review/round.mjs`          | `plan`, `inbox`, `known`, `findings`, `record`: the round's bookkeeping                                       |
| `../scripts/review/build-page.mjs`     | builds the page from the records; `--inspect` reads a published page back                                     |

## The decisions

The page stores each mark in the artifact's database, collection
`decisions`, one document per item id:
`{"item", "section", "decision": "approve" | "change" | "reject", "note", "at"}`.
Applied changes show their buttons as Keep / Amend / Revert (the same three
values). Ids are stable across rounds — new items are `r<n>:<kind>-<k>`
(kinds `math`, `cite`, `edge`, `contract`, `style`, `link`, `other`), and
carried items keep their id, including round 1's `fu:` and round 2's `fu2:`,
as do items from the inbox (the id their file gave them, `ffr:` for the
final-form rewrite) — so a decision stays attached to its item. A decision the pipeline has
acted on stays in the database; the card showing the result carries it as
`consumed`, the page shows that card as undecided, and only a new click
(a different decision, note or time) counts. A round reads the collection
with `ArtifactData` `list` and `out_dir` (one file per document,
`<out_dir>/decisions/<item id>.json`), and `round.mjs plan --decisions <out_dir>`
reads that directory.

## The inbox

Findings raised outside the pipeline (by a one-off pass such as the
final-form rewrite, by a bot, or by the maintainer) wait in
`inbox/<name>.json` until a round verifies and proposes them. To add some,
add a file on `main`; `done/` is the archive and is never read. A round
reads the inbox of the commit it starts from, so while an earlier round's
pull request is still open (the next round stacks on its branch) a file
added on `main` waits until that pull request is merged. A file is one
object:

```json
{
  "source": "final-form rewrite 2026-10-04",
  "items": [
    {
      "id": "ffr:content-error-2",
      "kind": "content-error",
      "confidence": "high",
      "needs_paper": false,
      "summary": "quadratic-residuosity.md allows '(or general primes)' in prose but its game samples only Blum moduli",
      "pages": [
        "content/Assumptions/quadratic-residuosity.md",
        "content/Reductions/fac-to-qr-gm84.md"
      ],
      "proposed_action": "the exact change (alternatives, if any, each exact)",
      "rationale": "why the pages are wrong",
      "origin": "final-form rewrite, b00–b11",
      "merged_from": ["cons-1#1"],
      "related": ["ffr:stub-8"]
    }
  ]
}
```

Required per item: `id`, `summary`, `pages` (the repository paths the
change touches; a page it creates carries the suffix ` (new)`, as in
`content/Assumptions/planted-xor.md (new)`) and `proposed_action`. The `id` is `<prefix>:<name>`,
unique across the inbox and every record; the card keeps it, so decisions
stay attached (`r<n>:` is reserved for audit findings). Optional:
`confidence` (default `medium`); `kind`, one of the follow-up kinds of
rounds 1 and 2 or a round kind, which sets the round kind and the default
`severity` the cap ranks by (`content-error`: math, high;
`verification-gap`, `reference-page`: cite, medium; `missing-edge`,
`node-granularity`: edge, medium; `schema-convention`: contract, low;
`title-or-slug`: link, low; `stub`: other, low); `severity`;
`needs_paper`; `rationale`; `check` (what to look for in the paper);
`evidence`; `origin`; `merged_from`; `related` (ids of items it depends
on). Any other field makes the file invalid, so a typo such as
`needs-paper` is not read as `false`. `npm test` checks every file in
`inbox/` and `inbox/done/`.

A round takes the inbox in step 2 of the runbook:

1. `round.mjs inbox` reads every file, by name. A file that is not valid
   JSON, has an invalid item, or repeats an id another file holds is left
   untouched and reported. An item a record already settled (it has a
   card, or was merged, dropped or skipped) is skipped. Every other item
   becomes a finding in the auditor's shape
   (`work/round-<n>/inbox/<id>.json`) and is offered to the verifiers,
   except a `needs_paper` item while the paper hosts are unreachable: it
   goes straight to Needs the paper, unverified (chip `not verified`).
   The previous round's inbox findings over the cap are offered again the
   same way, under their id. The command prints `review-audit`'s `inbox`
   argument.
2. `review-audit` starts no auditor for them: each gets the two
   adversarial verifiers and the keep/drop rule of an audit finding, and
   they claim verification slots first. The consolidator merges them with
   duplicate audit findings, drops the ones that repeat an open or
   rejected item, and writes each as `{"inbox": "<id>", …}` with only what
   it set; the refuted ones go to `dropped` with the verifiers' notes. The
   unverified paper checks are only deduplicated, never dropped for lack
   of verification (`paper_unverified`).
3. `round.mjs findings` fills each from its item and ranks it with the
   audit findings under the proposal cap (an unverified paper check after
   the verified findings of the same severity and confidence). Those over
   the cap go to the record's `overflow`; the next round's inbox step
   offers them again, verified afresh since their pages may have changed.
   Every item gets an outcome: `shown` (a card), `merged` (into another
   finding), `overflow`, `dropped`, `skipped` or `unaccounted` (the audit
   did not report on it: a failed run, or `review-audit` run without its
   `inbox` argument). It prints `inbox_files`: the files the record step
   will move, keep, or leave as invalid.
4. `round.mjs record` writes the outcomes into the record's `inbox` field
   and moves each file whose items all have an outcome other than
   `unaccounted` to `inbox/done/` (as `<name>.round-<n>.json` if `done/`
   already holds the name); the round commits the move with its record.
   A file with an unaccounted item stays, and the next round offers what
   it still holds unsettled. An unaccounted item that came from the
   previous round's overflow has no file any more: the record carries it
   in its own `overflow` instead (as it does the previous round's inbox
   overflow when the inbox step did not run). The move happens after the
   record and the state are written, and a second run of the step finds
   the file already in `done/` and moves nothing.

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
| `overflow`                    | confirmed findings over the proposal cap (and any no verifier checked), offered to the next round: audit findings to its consolidator, inbox findings (they keep `id` and `inbox`) to its inbox step            |
| `inbox`                       | what the round did with the inbox: `{files: [{file, source, items, consumed, open, moved_to}], invalid: [{file, errors}], items: [{id, file, outcome, section, into, reason, unverified, from_overflow}]}`      |
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
