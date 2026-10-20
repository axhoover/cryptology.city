---
type: barrier
status: draft
title: "No fixed-construction reduction from CDH to DDH"
aliases: []
id: bar-cdh-to-ddh-jn03
hypotheses: [cdh]
conclusion: ddh
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on: [bdh]
source:
  - "[[JN03 - Separating Decision Diffie-Hellman from Computational Diffie-Hellman in Cryptographic Groups|JN03]]"
rationale:
  class: "The counterexample refutes the identity map on group generators, CDH hardness of a generator implying DDH hardness of the same generator, and does not rule out building a DDH-hard group from a CDH-hard one by another construction."
  strength: "The separating generator has hard CDH only if BDH is hard for some symmetric-pairing group generator."
---

# No fixed-construction reduction from CDH to DDH

## Statement

The identity map on group generators is no reduction from [[computational-diffie-hellman|CDH]] to [[decisional-diffie-hellman|DDH]] unless [[bilinear-map-assumptions|BDH]] fails for every symmetric-pairing group generator. In a group $\GG$ with an efficient symmetric pairing $e : \GG \times \GG \to \GG_T$, such as a suitable supersingular elliptic curve, DDH is decided by checking $e(g^x, g^y) = e(g, g^z)$, and JN03 exhibit such groups in which CDH is equivalent to a presumably hard discrete logarithm problem — [[JN03 - Separating Decision Diffie-Hellman from Computational Diffie-Hellman in Cryptographic Groups|JN03]]. BDH hardness for a symmetric-pairing generator implies CDH hardness in its source group ([[cdh-to-bdh|BDH ⇒ CDH]]) — [[BF01 - Identity-Based Encryption from the Weil Pairing|BF01]], so such a generator has hard CDH and easy DDH.

## Sketch

Given $(g, g^x, g^y, Z)$, guess the real tuple iff $e(g^x, g^y) = e(Z, g)$. Bilinearity gives $e(g^x, g^y) = e(g, g)^{xy}$ and $e(Z, g) = e(g, g)^{z}$ for $Z = g^z$, and non-degeneracy makes $e(g, g)$ a generator of $\GG_T$, so the test accepts iff $z = xy$: advantage $1 - 1/p$ — standard.

## Notes

- The converse holds for every group generator: [[ddh-to-cdh|DDH ⇒ CDH]] — folklore.
