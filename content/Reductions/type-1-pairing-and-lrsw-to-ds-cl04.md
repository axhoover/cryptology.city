---
type: reduction
status: draft
title: "Type 1 pairing + LRSW ⇒ DS (Camenisch–Lysyanskaya)"
aliases:
  - CL signature
  - Camenisch–Lysyanskaya signature
id: red-type-1-pairing-and-lrsw-to-ds-cl04
kind: implication
hypotheses: [type-1-pairing, lrsw]
conclusion: ds
class: fully-black-box
model: standard
source:
  - "[[CL04 - Signature Schemes and Anonymous Credentials from Bilinear Maps|CL04]]"
security-loss: "tight: a forger is an LRSW adversary with the same advantage"
rationale:
  class: "The reduction answers the forger's signing queries with the LRSW oracle and outputs its forgery unchanged, using the forger only as an oracle."
---

# Type 1 pairing + LRSW ⇒ DS (Camenisch–Lysyanskaya)

## Statement

Let $(\GG, \GG_T, p, g, e)$ be a [[pairings#type-1|symmetric bilinear group]] in which the [[lrsw-assumption|LRSW assumption]] holds. Camenisch–Lysyanskaya Scheme A signs messages $m \in \ZZ_p \setminus \{0\}$. It has $\sk = (x, y) \getsr \ZZ_p^2$ and $\vk = (X, Y) = (g^x, g^y)$; $\Sign(\sk, m)$ picks $a \getsr \GG$ and outputs $\sigma = (a, b, c) = (a, a^y, a^{x + mxy})$, and $\Vrfy(\vk, m, \sigma)$ accepts iff $a \ne 1$, $e(a, Y) = e(g, b)$ and $e(X, a) \cdot e(X, b)^m = e(g, c)$. The scheme is [[digital-signature#existential-unforgeability|EUF-CMA]] in the standard model — [[CL04 - Signature Schemes and Anonymous Credentials from Bilinear Maps|CL04]]. CL04 also sign blocks of messages and committed messages, with efficient protocols for proving knowledge of a signature — [[CL04 - Signature Schemes and Anonymous Credentials from Bilinear Maps|CL04]].

## Sketch

Signing is the LRSW oracle. By non-degeneracy of $e$, a triple that verifies on $m$ satisfies $b = a^y$ and $c = a^{x + mxy}$, so a forgery on an unqueried $m \ne 0$ is an LRSW solution; the reduction forwards the signing queries to its oracle and outputs the forgery.

## Notes

- Efficiency: a Scheme A signature is three elements of $\GG$ — [[CL04 - Signature Schemes and Anonymous Credentials from Bilinear Maps|CL04]].
- A variant of CL signatures is secure under static assumptions — [[GLOW12 - Dual Form Signatures An Approach for Proving Security from Static Assumptions|GLOW12]]. A slight modification of CL signatures is secure under simple variants of the SDH assumption — [[PS18 - Reassessing Security of Randomizable Signatures|PS18]].
- LRSW holds for generic algorithms in groups without a pairing ([[ggm-to-lrsw-lrsw99|GGM ⇒ LRSW]]) — [[LRSW99 - Pseudonym Systems|LRSW99]].
