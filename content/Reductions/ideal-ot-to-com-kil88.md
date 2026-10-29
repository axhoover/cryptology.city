---
type: reduction
status: draft
title: "Ideal OT ⇒ COM (Kilian)"
aliases: []
id: red-ideal-ot-to-com-kil88
kind: implication
hypotheses: [ideal-ot]
conclusion: com
class: free
model: standard
source:
  - "[[Kil88 - Founding cryptography on oblivious transfer|Kil88]]"
security-loss: "statistical: hiding error at most $\\secpar \\cdot 2^{-n}$ and binding error $2^{-\\secpar}$"
rationale:
  class: "The theorem is unconditional: hiding and binding hold statistically given ideal OT calls, so there is no hardness assumption for a black-box reduction to break."
---

# Ideal OT ⇒ COM (Kilian)

## Statement

In the OT-hybrid model, where the committer and the receiver may call an [[oblivious-transfer#ideal-ot-functionality|ideal OT functionality]], there is a bit [[commitment-scheme|commitment]] that is statistically hiding and statistically binding, with no complexity assumption — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]].

## Sketch

To commit to $b$, the committer sends uniform bits $r_1, \dots, r_n$ by [[oblivious-transfer#rabin-ot|Rabin OT]], equivalent to OT ([[rabin-ot-to-ot|Rabin OT ⇔ OT]]), and then $c = b \oplus r_1 \oplus \cdots \oplus r_n$; to open, it reveals $b$ and every $r_i$, which the receiver checks against the bits it received. Hiding holds because the receiver misses some $r_i$, leaving the parity uniform, except with probability $2^{-n}$; binding holds because opening to $1 - b$ flips an odd number of the $r_i$, and each flipped bit is caught with probability $1/2$ since the committer does not learn which bits arrived. Committing in $\secpar$ independent copies gives hiding error at most $\secpar \cdot 2^{-n}$ and binding error $2^{-\secpar}$ — standard.

## Notes

- Running each ideal call as an execution of an OT protocol with [[oblivious-transfer#malicious-security|malicious security]] gives a computationally hiding and binding commitment ([[ot-to-com|malicious OT ⇒ COM]]) — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]].
- The commitment is the first step of Kilian's proof that OT is complete for secure computation ([[ot-to-mpc-kil88|ideal OT ⇒ 2PC]]) — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]].
