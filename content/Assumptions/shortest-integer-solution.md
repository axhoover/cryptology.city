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
  bit-compressing-sis: "#bit-compressing-sis"
  module-sis: "#module-sis"
  inhomogeneous-sis: "#isis-inhomogeneous-sis"
  ring-sis: "#ring-sis"
  trapdoor-sampling-sis: "#sis-at-trapdoor-sampling-parameters"
---

# Shortest Integer Solution

The _Shortest Integer Solution (SIS)_ problem is a lattice problem used as the hardness foundation for collision-resistant hash functions ([[sis-to-hash-function-ajt96|SIS ⇒ CRHF]]) and lattice-based signature schemes ([[sis-to-ds|SIS ⇒ DS]]). Unlike [[learning-with-errors|LWE]], which is an indistinguishability problem, SIS is a search problem.

## Assumption

Informally, SIS asks: given a random matrix $\mathbf{A} \in \ZZ_q^{n \times m}$, find a nonzero short integer vector $\mathbf{z} \in \ZZ^m$ in the kernel of $\mathbf{A}$ modulo $q$. Such a vector always exists when $m > n \log q$ (by a pigeonhole argument), so the hardness lies purely in _finding_ one efficiently.

The assumption is parameterized by a lattice dimension $n = n(\secpar)$, a column count $m = m(\secpar)$, a modulus $q = q(\secpar)$, and a norm bound $\beta = \beta(\secpar)$: functions of the security parameter, computable in time $\poly(\secpar)$, with $n, m, \lceil \log q \rceil \le \poly(\secpar)$, so that the condition $\beta < q$ of the hardness statement below also gives $\lceil \log \beta \rceil \le \poly(\secpar)$. The variants below bound their parameters in the same way. Typical parameters satisfy $q = \poly(n)$, $m = \Theta(n \log q)$, and $\beta \ll q$.

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

Solving SIS on average (over a uniformly random $\mathbf{A}$) is at least as hard as approximating the **Shortest Vector Problem (GapSVP)** ([[gapsvp-to-sis-ajt96|Polynomial-factor GapSVP ⇒ SIS]]) and the **Shortest Independent Vectors Problem (SIVP)** ([[sivp-to-sis-ajt96|Polynomial-factor SIVP ⇒ SIS]]) to within polynomial factors in the **worst case** — [[Ajt96 - Generating hard instances of lattice problems|Ajt96]]. This is a classical (non-quantum) worst-case-to-average-case reduction: any efficient algorithm that breaks SIS with noticeable probability on random inputs can be converted into an efficient algorithm for these worst-case lattice problems.

### Collision-resistant hash functions

