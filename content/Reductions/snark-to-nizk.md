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
---

# SNARK + OWF ⇒ NIZK

A [[succinct-argument|SNARG]] for $\classNP$ together with a [[hash-function#preimage-resistance-one-wayness|one-way function]] implies [[non-interactive-zero-knowledge|NIZK]].

## Statement

A [[succinct-argument|SNARG]] for $\classNP$ with proof size $\poly(\secpar)\cdot(|x|+|w|)^{c}$ for a constant $c < 1/2$, together with a [[hash-function#preimage-resistance-one-wayness|one-way function]], yields a [[non-interactive-zero-knowledge|NIZK]] argument for $\classNP$. The SNARG needs neither knowledge soundness nor efficient verification — [[KMY20 - NIZK from SNARG|KMY20]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: crs`: the SNARG and the resulting NIZK both use a common reference string.

- Replaces a migrated edge SNARK ⇒ NIZK, recorded from the remark that a zk-SNARK is a NIZK argument ([[non-interactive-zero-knowledge#zk-snark]]). Zero knowledge is optional in the [[succinct-argument]] definition, so a SNARK alone is not a NIZK. The zk-SNARK containment is definitional and stays in prose (sourcing pass, 2026-09).
