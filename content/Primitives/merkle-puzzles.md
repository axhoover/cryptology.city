---
type: primitive
status: draft
aliases:
  - Merkle puzzles
  - Merkle's puzzles
title: Merkle puzzles
id: merkle-puzzles
---

# Merkle puzzles

Merkle's Puzzles is a [[key-exchange|key-agreement]] protocol in the [[random-oracle-model|random oracle model]] in which the honest parties make $O(n)$ oracle queries and any eavesdropper recovering the key with constant probability makes $\Omega(n^2)$ queries — [[Mer78 - Secure Communications Over Insecure Channels|Mer78]].

## Syntax

A random-oracle key-agreement protocol $\Pi = (A, B)$ is a pair of interactive oracle algorithms with access to a uniformly random function $H : \calD \to \calR$. On input $1^\secpar$ they exchange messages over a public channel, the sequence of messages being the transcript $\tau$, and output keys $k_A, k_B \in \calK \cup \{\bot\}$; write $(\tau, k_A, k_B) \gets \langle A^H(1^\secpar), B^H(1^\secpar) \rangle$. The protocol has **query complexity** $n$ if each of $A$ and $B$ makes at most $n$ queries to $H$ — standard.

**Merkle's puzzles** with parameter $n$ uses $H : [n^2] \to \bits^\secpar$ and key space $\calK = [n^2]$. Each party queries $H$ at $n$ random points and sends the answers; a point both parties queried is the key.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\langle A^H(1^\secpar), B^H(1^\secpar) \rangle$}
\begin{algorithmic}
\State $A$: sample distinct $x_1, \ldots, x_n \getsr [n^2]$; send $(H(x_1), \ldots, H(x_n))$
\State $B$: sample distinct $y_1, \ldots, y_n \getsr [n^2]$; send $(H(y_1), \ldots, H(y_n))$
\Comment{the two messages may be sent simultaneously}
\State let $(i, j)$ be the lexicographically first pair with $H(x_i) = H(y_j)$
\If{no such pair exists}
\Return $k_A = k_B = \bot$
\EndIf
\Return $k_A = x_i$; $k_B = y_j$
\end{algorithmic}
\end{algorithm}
```

Here $(x_1, \ldots, x_n)$ is a uniformly random sequence of $n$ distinct points, and so is $(y_1, \ldots, y_n)$; each party makes exactly $n$ queries. This random-oracle form abstracts the puzzles of [[Mer78 - Secure Communications Over Insecure Channels|Mer78]], which are ciphertexts (see Variations) — standard.

## Properties

### Correctness

A random-oracle key-agreement protocol $\Pi$ is $\rho$-**correct** if for all $\secpar \in \NN$,

$$
\Pr\!\left[k_A = k_B \ne \bot\right] \ge \rho,
$$

over $H$ and the coins of $A$ and $B$. If $H$ is injective, Merkle's puzzles agrees exactly when the two sets of points intersect, which fails with probability $\prod_{t=0}^{n-1} \frac{n^2 - n - t}{n^2 - t} \le (1 - 1/n)^n \le 1/e$. $H$ fails to be injective with probability at most $n^4 / 2^{\secpar + 1}$, so Merkle's puzzles is $(1 - 1/e - n^4/2^{\secpar+1})$-correct — standard.

### Security

The eavesdropper sees the transcript and queries $H$; security is measured by the number $q$ of its queries, not by its running time.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ka}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $H \getsr \Funcs(\calD, \calR)$
\State $(\tau, k_A, k_B) \gets \langle A^H(1^\secpar), B^H(1^\secpar) \rangle$
\State $k \gets \calA^H(1^\secpar, \tau)$
\Comment{$\calA$ makes at most $q$ queries to $H$}
\Return $[k = k_A \ne \bot]$
\end{algorithmic}
\end{algorithm}
```

A random-oracle key-agreement protocol $\Pi$ is $(q, \varepsilon)$-**secure** if for every $\calA$ making at most $q$ queries to $H$, with no bound on its running time,

$$
\Adv^{\mathrm{ka}}_{\Pi,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{ka}}_{\Pi,\calA}(\secpar) = 1\right] \le \varepsilon.
$$

Merkle's puzzles is $(q, (q+1)/n^2)$-secure for every $q$, so an eavesdropper that recovers the key with constant probability makes $\Omega(n^2)$ queries, while the honest parties make $n$ each — standard; the protocol and its quadratic gap are from [[Mer78 - Secure Communications Over Insecure Channels|Mer78]]. The joint distribution of the parties' points and $H$ is unchanged by relabelling the points of $[n^2]$ with a permutation $\pi$, mapping each point $x$ to $\pi(x)$ and $H$ to $H \circ \pi^{-1}$; such a relabelling leaves the transcript unchanged, and if $\pi$ fixes the points queried so far, also the eavesdropper's answers. Conditioned on the transcript, on those answers and on the key not having been queried yet, the key is therefore uniform over the points not yet queried. The eavesdropper finds it among its $q$ queries with probability at most $q/n^2$, and otherwise guesses it with probability at most $1/(n^2 - q)$, for a total of at most $(q+1)/n^2$ — standard.

# Variations

## Merkle's original formulation

In [[Mer78 - Secure Communications Over Insecure Channels|Mer78]] the puzzles are ciphertexts rather than oracle answers. One party sends $N$ puzzles, each an encryption of a puzzle identifier and a session key under a key from a space of size about $N$; the other picks one puzzle at random, breaks it by exhaustive search, and returns its identifier in the clear, and both parties use the session key it contains. The honest parties do $O(N)$ work, while an eavesdropper, who does not know which puzzle was picked, expects to break about $N/2$ puzzles, for work quadratic in $N$ — [[Mer78 - Secure Communications Over Insecure Channels|Mer78]].

# Other results

- Let $\Pi$ be a random-oracle key-agreement protocol of query complexity $n$ with $\Pr[k_A = k_B] \ge \rho$. For every $0 < \delta < \rho$ there is an eavesdropper that makes $O(n^2/\delta^2)$ queries and outputs $k_B$ with probability at least $\rho - \delta$, so the quadratic gap of Merkle's puzzles is optimal ([[no-rom-to-ke-hmo-19|No reduction from ROM to KE]]) — [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]]. This improves the eavesdropper of [[IR89 - Limits on the provable consequences of one-way permutations|IR89]], which makes $O(m^6 \log m)$ queries for $m$ the larger of $n$ and the number of rounds — [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]]. Both eavesdroppers are bounded in queries, not in computation.
- For protocols whose honest parties' queries are uniformly random, or which run in two rounds with non-adaptive queries, secrecy against an eavesdropper making roughly $n^2$ queries requires $\Omega(n)$ bits of communication, as in Merkle's puzzles — [[HMO+19 - On the Communication Complexity of Key-Agreement Protocols|HMO+19]].

<!-- BEGIN GENERATED participates-in 06a8539352c3 -->

## Participates in

**Produces Merkle puzzles**

- [[rom-to-merkle-puzzles-mer78|ROM ⇒ Merkle puzzles]]

<!-- END GENERATED participates-in -->
