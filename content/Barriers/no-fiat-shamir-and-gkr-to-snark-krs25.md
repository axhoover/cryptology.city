---
type: barrier
status: draft
title: "No fixed-construction reduction from Fiat-Shamir + GKR to SNARK"
aliases: []
id: bar-fiat-shamir-and-gkr-to-snark-krs25
hypotheses: [fiat-shamir, gkr-protocol]
conclusion: snark
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: unconditional
source:
  - "[[KRS25 - How to Prove False Statements Practical Attacks on Fiat-Shamir|KRS25]]"
---

# No fixed-construction reduction from Fiat-Shamir + GKR to SNARK

A reduction of class `fixed-construction` from [[fiat-shamir-heuristic|Fiat-Shamir]] together with [[gkr-protocol|GKR]] to [[succinct-argument|SNARK]] would imply a contradiction.

## Statement

Applying [[fiat-shamir-heuristic|Fiat-Shamir]] to the [[gkr-protocol|GKR]]-based succinct interactive argument for non-deterministic bounded-depth computation does not yield an adaptively sound [[succinct-argument|SNARK]] for any choice of hash function: there are explicit circuit families for which an efficient prover produces an accepting non-interactive proof of a false statement — [[KRS25 - How to Prove False Statements Practical Attacks on Fiat-Shamir|KRS25]]. The attacked protocol is standard, not a contrived counterexample.

## Notes

`class: fixed-construction`: the construction is Fiat–Shamir applied to the GKR-based argument, and an attack against every hash function refutes it. SNARKs built by other means are not ruled out.

- The KRS25 result is stated twice, in different words, on content/Glossary/random-oracle-model.md and content/Glossary/fiat-shamir-heuristic.md; neither page links the other.
