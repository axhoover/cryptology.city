---
type: primitive
status: draft
aliases:
  - IPPE
  - Inner-product predicate encryption
  - Predicate encryption
title: Inner-product predicate encryption
id: ippe
variants:
  nonzero-ippe: "#zero-inner-product-vs-non-zero"
  nonzero-vector-ippe: "#nonzero-predicate-and-attribute-vectors"
  payload-hiding-ippe: "#payload-only-hiding"
---

# Inner-product predicate encryption

**Inner-product predicate encryption (IPPE)** is a form of predicate encryption in which keys and ciphertexts are each associated with vectors over $\ZZ_p$, for a prime $p$ in the public parameters. A key for vector $v \in \ZZ_p^n$ can decrypt a ciphertext for vector $x \in \ZZ_p^n$ if and only if $\langle v, x \rangle = 0 \pmod{p}$. IPPE achieves **full attribute-hiding**: a ciphertext hides both the encrypted payload and the attribute vector $x$. It gives selectively attribute-hiding [[hidden-vector-encryption|HVE]] ([[ippe-to-hve|IPPE ⇒ Selectively attribute-hiding HVE]]) and, via inner-product encodings, supports disjunctions, CNF/DNF formulas, and polynomial evaluation—making it the practical ceiling before full predicate encryption.

## Syntax

An IPPE scheme is a tuple of efficient algorithms $\mathsf{IPPE} = (\Setup, \KeyGen, \Enc, \Dec)$ with respect to a message space $\calM$, which may depend on $\pp$, and a ciphertext space $\calC$:

- $\Setup(1^\secpar, 1^n) \to (\pp, \msk),$ is a randomized algorithm that takes the dimension $n$ in unary and outputs public parameters $\pp$, which contain a prime $p$ and the description of $\ZZ_p$, and a master secret key $\msk$. The prime is large: for every polynomial $n = n(\secpar)$, $\mathbb{E}[1/p]$ over the coins of $\Setup(1^\secpar, 1^{n(\secpar)})$ is negligible in $\secpar$,
- $\KeyGen(\msk, v) \to \sk_v,$ is a (possibly randomized) algorithm that takes $\msk$ and a predicate vector $v \in \ZZ_p^n$, for the prime $p$ in $\pp$, outputting a secret key $\sk_v$,
- $\Enc(\pp, x, m) \to c,$ is a randomized algorithm that takes $\pp$, an attribute vector $x \in \ZZ_p^n$, for the prime $p$ in $\pp$, and $m \in \calM$, outputting $c \in \calC$,
- $\Dec(\sk_v, c) \to m,$ is a deterministic algorithm that takes $\sk_v$ and $c$, outputting $m \in \calM$ or $\bot$.

[[#Correctness|Correctness]] constrains $\Dec$ only when $\langle v, x \rangle = 0 \pmod{p}$; it does not require $\bot$ otherwise.

## Properties

### Correctness

An IPPE scheme is $(1-\varepsilon)$-**correct** if for all $\secpar, n \in \NN$, every $(\pp, \msk)$ in the support of $\Setup(1^\secpar, 1^n)$, all $v, x \in \ZZ_p^n$ with $\langle v, x \rangle = 0 \pmod{p}$ for the prime $p$ in $\pp$, and all $m \in \calM$,

$$
\Pr\!\left[\Dec(\KeyGen(\msk, v),\, \Enc(\pp, x, m)) = m\right] \ge 1 - \varepsilon(\secpar),
$$

over the randomness of $\KeyGen$ and $\Enc$.

### Full Attribute-Hiding Security

In the full attribute-hiding game, the adversary submits two ciphertext candidates $(x_0, m_0)$ and $(x_1, m_1)$ and receives an encryption of one of them. Admissibility requires that every queried key vector $v$ is consistent with both candidates: $\langle v, x_0 \rangle = 0 \Leftrightarrow \langle v, x_1 \rangle = 0 \pmod{p}$; and if some queried $v$ has $\langle v, x_0 \rangle = \langle v, x_1 \rangle = 0$, then $m_0 = m_1$, since that key decrypts $c^*$ — [[KSW08 - Predicate Encryption Supporting Disjunctions Polynomial Equations and Inner Products|KSW08]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ah}}_{\mathsf{IPPE},\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pp, \msk) \gets \Setup(1^\secpar, 1^{n(\secpar)})$; $b \getsr \bits$
\State $\calO_{\mathrm{key}}(v) := \KeyGen(\msk, v)$
\State $((x_0, m_0), (x_1, m_1), \stA) \gets \calA^{\calO_{\mathrm{key}}}(1^\secpar, \pp)$
\Comment{$x_0, x_1 \in \ZZ_p^n$; for all queried $v$: $\langle v, x_0 \rangle = 0$ iff $\langle v, x_1 \rangle = 0$ (mod $p$); if some queried $v$ has $\langle v, x_0 \rangle = 0$, then $m_0 = m_1$}
\State $c^* \gets \Enc(\pp, x_b, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{key}}}(c^*, \stA)$
\Comment{Same admissibility constraint holds throughout}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An IPPE scheme $\mathsf{IPPE}$ is **attribute-hiding** if for every polynomial $n = n(\secpar)$ and all efficient admissible $\calA$,

