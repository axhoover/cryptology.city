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
---

# DLOG ⇒ Statistically hiding commitment

[[discrete-logarithm|DLOG]] implies a [[commitment-scheme#hiding|statistically hiding commitment]].

## Statement

The Pedersen commitment over $(\GG, g, p) \gets \GrGen(1^\secpar)$ with $h \getsr \GG \setminus \{1\}$ commits to $m \in \ZZ_p$ as $c = g^m h^r$ for $r \getsr \ZZ_p$. It is perfectly hiding, and computationally binding under [[discrete-logarithm|DLOG]], since two openings $(m, r) \ne (m', r')$ of one $c$ give $\log_g h = (m - m')(r' - r)^{-1} \bmod p$ — [[Ped91 - Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing|Ped91]].

## Sketch

Hiding: $h$ generates $\GG$, so $h^r$ is uniform over $r \getsr \ZZ_p$ and $c$ is uniform, independent of $m$. Binding: two openings of one $c$ yield $\log_g h$, contradicting DLOG for $h$ sampled with unknown discrete logarithm.

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

## Notes

`class: fully-black-box`: Fixed construction; the reduction is fixed and uses the adversary only as an oracle: on DLOG challenge $X$ it outputs $0$ if $X = 1$, and otherwise sets $h = X$, runs the binding adversary to obtain two openings $(m, r) \ne (m', r')$ of one commitment, and outputs $\log_g h = (m - m')(r' - r)^{-1} \bmod p$. Hiding is perfect, unconditionally.
