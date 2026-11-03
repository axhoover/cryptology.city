---
type: primitive
status: draft
aliases:
  - TLP
  - Time-lock puzzle
  - Time-lock puzzles
title: Time-lock puzzle
id: time-lock-puzzle
variants:
  weak-time-lock-puzzle: "#weak-time-lock-puzzles"
  homomorphic-time-lock-puzzle: "#homomorphic-time-lock-puzzles"
---

# Time-lock puzzle

A time-lock puzzle hides a solution $s$ under a difficulty parameter $T$: generating the puzzle takes time $\poly(\log T, \secpar)$, solving it takes time $T \cdot \poly(\secpar)$, and no polynomial-size adversary of depth below $T^\varepsilon$ distinguishes puzzles for two solutions. The notion and the first candidate are due to [[RSW96 - Time-lock Puzzles and Timed-release Crypto|RSW96]]; the definitions below are those of [[BGJ+16 - Time-Lock Puzzles from Randomized Encodings|BGJ+16]].

## Syntax

A time-lock puzzle is a pair of algorithms $\mathsf{TLP} = (\Gen, \mathsf{Solve})$:

- $\Gen(1^\secpar, T, s) \to Z$, a randomized algorithm that takes a difficulty parameter $T$ and a solution $s \in \bits^\secpar$ and outputs a puzzle $Z$;
- $\mathsf{Solve}(Z) \to s$, a deterministic algorithm that outputs a solution.

$\Gen(1^\secpar, T, \cdot)$ is computed by a uniform circuit of size $\poly(\log T, \secpar)$, and $\mathsf{Solve}$ runs in time $T \cdot \poly(\secpar)$ — [[BGJ+16 - Time-Lock Puzzles from Randomized Encodings|BGJ+16]]. BGJ+16 leave $1^\secpar$ implicit in $|s| = \secpar$.

## Properties

### Correctness

$\mathsf{TLP}$ is **correct** if for all $\secpar \in \NN$, all $T$, all $s \in \bits^\secpar$ and every $Z$ in the support of $\Gen(1^\secpar, T, s)$, $\mathsf{Solve}(Z) = s$ — [[BGJ+16 - Time-Lock Puzzles from Randomized Encodings|BGJ+16]].

### Security

Adversaries are non-uniform families $\calA = \{\calA_\secpar\}_{\secpar \in \NN}$ of polynomial-size circuits, and the depth of $\calA_\secpar$ is its parallel running time. The difficulty $T = T(\secpar)$ is a polynomial, and $s_0, s_1 \in \bits^\secpar$ are fixed in advance.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{tlp}}_{\mathsf{TLP},\calA,T,s_0,s_1}(\secpar)$}
\begin{algorithmic}
\State $b \getsr \bits$
\State $Z \gets \Gen(1^\secpar, T(\secpar), s_b)$
\State $b' \gets \calA_\secpar(Z)$
\Comment{$\calA_\secpar$ has depth at most $T(\secpar)^\varepsilon$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

$\mathsf{TLP}$ is a **time-lock puzzle with gap** $\varepsilon \in (0, 1)$ if there is a polynomial $T_0$ such that for every polynomial $T \ge T_0$ and every polynomial-size $\calA$ of depth at most $T(\secpar)^\varepsilon$,

$$
\Adv^{\mathrm{tlp}}_{\mathsf{TLP},\calA,T}(\secpar) := \max_{s_0, s_1 \in \bits^\secpar} \left|2\Pr\!\left[\Game^{\mathrm{tlp}}_{\mathsf{TLP},\calA,T,s_0,s_1}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[BGJ+16 - Time-Lock Puzzles from Randomized Encodings|BGJ+16]]. The depth bound is necessary because $\mathsf{Solve}$ is itself a polynomial-size adversary, of depth $T \cdot \poly(\secpar)$, that recovers $s_b$.

# Variations

## Weak time-lock puzzles

A **weak** time-lock puzzle satisfies correctness and security as above, but $\Gen(1^\secpar, T, \cdot)$ is only required to be computed by a uniform circuit of size $\poly(T, \secpar)$ and depth $\poly(\log T, \secpar)$, so generation is fast only in parallel — [[BGJ+16 - Time-Lock Puzzles from Randomized Encodings|BGJ+16]].

## Homomorphic time-lock puzzles

A homomorphic time-lock puzzle lets anyone turn puzzles with solutions $s_1, \ldots, s_n$ into a puzzle whose solution is $f(s_1, \ldots, s_n)$ without solving them; [[MT19 - Homomorphic Time-Lock Puzzles and Applications|MT19]] introduce the notion and give linearly, multiplicatively and fully homomorphic constructions under concrete assumptions.

# Other results

- [[sequential-squaring-to-time-lock-puzzle-rsw96|Sequential squaring ⇒ TLP (RSW puzzle)]]: the first candidate masks a key with $a^{2^t} \bmod n$ for an RSA modulus $n$, which the generator computes quickly from $\phi(n)$; RSW96 conjecture that solving it requires $t$ sequential squarings and give no reduction — [[RSW96 - Time-lock Puzzles and Timed-release Crypto|RSW96]].
- [[randomized-encoding#succinct-randomized-encodings|Succinct randomized encodings]] yield time-lock puzzles assuming a non-parallelizing language exists, that is, a language that requires circuits of depth at least $t$ to decide in the worst case; the existence of such a language is necessary for time-lock puzzles. Instantiated with randomized encodings from the literature, the cryptographic assumptions range from one-way functions to indistinguishability obfuscation, with efficiency improving as the assumptions strengthen — [[BGJ+16 - Time-Lock Puzzles from Randomized Encodings|BGJ+16]].
- [[time-lock-puzzle-to-owf-bgj16|TLP ⇒ OWF]]: time-lock puzzles imply one-way functions — [[BGJ+16 - Time-Lock Puzzles from Randomized Encodings|BGJ+16]].
- [[no-rom-to-time-lock-puzzle-mmv11|No reduction from ROM to TLP]]: in the random oracle model, a puzzle whose generator makes $n$ oracle queries is solved in $O(n)$ rounds of queries; a puzzle with a linear gap exists there, generated with one round of $n$ parallel queries and requiring $n$ rounds of queries to solve — [[MMV11 - Time-Lock Puzzles in the Random Oracle Model|MMV11]].

<!-- BEGIN GENERATED participates-in 8fad2b30fde9 -->

## Participates in

**Builds on Time-lock puzzle**

- [[time-lock-puzzle-to-owf-bgj16|TLP ⇒ OWF]]

**Produces Time-lock puzzle**

- [[sequential-squaring-to-time-lock-puzzle-rsw96|Sequential squaring ⇒ TLP (RSW puzzle)]]

**Barriers**

- [[no-rom-to-time-lock-puzzle-mmv11|No reduction from ROM to TLP]]

<!-- END GENERATED participates-in -->
