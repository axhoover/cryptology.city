---
type: reduction
status: draft
title: DLOG ⇒ CRHF
aliases:
  - Chaum–van Heijst–Pfitzmann hash
id: red-dlog-to-crhf-cvhp91
kind: implication
hypotheses: [prime-order-dlog]
conclusion: crhf
class: fully-black-box
model: standard
source:
  - "[[CvHP91 - Cryptographically Strong Undeniable Signatures, Unconditionally Secure for the Signer|CvHP91]]"
security-loss: "none: every collision yields log_g h"
rationale:
  class: "The hash uses only the group operations, and one fixed reduction embeds its DLOG challenge as the second generator and computes the logarithm from any collision, running the collision finder once as an oracle."
---

# DLOG ⇒ CRHF

## Statement

Let $\GG$ be a group of prime order $q$ in which [[discrete-logarithm#dlog-in-prime-order-groups|DLOG]] is hard, and let $g, h$ be uniform generators. Then no efficient adversary finds a collision of

$$
\hash_{g,h}(x_1, x_2) := g^{x_1} h^{x_2}, \qquad (x_1, x_2) \in \ZZ_q^2,
$$

except with negligible probability — [[CvHP91 - Cryptographically Strong Undeniable Signatures, Unconditionally Secure for the Signer|CvHP91]]. If group elements are encoded in fewer than $2t$ bits for $t := \lfloor \log q \rfloor$, its restriction to $x_1, x_2 < 2^t$ compresses $\bits^{2t}$ and is a [[hash-function#collision-resistance|collision-resistant hash function]].

## Sketch

The reduction receives $h$ and sets the key to $(g, h)$. A collision $(x_1, x_2) \ne (x_1', x_2')$ gives $g^{x_1 - x_1'} = h^{x_2' - x_2}$ with $x_2 \ne x_2'$ (otherwise $x_1 = x_1'$), so $\log_g h = (x_1 - x_1') (x_2' - x_2)^{-1} \bmod q$.

## Notes

- CvHP91 take $\GG$ to be the quotient $\ZZ_p^* / \{\pm 1\}$ for a safe prime $p = 2q + 1$, a group of prime order $q$ whose elements are represented by $\{1, \ldots, q\}$ — [[CvHP91 - Cryptographically Strong Undeniable Signatures, Unconditionally Secure for the Signer|CvHP91]]. The order-$q$ subgroup of $\ZZ_p^*$, isomorphic to it by $\pm x \mapsto x^2$, is another presentation — standard.
- The encoding condition holds when elements have $(1 + o(1)) \log q$-bit encodings, as in elliptic-curve groups and both presentations above — standard.
- Prime order is needed: in a cyclic group of order $2r$ with $r$ an odd prime, $g^r$ is the unique element of order $2$ for every generator $g$, so with exponents in $\ZZ_{2r}$ the inputs $(r, 0)$ and $(0, r)$ collide under every key, even when DLOG is hard in the subgroup of order $r$ — standard.
- Viewed as a commitment to $x_1$ with randomness $x_2$, the same function is the perfectly hiding [[dlog-to-com-ped91|Pedersen commitment]] — [[Ped91 - Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing|Ped91]].
- Efficiency: two exponentiations, or one multi-exponentiation, per evaluation — standard.
