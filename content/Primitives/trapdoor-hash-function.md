---
type: primitive
status: draft
aliases:
  - TDH
  - Trapdoor hash functions
title: Trapdoor hash functions
id: tdh
variants:
  sublinear-tdh: "#slightly-sublinear-trapdoor-hash-functions"
---

# Trapdoor hash functions

A trapdoor hash function compresses $x \in \bits^n$ to a randomized hash value that has length independent of $n$ and hides $x$, and for an index $i \in [n]$ samples an encoding key that hides $i$ together with a trapdoor: from the hash of $x$, a short hint computed from the encoding key and $x$, and the trapdoor, the bit $x_i$ is recovered — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].

## Syntax

A trapdoor hash function for index predicates is a tuple of efficient algorithms $\mathsf{TDH} = (\Setup, \KeyGen, \hash, \mathsf{E}, \Decode)$ with hash length $\eta$ and hint length $\mu$:

- $\Setup(1^\secpar, 1^n) \to \mathsf{hk}$, a randomized algorithm outputting a hash key,
- $\KeyGen(\mathsf{hk}, i) \to (\mathsf{ek}, \td)$, a randomized algorithm taking an index $i \in [n]$ and outputting an encoding key and a trapdoor,
- $\hash(\mathsf{hk}, x; \rho) \to h \in \bits^\eta$, the hash of $x \in \bits^n$ under coins $\rho$,
- $\mathsf{E}(\mathsf{ek}, x; \rho) \to e \in \bits^\mu$, the hint, computed with the same coins $\rho$,
- $\Decode(\td, h) \to (e_0, e_1) \in \bits^\mu \times \bits^\mu$, a deterministic algorithm outputting the hints consistent with $x_i = 0$ and with $x_i = 1$.

The hash length $\eta$ is $\poly(\secpar)$, independent of $n$. The hint length $\mu$ is the parameter of interest: [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]] construct trapdoor hash functions with one-bit hints, $\mu = 1$, from [[decisional-diffie-hellman|DDH]], [[quadratic-residuosity|QR]], [[decisional-composite-residuosity|DCR]] and [[learning-with-errors|LWE]].

## Properties

A trapdoor hash function is required to be $(1 - \tau)$-correct for its error $\tau$, input-private (computationally or statistically) and index-hiding — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].

### Correctness

A trapdoor hash function is $(1 - \tau)$-**correct**, for a function $\tau = \tau(\secpar)$, if there is a negligible function $\negl$ such that for all $\secpar, n \in \NN$, $x \in \bits^n$ and $i \in [n]$,

$$
\Pr\!\left[e = e_{x_i}\right] \ge 1 - \negl(\secpar) \qquad \text{and} \qquad \Pr\!\left[e \ne e_{1 - x_i}\right] \ge 1 - \tau - \negl(\secpar),
$$

over $\mathsf{hk} \gets \Setup(1^\secpar, 1^n)$, $(\mathsf{ek}, \td) \gets \KeyGen(\mathsf{hk}, i)$ and the coins $\rho$, where $h = \hash(\mathsf{hk}, x; \rho)$, $e = \mathsf{E}(\mathsf{ek}, x; \rho)$ and $(e_0, e_1) = \Decode(\td, h)$ — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].

The receiver outputs the $b$ with $e = e_b$ when $e_0 \ne e_1$ and fails otherwise. By the first inequality its output is wrong only with negligible probability; by the second it fails with probability at most $\tau + \negl(\secpar)$. The error $\tau$ is a parameter of the construction, and an application must tolerate the error its instantiation has; in the constructions of DGI+19, $\tau$ is negligible or only inverse-polynomial — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].

### Input privacy

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ip}}_{\mathsf{TDH},\calA}(\secpar)$}
\begin{algorithmic}
\State $(x_0, x_1, \st) \gets \calA(1^\secpar)$; $b \getsr \bits$ \Comment{$x_0, x_1 \in \bits^n$}
\State $\mathsf{hk} \gets \Setup(1^\secpar, 1^n)$; $h \gets \hash(\mathsf{hk}, x_b; \rho)$ \Comment{fresh coins $\rho$}
\State $b' \gets \calA(\st, \mathsf{hk}, h)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A trapdoor hash function $\mathsf{TDH}$ is **input-private** if for all efficient $\calA$ outputting $x_0, x_1$ of equal length,

