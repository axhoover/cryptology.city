---
type: primitive
status: draft
aliases:
  - Cryptographic accumulator
  - Accumulator
title: Cryptographic accumulator
id: accumulator
variants:
  dynamic-accumulator: "#dynamic-accumulators"
---

# Cryptographic accumulator

A cryptographic accumulator compresses a finite set $X$ into a short value $\mathit{acc}$ together with, for each $x \in X$, a short witness that $x$ was accumulated, such that no efficient adversary can produce a valid witness for an element outside the set — [[BP97 - Collision-Free Accumulators and Fail-Stop Signature Schemes Without Trees|BP97]].

## Syntax

An accumulator over a domain $\calD$ is a tuple of efficient algorithms $\mathsf{ACC} = (\Gen, \Acc, \mathsf{Wit}, \Vrfy)$:

- $\Gen(1^\secpar) \to \pp$, a randomized algorithm outputting public parameters,
- $\Acc(\pp, X) \to \mathit{acc}$, a deterministic algorithm accumulating a finite set $X \subseteq \calD$,
- $\mathsf{Wit}(\pp, X, x) \to w$, a deterministic algorithm outputting a witness for $x \in X$,
- $\Vrfy(\pp, \mathit{acc}, x, w) \to \bits$, a deterministic algorithm that checks a witness.

The accumulator value and witnesses have length $\poly(\secpar)$, independent of $|X|$ or growing at most polylogarithmically with it.

## Properties

### Correctness

An accumulator $\mathsf{ACC} = (\Gen, \Acc, \mathsf{Wit}, \Vrfy)$ is **perfectly correct** if for all $\secpar \in \NN$, all finite $X \subseteq \calD$ of polynomial size and all $x \in X$,

$$
\Pr\!\left[\Vrfy(\pp, \Acc(\pp, X), x, \mathsf{Wit}(\pp, X, x)) = 1\right] = 1,
$$

over $\pp \gets \Gen(1^\secpar)$.

### Collision-freeness

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{acc}}_{\mathsf{ACC},\calA}(\secpar)$}
\begin{algorithmic}
\State $\pp \gets \Gen(1^\secpar)$
\State $(X, x, w) \gets \calA(\pp)$
\Return $[X \subseteq \calD \wedge x \in \calD \setminus X \wedge \Vrfy(\pp, \Acc(\pp, X), x, w) = 1]$
\end{algorithmic}
\end{algorithm}
```

An accumulator $\mathsf{ACC}$ is **collision-free** if for all efficient $\calA$,

$$
\Adv^{\mathrm{acc}}_{\mathsf{ACC},\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{acc}}_{\mathsf{ACC},\calA}(\secpar) = 1\right]
$$

is negligible — [[BP97 - Collision-Free Accumulators and Fail-Stop Signature Schemes Without Trees|BP97]].

# Variations

## Dynamic accumulators

A _dynamic_ accumulator has $\Gen(1^\secpar) \to (\pp, \td)$, where $\td$ is a trapdoor (the factorization of $N$ for the RSA accumulator), and adds algorithms that add an element to, or delete one from, the accumulated set, updating $\mathit{acc}$ at a cost independent of $|X|$, and that update a witness after each change without $\td$ — [[CL02 - Dynamic Accumulators and Application to Efficient Revocation of Anonymous Credentials|CL02]]. Witness updates make dynamic accumulators a revocation mechanism for [[anonymous-credentials|anonymous credentials]]: a user proves in [[zero-knowledge-proof|zero knowledge]] that its credential's identifier is accumulated in the current value — [[CL02 - Dynamic Accumulators and Application to Efficient Revocation of Anonymous Credentials|CL02]].

# Other results

- RSA accumulator: $\pp = (N, g)$ for an RSA modulus $N$ and $g \in \QR_N$, elements are primes, $\Acc(\pp, X) = g^{\prod_{x \in X} x} \bmod N$, and the witness for $x$ is $g^{\prod_{y \in X \setminus \{x\}} y}$, checked by $w^x = \mathit{acc}$. It is collision-free under the [[rsa-assumption#strong-rsa|strong RSA assumption]] ([[strong-rsa-to-accumulator-bp97|Strong RSA ⇒ accumulator]]) — [[BP97 - Collision-Free Accumulators and Fail-Stop Signature Schemes Without Trees|BP97]]. [[BdM93 - One-Way Accumulators A Decentralized Alternative to Digital Signatures|BdM93]] introduced the exponentiation accumulator as a quasi-commutative one-way function.
- A Merkle tree over the sorted set, with the tree depth included in $\mathit{acc}$ (or leaf and internal-node hashes under distinct prefixes) and padding leaves repeating an element of $X$, is a collision-free accumulator with witnesses of $O(\log |X|)$ hash values if the hash is [[hash-function#collision-resistance|collision-resistant]] ([[crhf-to-accumulator|CRHF ⇒ accumulator]]) — folklore.
- The RSA accumulator is dynamic: additions and witness updates need no trapdoor, deletions use the factorization, and collision-freeness still rests on strong RSA ([[strong-rsa-to-dynamic-accumulator-cl02|Strong RSA ⇒ dynamic accumulator]]) — [[CL02 - Dynamic Accumulators and Application to Efficient Revocation of Anonymous Credentials|CL02]].
- In [[pairings|bilinear groups]], $\mathit{acc} = g^{\prod_{x \in X}(x + s)}$ for a secret $s$, with public parameters $g, g^s, \ldots, g^{s^q}$, accumulates sets of at most $q$ elements and is collision-free under the [$q$-SDH assumption](q-strong-diffie-hellman) — [[Ngu05 - Accumulators from Bilinear Pairings and Applications|Ngu05]].

<!-- BEGIN GENERATED participates-in d233f6645b1c -->

## Participates in

**Produces Cryptographic accumulator**

- [[crhf-to-accumulator|CRHF ⇒ accumulator]]
- [[strong-rsa-to-accumulator-bp97|Strong RSA ⇒ accumulator]]
- [[strong-rsa-to-dynamic-accumulator-cl02|Strong RSA ⇒ dynamic accumulator]] (via [[accumulator#dynamic-accumulators|Dynamic accumulators]])

<!-- END GENERATED participates-in -->
