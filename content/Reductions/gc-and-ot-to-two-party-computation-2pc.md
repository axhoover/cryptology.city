---
type: reduction
status: draft
title: "GC + OT ⇒ Semi-honest 2PC (Yao)"
aliases: []
id: red-gc-and-ot-to-two-party-computation-2pc
kind: implication
hypotheses: [garbled-circuits, ot]
conclusion: semi-honest-two-party-computation
class: fully-black-box
model: standard
source:
  - "[[Yao86 - How to Generate and Exchange Secrets|Yao86]]"
  - "[[LP09 - A Proof of Security of Yao's Protocol for Two-Party Computation|LP09]]"
security-loss: "additive: the garbling-privacy advantage plus, by a hybrid over the evaluator's $n$ input bits, $n$ times the OT simulation advantage"
rationale:
  class: "The protocol uses the garbling scheme and OT only through their interfaces, and the LP09 simulators and hybrid reductions run the view distinguisher only as an oracle, as the modular garbling treatment of BHR12 makes explicit."
---

# GC + OT ⇒ Semi-honest 2PC (Yao)

## Statement

A [[garbled-circuit|garbling scheme]] and [[oblivious-transfer|OT]] yield a protocol, with the round complexity of the OT plus at most one message, for [[secure-multi-party-computation#semi-honest-two-party-computation|two-party computation]] of any polynomial-size circuit against [[secure-multi-party-computation#semi-honest-security|semi-honest]] adversaries: the garbler sends the garbled circuit with the labels of its own input, and the evaluator obtains the labels of its input by OT and evaluates — [[Yao86 - How to Generate and Exchange Secrets|Yao86]]. The first complete description and security proof is [[LP09 - A Proof of Security of Yao's Protocol for Two-Party Computation|LP09]].

## Sketch

The evaluator's view is simulated from a simulated garbled circuit and input labels that reveal only the output (garbling privacy), together with simulated OT transcripts; the garbler's view is simulated from OT receiver privacy. A hybrid argument turns any distinguisher of the real and simulated views into an adversary against the garbling or OT games.

## Notes

- Garbling schemes were later formalized as a standalone primitive whose privacy notion is the one the evaluator's simulator uses, and any PRF gives a projective private garbling scheme ([[prf-to-garbled-circuits-bhr12|PRF ⇒ garbled circuits]]) — [[BHR12 - Foundations of Garbled Circuits|BHR12]].
- Efficiency: the garbled circuit has four ciphertexts of $O(\secpar)$ bits per gate, the OTs run in parallel, so the protocol is constant-round given a constant-round OT, and the evaluator needs one OT per bit of its own input and, with point-and-permute, one decryption per gate — standard.
- Free XOR: XOR gates need no garbled table and no cryptographic operation, with security proved in the random oracle model — [[KS08 - Improved Garbled Circuit Free XOR Gates and Applications|KS08]].
- Half gates: AND gates take two ciphertexts ($2\secpar$ bits) and XOR gates stay free, and the evaluator performs two cryptographic operations per AND gate; two ciphertexts are optimal among a large class of garbling schemes that covers all known practical techniques — [[ZRE15 - Two Halves Make a Whole Reducing Data Transfer in Garbled Circuits Using Half Gates|ZRE15]].
- Three halves: slicing wire labels in half brings AND gates to $1.5\secpar + 5$ bits with free XOR, below the half-gates bound, from a circular correlation-robust hash — [[RR21 - Three Halves Make a Whole Beating the Half-Gates Lower Bound for Garbled Circuits|RR21]].
