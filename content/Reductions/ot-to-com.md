---
type: reduction
status: draft
title: "Malicious OT ⇒ COM (Kilian)"
aliases: []
id: red-ot-to-com
kind: implication
hypotheses: [malicious-ot-security]
conclusion: com
class: fully-black-box
model: standard
source:
  - "[[Kil88 - Founding cryptography on oblivious transfer|Kil88]]"
security-loss: "statistical in the OT-hybrid model: hiding error at most $\\secpar \\cdot 2^{-n}$ and binding error $2^{-\\secpar}$; a real OT protocol adds its simulation advantage once per transfer, $n\\secpar$ transfers in all"
rationale:
  class: "The construction invokes OT only as an ideal functionality, hiding and binding hold statistically in the OT-hybrid model, and against a maliciously secure OT protocol the reduction runs any adversary against the composed commitment as an oracle to distinguish real from ideal OT."
---

# Malicious OT ⇒ COM (Kilian)

## Statement

In the OT-hybrid model, where the committer and the receiver may call an [[oblivious-transfer#ideal-ot-functionality|ideal OT functionality]], there is a bit [[commitment-scheme|commitment]] that is statistically hiding and statistically binding, with no complexity assumption — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]]. Running each call as a sequential execution of an OT protocol with [[oblivious-transfer#malicious-security|malicious security]] gives a computationally hiding and binding commitment, since each ideal call can be replaced by a real execution in turn — standard.

## Sketch

To commit to $b$, the committer sends uniform bits $r_1, \dots, r_n$ by [[oblivious-transfer#rabin-ot|Rabin OT]], equivalent to OT ([[rabin-ot-to-ot|Rabin OT ⇔ OT]]), and then $c = b \oplus r_1 \oplus \cdots \oplus r_n$; to open, it reveals $b$ and every $r_i$, which the receiver checks against the bits it received. Hiding holds because the receiver misses some $r_i$, leaving the parity uniform, except with probability $2^{-n}$; binding holds because opening to $1 - b$ flips an odd number of the $r_i$, and each flipped bit is caught with probability $1/2$ since the committer does not learn which bits arrived. Committing in $\secpar$ independent copies gives hiding error at most $\secpar \cdot 2^{-n}$ and binding error $2^{-\secpar}$ — standard.

## Notes

- Binding uses that a deviating committer cannot learn which bits arrived, and hiding that a deviating receiver cannot learn the bits it missed, so the argument needs malicious security; the semi-honest sender- and receiver-privacy games say nothing about deviating parties — standard. Semi-honest OT gives maliciously secure OT ([[ot-to-malicious-ot-security-hai08|OT ⇒ malicious OT]]) — [[Hai08 - Semi-honest to Malicious Oblivious Transfer - The Black-Box Way|Hai08]].
- The commitment is the first step of Kilian's proof that OT is complete for secure computation ([[ot-to-mpc-kil88|ideal OT ⇒ 2PC]]) — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]].
