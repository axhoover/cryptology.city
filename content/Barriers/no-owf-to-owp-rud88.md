---
type: barrier
status: draft
title: "No fully-black-box reduction from OWF to OWP"
aliases: []
id: bar-owf-to-owp-rud88
hypotheses: [owf]
conclusion: owp
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[Rud88 - Limits on the Provable Consequences of One-way Functions|Rud88]]"
  - "[[KSS11 - The Dual BKR Inequality and Rudich's Conjecture|KSS11]]"
rationale:
  class: "The separation defeats constructions that use the one-way function only as an oracle and whose permutation domain does not depend on it, with proofs that use the adversary only as an oracle."
---

# No fully-black-box reduction from OWF to OWP

## Statement

There is no fully-black-box construction of a [[one-way-permutation|one-way permutation]] from a [[hash-function#preimage-resistance-one-wayness|one-way function]] in which the permutation's domain does not depend on the function. [[Rud88 - Limits on the Provable Consequences of One-way Functions|Rud88]] reduces the separation to a combinatorial conjecture on families of terms over Boolean variables, which [[KSS11 - The Dual BKR Inequality and Rudich's Conjecture|KSS11]] prove through an inequality dual to the van den Berg–Kesten–Reimer inequality.

## Notes

- Injectivity does not help: there is no fully-black-box construction of a one-way permutation from a length-increasing injective one-way function either ([[no-injective-owf-to-owp-mm11|No fully-black-box reduction from injective OWF to OWP]]) — [[MM11 - On Black-Box Separations among Injective One-Way Functions|MM11a]].
- The converse holds trivially: [[owp-to-hash-function|OWP ⇒ OWF]] — folklore.
