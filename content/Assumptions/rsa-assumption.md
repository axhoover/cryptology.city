---
type: assumption
status: draft
aliases:
  - RSA
  - RSA assumption
title: RSA Assumption
id: rsa
variants:
  strong-rsa: "#strong-rsa"
  phi-hiding: "#-hiding"
---

# RSA Assumption

The _RSA assumption_ states that the RSA function $x \mapsto x^e \bmod n$ is hard to invert: given a modulus $n = pq$, a public exponent $e$, and a value $y$, no efficient adversary can find $x$ such that $x^e \equiv y \pmod{n}$. It was introduced alongside the RSA cryptosystem — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]].

## Assumption

The assumption is parameterized by a group generator $\GrGen$ that, on input $1^\secpar$, outputs an RSA modulus $n = pq$ (the product of two large primes) together with a public exponent $e$ coprime to $\phi(n) = (p-1)(q-1)$ and the corresponding private exponent $d \equiv e^{-1} \pmod{\phi(n)}$.

### RSA Problem

In the RSA game, the adversary is given an RSA instance $(n, e, y)$ and must produce the RSA inverse: an $x$ such that $x^e \equiv y \pmod{n}$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{rsa}}_{\GrGen,\calA}(\secpar)$}
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

- [[rsa-to-tdp-rsa78|RSA ⇒ TDP]]
- [[tdp-to-pke|TDP ⇒ PKE]]
- [[fac-to-rsa-rsa78|RSA ⇒ FAC]]: the factors of $n$ give $\phi(n)$ and hence $d$ — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]. Recovering $d$ from $(n, e)$ is deterministic polynomial-time equivalent to factoring $n$ when $p, q$ have equal bit length and $ed \le n^2$ — [[May04 - Computing the RSA Secret Key Is Deterministic Polynomial Time Equivalent to Factoring|May04]]. Whether factoring hardness implies RSA hardness is open in the standard model; for small $e$, an algebraic reduction from factoring would itself yield a factoring algorithm — [[BV98 - Breaking RSA May Not Be Equivalent to Factoring|BV98]].
- [[rsa-to-fac-dlo24|RSA ⇔ FAC]] in the generic ring model — [[AM09 - Breaking RSA Generically Is Equivalent to Factoring|AM09]], [[DLO24 - Breaking RSA Generically Is Equivalent to Factoring, with Preprocessing|DLO24]]
- Hard-core bit: predicting the least significant bit of $x$ from $(n, e, x^e \bmod n)$ with non-negligible advantage is probabilistic polynomial-time equivalent to inverting RSA — [[ACGS88 - RSA and Rabin Functions Certain Parts are as Hard as the Whole|ACGS88]].

# Variations

## Strong RSA

The **strong RSA assumption** strengthens the standard assumption by allowing the adversary to choose the exponent $e$ itself (subject to $e > 1$). Formally, the adversary outputs a pair $(\hat{x}, \hat{e})$ with $\hat{e} > 1$ and $\hat{x}^{\hat{e}} \equiv y \pmod{n}$. Introduced by [[BP97 - Collision-Free Accumulators and Fail-Stop Signature Schemes Without Trees|BP97]] and [[FO97 - Statistical Zero Knowledge Protocols to Prove Modular Polynomial Relations|FO97]]. With a collision-resistant hash it yields EUF-CMA [[digital-signature|signatures]] in the standard model — [[CS99 - Signature Schemes Based on the Strong RSA Assumption|CS99]]; with a division-intractable hash, hash-and-sign signatures — [[GHR99 - Secure Hash-and-Sign Signatures Without the Random Oracle|GHR99]]. It also yields statistically hiding [[commitment-scheme|commitments]] to integers — [[FO97 - Statistical Zero Knowledge Protocols to Prove Modular Polynomial Relations|FO97]], [[DF02 - A Statistically-Hiding Integer Commitment Scheme Based on Groups with Hidden Order|DF02]].

## Φ-Hiding

The **Φ-hiding assumption** states that, given $n$ and a prime $e \le n^{1/4-\varepsilon}$, it is hard to determine whether $e \mid \phi(n)$ — [[CMS99 - Computationally Private Information Retrieval with Polylogarithmic Communication|CMS99]]; for $e > n^{1/4}$ Coppersmith's method decides it efficiently — [[KOS10 - Instantiability of RSA-OAEP under Chosen-Plaintext Attack|KOS10]]. It underlies the polylogarithmic-communication [[single-server-private-information-retrieval|single-server PIR]] of [[CMS99 - Computationally Private Information Retrieval with Polylogarithmic Communication|CMS99]].

# Attacks

- **Shor's algorithm**: a quantum computer can factor $n$ in polynomial time and thus break RSA entirely — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]
- **Wiener's attack**: when the private exponent satisfies $d < n^{1/4}$, RSA can be broken via continued-fraction approximation of $e/n$.
- **Small-exponent attacks**: encrypting the same short message under many independent RSA public keys with a small exponent $e$ (e.g., $e = 3$) allows recovery via the Chinese Remainder Theorem (Håstad's broadcast attack).
- **Chosen-ciphertext attacks**: textbook RSA (without padding) is not CCA-secure; OAEP padding is required in practice.

<!-- BEGIN GENERATED participates-in 83500d687079 -->

## Participates in

**Builds on RSA Assumption**

- [[rsa-to-fac-dlo24|RSA ⇔ FAC]]
- [[rsa-to-ind-cca-security|RSA ⇒ IND-CCA security]]
- [[rsa-to-partially-homomorphic-encryption-phe-rsa78|RSA ⇒ Partially homomorphic encryption (PHE)]]
- [[rsa-to-pke-rsa78|RSA ⇒ PKE]]
- [[rsa-to-tdp-rsa78|RSA ⇒ TDP]]

**Produces RSA Assumption**

- [[fac-to-rsa-rsa78|FAC ⇒ RSA]]
- [[strong-rsa-to-rsa|Strong RSA ⇒ RSA]]

<!-- END GENERATED participates-in -->