$$
\Adv^{\mathrm{ah}}_{\mathsf{IPPE},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{ah}}_{\mathsf{IPPE},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

Every IPPE scheme on this page is $(1-\varepsilon)$-correct, as defined under [[#Correctness|Correctness]] for its predicate, for a negligible function $\varepsilon(\secpar)$, and for every $\pp$ in the support of $\Setup$ its message space $\calM$ contains two distinct messages that an efficient algorithm outputs on input $\pp$. Without correctness, $\Enc := 0$ meets every notion on this page, and without two such messages so does the scheme that outputs $m$ in the clear. As an object, IPPE denotes an attribute-hiding such scheme.

# Variations

## Payload-only hiding

In the payload-hiding game the adversary chooses a single attribute $x^*$ and two messages after it sees $\pp$ and its first keys, and tries to tell which message is encrypted; attribute-hiding implies it ([[ippe-to-payload-only-hiding|IPPE ⇒ Payload-only hiding]]).

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ph}}_{\mathsf{IPPE},\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pp, \msk) \gets \Setup(1^\secpar, 1^{n(\secpar)})$; $b \getsr \bits$
\State $\calO_{\mathrm{key}}(v) := \KeyGen(\msk, v)$
\State $(x^*, m_0, m_1, \stA) \gets \calA^{\calO_{\mathrm{key}}}(1^\secpar, \pp)$
\Comment{$x^* \in \ZZ_p^n$; no queried $v$ has $\langle v, x^* \rangle = 0$ (mod $p$)}
\State $c^* \gets \Enc(\pp, x^*, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{key}}}(c^*, \stA)$
\Comment{No queried $v$ has $\langle v, x^* \rangle = 0$ (mod $p$)}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

Here $p$ is the prime in $\pp$ and $m_0, m_1 \in \calM$. No key queried before or after the challenge may have $\langle v, x^* \rangle = 0 \pmod p$, since such a key decrypts $c^*$. An IPPE scheme $\mathsf{IPPE}$ is **payload-hiding** if for every polynomial $n = n(\secpar)$ and all efficient admissible $\calA$,

$$
\Adv^{\mathrm{ph}}_{\mathsf{IPPE},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{ph}}_{\mathsf{IPPE},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

## Nonzero predicate and attribute vectors

An IPPE scheme as above whose $\KeyGen$ and $\Enc$ accept only nonzero vectors $v, x \in \ZZ_p^n \setminus \{0\}$, with correctness quantified over nonzero vectors and an admissible attribute-hiding adversary restricted to nonzero challenge attributes and key queries. As an object, it denotes a $(1-\negl(\secpar))$-correct, attribute-hiding such scheme with the message pair required above. This is the domain of the dual-system schemes of [[OT12 - Adaptively Attribute-Hiding (Hierarchical) Inner Product Encryption|OT12]] (Definition 4). Padding gives full-domain IPPE ([[nonzero-vector-ippe-to-ippe|IPPE on nonzero vectors ⇒ IPPE]]): encode $x \in \ZZ_p^n$ as $(x, 1, 0)$ and $v$ as $(v, 0, 1)$ in dimension $n + 2$, which are nonzero and have the same inner product — folklore.

## Zero inner product vs. non-zero

Some formulations flip the predicate: decryption succeeds when $\langle v, x \rangle \ne 0$ — [[AL10 - Functional Encryption for Inner Product Achieving Constant-Size Ciphertexts with Adaptive Security or Support for Negation|AL10]].

# Other results

- [[ippe-to-hve|IPPE ⇒ Selectively attribute-hiding HVE]]
- The first IPPE scheme, over composite-order bilinear groups, shows that inner products encode disjunctions, polynomial equations, and CNF/DNF formulas; it is selectively attribute-hiding under two new assumptions justified in the generic group model — [[KSW08 - Predicate Encryption Supporting Disjunctions Polynomial Equations and Inner Products|KSW08]]
- [[dlin-to-ippe-ksw08|DLIN ⇒ IPPE]]

<!-- BEGIN GENERATED participates-in bc41299bdb0f -->

## Participates in

**Builds on Inner-product predicate encryption**

- [[ippe-to-hve|IPPE ⇒ Selectively attribute-hiding HVE]]
- [[ippe-to-payload-only-hiding|IPPE ⇒ Payload-only hiding]]
- [[nonzero-vector-ippe-to-ippe|IPPE on nonzero vectors ⇒ IPPE]] (via [[inner-product-predicate-encryption#nonzero-predicate-and-attribute-vectors|Nonzero predicate and attribute vectors]])

**Produces Inner-product predicate encryption**

- [[dlin-to-ippe-ksw08|Bilinear pairing + DLIN ⇒ IPPE]] (via [[inner-product-predicate-encryption#nonzero-predicate-and-attribute-vectors|Nonzero predicate and attribute vectors]])
- [[ippe-to-payload-only-hiding|IPPE ⇒ Payload-only hiding]] (via [[inner-product-predicate-encryption#payload-only-hiding|Payload-only hiding]])
- [[nonzero-vector-ippe-to-ippe|IPPE on nonzero vectors ⇒ IPPE]]

<!-- END GENERATED participates-in -->
