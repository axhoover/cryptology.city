---
type: reduction
status: draft
title: iO + OWF ⇒ Multiparty NIKE (Boneh–Zhandry)
aliases: []
id: red-io-and-owf-to-multi-party-nike-bz14
kind: implication
hypotheses: [io, owf]
conclusion: multi-party-nike
class: free
model: standard
source:
  - "[[BZ14 - Multiparty Key Exchange, Efficient Traitor Tracing, and More from Indistinguishability Obfuscation|BZ14]]"
security-loss: "polynomial"
rationale:
  class: "The parties obfuscate a circuit that evaluates a pseudorandom generator and a puncturable PRF, so the construction uses the one-way function's code."
---

# iO + OWF ⇒ Multiparty NIKE (Boneh–Zhandry)

## Statement

If [[indistinguishability-obfuscation|iO]] and [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist, then for every polynomial $N$ there is an [$N$-party non-interactive key exchange](key-exchange#multiparty-non-interactive-key-exchange) without trusted setup, in which each party's published value has length independent of $N$ — [[BZ14 - Multiparty Key Exchange, Efficient Traitor Tracing, and More from Indistinguishability Obfuscation|BZ14]].

## Sketch

Each party publishes $s_i' = G(s_i)$ for a length-doubling [[pseudorandom-generator|PRG]] $G$ and a uniform seed $s_i$. The shared key is a puncturable PRF evaluated at $(s_1', \ldots, s_N')$, computed through an obfuscated program that releases it only to a caller presenting a seed $s_i$ with $G(s_i) = s_i'$ for one of the listed values. Punctured programming, together with replacing each $s_i'$ by a uniform string outside the image of $G$, shows the key is pseudorandom to an eavesdropper. — [[BZ14 - Multiparty Key Exchange, Efficient Traitor Tracing, and More from Indistinguishability Obfuscation|BZ14]].

## Notes

- For $N = 2$ Diffie–Hellman already works ([[ddh-to-non-interactive-key-exchange-nike|DDH ⇒ NIKE]]) — [[DH76 - New Directions in Cryptography|DH76]] — and for $N = 3$ a bilinear pairing — [[Jou04 - A One Round Protocol for Tripartite Diffie–Hellman|Jou04]].
- The same paper uses iO to build broadcast encryption with short ciphertexts and traitor tracing with short ciphertexts and keys — [[BZ14 - Multiparty Key Exchange, Efficient Traitor Tracing, and More from Indistinguishability Obfuscation|BZ14]].
