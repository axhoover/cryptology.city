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
---

# DLOG ⇒ PCS

[[discrete-logarithm|DLOG]] implies [[polynomial-commitment|PCS]].

## Statement

If [[discrete-logarithm|DLOG]] is hard in a prime-order group, a transparent [[polynomial-commitment|polynomial commitment scheme]] exists: commit to the coefficient vector of a degree-$d$ polynomial $f$ with a Pedersen vector commitment and prove $f(z) = y$ with the recursive inner-product argument, giving $O(\log d)$-size openings and $O(d)$ verifier time — [[BCCGP16 - Efficient Zero-Knowledge Arguments for Arithmetic Circuits in the Discrete Log Setting|BCCGP16]]. The non-interactive scheme applies Fiat-Shamir to the public-coin protocol and is proven secure under DLOG in the ROM — [[BCMS20 - Recursive Proof Composition from Accumulation Schemes|BCMS20]].

## Sketch

The claim $f(z) = y$ is the inner product $\langle \vec{f}, (1, z, \dots, z^d) \rangle = y$. Each round folds both vectors in half with a random challenge; after $\log d$ rounds the prover reveals the two remaining scalars and the verifier checks one commitment equation. The extractor rewinds each round to build a tree of accepting transcripts, and two openings of one commitment to distinct polynomials give a nontrivial discrete-log relation among the public generators.

## Notes

`class: fully-black-box`: One fixed construction (Pedersen vector commitment plus the recursive inner-product argument) using only the group operation; the extractor runs the prover only as an oracle, rewinding it over a tree of challenges (forking in the ROM version).

`model: rom`: The wiki's PCS syntax is non-interactive ($\Open$ outputs a proof $\pi$), so openings apply Fiat-Shamir to the public-coin inner-product argument; the interactive BCCGP16 protocol is standard-model.

- Bulletproofs halve the communication of the inner-product argument — [[BBB+18 - Bulletproofs Short Proofs for Confidential Transactions and More|BBB+18]]
- The polynomial-commitment abstraction $\mathrm{PC}_{\mathrm{DL}}$ of this scheme — [[BCMS20 - Recursive Proof Composition from Accumulation Schemes|BCMS20]]
- The construction factors as DLOG ⇒ Pedersen commitment ⇒ IPA-based PCS; split this edge if a Pedersen-commitment node is added.