For $m \ge n \log q + 1$, the function family $\{f_\mathbf{A} : \mathbf{z} \mapsto \mathbf{Az} \bmod q\}$, restricted to inputs $\mathbf{z} \in \{0, \ldots, \lfloor \beta/\sqrt{m} \rfloor\}^m$, is a [[hash-function#collision-resistance|collision-resistant hash function]] family under [[#bit-compressing-sis|bit-compressing SIS]] hardness ([[sis-to-hash-function-ajt96|SIS ⇒ CRHF]]) — [[Ajt96 - Generating hard instances of lattice problems|Ajt96]], [[GGH96 - Collision-Free Hashing from Lattice Problems|GGH96]]. Any collision $f_\mathbf{A}(\mathbf{z}) = f_\mathbf{A}(\mathbf{z}')$ with $\mathbf{z} \neq \mathbf{z}'$ yields $\mathbf{A}(\mathbf{z} - \mathbf{z}') = \mathbf{0} \pmod q$ with $\|\mathbf{z} - \mathbf{z}'\| \leq \beta$, which is exactly a SIS solution.

### Total search complexity

[[#bit-compressing-sis|Bit-compressing SIS]], with $m \ge n \log q + 1$ and $\sqrt{m} \le \beta < q$, lies in [[total-function-np#pwpp|PWPP]] ([[sis-to-pwpp-szz18|SIS ∈ PWPP]]): $\mathbf{z} \mapsto \mathbf{A}\mathbf{z} \bmod q$ maps $\bits^m$ into $\bits^{m-1}$, and a collision gives a solution — standard. Constrained SIS, a generalization, is [[total-function-np#ppp|PPP]]-complete, and its weak form, a binary collision problem whose unconstrained case is the collision form of SIS, is PWPP-complete — [[SZZ18 - PPP-Completeness with Connections to Cryptography|SZZ18]]. Membership does not make SIS itself PWPP-hard.

## Attacks

- **Lattice reduction (LLL/BKZ):** The best known attacks find short vectors in the $q$-ary lattice $\Lambda^\perp(\mathbf{A}) = \{\mathbf{z} \in \ZZ^m : \mathbf{Az} = \mathbf{0} \pmod q\}$ using BKZ-style block reduction algorithms. Runtime is exponential in the block size $b$: $2^{\Theta(b)}$ with a sieving SVP oracle — _standard_.

# Variations

## Bit-compressing SIS

**Bit-compressing SIS** is SIS restricted to $m \ge n \log q + 1$ and $\sqrt{m} \le \beta < q$. Then $q^n \le 2^{m-1}$, so $\mathbf{z} \mapsto \mathbf{A}\mathbf{z} \bmod q$, with its value written as an integer below $q^n$, maps $\bits^m$ into $\bits^{m-1}$. **Bit-compressing SIS is hard** for such polynomially bounded $(n, m, q, \beta)$ if for all efficient $\calA$, $\Adv^{\text{sis}}_{n,m,q,\beta,\calA}(\secpar)$ is negligible. For $n \log q < m < n \log q + 1$, inside the SIS regime, $q^n < 2^m$ but the integers below $q^n$ need $m$ bits.

## SIS at trapdoor-sampling parameters

**SIS is hard at trapdoor-sampling parameters** for polynomially bounded $(n, m, q, \beta)$ and $L = L(\secpar)$, with $q$ prime, $m \ge 2n \log q$ and $\sqrt{m} \le \beta < q$, if three conditions hold: (i) an efficient algorithm outputs $\mathbf{A}$ within negligible statistical distance of uniform on $\ZZ_q^{n \times m}$, together with a basis $\mathbf{T}$ of $\Lambda^\perp_q(\mathbf{A})$ with $\|\tilde{\mathbf{T}}\| \le L$ ([[lattice-trapdoor#definitions|Gram–Schmidt quality]]); (ii) $\beta = 2s\sqrt{m}$ with $s = L \cdot g(m)$ for some function $g(m) = \omega(\sqrt{\log m})$; and (iii) for all efficient $\calA$, $\Adv^{\text{sis}}_{n,m,q,\beta,\calA}(\secpar)$ is negligible. Such generators exist for $m \ge C n \log q$ with a suitable constant $C$ ([[lattice-trapdoor#generation|lattice trapdoors]]) — [[Ajt99 - Generating Hard Instances of the Short Basis Problem|Ajt99]], [[AP09 - Generating Shorter Bases for Hard Random Lattices|AP09]] — so condition (i) can be met.

## ISIS (Inhomogeneous SIS)

**Inhomogeneous SIS (ISIS)** generalizes SIS by replacing the homogeneous target $\mathbf{0}$ with an arbitrary syndrome. Given $\mathbf{A} \getsr \ZZ_q^{n \times m}$ and a target $\mathbf{t} \getsr \ZZ_q^n$, find a short $\mathbf{z} \in \ZZ^m$ with $\mathbf{Az} = \mathbf{t} \pmod{q}$ and $\|\mathbf{z}\| \leq \beta$.

**ISIS is hard** for $(n, m, q, \beta)$, bounded as for SIS, with $m + 1 > n \log q$, $\sqrt{m} \le \beta$ and $\beta^2 + 1 < q^2$, if for all efficient $\calA$,

$$
\Pr\!\left[\mathbf{A}\mathbf{z} = \mathbf{t} \pmod{q} \;\wedge\; \|\mathbf{z}\| \le \beta\right]
$$

is negligible, where $\mathbf{A} \getsr \ZZ_q^{n \times m}$, $\mathbf{t} \getsr \ZZ_q^n$ and $\mathbf{z} \gets \calA(1^\secpar, \mathbf{A}, \mathbf{t})$. In this regime a solution exists with probability above $1/3$, for every $q$: the number $N$ of $\mathbf{z} \in \bits^m$ with $\mathbf{A}\mathbf{z} = \mathbf{t}$ has $\mathbb{E}[N] = 2^m/q^n > 1/2$, the events $\mathbf{A}\mathbf{z} = \mathbf{t}$ for distinct such $\mathbf{z}$ are pairwise independent because two distinct vectors in $\bits^m$ differ by a vector with a $\pm 1$ entry, so $\Pr[N > 0] \ge \mathbb{E}[N]/(1 + \mathbb{E}[N]) > 1/3$, and every such $\mathbf{z}$ has norm at most $\sqrt{m} \le \beta$ — standard.

SIS hardness for $(n, m+1, q, \sqrt{\beta^2+1})$ implies ISIS hardness for $(n, m, q, \beta)$ ([[isis-inhomogeneous-sis-to-sis|SIS ⇒ ISIS]]) — folklore. ISIS is the hard-preimage problem underlying lattice-based digital signatures: a signature on a message $\mu$ is a short preimage $\mathbf{z}$ satisfying $\mathbf{Az} = H(\mu) \pmod q$ for a hash function $H$ — [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]].

## Ring-SIS

**Ring-SIS** replaces the random matrix $\mathbf{A} \in \ZZ_q^{n \times m}$ with a structured matrix defined by $\ell = m/n$ elements of the polynomial ring $R_q = \ZZ_q[x]/\langle x^n + 1 \rangle$ (for $n$ a power of 2). Specifically, the matrix is the concatenation of the negacyclic convolution matrices of random $a_1, \ldots, a_\ell \getsr R_q$, and a Ring-SIS solution is a short nonzero $(z_1, \ldots, z_\ell) \in R^\ell$ with $\sum_i a_i z_i = 0$ in $R_q$ — [[LM06 - Generalized compact knapsacks, cyclic lattices, and efficient one-way functions|LM06]], [[PR06 - Efficient Collision-Resistant Hashing from Worst-Case Assumptions on Cyclic Lattices|PR06]].

Ring-SIS enjoys the same worst-case-to-average-case hardness as plain SIS, now reducing from ideal-SVP (shortest vectors in ideal lattices; [[ideal-svp-to-ring-sis-lm06|Ideal-SVP ⇒ Ring-SIS]]), and enables $O(n \log n)$-time ring products and $m \log q$-bit keys rather than $nm \log q$ — [[LM06 - Generalized compact knapsacks, cyclic lattices, and efficient one-way functions|LM06]]. A collision in the generalized compact knapsack $h(z_1, \ldots, z_\ell) = \sum_i a_i z_i$ on short inputs is a Ring-SIS solution, so Ring-SIS hardness gives collision-resistant hashing ([[ring-sis-to-crhf-lm06|Ring-SIS ⇒ CRHF]]) — [[LM06 - Generalized compact knapsacks, cyclic lattices, and efficient one-way functions|LM06]].

## Module-SIS

**Module-SIS** interpolates between plain SIS (unstructured) and Ring-SIS (fully structured) by using rank-$k$ modules over $R_q$. The random matrix $\mathbf{A} \in R_q^{k \times \ell}$ has ring elements as entries, and a Module-SIS solution is a short nonzero vector $\mathbf{z} \in R^\ell$ with $\mathbf{Az} = \mathbf{0}$ in $R_q^k$. Setting $k = 1$ recovers Ring-SIS; setting the ring degree $n = 1$ (so $R = \ZZ$) recovers plain SIS — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]].

The instance is parameterized by $(n, k, \ell, q, \beta)$, with $R = \ZZ[x]/\langle x^n + 1 \rangle$ for $n$ a power of $2$, $R_q = R/qR$ and $\mathbf{A} \getsr R_q^{k \times \ell}$, and a solution must satisfy $\|\mathbf{z}\| \le \beta$ for the Euclidean norm of the coefficient vector of $\mathbf{z}$ in $\ZZ^{n\ell}$. For $\ell > k \log q$ and $\sqrt{n\ell} \le \beta < q$, the analogue of the SIS regime, a solution with coefficients in $\{-1, 0, 1\}$ always exists and the trivial solution $q\mathbf{e}_1$ is excluded — standard. Dilithium's Module-SIS bounds $\|\mathbf{z}\|_\infty$ instead — [[DKL+18 - CRYSTALS-Dilithium A Lattice-Based Digital Signature Scheme|DKL+18]].

Hardness of Module-SIS reduces to worst-case problems on module lattices ([[module-svp-to-module-sis-ls15|Module-SIVP ⇒ Module-SIS]]) — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]]. Dilithium (ML-DSA, FIPS 204) is unforgeable in the random-oracle model under Module-SIS together with [[learning-with-errors#module-lwe|Module LWE]] ([[module-lwe-and-module-sis-to-ds|Module LWE + Module-SIS ⇒ DS]]) — [[DKL+18 - CRYSTALS-Dilithium A Lattice-Based Digital Signature Scheme|DKL+18]].

<!-- BEGIN GENERATED participates-in 56ec4fc5beb3 -->

## Participates in

**Builds on Shortest Integer Solution**

- [[bit-compressing-sis-to-sis|Bit-compressing SIS ⇒ SIS]] (via [[shortest-integer-solution#bit-compressing-sis|Bit-compressing SIS]])
- [[module-lwe-and-module-sis-to-ds|Module LWE + Module-SIS ⇒ DS]] (via [[shortest-integer-solution#module-sis|Module-SIS]])
- [[module-sis-to-crhf|Module-SIS ⇒ CRHF]] (via [[shortest-integer-solution#module-sis|Module-SIS]])
- [[ring-sis-to-crhf-lm06|Ring-SIS ⇒ CRHF]] (via [[shortest-integer-solution#ring-sis|Ring-SIS]])
- [[sis-to-ds|SIS ⇒ DS]] (via [[shortest-integer-solution#sis-at-trapdoor-sampling-parameters|SIS at trapdoor-sampling parameters]])
- [[sis-to-hash-function-ajt96|SIS ⇒ CRHF]] (via [[shortest-integer-solution#bit-compressing-sis|Bit-compressing SIS]])
- [[isis-inhomogeneous-sis-to-sis|SIS ⇒ ISIS (Inhomogeneous SIS)]]
- [[sis-to-pwpp-szz18|SIS ∈ PWPP]] (via [[shortest-integer-solution#bit-compressing-sis|Bit-compressing SIS]])
- [[trapdoor-sampling-sis-to-sis|SIS at trapdoor-sampling parameters ⇒ SIS]] (via [[shortest-integer-solution#sis-at-trapdoor-sampling-parameters|SIS at trapdoor-sampling parameters]])

**Produces Shortest Integer Solution**

- [[bit-compressing-sis-to-sis|Bit-compressing SIS ⇒ SIS]]
- [[gapsvp-to-sis-ajt96|Polynomial-factor GapSVP ⇒ SIS]]
- [[ideal-svp-to-ring-sis-lm06|Polynomial-factor Ideal-SVP ⇒ Ring-SIS]] (via [[shortest-integer-solution#ring-sis|Ring-SIS]])
- [[module-svp-to-module-sis-ls15|Module-SIVP ⇒ Module-SIS]] (via [[shortest-integer-solution#module-sis|Module-SIS]])
- [[polynomial-ratio-lwe-to-sis|LWE with polynomial ratio ⇒ SIS]] (via [[shortest-integer-solution#bit-compressing-sis|Bit-compressing SIS]])
- [[isis-inhomogeneous-sis-to-sis|SIS ⇒ ISIS (Inhomogeneous SIS)]] (via [[shortest-integer-solution#isis-inhomogeneous-sis|ISIS (Inhomogeneous SIS)]])
- [[sivp-to-sis-ajt96|Polynomial-factor SIVP ⇒ SIS]]
- [[trapdoor-sampling-sis-to-sis|SIS at trapdoor-sampling parameters ⇒ SIS]]

<!-- END GENERATED participates-in -->
