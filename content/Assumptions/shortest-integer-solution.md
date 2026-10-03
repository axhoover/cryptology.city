---
type: assumption
status: draft
aliases:
  - SIS
  - Shortest Integer Solution
title: Shortest Integer Solution
id: sis
variants:
  module-sis: "#module-sis"
  inhomogeneous-sis: "#isis-inhomogeneous-sis"
  ring-sis: "#ring-sis"
---

# Shortest Integer Solution

The _Shortest Integer Solution (SIS)_ problem is a lattice problem used as the hardness foundation for collision-resistant hash functions and lattice-based signature schemes. Unlike [[learning-with-errors|LWE]], which is an indistinguishability problem, SIS is a search problem.

## Assumption

Informally, SIS asks: given a random matrix $\mathbf{A} \in \ZZ_q^{n \times m}$, find a nonzero short integer vector $\mathbf{z} \in \ZZ^m$ in the kernel of $\mathbf{A}$ modulo $q$. Such a vector always exists when $m > n \log q$ (by a pigeonhole argument), so the hardness lies purely in _finding_ one efficiently.

The assumption is parameterized by a lattice dimension $n$, a column count $m$, a modulus $q$, and a norm bound $\beta$. Typical parameters satisfy $q = \poly(n)$, $m = \Theta(n \log q)$, and $\beta \ll q$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{sis}}_{n,m,q,\beta,\calA}(\secpar)$}
\begin{algorithmic}
\State $\mathbf{A} \getsr \ZZ_q^{n \times m}$
\State $\mathbf{z} \gets \calA(1^\secpar, \mathbf{A})$
\Return $[\mathbf{A}\mathbf{z} = \mathbf{0} \pmod{q} \;\wedge\; \mathbf{z} \neq \mathbf{0} \;\wedge\; \|\mathbf{z}\|_2 \leq \beta]$
\end{algorithmic}
\end{algorithm}
```

**SIS is hard** for $(n, m, q, \beta)$ if for all efficient $\calA$,

$$
\Adv^{\text{sis}}_{n,m,q,\beta,\calA}(\secpar) := \Pr\!\left[\Game^{\text{sis}}_{n,m,q,\beta,\calA}(\secpar) = 1\right]
$$

is negligible. Here $\|\cdot\|$ is the Euclidean norm; the ISIS, Ring-SIS and Module-SIS variants below use the same norm on the coefficient vector. An $\ell_\infty$ version ($\|\mathbf{z}\|_\infty \leq \beta$) is also used, e.g. Module-SIS in Dilithium — [[DKL+18 - CRYSTALS-Dilithium A Lattice-Based Digital Signature Scheme|DKL+18]].

## Known Results

### Worst-case hardness

Solving SIS on average (over a uniformly random $\mathbf{A}$) is at least as hard as approximating the **Shortest Vector Problem (GapSVP)** and the **Shortest Independent Vectors Problem (SIVP)** to within polynomial factors in the **worst case** — [[Ajt96 - Generating hard instances of lattice problems|Ajt96]]. This is a classical (non-quantum) worst-case-to-average-case reduction: any efficient algorithm that breaks SIS with noticeable probability on random inputs can be converted into an efficient algorithm for these worst-case lattice problems.

### Collision-resistant hash functions

The function family $\{f_\mathbf{A} : \mathbf{z} \mapsto \mathbf{Az} \bmod q\}$, restricted to inputs $\mathbf{z} \in \{0, \ldots, \lfloor \beta/\sqrt{m} \rfloor\}^m$, is a [[collision-resistant-hash-function|collision-resistant hash function]] family under SIS hardness — [[Ajt96 - Generating hard instances of lattice problems|Ajt96]], [[GGH96 - Collision-Free Hashing from Lattice Problems|GGH96]]. Any collision $f_\mathbf{A}(\mathbf{z}) = f_\mathbf{A}(\mathbf{z}')$ with $\mathbf{z} \neq \mathbf{z}'$ yields $\mathbf{A}(\mathbf{z} - \mathbf{z}') = \mathbf{0} \pmod q$ with $\|\mathbf{z} - \mathbf{z}'\| \leq \beta$, which is exactly a SIS solution.

## Attacks

- **Lattice reduction (LLL/BKZ):** The best known attacks find short vectors in the $q$-ary lattice $\Lambda^\perp(\mathbf{A}) = \{\mathbf{z} \in \ZZ^m : \mathbf{Az} = \mathbf{0} \pmod q\}$ using BKZ-style block reduction algorithms. Runtime is exponential in the block size $b$: $2^{\Theta(b)}$ with a sieving SVP oracle — _standard_.

# Variations

## ISIS (Inhomogeneous SIS)

**Inhomogeneous SIS (ISIS)** generalizes SIS by replacing the homogeneous target $\mathbf{0}$ with an arbitrary syndrome. Given $\mathbf{A} \getsr \ZZ_q^{n \times m}$ and a target $\mathbf{t} \getsr \ZZ_q^n$, find a short $\mathbf{z} \in \ZZ^m$ with $\mathbf{Az} = \mathbf{t} \pmod{q}$ and $\|\mathbf{z}\| \leq \beta$.

ISIS is polynomially equivalent to SIS under mild parameter conditions, and is the hard-preimage problem underlying lattice-based digital signatures: a signature on a message $\mu$ is a short preimage $\mathbf{z}$ satisfying $\mathbf{Az} = H(\mu) \pmod q$ for a hash function $H$ — [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]].

## Ring-SIS

**Ring-SIS** replaces the random matrix $\mathbf{A} \in \ZZ_q^{n \times m}$ with a structured matrix defined by $\ell = m/n$ elements of the polynomial ring $R_q = \ZZ_q[x]/\langle x^n + 1 \rangle$ (for $n$ a power of 2). Specifically, the matrix is the concatenation of the negacyclic convolution matrices of random $a_1, \ldots, a_\ell \getsr R_q$, and a Ring-SIS solution is a short nonzero $(z_1, \ldots, z_\ell) \in R^\ell$ with $\sum_i a_i z_i = 0$ in $R_q$ — [[LM06 - Generalized compact knapsacks, cyclic lattices, and efficient one-way functions|LM06]], [[PR06 - Efficient Collision-Resistant Hashing from Worst-Case Assumptions on Cyclic Lattices|PR06]].

Ring-SIS enjoys the same worst-case-to-average-case hardness as plain SIS, now reducing from ideal-SVP (shortest vectors in ideal lattices), and enables $O(n \log n)$-time ring products and $m \log q$-bit keys rather than $nm \log q$ — [[LM06 - Generalized compact knapsacks, cyclic lattices, and efficient one-way functions|LM06]].

## Module-SIS

**Module-SIS** interpolates between plain SIS (unstructured) and Ring-SIS (fully structured) by using rank-$k$ modules over $R_q$. The random matrix $\mathbf{A} \in R_q^{k \times \ell}$ has ring elements as entries, and a Module-SIS solution is a short nonzero vector $\mathbf{z} \in R^\ell$ with $\mathbf{Az} = \mathbf{0}$ in $R_q^k$. Setting $k = 1$ recovers Ring-SIS; setting the ring degree $n = 1$ (so $R = \ZZ$) recovers plain SIS — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]].

Hardness of Module-SIS reduces to worst-case problems on module lattices — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]]. Dilithium (ML-DSA, FIPS 204) is unforgeable in the random-oracle model under Module-SIS together with [[learning-with-errors#module-lwe|Module LWE]] ([[module-lwe-and-module-sis-to-ds|Module LWE + Module-SIS ⇒ DS]]) — [[DKL+18 - CRYSTALS-Dilithium A Lattice-Based Digital Signature Scheme|DKL+18]].

<!-- BEGIN GENERATED participates-in 11b9d6f13adb -->

## Participates in

**Builds on Shortest Integer Solution**

- [[isis-inhomogeneous-sis-to-sis|ISIS (Inhomogeneous SIS) ⇔ SIS]] (via [[shortest-integer-solution#isis-inhomogeneous-sis|inhomogeneous-sis]])
- [[module-lwe-and-module-sis-to-ds|Module LWE + Module-SIS ⇒ DS]] (via [[shortest-integer-solution#module-sis|module-sis]])
- [[sis-to-ds|SIS ⇒ DS]]
- [[sis-to-hash-function-ajt96|SIS ⇒ CRHF]]

**Produces Shortest Integer Solution**

- [[gapsvp-to-sis-ajt96|GapSVP ⇒ SIS]]
- [[ideal-svp-to-ring-sis-lm06|Ideal-SVP ⇒ Ring-SIS]] (via [[shortest-integer-solution#ring-sis|ring-sis]])
- [[isis-inhomogeneous-sis-to-sis|ISIS (Inhomogeneous SIS) ⇔ SIS]]
- [[module-svp-to-module-sis-ls15|Module-SIVP ⇒ Module-SIS]] (via [[shortest-integer-solution#module-sis|module-sis]])
- [[sivp-to-sis-ajt96|SIVP ⇒ SIS]]

<!-- END GENERATED participates-in -->
