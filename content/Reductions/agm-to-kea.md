---
type: reduction
status: draft
title: "AGM ⇒ KEA"
aliases: []
id: red-agm-to-kea
kind: implication
hypotheses: [agm]
conclusion: kea
class: free
model: algebraic-group
source:
  - "[[FKL18 - The Algebraic Group Model and its Applications|FKL18]]"
security-loss: ""
---

# AGM ⇒ KEA

[[algebraic-group-model|AGM]] implies the classical [[knowledge-of-exponent|KEA]].

## Statement

In the [[algebraic-group-model|AGM]] the classical [[knowledge-of-exponent|KEA]] holds unconditionally: an algebraic adversary that, given $(g, g^\alpha)$, outputs $(A, B)$ with $B = A^\alpha$ also outputs representations $A = g^{c_1}(g^\alpha)^{c_2}$ and $B = g^{y_1}(g^\alpha)^{y_2}$, and an efficient extractor recovers $r$ with $A = g^r$ from them; the knowledge KEA postulates is part of the model's definition — [[FKL18 - The Algebraic Group Model and its Applications|FKL18]].

## Sketch

If $c_2 = 0$ the extractor outputs $c_1$. Otherwise $B = A^\alpha$ forces $c_2\alpha^2 + (c_1 - y_2)\alpha - y_1 = 0$ in $\ZZ_q$, a nonzero quadratic; the extractor computes its roots, identifies $\alpha$ by comparing with $g^\alpha$, and outputs $c_1 + c_2\alpha$.

## Notes

`class: free`: The hypothesis is a computational model, not a primitive, so the black-box classes do not apply; the extractor is built from the representation every algebraic adversary must output, with no hardness assumption.

`model: algebraic-group`: The extraction holds only for algebraic adversaries; nothing is claimed in the standard model.
