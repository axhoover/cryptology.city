---
aliases:
  - RP
  - Randomized polynomial-time
title: Randomized polynomial-time
---
# Randomized polynomial-time
The class of decision problems solvable by a probabilistic polynomial-time Turing machine with one-sided error (no false positives):
1. If the answer is "yes," the machine accepts with probability at least 1/2.
2. If the answer is "no," the machine always rejects.

The error probability can be reduced to $2^{-k}$ by running the machine $k$ times independently and accepting if any run accepts (since false positives never occur).

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:R#rp).

## Known relationships
- $\classP \subseteq \classRP \subseteq \classBPP$: RP is a "one-sided" restriction of BPP (which allows two-sided error).
- $\classRP \subseteq \classNP$: a polynomial-time machine that accepts on at least half of its random strings provides an NP witness (any accepting random string serves as the certificate).
- $\classZPP = \classRP \cap \mathbf{coRP}$: the zero-error probabilistic class is exactly the intersection of RP and its complement class coRP.
- It is widely believed that $\classRP = \classP$, which would follow from sufficiently strong derandomization assumptions (e.g., the existence of functions in $\mathbf{E}$ that require exponential-size circuits — TODO citation).

## Notable problems
- **Polynomial identity testing**: given an arithmetic circuit, does it compute the identically zero polynomial? This problem is in coRP via the Schwartz-Zippel lemma (evaluate at a random point; if the polynomial is nonzero it is detected with high probability).
- **Miller-Rabin primality test**: the original Miller-Rabin test shows that compositeness is in RP (equivalently, primality is in coRP). This was superseded by the AKS algorithm placing primality in $\classP$ — TODO citation.
