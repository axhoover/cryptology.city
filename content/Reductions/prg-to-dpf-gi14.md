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

## Sketch

In the tree construction of [[BGI15 - Function Secret Sharing|BGI15]], in the form given by [[BGI16 - Function Secret Sharing Improvements and Extensions|BGI16]], $k_b$ holds a root seed and one $O(\secpar)$-bit correction word per level, common to both keys; $\Eval(b, k_b, x)$ walks a binary tree of depth $\log N$ along the bits of $x$, expanding the current seed with the PRG into a seed and a control bit for each child and applying the level's correction word iff the parent's control bit is 1. $\Gen$ chooses the correction words so that the two parties' seeds and control bits coincide at every node off the path to $\alpha$, while on the path the seeds are pseudorandom and the control bits differ; the evaluations therefore cancel at every leaf $x \neq \alpha$, and a final correction word, applied by the party whose control bit at $\alpha$ is 1, makes them XOR to $\beta$ at $\alpha$. Hiding follows by a hybrid over the levels from the root down: the other party's on-path seed enters $k_b$ only through its PRG expansion, and replacing that expansion by a uniform string makes the next correction word uniform and the next on-path seed fresh.