$$
\Adv^{\mathrm{ip}}_{\mathsf{TDH},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{ip}}_{\mathsf{TDH},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible, and **statistically input-private** if this holds for all $\calA$, efficient or not, whose inputs $x_0, x_1$ have equal length polynomial in $\secpar$ — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].

### Index hiding

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ih}}_{\mathsf{TDH},\calA}(\secpar)$}
\begin{algorithmic}
\State $(1^n, i_0, i_1, \st) \gets \calA(1^\secpar)$; $b \getsr \bits$ \Comment{$i_0, i_1 \in [n]$}
\State $\mathsf{hk} \gets \Setup(1^\secpar, 1^n)$; $(\mathsf{ek}, \td) \gets \KeyGen(\mathsf{hk}, i_b)$
\State $b' \gets \calA(\st, \mathsf{hk}, \mathsf{ek})$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A trapdoor hash function $\mathsf{TDH}$ is **index-hiding** if for all efficient $\calA$ outputting $i_0, i_1 \in [n]$,

$$
\Adv^{\mathrm{ih}}_{\mathsf{TDH},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{ih}}_{\mathsf{TDH},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].

# Variations

## Rate-1 trapdoor hash functions

With one-bit hints, a receiver that sends $m$ encoding keys for indices of one input $x$ recovers $m$ bits of $x$, each except with probability at most $\tau + \negl(\secpar)$, from a single hash value and $m$ hint bits, $\eta + m$ bits in all, so the rate tends to 1 as $m$ grows; this underlies the rate-1 protocols of [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].

## Slightly sublinear trapdoor hash functions

In a slightly sublinear trapdoor hash function, the hash of $x \in \bits^n$ has length $\eta \le n / c(\secpar)$ for a compression factor $c = c(\secpar)$, in place of a length independent of $n$; an encoding key for a function $f$ and its trapdoor recover $f(x)$ from the hash and a short encoding of $x$ — [[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]].

TODO: the syntax, the compactness requirement (which compression factors $c$ qualify), and the correctness and privacy notions of [[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]], stated from the paper.

The first trapdoor hash function from LPN is of this kind: it rests on quasi-polynomial hardness of [[learning-parity-with-noise#low-noise-lpn|low-noise LPN]] in dimension $k$ with noise rate $\varepsilon = O(\log^{1+\beta}(k)/k)$ for a constant $\beta > 0$, has compression factor $2^{\Theta(\log^{1-\beta} \secpar)}$, and gives [[single-server-private-information-retrieval|PIR]] with communication $L/2^{\Theta(\log^{1-\beta} L)}$ for a database of size $L$, the first PIR with communication $o(L)$ from a code-based assumption — [[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]].

# Other results

- Two-message rate-1 string [[oblivious-transfer|OT]] from DDH, QR or LWE; [[single-server-private-information-retrieval|PIR]] with communication polylogarithmic in the database size from DDH or QR, of rate 1 for block PIR; semi-compact [[homomorphic-encryption|homomorphic encryption]] for branching programs, whose encrypted output grows only with the program length, from DDH or QR; [[trapdoor-permutation#lossy-trapdoor-functions|lossy trapdoor functions]] with input-to-output ratio approaching 1 from DDH, QR or LWE; constant-rate two-message statistically sender-private OT from LWE in the plain model; and rate-1 protocols for $n$ parallel OTs and for matrix–vector products from DDH, QR or LWE — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].

<!-- BEGIN GENERATED participates-in c50819819aee -->

## Participates in

**Builds on Trapdoor hash functions**

- [[tdh-to-cpir-amr25|TDH ⇒ cPIR]]

**Produces Trapdoor hash functions**

- [[dcr-to-tdh-dgi-19|DCR ⇒ TDH]]
- [[ddh-to-tdh-dgi-19|DDH ⇒ TDH]]
- [[lwe-to-tdh-dgi-19|LWE with superpolynomial ratio ⇒ TDH]]
- [[noise-level-to-tdh-amr25|Low-noise LPN ⇒ Slightly sublinear TDH]] (via [[trapdoor-hash-function#slightly-sublinear-trapdoor-hash-functions|Slightly sublinear trapdoor hash functions]])
- [[qr-to-tdh-dgi-19|QR ⇒ TDH]]

<!-- END GENERATED participates-in -->
