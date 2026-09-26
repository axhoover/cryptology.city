---
type: reduction
status: stub
title: "Sparse Learning Parity with Noise ⇒ LPN"
aliases: []
id: red-sparse-learning-parity-with-noise-to-lpn
kind: implication
hypotheses: [sparse-lpn]
conclusion: lpn
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Sparse Learning Parity with Noise ⇒ LPN

[[learning-parity-with-noise#sparse-learning-parity-with-noise|Sparse Learning Parity with Noise]] implies [[learning-parity-with-noise|LPN]].

## Statement

Migrated verbatim from [[learning-parity-with-noise]] § Sparse Learning Parity with Noise:

> is negligible. Note that Sparse LPN with $d = k$ reduces to standard LPN, so sparse hardness is a stronger assumption for smaller $d$.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECTED MATHEMATICAL ERROR: with d = k every row of Hamming weight exactly d is the all-ones vector, which is not the uniformly random matrix of standard LPN; the intended statement is presumably about d near k/2 or an asymptotic approximation.
- reduces to is directionally ambiguous as written, and the follow-on (so sparse hardness is a stronger assumption for smaller d) is an unstated second relation.
- No citation.
- Sourcing pass (2026-09), **not fixed**: claim judged incorrect as stated — with rows of Hamming weight exactly $d$ (the page's definition) the clause fails at $d = k$, where every row is all-ones; with weight at most $d$ it is the identity at one degenerate parameter. No reduction turning a standard-LPN solver into a sparse-LPN solver is known, and the edge binds neither $d$ nor the sample count $m$. Only the opposite direction is known, conditionally: either LPN hardness implies sparse-LPN hardness at the same noise rate, or LPN yields new black-box constructions of PKE and OT (Liu, Yan, Yu and Zhao, ProvSec 2017). See [[learning-parity-with-noise#sparse-learning-parity-with-noise]].
