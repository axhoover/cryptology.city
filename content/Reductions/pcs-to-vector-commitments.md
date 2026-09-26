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
---

# PCS ⇒ Vector commitments

[[polynomial-commitment|PCS]] implies [[commitment-scheme#vector-commitments|vector commitments]].

## Statement

A [[polynomial-commitment|PCS]] over $\FF$ for degree bound $n-1$, with $n \le |\FF|$, yields a [[commitment-scheme#vector-commitments|vector commitment]] for $\FF^n$: fix distinct $\omega_1, \dots, \omega_n \in \FF$, commit to $(v_1, \dots, v_n)$ as a commitment to the polynomial $f$ of degree $< n$ with $f(\omega_i) = v_i$, and open position $i$ with an evaluation proof for $f(\omega_i) = v_i$. Position binding is evaluation binding at $\omega_i$ — folklore.

## Notes

`class: fully-black-box`: the VC algorithms call the PCS only as an oracle (interpolation over fixed points is public preprocessing), and the reduction runs a position-binding adversary once as an oracle and forwards its two conflicting openings of position $i$ as an evaluation-binding break at $\omega_i$. Fixed construction, fixed reduction.
