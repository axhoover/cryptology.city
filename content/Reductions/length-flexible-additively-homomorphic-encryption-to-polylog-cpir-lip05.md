---
type: reduction
status: draft
title: "Length-flexible additively homomorphic encryption ⇒ PIR with polylogarithmic communication (Lipmaa)"
aliases: []
id: red-length-flexible-additively-homomorphic-encryption-to-polylog-cpir-lip05
kind: implication
hypotheses: [length-flexible-additively-homomorphic-encryption]
conclusion: polylog-cpir
class: unstated
model: standard
source:
  - "[[Lip05 - An Oblivious Transfer Protocol with Log-Squared Communication|Lip05]]"
security-loss: ""
---

# Length-flexible additively homomorphic encryption ⇒ PIR with polylogarithmic communication (Lipmaa)

## Statement

An IND-CPA-secure [length-flexible additively homomorphic encryption](homomorphic-encryption#length-flexible-additively-homomorphic-encryption) scheme yields a one-round single-server [[single-server-private-information-retrieval|PIR]] for $n$ entries of $\ell$ bits with communication $\Theta(k \log^2 n + \ell \log n)$ for the security parameter $k$, low-degree polylogarithmic receiver computation and linear sender computation, so one with [polylogarithmic communication](single-server-private-information-retrieval#pir-with-polylogarithmic-communication); it converts into a one-round $1$-out-of-$n$ [[oblivious-transfer|OT]] for $\ell$-bit strings, computationally receiver-private and information-theoretically sender-private, with the same asymptotic communication — [[Lip05 - An Oblivious Transfer Protocol with Log-Squared Communication|Lip05]].

## Notes

- The Damgård–Jurik generalization of Paillier's scheme lets the block length be adjusted after the public key is fixed while keeping the homomorphism, and is as secure as Paillier's scheme — [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]].
- Rate $1 - o(1)$ is reached by KLLPT15 and, with new parameters for Lipmaa's protocol, by LP17 — [[KLLPT15 - Optimal Rate Private Information Retrieval from Homomorphic Encryption|KLLPT15]], [[LP17 - A Simpler Rate-Optimal CPIR Protocol|LP17]].
- Constant rate, communication $O(k + d)$ for a $d$-bit block with $k \ge \log n$, follows from a variant of [[rsa-assumption#φ-hiding|Φ-hiding]] — [[GR05 - Single-Database Private Information Retrieval with Constant Communication Rate|GR05]].
