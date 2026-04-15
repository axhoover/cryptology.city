---
aliases:
  - Switching Lemma
title: Switching Lemma
---

# Switching Lemma

For any distinguisher $A$ issuing $q$ queries to its oracle, $$\left|\Pr[A^{R} = 1] - \Pr[A^{\pi} = 1]\right| \le O\left(\frac{q^2}{|\calD|}\right),$$ where $R$ is a random function and $\pi$ is a random permutation, both from $\calD$ to $\calD$.

## Memory bounded version

This has been subsequently improved by [[Din20 - On the Streaming Indistinguishability of a Random Permutation and a Random Function|Din20]] for streaming distinguishers with $m$ bits of memory to $$\left|\Pr[A^{R} = 1] - \Pr[A^{\pi} = 1]\right| \le O\left(\frac{mq}{|\calD|}\right),$$ where $R$ is a random function and $\pi$ is a random permutation, both from $\calD$ to $\calD$.
