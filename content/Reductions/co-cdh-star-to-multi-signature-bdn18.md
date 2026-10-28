---
type: reduction
status: draft
title: "co-CDH ⇒ BLS multi-signatures with public-key aggregation"
aliases: []
id: red-co-cdh-star-to-multi-signature-bdn18
kind: implication
hypotheses: [co-cdh-star]
conclusion: multi-signature
class: unstated
model: rom
source:
  - "[[BDN18 - Compact Multi-Signatures for Smaller Blockchains|BDN18]]"
security-loss: ""
---

# co-CDH ⇒ BLS multi-signatures with public-key aggregation

## Statement

Let $(\GG_1, \GG_2)$ be a bilinear group pair of prime order $p$ with generators $g_1, g_2$, in which [co-CDH without an isomorphism](co-computational-diffie-hellman#without-an-isomorphism) is hard, and let $H_0 : \bits^* \to \GG_1$ and $H_1$ be random oracles. In the BLS [[multi-signature]] of [[BDN18 - Compact Multi-Signatures for Smaller Blockchains|BDN18]], signer $i$ holds $x_i$ with $\pk_i = g_2^{x_i}$; the aggregate key of $L = \{\pk_1, \ldots, \pk_n\}$ is $\KeyAgg(L) = \prod_i \pk_i^{a_i}$ with $a_i = H_1(\pk_i, L)$, the multi-signature on $m$ is $\sigma = \prod_i H_0(m)^{a_i x_i}$, and $\Vrfy$ accepts iff $e(\sigma, g_2) = e(H_0(m), \KeyAgg(L))$. The scheme is unforgeable in the plain public-key model, with no proof of possession or knowledge of secret keys — [[BDN18 - Compact Multi-Signatures for Smaller Blockchains|BDN18]]. The plain public-key model is that of [[BN06 - Multi-Signatures in the Plain Public-Key Model and a General Forking Lemma|BN06]].

## Notes

- Efficiency: a multi-signature and an aggregate key are one group element each, and verification costs two pairings after aggregating the keys — [[BDN18 - Compact Multi-Signatures for Smaller Blockchains|BDN18]].
- Without the coefficients $a_i$, the rogue key $\pk' = g_2^r (\prod_j \pk_j)^{-1}$ makes $H_0(m)^r$ a forgery, which is why [[type-1-pairing-and-cdh-to-multi-signature-kosk-bol03|Boldyreva's scheme]] needs registered keys — standard.
- When $g_1 = \psi(g_2)$ for an isomorphism $\psi$, [[co-computational-diffie-hellman|co-CDH]] in its isomorphism form also suffices ([[co-cdh-to-co-cdh-star|co-CDH ⇒ co-CDH without an isomorphism]]) — folklore.
