---
type: reduction
status: draft
title: "Prime-order DDH ⇒ Katz–Wang signatures"
aliases: []
id: red-prime-order-ddh-to-katz-wang-signature-kw03
kind: implication
hypotheses: [prime-order-ddh]
conclusion: katz-wang-signature
class: fully-black-box
model: rom
source:
  - "[[KW03 - Efficiency Improvements for Signature Schemes with Tight Security Reductions|KW03]]"
security-loss: "tight"
rationale:
  class: "The scheme is fixed, and the distinguisher runs the forger once as an oracle and programs the random oracle."
  model: "The distinguisher programs the random oracle to simulate signatures."
---

# Prime-order DDH ⇒ Katz–Wang signatures

## Statement

The [[digital-signature#katz-wang-signatures|Katz–Wang signature scheme]] has public key $(g, h, y_1 = g^x, y_2 = h^x)$ in a group of prime order $p$, and a signature on $m$ is a Fiat–Shamir proof that $(g, h, y_1, y_2)$ is a Diffie–Hellman tuple: $(c, s)$ with $c = H(\pk, g^r, h^r, m)$ and $s = r + cx \bmod p$. The scheme is EUF-CMA secure in the [[random-oracle-model|random-oracle model]] if [[decisional-diffie-hellman#ddh-in-prime-order-groups|DDH]] is hard in prime-order groups, with a tight reduction — [[KW03 - Efficiency Improvements for Signature Schemes with Tight Security Reductions|KW03]].

## Sketch

Given a tuple $(g, h, y_1, y_2)$, the distinguisher uses it as the public key, answers signing queries with the HVZK simulator by programming $H$, and outputs "Diffie–Hellman" iff the forgery verifies. On a Diffie–Hellman tuple the simulation is perfect up to programming collisions. On a random tuple a valid signature is a proof of a false statement, which the soundness of the Chaum–Pedersen proof bounds by about $q_H/p$ for $q_H$ hash queries.

## Notes

- Compared with the CDH-based [[digital-signature#edl-signatures|EDL scheme]] ([[prime-order-cdh-to-edl-signature-gj03|Prime-order CDH ⇒ EDL signatures]]) — [[GJ03 - A Signature Scheme as Secure as the Diffie-Hellman Problem|GJ03]], signing is about 33% faster and signatures are about 75% shorter — [[KW03 - Efficiency Improvements for Signature Schemes with Tight Security Reductions|KW03]].
- [[GJKW07 - Efficient Signature Schemes with Tight Reductions to the Diffie-Hellman Problems|GJKW07]] is the joint journal version of KW03 and GJ03.
