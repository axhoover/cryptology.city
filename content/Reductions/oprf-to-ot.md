---
type: reduction
status: draft
title: "OPRF ⇒ OT"
aliases: []
id: red-oprf-to-ot
kind: implication
hypotheses: [oprf]
conclusion: ot
class: unstated
model: standard
source: folklore
security-loss: ""
---

# OPRF ⇒ OT

## Statement

Let $(\PRF, \Pi)$ be a [[oblivious-prf#semi-honest-security|semi-honest secure]] [[oblivious-prf|OPRF]], $\PRF = (\KeyGen, \Eval)$, whose domain contains two distinct points $z_0, z_1$ and whose range $\calR$ is a finite group, written additively. The following is a 1-out-of-2 [[oblivious-transfer|OT]] with message space $\calR$, with the reference string of $\Pi$, that has [[oblivious-transfer#sender-privacy|sender privacy]] and [[oblivious-transfer#receiver-privacy|receiver privacy]]: on inputs $(x_0, x_1)$ and $c$, the sender samples $k \gets \KeyGen(1^\secpar)$, the parties run $\Pi$ with server input $k$ and client input $z_c$, the sender sends $(x_0 + \Eval(k, z_0), x_1 + \Eval(k, z_1))$, and the receiver subtracts its OPRF output from the $c$-th entry — folklore.

## Sketch

A $(1-\varepsilon)$-correct OPRF gives a $(1-\varepsilon)$-correct OT. The sender's view consists of its OPRF view, which the OPRF simulator produces from $k$ alone, and its own message, so it is independent of $c$ up to the OPRF advantage. The receiver's OPRF view and the reference string can be replaced by the simulator's output on $(z_c, \Eval(k, z_c))$; then $\Eval(k, z_{1-c})$ is pseudorandom given $\Eval(k, z_c)$ by PRF security for $k \gets \KeyGen(1^\secpar)$, and masks $x_{1-c}$ as a one-time pad — standard.

## Notes

- Conversely, semi-honest 2PC and a PRF give a semi-honest secure OPRF ([[semi-honest-two-party-computation-and-prf-to-oprf|semi-honest 2PC + PRF ⇒ OPRF]]) — folklore.
