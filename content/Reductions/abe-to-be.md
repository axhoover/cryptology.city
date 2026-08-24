---
type: reduction
status: stub
title: "ABE ⇒ BE"
aliases: []
id: red-abe-to-be
kind: implication
hypotheses: [abe]
conclusion: be
class: unstated
model: standard
source: folklore
security-loss: ""
---

# ABE ⇒ BE

[[attribute-based-encryption|ABE]] implies [[broadcast-encryption|BE]].

## Statement

Migrated verbatim from [[attribute-based-encryption]] § Other results:

> - ABE (CP-ABE) subsumes [[broadcast-encryption|BE]]: set-membership policies $f^*(x) = [x \in S^*]$ are a special case of monotone DNF

Migrated verbatim from [[broadcast-encryption]] § Other results:

> - BE is a special case of [[attribute-based-encryption|CP-ABE]] with set-membership policies: the access policy $f^*(x) = [x \in S^*]$ is a monotone DNF formula

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation.
- Duplicated on content/Primitives/broadcast-encryption.md line 80 (same edge asserted from the other side).
- The reduction is syntactic only: generic CP-ABE gives ciphertexts of size proportional to the policy, i.e. $\Omega(|S^*|)$, which defeats the succinctness that motivates BE. The bullet does not note this.
- Duplicate of content/Primitives/attribute-based-encryption.md line 171 — same edge stated on both endpoints' pages.
- Surface phrasing 'BE is a special case of CP-ABE' reverses the implication direction relative to the arrow (CP-ABE => BE); a naive migration would get the direction backwards.
