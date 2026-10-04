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
rationale:
  class: "The construction is Fiat–Shamir applied to the GKR-based argument, and an attack against every hash function refutes that construction only; SNARKs built by other means are not ruled out."
---

# No fixed-construction reduction from Fiat-Shamir + GKR to SNARK

## Statement

For every hash function, [[fiat-shamir-heuristic|Fiat–Shamir]] applied to the [[gkr-protocol|GKR]]-based succinct interactive argument for non-deterministic bounded-depth computation is not an adaptively sound [[succinct-argument|SNARK]]: there is an explicit circuit, depending on the hash function, for which an efficient prover produces an accepting non-interactive proof of a false statement of its choice — [[KRS25 - How to Prove False Statements Practical Attacks on Fiat-Shamir|KRS25]]. Versions of the attack also break non-adaptive soundness, with an attacking circuit independent of the underlying cryptographic objects, but either the circuit has very large depth or the attack makes additional assumptions on the underlying primitives — [[KRS25 - How to Prove False Statements Practical Attacks on Fiat-Shamir|KRS25]].

## Notes

- The attacked argument is a standard protocol, unlike earlier counterexamples to Fiat–Shamir, which are protocols built to fail ([[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]) — [[KRS25 - How to Prove False Statements Practical Attacks on Fiat-Shamir|KRS25]].
