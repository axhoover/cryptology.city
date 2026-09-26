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
---

# IPPE ⇒ Payload-only hiding

[[inner-product-predicate-encryption|IPPE]] implies [[inner-product-predicate-encryption#payload-only-hiding|Payload-only hiding]].

## Statement

An attribute-hiding [[inner-product-predicate-encryption|IPPE]] scheme is [[inner-product-predicate-encryption#payload-only-hiding|payload-hiding]]: a payload-hiding adversary with challenge $(x^*, m_0), (x^*, m_1)$ is an admissible attribute-hiding adversary with $x_0 = x_1 = x^*$, since $\langle v, x_0 \rangle = 0 \Leftrightarrow \langle v, x_1 \rangle = 0$ holds for every $v$ — folklore.

## Sketch

The payload-hiding game is the attribute-hiding game restricted to challenges with equal attribute vectors; the reduction is the identity on scheme and adversary and preserves the advantage exactly.

## Notes

`class: fully-black-box`: identity construction; the reduction forwards a payload-hiding adversary unchanged into the attribute-hiding game with $x_0 = x_1 = x^*$, treating scheme and adversary as oracles.

- Payload-hiding and attribute-hiding are defined in [[KSW08 - Predicate Encryption Supporting Disjunctions Polynomial Equations and Inner Products|KSW08]].
