---
type: reduction
status: draft
title: "Zero-bit PRC ⇒ Trapdoor pseudorandom generators"
aliases: []
id: red-zero-bit-prc-to-trapdoor-pseudorandom-generators
kind: implication
hypotheses: [zero-bit-prc]
conclusion: trapdoor-pseudorandom-generator
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the pseudorandomness advantage is preserved"
rationale:
  class: "The trapdoor PRG runs the PRC's key generator, its encoder on the caller's coins and its decoder only as oracles, and the identity reduction runs any distinguisher only as an oracle."
---

# Zero-bit PRC ⇒ Trapdoor pseudorandom generators

## Statement

A [[pseudorandom-error-correcting-code#zero-bit-prc|zero-bit PRC]] $(\Gen, \Enc, \Dec)$ is a pseudorandom [[pseudorandom-generator#trapdoor-pseudorandom-generators|trapdoor PRG]] with the PRC key as trapdoor $\td$, the encoder's coins as key $k$, $\Eval(\td,k)$ running $\Enc_{\td}$ on coins $k$, and $\Invert(\td,r) = [\Dec_{\td}(r) \neq \bot]$. It is $(1-\nu)$-complete and $(1-\nu)$-sound for a negligible $\nu$, and if the PRC is $\varepsilon$-robust, then for every $\varepsilon$-bounded channel $\calE$ there is a negligible $\nu_{\calE}$ with $\Pr[\Invert(\td, \calE(\Eval(\td,k))) = 1] \ge 1 - \nu_{\calE}$ — folklore.

## Sketch

The trapdoor-PRG oracle $\calO_{\td}$ is exactly $\Enc_{\td}$, so PRC pseudorandomness gives pseudorandomness, and robustness (at zero noise, or against the channel) gives completeness. PRC soundness bounds $\Pr_{\td}[\Dec_{\td}(r) \neq \bot]$ by a negligible $\nu$ for every fixed $r$, hence also for $r \getsr \calR$.
