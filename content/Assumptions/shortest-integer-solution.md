---
type: assumption
status: draft
aliases:
  - SIS
  - Shortest Integer Solution
  - Ring-SIS
  - Module-SIS
  - ISIS
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

**SIS is hard** for $(n, m, q, \beta)$ with $m > n \log q$ and $\sqrt{m} \le \beta < q$, the regime in which a $\{-1, 0, 1\}$ solution always exists and the trivial solution $q\mathbf{e}_1$ is excluded, if for all efficient $\calA$,

$$
\Adv^{\text{sis}}_{n,m,q,\beta,\calA}(\secpar) := \Pr\!\left[\Game^{\text{sis}}_{n,m,q,\beta,\calA}(\secpar) = 1\right]
$$

is negligible. Here $\|\cdot\|$ is the Euclidean norm; the ISIS, Ring-SIS and Module-SIS variants below use the same norm on the coefficient vector. An $\ell_\infty$ version ($\|\mathbf{z}\|_\infty \leq \beta$) is also used, e.g. Module-SIS in Dilithium — [[DKL+18 - CRYSTALS-Dilithium A Lattice-Based Digital Signature Scheme|DKL+18]].

## Known Results

### Worst-case hardness

Solving SIS on average (over a uniformly random $\mathbf{A}$) is at least as hard as approximating the **Shortest Vector Problem (GapSVP)** and the **Shortest Independent Vectors Problem (SIVP)** to within polynomial factors in the **worst case** — [[Ajt96 - Generating hard instances of lattice problems|Ajt96]]. This is a classical (non-quantum) worst-case-to-average-case reduction: any efficient algorithm that breaks SIS with noticeable probability on random inputs can be converted into an efficient algorithm for these worst-case lattice problems.

### Collision-resistant hash functions

