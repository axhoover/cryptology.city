---
type: assumption
status: draft
aliases:
  - NTRU
title: NTRU
id: ntru
variants:
  ntru-ow-cpa: "#one-wayness-of-ntru-encryption"
---

# NTRU

The _NTRU assumption_ is a lattice-based hardness assumption over polynomial rings, introduced alongside the NTRU public-key cryptosystem ([[ntru-to-pke-hps98|NTRU ⇒ PKE]]) — [[HPS98 - NTRU a ring-based public key cryptosystem|HPS98]]. The public key is a ratio $h = g \cdot f^{-1} \bmod q$ of two ternary polynomials, and hardness asserts that no efficient algorithm finds, from $h$ alone, a ternary pair $(\hat{f}, \hat{g})$ with $\hat{f}$ invertible and $h \cdot \hat{f} \equiv \hat{g} \pmod{q}$.

## Assumption

The assumption is parameterized by a degree $n$, a modulus $q$, a small modulus $p$ (typically $p = 3$) with $\gcd(p, q) = 1$, and the numbers $d_f, d_g$ of nonzero coefficients of the secret polynomials. All arithmetic takes place in the ring $R = \ZZ[x]/(x^n - 1)$, with reductions modulo $q$ taken coefficient-wise into $[-q/2, q/2)$. For integers $d_1, d_2 \ge 0$ with $d_1 + d_2 \le n$, $\calL(d_1, d_2) \subset R$ is the set of polynomials with $d_1$ coefficients equal to $1$, $d_2$ coefficients equal to $-1$ and the rest $0$ — [[HPS98 - NTRU a ring-based public key cryptosystem|HPS98]]; $\calT \subset R$ is the set of polynomials with all coefficients in $\{-1, 0, 1\}$.

**Key generation.** Sample $f$ uniformly from the polynomials in $\calL(d_f, d_f - 1)$ that are invertible modulo both $p$ and $q$, and $g \getsr \calL(d_g, d_g)$. Set

$$h \equiv g \cdot f^{-1} \pmod{q}.$$

The public key is $h$; the private key is $(f, g)$.

### NTRU Problem

Given only $h$, the NTRU problem asks for a pair $(\hat{f}, \hat{g}) \in \calT^2$ with $\hat{f}$ invertible modulo $q$ and $h \cdot \hat{f} \equiv \hat{g} \pmod{q}$; the private key $(f, g)$ is one such pair.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{ntru}}_{n,p,q,d_f,d_g,\calA}(\secpar)$}
\begin{algorithmic}
\State $f \getsr \{f \in \calL(d_f, d_f - 1) : f \text{ invertible modulo } p \text{ and } q\}$; $g \getsr \calL(d_g, d_g)$
\State $h \gets g \cdot f^{-1} \bmod q$
\State $(\hat{f}, \hat{g}) \gets \calA(1^\secpar, h)$
\Return $[\hat{f}, \hat{g} \in \calT\ \wedge\ \hat{f}\ \text{invertible modulo}\ q\ \wedge\ h \cdot \hat{f} \equiv \hat{g} \pmod{q}]$
\end{algorithmic}
\end{algorithm}
```

**NTRU is hard** if for some $\poly(\secpar)$-computable functions $n(\secpar), q(\secpar), d_f(\secpar), d_g(\secpar)$ with $n(\secpar), q(\secpar) \le \poly(\secpar)$, $d_f \ge 1$, $2d_f - 1 \le n$ and $2d_g \le n$, and a constant $p \ge 2$ with $\gcd(p, q(\secpar)) = 1$, such that for every $\secpar$ some $f \in \calL(d_f, d_f - 1)$ is invertible modulo $p$ and $q$, for all efficient $\calA$,

$$
\Adv^{\text{ntru}}_{n,p,q,d_f,d_g,\calA}(\secpar) := \Pr\!\left[\Game^{\text{ntru}}_{n,p,q,d_f,d_g,\calA}(\secpar) = 1\right]
$$

is negligible. Requiring $\hat{f}$ to be invertible excludes the pair $(1 + x + \cdots + x^{n-1}, 0)$: $g(1) = 0$ forces $h(1) = 0$, so $h \cdot (1 + x + \cdots + x^{n-1}) = h(1) \cdot (1 + x + \cdots + x^{n-1}) \equiv 0 \pmod{q}$ — standard.

### SIS over NTRU lattices

The _NTRU lattice_ of $h$ is $\Lambda_h = \{(u, v) \in R^2 : u + v \cdot h \equiv 0 \pmod{q}\}$, and SIS over NTRU lattices asks, given $h$, for a nonzero $(u, v) \in \Lambda_h$ whose coefficient vector has Euclidean norm at most $\beta$. The GPV hash-and-sign signatures over NTRU lattices of [[DLP14 - Efficient Identity-Based Encryption over NTRU Lattices|DLP14]], instantiated as Falcon, rest on this problem over $\ZZ[x]/(x^n + 1)$, with $f, g$ drawn from a discrete Gaussian — [[DLP14 - Efficient Identity-Based Encryption over NTRU Lattices|DLP14]], [[FHK+20 - Falcon Fast-Fourier Lattice-based Compact Signatures over NTRU|FHK+20]]. Over $R = \ZZ[x]/(x^n - 1)$ with the key distribution above the problem is easy for every $\beta \ge \sqrt{n}$: $h(1) = 0$, so $(0, 1 + x + \cdots + x^{n-1}) \in \Lambda_h$ — standard.

TODO — read DLP14's key width $\sigma_f$, the norm bound $\beta$ and the premises of the signature theorem from eprint 2014/794 or the Falcon specification; then encode this problem over $\ZZ[x]/(x^n + 1)$, with $n(\secpar)$ a power of two, $q(\secpar) \le \poly(\secpar)$ and discrete-Gaussian $f, g$, and record the GPV signature result as a reduction.

### One-wayness of NTRU encryption

NTRU encryption encrypts a message $m \in \calM = \{m \in R : \text{coefficients in } [-(p-1)/2, (p-1)/2]\}$ under $h$ as $c = p \cdot r \cdot h + m \bmod q$ for $r \getsr \calL(d_r, d_r)$; decryption computes $a = f \cdot c \bmod q$ and outputs the element of $\calM$ congruent to $f^{-1} \cdot a$ modulo $p$ — [[HPS98 - NTRU a ring-based public key cryptosystem|HPS98]]. One-wayness asks to recover a uniform $m$ from $(h, c)$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{ntru-ow}}_{n,p,q,d_f,d_g,d_r,\calA}(\secpar)$}
\begin{algorithmic}
\State $f \getsr \{f \in \calL(d_f, d_f - 1) : f \text{ invertible modulo } p \text{ and } q\}$; $g \getsr \calL(d_g, d_g)$
\State $h \gets g \cdot f^{-1} \bmod q$
\State $r \getsr \calL(d_r, d_r)$; $m \getsr \calM$
\State $c \gets p \cdot r \cdot h + m \bmod q$
\State $\hat{m} \gets \calA(1^\secpar, h, c)$
\Return $[\hat{m} = m]$
\end{algorithmic}
\end{algorithm}
```

