---
aliases:
  - LWE

---
# Learning with errors (LWE)
The *learning with errors (LWE)* assumptions is a standard assumption in cryptography, especially in post-quantum cryptography. It is a generalization of the [[learning parity with noise|LPN]] assumption.

## Assumption
Informally, the LWE problem concerns solving a system of noisy linear equations. In other words, the goal is to find some secret vector $\mathbf{s} \in \mathbb{F}_q^n$ that satisfies a given set of $m$ random linear equations in $n$ variables. If we are allowed to see the equations precisely (i.e., with no errors) then it is possible to find $\mathbf{s}$ in polynomial time. The LWE assumption is that finding $\mathbf{s}$ is hard if each equation is correct up to some small, additive error.

Formally, let $\mathbb{F}_q$ denote the field of integers modulo $q$. Fix some secret vector $\mathbf{s} \in \mathbb{F}^n_q$ and an "error" probability distribution $\chi$ over $\mathbb{F}_q$. Denote $A_{\mathbf{s}, \chi}$ to be the random variable on $\mathbb{F}^n_q \times \mathbb{F}_q$ resulting from the following procedure:
1. Select $\mathbf{a} \gets \mathbb{F}^n_q$ uniformly at random.
2. Sample $e \gets \mathbb{F}_q$ according to the error distribution $\chi$.
3. Output $(\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle + e)$
And denote $U$ to be the random variable $(\mathbf{a}, u)$ for uniformly random $a \gets \mathbb{F}^n_q$ and uniformly random $u \gets \mathbb{F}_q$.

The LWE problem with parameters $m,\chi$ is to distinguish $A_{\mathbf{s},\chi}$ from $U$. We say  *LWE is hard* if there exists a negligible function $\nu$ such that for all efficient adversaries $\mathcal{A}$, $$\text{Adv}^{(m,\chi)\text{-lwe}}(\mathcal{A}) = \Pr[\mathcal{A}(1^{n}, D_b^m) = b] \leq \nu(n),$$ where $b \gets \{0,1\}$ uniformly at random, $D_0 = A_{\mathbf{s},\chi}$, and $D_1 = U$.

## Variations
LWE with modulus $q = 2$ is the [[learning parity with noise|LPN]] problem. In this case $\chi$ is modeled only as a Bernoulli random variable.

The problem we state above is the "decision" version of LWE, as the adversary is tasked with *distinguish* the secret vector $\mathbf{s}$. An equivalent assumption is the "search" LWE problem, where an adversary must *recover* $\mathbf{s}$ from $A_{\mathbf{s}, \chi}$.
- The reduction from decision to search is simple, because if one recovers $\mathbf{s}$, then they can just check for consistency to decide whether the sample is uniform or not.
- The reduction from search to decision is a bit more complicated. But essentially, the adversary can "guess and check" for each index $i\in [n]$ and field element $\alpha \in \mathbb{F}_q$ to see if $\mathbf{s}[i]=\alpha$.
	- By making this guess and computing a new matrix $A'$ under the guess, it will be distributed as an LWE instance when the guess is right and a uniform instance when the guess is wrong.
	- This way, a search adversary can just guess and check and then use a decision adversary to figure out when it's guesses are correct.


## Related results
- Reduction to lattice problems


## Attacks
