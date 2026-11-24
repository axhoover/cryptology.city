---
type: primitive
status: draft
aliases:
  - ELF
  - Extremely lossy function
  - Extremely lossy functions
title: Extremely lossy function
id: elf
---

# Extremely lossy function

An extremely lossy function is a family of functions on a domain of size $m$ whose generation algorithm takes an image bound $r$: the function is injective for $r = m$ and has at most $r$ images otherwise, and for every polynomial size bound and every inverse-polynomial advantage there is a polynomial $Q$ such that no circuit within the size bound distinguishes the injective mode from a mode with image bound $r \ge Q$ with more than that advantage. The notion is due to [[Zha16 - The Magic of ELFs|Zha16]]; the syntax and definitions below are those of [[ADDR26 - Simple Extremely Lossy Functions from Small-Exponent Hashing|ADDR26]] (Definition 2.6).

## Syntax

For $m \ge 2$ let $n_m := \lceil \log_2 m \rceil$, and write $[k] := \{1, \ldots, k\}$. An ELF is a pair of algorithms $\mathsf{ELF} = (\Gen, \Eval)$ together with a function $N_{\mathrm{out}}$ with $\log N_{\mathrm{out}}(m) = \poly(n_m)$:

- $\Gen(m, r) \to f$, a randomized polynomial-time algorithm that takes integers $m \ge 2$ and $r \in [m]$ and outputs the description of a function $f : [m] \to [N_{\mathrm{out}}(m)]$,
- $\Eval(f, u) \to y$, a deterministic algorithm that takes a description $f$ and $u \in [m]$ and outputs $y = f(u)$ in time $\poly(n_m)$.

ADDR26 take the definition of [[Zha16 - The Magic of ELFs|Zha16]] with these changes: $\log N_{\mathrm{out}}(m) = \poly(\log m)$ is required, evaluation is a separate deterministic algorithm, and mode indistinguishability is stated for probabilistic circuits of size $t$, where Zha16 quantifies over adversaries whose running time is at most a polynomial — [[ADDR26 - Simple Extremely Lossy Functions from Small-Exponent Hashing|ADDR26]].

## Properties

### Injective mode

$\mathsf{ELF}$ has an **injective mode** if $f \gets \Gen(m, m)$ is injective except with probability negligible in $n_m$ — [[ADDR26 - Simple Extremely Lossy Functions from Small-Exponent Hashing|ADDR26]].

### Lossy mode

$\mathsf{ELF}$ has a **lossy mode** if for every $r \in [m]$, $f \gets \Gen(m, r)$ satisfies $|\mathrm{Im}(f)| \le r$ except with probability negligible in $n_m$ — [[ADDR26 - Simple Extremely Lossy Functions from Small-Exponent Hashing|ADDR26]].

### Mode indistinguishability

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{elf}}_{\mathsf{ELF},\calA}(m, r)$}
\begin{algorithmic}
\State $b \getsr \bits$
\State $f_0 \gets \Gen(m, m)$; $f_1 \gets \Gen(m, r)$
\Comment{injective mode; image bound $r$}
\State $b' \gets \calA(f_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

$\mathsf{ELF}$ is **mode-indistinguishable** if for every polynomial $t$ and every positive polynomial $\delta$ there is a polynomial $Q$ such that for all sufficiently large $m$, every $r$ with $Q(n_m) \le r \le m$ and every probabilistic circuit $\calA$ of size at most $t(n_m)$,

$$
\Adv^{\mathrm{elf}}_{\mathsf{ELF},\calA}(m, r) := \left|2\Pr\!\left[\Game^{\mathrm{elf}}_{\mathsf{ELF},\calA}(m, r) = 1\right] - 1\right| \le \frac{1}{\delta(n_m)}
$$

— [[ADDR26 - Simple Extremely Lossy Functions from Small-Exponent Hashing|ADDR26]].

