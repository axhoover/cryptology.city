---
type: primitive
status: draft
aliases:
  - Leakage-resilient stream cipher
title: Leakage-resilient stream cipher
id: leakage-resilient-stream-cipher
---

# Leakage-resilient stream cipher

A leakage-resilient stream cipher is a stateful generator whose next output block is pseudorandom given the previous blocks and, for every earlier round, $\ell$ bits of adversarially chosen information about the part of the state that round read; the total leakage over all rounds is unbounded — [[DP08 - Leakage-Resilient Cryptography|DP08]], [[Pie09 - A Leakage-Resilient Mode of Operation|Pie09]].

## Syntax

A stream cipher is a pair of efficient algorithms $\mathsf{SC} = (\KeyGen, \mathsf{Next})$ with state space $\calS$ and block length $n$:

- $\KeyGen(1^\secpar) \to S_0$, a randomized algorithm sampling an initial state $S_0 \in \calS$,
- $\mathsf{Next}(S_{i-1}) \to (S_i, X_i)$, a deterministic algorithm computing round $i \ge 1$: it outputs the next state $S_i \in \calS$ and an output block $X_i \in \bits^n$.

Round $i$ reads only a part $S^{+}_{i-1}$ of $S_{i-1}$, its **active state**, fixed by the description of $\mathsf{SC}$; the rest of $S_{i-1}$ is carried into $S_i$ unchanged. Leakage in round $i$ is a function of $S^{+}_{i-1}$ alone, the axiom that only computation leaks information — [[MR04 - Physically Observable Cryptography|MR04]].

## Properties

### Correctness

$\mathsf{Next}$ is deterministic, so the stream $X_1, X_2, \ldots$ is a function of $S_0$, and two parties holding $S_0$ compute the same stream — standard.

### Leakage resilience

Before each round $i$, $\calA$ chooses an efficiently computable leakage function $f_i$ with $\ell$ output bits and receives $X_i$ together with $\Lambda_i := f_i(S^{+}_{i-1})$. After any number $q$ of rounds, $\calA$ receives either $X_{q+1}$ or a uniform block. The challenge round leaks nothing: $f_{q+1}$ could compute $X_{q+1}$ from $S^{+}_{q}$ and output its first bit. Leakage on all of $S_{i-1}$ is likewise excluded: $S_{i-1}$ determines $X_{i+1}$, so for every $\ell \ge 1$, $f_i$ could output a bit of the next round's block — standard.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{lr\text{-}sc}}_{\mathsf{SC},\ell,\calA}(\secpar)$}
\begin{algorithmic}
\State $S_0 \gets \KeyGen(1^\secpar)$; $b \getsr \bits$; $i \gets 0$
\State $\stA \gets \calA^{\calO}(1^\secpar)$
\Comment{Each $f$ queried to $\calO$ has $\ell$ output bits}
\State $(S_{i+1}, X_{i+1}) \gets \mathsf{Next}(S_i)$
\Comment{Challenge round: no leakage}
\State $X^*_0 \gets X_{i+1}$; $X^*_1 \getsr \bits^n$
\State $b' \gets \calA(X^*_b, \stA)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO(f)$}
\begin{algorithmic}
\State $i \gets i + 1$
\State $\Lambda_i \gets f(S^{+}_{i-1})$
\Comment{$f$ sees only the active state of round $i$}
\State $(S_i, X_i) \gets \mathsf{Next}(S_{i-1})$
\Return $(X_i, \Lambda_i)$
\end{algorithmic}
\end{algorithm}
```

A stream cipher $\mathsf{SC}$ is **$\ell$-leakage-resilient** if for all efficient $\calA$,

$$
\Adv^{\mathrm{lr\text{-}sc}}_{\mathsf{SC},\ell,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{lr\text{-}sc}}_{\mathsf{SC},\ell,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. As an object, a leakage-resilient stream cipher is $\ell$-leakage-resilient for some $\ell = \Omega(\log \secpar)$; each result states its bound.

# Variations

## Stream ciphers without leakage

For $\ell = 0$ the game asks that each block be pseudorandom given the previous ones. The iterated [[pseudorandom-generator|PRG]] $(S_i, X_i) := G(S_{i-1})$ meets it, and is not $1$-leakage-resilient: round $i$ reads all of $S_{i-1}$, from which $f_i$ computes $S_i$ and then $X_{i+1}$ — standard. The constructions of [[DP08 - Leakage-Resilient Cryptography|DP08]] and [[Pie09 - A Leakage-Resilient Mode of Operation|Pie09]] therefore split the state into parts read in alternate rounds.

# Other results

- The output of any PRG has high HILL pseudoentropy even when bounded information about its seed is leaked; [[DP08 - Leakage-Resilient Cryptography|DP08]] prove this lemma and combine it with alternating extraction to build a leakage-resilient stream cipher from any PRG ([[prg-to-leakage-resilient-stream-cipher-dp08|PRG ⇒ Leakage-resilient stream cipher]]).
- [[pseudorandom-function#weak-prfs|Weak PRFs]] are seed-incompressible: the output of a weak PRF on random inputs stays pseudorandom when a bounded amount of information about the key is leaked — [[Pie09 - A Leakage-Resilient Mode of Operation|Pie09]]. PRF security does not survive one bit of leakage: $f(k) :=$ the first bit of $\Eval(k, x_0)$, with a query at $x_0$, distinguishes — standard. A simple mode of operation of any weak PRF is a leakage-resilient stream cipher ([[weak-prf-to-leakage-resilient-stream-cipher-pie09|Weak PRF ⇒ Leakage-resilient stream cipher]]) — [[Pie09 - A Leakage-Resilient Mode of Operation|Pie09]].

<!-- BEGIN GENERATED participates-in 305210964954 -->

## Participates in

**Produces Leakage-resilient stream cipher**

- [[prg-to-leakage-resilient-stream-cipher-dp08|PRG ⇒ Leakage-resilient stream cipher]]
- [[weak-prf-to-leakage-resilient-stream-cipher-pie09|Weak PRF ⇒ Leakage-resilient stream cipher]]

<!-- END GENERATED participates-in -->
