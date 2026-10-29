---
type: reduction
status: draft
title: "IBE ⇒ garbled RAM"
aliases: []
id: red-ibe-to-garbled-ram-ghl-14
kind: implication
hypotheses: [ibe]
conclusion: garbled-ram
class: free
model: standard
source:
  - "[[GHL+14 - Garbled RAM Revisited|GHL+14]]"
security-loss: ""
rationale:
  class: "The construction garbles circuits that run the IBE's algorithms, a non-black-box use of the IBE."
---

# IBE ⇒ garbled RAM

## Statement

If [[identity-based-encryption|IBE]] exists, there is a [[garbled-ram|garbled RAM]] scheme with $\poly(\secpar) \cdot \polylog(n)$ overhead for databases of $n$ words — [[GHL+14 - Garbled RAM Revisited|GHL+14]].

## Notes

- The construction resolves a circularity in [[LO13 - How to Garble RAM Programs|LO13]], whose garbled RAM from one-way functions has a security proof relying on a circular use of Yao garbled circuits and PRFs — [[GHL+14 - Garbled RAM Revisited|GHL+14]].
- The Eurocrypt 2014 paper merges two parts: Part I, by Gentry, Halevi, Raykova and Wichs, gives the IBE construction, and Part II, by Lu and Ostrovsky, avoids the circularity from one-way functions alone with overhead $\poly(\secpar) \cdot \min(t, n^{\varepsilon})$ for any constant $\varepsilon > 0$, where $t$ is the running time — [[GHL+14 - Garbled RAM Revisited|GHL+14]].
- Known garbled RAM realizations before GLO15 use the underlying primitives in a non-black-box way; GLO15 build garbled RAM from one-way functions used only as a black box ([[owf-to-garbled-ram-glo15|OWF ⇒ garbled RAM (black-box)]]) — [[GLO15 - Black-Box Garbled RAM|GLO15]].
