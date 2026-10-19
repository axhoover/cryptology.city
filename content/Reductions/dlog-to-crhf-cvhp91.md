---
type: reduction
status: draft
title: DLOG ⇒ CRHF
aliases:
  - Chaum–van Heijst–Pfitzmann hash
id: red-dlog-to-crhf-cvhp91
kind: implication
hypotheses: [dlog]
conclusion: crhf
class: fully-black-box
model: standard
source:
  - "[[CvHP91 - Cryptographically Strong Undeniable Signatures, Unconditionally Secure for the Signer|CvHP91]]"
security-loss: "none: a collision gives the discrete logarithm whenever it exists"
rationale:
  class: "The hash uses only the group operations, and one fixed reduction embeds its DLOG challenge as the second generator and computes the logarithm from any collision, running the collision finder once as an oracle."
---

# DLOG ⇒ CRHF

## Statement

Let $\GG$ be a group of prime order $q$ in which [[discrete-logarithm|DLOG]] is hard, and let $g, h$ be uniform generators. Then

$$
\hash_{g,h}(x_1, x_2) := g^{x_1} h^{x_2}, \qquad (x_1, x_2) \in \ZZ_q^2,
$$

is a [[hash-function#collision-resistance|collision-resistant]] family — [[CvHP91 - Cryptographically Strong Undeniable Signatures, Unconditionally Secure for the Signer|CvHP91]].

## Sketch

The reduction receives $h$ and sets the key to $(g, h)$. A collision $(x_1, x_2) \ne (x_1', x_2')$ gives $g^{x_1 - x_1'} = h^{x_2' - x_2}$ with $x_2 \ne x_2'$ (otherwise $x_1 = x_1'$), so $\log_g h = (x_1 - x_1') (x_2' - x_2)^{-1} \bmod q$.

## Notes

- The map compresses $2 \log q$ bits to the length of a group element, so it is compressing when elements have $(1 + o(1)) \log q$-bit encodings, as in elliptic-curve groups or the order-$q$ subgroup of $\ZZ_p^*$ for a safe prime $p = 2q + 1$ — standard.
- Viewed as a commitment to $x_1$ with randomness $x_2$, the same function is the perfectly hiding [[dlog-to-com-ped91|Pedersen commitment]] — [[Ped91 - Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing|Ped91]].
- Efficiency: two exponentiations, or one multi-exponentiation, per evaluation — standard.
