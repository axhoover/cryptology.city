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

A _distributed point function_ with range $\GG$, a finite abelian group with $|\GG| \ge 2$ fixed by the scheme, is a tuple of efficient algorithms $\mathsf{DPF} = (\Gen, \Eval)$:

- $\Gen(1^\secpar, 1^n, \alpha, \beta) \to (k_0, k_1),$ is a randomized key generation algorithm that takes a domain length $n \in \NN$, a special point $\alpha \in \bits^n$ and an output value $\beta \in \GG$, and outputs two evaluation keys $k_0, k_1$,
- $\Eval(b, k_b, x) \to y_b \in \GG,$ is a deterministic algorithm for $b \in \bits$ that evaluates the $b$-th share of the point function at input $x \in \bits^n$.

The domain $\bits^n$ has size $N = 2^n$. The keys are succinct: there is one polynomial $p$, independent of $n$, such that $|k_0|, |k_1| \le p(\secpar, n, \log |\GG|)$ — [[GI14 - Distributed Point Functions and Their Applications|GI14]], [[BGI15 - Function Secret Sharing|BGI15]]. For each fixed $\secpar$ this bound is polynomial in $n$, so it rules out sharing the truth table, whose keys have length $2^n \log |\GG|$: $k_0 \getsr \GG^N$, $k_1 := (f_{\alpha,\beta}(x))_{x \in \bits^n} - k_0$ and $\Eval(b, k_b, x) := k_b[x]$ are correct and perfectly hiding — standard.

As an object, a DPF denotes a scheme with $\Gen(1^\secpar, 1^n, \alpha, \beta)$ for every $n \in \NN$, with domain $\bits^n$, $\alpha \in \bits^n$ and $\beta \in \GG$, where $\GG$ is a finite abelian group with $|\GG| \ge 2$ fixed by the scheme. It is correct and hiding, with hiding against efficient $\calA$ that choose $n$, and $|k_0|, |k_1| \le p(\secpar, n, \log |\GG|)$ for one polynomial $p$ independent of $n$.

## Properties

### Correctness

For all $\secpar, n \in \NN$, $\alpha \in \bits^n$, $\beta \in \GG$, and $(k_0, k_1) \gets \Gen(1^\secpar, 1^n, \alpha, \beta)$, the shares sum to the point function:
$$\Eval(0, k_0, x) + \Eval(1, k_1, x) = f_{\alpha,\beta}(x) \quad \text{for all } x \in \bits^n,$$
where $f_{\alpha,\beta}(x) = \beta$ if $x = \alpha$ and $0$ otherwise.

### Hiding (Security)

For $b \in \bits$, key $k_b$ reveals nothing about $(\alpha, \beta)$ beyond $n$ and $\GG$:

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{hide}}_{\mathsf{DPF},\calA,b}(\secpar)$}
\begin{algorithmic}
\State $(1^n, \alpha_0, \beta_0, \alpha_1, \beta_1, \stA) \gets \calA(1^\secpar)$; $c \getsr \bits$
\Comment{$\alpha_0, \alpha_1 \in \bits^n$ and $\beta_0, \beta_1 \in \GG$}
\State $(k_0, k_1) \gets \Gen(1^\secpar, 1^n, \alpha_c, \beta_c)$
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

DPFs are a special case of _function secret sharing (FSS)_ ([[function-secret-sharing-fss-to-dpf-bgi15|Function secret sharing (FSS) ⇒ DPF]]), introduced by Boyle, Gilboa, and Ishai — [[BGI15 - Function Secret Sharing|BGI15]], [[BGI16 - Function Secret Sharing Improvements and Extensions|BGI16]]. FSS generalizes DPFs to a function class $\calF$ whose members $f$ are given by descriptions $\hat f$: $\Gen(1^\secpar, \hat f)$ runs in time $\poly(\secpar, |\hat f|)$ and outputs keys $(k_0, k_1)$, and the deterministic $\Eval$ satisfies $\Eval(0, k_0, x) + \Eval(1, k_1, x) = f(x)$ for every input $x$ of $f$. As for DPFs, the keys are succinct: for a polynomial $p$, the keys for $f \in \calF$ have length at most $p(\secpar, |\hat f|)$ — [[BGI15 - Function Secret Sharing|BGI15]]. Here $\calF$ contains, for a finite abelian group $\GG$ with $|\GG| \ge 2$ and every $n \in \NN$, every point function $f_{\alpha,\beta} : \bits^n \to \GG$, described by $(\alpha, \beta)$, so $|\hat f_{\alpha,\beta}| = O(n + \log |\GG|)$ and the keys of point functions meet the DPF key bound with a polynomial independent of $n$. Without this requirement FSS holds with no assumption and need not give a DPF: FSS for $\calF = \{0\}$ is trivial, and for all functions $\bits^n \to \GG$ described by their truth tables, additive shares of the table are correct, perfectly hiding and of length $|\hat f|$ — standard.

