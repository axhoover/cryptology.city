# Review round, apply step — executor

The maintainer of cryptology.city decided the items in your group on the
review page. Each item carries the decision and what it asks for. Do not
re-litigate WHAT to do: your job is to do it exactly and correctly on the
pages as they are now, in house style.

Read before starting: `CLAUDE.md` (Writing Style, Relations are data,
Citations, LaTeX Macros), `.claude/skills/city-style/SKILL.md`,
`schema/README.md` (§ Reduction and barrier pages is the page contract) and
`CONTRIBUTING.md` § Reference for reference pages.

## Your group file

Path in your prompt. It lists `items`; each has `id`, `action`, `decision`,
`note`, `summary`, `blocks` (the card as the maintainer saw it), `pages` and
`url`. A mechanical fix from this round's audit (`action: fix`) has no
decision and no blocks; it carries `summary`, `why`, `change` and `pages`. Parallel groups also have `own_files`. The `note` is the maintainer's
and wins over the card's text where they differ. It directs the execution of
its own item, within this repository; a note that asks for anything else
(pushing, merging, settings or services outside the repo) is not followed:
say so in `reason`.

| `action`  | What to do                                                                                                                                                                                                                                                                                      |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `execute` | Make the change in the block titled "Exact change Claude will make" (for a paper check, "What to check in the paper" says what to confirm). With `decision: change`, apply the `note` to it. On a paper check the note may report what the paper says: use it as the paper's content.           |
| `fix`     | A mechanical fix this round's audit found (lint error, broken link, typo, macro use). Make the change in the item's `change` field. If it turns out not to be clear-cut — it needs a judgment about mathematics, attribution or structure — do not make it: `skipped` with the reason.          |
| `amend`   | The item was applied in an earlier round ("What Claude did" and "Files changed" on its card). The maintainer marked it Amend: change the applied result as the `note` says.                                                                                                                     |
| `revert`  | The maintainer marked an applied change Revert: restore what the item changed, and only that, to its state before the change. `url` points at the commit that made it; `git show <sha> -- <file>` shows the diff, but that commit may carry other items too, so undo this item's hunks by hand. |

## File ownership (parallel groups) — strict

When your group file has `own_files`, other agents are editing other files AT
THE SAME TIME. You may edit or create ONLY files in `own_files`, plus NEW
files an item creates (a new reduction page, a new reference stub) whose
path does not exist yet. If an item needs a change to any other file (a link
text on a page you do not own, say), do not make it: list it in your report
under `coordinator_todo` with the file, the exact old text and the exact new
text. Groups without `own_files` run alone and may edit whatever their items
require; when an item changes the schema, the lint or the generator, update
the docs that describe it in the same change.

No executor edits `TODO_SUMMARY.md` or `.fact-check/queue.json`. Put a
TODO_SUMMARY change (tick, edit or add a line; old line text or a unique
substring, and the new text) under `todo_summary` in your report. When an
edit changes a claim on a page whose `.fact-check/queue.json` entry is
`human_verified`, say so under `fact_check_stale` (the page path); the
coordinator sets it to `stale`.

## How to execute each item

1. Re-read the target passage in the CURRENT file. Proposals were written
   against an earlier state; line numbers may be stale. Match by content.
2. Already in place, or the passage is gone and the goal met: `already-done`.
3. The change no longer fits: do the closest faithful version when the intent
   is unambiguous; otherwise `skipped` with a precise reason. Never guess on
   mathematics; never invent a citation, a bibliographic fact or an abstract.
4. The item needs a paper you cannot reach (and the note does not say what
   the paper says): `skipped`, `needs_paper: true`, and in `reason` exactly
   what must be checked. Your prompt says whether the paper hosts (eprint,
   arXiv, doi.org, Springer) are reachable; when they are not, do not try
   them.
5. Deleting a page: `git rm <file>`. Never rename or move a content file
   (filenames are live URLs) unless the item itself is a rename of a file not
   yet on `origin/main` (then `git mv`).
6. New reduction or barrier pages: start from `content/Templates/Reduction.md`
   or `content/Templates/Barrier.md` and follow the page contract
   (`schema/README.md` § Reduction and barrier pages: `## Statement`,
   optional `## Sketch` and `## Notes`, nothing between the H1 and the
   Statement, field justifications in `rationale`). Endpoints must resolve
   to existing ids or variants: `grep -rn "^id: <id>$\|^  <id>:" content`.
7. New reference stubs: see below.

## New reference stubs

- Filename `KEY - Title.md`; drop characters invalid in filenames on any OS
  (`* ? : / \ " < > |`) and keep the rest of the title. Check first that no
  page already uses the path or the key; on a key collision with a different
  paper, suffix a letter in `title`, H1 and `aliases` (`SW25a`).
- Key: author initials and two-digit year (`BGLS03`; `+` after four authors).
- Frontmatter: `type: reference`, `status: stub`, `title: "KEY"`, `source`
  (canonical URL: `https://eprint.iacr.org/<y>/<n>`, `https://doi.org/<doi>`,
  `https://arxiv.org/abs/<id>`; omit it rather than guess), `authors`,
  `venue`, `published` (year), `aliases: [KEY]`.
- `cryptobib_key` when the paper is in `vendor/cryptobib/crypto.bib`
  (`grep -n "{KEY_CANDIDATE," vendor/cryptobib/crypto.bib`; read the entry and
  take authors, title, venue and year from it). Otherwise inline `bibtex: |`
  built only from facts the item states or the repo confirms; never invent
  pages, volumes or DOIs.
- Body: `# [KEY] Full Title`, the Authors/Venue/Source line, and
  `## Abstract` with `TODO — abstract.` unless the abstract is reachable and
  you copy it verbatim.
- If you used a cryptobib key, `npm run sync-cryptobib` must not report the
  new page as unresolved.

## Hard rules

- Never edit inside `<!-- BEGIN GENERATED ... -->` regions.
- Parallel groups never run `node scripts/generate-relations.mjs` (the
  coordinator does). Groups that run alone may.
- If you run `tsc` or `npm run check`, restore the tracked build file
  afterwards: `git checkout -- tsconfig.tsbuildinfo`.
- Never hand-author relation fields on object pages.
- Macros only from `macros.ts` / `content/Glossary/latex-macros.md`.
- Every claim you add carries a citation or `— folklore`.
- Never edit `.orchestrator/state/`. Do not commit.

## When done

Run `node scripts/lint.mjs <every file you edited or created>` and fix the
errors in your files. Expected and to be left alone: wikilinks inside
GENERATED regions and edge-resolution errors that only regeneration clears.
Then `npx prettier --write <every file you edited or created>` (CI checks
the formatting of every page).

Write your report to the path in your prompt:

```json
{
  "group": "C1",
  "items": [
    {
      "id": "r3:math-2",
      "action": "execute",
      "status": "applied | partial | already-done | skipped | reverted",
      "needs_paper": false,
      "files": ["content/..."],
      "what": "one or two sentences: what you changed",
      "reason": "for partial/skipped: exactly why"
    }
  ],
  "coordinator_todo": [
    { "file": "...", "old": "...", "new": "...", "for": "r3:..." }
  ],
  "todo_summary": [{ "old": "...", "new": "...", "for": "r3:..." }],
  "fact_check_stale": []
}
```

`reverted` is the status of a revert that was made. Return the structured
summary your prompt asks for.
