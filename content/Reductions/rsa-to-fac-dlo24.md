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
---

# RSA ⇔ FAC

In the generic ring model with preprocessing, [[rsa-assumption|RSA]] is equivalent to [[factoring|FAC]].

## Statement

Against generic ring algorithms (which access $\ZZ_N$ only through ring operations and equality tests), computing $e$-th roots modulo $N$ is equivalent to factoring $N$, even when the adversary receives an advice string from unbounded preprocessing on $N$: any such [[rsa-assumption|RSA]] adversary converts into a [[factoring|FAC]] adversary with polynomially related online complexity and polynomially longer advice — [[DLO24 - Breaking RSA Generically Is Equivalent to Factoring, with Preprocessing|DLO24]]. The converse holds unconditionally: the factorization of $N$ gives $\varphi(N)$ and hence $d = e^{-1} \bmod \varphi(N)$ — folklore. Algorithms that use the bit representation of ring elements are not covered.

## Notes

`class: free`: schema/reduction-classes.yaml's `generic-ring` rejection note prescribes this pairing: the idealized computation model goes on the model axis, and a result quantifying over every algorithm in that model is the free class scoped by the model. DLO24 restrict only the adversary's access to $\ZZ_N$, not its technique.

`model: other`: the generic ring model with preprocessing, which the model enum lacks (generic-group is a different model).

- The preprocessing-free case is due to Aggarwal and Maurer — [[AM09 - Breaking RSA Generically Is Equivalent to Factoring|AM09]]
