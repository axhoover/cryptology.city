---
type: barrier
status: draft
title: "No fixed-construction reduction from Fiat-Shamir to NIZK"
aliases: []
id: bar-fiat-shamir-to-nizk-gk03
hypotheses: [fiat-shamir]
conclusion: nizk
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on: [crhf]
source:
  - "[[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]"
rationale:
  class: "The construction is the Fiat–Shamir transform, and a counterexample against every efficient hash function refutes that construction only."
  strength: "GK03 prove the theorem assuming collision-resistant hash functions, which the counterexample's universal arguments use."
---

# No fixed-construction reduction from Fiat-Shamir to NIZK

## Statement

If [[hash-function#collision-resistance|collision-resistant hash functions]] exist, the [[fiat-shamir-heuristic|Fiat-Shamir]] transform of GK03's 3-round public-coin protocol is unsound for every efficient hash function, so the transform does not in general compile interactive arguments into sound [[non-interactive-zero-knowledge|non-interactive]] ones in the standard model — [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]. What fails is soundness, not zero knowledge; the counterexample is an argument, not a proof. Non-interactive arguments built by other means are not ruled out.

## Notes

- GK03's protocol is contrived; Fiat-Shamir applied to the standard GKR-based succinct argument is also unsound, for explicit circuit families and every hash function — [[KRS25 - How to Prove False Statements Practical Attacks on Fiat-Shamir|KRS25]] ([[no-fiat-shamir-and-gkr-to-snark-krs25|No fixed-construction reduction from Fiat-Shamir + GKR to SNARK]]).
- Read against signatures, the same counterexample gives [[no-fiat-shamir-and-hash-function-to-ds-gk03|No fixed-construction reduction from Fiat-Shamir + Hash function to DS]] — [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]].
