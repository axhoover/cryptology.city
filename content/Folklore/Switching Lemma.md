# Switching Lemma
For any distinguisher $A$ issuing $q$ queries to its oracle, $$\left|\Pr[A^{R} = 1] - \Pr[A^{\pi} = 1]\right| \le O\left(\frac{q^2}{|\mathcal{D}|}\right),$$ where $R$ is a random function and $\pi$ is a random permutation, both from $\mathcal{D}$ to $\mathcal{D}$.


## Memory bounded version
This has been subsequently improved by [[Din20 - On the Streaming Indistinguishability of a Random Permutation and a Random Function|Din20]] for streaming distinguishers with $m$ bits of memory to $$\left|\Pr[A^{R} = 1] - \Pr[A^{\pi} = 1]\right| \le O\left(\frac{mq}{|\mathcal{D}|}\right),$$ where $R$ is a random function and $\pi$ is a random permutation, both from $\mathcal{D}$ to $\mathcal{D}$.