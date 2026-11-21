---
type: reduction
status: draft
title: "DS ⇒ Selectively unforgeable DS"
aliases: []
id: red-ds-to-selective-ds
kind: implication
hypotheses: [ds]
conclusion: selective-ds
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on schemes with a key-independent message space and otherwise the two-message restriction, built from the scheme's algorithms called as oracles, and the reduction runs the selective forger as an EUF-CMA forger."
---

# DS ⇒ Selectively unforgeable DS

## Statement

Let $\DS = (\KeyGen, \Sign, \Vrfy)$ be an [[digital-signature#existential-unforgeability|EUF-CMA-unforgeable]] [[digital-signature|signature scheme]]. If its message space $\calM_\secpar$ depends on $\secpar$ only, $\DS$ itself is [[digital-signature#selective-unforgeability|selectively unforgeable]]. Otherwise the message space contains two distinct messages $m_0(\vk) \ne m_1(\vk)$ that an efficient algorithm computes from $\vk$. The restriction with $\sk' = (\sk, \vk)$, $\Sign'(\sk', b) = \Sign(\sk, m_b(\vk))$ and $\Vrfy'(\vk, b, \sigma) = \Vrfy(\vk, m_b(\vk), \sigma)$ has message space $\calM'_\secpar = \bits$. It is $(1-\negl(\secpar))$-correct, since $\DS$ is correct for the messages so computed, and EUF-CMA-unforgeable: a forgery on an unqueried $b$ is a forgery for $\DS$ on $m_b(\vk)$, which was never queried because $m_{1-b}(\vk) \ne m_b(\vk)$. In either case selective unforgeability follows with the same advantage for every forger — standard.

## Sketch

An EUF-CMA forger runs the selective forger, which fixes its target message $m^* \in \calM_\secpar$ before receiving $\vk$, forwards its signing queries, none of which is $m^*$, and outputs $m^*$ with the forger's signature.
