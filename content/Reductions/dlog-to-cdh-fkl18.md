---
type: reduction
status: draft
title: "DLOG ⇒ CDH"
aliases: []
id: red-dlog-to-cdh-fkl18
kind: implication
hypotheses: [dlog]
conclusion: cdh
class: unstated
model: algebraic-group
source:
  - "[[FKL18 - The Algebraic Group Model and its Applications|FKL18]]"
security-loss: "tight: same advantage and essentially the same running time (FKL18)"
---

# DLOG ⇒ CDH

In the [[algebraic-group-model|algebraic group model]], [[discrete-logarithm|DLOG]] implies [[computational-diffie-hellman|CDH]].

## Statement

In the [[algebraic-group-model|algebraic group model]], [[computational-diffie-hellman|CDH]] is as hard as [[discrete-logarithm|DLOG]]: every algebraic CDH adversary converts into a DLOG solver with the same advantage and essentially the same running time — [[FKL18 - The Algebraic Group Model and its Applications|FKL18]].

## Sketch

The reduction rerandomizes a DLOG challenge $Z = g^z$ in a prime-order group into a CDH instance $(X, Y)$ whose exponents are known affine functions of $z$. The adversary returns its answer with coefficients expressing it as a product of powers of $g$, $X$, and $Y$; a correct answer then satisfies a quadratic equation in $z$ over $\ZZ_p$ with nonzero leading coefficient, whose at most two roots the reduction computes and checks against $Z$.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: algebraic-group`: Load-bearing; the reduction applies only to algebraic adversaries.
