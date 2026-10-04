---
type: reduction
status: draft
title: "RSA ⇔ FAC"
aliases: []
id: red-rsa-to-fac-dlo24
kind: equivalence
hypotheses: [rsa]
conclusion: fac
class: free
model: other
source:
  - "[[DLO24 - Breaking RSA Generically Is Equivalent to Factoring, with Preprocessing|DLO24]]"
security-loss: ""
rationale:
  class: "DLO24 prove the equivalence for every generic ring algorithm with preprocessing, restricting only its access to the ring and not its technique, which is the free class scoped by the model."
  model: "The theorem is proved in the generic ring model with preprocessing, which is none of the named models and differs from the generic group model."
---

# RSA ⇔ FAC

## Statement

Against generic ring algorithms, which access $\ZZ_n$ only through ring operations and equality tests, computing $e$-th roots modulo $n$ ([[rsa-assumption|RSA]]) is equivalent to [[factoring|factoring]] $n$, even when the adversary receives an advice string from unbounded preprocessing on $n$: any such RSA adversary converts into a factoring adversary with polynomially related online complexity and polynomially longer advice — [[DLO24 - Breaking RSA Generically Is Equivalent to Factoring, with Preprocessing|DLO24]]. The converse holds unconditionally: the factorization of $n$ gives $\phi(n)$ and hence $d \equiv e^{-1} \pmod{\phi(n)}$ — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]] ([[fac-to-rsa-rsa78|RSA ⇒ FAC]]). Algorithms that use the bit representation of ring elements are not covered.

## Notes

- Without preprocessing, the equivalence is due to [[AM09 - Breaking RSA Generically Is Equivalent to Factoring|AM09]].
