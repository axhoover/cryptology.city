---
type: reduction
status: draft
title: QR ∈ SZK
aliases: []
id: red-qr-to-szk-gmr85
kind: inclusion
hypotheses: [qr]
conclusion: szk
class: free
model: standard
source:
  - "[[GMR85 - The knowledge complexity of interactive proof-systems|GMR85]]"
security-loss: ""
---

# QR ∈ SZK

## Statement

The [[quadratic-residuosity|quadratic residuosity]] language $\{(N, x) : x \in \mathrm{QR}_N\}$ and its complement among Jacobi-symbol-one elements have perfect zero-knowledge proofs, so they lie in [[statistical-zero-knowledge|SZK]] — [[GMR85 - The knowledge complexity of interactive proof-systems|GMR85]].

## Sketch

To prove $x = w^2$ for $x \in \ZZ_N^*$, the prover sends $y = r^2$ for $r \getsr \ZZ_N^*$, the verifier sends $b \getsr \bits$, and the prover answers $z = r w^b$; the verifier accepts iff $\gcd(x, N) = \gcd(y, N) = 1$ and $z^2 = y x^b$. If both challenges are answered for one unit $y$, then $z_0$ is a unit and $x = (z_1 / z_0)^2$, so a non-residue fails one of them, and $k$ sequential repetitions give soundness error $2^{-k}$. The simulator guesses $b$, picks $z \getsr \ZZ_N^*$ and sets $y = z^2 x^{-b}$ — [[GMR85 - The knowledge complexity of interactive proof-systems|GMR85]].

## Notes

- The unit checks are needed: for $N = 15$ and the non-residue $x = 2$ of Jacobi symbol $1$, the messages $y = 0$ and $z = 0$ satisfy $z^2 = y x^b$ for both challenges — standard.
- Membership in SZK gives $\mathrm{QR} \in \classAM \cap \classcoAM$ ([[szk-to-am|SZK ⊆ AM]]); in fact the language is in $\classNP \cap \classcoNP$, with a square root and the factorization of $N$ as witnesses — folklore.
