---
type: reduction
status: draft
title: "TDP ⇒ Ring signatures with fixed-ring unforgeability (Rivest–Shamir–Tauman)"
aliases:
  - RST ring signature
id: red-tdp-to-fixed-ring-ring-signature-rst01
kind: implication
hypotheses: [tdp]
conclusion: fixed-ring-ring-signature
class: unstated
model: other
source:
  - "[[RST01 - How to Leak a Secret|RST01]]"
security-loss: ""
rationale:
  model: "The proof models the symmetric cipher as an ideal cipher, a family of independent random permutations that every party can query in both directions, which is none of the named models."
---

# TDP ⇒ Ring signatures with fixed-ring unforgeability (Rivest–Shamir–Tauman)

## Statement

Let each user's public key describe a [[trapdoor-permutation|trapdoor permutation]] $g_i$, extended to a permutation of a common domain $\bits^b$, with the trapdoor as secret key, and let $E$ be a cipher on $\bits^b$ and $h$ a hash function giving $k = h(m)$. A ring signature on $m$ with respect to $R = (g_1, \ldots, g_\ell)$ is $(v, x_1, \ldots, x_\ell)$ such that the values $y_i = g_i(x_i)$ satisfy

$$
E_k(y_\ell \oplus E_k(y_{\ell-1} \oplus \cdots \oplus E_k(y_1 \oplus v) \cdots)) = v.
$$

The signer $s$ picks $v$ and every $x_i$ with $i \ne s$ at random, solves this equation for $y_s$, and inverts $g_s$ with its trapdoor. The scheme is unconditionally signer-ambiguous, and with $E$ modeled as an ideal cipher it is a [[ring-signature#fixed-ring-unforgeability|ring signature with fixed-ring unforgeability]]: a forger yields an algorithm inverting one of the $g_i$ — [[RST01 - How to Leak a Secret|RST01]].

## Notes

- Signing and verifying cost one cipher call and one evaluation of $g_i$ per ring member, and the signer one inversion of $g_s$ — [[RST01 - How to Leak a Secret|RST01]].
- The construction paradigm is secure in the [[random-oracle-model|random-oracle model]], without an ideal cipher — [[BSS02 - Threshold Ring Signatures and Applications to Ad-hoc Groups|BSS02]].
