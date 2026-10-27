---
type: assumption
status: draft
aliases:
  - LRSW
  - LRSW assumption
title: LRSW assumption
id: lrsw
unlisted: true
---

# LRSW assumption

Given $X = g^x$, $Y = g^y$ and an oracle that answers each query $m$ with $(a, a^y, a^{x + mxy})$ for a fresh random $a$, no efficient adversary can output such a triple, with $a \ne 1$, for a nonzero $m$ it never queried.

## Assumption

The assumption concerns a group generator $\GrGen$ that on input $1^\secpar$ outputs $(\GG, p, g)$, a cyclic group $\GG$ of prime order $p$ with generator $g$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{lrsw}}_{\GrGen,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\GG, p, g) \gets \GrGen(1^\secpar)$; $x, y \getsr \ZZ_p$; $\calQ \gets \{\}$
\State $(m, a, b, c) \gets \calA^{\calO}(1^\secpar, \GG, p, g, g^x, g^y)$
\Return $[m \notin \calQ \wedge m \ne 0 \wedge a \ne 1 \wedge b = a^y \wedge c = a^{x + mxy}]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO(m)$}
\begin{algorithmic}
\State $a \getsr \GG$; $\calQ \gets \calQ \cup \{m\}$
\Return $(a, a^y, a^{x + mxy})$
\end{algorithmic}
\end{algorithm}
```

**LRSW is hard** for $\GrGen$ if for all efficient $\calA$,

$$
\Adv^{\text{lrsw}}_{\GrGen,\calA}(\secpar) := \Pr\!\left[\Game^{\text{lrsw}}_{\GrGen,\calA}(\secpar) = 1\right]
$$

is negligible.

The assumption is from [[LRSW99 - Pseudonym Systems|LRSW99]], and [[CL04 - Signature Schemes and Anonymous Credentials from Bilinear Maps|CL04]] use it in groups with a bilinear map. It is interactive: the adversary queries an oracle. Both exclusions in the winning condition are needed, since $(g, g^y, g^x)$ is a valid triple for $m = 0$ and $(1, 1, 1)$ for every $m$ — standard.

<!-- BEGIN GENERATED participates-in 177e779d771d -->

## Participates in

**Builds on LRSW assumption**

- [[type-1-pairing-and-lrsw-to-ds-cl04|Type 1 pairing + LRSW ⇒ DS (Camenisch–Lysyanskaya)]]

**Produces LRSW assumption**

- [[ggm-to-lrsw-lrsw99|GGM ⇒ LRSW]]

<!-- END GENERATED participates-in -->
