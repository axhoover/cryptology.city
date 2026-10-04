---
type: reduction
status: draft
title: "$k$-Linear assumption ⇒ ABE"
aliases: []
id: red-k-linear-assumption-to-abe-rw13
kind: implication
hypotheses: [k-linear-assumption]
conclusion: abe
class: unstated
model: standard
source:
  - "[[KW19 - Compact Adaptively Secure ABE for NC1 from k-Lin|KW19]]"
security-loss: "polynomial — KW19"
---

# $k$-Linear assumption ⇒ ABE

## Statement

If the [$k$-Lin assumption](bilinear-map-assumptions#k-linear-assumption) holds in prime-order bilinear groups, there are key-policy and ciphertext-policy [[attribute-based-encryption|ABE]] schemes for $\mathrm{NC}^1$ that are adaptively secure ([[attribute-based-encryption#kp-abe-ind-cpa-security|KP-IND-CPA]] and [[attribute-based-encryption#cp-abe-ind-cpa-security|CP-IND-CPA]]) with polynomial security loss. The KP-ABE ciphertext size is linear in the attribute length and independent of the policy size, even when an attribute is used many times in the policy; the CP-ABE scheme has the analogous guarantee — [[KW19 - Compact Adaptively Secure ABE for NC1 from k-Lin|KW19]].

## Notes

- [[RW13 - New Constructions and Proof Methods for Large Universe Attribute-Based Encryption|RW13]] give large-universe KP-ABE and CP-ABE in prime-order bilinear groups, selectively secure under two $q$-type assumptions rather than $k$-Lin.
