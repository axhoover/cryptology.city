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
  - "[[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]]"
via:
  - "[[hardcore-predicate|Goldreich–Levin]]"
security-loss: "polynomial: the Goldreich–Levin decoder turns a key distinguisher with advantage ε and running time t into a CDH solver with success probability polynomial in ε and 1/L and running time poly(L, 1/ε) · t"
rationale:
  class: "The protocol uses only the group operations, and the reduction runs any key distinguisher as an oracle inside the Goldreich–Levin decoder to compute the Diffie–Hellman value."
---

# CDH ⇒ NIKE (Diffie–Hellman with a hard-core bit)

## Statement

If [[computational-diffie-hellman|CDH]] is hard for $\GrGen$, let party $A$ publish $(g^a, s_A)$ and party $B$ publish $(g^b, s_B)$ for uniform exponents and uniform $s_A, s_B \in \bits^L$, where $L$ is the encoding length of group elements, and let both take the key $\langle g^{ab}, s_A \oplus s_B \rangle$, the inner product of the encoding of $g^{ab}$ with $s_A \oplus s_B$ over $\FF_2$. This is the Diffie–Hellman protocol of [[DH76 - New Directions in Cryptography|DH76]] with its key $g^{ab}$ replaced by a Goldreich–Levin bit of $g^{ab}$ — folklore; [[GB08 - Lecture Notes on Cryptography|GB08]] (Section 11.1.4) describe this way of extracting a hard bit from the Diffie–Hellman key. $A$ computes $g^{ab}$ as $(g^b)^a$ and $B$ as $(g^a)^b$, so the two keys agree with probability $1$ — standard. The key is pseudorandom given both public keys, since the inner product with a uniform string is a hard-core predicate of any value that is hard to compute from public data, here $g^{ab}$ given $(g^a, g^b)$ — [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]]. This is a [[key-exchange#non-interactive-key-exchange-nike|NIKE]] with one-bit keys.

## Sketch

A distinguisher between the key and a uniform bit with advantage $\varepsilon$ gives a predictor of $\langle g^{ab}, s \rangle$ from $(g, g^a, g^b, s)$, for uniform $s$, whose success probability differs from $1/2$ by $\varepsilon$. Run with this predictor, the Goldreich–Levin decoder lists polynomially many candidates for $g^{ab}$, and a uniformly chosen candidate is correct with probability polynomial in $\varepsilon$ and $1/L$ — [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]].

## Notes

- Inner products with $\Theta(\log \secpar)$ independent strings are simultaneously hard-core, so the key can have $\Theta(\log \secpar)$ bits; DDH makes $g^{ab}$ itself pseudorandom in the group ([[ddh-to-non-interactive-key-exchange-nike|DDH ⇒ NIKE]]) — standard.
- With [[ke-to-pke-dh76|NIKE ⇒ PKE]] this gives IND-CPA bit encryption from CDH — folklore.
- Under CDH alone, $g^{ab}$ itself is [[key-exchange#one-way-security|one-way]] ([[cdh-to-one-way-key-exchange|CDH ⇒ One-way KE (Diffie–Hellman)]]) — folklore, and in the random oracle model its hash is a pseudorandom $\secpar$-bit key ([[cdh-to-bit-string-key-exchange|CDH ⇒ KE with bit-string keys (hashed Diffie–Hellman)]]) — folklore.
