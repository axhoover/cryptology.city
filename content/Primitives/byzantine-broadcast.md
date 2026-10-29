---
type: primitive
status: draft
aliases:
  - Byzantine broadcast
  - Broadcast protocol
  - Byzantine generals problem
title: Byzantine broadcast
id: byzantine-broadcast
variants:
  byzantine-broadcast-t-lt-n-over-3: "#broadcast-against-t--n3"
---

# Byzantine broadcast

A Byzantine broadcast protocol lets a designated sender hand a value to $n$ parties over point-to-point channels so that, even when up to $t$ parties, possibly including the sender, deviate arbitrarily, all honest parties output the same value, and that value is the sender's input whenever the sender is honest — [[LSP82 - The Byzantine Generals Problem|LSP82]].

## Syntax

A broadcast protocol for $n$ parties, with sender index $s \in [n]$, value space $\calM$, $|\calM| \ge 2$, and round bound $r(\secpar, n)$, is a tuple $\Pi = (\Setup, P_1, \ldots, P_n)$ of efficient algorithms:

- $\Setup(1^\secpar, n) \to (\pp, k_1, \ldots, k_n)$, a trusted setup giving every party $\pp$ and party $P_i$ the private value $k_i$. In the plain model it is trivial; in a public-key infrastructure $k_i$ is $P_i$'s signing key and $\pp$ lists every party's verification key.
- $P_i(\pp, k_i)$, and $P_s(\pp, k_s, m)$ for the sender's input $m \in \calM$, interactive algorithms that run for $r(\secpar, n)$ synchronous rounds over [[interactive-protocol#authenticated-channels|authenticated point-to-point channels]], after which $P_i$ outputs $y_i \in \calM$.

## Properties

### Security

The adversary chooses the sender, the corrupted set and the sender's input, which matters only for an honest sender. It wins if two honest parties output different values (agreement), if the sender is honest and an honest party outputs a value other than $m$ (validity), or if an honest party outputs nothing within $r(\secpar, n)$ rounds (termination). Correctness is the case $T = \emptyset$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{bc}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $(s, T, m, \stA) \gets \calA(1^\secpar)$
\Comment{$T \subseteq [n]$ with $|T| \le t$, and $m \in \calM$}
\State $(\pp, k_1, \ldots, k_n) \gets \Setup(1^\secpar, n)$
\State Run $\Pi$ for $r(\secpar, n)$ rounds with $P_i(\pp, k_i)$ for $i \notin T$, sender input $m$ if $s \notin T$, and $\calA(\stA, \pp, (k_i)_{i \in T})$ controlling $(P_i)_{i \in T}$
\State $y_i \gets$ the output of $P_i$, or $\bot$ if it has none, for $i \notin T$
\State $w_{\mathrm{agr}} := [\exists\, i, j \notin T : y_i \ne y_j]$; $w_{\mathrm{val}} := [s \notin T \land \exists\, i \notin T : y_i \ne m]$
\Return $w_{\mathrm{agr}} \lor w_{\mathrm{val}} \lor [\exists\, i \notin T : y_i = \bot]$
\end{algorithmic}
\end{algorithm}
```

A protocol $\Pi$ is a **broadcast protocol against $t$ corruptions** if for all efficient $\calA$ corrupting at most $t$ parties,

$$
\Adv^{\mathrm{bc}}_{\Pi,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{bc}}_{\Pi,\calA}(\secpar) = 1\right]
$$

is negligible, and **perfectly secure** if $\Pr\!\left[\Game^{\mathrm{bc}}_{\Pi,\calA}(\secpar) = 1\right] = 0$ for every, possibly unbounded, $\calA$. **Byzantine broadcast** is achieved when for every $n$ there is a broadcast protocol against $t = n - 1$ corruptions, efficient in $\secpar$ for each fixed $n$.

# Variations

## Broadcast against $t < n/3$

A broadcast protocol against every $t < n/3$ corruptions, for every $n$; Byzantine broadcast against $t = n - 1$ gives it, its adversaries including these — folklore. Over authenticated point-to-point channels without setup, broadcast against $t$ corruptions exists, with perfect security, if and only if $t < n/3$; with unforgeable signatures it exists against any number of corruptions — [[LSP82 - The Byzantine Generals Problem|LSP82]]. With $t$ faults no solution exists in a communication graph with fewer than $3t + 1$ nodes or connectivity below $2t + 1$ — [[FLM85 - Easy Impossibility Proofs for Distributed Consensus Problems|FLM85]]; the argument covers randomized protocols and efficient adversaries, so the impossibility holds whatever hardness assumption a protocol uses ([[no-authenticated-channels-to-byzantine-broadcast-flm85|no broadcast from authenticated channels]]) — standard.

Signatures need a public-key infrastructure, and with one the Dolev–Strong protocol achieves broadcast against any $t < n$ in $t + 1$ rounds with polynomially many messages, which is round-optimal for deterministic protocols ([[ds-to-byzantine-broadcast-ds83|DS ⇒ Byzantine broadcast]]) — [[DS83 - Authenticated Algorithms for Byzantine Agreement|DS83]]. With signatures and a public-key infrastructure, Byzantine agreement for $t < n/2$ runs in an expected constant number of rounds — [[KK06 - On Expected Constant-Round Protocols for Byzantine Agreement|KK06]]. Without setup, over private channels, randomized agreement against $t < n/3$ runs in an expected constant number of rounds — [[FM88 - Optimal Algorithms for Byzantine Agreement|FM88]].

<!-- BEGIN GENERATED participates-in fde96aca2cd6 -->

## Participates in

**Builds on Byzantine broadcast**

- [Byzantine broadcast ⇒ Broadcast against $t < n/3$](byzantine-broadcast-to-byzantine-broadcast-t-lt-n-over-3)

**Produces Byzantine broadcast**

- [Authenticated channels ⇒ Broadcast against $t < n/3$ (Lamport–Shostak–Pease)](authenticated-channels-to-byzantine-broadcast-t-lt-n-over-3-lsp82) (via [Broadcast against $t < n/3$](byzantine-broadcast#broadcast-against-t--n3))
- [Byzantine broadcast ⇒ Broadcast against $t < n/3$](byzantine-broadcast-to-byzantine-broadcast-t-lt-n-over-3) (via [Broadcast against $t < n/3$](byzantine-broadcast#broadcast-against-t--n3))
- [[ds-to-byzantine-broadcast-ds83|Digital signatures ⇒ Byzantine broadcast (Dolev–Strong)]]

**Barriers**

- [[no-authenticated-channels-to-byzantine-broadcast-flm85|No reduction from authenticated channels to Byzantine broadcast]] — circumvented by [[ds-to-byzantine-broadcast-ds83|Digital signatures ⇒ Byzantine broadcast (Dolev–Strong)]]

<!-- END GENERATED participates-in -->
