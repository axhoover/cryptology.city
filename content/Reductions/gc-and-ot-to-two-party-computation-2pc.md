---
type: reduction
status: draft
title: "GC + OT ⇒ Two-party computation (2PC)"
aliases: []
id: red-gc-and-ot-to-two-party-computation-2pc
kind: implication
hypotheses: [garbled-circuits, ot]
conclusion: two-party-computation
class: fully-black-box
model: standard
source:
  - "[[Yao86 - How to Generate and Exchange Secrets|Yao86]]"
security-loss: ""
rationale:
  class: "The protocol uses the garbling scheme and OT only through their interfaces, and the LP09 simulators and hybrid reductions run the view distinguisher only as an oracle, as the modular garbling treatment of BHR12 makes explicit."
---

# GC + OT ⇒ Two-party computation (2PC)

## Statement

A [[garbled-circuit|garbling scheme]] and [[oblivious-transfer|OT]] yield a constant-round protocol for [[secure-multi-party-computation#two-party-computation-2pc|two-party computation]] of any polynomial-size circuit against [[secure-multi-party-computation#privacy-semi-honest|semi-honest]] adversaries: the garbler sends the garbled circuit with the labels of its own input, and the evaluator obtains the labels of its input by OT and evaluates — [[Yao86 - How to Generate and Exchange Secrets|Yao86]]. The first complete description and security proof is [[LP09 - A Proof of Security of Yao's Protocol for Two-Party Computation|LP09]].

## Sketch

The evaluator's view is simulated from a simulated garbled circuit and input labels that reveal only the output (garbling privacy), together with simulated OT transcripts; the garbler's view is simulated from OT receiver privacy. A hybrid argument turns any distinguisher of the real and simulated views into an adversary against the garbling or OT games.

## Notes

- Garbling schemes were later formalized as a standalone primitive whose privacy notion is the one this simulation uses — [[BHR12 - Foundations of Garbled Circuits|BHR12]].
