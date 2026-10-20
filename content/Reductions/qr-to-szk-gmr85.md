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

To prove $x = w^2$, the prover sends $y = r^2$ for $r \getsr \ZZ_N^*$, the verifier sends $b \getsr \bits$, and the prover answers $z = r w^b$, accepted iff $z^2 = y x^b$. A non-residue fails one of the two challenges, and the simulator guesses $b$, picks $z$ and sets $y = z^2 x^{-b}$ — [[GMR85 - The knowledge complexity of interactive proof-systems|GMR85]].

## Notes

- Membership in SZK gives $\mathrm{QR} \in \classAM \cap \classcoAM$ ([[szk-to-am|SZK ⊆ AM]]); in fact the language is in $\classNP \cap \classcoNP$, with a square root and the factorization of $N$ as witnesses — folklore.
