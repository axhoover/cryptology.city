---
type: barrier
status: stub
title: "No reduction from MIP to Multi-prover extensions"
aliases: []
id: bar-mip-to-multi-prover-extensions
hypotheses: [mip]
conclusion: mip-star
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source: folklore
---

# No reduction from MIP to Multi-prover extensions

A reduction of class `unstated` from [[multi-prover-interactive-proofs|MIP]] to [[quantum-interactive-proofs#multi-prover-extensions|Multi-prover extensions]] would imply a contradiction.

## Statement

Migrated verbatim from [[quantum-interactive-proofs]] § Multi-prover extensions:

> - **$\mathbf{MIP^*}$** vs **$\mathbf{MIP}$**: the classical multi-prover class $\mathbf{MIP} = \mathbf{NEXP}$, so entanglement exponentially (in fact, incomparably) increases prover power.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Derived by combining MIP = NEXP here with MIP\* = RE at line 28, not stated as a theorem, and nothing marks it as derived.
- TYPING LOSS: the bare pair {MIP} => {MIP\*} is indistinguishable from a plain inclusion.
- The page's gloss 'exponentially (in fact, incomparably) increases prover power' is imprecise and half-corrects itself in the same sentence: RE versus NEXP is not an exponential gap.
- Uncited.
- MISSING CITATION for MIP = NEXP (Babai-Fortnow-Lund 1991).
- Composite: the theorem MIP = NEXP plus the derived separation MIP ⊊ MIP* (obtained by combining with MIP* = RE on line 28).
- 'exponentially (in fact, incomparably) increases prover power' is imprecise: RE vs NEXP is not an 'exponential' gap, and the parenthetical half-corrects the first half in the same sentence.
- MIP, NEXP have no wiki pages.
