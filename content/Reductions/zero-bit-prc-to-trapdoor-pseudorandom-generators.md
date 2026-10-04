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

## Statement

A [[pseudorandom-error-correcting-code#zero-bit-prc|zero-bit PRC]] $(\Gen, \Enc, \Dec)$ is a pseudorandom [[pseudorandom-generator#trapdoor-pseudorandom-generators|trapdoor PRG]] with the PRC key as trapdoor $t$, the encoder's coins as key $k$, $\Eval(t,k)$ running $\Enc_t$ on coins $k$, and $\Invert(t,r) = [\Dec_t(r) \neq \bot]$. It is $(1-\nu)$-complete and $(1-\nu)$-sound for a negligible $\nu$, and if the PRC is $\varepsilon$-robust, $\Pr[\Invert(t, \calE(\Eval(t,k))) = 1] \ge 1 - \nu$ for every $\varepsilon$-bounded channel $\calE$ — folklore.

## Sketch

The trapdoor-PRG oracle $\calO_t$ is exactly $\Enc_t$, so PRC pseudorandomness gives pseudorandomness, and robustness (at zero noise, or against the channel) gives completeness. PRC soundness bounds $\Pr_t[\Dec_t(r) \neq \bot]$ by a negligible $\nu$ for every fixed $r$, hence also for $r \getsr \calR$.
