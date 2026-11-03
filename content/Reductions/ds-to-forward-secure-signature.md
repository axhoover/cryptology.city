---
type: reduction
status: draft
title: "DS ⇔ Forward-secure signature"
aliases: []
id: red-ds-to-forward-secure-signature
kind: equivalence
hypotheses: [ds]
conclusion: forward-secure-signature
class: fully-black-box
model: standard
source: folklore
security-loss: "a factor T from guessing the forgery period, from DS to forward-secure signature; none in the other direction"
rationale:
  class: "Both constructions call the given scheme's algorithms only as oracles, and both reductions run the adversary only as an oracle."
---

# DS ⇔ Forward-secure signature

## Statement

[[digital-signature#existential-unforgeability|EUF-CMA-secure]] [[digital-signature|signature schemes]] exist if and only if, for every polynomially bounded $T = T(\secpar) \ge 2$, [[forward-secure-signature|forward-secure signature]] schemes with $T$ periods exist — folklore. From a signature scheme $\DS = (\KeyGen, \Sign, \Vrfy)$: the key-evolving $\KeyGen(1^\secpar, T)$ samples independent key pairs $(\sk^{(t)}, \vk^{(t)}) \gets \KeyGen(1^\secpar)$ for $t \in [T]$ and outputs $\vk = (\vk^{(1)}, \ldots, \vk^{(T)})$ and $\sk_1 = (\sk^{(1)}, \ldots, \sk^{(T)})$; $\mathsf{Update}$ deletes the first remaining key, so that $\sk_i = (\sk^{(i)}, \ldots, \sk^{(T)})$; period $i$ signs with $\sk^{(i)}$ and verifies with $\vk^{(i)}$. Conversely, the period-$1$ algorithms $\KeyGen(1^\secpar, T)$, $\Sign(\sk_1, 1, \cdot)$ and $\Vrfy(\vk, 1, \cdot, \cdot)$ of a forward-secure scheme with $T \ge 2$ periods form an EUF-CMA-secure signature scheme.

## Sketch

A forward-security adversary that forges for period $j^*$ gives an EUF-CMA forger: guess $j^* \in [T]$, embed the challenge verification key as $\vk^{(j^*)}$, answer period-$j^*$ signing queries with the signing oracle, and at the break-in in period $i > j^*$ hand over $\sk_i$, which contains no key of index $j^*$; the guess is right with probability $1/T$. Conversely, an EUF-CMA forger is run in period $1$, after which the reduction updates once, breaks in during period $2$, and outputs the forger's message and signature for period $1$.

## Notes

- The verification key of this construction grows linearly in $T$. [[BM99 - A Forward-Secure Digital Signature Scheme|BM99]] describe generic constructions from any signature scheme with smaller keys, among them a binary tree of certificates of depth $\log T$; [[Kra00 - Simple Forward-Secure Signatures From Any Signature Scheme|Kra00]] gives another generic construction; [[MMM02 - Efficient Generic Forward-Secure Signatures with an Unbounded Number Of Time Periods|MMM02]] give efficient generic constructions in which $T$ need not be fixed at key generation.
