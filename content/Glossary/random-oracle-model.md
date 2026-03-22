---
aliases:
  - ROM
  - Random oracle
  - Random Oracle Model
title: Random Oracle Model
---
# Random Oracle Model
The *Random Oracle Model (ROM)* is a heuristic commonly used in cryptography to prove security of systems, which are either difficult or impossible to prove secure otherwise. In this model, all parties are given access to an oracle, which is instantiated as a random and independent function. Then, proofs argue with high probability over the choice of a random oracle, schemes remain secure.

The ROM is related to the *Random Oracle Hypothesis* (attributed to Bennett and Gill), which conjectured that complexity-class relationships holding for almost all relativized worlds also hold unrelativized. The hypothesis was disproved by [[CCG+94 - The random oracle hypothesis is false|CCG+94]].

# Known Results

- **[[interactive-proof-systems|IP]] $\neq$ [[polynomial-space|PSPACE]] relative to a random oracle** — For almost all oracles $A$, $\mathsf{IP}^A \neq \mathsf{PSPACE}^A$ [[CCG+94 - The random oracle hypothesis is false|CCG+94]]. Since Shamir proved $\mathsf{IP} = \mathsf{PSPACE}$ unrelativized, this is among the most compelling counterexamples to the Random Oracle Hypothesis.

- **[[fiat-shamir-heuristic|Fiat-Shamir]] is uninstantiable in the standard model** — Goldwasser and Kalai constructed a 3-round public-coin protocol whose Fiat-Shamir transform is existentially forgeable under every concrete hash function, even though it is secure in the ROM [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]. This shows the random oracle cannot always be replaced by a concrete function.

- **Fiat-Shamir fails for the GKR protocol** — Khovratovich, Rothblum, and Soukhanov showed that the [[fiat-shamir-heuristic|Fiat-Shamir]] transform fails for the GKR succinct interactive argument — a standard, widely-studied protocol, not a contrived one [[KRS25 - How to Prove False Statements Practical Attacks on Fiat-Shamir|KRS25]]. They exhibit families of circuits for which the non-interactive GKR argument proves false statements.

- **OIHFs bridge Minicrypt and Cryptomania non-black-box** — Barnum and Heath introduced *Oblivious Interactive Hash Functions* (OIHFs), a primitive that can be constructed from a random oracle, yet implies [[oblivious-transfer|OT]] via a non-black-box reduction [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]]. This partially bridges the classical separation between Minicrypt (one-way functions, PRFs, etc.) and Cryptomania (public-key primitives including OT), though the non-black-box OT construction from a standard-model OIHF currently requires Cryptomania assumptions.