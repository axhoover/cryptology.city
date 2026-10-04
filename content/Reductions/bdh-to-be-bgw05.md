---
type: reduction
status: draft
title: "n-BDHE ⇒ BE"
aliases: []
id: red-bdh-to-be-bgw05
kind: implication
hypotheses: [n-bdhe]
conclusion: be
class: fully-black-box
model: standard
source:
  - "[[BGW05 - Collusion Resistant Broadcast Encryption with Short Ciphertexts and Private Keys|BGW05]]"
security-loss: ""
rationale:
  class: "One fixed construction uses the bilinear group only through group operations and the pairing, and the static reduction programs the public key and the revoked users' keys around the committed target set from a decision n-BDHE instance and runs the adversary once as an oracle."
---

# n-BDHE ⇒ BE

## Statement

If the [[bilinear-map-assumptions#decision-n-bdhe|decision bilinear Diffie–Hellman exponent]] assumption with parameter $n$, a $q$-type variant of [[bilinear-map-assumptions|BDH]], holds in a prime-order bilinear group, there is a public-key [[broadcast-encryption|BE]] scheme for $n$ users, secure against any number of colluding revoked users, with $O(1)$-size ciphertexts and private keys and an $O(n)$-size public key. Security is [[broadcast-encryption#ind-sbe-cpa-security-selective|selective]] (static in BGW05's terms): the adversary commits to the target set before setup — [[BGW05 - Collusion Resistant Broadcast Encryption with Short Ciphertexts and Private Keys|BGW05]].

## Sketch

The public key is $v = g^\gamma$ together with the powers $g_i = g^{\alpha^i}$ for $i \in \{1,\ldots,2n\} \setminus \{n+1\}$, and user $i$ holds $d_i = g_i^\gamma$. A broadcast to $S$ has header $(g^t, (v \prod_{j \in S} g_{n+1-j})^t)$ and session key $e(g_{n+1}, g)^t$, which any $i \in S$ recovers from $d_i$ and the published powers although $g_{n+1}$ is never published. Given a decision $n$-BDHE instance $(g, h, g_1, \ldots, g_n, g_{n+2}, \ldots, g_{2n}, Z)$ and the committed target set $S^*$, the reduction sets $v = g^u / \prod_{j \in S^*} g_{n+1-j}$ for a uniform exponent $u$, which lets it compute $d_i$ for every $i \notin S^*$, and gives the adversary the challenge header $(h, h^u)$ with session key $Z$.
