---
type: reduction
status: draft
title: "Permuted puzzles ⇒ SK-DEPIR"
aliases: []
id: red-permuted-puzzles-to-depir-bipw17
kind: implication
hypotheses: [bipw17-permuted-puzzles-assumption]
conclusion: sk-depir
class: unstated
model: standard
source:
  - "[[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]]"
security-loss: ""
---

# Permuted puzzles ⇒ SK-DEPIR

[[permuted-puzzles|Permuted puzzles]] implies secret-key [[doubly-efficient-pir#secret-key-depir|DEPIR]].

## Statement

Under the [[permuted-puzzles|permuted-puzzles]] conjecture of BIPW17 — a secretly permuted set of Reed–Muller local-decoding queries is indistinguishable from a uniformly random set of points — there is a secret-key [[doubly-efficient-pir#secret-key-depir|doubly efficient PIR]]: the database is encoded once at polynomial cost, after which the key holder retrieves any bit by reading a sublinear number of encoding positions, and the access pattern hides the index from an observer who sees the encoding but not the key [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]].

## Sketch

The database is encoded as a Reed–Muller codeword — the evaluation table of a low-degree multivariate polynomial — with positions permuted by a secret permutation; to fetch a bit the client reads the positions of a random low-degree curve through the target point and interpolates, so each query is a permuted Reed–Muller decoding set, which the conjecture makes indistinguishable from random positions.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant. BIPW17 argue security directly from a conjecture about the scheme's own query distribution, so there is no reduction separate from the construction to classify.

- The assumption family is formalized and studied as _permuted puzzles_ — [[BHW19 - Permuted Puzzles and Cryptographic Hardness|BHW19]].
- An attack breaks the BIPW17 _toy conjecture_, a simplified variant posed for cryptanalysis, but not the assumption underlying the construction — [[BHMW21 - On the Security of Doubly Efficient PIR|BHMW21]].
