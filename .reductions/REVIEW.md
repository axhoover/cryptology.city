# Sourcing-pass review — how decisions are applied

The review page, https://claude.ai/artifact/HnCB6oD1FDbTLG1NjxeQfh (private
to its owner), lists every item from the reductions sourcing pass that needs
a maintainer's eye: 84 wrong-claim pages and 5 unsourced pages, each with a
checked proposal; 106 object-page issues left for a judgement call; 167
object-page fixes already applied, to spot-check; 137 consolidated
follow-ups; and the 291 sourced pages as they now stand.

The page is self-contained: every item's full data (proposal text, exact
change, evidence) is embedded in it as JSON in
`<script id="review-data">`, so applying decisions needs only the page and
its database, not any session's scratch files. The maintainer marks items there; marks are
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
5. Republishes the review page to the same link without the items it
   applied (drop them from the embedded JSON), so the page always shows
   exactly what remains. Decisions stay in the database across republishes.
