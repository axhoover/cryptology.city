---
type: reduction
status: draft
title: "NTRU ⇒ PKE"
aliases: []
id: red-ntru-to-pke-hps98
kind: implication
hypotheses: [ntru]
conclusion: pke
class: unstated
model: standard
source:
  - "[[HPS98 - NTRU a ring-based public key cryptosystem|HPS98]]"
security-loss: ""
---

# NTRU ⇒ PKE

[[ntru|NTRU]] implies [[public-key-encryption|PKE]].

## Statement

Migrated verbatim from [[ntru]] § NTRU:

> The _NTRU assumption_ is a lattice-based hardness assumption over polynomial rings, introduced alongside the NTRU public-key cryptosystem — [[HPS98 - NTRU a ring-based public key cryptosystem|HPS98]]. The public key looks like a ratio $h = g \cdot f^{-1} \bmod q$ of two short polynomials, and hardness asserts that recovering $f$ (or $g$) from $h$ alone is computationally infeasible.

Migrated verbatim from [[ntru]] § Related results:

> - NTRU implies [[public-key-encryption|PKE]] — [[HPS98 - NTRU a ring-based public key cryptosystem|HPS98]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Origin note ("introduced alongside the NTRU public-key cryptosystem") that doubles as the NTRU => PKE claim restated at line 51.
- No security notion stated for the resulting PKE (the original NTRU scheme is not IND-CPA secure without padding).
