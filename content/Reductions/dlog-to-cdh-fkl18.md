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
rationale:
  model: "The reduction reads the representation that an algebraic adversary outputs with its answer, so it applies only to algebraic adversaries."
---

# DLOG ⇒ CDH

## Statement

In the [[algebraic-group-model|algebraic group model]], [[computational-diffie-hellman|CDH]] is as hard as [[discrete-logarithm|DLOG]]: for every prime-order group generator $\GrGen$ and every algebraic CDH adversary $\calA$ there is a DLOG adversary $\calB$ with $\Adv^{\text{dl}}_{\GrGen,\calB}(\secpar) \ge \Adv^{\text{cdh}}_{\GrGen,\calA}(\secpar)$ and essentially the running time of $\calA$ — [[FKL18 - The Algebraic Group Model and its Applications|FKL18]].

## Sketch

The reduction rerandomizes a DLOG challenge $Z = g^z$ into a CDH instance $(X, Y)$ whose exponents are known affine functions of $z$. The adversary's answer comes with coefficients expressing it as a product of powers of $g$, $X$ and $Y$, so a correct answer gives a quadratic equation in $z$ over $\ZZ_p$ with nonzero leading coefficient, whose at most two roots the reduction computes and checks against $Z$.

## Notes

- The converse, [[cdh-to-dlog|CDH ⇒ DLOG]], holds in the standard model, so CDH and DLOG are equivalent against algebraic adversaries — [[FKL18 - The Algebraic Group Model and its Applications|FKL18]].
