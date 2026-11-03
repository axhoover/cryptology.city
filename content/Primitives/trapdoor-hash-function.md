---
type: primitive
status: draft
aliases:
  - TDH
  - Trapdoor hash functions
title: Trapdoor hash functions
id: tdh
---

# Trapdoor hash functions

A trapdoor hash function compresses $x \in \bits^n$ to a hash value of length independent of $n$, and for an index $i \in [n]$ samples an encoding key that hides $i$ together with a trapdoor: from the hash of $x$, a short hint computed from the encoding key and $x$, and the trapdoor, the bit $x_i$ is recovered — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].

## Syntax

A trapdoor hash function for index predicates is a tuple of efficient algorithms $\mathsf{TDH} = (\Setup, \KeyGen, \mathsf{H}, \mathsf{E}, \Decode)$ with hash length $\eta$ and hint length $\mu$:

- $\Setup(1^\secpar, 1^n) \to \mathsf{hk}$, a randomized algorithm outputting a hash key,
- $\KeyGen(\mathsf{hk}, i) \to (\mathsf{ek}, \td)$, a randomized algorithm taking an index $i \in [n]$ and outputting an encoding key and a trapdoor,
- $\mathsf{H}(\mathsf{hk}, x; \rho) \to h \in \bits^\eta$, the hash of $x \in \bits^n$ under coins $\rho$,
- $\mathsf{E}(\mathsf{ek}, x; \rho) \to e \in \bits^\mu$, the hint, computed with the same coins $\rho$,
- $\Decode(\td, h) \to (e_0, e_1) \in \bits^\mu \times \bits^\mu$, a deterministic algorithm outputting the hints consistent with $x_i = 0$ and with $x_i = 1$.

The hash length $\eta$ is $\poly(\secpar)$, independent of $n$. The hint length $\mu$ is the parameter of interest: [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]] construct trapdoor hash functions with one-bit hints, $\mu = 1$, from DDH, QR, DCR and LWE.

## Properties

### Correctness

Recovery of $x_i$ succeeds when $e = e_{x_i} \ne e_{1 - x_i}$: the receiver compares $e$ with $e_0$ and $e_1$. A trapdoor hash function is $(1 - \tau)$-**correct** if for all $\secpar, n \in \NN$, $x \in \bits^n$ and $i \in [n]$, recovery succeeds with probability at least $1 - \tau$ over $\mathsf{hk} \gets \Setup(1^\secpar, 1^n)$, $(\mathsf{ek}, \td) \gets \KeyGen(\mathsf{hk}, i)$ and the coins $\rho$, where $h = \mathsf{H}(\mathsf{hk}, x; \rho)$, $e = \mathsf{E}(\mathsf{ek}, x; \rho)$ and $(e_0, e_1) = \Decode(\td, h)$. The error $\tau$ is a parameter of the construction, negligible or only inverse-polynomial; an application must tolerate the error its instantiation has.

### Index hiding

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ih}}_{\mathsf{TDH},\calA}(\secpar)$}
\begin{algorithmic}
\State $(1^n, i_0, i_1, \st) \gets \calA(1^\secpar)$; $b \getsr \bits$
\State $\mathsf{hk} \gets \Setup(1^\secpar, 1^n)$; $(\mathsf{ek}, \td) \gets \KeyGen(\mathsf{hk}, i_b)$
\State $b' \gets \calA(\st, \mathsf{hk}, \mathsf{ek})$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A trapdoor hash function $\mathsf{TDH}$ is **index-hiding** if for all efficient $\calA$,

$$
\Adv^{\mathrm{ih}}_{\mathsf{TDH},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{ih}}_{\mathsf{TDH},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].

# Variations

## Rate-1 trapdoor hash functions

With one-bit hints, a receiver that sends $m$ encoding keys for indices of one input $x$ recovers $m$ bits of $x$ from a single hash value and $m$ hint bits, $\eta + m$ bits in all, so the rate tends to 1 as $m$ grows; this underlies the rate-1 protocols of [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].

# Other results

- Two-message rate-1 string [[oblivious-transfer|OT]] from DDH, QR or LWE; [[single-server-private-information-retrieval|PIR]] with communication polylogarithmic in the database size from DDH or QR, of rate 1 for block PIR; semi-compact homomorphic encryption for branching programs, whose encrypted output grows only with the program length, from DDH or QR; lossy trapdoor functions with input-to-output ratio approaching 1 from DDH, QR or LWE; constant-rate two-message statistically sender-private OT from LWE in the plain model; and rate-1 protocols for $n$ parallel OTs and for matrix–vector products from DDH, QR or LWE — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].
- The first trapdoor hash function from LPN rests on quasi-polynomial hardness of [[learning-parity-with-noise#low-noise-lpn|low-noise LPN]], has compression factor $2^{\Theta(\log^{1-\beta} \secpar)}$, and gives PIR with sublinear communication — [[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]].

<!-- BEGIN GENERATED participates-in b4221696794b -->

## Participates in

**Builds on Trapdoor hash functions**

- [[tdh-to-cpir-amr25|TDH ⇒ cPIR]]

**Produces Trapdoor hash functions**

- [[dcr-to-tdh-dgi-19|DCR ⇒ TDH]]
- [[ddh-to-tdh-dgi-19|DDH ⇒ TDH]]
- [[lwe-to-tdh-dgi-19|LWE with superpolynomial ratio ⇒ TDH]]
- [[noise-level-to-tdh-amr25|Low-noise LPN ⇒ TDH]]
- [[qr-to-tdh-dgi-19|QR ⇒ TDH]]

<!-- END GENERATED participates-in -->
