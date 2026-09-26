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
---

# PRG ⇒ DPF

[[pseudorandom-generator|PRG]] implies [[distributed-point-function|DPF]].

## Statement

A [[pseudorandom-generator|PRG]] yields a two-party [[distributed-point-function|DPF]] for domain $[N]$: each key $k_b$ hides $(\alpha, \beta)$ and the shares $\Eval(b, k_b, \cdot)$ sum to the point function $f_{\alpha,\beta}$, with keys of length $O(\secpar \cdot (\log N)^{\log_2 3})$ — [[GI14 - Distributed Point Functions and Their Applications|GI14]].

## Notes

`class: fully-black-box`: GI14 use the PRG only as an oracle, building the keys recursively with random key portions replaced at each level by PRG seeds expanded at evaluation time; hiding is a hybrid over PRG invocations whose reduction runs the DPF adversary as an oracle. Fixed construction, fixed reduction, as on [[hash-function-to-dpf-gi14]].

- [[BGI15 - Function Secret Sharing|BGI15]] reduce the key length to $O(\secpar \log N)$ with a PRG-based tree construction.
- [[BGI16 - Function Secret Sharing Improvements and Extensions|BGI16]] reduce the key size of the BGI15 scheme by roughly a further factor of 4 and optimize its computational cost.
