---
type: reduction
status: draft
title: "Sublinear SNARG + OWF ⇒ NIZK argument"
aliases: []
id: red-snark-and-owf-to-nizk-kmy20
kind: implication
hypotheses: [sublinear-snarg-for-np, owf]
conclusion: nonadaptive-nizk-argument-for-np
class: unstated
model: crs
source:
  - "[[KMY20 - NIZK from SNARG|KMY20]]"
security-loss: ""
rationale:
  model: "The SNARG and the resulting NIZK both use a common reference string."
---

# Sublinear SNARG + OWF ⇒ NIZK argument

## Statement

A [[succinct-argument#snargs-for-np-with-sublinear-proofs|SNARG for NP with sublinear proofs]], of proof size $\poly(\secpar)\cdot(|x|+|w|)^{\delta}$ for a constant $\delta < 1$, together with a [[hash-function#preimage-resistance-one-wayness|one-way function]], yields a [[non-interactive-zero-knowledge#non-adaptively-sound-nizk-arguments-for-np|NIZK argument]] for $\classNP$. The SNARG needs neither knowledge soundness nor efficient verification — [[KMY20 - NIZK from SNARG|KMY20]].

## Notes

- A SNARG need not be zero-knowledge, so it is not by itself a NIZK; a [[non-interactive-zero-knowledge#zk-snark|zk-SNARK]] is a NIZK argument by definition — standard.
- The TCC 2020 version required proof size $\poly(\secpar)\cdot(|x|+|w|)^{c}$ for a constant $c < 1/2$ — [[KMY20 - NIZK from SNARG|KMY20]].
