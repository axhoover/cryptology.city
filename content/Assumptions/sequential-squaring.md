---
type: assumption
status: draft
aliases:
  - Sequential squaring
  - Sequential squaring assumption
  - Repeated squaring assumption
  - Iterated squaring assumption
  - RSW assumption
title: Sequential Squaring Assumption
id: sequential-squaring
variants:
  decisional-sequential-squaring: "#decisional-sequential-squaring"
  strong-sequential-squaring: "#strong-sequential-squaring"
  sequential-squaring-unknown-order-groups: "#groups-of-unknown-order"
---

# Sequential Squaring Assumption

The _sequential squaring assumption_ states that for an RSA modulus $N$ of unknown factorization and a random $x \in \ZZ_N^*$, for a gap $\varepsilon \in (0, 1)$ and every sufficiently large polynomial $T$, every polynomial-size circuit of depth at most $T^\varepsilon$ computes $x^{2^T} \bmod N$ with negligible probability, although $T$ sequential squarings compute it.

## Assumption

The assumption is parameterized by a modulus generator $\GrGen$ that on input $1^\secpar$ outputs $(N, p, q)$ with $N = pq$ for distinct $\secpar$-bit primes $p, q$ (uniform, as in the [[factoring|factoring assumption]], unless stated otherwise), and by a gap $\varepsilon \in (0, 1)$; the game additionally takes a difficulty $T = T(\secpar)$, a polynomial, over which the definition quantifies. Adversaries are non-uniform families $\calA = \{\calA_\secpar\}_{\secpar \in \NN}$ of polynomial-size circuits; the depth of $\calA_\secpar$ is its parallel running time.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ssq}}_{\GrGen,T,\calA}(\secpar)$}
\begin{algorithmic}
\State $(N, p, q) \gets \GrGen(1^\secpar)$; $x \getsr \ZZ_N^*$
\State $y \gets \calA_\secpar(N, T(\secpar), x)$
\Comment{$\calA_\secpar$ has depth at most $T(\secpar)^\varepsilon$}
\Return $[y = x^{2^{T(\secpar)}} \bmod N]$
\end{algorithmic}
\end{algorithm}
```

**Sequential squaring holds** for $\GrGen$ with gap $\varepsilon \in (0, 1)$ if there is a polynomial $T_0$ such that for every polynomial $T \ge T_0$ and every polynomial-size $\calA$ of depth at most $T(\secpar)^\varepsilon$,

$$
\Adv^{\mathrm{ssq}}_{\GrGen,T,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{ssq}}_{\GrGen,T,\calA}(\secpar) = 1\right]
$$

is negligible.

The depth bound is necessary because $T$ successive squarings modulo $N$ are a polynomial-size circuit of depth $T \cdot \poly(\secpar)$ that computes $x^{2^T}$. The quantifiers follow the definition of [[time-lock-puzzle|time-lock puzzles]] with gap $\varepsilon$ of [[BGJ+16 - Time-Lock Puzzles from Randomized Encodings|BGJ+16]].

## Known Results

- **Trapdoor.** Given $\phi(N)$, the exponent $e := 2^T \bmod \phi(N)$ takes $O(\log T)$ multiplications modulo $\phi(N)$, and $x^{2^T} = x^e \bmod N$ for every $x \in \ZZ_N^*$, so $x^{2^T}$ is computable in time $\poly(\secpar, \log T)$ — [[RSW96 - Time-lock Puzzles and Timed-release Crypto|RSW96]]. Hence [[sequential-squaring-to-fac-rsw96|Sequential squaring ⇒ FAC]].
- **Generic ring model.** Against algorithms that treat $\ZZ_N$ as a generic ring, speeding up repeated squaring, even after a preprocessing stage and with polynomially many parallel processors, is equivalent to factoring $N$ ([[fac-to-sequential-squaring-rs20|FAC ⇒ Sequential squaring (generic ring model)]]); more generally, every generic-ring function relative to an RSA modulus has a sharp sequentiality threshold, assuming factoring is hard in the standard model — [[RS20b - Generically Speeding-Up Repeated Squaring Is Equivalent to Factoring Sharp Thresholds for All Generic-Ring Delay Functions|RS20b]].
- **Known-order groups.** No generic-group delay function exists in a cyclic group of known order: for every delay function that does not use the representation of the group, an attacker given the group order breaks its sequentiality, even when the group carries a $d$-linear map for a constant $d \ge 2$ — [[RSS20 - Generic-Group Delay Functions Require Hidden-Order Groups|RSS20]].
- **Time-lock puzzles.** The RSW puzzle masks a key with $x^{2^T}$; RSW96 conjecture that without the factorization of $N$ repeated squaring cannot be sped up by parallel computation, and hence that the puzzle is secure, and give no reduction ([[sequential-squaring-to-time-lock-puzzle-rsw96|Sequential squaring ⇒ TLP (RSW puzzle)]]) — [[RSW96 - Time-lock Puzzles and Timed-release Crypto|RSW96]].
- **Verifiable delay functions.** Proofs that $y = x^{2^T}$ make repeated squaring a [[verifiable-delay-function|VDF]] in the group of signed quadratic residues modulo a product of two safe primes — [[Pie19 - Simple Verifiable Delay Functions|Pie19]] — and in groups of unknown order such as RSA groups and class groups of imaginary quadratic fields — [[Wes19 - Efficient Verifiable Delay Functions|Wes19]]. Wesolowski's proof is sound in groups satisfying the adaptive root assumption — [[BBF18 - A Survey of Two Verifiable Delay Functions|BBF18]]; the assumption fails in $\ZZ_N^*$ itself, since $u = w = -1$ satisfies $u^\ell = w$ for every odd prime $\ell$ — standard.

# Variations

## Decisional sequential squaring

The decisional form asks to distinguish $x^{2^T}$ from a uniform element of $\J_N = \{a \in \ZZ_N^* : \left(\frac{a}{N}\right) = 1\}$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{dssq}}_{\GrGen,T,\calA}(\secpar)$}
\begin{algorithmic}
\State $(N, p, q) \gets \GrGen(1^\secpar)$; $x \getsr \J_N$; $b \getsr \bits$
\State $y_0 \gets x^{2^{T(\secpar)}} \bmod N$; $y_1 \getsr \J_N$
\State $b' \gets \calA_\secpar(N, T(\secpar), x, y_b)$
\Comment{$\calA_\secpar$ has depth at most $T(\secpar)^\varepsilon$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

**Decisional sequential squaring holds** for $\GrGen$ with gap $\varepsilon \in (0, 1)$ if, with the quantifiers above,

$$
\Adv^{\mathrm{dssq}}_{\GrGen,T,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{dssq}}_{\GrGen,T,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. [[MT19 - Homomorphic Time-Lock Puzzles and Applications|MT19]] state the sequential squaring assumption in this decisional form over $\J_N$, against polynomial-size adversaries of bounded depth, for $N$ a product of two equal-length safe primes.

## Strong sequential squaring

The strong form, for $\GrGen$ outputting a product of two equal-length safe primes (so that $\J_N$ is cyclic), splits the adversary into a preprocessing stage $\calA_1$, a polynomial-size circuit of unrestricted depth that receives $N$, $T$ and a generator of $\J_N$ and outputs a state, and an online stage $\calA_2$, of depth at most $T^\varepsilon$, that receives the state, $x$ and $y_b$ — [[MT19 - Homomorphic Time-Lock Puzzles and Applications|MT19]]. MT19's multiplicatively homomorphic time-lock puzzle is secure if strong sequential squaring holds over $\J_N$ — [[MT19 - Homomorphic Time-Lock Puzzles and Applications|MT19]].

## Groups of unknown order

The game above makes sense in any family of groups whose order is hard to compute, with $\GrGen$ outputting a group description instead of a modulus and $x$ uniform in the group; [[Pie19 - Simple Verifiable Delay Functions|Pie19]] formulates the assumption for arbitrary families of groups. Class groups of imaginary quadratic fields are a candidate without a trusted setup: for a random negative prime discriminant, the order of the class group is unknown — [[Wes19 - Efficient Verifiable Delay Functions|Wes19]].

# Attacks

- **Factoring.** An algorithm that factors $N$ yields $\phi(N)$, and from it $x^{2^T}$ in further time $\poly(\secpar, \log T)$ — [[RSW96 - Time-lock Puzzles and Timed-release Crypto|RSW96]]; the RSW puzzle is therefore vulnerable to advances in factoring — [[MMV11 - Time-Lock Puzzles in the Random Oracle Model|MMV11]].
- **Quantum.** Shor's algorithm factors $N$ in quantum polynomial time and so breaks the assumption in RSA groups — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]].

<!-- BEGIN GENERATED participates-in 4c334da2f7a2 -->

## Participates in

**Builds on Sequential Squaring Assumption**

- [[sequential-squaring-to-fac-rsw96|Sequential squaring ⇒ FAC]]
- [[sequential-squaring-to-time-lock-puzzle-rsw96|Sequential squaring ⇒ TLP (RSW puzzle)]]

**Produces Sequential Squaring Assumption**

- [[fac-to-sequential-squaring-rs20|FAC ⇒ Sequential squaring (generic ring model)]]

<!-- END GENERATED participates-in -->
