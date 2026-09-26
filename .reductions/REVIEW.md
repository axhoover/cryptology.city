# Sourcing-pass review — how decisions are applied

The review page (a claude.ai artifact; link in the session that built it and
in the PR description) lists every item from the reductions sourcing pass
that needs a maintainer's eye. The maintainer marks items there; marks are
stored in the artifact's database, collection `decisions`, one document per
item id:

```json
{ "item": "wc:cdh-to-ddh", "section": "wrong", "decision": "approve | change | reject", "note": "...", "at": "ISO time" }
```

To apply them, tell Claude **`apply review decisions`** (give the page link
if the session does not have it). Claude then:

1. Reads every `decisions` document (`read_db`, paginated) and the item data
   embedded in the published page (`read` the artifact; the JSON in
   `<script id="review-data">`).
2. Acts on each marked item by section:

   | Item id | approve | change (note) | reject |
   | --- | --- | --- | --- |
   | `wc:` wrong claim, `ud:` unsourced | execute the proposal exactly | execute it with the note applied | leave the page as is |
   | `ob:` object page, your call | make the proposed edit | make it as the note says | nothing |
   | `fx:` object page, already fixed | keep | amend as the note says | restore the old text |
   | `fu:` follow-up | execute the proposed action | execute with the note | nothing |
   | `pg:` sourced page | nothing (recorded as checked) | fix the page as the note says | reset `source`/`class` to `unstated` and drop the sourced statement |

   Every edit follows `CLAUDE.md` and the city-style skill. Deletions of
   reduction or barrier pages are real deletions (`git rm`); filenames are
   never renamed. Anything that turns out not to be executable as written
   (a proposal that no longer matches the page, a note that needs a decision)
   is skipped and reported, never guessed.
3. Runs `node scripts/generate-relations.mjs`, `npm run lint`,
   `node scripts/generate-relations.mjs --check`, `npm test` and
   `npx quartz build`; fixes what it broke.
4. Commits (`review: apply maintainer decisions (<n> items)`) and pushes.
5. Rebuilds the review page without the items it applied and republishes it
   to the same link, so the page always shows exactly what remains.

The builder is `build_review.py` from the session scratch space; its inputs
are the pass outputs recorded in `sourcing-pass.json`
(`working_files_commit`) and the object-page fix reports.
