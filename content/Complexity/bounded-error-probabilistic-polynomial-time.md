---
aliases:
  - BPP
  - Bounded-Error Probabilistic Polynomial-Time
title: Bounded-Error Probabilistic Polynomial-Time
---

# Bounded-Error Probabilistic Polynomial-Time

The class of decision problems solvable by a probabilistic polynomial-time Turing machine with two-sided bounded error:

1. If the answer is "yes," the machine accepts with probability at least 2/3.
2. If the answer is "no," the machine accepts with probability at most 1/3.

The constants 2/3 and 1/3 are not special: by running the machine independently $k$ times and taking a majority vote, the error probability can be reduced to $2^{-\Omega(k)}$. BPP is the standard complexity-theoretic model of efficient randomized computation.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:B#bpp).

## Known relationships

- $\classP \subseteq \classZPP \subseteq \classRP \subseteq \classBPP$: deterministic algorithms are a special case of Las Vegas, which are a special case of one-sided error, which are a special case of two-sided error.
- $\classBPP \subseteq \classAM \cap \classcoAM$: BPP problems have trivial one-message Arthur-Merlin protocols (Arthur decides without Merlin) — [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]].
- $\classBPP \subseteq \classPpoly$: for any BPP machine, a majority-vote argument shows that a fixed random string works for all inputs of a given length; that string serves as the advice — TODO citation.
- $\classBPP \subseteq \classPSPACE$: randomized computation can be simulated deterministically in polynomial space by trying all random strings.
- **Derandomization conjecture:** $\classP = \classBPP$. This is widely believed and would follow from sufficiently strong circuit lower bounds (e.g., if $\mathbf{E} = \mathbf{DTIME}(2^{O(n)})$ requires exponential-size circuits). Under plausible hardness assumptions, $\classBPP$ has subexponential-time simulations — TODO citation.

## Relevance to cryptography

In cryptography, efficient adversaries are modeled as probabilistic polynomial-time ($\PPT$) algorithms — the uniform version of BPP. Security definitions quantify over all $\PPT$ adversaries.

If $\classP = \classBPP$ (the derandomization conjecture), then any cryptographic protocol secure against deterministic polynomial-time adversaries is also secure against randomized ones — but this would not render cryptography trivial, since it says nothing about the hardness of breaking schemes. Crucially, pseudorandom generators ([[pseudorandom-generator|PRG]]s) can be viewed as a crypto-primitive that _witnesses_ $\classBPP = \classP$: a PRG secure against all $\classPpoly$ adversaries implies $\classBPP = \classP$.
