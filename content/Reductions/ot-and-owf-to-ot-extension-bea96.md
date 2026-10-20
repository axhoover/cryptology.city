---
type: reduction
status: draft
title: OT + OWF ⇒ OT extension (Beaver)
aliases: []
id: red-ot-and-owf-to-ot-extension-bea96
kind: implication
hypotheses: [ot, owf]
conclusion: ot-extension
class: free
model: standard
source:
  - "[[Bea96 - Correlated Pseudorandomness and the Complexity of Private Computations|Bea96]]"
security-loss: "polynomial"
rationale:
  class: "The construction securely evaluates a circuit that computes a pseudorandom generator, so it uses the one-way function's code."
---

# OT + OWF ⇒ OT extension (Beaver)

## Statement

Given $\secpar$ oblivious transfers and a [[hash-function#preimage-resistance-one-wayness|one-way function]], any polynomial number $m$ of [[oblivious-transfer|oblivious transfers]] can be generated — [[Bea96 - Correlated Pseudorandomness and the Complexity of Private Computations|Bea96]]. This is [[oblivious-transfer#ot-extension|OT extension]].

## Sketch

The parties use the $\secpar$ base transfers to run a constant-round secure computation, such as [[gc-and-ot-to-two-party-computation-2pc|Yao's protocol]], of the functionality that expands short seeds of both parties with a [[pseudorandom-generator|PRG]] into the inputs and outputs of $m$ random transfers; [[random-ot-to-ot|random OT]] then gives chosen-input transfers. The number of base transfers is the evaluator's input length, the length of its seed, independent of $m$ — [[Bea96 - Correlated Pseudorandomness and the Complexity of Private Computations|Bea96]].

## Notes

- The garbled circuit computes the generator's whole output, costing $\poly(\secpar)$ garbled gates per extended transfer; a construction using a constant number of hash evaluations per transfer is [[ot-to-ot-extension-iknp03|IKNP OT extension]] — [[IKNP03 - Extending Oblivious Transfers Efficiently|IKNP03]].
