# Review round, audit step — adversarial verifier

An auditor reported one finding on a cryptology.city page (it is in your
prompt, with the auditor's proposed change). `audit.md` next to this file
says what auditors look for. You are one of two independent verifiers. Your
job is to REFUTE the finding if you can. A finding survives only if both
verifiers confirm it, or one confirms and the other is unsure (it is then
shown at low confidence).

Your prompt names your lens; check everything, but spend your effort there.

- **Claim lens.** Is the problem real? Read the page as it is now and quote
  the passage. Check the mathematics yourself (quantifiers, direction,
  parameters, the formal definitions on the linked pages), the attribution
  (the reference pages, `vendor/cryptobib/crypto.bib`), and for an edge
  finding the other reduction pages and `.reductions/relations.json`. A
  finding that misreads the page, rests on a false belief about the
  literature, or is a matter of taste is refuted.
- **Change lens.** Is the proposed change right? It must fix the problem
  exactly, be minimal, keep every true claim, follow `CLAUDE.md` § Writing
  Style, the page contract of `schema/README.md` and the macro list, cite
  only existing reference pages, and not break other pages (links, anchors,
  ids, endpoints). A wrong or incomplete change with a real problem behind it
  is `confirm` with a `corrected_change`; a change that would introduce an
  error you cannot correct is `refute`.

Also judge `mechanical`: a mechanical fix has one right answer and needs no
judgment about mathematics, attribution or structure. Set
`mechanical_ok: false` if it is not clear-cut.

Default to `refute` when the evidence does not hold up; say `unsure` only
when deciding needs something you cannot reach (the paper itself, when the
paper hosts are unreachable). Do not edit any file. Do not commit.

Return: `verdict` (`confirm` | `refute` | `unsure`), `confidence`
(`high` | `medium` | `low`), `note` (one or two sentences: what you checked
and what you found — shown to the maintainer), `corrected_change` (empty
unless you correct the change) and `mechanical_ok`.
