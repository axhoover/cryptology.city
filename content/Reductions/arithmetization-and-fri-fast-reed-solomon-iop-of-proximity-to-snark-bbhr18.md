---
type: reduction
status: draft
title: "Arithmetization + FRI (Fast Reed-Solomon IOP of Proximity) ⇒ SNARK"
aliases: []
id: red-arithmetization-and-fri-fast-reed-solomon-iop-of-proximity-to-snark-bbhr18
kind: implication
hypotheses: [arithmetization, fri]
conclusion: snark
class: unstated
model: rom
source:
  - "[[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]]"
security-loss: ""
---

# Arithmetization + FRI (Fast Reed-Solomon IOP of Proximity) ⇒ SNARK

[[arithmetization|Arithmetization]] together with [[polynomial-commitment#fri-fast-reed-solomon-iop-of-proximity|FRI (Fast Reed-Solomon IOP of Proximity)]] implies [[succinct-argument|SNARK]].

## Statement

A computation expressed as an [[arithmetization|AIR]], with the constraints checked by the [[polynomial-commitment#fri-fast-reed-solomon-iop-of-proximity|FRI]] proximity test, yields a STARK: a transparent [[succinct-argument|succinct argument]] of knowledge with prover time quasi-linear and verification time and proof length polylogarithmic in the computation size $T$, made non-interactive in the random-oracle model — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]].

## Sketch

The prover Merkle-commits to Reed–Solomon codewords of the execution-trace polynomials; the AIR constraints reduce to a low-degree proximity claim about a derived codeword, which FRI certifies in logarithmically many degree-halving rounds; Fiat–Shamir over the transcript makes the interactive oracle proof non-interactive in the random-oracle model.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: rom`: BBHR18 analyse the Merkle-hashing and Fiat–Shamir compilation of the interactive oracle proof with the hash as a random oracle.

- Conjunctive ({AIR, FRI} ⇒ STARK); do not split into two single-hypothesis edges.
