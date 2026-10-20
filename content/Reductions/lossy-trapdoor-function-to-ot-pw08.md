---
type: reduction
status: draft
title: Lossy TDF ⇒ OT
aliases: []
id: red-lossy-trapdoor-function-to-ot-pw08
kind: implication
hypotheses: [lossy-trapdoor-function]
conclusion: ot
class: fully-black-box
model: standard
source:
  - "[[PW08 - Lossy trapdoor functions and their applications|PW08]]"
security-loss: "receiver privacy: at most twice the mode-indistinguishability advantage, by two hybrids through a pair of injective indices; sender privacy is statistical, up to a leftover-hash term"
rationale:
  class: "The protocol calls the lossy TDF's sampling, evaluation and inversion algorithms only as oracles, receiver privacy forwards any sender distinguisher to the mode distinguisher, and sender privacy is statistical."
---

# Lossy TDF ⇒ OT

## Statement

[[trapdoor-permutation#lossy-trapdoor-functions|Lossy trapdoor functions]] yield bit [[oblivious-transfer|oblivious transfer]] secure against semi-honest adversaries — [[PW08 - Lossy trapdoor functions and their applications|PW08]]. The receiver with choice bit $c$ sends an injective-mode index $s_c$, keeping its trapdoor, and a lossy-mode index $s_{1-c}$, and the sender encrypts $x_j$ under $s_j$ with PW08's IND-CPA scheme $(f_{s_j}(u_j), h(u_j) \oplus x_j)$ for uniform $u_j$ and a pairwise-independent $h$.

## Sketch

Mode indistinguishability hides $c$ from the sender. In the lossy mode $u_{1-c}$ keeps min-entropy $k = \omega(\log \secpar)$ given $f_{s_{1-c}}(u_{1-c})$, so by the leftover hash lemma $h(u_{1-c})$ is statistically close to a uniform bit and hides $x_{1-c}$ from the receiver.

## Notes

- Combined with [[ddh-to-lossy-trapdoor-function-pw08|DDH ⇒ lossy TDF]] and [[lwe-to-lossy-trapdoor-function-pw08|LWE ⇒ lossy TDF]], this gives OT from DDH and from lattice assumptions — [[PW08 - Lossy trapdoor functions and their applications|PW08]].
