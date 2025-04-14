---
aliases:
  - LWE
---
# Learning with errors (LWE)
The *learning with errors (LWE)* assumptions is a standard assumption in cryptography, especially in post-quantum cryptography. It is a generalization of the [[learning parity with noise|LPN]] assumption.

## Assumption
Informally, the LWE problem concerns solving a system of noisy linear equations. In other words, the goal is to find some secret vector $\mathbf{s} \in \mathbb{Z}_q^n$ that satisfies a given set of $m$ random linear equations in $n$ variables. If we are allowed to see the equations precisely (i.e., with no errors) then it is possible to find $\mathbf{s}$ in polynomial time. The LWE assumption is that finding $\mathbf{s}$ is hard if each equation is correct up to some small, additive error.

Formally, let $\mathbb{Z_q}$ denote the integers modulo $q$. Fix some secret vector $\mathbf{s} \in \mathbb{Z}^n_q$ and an "error" probability distribution $\chi$ over $\mathbb{Z}$. Denote $A_{\mathbf{s}, \chi}$ to be the random variable on $\mathbb{Z}^n_q \times \mathbb{Z}$ resulting from the following procedure:
1. Select $\mathbf{a} \gets \mathbb{Z}^n_q$ uniformly at random.
2. Sample $e \in \mathbb{Z}$ according to the error distribution $\chi$.
3. Output $(\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle + e)$

The LWE problem with parameters $\mathbf{s}, \chi$ is to find $\mathbf{s} \in \mathbb{Z}^n_q$ given polynomially-many samples from of $A_{\mathbf{s}, \chi}$. We say that *LWE is hard* if there exists a negligible function $\nu$ such that for all efficient adversaries $\mathcal{A}$, $$\Pr[\mathcal{A}^{A_{\mathbf{s}, \chi}}(1^n) = \mathbf{s}] \leq \nu(n).$$

## Variations
The LWE problem stated above is the "search" version of the problem, as the adversary is tasked with *finding* the secret vector $\mathbf{s}$. An equivalent version is decision LWE, where an adversary must *distinguish* between samples from $A_{\mathbf{s}, \chi}$ and uniformly random samples from $\mathbb{Z}^n_q \times \mathbb{Z_q}$.


## Related results
- Reduction to lattice problems


## Attacks
