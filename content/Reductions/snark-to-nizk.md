---
type: reduction
status: draft
title: "SNARK + OWF ⇒ NIZK argument"
aliases: []
id: red-snark-and-owf-to-nizk-kmy20
kind: implication
hypotheses: [snark, owf]
conclusion: nonadaptive-nizk-argument-for-np
class: unstated
model: crs
source:
  - "[[KMY20 - NIZK from SNARG|KMY20]]"
security-loss: ""
rationale:
  model: "The SNARG and the resulting NIZK both use a common reference string."
---

# SNARK + OWF ⇒ NIZK argument

## Statement

A [[succinct-argument|SNARG]] for $\classNP$ with proof size $\poly(\secpar)\cdot(|x|+|w|)^{c}$ for a constant $c < 1/2$, together with a [[hash-function#preimage-resistance-one-wayness|one-way function]], yields a [[non-interactive-zero-knowledge#nizk-arguments-for-np|NIZK argument]] for $\classNP$. The SNARG needs neither knowledge soundness nor efficient verification — [[KMY20 - NIZK from SNARG|KMY20]].

## Notes

- A SNARK need not be zero-knowledge, so it is not by itself a NIZK; a [[non-interactive-zero-knowledge#zk-snark|zk-SNARK]] is a NIZK argument by definition — standard.
- The 2022 revision of the paper (its Journal of Cryptology version) relaxes the succinctness requirement to proof size $\poly(\secpar)\cdot(|x|+|w|)^{\delta}$ for any constant $\delta < 1$, still without requiring sublinear verification — [[KMY20 - NIZK from SNARG|KMY20]].
