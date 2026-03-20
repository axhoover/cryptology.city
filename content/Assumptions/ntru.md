---
aliases:
  - NTRU
title: NTRU
---
# NTRU

The *NTRU assumption* is a lattice-based hardness assumption over polynomial rings, introduced alongside the NTRU public-key cryptosystem — [[HPS98 - NTRU a ring-based public key cryptosystem|HPS98]]. The public key looks like a ratio $h = g \cdot f^{-1} \bmod q$ of two short polynomials, and hardness asserts that recovering $f$ (or $g$) from $h$ alone is computationally infeasible.

## Assumption

The assumption is parameterized by a degree $n$, a large modulus $q$, a small modulus $p$ (typically $p = 3$), and bounds $d_f, d_g$ on the number of nonzero coefficients of the secret polynomials. All arithmetic takes place in the ring $R = \ZZ[x]/(x^n - 1)$, with reductions modulo $q$ taken coefficient-wise into $\{-q/2, \ldots, q/2)$.

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

## Related results

- Under a suitable choice of parameters, the NTRU problem reduces to the [[learning-with-errors#Ring LWE|Ring-LWE]] problem: Ring-LWE hardness implies NTRU hardness — [[SS11 - Making NTRU as secure as worst-case problems over ideal lattices|SS11]]
- NTRU implies [[public-key-encryption|PKE]] — [[HPS98 - NTRU a ring-based public key cryptosystem|HPS98]]

# Variations

## NTRU Prime

**NTRU Prime** replaces the ring $\ZZ[x]/(x^n - 1)$ with $\ZZ[x]/(x^n - x - 1)$ for a prime $n$, eliminating the small subgroup structure of $x^n - 1$ that can be exploited by certain attacks.

## NTRU Encrypt / NTRUSign

The original NTRU submissions to NIST PQC standardization include **NTRUEncrypt** (a key encapsulation mechanism) and the historically proposed **NTRUSign** (a signature scheme, later broken and withdrawn).

# Attacks

- **Lattice reduction (BKZ)**: the NTRU public key $h$ defines a $2n$-dimensional lattice containing short vectors $(f, g)$; BKZ-style algorithms attack this lattice. Parameter sizes have been revised upward over time to maintain security margins against improved BKZ variants.
- **Meet-in-the-middle**: applies when $d_f$ or $d_g$ is small relative to $n$.
- NTRU has no known quantum speedup beyond the generic square-root speedup of Grover's algorithm applied to brute-force lattice search.
