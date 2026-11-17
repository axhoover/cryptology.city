---
type: reduction
status: draft
title: "Subexponential LPN ⇒ Substitution-robust zero-bit PRC"
aliases: []
id: red-lwe-to-zero-bit-prc-cg24
kind: implication
hypotheses: [subexponential-lpn]
conclusion: substitution-robust-zero-bit-prc
class: unstated
model: standard
source:
  - "[[CG24 - Pseudorandom Error-Correcting Codes|CG24]]"
security-loss: ""
---

# Subexponential LPN ⇒ Substitution-robust zero-bit PRC

## Statement

$2^{O(\sqrt{n})}$-hardness of [[learning-parity-with-noise#subexponential-lpn|LPN]] implies a [[pseudorandom-error-correcting-code#substitution-robust-zero-bit-prc|substitution-robust zero-bit PRC]]: for all constants $p, \eta \in (0, 1/2)$ there are $g = \Omega(\log^2 n)$ and $t = \Theta(\log n)$ such that, if LPN with secret dimension $g$, $n$ samples and noise rate $\eta$ is hard for polynomial-time adversaries (a $2^{O(\sqrt{g})}$-hardness assumption on LPN in dimension $g$ when $g = \Theta(\log^2 n)$), the LDPC-based code $\mathrm{LDPC\text{-}PRC}_0[n, g, t, 0.99n, \eta, (0.99n)^{-1/4}]$ is a zero-bit public-key PRC robust to every $p$-bounded channel — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (Theorem 2). With the decoding and encoding keys together as its key, it is a zero-bit PRC robust to every $p$-bounded channel — standard.

## Notes

- The same conclusion follows from polynomial hardness of LPN together with the low-density planted-XOR assumption — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].
