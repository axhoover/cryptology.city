# Edit instructions — applying verified research to reduction/barrier pages

You apply one batch's verified research file to the actual wiki pages in
`/home/user/cryptology.city`. The verified file (path in your task prompt)
follows the schema of `RESEARCH_INSTRUCTIONS.md` (same directory — read it for
field meanings). Its content has been through research and adversarial
verification; apply it faithfully — do NOT re-litigate the research, but DO
stop and flag (in your returned summary) anything internally inconsistent
rather than writing something broken.

## Which pages to touch

- `disposition: "sourced"` or `"folklore"` → rewrite the page as below.
- `disposition: "wrong_claim"` → change NOTHING except: append one bullet to
  the end of the page's `## Notes` section (create the section if absent):

      - Sourcing pass (2026-09), **not fixed**: claim judged incorrect as stated — <wrong_reason, tightened to at most two sentences>. <If a correct edge or existing page is named in the entry, add: "See [[<slug>]]." >

  Keep frontmatter, statement, and existing notes exactly as they are. The
  page is reported to humans separately.
- `disposition: "undetermined"` → DO NOT touch the page. Skip and count it.

## Canonical reference filenames

`refmap.json` (path in your prompt) maps citation key → reference page
filename (without `.md`). EVERY wikilink to a reference MUST use this map:
`[[<refmap[key]>|<DISPLAY>]]` where DISPLAY is the key the mapped filename
starts with (the part before ` - `). This matters when two batches proposed
the same paper under different keys: refmap maps both keys to one file, and
the display key must match that file. Do not trust `ref_file_title` inside
your batch file if it disagrees with refmap — refmap wins. All mapped files
exist by the time you run; if one is missing on disk, flag it and keep the
citation anyway. If a key is absent from refmap entirely, flag it and cite
it as `[[<ref_file_title>|<key>]]` from your batch file.

## Frontmatter edits (surgical — preserve all other fields and their order)

- `status`: set to the entry's `status_suggestion` (`draft` or `stub`).
  NEVER set `complete`.
- `kind`: set to `kind_correct` if it differs from the current value.
- `class`: set to the entry's `class`.
- `model` (reductions only): set to the entry's `model`.
- `source`:
  - folklore → exactly `source: folklore`
  - sourced → a YAML block list of the ORIGINAL source(s) only (`role:
    "original"`), each as `  - "[[<refmap[key]>|<key>]]"`. Improvement papers
    do NOT go in `source:` — they are cited in the Notes body.
- `security-loss`: set if the entry's `security_loss` is non-empty, else
  leave as-is.
- Barrier pages: same rules; barriers have `consequences`/`strength` —
  leave both unchanged unless a flag in the entry says otherwise. The `class`
  of a barrier is the class being ruled out.

## Body rewrite

Replace everything after the frontmatter with:

1. `# <same H1 as before>`
2. The one-line prose statement (keep the existing line; fix it only if the
   entry's statement contradicts it, e.g. missing load-bearing qualifier).
3. `## Statement` — the entry's `statement` text, verbatim.
4. If `sketch` is non-empty: `## Sketch` — the sketch text; then, if
   `pseudocode` is non-empty, a fenced block:

   ````
   ```pseudocode
   <pseudocode>
   ```
   ````

5. `## Notes` — include, in order, whichever exist:
   - the `class_justification` (as one paragraph, prefixed like the house
     exemplar: `` `class: <value>`: <justification> ``). Omit when class is
     `unstated`; instead write
     `` `class: unstated`: the source does not state which notion of reduction is meant. ``
   - if `model` is not `standard` and `model_justification` is non-empty, a
     paragraph `` `model: <value>`: <justification> ``
   - the `improvements_text` bullets, introduced by nothing (just the
     bullets).
   - each line of `notes_to_keep`, as bullets.
   - If none of the above exist, omit the `## Notes` section entirely.

Delete all "Migrated verbatim from ..." blocks and the migration boilerplate
notes — the verified statement replaces them. EXCEPTION: if a migrated quote
contains substantive content the statement does not capture (a construction
description, a parameter table), keep that one quote under `## Statement`
after the new text and flag it in your summary.

## Style contract (lint-enforced — errors will bounce back to you)

- Wikilinks must resolve: use the exact targets the page already used for its
  hypothesis/conclusion objects; use refmap for references.
- Math: only macros from `content/Glossary/latex-macros.md` + KaTeX builtins.
  No `\newcommand`, no `\mathsf{...}` where a macro exists.
- Pseudocode: commands from the table in `CLAUDE.md` § Pseudocode Blocks.
- No marketing adjectives, no "Note that", no recaps, no motivation.
- Titles/aliases/id/hypotheses/conclusion: do not change (flag if the entry
  implies they are wrong).

## After editing all pages in the batch

Run, from the repo root:

    node scripts/lint.mjs <your edited files...>

Fix any errors it reports in YOUR files (macro violations, malformed
frontmatter, unresolvable wikilinks). Warnings about OTHER files or about
stub-inventory targets are not yours. Do not run the full build. Do not
commit — the coordinator commits.

Return a structured summary: pages edited, pages skipped (with disposition),
lint status, and any flags.
