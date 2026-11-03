---
type: assumption
status: draft
aliases:
  - FAC
  - Factoring
  - Integer factoring
  - Factoring assumption
  - IFP
title: Factoring assumption
id: fac
variants:
  factoring-blum-integers: "#factoring-blum-integers"
---

# Factoring assumption

The _factoring assumption_ states that there is no efficient algorithm that factors the product $N = pq$ of two large, random, equal-length primes $p$ and $q$.

## Assumption

For security parameter $\secpar$, let $p, q$ be independently uniform random $\secpar$-bit primes and $N = pq$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{fac}}_{\calA}(\secpar)$}
\begin{algorithmic}
\State $p, q \getsr$ independent uniform $\secpar$-bit primes; $N \gets pq$
\State $p' \gets \calA(1^\secpar, N)$
\Return $[p' \in \{p, q\}]$
\end{algorithmic}
\end{algorithm}
```

The _factoring advantage_ of an adversary $\calA$ is

$$
\Adv^{\mathrm{fac}}_{\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{fac}}_{\calA}(\secpar) = 1\right].
$$

**Factoring is hard** if for all efficient $\calA$, $\Adv^{\mathrm{fac}}_{\calA}(\secpar)$ is negligible.

## Known Results

- [[rsa-assumption|RSA]] hardness implies factoring hardness, since the factors of $N$ give $\varphi(N)$ and hence the decryption exponent — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]; the converse is open in the standard model, and [[rsa-to-fac-dlo24|RSA ⇔ FAC]] holds in the generic ring model — [[AM09 - Breaking RSA Generically Is Equivalent to Factoring|AM09]], [[DLO24 - Breaking RSA Generically Is Equivalent to Factoring, with Preprocessing|DLO24]]
- [[fac-to-qr-gm84|QR ⇒ FAC]]: [[quadratic-residuosity|QR]] hardness for Blum moduli implies hardness of factoring them — folklore; the converse is open — folklore.
- [[fac-to-dcr-pai99|DCR ⇒ FAC]]; the converse is open — folklore.

# Variations

## Strong RSA assumption

The [[rsa-assumption#strong-rsa|strong RSA assumption]] lets the adversary choose the exponent: given $N$ and a random $y \in \ZZ_N^*$, it must output $(\hat{x}, \hat{e})$ with $\hat{e} > 1$ and $\hat{x}^{\hat{e}} \equiv y \pmod{N}$ — [[BP97 - Collision-Free Accumulators and Fail-Stop Signature Schemes Without Trees|BP97]], [[FO97 - Statistical Zero Knowledge Protocols to Prove Modular Polynomial Relations|FO97]]. Its hardness implies [[rsa-assumption|RSA]] hardness whenever the RSA exponent $e$ can be sampled efficiently given $N$, as for a fixed $e$ or a random prime ([[strong-rsa-to-rsa|Strong RSA ⇒ RSA]]) — folklore.

## Factoring Blum integers

For security parameter $\secpar$, let $p, q$ be independent uniform $\secpar$-bit primes with $p \equiv q \equiv 3 \pmod 4$, and $N := pq$, a _Blum integer_. **Factoring Blum integers is hard** if for all efficient $\calA$,

$$
\Pr\!\left[\calA(1^\secpar, N) \in \{p, q\}\right]
$$

is negligible. Squaring modulo a Blum integer permutes $\QR_N$ — [[BBS86 - A Simple Unpredictable Pseudo-Random Number Generator|BBS86]] — which makes Rabin's function, whose inversion is as hard as factoring — [[Rab79 - Digitalized Signatures and Public-Key Functions as Intractable as Factorization|Rab79]] — a trapdoor permutation; Blum integers also underlie the Blum–Blum–Shub generator — [[BBS86 - A Simple Unpredictable Pseudo-Random Number Generator|BBS86]].

# Attacks

For $0 \le \alpha \le 1$ and $c > 0$, write $L_N[\alpha, c] := \exp\!\big((c + o(1))(\ln N)^{\alpha}(\ln\ln N)^{1-\alpha}\big)$, so $L_N[0, c] = (\ln N)^{c + o(1)}$ and $L_N[1, c] = N^{c + o(1)}$. A _heuristic_ running time rests on an unproven assumption that some quantity (an iterated map, the smoothness of auxiliary integers) behaves as it would for random inputs.

- **Trial division** finds the smallest prime factor $p$ of $N$ with at most $p$ divisions, so $O(\sqrt{N})$ divisions for $N = pq$ — standard.
- **Pollard's $p - 1$ method**: for $M = \operatorname{lcm}(1, \ldots, B)$ and $a \in \ZZ_N^*$, $\gcd(a^M - 1, N)$ is divisible by every prime factor $p$ of $N$ such that every prime power dividing $p - 1$ is at most $B$, and computing it takes $O(B)$ multiplications modulo $N$ — [[Pol74 - Theorems on Factorization and Primality Testing|Pol74]].
- **Pollard's $\rho$ method** finds a prime factor $p$ of $N$ with a heuristic expected $O(\sqrt{p})$ multiplications modulo $N$, so $O(N^{1/4})$ for $N = pq$ with $p \le q$ — [[Pol75 - A Monte Carlo Method for Factorization|Pol75]].
- **Elliptic curve method (ECM)** finds a prime factor $p$ of $N$ in conjectured expected time $L_p[1/2, \sqrt{2}] \cdot \poly(\log N)$ — [[Len87 - Factoring Integers with Elliptic Curves|Len87]]; for $N = pq$ with $p$ and $q$ of equal bit length this is $L_N[1/2, 1]$.
- **Quadratic sieve** factors $N$ in heuristic time $L_N[1/2, 1]$, whatever the sizes of its prime factors — [[Pom84 - The Quadratic Sieve Factoring Algorithm|Pom84]].
- **Number field sieve (NFS)**: the special NFS factors $N = r^e - s$ with small $r$ and $|s|$ in heuristic time $L_N[1/3, (32/9)^{1/3}]$ — [[LLMP90 - The Number Field Sieve|LLMP90]]; the general NFS factors every $N$ in heuristic time $L_N[1/3, (64/9)^{1/3}] \approx L_N[1/3, 1.923]$ — [[BLP93 - Factoring Integers with the Number Field Sieve|BLP93]].
- **Multiple number field sieve**: Coppersmith's variant of the general NFS with several number fields runs in heuristic time $L_N[1/3, c]$ with $c = \big((92 + 26\sqrt{13})/27\big)^{1/3} \approx 1.902$ — [[Cop93 - Modifications to the Number Field Sieve|Cop93]].
- **Quantum**: Shor's algorithm — polynomial time $O((\log N)^3)$ — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]. See [[fac-to-bqp-shor97|FAC ∈ BQP (Shor)]].

<!-- BEGIN GENERATED participates-in 81d5d93f48a9 -->

## Participates in

**Builds on Factoring assumption**

- [[fac-to-bqp-shor97|FAC ∈ BQP (Shor)]]
- [[fac-to-conp-pra75|FAC ∈ coNP]]
- [[fac-to-ds-gmr88|FAC ⇒ DS]]
- [[fac-to-factoring-blum-integers|FAC ⇒ Factoring Blum integers]]
- [[fac-to-np|FAC ∈ NP]]
- [[fac-to-ppa-jer16|FAC ∈ PPA (under randomized reductions)]]
- [[fac-to-pwpp-jer16|FAC ∈ PWPP (under randomized reductions)]]
- [[fac-to-sequential-squaring-rs20|FAC ⇒ Sequential squaring (generic ring model)]]
- [[fac-to-tfnp|FAC ⊆ TFNP]]
- [[factoring-blum-integers-and-uowhf-to-pke-cca2-security-hk09|Factoring + UOWHF ⇒ CCA-secure PKE (Hofheinz–Kiltz)]] (via [[factoring#factoring-blum-integers|Factoring Blum integers]])
- [[factoring-blum-integers-to-bqp-shor97|Factoring Blum integers ∈ BQP (Shor)]] (via [[factoring#factoring-blum-integers|Factoring Blum integers]])
- [[factoring-blum-integers-to-claw-free-permutations-gmr88|Factoring ⇒ Claw-free permutations (GMR)]] (via [[factoring#factoring-blum-integers|Factoring Blum integers]])
- [[factoring-blum-integers-to-identification-scheme-ffs88|Factoring ⇒ ID (Feige–Fiat–Shamir)]] (via [[factoring#factoring-blum-integers|Factoring Blum integers]])
- [[factoring-blum-integers-to-pke-cpa-security-bg84|Factoring ⇒ CPA-secure PKE (Blum–Goldwasser)]] (via [[factoring#factoring-blum-integers|Factoring Blum integers]])
- [[factoring-blum-integers-to-tdp-rab79|Factoring ⇒ TDP (Rabin)]] (via [[factoring#factoring-blum-integers|Factoring Blum integers]])
- [[factoring-with-known-factor-structure-to-prg|Factoring with known factor structure ⇒ PRG]] (via [[factoring#factoring-blum-integers|Factoring Blum integers]])

**Produces Factoring assumption**

- [[fac-to-dcr-pai99|DCR ⇒ FAC]]
- [[fac-to-factoring-blum-integers|FAC ⇒ Factoring Blum integers]] (via [[factoring#factoring-blum-integers|Factoring Blum integers]])
- [[fac-to-qr-gm84|QR ⇒ FAC]] (via [[factoring#factoring-blum-integers|Factoring Blum integers]])
- [[rsa-to-fac-dlo24|RSA ⇔ FAC]]
- [[fac-to-rsa-rsa78|RSA ⇒ FAC]]
- [[sequential-squaring-to-fac-rsw96|Sequential squaring ⇒ FAC]]

**Barriers**

- [[no-fac-to-low-exponent-rsa-bv98|No straight-line reduction from FAC to low-exponent RSA]]

<!-- END GENERATED participates-in -->
