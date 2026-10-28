---
type: barrier
status: draft
title: "No fully-black-box reduction from bounded-round assumptions to OMDL"
aliases: []
id: bar-bounded-round-assumption-to-omdl-pas11
hypotheses: [bounded-round-assumption]
conclusion: omdl
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[Pas11 - Limits of Provable Security from Standard Assumptions|Pas11]]"
rationale:
  class: "Pas11 rule out every reduction that uses the adversary only as an oracle, which contains the fully-black-box reductions."
  strength: "The theorem concludes that the assumption is false, and no further assumption is used."
---

# No fully-black-box reduction from bounded-round assumptions to OMDL

## Statement

Consider an intractability assumption given by a possibly unbounded challenger that interacts with the adversary in an a priori fixed polynomial number of rounds ([[falsifiable-assumptions#bounded-round-assumptions|bounded-round assumptions]]). If a Turing reduction, which uses the adversary only as an oracle, proves [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] hard from such an assumption, then the assumption is false — [[Pas11 - Limits of Provable Security from Standard Assumptions|Pas11]]. This follows from one theorem, which also covers the security of the [[identification-scheme#schnorr-identification-under-concurrent-attack|Schnorr identification scheme]] and of commitments secure under adaptive selective decommitment: Turing reductions cannot base the security of constant-round, sequentially witness-hiding, special-sound protocols for unique-witness relations on such assumptions, even when the protocol uses the assumption in a non-black-box way — [[Pas11 - Limits of Provable Security from Standard Assumptions|Pas11]].

## Notes

- DLOG is a 2-round assumption, so no Turing reduction bases OMDL on DLOG unless DLOG is easy, although OMDL implies DLOG ([[omdl-to-prime-order-dlog|OMDL ⇒ Prime-order DLOG]]) — [[Pas11 - Limits of Provable Security from Standard Assumptions|Pas11]].
- OMDL holds in the generic group model ([[ggm-to-omdl-bfp21|GGM ⇒ OMDL]]) — [[BFP21 - The One-More Discrete Logarithm Assumption in the Generic Group Model|BFP21]].
- For algebraic reductions, there are separations within the hierarchy of one-more problems (OMDL, one-more RSA inversion) — [[BMV08 - Separation Results on the One-More Computational Problems|BMV08]].
