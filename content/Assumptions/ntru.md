---
type: assumption
status: draft
aliases:
  - NTRU
title: NTRU
id: ntru
variants:
  ntru-sis: "#sis-over-ntru-lattices"
  ntru-ow-cpa: "#one-wayness-of-ntru-encryption"
---

# NTRU

The _NTRU assumption_ is a lattice-based hardness assumption over polynomial rings, introduced alongside the NTRU public-key cryptosystem — [[HPS98 - NTRU a ring-based public key cryptosystem|HPS98]]. The public key looks like a ratio $h = g \cdot f^{-1} \bmod q$ of two short polynomials, and hardness asserts that recovering $f$ (or $g$) from $h$ alone is computationally infeasible.

## Assumption

The assumption is parameterized by a degree $n$, a large modulus $q$, a small modulus $p$ (typically $p = 3$), and bounds $d_f, d_g$ on the number of nonzero coefficients of the secret polynomials. All arithmetic takes place in the ring $R = \ZZ[x]/(x^n - 1)$, with reductions modulo $q$ taken coefficient-wise into $[-q/2, q/2)$.

**Key generation.** Sample short polynomials $f, g \in R$ with coefficients in $\{-1, 0, 1\}$ (with $d_f$ ones and $d_f - 1$ negative ones for $f$, and $d_g$ ones and $d_g$ negative ones for $g$). Require that $f$ is invertible modulo both $p$ and $q$. Set

$$h \equiv g \cdot f^{-1} \pmod{q}.$$

The public key is $h$; the private key is $(f, g)$.

### NTRU Problem

Given only $h$, the NTRU problem asks to recover short polynomials $(\hat{f}, \hat{g})$ satisfying the same relation.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{ntru}}_{n,q,d_f,d_g,\calA}(\secpar)$}
\begin{algorithmic}
\State Sample short $f, g \in R$ with $\lVert f \rVert, \lVert g \rVert \le 1$ coefficientwise
\State $h \gets g \cdot f^{-1} \bmod q$
\State $(\hat{f}, \hat{g}) \gets \calA(1^\secpar, n, q, h)$
\Return $[h \cdot \hat{f} \equiv \hat{g} \pmod{q}\ \wedge\ \hat{f}, \hat{g}\ \text{are short}]$
\end{algorithmic}
\end{algorithm}
```

**NTRU is hard** for parameters $(n, q, d_f, d_g)$ if for all efficient $\calA$,

$$
\Adv^{\text{ntru}}_{n,q,d_f,d_g,\calA}(\secpar) := \Pr\!\left[\Game^{\text{ntru}}_{n,q,d_f,d_g,\calA}(\secpar) = 1\right]
$$

is negligible.

### SIS over NTRU lattices

The _NTRU lattice_ of $h$ is $\Lambda_h = \{(u, v) \in R^2 : u + v \cdot h \equiv 0 \pmod{q}\}$. Given only $h$, SIS over NTRU lattices asks for a nonzero $(u, v) \in \Lambda_h$ whose coefficient vector has Euclidean norm at most $\beta$. Falcon's security rests on this problem over $\ZZ[x]/(x^n + 1)$, with $f, g$ drawn from a discrete Gaussian — [[FHK+20 - Falcon Fast-Fourier Lattice-based Compact Signatures over NTRU|FHK+20]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{ntru-sis}}_{n,q,d_f,d_g,\beta,\calA}(\secpar)$}
\begin{algorithmic}
\State Sample $f, g \in R$ as in key generation
\State $h \gets g \cdot f^{-1} \bmod q$
\State $(u, v) \gets \calA(1^\secpar, n, q, h)$
\Return $[(u, v) \neq (0, 0)\ \wedge\ u + v \cdot h \equiv 0 \pmod{q}\ \wedge\ \lVert (u, v) \rVert \le \beta]$
\end{algorithmic}
\end{algorithm}
```

**SIS over NTRU lattices is hard** for parameters $(n, q, d_f, d_g, \beta)$ if for all efficient $\calA$,

$$
\Adv^{\text{ntru-sis}}_{n,q,d_f,d_g,\beta,\calA}(\secpar) := \Pr\!\left[\Game^{\text{ntru-sis}}_{n,q,d_f,d_g,\beta,\calA}(\secpar) = 1\right]
$$

is negligible.

### One-wayness of NTRU encryption

NTRU encryption encrypts a message $m$ in $\calM = \{m \in R : \text{coefficients in } [-(p-1)/2, (p-1)/2]\}$ under $h$ as $c = p \cdot r \cdot h + m \bmod q$, for a random short $r \in R$ — [[HPS98 - NTRU a ring-based public key cryptosystem|HPS98]]. One-wayness asks to recover $m$ from $(h, c)$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{ntru-ow}}_{n,p,q,d_f,d_g,\calA}(\secpar)$}
\begin{algorithmic}
\State Sample $f, g \in R$ as in key generation
\State $h \gets g \cdot f^{-1} \bmod q$
\State Sample short $r \in R$; $m \getsr \calM$
\State $c \gets p \cdot r \cdot h + m \bmod q$
\State $\hat{m} \gets \calA(1^\secpar, n, q, h, c)$
\Return $[\hat{m} = m]$
\end{algorithmic}
\end{algorithm}
```

**NTRU encryption is one-way** for parameters $(n, p, q, d_f, d_g)$ if for all efficient $\calA$,

$$
\Adv^{\text{ntru-ow}}_{n,p,q,d_f,d_g,\calA}(\secpar) := \Pr\!\left[\Game^{\text{ntru-ow}}_{n,p,q,d_f,d_g,\calA}(\secpar) = 1\right]
$$

is negligible.

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

<!-- BEGIN GENERATED participates-in f71c66281418 -->

## Participates in

**Builds on NTRU**

- [[ntru-to-ds|NTRU + NTRU-SIS ⇒ DS]]
- [[ntru-to-kem|NTRU ⇒ IND-CCA KEM]] (via [[ntru#one-wayness-of-ntru-encryption|One-wayness of NTRU encryption]])
- [[ntru-to-pke-hps98|NTRU ⇒ PKE]]

<!-- END GENERATED participates-in -->
