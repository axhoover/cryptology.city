---
type: reduction
status: draft
title: "DS ⇒ IBS (certificates)"
aliases: []
id: red-ds-to-identity-based-signature-bnn04
kind: implication
hypotheses: [ds]
conclusion: identity-based-signature
class: fully-black-box
model: standard
source:
  - "[[BNN04 - Security Proofs for Identity-Based Identification and Signature Schemes|BNN04]]"
security-loss: ""
rationale:
  class: "The construction calls the signature scheme only through its key generation, signing and verification, and the reduction runs any forger once as an oracle, planting the challenge verification key as the master key or as one guessed identity's key."
---

# DS ⇒ IBS (certificates)

## Statement

Let $\DS = (\KeyGen, \Sign, \Vrfy)$ be an [[digital-signature#existential-unforgeability|EUF-CMA]] [[digital-signature|signature scheme]]. The certificate construction sets $(\mpk, \msk) \gets \KeyGen(1^\secpar)$; $\Extract(\msk, \mathit{id})$ samples $(\sk, \vk) \gets \KeyGen(1^\secpar)$ and outputs $(\sk, \vk, c)$ with $c \gets \Sign(\msk, (\mathit{id}, \vk))$; a signature on $m$ is $(\vk, c, \Sign(\sk, m))$; and $(\vk, c, \tau)$ verifies for $(\mathit{id}, m)$ iff $\Vrfy(\mpk, (\mathit{id}, \vk), c) = 1$ and $\Vrfy(\vk, m, \tau) = 1$. It is an [[identity-based-signature#existential-unforgeability|EUF-ID-CMA]]-unforgeable [[identity-based-signature|identity-based signature]] scheme, without random oracles — [[BNN04 - Security Proofs for Identity-Based Identification and Signature Schemes|BNN04]], who note that the construction is folklore.

## Sketch

A forgery $(\mathit{id}^*, m^*, (\vk, c, \tau))$ either certifies a pair $(\mathit{id}^*, \vk)$ that the challenger never certified, a forgery on the master key, or reuses the key certified for $\mathit{id}^*$, whose secret key the adversary never saw, and then $\tau$ is a forgery under $\vk$ on a message that identity never signed. The reduction guesses which case occurs and, in the second, which identity — standard.
