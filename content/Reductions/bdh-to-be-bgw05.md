---
type: reduction
status: draft
title: "BDH ⇒ BE"
aliases: []
id: red-bdh-to-be-bgw05
kind: implication
hypotheses: [bdh]
conclusion: be
class: fully-black-box
model: standard
source:
  - "[[BGW05 - Collusion Resistant Broadcast Encryption with Short Ciphertexts and Private Keys|BGW05]]"
security-loss: ""
---

# BDH ⇒ BE

The decision $n$-BDHE variant of [[bilinear-map-assumptions|BDH]] implies [[broadcast-encryption|BE]].

## Statement

If the decision $n$-BDHE (bilinear Diffie–Hellman exponent) assumption — a $q$-type variant of [[bilinear-map-assumptions|BDH]] — holds in a prime-order bilinear group, there is a public-key [[broadcast-encryption|BE]] scheme for $n$ users, secure against any number of colluding revoked users, with $O(1)$-size ciphertexts and private keys and an $O(n)$-size public key; security is static: the adversary commits to the target set before setup — [[BGW05 - Collusion Resistant Broadcast Encryption with Short Ciphertexts and Private Keys|BGW05]].

## Sketch

The public key is $v = g^\gamma$ together with the powers $g_i = g^{\alpha^i}$ for $i \in \{1,\ldots,2n\} \setminus \{n+1\}$, and user $i$ holds $d_i = g_i^\gamma$. A broadcast to $S$ has header $(g^t, (v \prod_{j \in S} g_{n+1-j})^t)$ and session key $e(g_{n+1}, g)^t$, which any $i \in S$ recovers from $d_i$ and the published powers although $g_{n+1}$ itself is never published. The static reduction embeds a decision $n$-BDHE challenge in these powers and runs the adversary once.

## Notes

`class: fully-black-box`: One fixed construction that uses the bilinear group only through group operations and the pairing, and one fixed static-security reduction: it receives a decision $n$-BDHE instance, programs the public key and the revoked users' private keys around the adversary's committed target set, and runs the BE adversary once as an oracle to answer the BDHE challenge. With an assumption as hypothesis, black-boxness refers to the treatment of the adversary; this is the RTV04 fully-black-box shape.
