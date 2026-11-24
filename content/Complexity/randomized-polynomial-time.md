---
type: complexity-class
status: draft
aliases:
  - RP
  - Randomized polynomial-time
title: Randomized polynomial-time
id: rp
---

# Randomized polynomial-time

The class of decision problems solvable by a probabilistic polynomial-time Turing machine with one-sided error (no false positives):

1. If the answer is "yes," the machine accepts with probability at least 1/2.
2. If the answer is "no," the machine always rejects.

Running the machine $k$ times independently and accepting if any run accepts reduces the error probability to at most $2^{-k}$, since no run accepts a "no" instance — standard.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:R#rp).

## Known relationships

- $\classP \subseteq \classRP \subseteq \classBPP$ ([[p-to-rp|P ⊆ RP]], [[rp-to-bpp|RP ⊆ BPP]]) — folklore.
- $\classRP \subseteq \classNP$: any accepting random string is a certificate ([[rp-to-np|RP ⊆ NP]]) — folklore.
- $\classZPP = \classRP \cap \classcoRP$, where [[zero-error-probabilistic-polynomial-time|ZPP]] is the zero-error class — [[Gil77 - Computational complexity of probabilistic Turing machines|Gil77]].
- It is widely believed that $\classRP = \classP$: if $\mathbf{E} = \mathbf{DTIME}(2^{O(n)})$ has a function that requires exponential-size circuits, then $\classP = \classBPP$ — [[IW97 - P = BPP if E Requires Exponential Circuits Derandomizing the XOR Lemma|IW97]] — and hence $\classRP = \classP$.

## Notable problems

- **Polynomial identity testing**: deciding whether an arithmetic circuit computes the identically zero polynomial is in $\classcoRP$: evaluate at a random point, where by the [[schwartz-zippel-lemma|Schwartz–Zippel lemma]] a nonzero polynomial of total degree $d$ vanishes with probability at most $d/|S|$ for a point uniform in $S^n$ — [[Sch80 - Fast Probabilistic Algorithms for Verification of Polynomial Identities|Sch80]].
- **Miller–Rabin primality test**: the test puts compositeness in $\classRP$, equivalently primality in $\classcoRP$ — [[Rab80 - Probabilistic Algorithm for Testing Primality|Rab80]]. Primality is in $\classP$ — [[AKS04 - PRIMES Is in P|AKS04]].

<!-- BEGIN GENERATED participates-in 2f23b6add747 -->

## Participates in

**Builds on Randomized polynomial-time**

- [[rp-to-bpp|RP ⊆ BPP]]
- [[rp-to-np|RP ⊆ NP]]

**Produces Randomized polynomial-time**

- [[p-to-rp|P ⊆ RP]]
- [[zpp-to-rp|ZPP ⊆ RP]]

<!-- END GENERATED participates-in -->
