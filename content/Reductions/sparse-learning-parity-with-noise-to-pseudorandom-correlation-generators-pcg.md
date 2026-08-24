---
type: reduction
status: stub
title: "Sparse Learning Parity with Noise ⇒ Pseudorandom correlation generators (PCG)"
aliases: []
id: red-sparse-learning-parity-with-noise-to-pseudorandom-correlation-generators-pcg
kind: implication
hypotheses: [sparse-lpn]
conclusion: pseudorandom-correlation-generator
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Sparse Learning Parity with Noise ⇒ Pseudorandom correlation generators (PCG)

[[learning-parity-with-noise#sparse-learning-parity-with-noise|Sparse Learning Parity with Noise]] implies [[alternating-moduli#pseudorandom-correlation-generators-pcg|Pseudorandom correlation generators (PCG)]].

## Statement

Migrated verbatim from [[learning-parity-with-noise]] § Sparse Learning Parity with Noise:

> Sparse LPN replaces the uniformly random matrix $\mathbf{A}$ with one whose rows are $d$-sparse: each row is sampled uniformly from all binary vectors of Hamming weight exactly $d$. The secret and noise distributions are unchanged. For $d = O(\log k)$, the matrix can be stored and multiplied far more efficiently, making Sparse LPN particularly attractive for pseudorandom correlation generator (PCG) constructions.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation.
- Efficiency motivation (particularly attractive for PCG constructions) rather than a stated reduction.
- pseudorandom-correlation-generator has no page; sparse-lpn has no page either (defined only in this section).
