---
aliases:
  - RSA
  - RSA assumption
title: RSA Assumption
---
# RSA Assumption

The *RSA assumption* states that the RSA function $x \mapsto x^e \bmod n$ is hard to invert: given a modulus $n = pq$, a public exponent $e$, and a value $y$, no efficient adversary can find $x$ such that $x^e \equiv y \pmod{n}$. It was introduced alongside the RSA cryptosystem — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]].

## Assumption

The assumption is parameterized by a group generator $\GrGen$ that, on input $1^\secpar$, outputs an RSA modulus $n = pq$ (the product of two large primes) together with a public exponent $e$ coprime to $\phi(n) = (p-1)(q-1)$ and the corresponding private exponent $d \equiv e^{-1} \pmod{\phi(n)}$.

### RSA Problem

In the RSA game, the adversary is given an RSA instance $(n, e, y)$ and must produce the RSA inverse: an $x$ such that $x^e \equiv y \pmod{n}$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{rsa}}_{n,e,\calA}(\secpar)$}
\begin{algorithmic}
\State $(n, e, d) \gets \GrGen(1^\secpar)$
\State $x \getsr \ZZ_n^*$
\State $y \gets x^e \bmod n$
\State $\hat{x} \gets \calA(1^\secpar, n, e, y)$
\Return $[\hat{x}^e \equiv y \pmod{n}]$
\end{algorithmic}
\end{algorithm}
```

**RSA is hard** for $\GrGen$ if for all efficient $\calA$,

$$
\Adv^{\text{rsa}}_{\GrGen,\calA}(\secpar) := \Pr\!\left[\Game^{\text{rsa}}_{\GrGen,\calA}(\secpar) = 1\right]
$$

is negligible.

## Known Results

- RSA implies the existence of [[trapdoor-permutation|trapdoor permutations]], which in turn imply [[public-key-encryption|PKE]] — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]
- **Factoring reduces to RSA**: an algorithm that inverts $x^e \bmod n$ for *all* $e$ can be used to factor $n$. The converse direction — whether factoring reduces to RSA for a *fixed* $e$ — is not known.
- Search–decision equivalence: distinguishing RSA outputs from uniform reduces to inverting RSA.

# Variations

## Strong RSA

The **strong RSA assumption** strengthens the standard assumption by allowing the adversary to choose the exponent $e$ itself (subject to $e > 1$). Formally, the adversary outputs a pair $(\hat{x}, \hat{e})$ with $\hat{e} > 1$ and $\hat{x}^{\hat{e}} \equiv y \pmod{n}$. This is used in constructions of signature schemes and commitments with stronger security guarantees.

## Φ-Hiding

The **Φ-hiding assumption** states that, given $n$ and a prime $e$, it is hard to determine whether $e \mid \phi(n)$. This is related to RSA hardness and is used in some private information retrieval constructions.

# Attacks

- **Shor's algorithm**: a quantum computer can factor $n$ in polynomial time and thus break RSA entirely — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]
- **Wiener's attack**: when the private exponent satisfies $d < n^{1/4}$, RSA can be broken via continued-fraction approximation of $e/n$.
- **Small-exponent attacks**: encrypting the same short message under many independent RSA public keys with a small exponent $e$ (e.g., $e = 3$) allows recovery via the Chinese Remainder Theorem (Håstad's broadcast attack).
- **Chosen-ciphertext attacks**: textbook RSA (without padding) is not CCA-secure; OAEP padding is required in practice.
