---
title: Limits on the security of coin flips when half the processors are faulty
source: https://dl.acm.org/doi/abs/10.1145/12130.12168
authors: Richard Cleve
venue: STOC 1986
published: 1986-11-01
created: 2025-05-05
aliases:
  - Cleve86
  - Cle86
---
# Limits on the security of coin flips when half the processors are faulty
URL: https://dl.acm.org/doi/abs/10.1145/12130.12168
Authors: Richard Cleve

## Abstract
We consider the problem of collective coin flipping by n processors, some of which may be faulty.  We assume that the faulty processors can deviate arbitrarily from the prescribed protocol.  We present a protocol that tolerates up to t < n/2 faulty processors and has the property that the probability that a bias of more than ε is introduced is less than δ, where ε and δ are arbitrary positive numbers.  This protocol uses O(log(n/δ)/ε²) rounds of communication. We prove that this is optimal in the sense that any protocol that tolerates t < n/2 faulty processors must use at least Ω(log(n/δ)/ε²) rounds.  The lower bound is proven under a very weak assumption about the computational power of the faulty processors.