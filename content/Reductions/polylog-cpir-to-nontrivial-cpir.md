---
type: reduction
status: draft
title: "PIR with polylogarithmic communication ⇒ Non-trivial cPIR"
aliases: []
id: red-polylog-cpir-to-nontrivial-cpir
kind: implication
hypotheses: [polylog-cpir]
conclusion: nontrivial-cpir
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction runs the scheme unchanged on databases of a fixed large polynomial size, and the reduction forwards any privacy adversary unchanged."
---

# PIR with polylogarithmic communication ⇒ Non-trivial cPIR

## Statement

A [PIR scheme with polylogarithmic communication](single-server-private-information-retrieval#pir-with-polylogarithmic-communication) is [[single-server-private-information-retrieval#non-trivial-pir|non-trivial]]: if its communication is at most $p(\secpar, \log n)$ and its correctness error is a negligible $\varepsilon(\secpar)$, then for $n(\secpar) = \secpar^c$ with $c$ large enough that $p(\secpar, c \log \secpar) < \secpar^c$ for all large $\secpar$, the server sends fewer than $n$ bits and $\varepsilon(\secpar) \le 1/(8n(\secpar))$ for all large $\secpar$ — folklore.

## Notes

- With [[cpir-to-owf-bikm99|BIKM99's theorem]], such schemes imply [[hash-function#preimage-resistance-one-wayness|one-way functions]]; that theorem allows retrieval error up to $1/(8n)$, which a negligible error meets — [[BIKM99 - One-Way Functions Are Essential for Single-Server Private Information Retrieval|BIKM99]].
