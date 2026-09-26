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

[[rsa-assumption|RSA]] implies [[trapdoor-permutation|TDP]].

## Statement

The [[rsa-assumption|RSA assumption]] implies [[trapdoor-permutation|TDP]]: for $n = pq$ and $e$ coprime to $\varphi(n)$, $x \mapsto x^e \bmod n$ permutes $\ZZ_n^*$, the trapdoor $d$ with $ed \equiv 1 \pmod{\varphi(n)}$ inverts it as $y \mapsto y^d \bmod n$, and one-wayness of this family is the RSA assumption — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]. The domain is $\ZZ_n^*$ rather than $\bits^\ell$; applications that sample domain elements from public coins ([[oblivious-transfer|OT]], [[non-interactive-zero-knowledge|NIZK]]) need the enhanced or doubly enhanced notions — [[GR13 - Enhancements of Trapdoor Permutations|GR13]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- Enhanced and doubly enhanced TDPs suffice for these OT and NIZK applications — [[GR13 - Enhancements of Trapdoor Permutations|GR13]].
