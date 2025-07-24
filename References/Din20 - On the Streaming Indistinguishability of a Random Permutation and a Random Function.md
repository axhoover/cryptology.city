---
title: "On the Streaming Indistinguishability of a Random Permutation and a Random Function"
source: "https://link.springer.com/chapter/10.1007/978-3-030-45724-2_15"
authors: "Itai Dinur"
venue: "Eurocrypt 2020"
published: 2020-01-01
created: 2025-07-24
tags:
  - "paper"
alias: "Din20"
---
# On the Streaming Indistinguishability of a Random Permutation and a Random Function
URL: https://link.springer.com/chapter/10.1007/978-3-030-45724-2_15
Authors: Itai Dinur
## Abstract
An adversary with _S_ bits of memory obtains a stream of _Q_ elements that are uniformly drawn from the set , either with or without replacement. This corresponds to sampling _Q_ elements using either a random function or a random permutation. The adversary’s goal is to distinguish between these two cases.

This problem was first considered by Jaeger and Tessaro (EUROCRYPT 2019), which proved that the adversary’s advantage is upper bounded by . Jaeger and Tessaro used this bound as a streaming switching lemma which allowed proving that known time-memory tradeoff attacks on several modes of operation (such as counter-mode) are optimal up to a factor of  if . However, the bound’s proof assumed an unproven combinatorial conjecture. Moreover, if  there is a gap between the upper bound of  and the  advantage obtained by known attacks.

In this paper, we prove a tight upper bound (up to poly-logarithmic factors) of  on the adversary’s advantage in the streaming distinguishing problem. The proof does not require a conjecture and is based on a hybrid argument that gives rise to a reduction from the unique-disjointness communication complexity problem to streaming.