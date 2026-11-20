---
type: reduction
status: draft
title: "IPPE on nonzero vectors ⇒ IPPE"
aliases: []
id: red-nonzero-vector-ippe-to-ippe
kind: implication
hypotheses: [nonzero-vector-ippe]
conclusion: ippe
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "One fixed construction calls the nonzero-vector scheme once per algorithm on padded vectors, and one fixed reduction runs any attribute-hiding adversary as an oracle, padding its queries."
---

# IPPE on nonzero vectors ⇒ IPPE

## Statement

Let $\mathsf{IPPE}'$ be an [[inner-product-predicate-encryption#nonzero-predicate-and-attribute-vectors|IPPE scheme on nonzero vectors]]. Define an [[inner-product-predicate-encryption|IPPE]] scheme of dimension $n$ by running $\mathsf{IPPE}'$ in dimension $n + 2$ on the padded vectors $\hat x := (x, 1, 0)$ and $\hat v := (v, 0, 1)$: $\Setup(1^\secpar, 1^n) := \Setup'(1^\secpar, 1^{n+2})$, $\KeyGen(\msk, v) := \KeyGen'(\msk, \hat v)$, $\Enc(\pp, x, m) := \Enc'(\pp, \hat x, m)$ and $\Dec := \Dec'$. Every padded vector is nonzero and $\langle \hat v, \hat x \rangle = \langle v, x \rangle$, so the scheme has the correctness error, message space and attribute-hiding advantage of $\mathsf{IPPE}'$, for every $v, x \in \ZZ_p^n$ including $0$ — folklore.

## Sketch

The reduction pads the attribute-hiding adversary's challenge attributes and key queries and forwards everything else. Padding preserves every inner product, so admissibility (each queried $v$ has $\langle v, x_0 \rangle = 0$ iff $\langle v, x_1 \rangle = 0$, with the message condition when it does) carries over, and the padded queries are nonzero, as the nonzero-vector game requires.
