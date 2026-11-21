---
type: reduction
status: draft
title: "VRF ⇒ PRF"
aliases: []
id: red-verifiable-random-function-to-prf
kind: implication
hypotheses: [verifiable-random-function]
conclusion: prf
class: fully-black-box
model: standard
source: folklore
security-loss: "a factor q for q distinct queries"
rationale:
  class: "The construction keeps the VRF's key generation and evaluation, forgetting the public key and the proofs, and the reduction runs the PRF distinguisher once as a black box inside a VRF adversary."
---

# VRF ⇒ PRF

## Statement

If $\mathsf{VRF} = (\KeyGen, \Eval, \Vrfy)$ is a [[verifiable-random-function|VRF]] with input space $\calX$ and output space $\calY$, then $\PRF = (\KeyGen', \Eval')$ with $\KeyGen'(1^\secpar)$ running $\KeyGen(1^\secpar)$ and outputting $\sk$, and $\Eval'(\sk, x)$ the value $y$ of $(y, \pi) = \Eval(\sk, x)$, is a [[pseudorandom-function|PRF]] $\calX \to \calY$: for every efficient $\calA$ making $q$ distinct queries there is an efficient admissible $\calB$ with $\Adv^{\mathrm{prf}}_{\PRF,\calA}(\secpar) \le q \cdot \Adv^{\mathrm{vrf}}_{\mathsf{VRF},\calB}(\secpar)$ — standard.

## Sketch

Hybrid $H_i$ answers the first $i$ distinct queries of $\calA$ with fresh uniform values from $\calY$, using its efficient sampler, and later queries with $\Eval'(\sk, \cdot)$, so $H_0$ is the real game and $H_q$ the random function. $\calB$ picks $i$ at random, answers the first $i$ distinct queries uniformly, submits query $i + 1$ as its challenge $x^*$, which it has not queried to $\calO$, returns $y_b$, and answers later queries through $\calO$: world 0 is $H_i$ and world 1 is $H_{i+1}$.
