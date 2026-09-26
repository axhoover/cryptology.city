---
type: reduction
status: draft
title: "DDH ⇒ COM"
aliases: []
id: red-ddh-to-com
kind: implication
hypotheses: [ddh]
conclusion: com
class: fully-black-box
model: standard
source:
  - "[[Ped91 - Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing|Ped91]]"
security-loss: "tight: one call to the binding adversary yields $\\log_g h$"
---

# DDH ⇒ COM

[[decisional-diffie-hellman|DDH]] implies [[commitment-scheme|COM]].

## Statement

The Pedersen commitment over $(\GG, g, p) \gets \GrGen(1^\secpar)$ with $h \getsr \GG \setminus \{1\}$ commits to $m \in \ZZ_p$ as $c = g^m h^r$ for $r \getsr \ZZ_p$. It is perfectly hiding, and computationally binding under [[discrete-logarithm|DLOG]] (implied by [[decisional-diffie-hellman|DDH]] via [[ddh-to-cdh|DDH ⇒ CDH]] and [[cdh-to-dlog|CDH ⇒ DLOG]]), since two openings $(m, r) \ne (m', r')$ of one $c$ give $\log_g h = (m - m')(r' - r)^{-1} \bmod p$ — [[Ped91 - Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing|Ped91]].

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

`class: fully-black-box`: Fixed construction; the reduction is fixed and uses the adversary only as an oracle: on DDH challenge $(X, Y, Z)$ it sets $h = X$, runs the binding adversary to obtain two openings $(m, r) \ne (m', r')$ of one commitment, computes $x = \log_g h = (m - m')(r' - r)^{-1} \bmod p$, and guesses the real world iff $Z = Y^x$. Hiding is perfect, unconditionally.
