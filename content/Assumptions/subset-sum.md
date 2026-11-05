---
type: assumption
status: draft
aliases:
  - Subset sum
  - Subset-sum problem
  - Random modular subset sum
title: Subset sum
id: subset-sum
variants:
  decision-subset-sum: "#decision-subset-sum"
---

# Subset sum

The _subset sum_ assumption states that, given $n$ uniformly random elements $a_1, \dots, a_n$ of $\ZZ_M$ and the sum modulo $M$ of a uniformly random subset of them, no efficient algorithm finds a subset with that sum.

## Assumption

The assumption is parameterized by the number of elements $n$, which also serves as the security parameter, and a modulus $M = M(n)$. The **density** of an instance is $d := n / \log_2 M$. For $\mathbf{a} = (a_1, \dots, a_n) \in \ZZ_M^n$ and $\mathbf{s} \in \bits^n$ write $\langle \mathbf{a}, \mathbf{s} \rangle := \sum_i s_i a_i \bmod M$. Hardness of the search game below is [[hash-function#preimage-resistance-one-wayness|one-wayness]] of the function $f(\mathbf{a}, \mathbf{s}) = (\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle)$, the form in which [[IN96 - Efficient Cryptographic Schemes Provably as Secure as Subset Sum|IN96]] state it, with $M = 2^{\ell(n)}$.

For $\mathbf{s} \neq \mathbf{s}'$ the difference $\langle \mathbf{a}, \mathbf{s} \rangle - \langle \mathbf{a}, \mathbf{s}' \rangle$ has a coefficient $\pm 1$, so it is uniform over $\ZZ_M$ for uniform $\mathbf{a}$ and $\mathbf{s} \mapsto \langle \mathbf{a}, \mathbf{s} \rangle$ is a universal hash family. At density $d < 1$ the planted $\mathbf{s}$ is therefore the only solution except with probability at most $2^n/M$; at $d > 1$ the expected number of solutions, $1 + (2^n - 1)/M$, exceeds $2^{n(1-1/d)}$, and for $\log_2 M \le n - \omega(\log n)$ the pair $(\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle)$ is statistically close to uniform by the [[leftover-hash-lemma|leftover hash lemma]] — standard.

### Search subset sum

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ss}}_{n,M,\calA}(\secpar)$}
\begin{algorithmic}
\State $\mathbf{a} \getsr \ZZ_M^n$; $\mathbf{s} \getsr \bits^n$
\State $t := \langle \mathbf{a}, \mathbf{s} \rangle$
\State $\mathbf{s}' \gets \calA(1^\secpar, \mathbf{a}, t)$
\Return $[\mathbf{s}' \in \bits^n \wedge \langle \mathbf{a}, \mathbf{s}' \rangle = t]$
\end{algorithmic}
\end{algorithm}
```

**Subset sum is hard** for $(n, M)$ if for all efficient $\calA$,

$$
\Adv^{\mathrm{ss}}_{n,M,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{ss}}_{n,M,\calA}(\secpar) = 1\right]
$$

is negligible. The adversary wins with any solution, not only the planted one.

### Decision subset sum

The decision variant asks to distinguish $(\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle)$ from $(\mathbf{a}, u)$ for uniform $u \in \ZZ_M$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{dss}}_{n,M,\calA}(\secpar)$}
\begin{algorithmic}
\State $\mathbf{a} \getsr \ZZ_M^n$; $\mathbf{s} \getsr \bits^n$; $b \getsr \bits$
\State $t_0 := \langle \mathbf{a}, \mathbf{s} \rangle$; $t_1 \getsr \ZZ_M$
\State $b' \gets \calA(1^\secpar, \mathbf{a}, t_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

**Decision subset sum is hard** for $(n, M)$ if for all efficient $\calA$,

$$
\Adv^{\mathrm{dss}}_{n,M,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{dss}}_{n,M,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. For $M = 2^{\ell}$ with $\ell > n$, hardness of decision subset sum says that $f$ is a [[pseudorandom-generator|PRG]] with seed $(\mathbf{a}, \mathbf{s})$ and stretch $\ell - n$ — standard.

## Known Results

### Worst-case hardness

Deciding whether some subset of given positive integers sums exactly to a given integer is NP-complete — [[Kar72 - Reducibility among Combinatorial Problems|Kar72]]. The cryptographic assumption concerns random modular instances.

### Search–decision equivalence

For $M = 2^{\ell(n)}$ with $\ell(n) = (1+c)n$ and a constant $c > 0$, hardness of search subset sum implies hardness of decision subset sum — [[IN96 - Efficient Cryptographic Schemes Provably as Secure as Subset Sum|IN96]] ([[subset-sum-to-decision-subset-sum-in96|Subset sum ⇒ Decision subset sum]]). The converse holds whenever $2^n/M$ is negligible: run the search algorithm and check its answer, since a uniform $u$ has a solution with probability at most $2^n/M$ — standard. Once $\log_2 M \le n - \omega(\log n)$ the decision problem is statistically hard, so the equivalence is meaningful only below density $1$ — standard.

### Constructions

- One-wayness at $\ell(n) = (1+c)n$ makes $f$ itself a PRG ([[subset-sum-to-prg-in96|Subset sum ⇒ PRG]]), and one-wayness at $\ell(n) < n$ makes $\mathbf{s} \mapsto \langle \mathbf{a}, \mathbf{s} \rangle$, keyed by $\mathbf{a}$, a [[hash-function#target-collision-resistance-universal-one-wayness|UOWHF]] ([[subset-sum-to-uowhf-in96|Subset sum ⇒ UOWHF]]) — [[IN96 - Efficient Cryptographic Schemes Provably as Secure as Subset Sum|IN96]]. Each evaluation of $f$ yields or hashes many bits at once — [[IN96 - Efficient Cryptographic Schemes Provably as Secure as Subset Sum|IN96]]. A PRG gives [[commitment-scheme|bit commitment]] ([[prg-to-com-naor91|PRG ⇒ COM]]) — [[Naor91 - Bit commitment using pseudorandomness|Naor91]].
- At the low density of the parameters in [[LPS10 - Public-Key Cryptographic Primitives Provably as Secure as Subset Sum|LPS10]], subset sum gives IND-CPA [[public-key-encryption|PKE]] ([[subset-sum-to-pke-lps10|Subset sum ⇒ PKE]]) and semi-honest [[oblivious-transfer|OT]] ([[subset-sum-to-ot-lps10|Subset sum ⇒ OT]]) — [[LPS10 - Public-Key Cryptographic Primitives Provably as Secure as Subset Sum|LPS10]].

# Attacks

- **Exhaustive and dynamic-programming algorithms.** Dynamic programming over the reachable partial sums takes time $\poly(n, M)$, so $M$ must be superpolynomial in $n$; listing the sums of each half of the elements and matching them takes time and space $\tilde{O}(2^{n/2})$ — standard. Every instance can be solved in time $O(2^{n/2})$ and space $O(2^{n/4})$ — [[SS81 - A T = O(2n2), S = O(2n4) Algorithm for Certain NP-Complete Problems|SS81]].
- **Representations, at density close to $1$.** Writing the solution as a sum of two vectors in many ways gives heuristic algorithms for almost all instances of density $1$: [[HGJ10 - New Generic Algorithms for Hard Knapsacks|HGJ10]] state running time $\tilde{O}(2^{0.3113n})$, and [[BCJ11 - Improved Generic Algorithms for Hard Knapsacks|BCJ11]] give that algorithm as time $\tilde{O}(2^{0.337n})$ with memory $\tilde{O}(2^{0.256n})$ and lower the time to $\tilde{O}(2^{0.291n})$.
- **Lattice attacks, at low density.** Lagarias and Odlyzko reduce subset sum to finding a shortest nonzero vector in a lattice built from $(\mathbf{a}, t)$ — [[LO83 - Solving Low-Density Subset Sum Problems|LO83]]. With an oracle for shortest vectors their algorithm solves almost all instances of density below $0.6463$ in polynomial time, and either of two modified lattices raises the threshold to $0.9408$; combined with lattice basis reduction in place of the oracle, the modifications also improve the attack in practice — [[CJL+92 - Improved Low-Density Subset Sum Algorithms|CJL+92]].
- **Subexponential algorithms at vanishing density.** A BKW-style algorithm solves random instances of density $o(1)$ in subexponential time; the parameters of the [[LPS10 - Public-Key Cryptographic Primitives Provably as Secure as Subset Sum|LPS10]] encryption scheme, with $M^{1/n} > 10 n \log^2 n$, fall in time $2^{(\ln 2/2 + o(1))\, n / \log\log n}$ — [[KF15 - An Improved BKW Algorithm for LWE with Applications to Cryptography and Lattices|KF15]].
- **Merkle–Hellman.** The Merkle–Hellman knapsack cryptosystem publishes a superincreasing sequence disguised by a modular multiplication — [[MH78 - Hiding Information and Signatures in Trapdoor Knapsacks|MH78]]. Shamir's polynomial-time algorithm breaks the basic, singly iterated scheme — [[Sha82 - A Polynomial Time Algorithm for Breaking the Basic Merkle-Hellman Cryptosystem|Sha82]]. The attack exploits the trapdoor structure of the public weights and does not apply to random instances — standard.

<!-- BEGIN GENERATED participates-in 8235633ae987 -->

## Participates in

**Builds on Subset sum**

- [[subset-sum-to-decision-subset-sum-in96|Subset sum ⇒ Decision subset sum]]
- [[subset-sum-to-ot-lps10|Subset sum ⇒ OT]]
- [[subset-sum-to-pke-lps10|Subset sum ⇒ PKE]]
- [[subset-sum-to-prg-in96|Subset sum ⇒ PRG]]
- [[subset-sum-to-uowhf-in96|Subset sum ⇒ UOWHF]]

**Produces Subset sum**

- [[subset-sum-to-decision-subset-sum-in96|Subset sum ⇒ Decision subset sum]] (via [[subset-sum#decision-subset-sum|Decision subset sum]])

<!-- END GENERATED participates-in -->
