---
type: reduction
status: draft
title: "CRHF ⇒ PCS"
aliases: []
id: red-hash-function-to-pcs-bbhr18
kind: implication
hypotheses: [crhf]
conclusion: pcs
class: unstated
model: rom
source:
  - "[[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18a]]"
security-loss: ""
rationale:
  model: "The non-interactive scheme compiles the Merkle-committed FRI protocol with the BCS16 transformation, whose soundness is proved with the hash modelled as a random oracle; interactively, binding rests on collision resistance alone."
---

# CRHF ⇒ PCS

## Statement

[[hash-function#collision-resistance|Collision-resistant hash functions]] yield a transparent [[polynomial-commitment|polynomial commitment scheme]]: the commitment to a polynomial of degree $< d$ is the Merkle root of its Reed–Solomon codeword, and low-degreeness and openings are proved with the FRI proximity test of [[BBHR18b - Fast Reed-Solomon Interactive Oracle Proofs of Proximity|BBHR18b]], with $O(\log^2 d)$ proof size and verification time; the non-interactive scheme, the [[BCS16 - Interactive Oracle Proofs|BCS16]] compilation of this interactive oracle proof, is secure in the [[random-oracle-model|random-oracle model]] — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18a]].

## Sketch

FRI folds the committed codeword round by round: writing $f_i(x) = g_i(x^2) + x\,h_i(x^2)$, the verifier sends a uniform $\alpha_i$ and the prover commits to the codeword of $f_{i+1}(y) = g_i(y) + \alpha_i h_i(y)$, halving the degree; consistency between rounds is spot-checked at random points through Merkle openings.

## Notes

- The polynomial-commitment abstraction of FRI, as a _list_ polynomial commitment, is made explicit and used to build transparent SNARKs — [[KPV22 - RedShift Transparent SNARKs from List Polynomial Commitments|KPV22]].
