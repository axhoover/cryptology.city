---
type: reduction
status: stub
title: "Module-SIS ⇒ DS"
aliases: []
id: red-module-sis-to-ds
kind: implication
hypotheses: [module-sis]
conclusion: ds
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Module-SIS ⇒ DS

[[shortest-integer-solution#module-sis|Module-SIS]] implies [[digital-signature|DS]].

## Statement

Migrated verbatim from [[shortest-integer-solution]] § Module-SIS:

> Hardness of Module-SIS reduces to worst-case problems on module lattices — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]]. Module-SIS is the hardness assumption underlying the NIST post-quantum signature standard Dilithium (ML-DSA, FIPS 204).

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation; FIPS 204 and Dilithium are bare text with no reference page.
- CONFLICTS with content/Assumptions/learning-with-errors.md line 127, which attributes Dilithium to "Module LWE/SIS". Dilithium rests on both MLWE and MSIS, so the Module-SIS-only attribution here is incomplete and the two pages disagree.
- content/Primitives/digital-signature.md exists but is not wikilinked here.
