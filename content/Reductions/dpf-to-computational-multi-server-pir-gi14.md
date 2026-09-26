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
security-loss: ""
---

# DPF ⇒ Computational Multi-server PIR

[[distributed-point-function|DPF]] implies [[multi-server-private-information-retrieval#computational-multi-server-pir|Computational Multi-server PIR]].

## Statement

A [[distributed-point-function|DPF]] for domain $[N]$ and range $\ZZ_2$ yields a 2-server [[multi-server-private-information-retrieval#computational-multi-server-pir|computational PIR]] for an $N$-bit database $D$ in which each query is one DPF key and each answer one bit: the client sends $(k_0, k_1) \gets \Gen(1^\secpar, i, 1)$, one key to each server; server $b$ returns $a_b = \sum_{j \in [N]} D[j] \cdot \Eval(b, k_b, j)$; and $D[i] = a_0 + a_1$ — [[GI14 - Distributed Point Functions and Their Applications|GI14]].

## Sketch

Correctness: $a_0 + a_1 = \sum_j D[j] \cdot f_{i,1}(j) = D[i]$ by DPF correctness. Privacy: server $b$'s entire view of a query is $k_b$, so a distinguisher between queries for $i$ and $i'$ is a DPF key-indistinguishability adversary with the same advantage.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\Query(i)$}
\begin{algorithmic}
\State $(k_0, k_1) \gets \Gen(1^\secpar, i, 1)$
\Return $(k_0, k_1)$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Answer(b, k_b, D)$}
\begin{algorithmic}
\State $a_b \gets \sum_{j \in [N]} D[j] \cdot \Eval(b, k_b, j)$
\Comment{sum in $\ZZ_2$}
\Return $a_b$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Recon(i, a_0, a_1)$}
\begin{algorithmic}
\Return $a_0 + a_1$
\end{algorithmic}
\end{algorithm}
```

## Notes

`class: fully-black-box`: one fixed construction calls the DPF only through $\Gen$ and $\Eval$; the fixed privacy reduction runs any query distinguisher once as an oracle on $k_b$, which makes it an adversary against DPF key indistinguishability (GI14's security notion). RTV04 fully-black-box shape.

- The construction is 2-server; the conclusion node computational-multi-server-pir does not record the server count.
