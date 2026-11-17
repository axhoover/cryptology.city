---
type: reduction
status: draft
title: "DPF ⇒ Computational Multi-server PIR"
aliases: []
id: red-dpf-to-computational-multi-server-pir-gi14
kind: implication
hypotheses: [dpf]
conclusion: computational-multi-server-pir
class: fully-black-box
model: standard
source:
  - "[[GI14 - Distributed Point Functions and Their Applications|GI14]]"
security-loss: "tight: one oracle call, advantage-preserving"
rationale:
  class: "One fixed construction calls the DPF only through its key generation and evaluation algorithms, and the privacy reduction runs any query distinguisher once as an oracle on the key it receives, which makes it a DPF hiding adversary."
---

# DPF ⇒ Computational Multi-server PIR

## Statement

A [[distributed-point-function|DPF]] with range $\GG$ yields a 2-server [[multi-server-private-information-retrieval#computational-multi-server-pir|computational PIR]] for an $N$-bit database $D$ in which each query is one DPF key and each answer one element of $\GG$. Let $n = \lceil \log_2 N \rceil$, identify $[N]$ with a subset of $\bits^n$, and fix $g \in \GG \setminus \{0\}$: the client sends $(k_0, k_1) \gets \Gen(1^\secpar, 1^n, i, g)$, one key to each server; server $b$ returns $a_b = \sum_{j \in [N]} D[j] \cdot \Eval(b, k_b, j) \in \GG$; and $D[i] = [a_0 + a_1 = g]$. When $\GG = \ZZ_2$, which the PRG-based DPF of GI14 allows, each answer is one bit — [[GI14 - Distributed Point Functions and Their Applications|GI14]]. DPF correctness makes the scheme correct for every key pair, and with the DPF's key-length polynomial $p$ the total communication is at most $2p(\secpar, n, \log |\GG|) + 2\lceil \log_2 |\GG| \rceil$ bits, which, with $\GG$ fixed by the scheme, is at most $p_c(\secpar) \cdot N^c$ for every constant $c > 0$ and a polynomial $p_c$ — standard.

## Sketch

Correctness: $a_0 + a_1 = \sum_j D[j] \cdot f_{i,g}(j) = D[i] \cdot g$ by DPF correctness, which equals $g$ iff $D[i] = 1$ since $g \ne 0$. Privacy: server $b$'s entire view of a query is $k_b$, so a distinguisher between queries for $i$ and $i'$ is an adversary against [[distributed-point-function#hiding-security|DPF hiding]] for key $k_b$ with the same advantage.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\Query(i)$}
\begin{algorithmic}
\State $(k_0, k_1) \gets \Gen(1^\secpar, 1^n, i, g)$
\Return $(k_0, k_1)$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Answer(b, k_b, D)$}
\begin{algorithmic}
\State $a_b \gets \sum_{j \in [N]} D[j] \cdot \Eval(b, k_b, j)$
\Comment{sum in $\GG$}
\Return $a_b$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Recon(i, a_0, a_1)$}
\begin{algorithmic}
\Return $[a_0 + a_1 = g]$
\end{algorithmic}
\end{algorithm}
```

## Notes

- With the PRG-based DPF of GI14 ([[prg-to-dpf-gi14|PRG ⇒ DPF]]), each query has length $O(\secpar \cdot (\log N)^{\log_2 3})$, polylogarithmic in $N$ when $\secpar = \polylog(N)$, as a strong one-way function allows, and each server's computation is comparable to applying a symmetric encryption scheme to the entire database — [[GI14 - Distributed Point Functions and Their Applications|GI14]].
- For every constant $\varepsilon > 0$ there is a one-round two-server computational PIR with communication $O(n^{\varepsilon})$, built from [[pseudorandom-generator|pseudorandom generators]] and storing the database unencoded — [[CG97 - Computationally private information retrieval|CG97]]; with one-bit answers its queries have length $2^{O(\sqrt{\log n})}$, against the polylogarithmic queries here — [[GI14 - Distributed Point Functions and Their Applications|GI14]]. Two-server information-theoretic PIR has communication $n^{O(\sqrt{\log\log n/\log n})} = n^{o(1)}$ — [[DG15 - 2-Server PIR with Sub-Polynomial Communication|DG15]] — so the $O(n^{\varepsilon})$ bound no longer needs an assumption.
