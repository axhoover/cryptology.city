---
type: reduction
status: draft
title: "Prime-order CDH ⇒ EDL signatures"
aliases: []
id: red-prime-order-cdh-to-edl-signature-gj03
kind: implication
hypotheses: [prime-order-cdh]
conclusion: edl-signature
class: fully-black-box
model: rom
source:
  - "[[GJ03 - A Signature Scheme as Secure as the Diffie-Hellman Problem|GJ03]]"
security-loss: "tight"
rationale:
  class: "The scheme is fixed, and the reduction runs the forger once as an oracle and programs the random oracle."
  model: "The reduction programs the random oracles to embed the CDH instance and to simulate signatures."
---

# Prime-order CDH ⇒ EDL signatures

## Statement

In the [[digital-signature#edl-signatures|EDL signature scheme]] the public key is $y = g^x$ in a group of prime order $p$. To sign $m$, the signer picks a random salt $r$, sets $h = H(m, r) \in \GG$ and $z = h^x$, and attaches a Fiat–Shamir Chaum–Pedersen proof that $\log_g y = \log_h z$. The scheme is EUF-CMA secure in the [[random-oracle-model|random-oracle model]] if [[computational-diffie-hellman#cdh-in-prime-order-groups|CDH]] is hard in prime-order groups, with a tight reduction that needs no forking — [[GJ03 - A Signature Scheme as Secure as the Diffie-Hellman Problem|GJ03]].

## Sketch

On input $(g^a, g^b)$ the reduction sets $y = g^a$. It answers each fresh query $H(m, r)$ with $(g^b)^t$ for a fresh $t \getsr \ZZ_p$, except at the salts it picks to sign, where it answers $g^t$, so that $z = y^t$ and the proof can be simulated. By soundness of the proof, a forgery has $z^* = H(m^*, r^*)^a = g^{abt^*}$, which gives $g^{ab} = (z^*)^{1/t^*}$; random salts make it unlikely that a signing salt collides with the forger's earlier queries.

## Notes

- The scheme had been proposed at least twice before without a security analysis; GJ03 give the first one, with the tight reduction — [[GJ03 - A Signature Scheme as Secure as the Diffie-Hellman Problem|GJ03]].
- The DDH-based [[digital-signature#katz-wang-signatures|Katz–Wang scheme]] signs faster and has shorter signatures, with a tight reduction to DDH ([[prime-order-ddh-to-katz-wang-signature-kw03|Prime-order DDH ⇒ Katz–Wang signatures]]) — [[KW03 - Efficiency Improvements for Signature Schemes with Tight Security Reductions|KW03]].
