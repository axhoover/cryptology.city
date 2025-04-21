---
title: Limits on the provable consequences of one-way permutations
source: https://dl.acm.org/doi/abs/10.1145/73007.73012
authors: Russel Impagliazzo, Steven Rudich
venue: STOC 1989
published: 1989-02-01
aliases:
  - IR89
---
# Limits on the provable consequences of one-way permutations
URL: https://dl.acm.org/doi/abs/10.1145/73007.73012
Authors: Russel Impagliazzo, Steven Rudich
## Abstract
We present strong evidence that the implication, “if one-way permutations exist, then secure secret key agreement is possible”, is not provable by standard techniques. Since both sides of this implication are widely believed true in real life, to show that the implication is false requires a new model. We consider a world where all parties have access to a black box for a randomly selected permutation. Being totally random, this permutation will be strongly one-way in a provable, information-theoretic way. We show that, if $P = NP$, no protocol for secret key agreement is secure in such a setting. Thus, to prove that a secret key agreement protocol which uses a one-way permutation as a black box is secure is as hard as proving $P \neq NP$. We also obtain, as a corollary, that there is an oracle relative to which the implication is false, i.e., there is a one-way permutation, yet secret-exchange is impossible. Thus, no technique which relativizes can prove that secret exchange can be based on any one-way permutation. Our results present a general framework for proving statements of the form, “Cryptographic application $X$ is not likely possible based solely on complexity assumption $Y$.”