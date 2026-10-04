---
type: reduction
status: draft
title: "PRG ⇒ DPF"
aliases: []
id: red-prg-to-dpf-gi14
kind: implication
hypotheses: [prg]
conclusion: dpf
class: fully-black-box
model: standard
source:
  - "[[GI14 - Distributed Point Functions and Their Applications|GI14]]"
security-loss: ""
rationale:
  class: "GI14 use the PRG only as an oracle, replacing random key portions at each recursion level by seeds expanded at evaluation time, and prove hiding by a hybrid over PRG invocations that runs the DPF adversary only as an oracle."
---

# PRG ⇒ DPF

## Statement

If a [[pseudorandom-generator|PRG]] with seed length $\secpar$ exists, there is a two-party [[distributed-point-function|DPF]] for domain $[N]$ with keys of length $O(\secpar \cdot (\log N)^{\log_2 3})$: the shares satisfy $\Eval(0, k_0, x) \oplus \Eval(1, k_1, x) = f_{\alpha,\beta}(x)$ for all $x \in [N]$, and the scheme is [[distributed-point-function#hiding-security|hiding]] — [[GI14 - Distributed Point Functions and Their Applications|GI14]]. [[BGI15 - Function Secret Sharing|BGI15]] reduce the key length to $O(\secpar \log N)$ with a PRG-based tree construction, and [[BGI16 - Function Secret Sharing Improvements and Extensions|BGI16]] shrink those keys by roughly a further factor of 4 and reduce the computational cost.
