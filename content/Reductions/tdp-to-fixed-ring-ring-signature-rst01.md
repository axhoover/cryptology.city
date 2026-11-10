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
  model: "The proof models the symmetric cipher as an ideal cipher, a family of independent random permutations that every party can query in both directions, and the hash h as a random oracle; no named model covers the two together."
---

# TDP ⇒ Ring signatures with fixed-ring unforgeability (Rivest–Shamir–Tauman)

## Statement

Let each user's public key describe a [[trapdoor-permutation|trapdoor permutation]] $f_i$, with the trapdoor as secret key, extended to a permutation $g_i$ of a common domain $\bits^b$ that is still one-way (for $f_i$ on $\ZZ_{n_i}$, as with RSA, $g_i(q n_i + r) = q n_i + f_i(r)$ for $0 \le r < n_i$ when $(q+1) n_i \le 2^b$, and $g_i$ is the identity on the remaining $2^b \bmod n_i$ points, a negligible fraction of $\bits^b$ when $2^b / n_i$ is super-polynomial in $\secpar$), and let $E$ be a cipher on $\bits^b$ and $h$ a hash function giving $k = h(m)$. A ring signature on $m$ with respect to $R = (g_1, \ldots, g_\ell)$ is $(v, x_1, \ldots, x_\ell)$ such that the values $y_i = g_i(x_i)$ satisfy

$$
E_k(y_\ell \oplus E_k(y_{\ell-1} \oplus \cdots \oplus E_k(y_1 \oplus v) \cdots)) = v.
$$

The signer $s$ picks $v$ and every $x_i$ with $i \ne s$ at random, solves this equation for $y_s$, and inverts $g_s$ with its trapdoor. The scheme is unconditionally signer-ambiguous, and with $E$ modeled as an ideal cipher and $h$ as a [[random-oracle-model|random oracle]] it is a [[ring-signature#fixed-ring-unforgeability|ring signature with fixed-ring unforgeability]]: every efficient forger $\calA$ with non-negligible advantage yields an efficient algorithm that inverts one of the $g_i$ at a uniform point with non-negligible probability — [[RST01 - How to Leak a Secret|RST01]].

## Notes

- Verifying costs one cipher call and one evaluation of $g_i$ per ring member; signing costs the same, except that the signer inverts $g_s$ instead of evaluating it — [[RST01 - How to Leak a Secret|RST01]].
- The random oracle is needed: if $h(m) = h(m')$ for $m \ne m'$, a signature on $m$ verifies unchanged on $m'$ — standard.
- The construction paradigm is secure in the random-oracle model alone, without an ideal cipher — [[BSS02 - Threshold Ring Signatures and Applications to Ad-hoc Groups|BSS02]].
