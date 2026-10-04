---
type: reduction
status: draft
title: "DLOG ⇒ Statistically hiding commitment"
aliases: []
id: red-dlog-to-com-ped91
kind: implication
hypotheses: [dlog]
conclusion: statistically-hiding-commitment
class: fully-black-box
model: standard
source:
  - "[[Ped91 - Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing|Ped91]]"
security-loss: "tight: one call to the binding adversary yields $\\log_g h$"
rationale:
  class: "One fixed construction uses the group only through its generator and group operations, and the fixed reduction plants the DLOG challenge as h and runs the binding adversary once as an oracle."
---

# DLOG ⇒ Statistically hiding commitment

## Statement

For $(\GG, g, p) \gets \GrGen(1^\secpar)$ with $\GG$ of prime order $p$ and $h \getsr \GG \setminus \{1\}$, the Pedersen commitment to $m \in \ZZ_p$ is $c = g^m h^r$ for $r \getsr \ZZ_p$, opened by revealing $(m, r)$. It is [[commitment-scheme#hiding|perfectly hiding]], and computationally binding if [[discrete-logarithm|DLOG]] is hard for $\GrGen$, since two openings $(m, r) \ne (m', r')$ of one $c$ give $\log_g h = (m - m')(r' - r)^{-1} \bmod p$ — [[Ped91 - Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing|Ped91]].

## Sketch

Hiding: $h$ generates $\GG$, so $h^r$ is uniform over $r \getsr \ZZ_p$ and $c$ is uniform, independent of $m$. Binding: on DLOG challenge $X$ the reduction outputs $0$ if $X = 1$, and otherwise sets $h = X$, runs the binding adversary and turns its two openings into $\log_g X$.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\Gen(1^\secpar)$}
\begin{algorithmic}
\State $(\GG, g, p) \gets \GrGen(1^\secpar)$; $h \getsr \GG \setminus \{1\}$
\Return $\pp \gets (\GG, g, p, h)$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Com(\pp, m; r)$}
\begin{algorithmic}
\Return $(c, d) \gets (g^m h^r, (m, r))$
\Comment{$m, r \in \ZZ_p$}
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Open(\pp, c, (m, r))$}
\begin{algorithmic}
\If{$c = g^m h^r$}
\Return $m$
\EndIf
\Return $\bot$
\end{algorithmic}
\end{algorithm}
```
