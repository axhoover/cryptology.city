---
aliases:
  - DPF
  - DPFs
  - Distributed Point Functions
title: Distributed Point Functions
---

# Distributed Point Functions

A _distributed point function (DPF)_ allows one to split the description of a _point function_ $f_{\alpha,\beta}$ (which outputs $\beta$ on input $\alpha$ and $0$ everywhere else) into two succinct keys $(k_0, k_1)$ such that $k_0$ and $k_1$ individually reveal nothing about $\alpha$ or $\beta$, but any party holding one key can evaluate the function's share at any point. Introduced by Gilboa and Ishai — [[GI14 - Distributed Point Functions and Their Applications|GI14]].

## Syntax

A _distributed point function_ for domain $[N]$ and range $\GG$ is a tuple of efficient algorithms $\mathsf{DPF} = (\Gen, \Eval)$:

- $\Gen(1^\secpar, \alpha, \beta) \to (k_0, k_1),$ is a randomized key generation algorithm that takes a special point $\alpha \in [N]$ and output value $\beta \in \GG$, and outputs two evaluation keys $k_0, k_1$,
- $\Eval(b, k_b, x) \to y_b \in \GG,$ is a deterministic algorithm for $b \in \{0, 1\}$ that evaluates the $b$-th share of the point function at input $x \in [N]$.

## Properties

### Correctness

For all $\secpar \in \NN$, $\alpha \in [N]$, $\beta \in \GG$, and $(k_0, k_1) \gets \Gen(1^\secpar, \alpha, \beta)$, the shares sum to the point function:
$$\Eval(0, k_0, x) + \Eval(1, k_1, x) = f_{\alpha,\beta}(x) \quad \text{for all } x \in [N],$$
where $f_{\alpha,\beta}(x) = \beta$ if $x = \alpha$ and $0$ otherwise.

### Hiding (Security)

For $b \in \{0,1\}$, key $k_b$ reveals nothing about $(\alpha, \beta)$: for all efficient $\calA$,
$$\left|2\Pr\!\left[\calA(1^\secpar, k_b) = \alpha\right] - 1\right| \le \negl(\secpar).$$

# Variations

## Function secret sharing (FSS)

DPFs are a special case of _function secret sharing (FSS)_, introduced by Boyle, Gilboa, and Ishai — [[BGI15 - Function Secret Sharing|BGI15]], [[BGI16 - Function Secret Sharing Improvements and Extensions|BGI16]]. FSS generalizes DPFs to arbitrary function classes $\mathcal{F}$: one generates shares $(k_0, k_1)$ of any $f \in \mathcal{F}$, such that each key evaluates the function's additive share, and each key hides $f$ individually.

## Multi-point functions

Distributes a function that is non-zero on multiple points. Can be built by composing multiple DPFs.

# Other results

- DPFs can be constructed from [[hash-function|OWFs]] (concretely, from PRGs) with key size $O(\secpar \log N)$ — [[GI14 - Distributed Point Functions and Their Applications|GI14]]
- [[multi-server-private-information-retrieval#Computational Multi-server PIR|Computational 2-server PIR]] can be built from DPFs (the query is a DPF key pair, and each server evaluates its share) — [[GI14 - Distributed Point Functions and Their Applications|GI14]]
- DPFs generalize to FSS for richer function classes including intervals, halfspaces, and decision trees — [[BGI15 - Function Secret Sharing|BGI15]], [[BGI16 - Function Secret Sharing Improvements and Extensions|BGI16]]
- DPF key size lower bound: any 2-server DPF for $N$-element domain has keys of size $\Omega(\secpar + \log N)$ — standard
