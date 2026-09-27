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
---

# No fixed-construction reduction from Fiat-Shamir to NIZK

A reduction of class `fixed-construction` from [[fiat-shamir-heuristic|Fiat-Shamir]] to [[non-interactive-zero-knowledge|NIZK]] would imply a contradiction.

## Statement

The [[fiat-shamir-heuristic|Fiat-Shamir]] transform of GK03's 3-round public-coin protocol is unsound for every efficient hash function, so the transform does not in general compile interactive arguments into sound [[non-interactive-zero-knowledge|non-interactive]] ones in the standard model — [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]. What fails is soundness, not zero knowledge; the counterexample is an argument, not a proof.

## Notes

`class: fixed-construction`: the construction is the Fiat–Shamir transform, and a counterexample against every efficient hash function refutes it. Non-interactive arguments built by other means are not ruled out.

`strength: conditional`: GK03 prove the theorem assuming [[hash-function#collision-resistance|collision-resistant hash functions]], which the counterexample's universal arguments use — [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]].

- GK03's protocol is contrived; Fiat-Shamir applied to the standard GKR-based succinct argument is also unsound, for explicit circuit families and every hash function — [[KRS25 - How to Prove False Statements Practical Attacks on Fiat-Shamir|KRS25]]
- The same counterexample, read against signatures: [[no-fiat-shamir-and-hash-function-to-ds-gk03]].
