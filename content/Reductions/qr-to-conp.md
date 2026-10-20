---
type: reduction
status: draft
title: "QR ∈ coNP"
aliases: []
id: red-qr-to-conp
kind: inclusion
hypotheses: [qr]
conclusion: conp
class: free
model: standard
source: folklore
security-loss: ""
---

# QR ∈ coNP

## Statement

The [[quadratic-residuosity|quadratic residuosity]] language $\{(N, x) : N \text{ odd},\ x \in \QR_N\}$ is in [[co-nondeterministic-polynomial-time|coNP]]. If $\gcd(x, N) > 1$, non-membership is checked directly; otherwise a divisor $d$ of $N$ with Jacobi symbol $\left(\frac{x}{d}\right) = -1$ certifies $x \notin \QR_N$, and such a $d$ exists for every non-residue. No primality certificate is needed — folklore. Hence quadratic residuosity is in $\classNP \cap \classcoNP$ ([[qr-to-np|QR ∈ NP]]) and is not $\classNP$-hard under Cook reductions unless $\classNP = \classcoNP$ — standard.

## Sketch

For odd $N$ and $x$ coprime to $N$, $x$ is a square modulo $N$ iff it is a square modulo every prime $p \mid N$, by the Chinese remainder theorem and Hensel's lemma; a non-residue therefore has Legendre symbol $\left(\frac{x}{p}\right) = -1$ for some prime $p \mid N$, and $d = p$ is a certificate. Conversely, $\left(\frac{x}{d}\right)$ is the product of the Legendre symbols of $x$ over the prime factors of $d$ with multiplicity, so $\left(\frac{x}{d}\right) = -1$ forces $\left(\frac{x}{p}\right) = -1$ for some prime $p \mid d \mid N$, and $x$ is not a square modulo $N$. The Jacobi symbol is computed in polynomial time by quadratic reciprocity without factoring $d$ — standard.

## Notes

- Both the language and its complement among Jacobi-symbol-one elements have perfect zero-knowledge proofs: [[qr-to-szk-gmr85|QR ∈ SZK]] — [[GMR85 - The knowledge complexity of interactive proof-systems|GMR85]].
