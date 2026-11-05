---
type: reduction
status: draft
title: "Strong RSA ⇒ dynamic accumulator"
aliases: []
id: red-strong-rsa-to-dynamic-accumulator-cl02
kind: implication
hypotheses: [strong-rsa]
conclusion: dynamic-accumulator
class: unstated
model: standard
source:
  - "[[CL02 - Dynamic Accumulators and Application to Efficient Revocation of Anonymous Credentials|CL02]]"
security-loss: ""
---

# Strong RSA ⇒ dynamic accumulator

## Statement

If the [[rsa-assumption#strong-rsa|strong RSA assumption]] holds for moduli $N = pq$ with safe primes $p = 2p'+1$ and $q = 2q'+1$, the RSA accumulator with $\pp = (N, g)$ for $g \in \QR_N$, domain the primes in $[A, B]$ other than $p'$ and $q'$, where $2 < A$ and $B < A^2$, value $\mathit{acc} = g^{\prod_{x \in X} x} \bmod N$, and a witness $w$ for $x$ checked by $w^x \equiv \mathit{acc} \pmod N$, is a collision-free [[accumulator#dynamic-accumulators|dynamic accumulator]]: an element $x'$ is added by $\mathit{acc}' = \mathit{acc}^{x'}$ and deleted by the manager, who knows the factorization of $N$, as $\mathit{acc}' = \mathit{acc}^{1/x' \bmod \phi(N)}$, and every holder of a witness for an element still in the set updates it after each change from public information, without the factorization — [[CL02 - Dynamic Accumulators and Application to Efficient Revocation of Anonymous Credentials|CL02]].

## Notes

- With a zero-knowledge proof that a committed value is accumulated, the dynamic accumulator revokes [[anonymous-credentials|anonymous credentials]], with proving and verifying non-revocation at a cost independent of the number of credentials issued or revoked, while each holder updates its witness after every change — [[CL02 - Dynamic Accumulators and Application to Efficient Revocation of Anonymous Credentials|CL02]].
- The static RSA accumulator is [[strong-rsa-to-accumulator-bp97|Strong RSA ⇒ accumulator]] — [[BP97 - Collision-Free Accumulators and Fail-Stop Signature Schemes Without Trees|BP97]].
