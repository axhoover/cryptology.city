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
---

# PKE ⇒ KE

[[public-key-encryption|PKE]] implies [[key-exchange|KE]].

## Statement

Any CPA-secure [[public-key-encryption|PKE]] yields a two-message [[key-exchange|KE]] protocol secure against eavesdroppers: $B$ sends $\pk$ from $(\sk, \pk) \gets \KeyGen(1^\secpar)$, $A$ replies with $c \gets \Enc(\pk, k)$ for $k \getsr \calK \subseteq \calM$ and outputs $k$, and $B$ outputs $\Dec(\sk, c)$. Indistinguishability of $k$ from uniform given $(\pk, c)$ is CPA security for a uniform message — folklore.

## Sketch

The reduction submits two independent uniform keys $k_0, k_1$ as its CPA challenge, presents $(\pk, c^*)$ as the transcript with $k_0$ as the candidate key, and outputs $0$ iff the eavesdropper declares $k_0$ real: when $c^*$ encrypts $k_1$, $k_0$ is independent of the transcript.

## Notes

`class: fully-black-box`: the protocol runs $\KeyGen$ and $\Enc$ as oracles; the reduction embeds its CPA challenge $(\pk, c^*)$ as the transcript and runs any eavesdropper on it as an oracle, turning a key-vs-uniform distinguisher into a CPA distinguisher with the same advantage. Fixed construction, fixed reduction.
