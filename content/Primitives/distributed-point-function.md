---
type: primitive
status: stub
aliases:
  - DPF
  - DPFs
  - Distributed Point Functions
title: Distributed Point Functions
id: dpf
variants:
  function-secret-sharing: "#function-secret-sharing-fss"
  multi-point-function-secret-sharing: "#multi-point-functions"
---

# Distributed Point Functions

A _distributed point function (DPF)_ allows one to split the description of a _point function_ $f_{\alpha,\beta}$ (which outputs $\beta$ on input $\alpha$ and $0$ everywhere else) into two succinct keys $(k_0, k_1)$ such that $k_0$ and $k_1$ individually reveal nothing about $\alpha$ or $\beta$, but any party holding one key can evaluate the function's share at any point. Introduced by Gilboa and Ishai — [[GI14 - Distributed Point Functions and Their Applications|GI14]].

## Syntax

A _distributed point function_ for domain $[N]$ and range $\GG$ is a tuple of efficient algorithms $\mathsf{DPF} = (\Gen, \Eval)$:

- $\Gen(1^\secpar, \alpha, \beta) \to (k_0, k_1),$ is a randomized key generation algorithm that takes a special point $\alpha \in [N]$ and output value $\beta \in \GG$, and outputs two evaluation keys $k_0, k_1$,
- $\Eval(b, k_b, x) \to y_b \in \GG,$ is a deterministic algorithm for $b \in \bits$ that evaluates the $b$-th share of the point function at input $x \in [N]$.

## Properties

### Correctness

For all $\secpar \in \NN$, $\alpha \in [N]$, $\beta \in \GG$, and $(k_0, k_1) \gets \Gen(1^\secpar, \alpha, \beta)$, the shares sum to the point function:
$$\Eval(0, k_0, x) + \Eval(1, k_1, x) = f_{\alpha,\beta}(x) \quad \text{for all } x \in [N],$$
where $f_{\alpha,\beta}(x) = \beta$ if $x = \alpha$ and $0$ otherwise.

### Hiding (Security)

For $b \in \bits$, key $k_b$ reveals nothing about $(\alpha, \beta)$ beyond $[N]$ and $\GG$:

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{hide}}_{\mathsf{DPF},\calA,b}(\secpar)$}
\begin{algorithmic}
\State $(\alpha_0, \beta_0, \alpha_1, \beta_1, \stA) \gets \calA(1^\secpar)$; $c \getsr \bits$
\State $(k_0, k_1) \gets \Gen(1^\secpar, \alpha_c, \beta_c)$
\State $c' \gets \calA(k_b, \stA)$
\Return $[c' = c]$
\end{algorithmic}
\end{algorithm}
```

A DPF $\mathsf{DPF}$ is **hiding** if for all $b \in \bits$ and all efficient $\calA$,

$$
\Adv^{\mathrm{hide}}_{\mathsf{DPF},\calA,b}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{hide}}_{\mathsf{DPF},\calA,b}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[GI14 - Distributed Point Functions and Their Applications|GI14]], [[BGI15 - Function Secret Sharing|BGI15]].

# Variations

## Function secret sharing (FSS)

DPFs are a special case of _function secret sharing (FSS)_, introduced by Boyle, Gilboa, and Ishai — [[BGI15 - Function Secret Sharing|BGI15]], [[BGI16 - Function Secret Sharing Improvements and Extensions|BGI16]]. FSS generalizes DPFs to arbitrary function classes $\calF$: one generates shares $(k_0, k_1)$ of any $f \in \calF$, such that each key evaluates the function's additive share, and each key hides $f$ individually.

## Multi-point functions

Distributes a function that is non-zero on multiple points. Can be built by composing multiple DPFs.

# Other results

- [[owf-to-prg-hill99|OWF ⇒ PRG]]
- [[prg-to-dpf-gi14|PRG ⇒ DPF]]
- [[dpf-to-computational-multi-server-pir-gi14|DPF ⇒ Computational Multi-server PIR]]
- DPFs generalize to FSS for richer function classes including intervals, halfspaces, and decision trees — [[BGI15 - Function Secret Sharing|BGI15]], [[BGI16 - Function Secret Sharing Improvements and Extensions|BGI16]]
- For $\beta \neq 0$, correctness makes $(k_0, k_1)$ determine $\alpha$, so $|k_0| + |k_1| \ge \log N$ — folklore

<!-- BEGIN GENERATED participates-in 6f9c7912cdc2 -->

## Participates in

**Builds on Distributed Point Functions**

- [[dpf-to-computational-multi-server-pir-gi14|DPF ⇒ Computational Multi-server PIR]]
- [[dpf-to-multi-point-functions|DPF ⇒ Multi-point functions]]
- [[function-secret-sharing-fss-to-dpf-bgi15|Function secret sharing (FSS) ⇒ DPF]] (via [[distributed-point-function#function-secret-sharing-fss|function-secret-sharing]])

**Produces Distributed Point Functions**

- [[dpf-to-multi-point-functions|DPF ⇒ Multi-point functions]] (via [[distributed-point-function#multi-point-functions|multi-point-function-secret-sharing]])
- [[function-secret-sharing-fss-to-dpf-bgi15|Function secret sharing (FSS) ⇒ DPF]]
- [[prg-to-dpf-gi14|PRG ⇒ DPF]]

<!-- END GENERATED participates-in -->
