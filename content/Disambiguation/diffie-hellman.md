---
type: disambiguation
status: draft
aliases:
  - DH
  - Diffie-Hellman
  - Diffie-Hellman assumption
title: Diffie-Hellman (disambiguation)
---

# Diffie-Hellman (disambiguation)

_Diffie-Hellman_ (DH) refers to one of the following.

Assumptions in a cyclic group $\GG = \langle g \rangle$:

- [[computational-diffie-hellman|Computational Diffie-Hellman]] (CDH) — given $(g, g^a, g^b)$, compute $g^{ab}$.
- [[decisional-diffie-hellman|Decisional Diffie-Hellman]] (DDH) — distinguish $(g, g^a, g^b, g^{ab})$ from $(g, g^a, g^b, g^c)$.
- [[discrete-logarithm|Discrete logarithm]] (DLOG) — given $(g, g^a)$, compute $a$.

Assumptions in bilinear groups:

- [[co-computational-diffie-hellman|co-CDH]] — CDH across the two source groups of an asymmetric pairing.
- [[bilinear-map-assumptions|Bilinear Diffie-Hellman]] (BDH, DBDH) — computational and decisional problems in the target group.
- [$q$-Strong Diffie-Hellman](q-strong-diffie-hellman) ($q$-SDH) — given $(g, g^\tau, \ldots, g^{\tau^q})$, output $(c, g^{1/(\tau + c)})$.

Other:

- [[supersingular-isogeny-diffie-hellman|Supersingular Isogeny Diffie-Hellman]] (SIDH) — an isogeny-based assumption, broken by a classical polynomial-time key-recovery attack — [[CD22 - An efficient key recovery attack on SIDH|CD22]].
- [[key-exchange|Key exchange]] — the Diffie-Hellman key exchange protocol — [[DH76 - New Directions in Cryptography|DH76]].
