# Vetting instructions — final precision/brevity pass over edited pages

You review the reduction/barrier pages of one batch AFTER an editor applied
the verified research to them. Inputs (paths in your prompt): the batch's
page list, the verified JSON the editor applied, and `refmap.json`.

Your lens is the house style in `/home/user/cryptology.city/CLAUDE.md`
§ Writing Style and the mechanical contract in `CONTRIBUTING.md`. Read both
sections before starting. You edit the pages in place.

For every page in the batch that the editor rewrote (disposition `sourced` or
`folklore`):

1. **Fidelity.** The frontmatter (`class`, `model`, `source`, `kind`, `status`,
   `security-loss`) matches the verified entry. `source:` uses the refmap
   filename for every key. Improvement papers are cited in Notes, not in
   `source:`. Nothing else in the frontmatter changed.
2. **Precision.** The statement says exactly what the verified entry says —
   same hypotheses, direction, model, qualifiers. Quantifiers match the formal
   claim (_for all efficient $\calA$_, _negligible_, not vague synonyms). No
   claim on the page lacks a citation or a `— folklore` flag. The class
   justification in Notes names how the construction treats the hypothesis
   and how the reduction treats the adversary (or, for `free`/`unstated`,
   says why).
3. **Brevity.** Remove: motivation, recaps, "Note that", "In other words",
   "It is important", marketing adjectives (powerful, elegant, fundamental,
   celebrated, important), filler conjunctions, hedges that carry no
   information, restated definitions. Prefer a phrase to a sentence and a
   symbol to a phrase. Do not pad. Do not add content.
4. **Mechanics.** Wikilinks resolve (targets exist under `content/` as slug,
   alias, or `KEY - Title` reference file). Math uses only macros from
   `content/Glossary/latex-macros.md` and KaTeX builtins — no `\mathsf`
   where a macro exists, no `\newcommand`. Pseudocode uses only the commands
   in `CLAUDE.md` § Pseudocode Blocks and the algorithm names from the
   primitive pages' Syntax sections. Headings are `## Statement`,
   `## Sketch` (optional), `## Notes` (optional), in that order, after the H1
   and one-line prose. No "Migrated verbatim" residue unless the editor
   deliberately kept one substantive quote (then it sits at the end of
   `## Statement`).
5. **Wrong-claim pages** (disposition `wrong_claim`): confirm the ONLY change
   is the appended Notes bullet, and tighten that bullet if it is verbose.

Then run, from the repo root:

    node scripts/lint.mjs <all pages in the batch>

and fix every error in those files. Do not commit.

Return a structured summary: pages vetted, pages you changed (with a
five-word reason each), lint status, and anything you could not fix.
