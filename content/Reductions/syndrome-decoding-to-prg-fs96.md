---
type: reduction
status: draft
title: "SD at the FS96 parameters ⇒ PRG"
aliases: []
id: red-syndrome-decoding-to-prg-fs96
kind: implication
hypotheses: [fs96-syndrome-decoding]
conclusion: prg
class: unstated
model: standard
source:
  - "[[FS96 - An Efficient Pseudo-Random Generator Provably as Secure as Syndrome Decoding|FS96]]"
security-loss: ""
---

# SD at the FS96 parameters ⇒ PRG

## Statement

If [[syndrome-decoding|syndrome decoding]] is hard [[syndrome-decoding#syndrome-decoding-at-the-fs96-parameters|at the FS96 parameters]] $(n, k, w)$, there is a [[pseudorandom-generator|PRG]] as secure as syndrome decoding at those parameters, each application of which yields a linear number of output bits in quadratic time — [[FS96 - An Efficient Pseudo-Random Generator Provably as Secure as Syndrome Decoding|FS96]].

## Notes

- A generator mapping a seed $(\mathbf{H}, \mathbf{x})$, with $\mathbf{x}$ of weight $w$ encoded in $\lceil \log_2 \binom{n}{w} \rceil$ bits, to $(\mathbf{H}, \mathbf{H}\mathbf{x})$ stretches only if $n - k > \lceil \log_2 \binom{n}{w} \rceil$, below the Gilbert–Varshamov bound, where, except with probability at most $\binom{n}{w} 2^{-(n-k)}$ over $\mathbf{H}$, $\mathbf{x}$ is the unique weight-$w$ preimage of $\mathbf{H}\mathbf{x}$ — standard.
