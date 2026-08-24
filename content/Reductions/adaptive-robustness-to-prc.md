---
type: reduction
status: stub
title: "Adaptive robustness ⇒ PRC"
aliases: []
id: red-adaptive-robustness-to-prc
kind: implication
hypotheses: [adaptively-robust-prc]
conclusion: prc
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Adaptive robustness ⇒ PRC

[[pseudorandom-error-correcting-code#adaptive-robustness|Adaptive robustness]] implies [[pseudorandom-error-correcting-code|PRC]].

## Statement

Migrated verbatim from [[pseudorandom-error-correcting-code]] § Adaptive robustness:

> A PRC with **adaptive robustness** strengthens the robustness property to allow the channel $\calE$ to be chosen _after_ seeing the codeword $c = \Enc_k(m)$, rather than being fixed in advance. Formally, the adversarial channel $\calE$ may depend on $c$ (but not on $k$ or $m$ directly). This models a stronger adversary who can tailor the corruption pattern to the specific codeword.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Variant strengthening stated only in prose ('strengthens the robustness property'); no implication or separation is explicitly asserted, and there is no citation.
- 'adaptively-robust-prc' has no page.
