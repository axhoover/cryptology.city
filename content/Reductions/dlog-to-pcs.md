---
type: reduction
status: draft
title: "DLOG ⇒ PCS"
aliases: []
id: red-dlog-to-pcs
kind: implication
hypotheses: [dlog]
conclusion: pcs
class: fully-black-box
model: rom
source:
  - "[[BCCGP16 - Efficient Zero-Knowledge Arguments for Arithmetic Circuits in the Discrete Log Setting|BCCGP16]]"
security-loss: ""
rationale:
  class: "One fixed construction, a Pedersen vector commitment with the inner-product argument, uses only the group operation, and the extractor runs the prover only as an oracle, rewinding it over a tree of challenges."
  model: "Openings are non-interactive proofs obtained by applying Fiat–Shamir to the public-coin inner-product argument; the interactive protocol needs no random oracle."
---

# DLOG ⇒ PCS

## Statement

If [[discrete-logarithm|DLOG]] is hard in a prime-order group, a transparent [[polynomial-commitment|polynomial commitment scheme]] exists: commit to the coefficient vector of a degree-$d$ polynomial $f$ with a Pedersen vector commitment and prove $f(z) = y$ with the recursive inner-product argument, giving $O(\log d)$-size openings and $O(d)$ verifier time — [[BCCGP16 - Efficient Zero-Knowledge Arguments for Arithmetic Circuits in the Discrete Log Setting|BCCGP16]]. The non-interactive scheme $\mathrm{PC}_{\mathrm{DL}}$ applies [[fiat-shamir-heuristic|Fiat–Shamir]] to the public-coin protocol and is secure under DLOG in the [[random-oracle-model|ROM]] — [[BCMS20 - Recursive Proof Composition from Accumulation Schemes|BCMS20]].

## Sketch

The claim $f(z) = y$ is the inner product $\langle \vec{f}, (1, z, \dots, z^d) \rangle = y$. Each round folds both vectors in half with a random challenge; after $\log d$ rounds the prover reveals the two remaining scalars and the verifier checks one commitment equation. The extractor rewinds each round to build a tree of accepting transcripts, and two openings of one commitment to distinct polynomials give a nontrivial discrete-log relation among the public generators.

## Notes

- Bulletproofs halve the communication of the inner-product argument — [[BBB+18 - Bulletproofs Short Proofs for Confidential Transactions and More|BBB+18]].
