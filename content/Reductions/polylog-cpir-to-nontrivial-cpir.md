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
  class: "The construction runs the scheme on databases of a fixed large polynomial size with each message prefixed by its length, and the reduction prefixes the query it receives in the same way and forwards it to any privacy adversary, run only as an oracle."
---

# PIR with polylogarithmic communication ⇒ Non-trivial cPIR

## Statement

A [PIR scheme with polylogarithmic communication](single-server-private-information-retrieval#pir-with-polylogarithmic-communication) gives a [[single-server-private-information-retrieval#non-trivial-pir|non-trivial]] one. Let its communication be at most $p(\secpar, \log n)$ and its correctness error a negligible $\varepsilon(\secpar)$. The scheme does not fix its message lengths, so run it with each message prefixed by its length in $\lceil \log_2(p(\secpar, \log n) + 1) \rceil$ bits, which makes the set of possible messages prefix-free and fixed by $(\secpar, n)$; correctness and query privacy are unchanged. For $n(\secpar) = \secpar^c$ with $c$ large enough that $p(\secpar, c \log \secpar) + \lceil \log_2(p(\secpar, c \log \secpar) + 1) \rceil < \secpar^c$ for all large $\secpar$, the server then sends fewer than $n$ bits and $\varepsilon(\secpar) \le 1/(8n(\secpar))$ for all large $\secpar$ — standard.

## Notes

- With [[cpir-to-owf-bikm99|BIKM99's theorem]], such schemes imply [[hash-function#preimage-resistance-one-wayness|one-way functions]]; that theorem allows retrieval error up to $1/(8n)$, which a negligible error meets — [[BIKM99 - One-Way Functions Are Essential for Single-Server Private Information Retrieval|BIKM99]].
