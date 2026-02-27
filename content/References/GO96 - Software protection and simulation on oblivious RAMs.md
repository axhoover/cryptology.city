---
title: Software protection and simulation on oblivious RAMs
URL: https://dl.acm.org/doi/abs/10.1145/233551.233553
authors: Oded Goldreich, Rafail Ostrovsky
venue: Journal of the ACM 1996
publish date: 05/01/2025
aliases:
  - GO96
---
# Software protection and simulation on oblivious RAMs
URL: https://dl.acm.org/doi/abs/10.1145/233551.233553
Authors: Oded Goldreich, Rafail Ostrovsky
## Abstract
Software protection is one of the most important issues concerning computer practice. There exist many heuristics and ad-hoc methods for protection, but the problem as a whole has not received the theoretical treatment it deserves. In this paper, we provide theoretical treatment of software protection. We reduce the problem of software protection to the problem of efficient simulation on \textit{oblivious} RAM.A machine is \textit{oblivious} if the sequence in which it accesses memory locations is equivalent for any two inputs with the same running time. For example, an oblivious Turing Machine is one for which the movement of the heads on the tapes is identical for each computation. (Thus, the movement is independent of the actual input.) \textit{What is the slowdown in the running time of a machine, if it is required to be oblivious?} In 1979, Pippenger and Fischer showed how a two-tape \textit{oblivious} Turing Machine can simulate, on-line, a one-tape Turing Machine, with a logarithmic slowdown in the running time. We show an analogous result for the random-access machine (RAM) model of computation. In particular, we show how to do an on-line simulation of an arbitrary RAM by a probabilistic \textit{oblivious} RAM with a polylogaithmic slowdown in the running time. On the other hand, we show that a logarithmic slowdown is a lower bound.