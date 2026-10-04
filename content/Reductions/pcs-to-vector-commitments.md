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

A [[polynomial-commitment|PCS]] over $\FF$ for degree bound $n-1$, with $n \le |\FF|$, yields a [[commitment-scheme#vector-commitments|vector commitment]] for $\FF^n$: fix distinct $\omega_1, \dots, \omega_n \in \FF$, commit to $(v_1, \dots, v_n)$ as a commitment to the polynomial $f$ of degree $< n$ with $f(\omega_i) = v_i$, and open position $i$ with an evaluation proof for $f(\omega_i) = v_i$. Position binding follows from [[polynomial-commitment#evaluation-binding|evaluation binding]] at $\omega_i$ — folklore.

## Sketch

Two accepted openings of one commitment at position $i$ to $v \ne v'$ are two accepted evaluation proofs at $\omega_i$ with values $v$ and $v'$ against that commitment, an evaluation-binding break.
