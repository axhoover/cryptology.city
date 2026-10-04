---
type: reduction
status: draft
title: "OT ⇒ COM"
aliases: []
id: red-ot-to-com
kind: implication
hypotheses: [ot]
conclusion: com
class: fully-black-box
model: standard
source:
  - "[[Kil88 - Founding cryptography on oblivious transfer|Kil88]]"
security-loss: ""
rationale:
  class: "The construction invokes OT only as an ideal functionality, hiding and binding hold statistically in the OT-hybrid model, and against a real OT protocol the reduction runs any adversary against the composed commitment as an oracle to distinguish real from ideal OT."
---

# OT ⇒ COM

## Statement

[[oblivious-transfer|OT]] implies [[commitment-scheme|COM]] with no further assumption: in the OT-hybrid model there is a bit commitment that is statistically hiding and statistically binding — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]].

## Sketch

A standard construction uses [[oblivious-transfer#rabin-ot|Rabin OT]], equivalent to OT ([[rabin-ot-to-ot|Rabin OT ⇔ OT]]): to commit to $b$, the committer sends uniform bits $r_1, \dots, r_n$ by Rabin OT and then $c = b \oplus r_1 \oplus \cdots \oplus r_n$, and to open it reveals $b$ and every $r_i$, which the receiver checks against the bits it received. The receiver misses some $r_i$, leaving the parity uniform, except with probability $2^{-n}$; opening to $1 - b$ flips an odd number of the $r_i$, and since the committer does not learn which bits arrived, each flipped bit is caught with probability $1/2$. Committing in $\secpar$ independent copies gives hiding error at most $\secpar \cdot 2^{-n}$ and binding error $2^{-\secpar}$ — standard.

## Notes

- The commitment is the first step of Kilian's proof that OT is complete for secure computation ([[ot-to-mpc-kil88|OT ⇒ MPC]]) — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]].