Decryption is **perfectly correct** at $(n, p, q, d_f, d_g, d_r)$ if $\lVert p \cdot r \cdot g + f \cdot m \rVert_\infty < q/2$ for every $f, g$ in the support of key generation, every $r \in \calL(d_r, d_r)$ and every $m \in \calM$, where $\lVert \cdot \rVert_\infty$ is the largest absolute value of a coefficient. Then $f \cdot c \bmod q = p \cdot r \cdot g + f \cdot m$ over $R$, and reducing modulo $p$ and multiplying by $f^{-1} \bmod p$ recovers $m$ ([[ntru-to-pke-hps98|NTRU ⇒ PKE]]).

**NTRU encryption is one-way** if for some $\poly(\secpar)$-computable functions $n(\secpar), q(\secpar), d_f(\secpar), d_g(\secpar), d_r(\secpar)$ and a constant $p$ satisfying the conditions of the [[#NTRU Problem|NTRU problem]], with $2d_r \le n$ and decryption perfectly correct at every $\secpar$, for all efficient $\calA$,

$$
\Adv^{\text{ntru-ow}}_{n,p,q,d_f,d_g,d_r,\calA}(\secpar) := \Pr\!\left[\Game^{\text{ntru-ow}}_{n,p,q,d_f,d_g,d_r,\calA}(\secpar) = 1\right]
$$

is negligible.

TODO — [[ntru-to-kem|NTRU ⇒ IND-CCA KEM]] takes this game as its premise, but [[HRSS17 - High-Speed Key Encapsulation from NTRU|HRSS17]] build their KEM from "a slightly simplified version of textbook NTRU" over $\Phi_n$, not from the fixed-weight scheme above; encode HRSS17's scheme, its key, $r$ and $m$ distributions and its OW-CPA game from eprint 2017/667 as a separate variant and retarget the reduction to it.

## Related results

- [[ring-lwe-to-ntru-ss11|Ring LWE ⇒ PKE (NTRUEncrypt with Gaussian keys)]] over $\ZZ[x]/(x^n+1)$, not the NTRU problem above — [[SS11 - Making NTRU as secure as worst-case problems over ideal lattices|SS11]]
- [[ntru-to-pke-hps98|NTRU ⇒ PKE]]

# Variations

## NTRU Prime

**NTRU Prime** replaces the ring $\ZZ[x]/(x^n - 1)$ with $\ZZ[x]/(x^n - x - 1)$ for a prime $n$, eliminating the small subgroup structure of $x^n - 1$ that can be exploited by certain attacks.

## NTRU Encrypt / NTRUSign

**NTRUEncrypt** (PKE and KEM variants) and NTRU-HRSS-KEM ([[HRSS17 - High-Speed Key Encapsulation from NTRU|HRSS17]]) were NIST PQC round-1 submissions, merged into the round-2 candidate NTRU — [[CDH+19 - NTRU Algorithm Specifications and Supporting Documentation|CDH+19]]. **NTRUSign** ([[HHPSW03 - NTRUSign Digital Signatures Using the NTRU Lattice|HHPSW03]]) predates the NIST process: its signatures leak the secret basis — [[NR06 - Learning a Parallelepiped Cryptanalysis of GGH and NTRU Signatures|NR06]] — and its perturbation countermeasure is also broken — [[DN12 - Learning a Zonotope and More Cryptanalysis of NTRUSign Countermeasures|DN12]].

# Attacks

- **Lattice reduction (BKZ)**: the NTRU public key $h$ defines a $2n$-dimensional lattice containing short vectors $(f, g)$; BKZ-style algorithms attack this lattice. Parameter sizes have been revised upward over time to maintain security margins against improved BKZ variants.
- **Meet-in-the-middle**: applies when $d_f$ or $d_g$ is small relative to $n$.
- NTRU has no known quantum speedup beyond the generic square-root speedup of Grover's algorithm applied to brute-force lattice search.

<!-- BEGIN GENERATED participates-in 75fbc9aaeff9 -->

## Participates in

**Builds on NTRU**

- [[ntru-to-kem|NTRU ⇒ IND-CCA KEM]] (via [[ntru#one-wayness-of-ntru-encryption|One-wayness of NTRU encryption]])
- [[ntru-to-pke-hps98|NTRU ⇒ PKE]]

<!-- END GENERATED participates-in -->
