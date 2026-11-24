---
type: reduction
status: draft
title: "Compression-function PRF ⇒ Length-preserving PRF"
aliases: []
id: red-compression-function-prf-to-length-preserving-prf
kind: implication
hypotheses: [compression-function-prf]
conclusion: length-preserving-prf
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction calls the compression function only as an oracle on padded inputs, and the reduction runs any distinguisher once, padding each of its queries before forwarding it."
---

# Compression-function PRF ⇒ Length-preserving PRF

## Statement

Let $f : \bits^c \times \bits^b \to \bits^c$ be a [[pseudorandom-function#compression-function-prfs|compression-function PRF]], with $c$ and $b$ polynomially bounded and computable from $1^\secpar$ in polynomial time, $c = \omega(\log \secpar)$, $c \le b$ and $\KeyGen(1^\secpar)$ sampling $k \getsr \bits^c$. Restricting its domain to the $0$-padded copy of $\bits^c$,

$$
\Eval(k, x) := f\big(k, x \,\|\, 0^{b-c}\big), \qquad x \in \bits^c,
$$

with the same $\KeyGen$ gives a [[pseudorandom-function#length-preserving-prfs|length-preserving PRF]] with $n := c$, whose key space, domain and range are all $\bits^c$. For every distinguisher $\calA$, the distinguisher $\calB$ that runs $\calA$ and answers each query $x$ with its own oracle on $x \,\|\, 0^{b-c}$ makes as many queries as $\calA$ and has

$$
\Adv^{\mathrm{prf}}_{f,\calB}(\secpar) = \Adv^{\mathrm{prf}}_{\PRF,\calA}(\secpar),
$$

since $x \mapsto x \,\|\, 0^{b-c}$ is injective, so a uniformly random function $\bits^b \to \bits^c$ composed with it is a uniformly random function $\bits^c \to \bits^c$ — folklore. This is the restriction argument of [[pseudorandom-function#syntax|PRF § Syntax]] for the embedding $x \mapsto x \,\|\, 0^{b-c}$.
