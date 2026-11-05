---
type: glossary
status: draft
aliases:
  - Hardcore predicate
  - Hard-core predicate
  - Hard-core bit
  - Goldreich-Levin theorem
title: Hardcore predicate
id: hardcore-predicate
---

# Hardcore predicate

A polynomial-time computable predicate $b : \bits^* \to \bits$ is **hardcore** for a function $f : \bits^* \to \bits^*$ if for all efficient $\calA$,

$$
\left|\Pr\!\left[\calA(1^\secpar, f(x)) = b(x)\right] - \tfrac12\right|
$$

is negligible, the probability taken over $x \getsr \bits^\secpar$ and the coins of $\calA$ — [[BM84 - How to Generate Cryptographically Strong Sequences of Pseudo-Random Bits|BM84]], [[Gol01 - Foundations of Cryptography Basic Tools|Gol01]].

An inverter for an injective $f$ with success probability $\delta$ predicts $b(x)$ with advantage $\delta/2$, by outputting $b(z)$ when it returns $z$ with $f(z) = f(x)$ and a uniform bit otherwise; an efficiently computable injective function with a hardcore predicate is therefore [[injective-one-way-function|one-way]] — standard. A non-injective function can have a hardcore predicate for information-theoretic reasons: $b(x) = x_1$ is hardcore for $f(x) = x_2 \cdots x_\secpar$, which is not one-way — standard.

## Goldreich–Levin theorem

For every [[hash-function#preimage-resistance-one-wayness|one-way function]] $f$, the inner-product predicate $b(x, r) := \langle x, r \rangle \bmod 2$, for $|x| = |r|$, is hardcore for $g(x, r) := (f(x), r)$ — [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]]. Quantitatively, let $\calA$ satisfy

$$
\Pr_{x, r \getsr \bits^\secpar}\!\left[\calA(f(x), r) = \langle x, r \rangle \bmod 2\right] \ge \tfrac12 + \varepsilon.
$$

Then an algorithm given $\varepsilon$, making $\poly(\secpar, 1/\varepsilon)$ calls to $\calA$ and to $f$ and doing $\poly(\secpar, 1/\varepsilon)$ further work, outputs a preimage of $f(x)$ for $x \getsr \bits^\secpar$ with probability $\Omega(\varepsilon)$ — [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]], [[Gol01 - Foundations of Cryptography Basic Tools|Gol01]].

By averaging over $x$ and the coins $\omega$ of $\calA$, at least an $\varepsilon/2$ fraction of pairs $(x, \omega)$ satisfy $\Pr_r[\calA(f(x), r; \omega) = \langle x, r \rangle] \ge \tfrac12 + \tfrac{\varepsilon}{2}$. For each such pair, $r \mapsto \calA(f(x), r; \omega)$ agrees with the Hadamard encoding $(\langle x, r \rangle)_{r \in \bits^\secpar}$ of $x$ on at least a $\tfrac12 + \tfrac{\varepsilon}{2}$ fraction of positions, and the list decoder outputs, with probability at least $\tfrac12$, a list of $\poly(\secpar, 1/\varepsilon)$ candidates containing $x$. Testing each candidate $z$ for $f(z) = f(x)$ inverts $f$ with probability at least $\varepsilon/4$ — [[Gol01 - Foundations of Cryptography Basic Tools|Gol01]].

### Simultaneously hardcore bits

Predicates $b_1, \ldots, b_\ell$ are **simultaneously hardcore** for $f$ if $(f(x), b_1(x), \ldots, b_\ell(x))$ and $(f(x), U_\ell)$ are computationally indistinguishable, for $x \getsr \bits^\secpar$ and $U_\ell$ uniform on $\bits^\ell$. The Goldreich–Levin theorem extends to $O(\log \secpar)$ simultaneously hardcore inner-product bits, and more generally to a number of bits logarithmic in the security of $f$ — [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]]. For instance, with $r_1, \ldots, r_\ell \getsr \bits^\secpar$ independent and $\ell = O(\log \secpar)$, the bits $\langle x, r_1 \rangle, \ldots, \langle x, r_\ell \rangle$ are simultaneously hardcore for $(x, r_1, \ldots, r_\ell) \mapsto (f(x), r_1, \ldots, r_\ell)$: each nonempty XOR $\bigoplus_{i \in S} \langle x, r_i \rangle = \langle x, \bigoplus_{i \in S} r_i \rangle$ is an inner-product bit with a uniform second argument, and the computational XOR lemma of [[VV84 - Efficient and Secure Pseudo-Random Number Generation|VV84]] turns a distinguisher into a predictor for one of these XORs at a loss polynomial in $2^\ell$ — [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]].

## Specific hardcore predicates

- **Discrete logarithm.** For a prime $p$ and a generator $g$ of $\ZZ_p^*$, the half-interval predicate $[x \ge (p-1)/2]$ is hardcore for $x \mapsto g^x \bmod p$ on $\{0, \ldots, p-2\}$ if [[discrete-logarithm|DLOG]] is hard in $\ZZ_p^*$ — [[BM84 - How to Generate Cryptographically Strong Sequences of Pseudo-Random Bits|BM84]]. The least significant bit of $x$ is not: $x$ is even if and only if $g^x$ is a quadratic residue modulo $p$, which Euler's criterion decides — standard.
- **RSA and Rabin.** Predicting the least significant bit of $x$ from $(N, e, x^e \bmod N)$ with non-negligible advantage is probabilistic polynomial-time equivalent to inverting RSA, so the least significant bit is hardcore for the RSA function if the [[rsa-assumption|RSA assumption]] holds; the same equivalence holds for the Rabin function $x \mapsto x^2 \bmod N$ on $\QR_N$, for a [[factoring#factoring-blum-integers|Blum integer]] $N$, where squaring is a permutation — [[ACGS88 - RSA and Rabin Functions Certain Parts are as Hard as the Whole|ACGS88]]. Inverting the Rabin function is as hard as [[factoring|factoring]] $N$ — [[Rab79 - Digitalized Signatures and Public-Key Functions as Intractable as Factorization|Rab79]].

## Uses

A hardcore predicate of a [[one-way-permutation|one-way permutation]] gives a [[pseudorandom-generator|PRG]] ([[owp-to-prg-yao82a-gl89|OWP ⇒ PRG]]) — [[BM84 - How to Generate Cryptographically Strong Sequences of Pseudo-Random Bits|BM84]], [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]]; a hardcore predicate of a [[trapdoor-permutation|trapdoor permutation]] gives a [[public-key-encryption#cpa-security|CPA-secure PKE]] ([[tdp-to-pke|TDP ⇒ PKE]]) — [[GM84 - Probabilistic encryption|GM84]], [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]].

<!-- BEGIN GENERATED participates-in 3d6086afd489 -->

## Participates in

**Used via Hardcore predicate**

- [[cdh-to-non-interactive-key-exchange-dh76|CDH ⇒ NIKE (Diffie–Hellman with a hard-core bit)]]
- [[enhanced-trapdoor-permutations-to-ot-gkm-00|Enhanced trapdoor permutations ⇒ OT]]
- [[factoring-blum-integers-and-uowhf-to-pke-cca2-security-hk09|Factoring + UOWHF ⇒ CCA-secure PKE (Hofheinz–Kiltz)]]
- [[owf-to-prg-hill99|OWF ⇒ PRG]]
- [[owp-to-prg-yao82a-gl89|OWP ⇒ PRG (Blum–Micali–Yao)]]
- [[tdp-to-pke|TDP ⇒ PKE]]

<!-- END GENERATED participates-in -->