The threshold $Q$ is chosen after the size bound $t$ and the target advantage $1/\delta$, and no single polynomial image bound serves every efficient adversary, because evaluation is public. Consider the algorithm that evaluates $f$ at $k \ge 2$ independent uniform inputs and outputs 1 if and only if the inputs are pairwise distinct and the outputs are not. It outputs 1 with probability 0 if $f$ is injective, and with probability at least $1 - \exp(-k(k-1)/(2r)) - k(k-1)/(2m)$ if $|\mathrm{Im}(f)| \le r$ — [[ADDR26 - Simple Extremely Lossy Functions from Small-Exponent Hashing|ADDR26]] (Theorem 3.1), making quantitative the observation of [[Zha16 - The Magic of ELFs|Zha16]] that $O(\sqrt{r})$ evaluations detect an image of size $r$.

As an object, an extremely lossy function denotes a pair $(\Gen, \Eval)$ with an injective mode and a lossy mode that is mode-indistinguishable.

# Variations

## Always-injective ELFs

An ELF in which every output of $\Gen(m, m)$ is injective and, for $2 \le r < m$, every output of $\Gen(m, r)$ has fewer than $r$ images, with mode indistinguishability as above; ADDR26 construct one from [[decisional-composite-residuosity|DCR]] and tunable DSEDL over Damgård–Jurik groups (Corollary 5.13) — [[ADDR26 - Simple Extremely Lossy Functions from Small-Exponent Hashing|ADDR26]]. The [[anamorphic-encryption#anamorphic-resistant-encryption|anamorphic-resistant encryption]] scheme of [[ABGMM25 - The Malice of ELFs Practical Anamorphic-Resistant Encryption without Random Oracles|ABGMM25]] that is built from fully unique [[non-interactive-zero-knowledge|NIZK]] arguments uses its ELF only through the two modes and mode indistinguishability, where injective generation must always return an injective function and the lossy image must be smaller than the image bound; it remains anamorphic-resistant and IND-CPA-secure with the ELF of Corollary 5.13 in place of one from exponential DDH — [[ADDR26 - Simple Extremely Lossy Functions from Small-Exponent Hashing|ADDR26]].

# Other results

- ELFs exist under the exponential hardness of [[decisional-diffie-hellman|DDH]] — [[Zha16 - The Magic of ELFs|Zha16]]. Outside obfuscation, every earlier construction of ELFs and their variants bootstraps from a sequence of ELFs secure only against fixed-size adversaries and rests on the exponential hardness of DDH or [$k$-Lin](bilinear-map-assumptions#k-linear-assumption) — [[ADDR26 - Simple Extremely Lossy Functions from Small-Exponent Hashing|ADDR26]].
- An ELF exists over every cyclic group sampler that satisfies _tunable DSEDL_: for every polynomial size bound and every positive polynomial $\delta$ there is a polynomial $Q$ such that, for all sufficiently large $\secpar$ and every exponent bound $\gamma \ge Q(\secpar)$ below the group order, no circuit within the size bound distinguishes $g^s$ for $s \getsr [\gamma]$ from a uniform group element with advantage above $1/\delta(\secpar)$, where $g$ is the generator in the group parameters. Its description has $n_m$ group elements beyond the group parameters, and evaluation returns one group element using $O(n_m)$ group operations (Theorem 5.16) — [[ADDR26 - Simple Extremely Lossy Functions from Small-Exponent Hashing|ADDR26]].
- _Extremely lossy trapdoor hashing_, which combines ELFs with [[trapdoor-hash-function|trapdoor hashing]] and implies all known variations of ELFs, exists under DCR and tunable DSEDL over Damgård–Jurik groups (Theorem 4.14) — [[ADDR26 - Simple Extremely Lossy Functions from Small-Exponent Hashing|ADDR26]].
- ELFs give point-function obfuscation with auxiliary input, polynomially many [[hardcore-predicate|hard-core bits]] for every [[hash-function#preimage-resistance-one-wayness|one-way function]], and a hash function with _output intractability_ — [[Zha16 - The Magic of ELFs|Zha16]].
- [[anamorphic-encryption#anamorphic-resistant-encryption|Anamorphic-resistant encryption]] follows from [[public-key-encryption|PKE]] and ELFs — [[ABGMM25 - The Malice of ELFs Practical Anamorphic-Resistant Encryption without Random Oracles|ABGMM25]].
