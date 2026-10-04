---
type: reduction
status: draft
title: "SNARK + OWF ⇒ NIZK"
aliases: []
id: red-snark-and-owf-to-nizk-kmy20
kind: implication
hypotheses: [snark, owf]
conclusion: nizk
class: unstated
model: crs
source:
  - "[[KMY20 - NIZK from SNARG|KMY20]]"
security-loss: ""
rationale:
  model: "The SNARG and the resulting NIZK both use a common reference string."
---

# SNARK + OWF ⇒ NIZK

## Statement

A [[succinct-argument|SNARG]] for $\classNP$ with proof size $\poly(\secpar)\cdot(|x|+|w|)^{c}$ for a constant $c < 1/2$, together with a [[hash-function#preimage-resistance-one-wayness|one-way function]], yields a [[non-interactive-zero-knowledge|NIZK]] argument for $\classNP$. The SNARG needs neither knowledge soundness nor efficient verification — [[KMY20 - NIZK from SNARG|KMY20]].

## Notes

- A SNARK need not be zero-knowledge, so it is not by itself a NIZK; a [[non-interactive-zero-knowledge#zk-snark|zk-SNARK]] is a NIZK argument by definition — standard.