Each key hides $f$ beyond the input length $n$, the output group $\GG$ and the description length $|\hat f|$, which the keys may reveal, so $\calA$ must output two descriptions that agree on them:

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{fss}}_{\mathsf{FSS},\calA,b}(\secpar)$}
\begin{algorithmic}
\State $(\hat f_0, \hat f_1, \stA) \gets \calA(1^\secpar)$; $c \getsr \bits$
\Comment{$\hat f_0, \hat f_1 \in \calF$ with equal $(n, \GG, |\hat f|)$}
\State $(k_0, k_1) \gets \Gen(1^\secpar, \hat f_c)$
\State $c' \gets \calA(k_b, \stA)$
\Return $[c' = c]$
\end{algorithmic}
\end{algorithm}
```

An FSS scheme $\mathsf{FSS}$ is **hiding** if for all $b \in \bits$ and all efficient $\calA$,

$$
\Adv^{\mathrm{fss}}_{\mathsf{FSS},\calA,b}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{fss}}_{\mathsf{FSS},\calA,b}(\secpar) = 1\right] - 1\right|
$$

is negligible. Restricted to point functions, whose descriptions with equal $n$ have equal length, this is the DPF hiding game above. As an object, FSS denotes a correct and hiding scheme with this key bound for a class $\calF$ that contains these point functions.

TODO: check the leakage function of [[BGI15 - Function Secret Sharing|BGI15]]'s FSS security definition against $(n, \GG, |\hat f|)$, and cite BGI15 for the game once it matches.

## Multi-point functions

FSS for multi-point functions, which are non-zero on several points, is used by [[BCGI18 - Compressing Vector OLE|BCGI18]]. A **multi-point FSS** scheme with range $\GG$, a finite abelian group with $|\GG| \ge 2$ fixed by the scheme, is a pair of efficient algorithms $(\Gen, \Eval)$:

- $\Gen(1^\secpar, 1^n, ((\alpha_i, \beta_i))_{i \in [t]}) \to (k_0, k_1)$, a randomized algorithm that takes $t \ge 1$ pairs with distinct $\alpha_1, \ldots, \alpha_t \in \bits^n$ and $\beta_1, \ldots, \beta_t \in \GG$,
- $\Eval(b, k_b, x) \to y_b \in \GG$, a deterministic algorithm for $b \in \bits$ and $x \in \bits^n$.

It is **correct** if for all $\secpar, n, t$, all such inputs and $(k_0, k_1) \gets \Gen(1^\secpar, 1^n, ((\alpha_i, \beta_i))_{i \in [t]})$,
$$\Eval(0, k_0, x) + \Eval(1, k_1, x) = \sum_{i=1}^{t} f_{\alpha_i,\beta_i}(x) \quad \text{for all } x \in \bits^n.$$
Its keys are succinct: $|k_0|, |k_1| \le p(\secpar, t, n, \log |\GG|)$ for one polynomial $p$ independent of $n$ and $t$. It is hiding in the following game, in which $\calA$ outputs two lists of $t$ pairs over the same $\bits^n$:

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{mp}}_{\mathsf{MPF},\calA,b}(\secpar)$}
\begin{algorithmic}
\State $(1^n, S_0, S_1, \stA) \gets \calA(1^\secpar)$; $c \getsr \bits$
\Comment{$S_0, S_1$ each list $t$ pairs $(\alpha_i, \beta_i)$ with distinct $\alpha_i \in \bits^n$}
\State $(k_0, k_1) \gets \Gen(1^\secpar, 1^n, S_c)$
\State $c' \gets \calA(k_b, \stA)$
\Return $[c' = c]$
\end{algorithmic}
\end{algorithm}
```

A multi-point FSS scheme $\mathsf{MPF}$ is **hiding** if for all $b \in \bits$ and all efficient $\calA$,

$$
\Adv^{\mathrm{mp}}_{\mathsf{MPF},\calA,b}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{mp}}_{\mathsf{MPF},\calA,b}(\secpar) = 1\right] - 1\right|
$$

is negligible. As an object, multi-point FSS denotes a correct and hiding scheme with this key bound. Running a DPF once per point gives one ([[dpf-to-multi-point-functions|DPF ⇒ Multi-point functions]]).

# Other results

- [[owf-to-prg-hill99|OWF ⇒ PRG]]
- [[prg-to-dpf-gi14|PRG ⇒ DPF]]
- [[dpf-to-computational-multi-server-pir-gi14|DPF ⇒ Computational Multi-server PIR]]
- DPFs generalize to FSS for richer function classes including intervals, halfspaces, and decision trees — [[BGI15 - Function Secret Sharing|BGI15]], [[BGI16 - Function Secret Sharing Improvements and Extensions|BGI16]]
- For $\beta \neq 0$, correctness makes $(k_0, k_1)$ determine $\alpha \in \bits^n$, so $|k_0| + |k_1| \ge n$ — folklore

<!-- BEGIN GENERATED participates-in f4d5414fe8c5 -->

## Participates in

**Builds on Distributed Point Functions**

- [[dpf-to-computational-multi-server-pir-gi14|DPF ⇒ Computational Multi-server PIR]]
- [[dpf-to-multi-point-functions|DPF ⇒ Multi-point functions]]
- [[function-secret-sharing-fss-to-dpf-bgi15|Function secret sharing (FSS) ⇒ DPF]] (via [[distributed-point-function#function-secret-sharing-fss|Function secret sharing (FSS)]])

**Produces Distributed Point Functions**

- [[dpf-to-multi-point-functions|DPF ⇒ Multi-point functions]] (via [[distributed-point-function#multi-point-functions|Multi-point functions]])
- [[function-secret-sharing-fss-to-dpf-bgi15|Function secret sharing (FSS) ⇒ DPF]]
- [[prg-to-dpf-gi14|PRG ⇒ DPF]]

<!-- END GENERATED participates-in -->
