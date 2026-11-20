---
type: reduction
status: draft
title: One-round sublinear cPIR ⇒ cPIR with total communication below n
aliases: []
id: red-one-round-sublinear-cpir-to-total-nontrivial-cpir
kind: implication
hypotheses: [one-round-sublinear-cpir]
conclusion: total-nontrivial-cpir
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction runs the scheme on databases of a fixed polynomial size with the query and the answer each prefixed by its length, and the reduction prefixes the query it receives in the same way and forwards it to any privacy adversary, run only as an oracle."
---

# One-round sublinear cPIR ⇒ cPIR with total communication below n

## Statement

A [[single-server-private-information-retrieval#one-round-sublinear-pir|one-round sublinear]] PIR scheme with $|q| + |a| \le p(\secpar) \cdot n^c$ for a polynomial $p$ and a constant $c < 1$ gives a scheme with [total communication below $n$](single-server-private-information-retrieval#pir-with-total-communication-below-n). The scheme does not fix its message lengths, so prefix $q$ and $a$ each with its length in $\lceil \log_2(p(\secpar) \cdot n^c + 1) \rceil$ bits, which makes the set of possible messages prefix-free and fixed by $(\secpar, n)$ and leaves perfect correctness, query privacy and the deterministic $\Answer$ unchanged. The total is then at most $p(\secpar) \cdot n^c + 2\lceil \log_2(p(\secpar) \cdot n^c + 1) \rceil < n$ on databases of $n(\secpar) = \max(64, \lceil (2p(\secpar))^{1/(1-c)} \rceil + 1)$ bits, a polynomial size: there $p(\secpar) \cdot n^c < n/2$ and $2\lceil \log_2(n + 1) \rceil < n/2$ — standard.
