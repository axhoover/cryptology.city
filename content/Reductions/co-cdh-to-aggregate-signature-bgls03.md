---
type: reduction
status: draft
title: "co-CDH ⇒ Aggregate signatures (BGLS)"
aliases:
  - BGLS aggregate signature
id: red-co-cdh-to-aggregate-signature-bgls03
kind: implication
hypotheses: [co-cdh]
conclusion: aggregate-signature
class: fully-black-box
model: rom
source:
  - "[[BGLS03 - Aggregate and Verifiably Encrypted Signatures from Bilinear Maps|BGLS03]]"
security-loss: ""
rationale:
  class: "The construction uses only group, hash and pairing operations, and the reduction runs the forger once as an oracle, programs the random oracle, and extracts a co-CDH solution from the forged aggregate."
  model: "The reduction programs the hash-to-group function to embed the challenge and to answer signing queries."
---

# co-CDH ⇒ Aggregate signatures (BGLS)

## Statement

Let $(\GG_1, \GG_2)$ be a bilinear group pair of prime order $p$, with pairing $e : \GG_1 \times \GG_2 \to \GG_T$ and an efficiently computable isomorphism $\psi : \GG_2 \to \GG_1$, in which [[co-computational-diffie-hellman|co-CDH]] is hard, and let $H : \bits^* \to \GG_1$ be a random oracle. In the BGLS [[digital-signature#aggregate-signatures|aggregate signature]] scheme, user $i$ holds $x_i$ with $\pk_i = g_2^{x_i}$ and signs as $\sigma_i = H(m_i)^{x_i}$, as in [[digital-signature#bls-signatures|BLS]]; $\Agg$ outputs $\sigma = \prod_i \sigma_i$, and $\AggVrfy((\pk_i, m_i)_{i \le n}, \sigma)$ accepts iff the $m_i$ are pairwise distinct and $e(\sigma, g_2) = \prod_{i=1}^n e(H(m_i), \pk_i)$. The scheme is unforgeable in the aggregate chosen-key model — [[BGLS03 - Aggregate and Verifiably Encrypted Signatures from Bilinear Maps|BGLS03]]. BGLS03 state the theorem for co-gap Diffie–Hellman group pairs; the pairing decides co-DDH, so in a bilinear group pair this is hardness of co-CDH.

## Sketch

The reduction answers each $H$-query with $\psi(g_2)^r$ for a known $r$ or, with small probability, with $h \cdot \psi(g_2)^r$, embedding the co-CDH challenge $h$, and signs a point of the first kind under $\pk^*$ as $\psi(\pk^*)^r$. In a forgery whose other messages all hash to points of the first kind, user $i$'s contribution $H(m_i)^{x_i}$ equals $\psi(\pk_i)^{r_i}$, which the reduction computes without $x_i$. Dividing these out leaves the challenge user's signature $(h \psi(g_2)^r)^{x^*}$ on the embedded point, which yields $h^{x^*}$.

## Notes

- Without the distinctness check, the rogue key $\pk' = g_2^r \cdot (\pk^*)^{-1}$ makes $H(m)^r$ a valid aggregate on $(m, m)$ under $(\pk^*, \pk')$, since $e(H(m), \pk^*)\, e(H(m), \pk') = e(H(m)^r, g_2)$ — standard.
- The basic scheme is secure only for aggregates of distinct messages, and the enhanced scheme that prepends each signer's public key to its message only for per-signer distinct messages. A new analysis lifts the restriction and gives an unrestricted aggregate signature scheme in the random oracle model; a second analysis removes the distinct-signer restriction of the sequential aggregate signatures of Lysyanskaya, Micali, Reyzin and Shacham, and variants with tight reductions are also given — [[BNN07 - Unrestricted Aggregate Signatures|BNN07]].
- Efficiency: an aggregate is one element of $\GG_1$ whatever $n$, and verification costs $n + 1$ pairings — [[BGLS03 - Aggregate and Verifiably Encrypted Signatures from Bilinear Maps|BGLS03]].
