---
aliases:
  - BQP
  - Bounded-Error Quantum Polynomial-Time
title: Bounded-Error Quantum Polynomial-Time
---

# Bounded-Error Quantum Polynomial-Time

The class of decision problems solvable by a uniform family of polynomial-size quantum circuits with two-sided bounded error:

1. If the answer is "yes," the circuit accepts with probability at least 2/3.
2. If the answer is "no," the circuit accepts with probability at most 1/3.

BQP is the quantum analogue of [[bounded-error-probabilistic-polynomial-time|BPP]] and is the standard model for efficient quantum computation.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:B#bqp).

## Notable problems

- **Integer factorization** and **discrete logarithm** are in $\classBQP$ via Shor's algorithm — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]. This directly breaks RSA, Diffie-Hellman, DSA, and ECDSA.
- **Unstructured search**: Grover's algorithm provides a quadratic quantum speedup for unstructured search — [[Grover96 - A fast quantum mechanical algorithm for database search|Grover96]]. This does not place unstructured search in $\classBQP$ itself, but implies that any problem with a classical $O(N)$ exhaustive-search algorithm can be solved quantumly in $O(\sqrt{N})$ queries.

## Known relationships

- $\classP \subseteq \classBPP \subseteq \classBQP$: classical probabilistic computation is a special case of quantum computation.
- $\classBQP \subseteq \classPP \subseteq \classPSPACE$: quantum computation can be simulated with unbounded-error classical randomness, and in polynomial space — Adleman, DeMarrais, and Huang (1997).
- **$\classBQP$ vs $\classNP$:** the two classes are believed incomparable. Simon's problem is in $\classBQP$ but not in $\classNP$ relative to a random oracle; conversely, NP-complete problems are not believed to be in $\classBQP$.
- **PostBQP $= \classPP$** (Aaronson 2005): $\classBQP$ augmented with postselection on measurement outcomes equals $\classPP$. This gives an elegant proof of $\classBQP \subseteq \classPP$.

## Relevance to cryptography

BQP defines the power of a quantum adversary. All post-quantum cryptographic schemes — lattice-based, hash-based, code-based, isogeny-based — are designed to resist $\classBQP$ adversaries. Shor's algorithm shows that the number-theoretic hardness assumptions underlying RSA, Diffie-Hellman, DSA, and ECDSA are all broken by $\classBQP$ machines.

Grover's algorithm gives a generic quadratic speedup on unstructured search, implying that symmetric-key schemes need security parameters roughly twice as large (e.g., AES-256 instead of AES-128) to maintain $\secpar$-bit post-quantum security. However, based on [NIST post-quantum standards](https://csrc.nist.gov/projects/post-quantum-cryptography/post-quantum-cryptography-standardization/evaluation-criteria/security-(evaluation-criteria)) suggest that this may not be necessary. Primarily, this is because Grover's algorithm cannot be parallelized ([[Zal97 - Grover's quantum searching algorithm is optimal | Zal97]]), and therefore the speedup requires a very long serial computation that may be infeasible.
