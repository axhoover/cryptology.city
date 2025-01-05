---
aliases:
  - ROM
---
# Random Oracle Model
The *Random Oracle Model (ROM)* is a heuristic commonly used in cryptography to prove security of systems, which are either difficult or impossible to prove secure otherwise. In this model, all parties are given access to an oracle, which is instantiated as a random and independent function. Then, proofs argue with high probability over the choice of a random oracle, schemes remain secure.

Early work in cryptography showed some issues with the random oracle model [[CCG+94 - The random oracle hypothesis is false|CCG+94]], for example that [[Interactive Proof Systems|IP]] != [[PSPACE]] relative to a random oracle.