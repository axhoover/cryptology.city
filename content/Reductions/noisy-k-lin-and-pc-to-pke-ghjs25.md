---
type: reduction
status: draft
title: "Noisy k-LIN + PC ⇒ PKE"
aliases: []
id: red-noisy-k-lin-and-pc-to-pke-ghjs25
kind: implication
hypotheses: [noisy-k-lin, pc]
conclusion: pke
class: unstated
model: standard
source:
  - "[[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]]"
security-loss: ""
---

# Noisy k-LIN + PC ⇒ PKE

[[noisy-k-lin-over-expanders|Noisy k-LIN]] together with [[planted-clique|PC]] implies [[public-key-encryption|PKE]].

## Statement

Migrated verbatim from [[learning-parity-with-noise]] § Known results:

> - [[noisy-k-lin-over-expanders|Noisy k-LIN]] over $\FF_p$-valued expanding matrices (an $\FF_p$ generalization of Sparse LPN, used as a synonym in some cryptographic literature) combined with the [[planted-clique|planted clique conjecture]] against sub-exponential adversaries yields [[public-key-encryption|PKE]] — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]]

Migrated verbatim from [[noisy-k-lin-over-expanders]] § Known Results:

> - Jointly with the [[planted-clique|planted clique conjecture]] against sub-exponential adversaries, noisy $k$-LIN over $(\gamma, \Omega(\log n), 2^{(\log n)^\alpha})$-expanders implies [[public-key-encryption|PKE]] secure against non-uniform polynomial-size circuits — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 5.12

Migrated verbatim from [[planted-clique]] § Known Results:

> - Planted clique hardness against sub-exponential adversaries (jointly with the [[noisy-k-lin-over-expanders|noisy k-LIN]] conjecture over expanders) implies [[public-key-encryption|PKE]] secure against non-uniform polynomial-size circuits — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 5.12

Migrated verbatim from [[public-key-encryption]] § Other results:

> - $\PKE$ secure against non-uniform polynomial-size circuits from the [[planted-clique|planted clique conjecture]] against sub-exponential adversaries and [[noisy-k-lin-over-expanders|noisy k-LIN]] over expanders — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 4 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Genuinely conjunctive (two independent assumptions combined).
- against sub-exponential adversaries qualifies the planted clique hypothesis with a hardness strength the identifier cannot carry.
- The parenthetical also asserts that Noisy k-LIN is an F_p generalization of Sparse LPN — a second relation, recorded separately.
- Genuinely CONJUNCTIVE: both hypotheses are needed together ("Jointly with"). This is the clearest example in this chunk of a hyperedge with two hypotheses.
- The edge is parameterized by adversary class on BOTH sides (planted clique must hold against sub-exponential adversaries; the PKE is secure against non-uniform polynomial-size circuits). Without an adversary-class field this collapses into a plain "PC + noisy k-LIN => PKE" edge that is not what the theorem says.
- CONJUNCTIVE. This is the same hyperedge as content/Assumptions/noisy-k-lin-over-expanders.md line 47, stated from the other endpoint; the two must be de-duplicated on migration or the graph will carry it twice.
- Adversary classes differ on the two sides (sub-exponential hypothesis, non-uniform polynomial conclusion).
- GENUINELY CONJUNCTIVE: two hypotheses required together ({planted clique against sub-exponential adversaries, noisy k-LIN over expanders} => PKE). Must not be split into two single-hypothesis reductions.
- The hypothesis 'planted clique' carries a strength qualifier ('against sub-exponential adversaries') and the conclusion carries an adversary-class qualifier ('secure against non-uniform polynomial-size circuits') — both must survive migration.
