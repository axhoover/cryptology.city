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
---

# GC + OT ⇒ Two-party computation (2PC)

[[garbled-circuit|GC]] together with [[oblivious-transfer|OT]] implies semi-honest [[secure-multi-party-computation#two-party-computation-2pc|two-party computation (2PC)]].

## Statement

A [[garbled-circuit|garbling scheme]] and [[oblivious-transfer|OT]] yield a constant-round protocol for [[secure-multi-party-computation#two-party-computation-2pc|two-party computation]] of any polynomial-size circuit against semi-honest adversaries: the garbler sends the garbled circuit with the labels of its own input, and the evaluator obtains the labels of its input by OT and evaluates — [[Yao86 - How to Generate and Exchange Secrets|Yao86]]. The first complete description and security proof is [[LP09 - A Proof of Security of Yao's Protocol for Two-Party Computation|LP09]].

## Sketch

The evaluator's view is simulated from a simulated garbled circuit and input labels that reveal only the output (garbling privacy) together with simulated OT transcripts; the garbler's view is simulated from OT receiver privacy. A hybrid argument turns any distinguisher of the real and simulated views into an adversary against the garbling or OT games.

## Notes

`class: fully-black-box`: The protocol invokes the garbling scheme and the OT protocol only through their interfaces; the LP09 simulators and hybrid reductions use the semi-honest adversary (a distinguisher of views) only as an oracle. Assessment from the proof shape, made explicit by BHR12's modular garbling treatment; neither source uses RTV vocabulary.

- Garbling schemes were later formalized as a standalone primitive whose privacy notion is exactly what the protocol needs — [[BHR12 - Foundations of Garbled Circuits|BHR12]].
