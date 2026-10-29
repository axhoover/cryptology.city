---
type: reduction
status: draft
title: "Type 1 pairing + CDH ⇒ Multi-signatures in the KOSK model (Boldyreva)"
aliases:
  - Boldyreva multisignature
id: red-type-1-pairing-and-cdh-to-multi-signature-kosk-bol03
kind: implication
hypotheses: [type-1-pairing, cdh]
conclusion: multi-signature-kosk
class: unstated
model: rom
source:
  - "[[Bol03 - Threshold Signatures, Multisignatures and Blind Signatures Based on the Gap-Diffie-Hellman-Group Signature Scheme|Bol03]]"
security-loss: ""
---

# Type 1 pairing + CDH ⇒ Multi-signatures in the KOSK model (Boldyreva)

## Statement

Let $\GG$ be a group of prime order $p$ with a [[pairings#type-1|symmetric pairing]] $e : \GG \times \GG \to \GG_T$, so that the pairing decides DDH in $\GG$, in which [[computational-diffie-hellman|CDH]] is hard, and let $H : \bits^* \to \GG$ be a random oracle. In Boldyreva's [[multi-signature|multisignature]], signer $i$ holds $x_i$ with $\pk_i = g^{x_i}$; the aggregate key of a set of signers is $\prod_i \pk_i$, their multisignature on $m$ is $\sigma = \prod_i H(m)^{x_i}$, and $\Vrfy$ accepts iff $e(\sigma, g) = e(H(m), \prod_i \pk_i)$. The scheme is unforgeable in the [[multi-signature#knowledge-of-secret-key-model|knowledge-of-secret-key model]], in which every adversarial public key is registered together with its secret key — [[Bol03 - Threshold Signatures, Multisignatures and Blind Signatures Based on the Gap-Diffie-Hellman-Group Signature Scheme|Bol03]]. Bol03 prove this in every gap Diffie–Hellman group, and a symmetric pairing group in which CDH is hard is one.

## Notes

- In the plain public-key model the rogue key $\pk' = g^r (\prod_j \pk_j)^{-1}$ gives the set $\{\pk_1, \ldots, \pk_k, \pk'\}$ the aggregate key $g^r$, so $H(m)^r$ is a forgery; registration with the secret key rules this out — standard.
- Registering each key with a proof of possession instead of its secret key also suffices ([[type-1-pairing-and-cdh-to-multi-signature-pop-ry07|Type 1 pairing + CDH ⇒ Multi-signatures with proofs of possession]]) — [[RY07 - The Power of Proofs-of-Possession Securing Multiparty Signatures against Rogue-Key Attacks|RY07]]. Hashing the keys into the aggregate removes the need for registration altogether ([[co-cdh-star-to-multi-signature-bdn18|co-CDH ⇒ BLS multi-signatures with public-key aggregation]]) — [[BDN18 - Compact Multi-Signatures for Smaller Blockchains|BDN18]].
- Efficiency: a multisignature is one group element whatever the number of signers, and verification costs two pairings after multiplying the public keys — [[Bol03 - Threshold Signatures, Multisignatures and Blind Signatures Based on the Gap-Diffie-Hellman-Group Signature Scheme|Bol03]].
