---
type: barrier
status: draft
title: "No fixed-construction reduction from Fiat-Shamir + Hash function to DS"
aliases: []
id: bar-fiat-shamir-and-hash-function-to-ds-gk03
hypotheses: [fiat-shamir, hash-function]
conclusion: ds
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on: [owf]
source:
  - "[[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]"
rationale:
  class: "The construction is the Fiat-Shamir transform with the random oracle instantiated by the hash function, and a counterexample against every efficient hash function refutes it."
  strength: "GK03 derive the theorem from one-way functions by cases on whether collision-resistant hash functions exist, building the counterexample's universal arguments from them when they do."
---

# No fixed-construction reduction from Fiat-Shamir + Hash function to DS

## Statement

If [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist, there is a secure 3-round public-coin identification scheme whose [[fiat-shamir-heuristic|Fiat-Shamir]] transform is a [[digital-signature|signature scheme]] secure in the [[random-oracle-model|random oracle model]] but existentially forgeable for every efficient [[hash-function|hash function]] instantiating the oracle — [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]. Hence the Fiat-Shamir transform with the oracle instantiated by a hash function does not compile every secure identification scheme into a secure signature scheme: the random oracle is not instantiable in general. Signatures built from hash functions by other constructions are not ruled out.

## Notes

- Read against non-interactive arguments, the same counterexample shows that the Fiat-Shamir transform does not in general give sound ones in the standard model ([[no-fiat-shamir-to-nizk-gk03|No fixed-construction reduction from Fiat-Shamir to NIZK]]) — [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]].
