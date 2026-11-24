---
type: reduction
status: draft
title: "PCS ⇒ Vector commitments"
aliases: []
id: red-pcs-to-vector-commitments
kind: implication
hypotheses: [pcs]
conclusion: vector-commitment
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: a position-binding adversary is forwarded unchanged as an evaluation-binding adversary"
rationale:
  class: "The vector-commitment algorithms call the PCS only as an oracle after public interpolation over fixed points, and the fixed reduction runs a position-binding adversary once and forwards its two conflicting openings as an evaluation-binding break."
---

# PCS ⇒ Vector commitments

## Statement

A [[polynomial-commitment|PCS]] over $\FF$ for degree bound $n-1$, with $n \le |\FF|$, yields a [[commitment-scheme#vector-commitments|vector commitment]] for $\FF^n$: fix distinct $\omega_1, \dots, \omega_n \in \FF$, commit to $(v_1, \dots, v_n)$ as a commitment to the polynomial $f$ of degree $< n$ with $f(\omega_i) = v_i$, and open position $i$ with an evaluation proof for $f(\omega_i) = v_i$. Position binding follows from [[polynomial-commitment#evaluation-binding|evaluation binding]] at $\omega_i$, perfect correctness from that of the PCS, and conciseness from its succinctness: the commitment is one PCS commitment and an opening is one evaluation proof, each of size at most $p(\secpar, \log n)$, where $p$ is the polynomial in the [[polynomial-commitment#syntax|succinctness]] of the PCS, taken with non-negative coefficients — folklore.

## Sketch

Two accepted openings of one commitment at position $i$ to $v \ne v'$ are two accepted evaluation proofs at $\omega_i$ with values $v$ and $v'$ against that commitment, an evaluation-binding break. Since $p$ is non-decreasing in each argument, $p(\secpar, \log n) \le p(\secpar, \secpar)$ whenever $n \le 2^\secpar$, which holds for every polynomial $n = n(\secpar)$ and all sufficiently large $\secpar$, so $q(\secpar) := p(\secpar, \secpar)$ bounds both sizes independently of $n$.
