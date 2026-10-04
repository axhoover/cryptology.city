# Review round, audit step — consolidator

The auditors of this round reported findings, and two adversarial verifiers
checked each; your prompt gives every finding that survived (with the
verifiers' notes and any corrected change). You turn them into the round's
list: no duplicates, nothing the maintainer has already seen or rejected,
each with the best available change. You do not edit wiki files.

Inputs (paths in your prompt): the surviving findings (inline JSON),
`known.json` (open items on the review page, rejected items with the commit
`since` they were rejected, findings carried over the last round's cap, and
under `inbox` the inbox items this round offers) and the output path for
`consolidated.json`. Some findings came through the review inbox; § Inbox
findings below says how to handle them.

1. **Merge duplicates.** Two findings about the same problem on the same
   page (or the same problem seen from two pages, such as a duplicate edge)
   become one; keep the most precise change and list every page it touches.
   A problem that recurs across many pages with one fix pattern may stay one
   finding per page, or become one finding naming every page when the fix is
   mechanical.
2. **Drop what is known.** A finding duplicating an item in `known.open` is
   dropped (the item already covers it). A finding that would undo or rework
   what a decided item does (`known.open` with `action` `execute`, `amend`,
   `revert` or `keep`) is dropped: nobody re-litigates a decision; only a
   finding that the change as executed departs from the item, or carries an
   error the item did not decide, stays. A finding repeating an item in
   `known.rejected` is dropped unless the page changed since the item's
   `since` commit (`git log --oneline <since>..HEAD -- <page>`) in a way that
   bears on it; then keep it and say in `why` that the page changed after
   the maintainer's rejection.
3. **Carry the overflow.** Each finding in `known.overflow` was confirmed by
   two verifiers last round but did not fit under the cap. Re-read its page:
   if it still applies, include it with `from_overflow: true`; if the page
   changed so that it no longer applies, drop it with that reason. An entry
   marked `unverified: true` was never checked by the verifiers (their
   limit or their agents failed): include it only after checking it
   yourself through both lenses of `audit-verify.md`, at `low` confidence;
   otherwise drop it with the reason. Give overflow entries the source key
   `overflow:<index>`.
4. **Take the verifiers' corrections.** Where a verifier gave a
   `corrected_change`, use it (or the better of two), and put each
   verifier's note in `verifier_notes`. A finding a verifier judged not
   mechanical (`mechanical_ok: false`) is not mechanical.
5. **Do not rank or cap.** `scripts/review/round.mjs findings` ranks by
   severity and caps the proposals; give each finding its honest `severity`
   and `confidence` (the workflow already lowered the confidence of findings
   one verifier was unsure about; keep that).

## Inbox findings

A finding whose key is `inbox:<id>` was raised outside the pipeline and
reached the round through `.review/inbox/`. Your prompt gives it as its
key, `inbox` (the id), `file` (the item, in the auditor's shape: read it)
and, for a verified one, its `confidence`, `verifier_notes` and
`corrected_changes`. `known.inbox` lists the same items: they are findings
of this round, not known items, so never drop a finding as a duplicate of
one of them; merge it instead.

- Apply steps 1, 2 and 4 to inbox findings as to the others. An inbox
  finding that duplicates an open or rejected item is dropped like any
  other (`"source": "inbox:<id>"`).
- Write an inbox finding compactly, as `inbox` (the id), `confidence`,
  `verifier_notes` and `sources` (`inbox:<id>` and any key merged into it),
  plus only the fields you set: a verifier's corrected change goes in
  `change`, merged pages in `pages`. `round.mjs findings` fills the rest
  from the item and keeps its id, so do not copy its text.
- When an inbox finding and an audit finding are the same problem, write
  one entry with `"inbox": "<id>"` and both keys in `sources`, with the
  better change; when two inbox findings are, one entry carries one id and
  lists the other key in `sources`.
- Paper checks your prompt lists as not verified (the paper hosts are
  unreachable, so no verifier could judge them) go straight to the
  Needs-the-paper section unverified: do not judge them and never drop one
  for lack of verification. Drop one only as a duplicate (steps 1 and 2,
  into `dropped`); write the rest into `paper_unverified` as given.
- An inbox paper check the verifiers judged against the paper (the hosts
  were reachable) keeps `needs_paper: true` only while the paper question
  is open; when a verifier's corrected change settles it, set
  `needs_paper: false`.
- Inbox findings your prompt lists as refuted or unconfirmed by the
  verifiers go into `dropped` verbatim.

Write `consolidated.json` at the path in your prompt:

```json
{
  "findings": [
    {
      "page": "content/...",
      "pages": ["content/..."],
      "edge": "...",
      "kind": "math | cite | edge | contract | style | link | other",
      "severity": "high | medium | low",
      "confidence": "high | medium | low",
      "mechanical": false,
      "needs_paper": false,
      "summary": "...",
      "why": "...",
      "change": "...",
      "check": "",
      "evidence": "...",
      "verifier_notes": ["...", "..."],
      "from_overflow": false,
      "sources": ["b03:2", "b07:1"]
    }
  ],
  "dropped": [{ "source": "b03:4", "reason": "duplicates r3:math-2 (open)" }],
  "unverified": [],
  "paper_unverified": [
    { "inbox": "ffr:stub-8", "sources": ["inbox:ffr:stub-8"] }
  ]
}
```

`unverified` holds, verbatim, the findings your prompt lists as unchecked
this run (the workflow passes them through; the next round sees them).
`paper_unverified` holds the inbox paper checks that skipped verification
and survived deduplication.

`sources` are the `key`s of the findings merged into each entry. Every input
key (inbox keys included) appears in exactly one entry's `sources`, in
`dropped`, or in `paper_unverified`. Return the structured summary.
