---
type: primitive
status: stub
aliases:
  - GC
  - Garbled circuit
title: Garbled circuit
id: garbled-circuits
---

# Garbled circuit

A garbling scheme encodes a boolean circuit $C$ into a garbled circuit together with per-wire input labels, so that a party given the labels for an input $x$ can evaluate it to learn $C(x)$ and nothing further about $x$ or the intermediate wire values.

TODO: syntax and security definition.

<!-- BEGIN GENERATED participates-in f0b30a6c2616 -->
## Participates in

**Builds on Garbled circuit**

- [[gc-and-ot-to-two-party-computation-2pc|GC + OT ⇒ Two-party computation (2PC)]]
<!-- END GENERATED participates-in -->
