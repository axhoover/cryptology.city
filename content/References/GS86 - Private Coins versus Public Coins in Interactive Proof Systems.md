---
title: Private Coins versus Public Coins in Interactive Proof Systems
source: https://dl.acm.org/doi/pdf/10.1145/12130.12137
authors: Shafi Goldwasser, Michael Sipser
venue: STOC 1986
published: 1986-06-01
aliases:
  - GS86
---
# Private Coins versus Public Coins in Interactive Proof Systems
URL: https://dl.acm.org/doi/pdf/10.1145/12130.12137
Authors: Shafi Goldwasser, Michael Sipser

## Abstract
An interactive proof system is a method by which one party of unlimited resources, called the prover, can convince a party of limited resources, call the verifier, of the truth of a proposition. The verifier may toss coins, ask repeated questions of the prover, and run efficient tests upon the prover's responses before deciding whether to be convinced. This extends the familiar proof system implicit in the notion of NP in that there the verifier may not toss coins or speak, but only listen and verify. Interactive proof systems may not yield proof in the strict mathematical sense: the "proofs" are probabilistic with an exponentially small, though non-zero chance of error.

We consider two notions of interactive proof system. One, defined by Goldwasser, Micali, and Rackoff [GMR] permits the verifier a coin that can be tossed in private, i.e., a secret source of randomness. The second, due to Babai, [B] requires that the outcome of the verifier's coin tosses be public and thus accessible to the prover.

Our main result is that these two systems are equivalent in power with respect to language recognition.

The notion of interactive proof system may be seen to yield a probabilistic analog to NP much as BPP is the probabilistic analog to P. We define the probabilistic, nondeterministic, polynomial time Turing machine and show that it is also equivalent in power to these systems.