The function family $\{f_\mathbf{A} : \mathbf{z} \mapsto \mathbf{Az} \bmod q\}$, restricted to inputs $\mathbf{z} \in \{0, \ldots, \lfloor \beta/\sqrt{m} \rfloor\}^m$, is a [[hash-function#collision-resistance|collision-resistant hash function]] family under SIS hardness — [[Ajt96 - Generating hard instances of lattice problems|Ajt96]], [[GGH96 - Collision-Free Hashing from Lattice Problems|GGH96]]. Any collision $f_\mathbf{A}(\mathbf{z}) = f_\mathbf{A}(\mathbf{z}')$ with $\mathbf{z} \neq \mathbf{z}'$ yields $\mathbf{A}(\mathbf{z} - \mathbf{z}') = \mathbf{0} \pmod q$ with $\|\mathbf{z} - \mathbf{z}'\| \leq \beta$, which is exactly a SIS solution.

### Total search complexity

For $m \ge n \log q + 1$ and $\sqrt{m} \le \beta < q$, SIS lies in [[total-function-np#pwpp|PWPP]] ([[sis-to-pwpp-szz18|SIS ∈ PWPP]]): $\mathbf{z} \mapsto \mathbf{A}\mathbf{z} \bmod q$ compresses $\bits^m$, and a collision gives a solution — standard. Constrained SIS, a generalization, is [[total-function-np#ppp|PPP]]-complete, and its weak form, a binary collision problem whose unconstrained case is the collision form of SIS, is PWPP-complete — [[SZZ18 - PPP-Completeness with Connections to Cryptography|SZZ18]]. Membership does not make SIS itself PWPP-hard.

## Attacks

- **Lattice reduction (LLL/BKZ):** The best known attacks find short vectors in the $q$-ary lattice $\Lambda^\perp(\mathbf{A}) = \{\mathbf{z} \in \ZZ^m : \mathbf{Az} = \mathbf{0} \pmod q\}$ using BKZ-style block reduction algorithms. Runtime is exponential in the block size $b$: $2^{\Theta(b)}$ with a sieving SVP oracle — _standard_.

# Variations

## ISIS (Inhomogeneous SIS)

**Inhomogeneous SIS (ISIS)** generalizes SIS by replacing the homogeneous target $\mathbf{0}$ with an arbitrary syndrome. Given $\mathbf{A} \getsr \ZZ_q^{n \times m}$ and a target $\mathbf{t} \getsr \ZZ_q^n$, find a short $\mathbf{z} \in \ZZ^m$ with $\mathbf{Az} = \mathbf{t} \pmod{q}$ and $\|\mathbf{z}\| \leq \beta$.

ISIS is polynomially equivalent to SIS under mild parameter conditions, and is the hard-preimage problem underlying lattice-based digital signatures: a signature on a message $\mu$ is a short preimage $\mathbf{z}$ satisfying $\mathbf{Az} = H(\mu) \pmod q$ for a hash function $H$ — [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]].

## Ring-SIS

**Ring-SIS** replaces the random matrix $\mathbf{A} \in \ZZ_q^{n \times m}$ with a structured matrix defined by $\ell = m/n$ elements of the polynomial ring $R_q = \ZZ_q[x]/\langle x^n + 1 \rangle$ (for $n$ a power of 2). Specifically, the matrix is the concatenation of the negacyclic convolution matrices of random $a_1, \ldots, a_\ell \getsr R_q$, and a Ring-SIS solution is a short nonzero $(z_1, \ldots, z_\ell) \in R^\ell$ with $\sum_i a_i z_i = 0$ in $R_q$ — [[LM06 - Generalized compact knapsacks, cyclic lattices, and efficient one-way functions|LM06]], [[PR06 - Efficient Collision-Resistant Hashing from Worst-Case Assumptions on Cyclic Lattices|PR06]].

Ring-SIS enjoys the same worst-case-to-average-case hardness as plain SIS, now reducing from ideal-SVP (shortest vectors in ideal lattices), and enables $O(n \log n)$-time ring products and $m \log q$-bit keys rather than $nm \log q$ — [[LM06 - Generalized compact knapsacks, cyclic lattices, and efficient one-way functions|LM06]]. A collision in the generalized compact knapsack $h(z_1, \ldots, z_\ell) = \sum_i a_i z_i$ on short inputs is a Ring-SIS solution, so Ring-SIS hardness gives collision-resistant hashing ([[ring-sis-to-crhf-lm06|Ring-SIS ⇒ CRHF]]) — [[LM06 - Generalized compact knapsacks, cyclic lattices, and efficient one-way functions|LM06]].

## Module-SIS

**Module-SIS** interpolates between plain SIS (unstructured) and Ring-SIS (fully structured) by using rank-$k$ modules over $R_q$. The random matrix $\mathbf{A} \in R_q^{k \times \ell}$ has ring elements as entries, and a Module-SIS solution is a short nonzero vector $\mathbf{z} \in R^\ell$ with $\mathbf{Az} = \mathbf{0}$ in $R_q^k$. Setting $k = 1$ recovers Ring-SIS; setting the ring degree $n = 1$ (so $R = \ZZ$) recovers plain SIS — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]].

Hardness of Module-SIS reduces to worst-case problems on module lattices — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]]. Dilithium (ML-DSA, FIPS 204) is unforgeable in the random-oracle model under Module-SIS together with [[learning-with-errors#module-lwe|Module LWE]] ([[module-lwe-and-module-sis-to-ds|Module LWE + Module-SIS ⇒ DS]]) — [[DKL+18 - CRYSTALS-Dilithium A Lattice-Based Digital Signature Scheme|DKL+18]].

<!-- BEGIN GENERATED participates-in af4eddecb910 -->

## Participates in

**Builds on Shortest Integer Solution**

- [[isis-inhomogeneous-sis-to-sis|ISIS (Inhomogeneous SIS) ⇔ SIS]] (via [[shortest-integer-solution#isis-inhomogeneous-sis|ISIS (Inhomogeneous SIS)]])
- [[module-lwe-and-module-sis-to-ds|Module LWE + Module-SIS ⇒ DS]] (via [[shortest-integer-solution#module-sis|Module-SIS]])
- [[ring-sis-to-crhf-lm06|Ring-SIS ⇒ CRHF]] (via [[shortest-integer-solution#ring-sis|Ring-SIS]])
- [[sis-to-ds|SIS ⇒ DS]]
- [[sis-to-hash-function-ajt96|SIS ⇒ CRHF]]
- [[sis-to-pwpp-szz18|SIS ∈ PWPP]]

**Produces Shortest Integer Solution**

- [[gapsvp-to-sis-ajt96|Polynomial-factor GapSVP ⇒ SIS]]
- [[ideal-svp-to-ring-sis-lm06|Ideal-SVP ⇒ Ring-SIS]] (via [[shortest-integer-solution#ring-sis|Ring-SIS]])
- [[isis-inhomogeneous-sis-to-sis|ISIS (Inhomogeneous SIS) ⇔ SIS]]
- [[module-svp-to-module-sis-ls15|Module-SIVP ⇒ Module-SIS]] (via [[shortest-integer-solution#module-sis|Module-SIS]])
- [[polynomial-ratio-lwe-to-sis|LWE with polynomial ratio ⇒ SIS]]
- [[sivp-to-sis-ajt96|SIVP ⇒ SIS]]

<!-- END GENERATED participates-in -->
