---
type: reduction
status: draft
title: "Hash function ⇒ PCS"
aliases: []
id: red-hash-function-to-pcs-bbhr18
kind: implication
hypotheses: [hash-function]
conclusion: pcs
class: unstated
model: rom
source:
  - "[[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]]"
security-loss: ""
---

# Hash function ⇒ PCS

[[hash-function|Hash function]] implies [[polynomial-commitment|PCS]].

## Statement

[[hash-function|Collision-resistant hash functions]] yield a transparent [[polynomial-commitment|polynomial commitment scheme]]: the commitment to a polynomial of degree $< d$ is the Merkle root of its Reed–Solomon codeword, and low-degreeness and openings are proved with the FRI proximity test, with $O(\log^2 d)$ proof size and verification time; the non-interactive scheme is secure in the random-oracle model — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]].

## Sketch

FRI folds the committed codeword round by round: writing $f_i(x) = g_i(x^2) + x\,h_i(x^2)$, the verifier sends a uniform $\alpha_i$ and the prover commits to the codeword of $f_{i+1}(y) = g_i(y) + \alpha_i h_i(y)$, halving the degree; consistency between rounds is spot-checked at random points through Merkle openings.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: rom`: FRI is an interactive oracle proof of proximity; the commitment Merkle-hashes the prover's oracles and becomes non-interactive through the [[BCS16 - Interactive Oracle Proofs|BCS16]] (Fiat–Shamir) compilation, whose soundness is proven with the hash modeled as a random oracle (the model of BBHR18's non-interactive STARK). Interactively, binding rests on collision resistance alone.

- The polynomial-commitment abstraction of FRI (as a _list_ polynomial commitment) is made explicit and used to build transparent SNARKs — [[KPV22 - RedShift Transparent SNARKs from List Polynomial Commitments|KPV22]].
