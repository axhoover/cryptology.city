---
type: primitive
status: stub
aliases:
  - ABBREV
title: Full primitive name
---

# Full primitive name

One or two sentences stating what the object is, in informal language matching
the formal definition below. Not a motivation, not an application sketch.

## Syntax

A ABBREV is a tuple of efficient algorithms $(\KeyGen, \ldots)$ with respect to
TODO:

- $\KeyGen(1^\secpar) \to k$, TODO.

## Properties

### Correctness

TODO

### Security

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{name}}_{\Primitive,\calA}(\secpar)$}
\begin{algorithmic}
\State TODO
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A ABBREV is **name-secure** if for all efficient $\calA$,

$$
\Adv^{\mathrm{name}}_{\Primitive,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{name}}_{\Primitive,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

# Variations

## Variant name

TODO

# Other results

- TODO — every bullet needs a [[CITATIONKEY - Full Title|CITATIONKEY]] citation or an explicit — folklore / — standard flag.
