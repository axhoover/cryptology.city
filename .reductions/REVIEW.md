# Review queue — how decisions are applied

The review page, https://claude.ai/artifact/HnCB6oD1FDbTLG1NjxeQfh (private
to its owner), lists the proposed changes that need a maintainer's eye, one
round at a time. Applied items leave the page; the rounds are logged below
and in the page's "Rounds" table.

The page is self-contained: every item's full data (proposal text, exact
change, evidence) is embedded in it as JSON in
`<script id="review-data">`, so applying decisions needs only the page and
its database, not any session's scratch files. The maintainer marks items there; marks are
stored in the artifact's database, collection `decisions`, one document per
item id:

```json
{
  "item": "wc:cdh-to-ddh",
  "section": "wrong",
  "decision": "approve | change | reject",
  "note": "...",
  "at": "ISO time"
}
```

To apply them, tell Claude **`apply review decisions`** (give the page link
if the session does not have it). Claude then:

1. Reads every `decisions` document (`read_db`, paginated) and the item data
   embedded in the published page (`read` the artifact; the JSON in
   `<script id="review-data">`).
2. Acts on each marked item by section:

   | Item id                                               | approve                       | change (note)                    | reject                                                              |
   | ----------------------------------------------------- | ----------------------------- | -------------------------------- | ------------------------------------------------------------------- |
   | `wc:` wrong claim, `ud:` unsourced                    | execute the proposal exactly  | execute it with the note applied | leave the page as is                                                |
   | `ob:` object page, your call                          | make the proposed edit        | make it as the note says         | nothing                                                             |
   | `fx:` object page, already fixed                      | keep                          | amend as the note says           | restore the old text                                                |
   | `fu:` follow-up (round 1), `fu2:` follow-up (round 2) | execute the proposed action   | execute with the note            | nothing                                                             |
   | `pg:` sourced page                                    | nothing (recorded as checked) | fix the page as the note says    | reset `source`/`class` to `unstated` and drop the sourced statement |

   Every edit follows `CLAUDE.md` and the city-style skill. Deletions of
   reduction or barrier pages are real deletions (`git rm`); filenames are
   never renamed. Anything that turns out not to be executable as written
   (a proposal that no longer matches the page, a note that needs a decision)
   is skipped and reported, never guessed.

3. Runs `node scripts/generate-relations.mjs`, `npm run lint`,
   `node scripts/generate-relations.mjs --check`, `npm test` and
   `npx quartz build`; fixes what it broke.
4. Commits (`review: apply maintainer decisions (<n> items)`) and pushes.
5. Republishes the review page to the same link without the items it
   applied (drop them from the embedded JSON), so the page always shows
   exactly what remains. Decisions stay in the database across republishes.

## Rounds

| Round | Dates           | Scope                                                                                                                                                     | Items | Outcome                                                                                                                                                                                                                                                  |
| ----- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | 2026-09-26 → 27 | Sourcing pass over reduction and barrier pages: 84 wrong claims, 5 unsourced, 106 object-page calls, 167 applied fixes, 137 follow-ups, 291 sourced pages | 790   | 787 approved, 1 with changes, 2 rejected. 331 actions: 273 applied, 42 applied in part, 16 blocked on paper access (carried to round 2); leftover stale Notes, duplicate bullets and TODO_SUMMARY lines cleaned up afterwards. Commits 32d9f33 → b763025 |
| 2     | 2026-09-27 →    | 45 follow-ups raised while applying round 1; the 16 round-1 paper checks                                                                                  | 61    | open                                                                                                                                                                                                                                                     |

Round-1 items carried into round 2 keep their round-1 id, and so their
decision; the 16 paper checks show as already approved. Round 1's execution
ran as file-disjoint groups, each applied by one agent and checked by a
second; deletions the agents could not run were checked and made by hand.
