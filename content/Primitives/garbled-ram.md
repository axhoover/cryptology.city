---
type: primitive
status: stub
aliases:
  - GRAM
  - Garbled RAM
title: Garbled RAM
id: garbled-ram
unlisted: true
---

# Garbled RAM

A garbled RAM scheme garbles a database $D$, a RAM program $P$ and an input $x$ so that evaluating the garbled program, with random access to the garbled database, yields $P^D(x)$ and reveals nothing else, the access pattern included, at a cost polylogarithmic in $|D|$ per step of $P$.

## Syntax

A garbled RAM scheme is a tuple of efficient algorithms $\Pi = (\GData, \GProg, \GInput, \GEval)$:

- $\GData(1^\secpar, D) \to (\tilde{D}, s)$, a randomized function garbling a database $D$ into a garbled database $\tilde{D}$ and a secret $s$.
- $\GProg(1^\secpar, 1^{\log |D|}, 1^t, P, s) \to (\tilde{P}, s_{\mathrm{in}})$, a randomized function garbling a RAM program $P$ with running time $t$ under $s$, outputting a garbled program $\tilde{P}$ and an input key $s_{\mathrm{in}}$.
- $\GInput(1^\secpar, x, s_{\mathrm{in}}) \to \tilde{x}$, a randomized function garbling an input $x$.
- $\GEval^{\tilde{D}}(\tilde{P}, \tilde{x}) \to y$, a function with random access to $\tilde{D}$, outputting $y$.

The scheme is **efficient** if $|\tilde{D}| = |D| \cdot \poly(\secpar, \log |D|)$ and $\GProg$, $\GInput$ and $\GEval$ run in time $\poly(\secpar) \cdot t \cdot \polylog |D|$ for a program $P$ with running time $t$. Without this requirement, unrolling $P$ into a circuit of size $\tilde{O}(t \cdot |D|)$ and garbling it would be an instance — folklore.

## Properties

### Correctness

A garbled RAM scheme $\Pi$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$, all databases $D$, programs $P$ with running time $t$ and inputs $x$,

$$
\Pr\!\left[\GEval^{\tilde{D}}(\tilde{P}, \tilde{x}) = P^D(x)\right] \ge 1 - \varepsilon,
$$

over the coins of $\GData$, $\GProg$ and $\GInput$. When $\varepsilon = 0$, we say $\Pi$ is **perfectly correct**.

### Security

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{gram}}_{\Pi,\calA,\Sim}(\secpar)$}
\begin{algorithmic}
\State $(D, P, t, x, \stA) \gets \calA(1^\secpar)$; $b \getsr \bits$
\Comment{$P^D(x)$ halts within $t$ steps}
\State $(\tilde{D}_0, s) \gets \GData(1^\secpar, D)$
\State $(\tilde{P}_0, s_{\mathrm{in}}) \gets \GProg(1^\secpar, 1^{\log |D|}, 1^t, P, s)$; $\tilde{x}_0 \gets \GInput(1^\secpar, x, s_{\mathrm{in}})$
\State $(\tilde{D}_1, \tilde{P}_1, \tilde{x}_1) \gets \Sim(1^\secpar, |D|, |P|, |x|, t, P^D(x))$
\State $b' \gets \calA(\stA, \tilde{D}_b, \tilde{P}_b, \tilde{x}_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A garbled RAM scheme $\Pi$ is **secure** if it is $(1-\negl(\secpar))$-correct and there is an efficient $\Sim$ such that for all efficient $\calA$,

$$
\Adv^{\mathrm{gram}}_{\Pi,\calA,\Sim}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{gram}}_{\Pi,\calA,\Sim}(\secpar) = 1\right] - 1\right|
$$

is negligible. The simulator sees only $|D|$, $|P|$, $|x|$, $t$ and the output, so the garbling also hides the access pattern of $P$; this is the full security of [[LO13 - How to Garble RAM Programs|LO13]] and [[GHL+14 - Garbled RAM Revisited|GHL+14]].

# Variations

## Persistent database

Several RAM programs, garbled one after another, run in sequence on one garbled database, each seeing the database the previous ones left — [[GLOS15 - Garbled RAM From One-Way Functions|GLOS15]], [[GLO15 - Black-Box Garbled RAM|GLO15]].

# Other results

- Garbled RAM with $\poly(\secpar) \cdot \polylog |D|$ overhead exists if IBE does ([[ibe-to-garbled-ram-ghl-14|IBE ⇒ garbled RAM]]) — [[GHL+14 - Garbled RAM Revisited|GHL+14]].
- Garbled RAM with polylogarithmic overhead and a persistent database exists if one-way functions do, using them only as a black box ([[owf-to-garbled-ram-glo15|OWF ⇒ garbled RAM (black-box)]]) — [[GLO15 - Black-Box Garbled RAM|GLO15]]; a construction using them in a non-black-box way came first — [[GLOS15 - Garbled RAM From One-Way Functions|GLOS15]].

<!-- BEGIN GENERATED participates-in f4ec07dcebc3 -->

## Participates in

**Produces Garbled RAM**

- [[ibe-to-garbled-ram-ghl-14|IBE ⇒ garbled RAM]]
- [[owf-to-garbled-ram-glo15|OWF ⇒ garbled RAM (black-box)]]

<!-- END GENERATED participates-in -->
