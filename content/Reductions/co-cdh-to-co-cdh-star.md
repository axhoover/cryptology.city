---
type: reduction
status: draft
title: "co-CDH ⇒ co-CDH without an isomorphism"
aliases: []
id: red-co-cdh-to-co-cdh-star
kind: implication
hypotheses: [co-cdh]
conclusion: co-cdh-star
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction outputs the group pair with $g_1 = \\psi(g_2)$, and the reduction maps each co-CDH instance to an instance of the other form with the same answer, calling any solver once as an oracle."
---

# co-CDH ⇒ co-CDH without an isomorphism

## Statement

Let $\GrGen$ output a bilinear group pair with an efficiently computable isomorphism $\psi : \GG_2 \to \GG_1$ for which [[co-computational-diffie-hellman|co-CDH]] is hard, and let $\GrGen'$ output the same pair with the generator $g_1 = \psi(g_2)$ of $\GG_1$. Then [co-CDH without an isomorphism](co-computational-diffie-hellman#without-an-isomorphism) is hard for $\GrGen'$, with the same advantage — folklore.

## Sketch

The map $(g_2, g_2^a, h) \mapsto (h, \psi(g_2^a), g_2^a)$ sends a uniform co-CDH instance to a uniform instance $(g_1^{\alpha}, g_1^{\beta}, g_2^{\beta})$ with $g_1^{\alpha} = h$ and $\beta = a$, whose answer $g_1^{\alpha\beta}$ is $h^a$.
