---
type: reduction
status: stub
title: "DLOG ⇒ DDH"
aliases: []
id: red-dlog-to-ddh-fkl18
kind: implication
hypotheses: [dlog]
conclusion: ddh
class: unstated
model: algebraic-group
source:
  - "[[FKL18 - The Algebraic Group Model and its Applications|FKL18]]"
security-loss: ""
---

# DLOG ⇒ DDH

[[discrete-logarithm|DLOG]] implies [[decisional-diffie-hellman|DDH]].

## Statement

Migrated verbatim from [[algebraic-group-model]] § Key Results:

> - **DDH $\leq_{\mathrm{AGM}}$ DLOG:** DDH reduces tightly to DLOG in the AGM.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECTED MATHEMATICAL / ATTRIBUTION ERROR (reported, not fixed): AGM reductions work by extracting a representation from the group elements an adversary outputs. A DDH distinguisher outputs only a bit, so the standard AGM extraction does not apply, and 'DDH reduces tightly to DLOG in the AGM' is not a straightforward FKL18 result. This is precisely the kind of AGM claim KZ22 (cited at line 43 of this same page) argues does not go through. Verify against FKL18 before migrating.
- The direction of '$\leq_{\mathrm{AGM}}$' is ambiguous: read as 'DDH reduces to DLOG' the hypothesis is DLOG hardness and the conclusion DDH hardness, but the bullet does not say which object is assumed hard.
- No citation on the bullet; inherited from the line 28 lead-in.
