---
type: reduction
status: draft
title: "Quantum-secure OWF ⇒ Nonadaptive post-quantum DS"
aliases: []
id: red-post-quantum-owf-to-nonadaptive-post-quantum-ds-ac12
kind: implication
hypotheses: [quantum-secure-owf]
conclusion: nonadaptive-post-quantum-ds
class: fully-black-box
model: quantum
source:
  - "[[AC12 - Quantum Money from Hidden Subspaces|AC12]]"
security-loss: ""
rationale:
  class: "AC12 note that Rompel's security reduction, from breaking the signature scheme to inverting the one-way function, is black-box and relativizing, and the construction evaluates the one-way function only as an oracle."
  model: "The forgers and the inverters are quantum, and the signing queries are classical."
---

# Quantum-secure OWF ⇒ Nonadaptive post-quantum DS

## Statement

If there is a classical function that is [[hash-function#quantum-secure-one-wayness|one-way against quantum adversaries]], there is a [[digital-signature|signature scheme]] that is [[digital-signature#nonadaptive-queries|secure against nonadaptive quantum chosen-message attacks]] — [[AC12 - Quantum Money from Hidden Subspaces|AC12]] (arXiv v3, Theorem 2). The scheme is Rompel's construction of signatures from any one-way function — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]] — and its security reduction is black-box, so nothing in it depends on the forger being classical — [[AC12 - Quantum Money from Hidden Subspaces|AC12]].

## Notes

- Against classical forgers, the same construction gives [[digital-signature#existential-unforgeability|EUF-CMA]] signatures from any one-way function ([[hash-function-to-ds|OWF ⇒ DS]]) — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].
- The reduction relativizes, so relative to a random oracle, which gives a one-way function secure against quantum inverters, there is a signature scheme secure against nonadaptive quantum chosen-message attacks — [[AC12 - Quantum Money from Hidden Subspaces|AC12]] (arXiv v3, Theorem 3).
