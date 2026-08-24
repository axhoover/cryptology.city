---
type: reduction
status: draft
title: "Function secret sharing (FSS) ⇒ DPF"
aliases: []
id: red-function-secret-sharing-fss-to-dpf-bgi15
kind: implication
hypotheses: [function-secret-sharing]
conclusion: dpf
class: unstated
model: standard
source:
  - "[[BGI15 - Function Secret Sharing|BGI15]]"
  - "[[BGI16 - Function Secret Sharing Improvements and Extensions|BGI16]]"
security-loss: ""
---

# Function secret sharing (FSS) ⇒ DPF

[[distributed-point-function#function-secret-sharing-fss|Function secret sharing (FSS)]] implies [[distributed-point-function|DPF]].

## Statement

Migrated verbatim from [[distributed-point-function]]:

> DPFs are a special case of _function secret sharing (FSS)_, introduced by Boyle, Gilboa, and Ishai — [[BGI15 - Function Secret Sharing|BGI15]], [[BGI16 - Function Secret Sharing Improvements and Extensions|BGI16]]. FSS generalizes DPFs to arbitrary function classes $\calF$: one generates shares $(k_0, k_1)$ of any $f \in \calF$, such that each key evaluates the function's additive share, and each key hides $f$ individually.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'function-secret-sharing' has no page or slug; FSS is defined only inside this Variations section despite being the more general object.
- Surface phrasing puts DPF first ('DPFs are a special case of FSS'), so the implication direction is FSS => DPF — easy to get backwards.
