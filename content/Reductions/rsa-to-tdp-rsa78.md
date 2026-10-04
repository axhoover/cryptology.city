---
type: reduction
status: draft
title: "RSA ⇒ TDP"
aliases: []
id: red-rsa-to-tdp-rsa78
kind: implication
hypotheses: [rsa]
conclusion: tdp
class: unstated
model: standard
source:
  - "[[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]"
security-loss: ""
---

# RSA ⇒ TDP

## Statement

If the [[rsa-assumption|RSA assumption]] holds for $\GrGen$, the RSA family is a [[trapdoor-permutation|trapdoor permutation]]: for $(n, e, d) \gets \GrGen(1^\secpar)$, with $n = pq$ and $ed \equiv 1 \pmod{\phi(n)}$, the map $x \mapsto x^e \bmod n$ permutes $\ZZ_n^*$, the trapdoor $d$ inverts it as $y \mapsto y^d \bmod n$, and one-wayness of the family is the RSA assumption — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]].

## Notes

- The domain is $\ZZ_n^*$ rather than $\bits^\ell$. Applications that sample domain elements from public coins, such as [[oblivious-transfer|OT]] and [[non-interactive-zero-knowledge|NIZK]], need the enhanced or doubly enhanced notions, which suffice for them — [[GR13 - Enhancements of Trapdoor Permutations|GR13]].
