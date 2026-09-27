---
type: reduction
status: draft
title: "Zero-bit PRC ⇒ Trapdoor pseudorandom generators"
aliases: []
id: red-zero-bit-prc-to-trapdoor-pseudorandom-generators
kind: implication
hypotheses: [zero-bit-prc]
conclusion: trapdoor-pseudorandom-generator
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Zero-bit PRC ⇒ Trapdoor pseudorandom generators

[[pseudorandom-error-correcting-code#zero-bit-prc|Zero-bit PRC]] implies [[pseudorandom-generator#trapdoor-pseudorandom-generators|trapdoor pseudorandom generators]].

## Statement

A zero-bit [[pseudorandom-error-correcting-code#zero-bit-prc|PRC]] $(\Gen, \Enc, \Dec)$ is a [[pseudorandom-generator#trapdoor-pseudorandom-generators|trapdoor pseudorandom generator]] with the PRC key as trapdoor $t$ and the encoder's coins as key $k$: $\Eval(t,k)$ runs $\Enc_t$ on coins $k$ and $\Invert(t,r) = [\Dec_t(r) \neq \bot]$. PRC pseudorandomness gives pseudorandomness, robustness at zero noise gives completeness, and PRC soundness, which makes $\Pr_t[\Dec_t(r) \neq \bot]$ negligible for every fixed $r$, gives soundness after averaging over $r \getsr \calR$. PRC robustness makes completeness survive any $\varepsilon$-bounded channel — folklore.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.
