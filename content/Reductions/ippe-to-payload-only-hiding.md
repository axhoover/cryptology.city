---
type: reduction
status: draft
title: "IPPE ⇒ Payload-only hiding"
aliases: []
id: red-ippe-to-payload-only-hiding
kind: implication
hypotheses: [ippe]
conclusion: payload-hiding-ippe
class: fully-black-box
model: standard
source: folklore
security-loss: "tight (advantage preserved exactly)"
rationale:
  class: "The construction is the identity, and the reduction forwards any payload-hiding adversary unchanged into the attribute-hiding game, using scheme and adversary only as oracles."
---

# IPPE ⇒ Payload-only hiding

## Statement

Every [[inner-product-predicate-encryption#full-attribute-hiding-security|attribute-hiding]] [[inner-product-predicate-encryption|IPPE]] scheme is [[inner-product-predicate-encryption#payload-only-hiding|payload-hiding]]: for every efficient payload-hiding adversary there is an efficient attribute-hiding adversary with the same advantage — folklore.

## Sketch

A payload-hiding adversary with challenge $(x^*, m_0), (x^*, m_1)$ is an admissible attribute-hiding adversary with $x_0 = x_1 = x^*$: $\langle v, x_0 \rangle = 0 \Leftrightarrow \langle v, x_1 \rangle = 0$ holds for every $v$, and the condition on messages is vacuous because no queried $v$ has $\langle v, x^* \rangle = 0$. The two games then coincide.

## Notes

- Payload-hiding and attribute-hiding are defined in [[KSW08 - Predicate Encryption Supporting Disjunctions Polynomial Equations and Inner Products|KSW08]].
