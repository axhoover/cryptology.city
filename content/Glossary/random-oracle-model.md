---
type: glossary
status: draft
aliases:
  - ROM
  - Random oracle
  - Random Oracle Model
title: Random Oracle Model
id: rom
---

# Random Oracle Model

The _Random Oracle Model (ROM)_ is a heuristic commonly used in cryptography to prove security of systems, which are either difficult or impossible to prove secure otherwise. In this model, all parties are given access to an oracle, which is instantiated as a random and independent function. Then, proofs argue with high probability over the choice of a random oracle, schemes remain secure.

The ROM is related to the _Random Oracle Hypothesis_ (attributed to Bennett and Gill), which conjectured that complexity-class relationships holding for almost all relativized worlds also hold unrelativized. The hypothesis was disproved by [[CCG+94 - The random oracle hypothesis is false|CCG+94]].

# Known Results

- [[no-rom-to-roh-ccg-94|No relativizing reduction from ROM to ROH]]

- **[[fiat-shamir-heuristic|Fiat-Shamir]] is uninstantiable in the standard model** — Goldwasser and Kalai constructed a 3-round public-coin protocol whose Fiat-Shamir transform is existentially forgeable under every concrete hash function, even though it is secure in the ROM [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]. This shows the random oracle cannot always be replaced by a concrete function.

- [[no-fiat-shamir-and-gkr-to-snark-krs25|No reduction from Fiat-Shamir + GKR to SNARK]]

- [[rom-to-oihf-bh26|ROM ⇒ OIHF]]
- [[oihf-to-ot-bh26|OIHF ⇒ OT]]
- [[no-oihf-to-ot-bh26|No fully-black-box reduction from OIHF to OT]]
