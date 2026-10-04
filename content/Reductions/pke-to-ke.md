---
type: reduction
status: draft
title: "PKE ⇒ KE"
aliases: []
id: red-pke-to-ke
kind: implication
hypotheses: [pke]
conclusion: ke
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the eavesdropper's advantage equals the CPA advantage"
rationale:
  class: "The protocol runs KeyGen and Enc only as oracles, and the fixed reduction embeds its CPA challenge as the transcript and runs any eavesdropper on it as an oracle."
---

# PKE ⇒ KE

## Statement

Let $\PKE = (\KeyGen, \Enc, \Dec)$ be a [[public-key-encryption#cpa-security|CPA-secure]] [[public-key-encryption|PKE]] scheme with $\calK \subseteq \calM$. The two-message protocol in which $B$ sends $\pk$ for $(\sk, \pk) \gets \KeyGen(1^\secpar)$, $A$ replies with $c \gets \Enc(\pk, k)$ for $k \getsr \calK$ and outputs $k$, and $B$ outputs $\Dec(\sk, c)$, is a [[key-exchange|key exchange]] secure against eavesdroppers — folklore.

## Sketch

The reduction submits independent uniform $k_0, k_1 \getsr \calK$ as its CPA challenge pair, presents $(\pk, c^*)$ as the transcript with $k_0$ as the candidate key, and outputs $0$ iff the eavesdropper declares $k_0$ real: when $c^*$ encrypts $k_1$, $k_0$ is independent of the transcript.
