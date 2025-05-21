---
title: A Meta-Complexity Characterization of Quantum Cryptography
source: https://eprint.iacr.org/2025/642
authors: Bruno P. Cavalar, Eli Goldin, Matthew Gray, Peter Hall
venue: Eurocrypt 2025
published: 2025-04-08
created: 2025-04-13
aliases:
  - CCGH25
---
# A Meta-Complexity Characterization of Quantum Cryptography
URL: https://eprint.iacr.org/2025/642
Authors: Bruno P. Cavalar, Eli Goldin, Matthew Gray, Peter Hall

## Abstract
We prove the first meta-complexity characterization of a quantum cryptographic primitive. We show that one-way puzzles exist if and only if there is some quantum samplable distribution of binary strings over which it is hard to approximate Kolmogorov complexity. Therefore, we characterize one-way puzzles by the average-case hardness of a uncomputable problem. This brings to the quantum setting a recent line of work that characterizes classical cryptography with the average-case hardness of a meta-complexity problem, initiated by Liu and Pass. Moreover, since the average-case hardness of Kolmogorov complexity over classically polynomial-time samplable distributions characterizes one-way functions, this result poses one-way puzzles as a natural generalization of one-way functions to the quantum setting. Furthermore, our equivalence goes through probability estimation, giving us the additional equivalence that one-way puzzles exist if and only if there is a quantum samplable distribution over which probability estimation is hard. We also observe that the oracle worlds of defined by Kretschmer et. al. rule out any relativizing characterization of one-way puzzles by the hardness of a problem in $\mathbf{NP}$ or $\mathbf{QMA}$, which means that it may not be possible with current techniques to characterize one-way puzzles with another meta-complexity problem.