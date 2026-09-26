---
type: barrier
status: draft
title: "No reduction from Fiat-Shamir to NIZK"
aliases: []
id: bar-fiat-shamir-to-nizk-gk03
hypotheses: [fiat-shamir]
conclusion: nizk
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source:
  - "[[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]"
---

# No reduction from Fiat-Shamir to NIZK

A reduction of class `free` from [[fiat-shamir-heuristic|Fiat-Shamir]] to [[non-interactive-zero-knowledge|NIZK]] would imply a contradiction.

## Statement

The [[fiat-shamir-heuristic|Fiat-Shamir]] transform of GK03's 3-round public-coin protocol, whose soundness is computational, is unsound for every efficient hash function, so the transform does not in general compile interactive arguments into sound [[non-interactive-zero-knowledge|non-interactive]] ones in the standard model — [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]. What fails is soundness, not zero knowledge, and the counterexample is an argument, not a proof.

## Notes

`class: free`: as in the signature case, the barrier is an explicit counterexample against every efficient hash instantiation, so it rules out the implication rather than a proof technique.

- GK03's counterexample is contrived by construction; Fiat-Shamir applied to the standard GKR-based succinct argument is also unsound, for explicit circuit families and every choice of hash function — [[KRS25 - How to Prove False Statements Practical Attacks on Fiat-Shamir|KRS25]]
