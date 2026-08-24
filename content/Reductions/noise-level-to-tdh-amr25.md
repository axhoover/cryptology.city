---
type: reduction
status: draft
title: "Noise Level ⇒ TDH"
aliases: []
id: red-noise-level-to-tdh-amr25
kind: implication
hypotheses: [lpn-low-noise]
conclusion: tdh
class: unstated
model: standard
source:
  - "[[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]]"
security-loss: ""
---

# Noise Level ⇒ TDH

[[learning-parity-with-noise#noise-level|Noise Level]] implies [[trapdoor-hash-function|TDH]].

## Statement

Migrated verbatim from [[learning-parity-with-noise]] § Known results:

> - Low-noise LPN with $\varepsilon = \log^{1+\beta} k / k$, where $0 < \beta < 1$, is known to imply [[single-server-private-information-retrieval|PIR]] with slightly sublinear communication $N/2^{\Theta(\log^{1-\beta} N)}$ (through the use of [[trapdoor-hash-function|TDH]]) — [[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]]
>   - Fully sublinear PIR from any flavor of LPN is open.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- The noise-rate parameter, which is the entire content of the hypothesis, cannot be carried by the flat identifier lpn-low-noise.
- lpn-low-noise has no page of its own; it is a regime described inside learning-parity-with-noise.
- Two-step construction (through the use of TDH) must be split.
- The concrete communication bound attaches to the conclusion object rather than to the reduction.
- The nested sub-bullet states an open problem and is recorded separately.
- The noise parameter (epsilon = log^(1+beta) k / k) cannot be carried by the hypothesis identifier.
