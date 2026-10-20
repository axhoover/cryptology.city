---
type: reduction
status: draft
title: DBDH ⇒ Three-party NIKE (Joux)
aliases:
  - Joux tripartite Diffie–Hellman
id: red-dbdh-to-three-party-nike-jou04
kind: implication
hypotheses: [dbdh]
conclusion: three-party-nike
class: fully-black-box
model: standard
source:
  - "[[Jou04 - A One Round Protocol for Tripartite Diffie–Hellman|Jou04]]"
security-loss: "none: the transcript and key are a DBDH tuple"
rationale:
  class: "The protocol uses only the pairing group's operations, and the transcript with the key is exactly the DBDH challenge, which the reduction passes to any eavesdropper once."
---

# DBDH ⇒ Three-party NIKE (Joux)

## Statement

In a symmetric pairing group $e : \GG \times \GG \to \GG_T$, three parties publish $g^a$, $g^b$ and $g^c$ for their secrets $a, b, c \getsr \ZZ_q$ and each derives $K = e(g,g)^{abc}$, the first as $e(g^b, g^c)^a$ — [[Jou04 - A One Round Protocol for Tripartite Diffie–Hellman|Jou04]]. If [[bilinear-map-assumptions#decisional-bdh|decisional BDH]] holds, $K$ is pseudorandom given the three messages, so this is a [[key-exchange#three-party-nike|three-party NIKE]] — standard.

## Notes

- Without pairings, one-round key exchange among three or more parties is known from [[io-and-owf-to-multi-party-nike-bz14|iO and one-way functions]], for any polynomial number of parties — [[BZ14 - Multiparty Key Exchange, Efficient Traitor Tracing, and More from Indistinguishability Obfuscation|BZ14]].
- The two-party case is [[ddh-to-non-interactive-key-exchange-nike|Diffie–Hellman]] — [[DH76 - New Directions in Cryptography|DH76]].
- Efficiency: each party sends one group element and computes one pairing and one exponentiation in $\GG_T$ — [[Jou04 - A One Round Protocol for Tripartite Diffie–Hellman|Jou04]].
