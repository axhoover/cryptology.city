---
type: reduction
status: draft
title: "Same-width SPR hash and PRF ⇒ Compression-function PRF"
aliases: []
id: red-same-width-spr-and-prf-to-compression-function-prf
kind: implication
hypotheses: [same-width-spr-and-prf]
conclusion: compression-function-prf
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction keeps one component of the pair unchanged, and the reduction forwards any adversary against it unchanged."
---

# Same-width SPR hash and PRF ⇒ Compression-function PRF

## Statement

Let $(\hash, f)$ be a [[hash-function#same-width-spr-hash-and-prf|same-width SPR hash and PRF]] of width $n$. Its second component $f : \bits^n \times \bits^b \to \bits^n$, with $n$ and $b$ polynomially bounded and computable from $1^\secpar$ in polynomial time, $n = \omega(\log \secpar)$, $n \le b$ and keys uniform on $\bits^n$, is a [[pseudorandom-function#compression-function-prfs|compression-function PRF]] with $c := n$ and the same advantage $\Adv^{\mathrm{prf}}_{f,\calA}(\secpar)$ for every $\calA$ — folklore.
