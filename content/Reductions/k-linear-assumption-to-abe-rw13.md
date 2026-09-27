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

The [[bilinear-map-assumptions#k-linear-assumption|$k$-Linear assumption]] implies adaptively secure [[attribute-based-encryption|ABE]] for $\mathrm{NC}^1$.

## Statement

If the $k$-Lin assumption holds in prime-order bilinear groups, there are key-policy and ciphertext-policy [[attribute-based-encryption|ABE]] schemes for $\mathrm{NC}^1$ that are adaptively secure with polynomial security loss. The KP-ABE ciphertext size is linear in the attribute length and independent of the policy size, even when an attribute is used many times in the policy; the CP-ABE scheme has the analogous guarantee — [[KW19 - Compact Adaptively Secure ABE for NC1 from k-Lin|KW19]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- Sourcing pass (2026-09): this page previously cited [[RW13 - New Constructions and Proof Methods for Large Universe Attribute-Based Encryption|RW13]], migrated from [[attribute-based-encryption]] § Other results. RW13's large-universe KP-ABE and CP-ABE schemes are selectively secure under two $q$-type assumptions, not $k$-Lin; those assumptions have no wiki node, so that edge is not recorded. The slug still names rw13; filenames are live URLs and are not renamed.
