---
type: reduction
status: draft
title: "NIKE ⇒ KE"
aliases: []
id: red-non-interactive-key-exchange-to-ke
kind: implication
hypotheses: [non-interactive-key-exchange]
conclusion: ke
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the NIKE challenge is forwarded unchanged"
rationale:
  class: "The protocol calls Setup, Gen and Combine only as oracles, and the fixed reduction forwards its NIKE challenge as transcript and candidate key and runs the eavesdropper once as an oracle."
---

# NIKE ⇒ KE

## Statement

Let $(\Setup, \Gen, \Combine)$ be a [[key-exchange#non-interactive-key-exchange-nike|NIKE]]. In the following two-message protocol, $A$ samples $\pp \gets \Setup(1^\secpar)$ and $(\pk_A, \sk_A) \gets \Gen(\pp)$ and sends $(\pp, \pk_A)$; $B$ samples $(\pk_B, \sk_B) \gets \Gen(\pp)$ and replies $\pk_B$; $A$ outputs $\Combine(\sk_A, \pk_B)$ and $B$ outputs $\Combine(\sk_B, \pk_A)$. The two keys agree by the NIKE's correctness, and the protocol is a [[key-exchange|key exchange]] secure against eavesdroppers — folklore. When $\pp = 1^\secpar$, both parties can send their public keys at once, and the protocol has one round.

## Sketch

The eavesdropper's view $(\pp, \pk_A, \pk_B)$ with $A$'s key or a uniform $u \getsr \calK$ is the view in the NIKE game for one honest pair, so a key-exchange distinguisher is verbatim a NIKE distinguisher with the same advantage.

## Notes

- Instantiated with the Diffie–Hellman NIKE ([[ddh-to-non-interactive-key-exchange-nike|DDH ⇒ NIKE]]), the protocol is the Diffie–Hellman key exchange of [[DH76 - New Directions in Cryptography|DH76]].
