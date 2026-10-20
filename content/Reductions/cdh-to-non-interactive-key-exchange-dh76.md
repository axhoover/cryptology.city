---
type: reduction
status: draft
title: "CDH ⇒ NIKE (Diffie–Hellman with a hard-core bit)"
aliases: []
id: red-cdh-to-non-interactive-key-exchange-dh76
kind: implication
hypotheses: [cdh]
conclusion: non-interactive-key-exchange
class: fully-black-box
model: standard
source:
  - "[[DH76 - New Directions in Cryptography|DH76]]"
  - "[[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]]"
security-loss: "polynomial: the Goldreich–Levin decoder turns a key distinguisher with advantage ε into a CDH solver with success probability Ω(ε²) and running time poly(L, 1/ε)"
rationale:
  class: "The protocol uses only the group operations, and the reduction runs any key distinguisher as an oracle inside the Goldreich–Levin decoder to compute the Diffie–Hellman value."
---

# CDH ⇒ NIKE (Diffie–Hellman with a hard-core bit)

## Statement

If [[computational-diffie-hellman|CDH]] is hard for $\GrGen$, let party $A$ publish $(g^a, s_A)$ and party $B$ publish $(g^b, s_B)$ for uniform exponents and uniform $s_A, s_B \in \bits^L$, where $L$ is the encoding length of group elements, and let both take the key $\langle g^{ab}, s_A \oplus s_B \rangle$, the inner product of the encoding of $g^{ab}$ with $s_A \oplus s_B$ over $\FF_2$ — [[DH76 - New Directions in Cryptography|DH76]]. The key is pseudorandom given both public keys, since the inner product with a uniform string is a hard-core predicate of any value that is hard to compute from public data — [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]]. This is a [[key-exchange#non-interactive-key-exchange-nike|NIKE]] with one-bit keys.

## Sketch

A distinguisher between the key and a uniform bit predicts $\langle g^{ab}, s \rangle$ from $(g, g^a, g^b, s)$ with advantage $\varepsilon$, and the Goldreich–Levin decoder, querying it on many $s$, lists candidates for $g^{ab}$ containing the right one with probability $\Omega(\varepsilon^2)$ — [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]].

## Notes

- Inner products with $\Theta(\log \secpar)$ independent strings are simultaneously hard-core, so the key can have $\Theta(\log \secpar)$ bits; DDH makes $g^{ab}$ itself pseudorandom in the group ([[ddh-to-non-interactive-key-exchange-nike|DDH ⇒ NIKE]]) — standard.
- With [[ke-to-pke-dh76|NIKE ⇒ PKE]] this gives IND-CPA bit encryption from CDH — folklore.
