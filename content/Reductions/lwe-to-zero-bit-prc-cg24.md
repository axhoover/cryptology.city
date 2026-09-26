---
type: reduction
status: draft
title: "LWE ⇒ Zero-bit PRC"
aliases: []
id: red-lwe-to-zero-bit-prc-cg24
kind: implication
hypotheses: [lwe]
conclusion: zero-bit-prc
class: unstated
model: standard
source:
  - "[[CG24 - Pseudorandom Error-Correcting Codes|CG24]]"
security-loss: ""
---

# LWE ⇒ Zero-bit PRC

[[learning-with-errors|LWE]] implies [[pseudorandom-error-correcting-code#zero-bit-prc|Zero-bit PRC]].

## Statement

Migrated verbatim from [[pseudorandom-error-correcting-code]] § Other results:

> - The zero-bit PRC construction from LWE has codewords of length $n = O(\secpar^2 / \log \secpar)$ and is robust to $\varepsilon$-fraction bit flips for $\varepsilon < 1/2 - 1/\poly(\secpar)$ — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Parameter/efficiency claim riding on the same (possibly mis-attributed, see line 59) LWE-based construction.
- Same LWE-vs-LPN suspicion as line 59.
- Sourcing pass (2026-09), **not fixed**: claim judged incorrect as stated — CG24 has no LWE-based construction; every code in the paper, including the zero-bit pseudorandom-LDPC code, rests on $2^{O(\sqrt{n})}$-hardness of LPN or on polynomial hardness of LPN plus the planted-XOR assumption at low density. The migrated length and robustness parameters are unverified against CG24's LPN parameterization. See [[subexponential-lpn-to-prc-cg24]].
