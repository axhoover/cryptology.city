---
aliases:
  - IPPE
  - Inner-product predicate encryption
  - Predicate encryption
title: Inner-product predicate encryption
---

# Inner-product predicate encryption

**Inner-product predicate encryption (IPPE)** is a form of predicate encryption in which keys and ciphertexts are each associated with vectors over $\ZZ_p$. A key for vector $v \in \ZZ_p^n$ can decrypt a ciphertext for vector $x \in \ZZ_p^n$ if and only if $\langle v, x \rangle = 0 \pmod{p}$. IPPE achieves **full attribute-hiding**: a ciphertext hides both the encrypted payload and the attribute vector $x$. It subsumes [[hidden-vector-encryption|HVE]] and, via inner-product encodings, supports disjunctions, CNF/DNF formulas, and polynomial evaluation—making it the practical ceiling before full predicate encryption.

## Syntax

An IPPE scheme is a tuple of efficient algorithms $\mathsf{IPPE} = (\Setup, \KeyGen, \Enc, \Dec)$ with respect to prime $p$, dimension $n$, message space $\calM$, and ciphertext space $\calC$:

- $\Setup(1^\secpar, p, n) \to (\pp, \msk),$ is a randomized algorithm that outputs public parameters $\pp$ and master secret key $\msk$,
- $\KeyGen(\msk, v) \to \sk_v,$ is a (possibly randomized) algorithm that takes $\msk$ and a predicate vector $v \in \ZZ_p^n$, outputting a secret key $\sk_v$,
- $\Enc(\pp, x, m) \to c,$ is a randomized algorithm that takes $\pp$, an attribute vector $x \in \ZZ_p^n$, and $m \in \calM$, outputting $c \in \calC$,
- $\Dec(\sk_v, c) \to m,$ is a deterministic algorithm that takes $\sk_v$ and $c$, outputting $m \in \calM$ or $\bot$.

Decryption succeeds if and only if $\langle v, x \rangle = 0 \pmod{p}$.

## Properties

### Correctness

An IPPE scheme is $(1-\varepsilon)$-**correct** if for all $\secpar \in \mathbb{N}$, $v, x \in \ZZ_p^n$ with $\langle v, x \rangle = 0 \pmod{p}$, and $m \in \calM$,

$$
\Pr\!\left[\Dec(\KeyGen(\msk, v),\, \Enc(\pp, x, m)) = m\right] \ge 1 - \varepsilon,
$$

over $(\pp, \msk) \gets \Setup(1^\secpar, p, n)$ and randomness of $\KeyGen$ and $\Enc$.

### Full Attribute-Hiding Security

In the full attribute-hiding game, the adversary submits two ciphertext candidates $(x_0, m_0)$ and $(x_1, m_1)$ and receives an encryption of one of them. Admissibility requires that every queried key vector $v$ is consistent with both candidates: $\langle v, x_0 \rangle = 0 \Leftrightarrow \langle v, x_1 \rangle = 0 \pmod{p}$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ah}}_{\mathsf{IPPE},\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pp, \msk) \gets \Setup(1^\secpar, p, n)$; $b \getsr \bits$
\State $\calO_{\mathrm{key}}(v) := \KeyGen(\msk, v)$
\State $((x_0, m_0), (x_1, m_1), \stA) \gets \calA^{\calO_{\mathrm{key}}}(1^\secpar, \pp)$
\Comment{For all queried $v$: $\langle v, x_0 \rangle = 0$ iff $\langle v, x_1 \rangle = 0$ (mod $p$)}
\State $c^* \gets \Enc(\pp, x_b, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{key}}}(c^*, \stA)$
\Comment{Same admissibility constraint holds throughout}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An IPPE scheme $\mathsf{IPPE}$ is **attribute-hiding** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{ah}}_{\mathsf{IPPE},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{ah}}_{\mathsf{IPPE},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

# Variations

## Payload-only hiding

Dropping the attribute-hiding requirement yields a simpler **payload-hiding** variant: the adversary commits to a single $x^*$ and submits two messages, with the constraint that no queried $v$ satisfies $\langle v, x^* \rangle = 0 \pmod p$.

## Zero inner product vs. non-zero

Some formulations flip the predicate: decryption succeeds when $\langle v, x \rangle \ne 0$. This is equivalent up to a simple transformation (append a constant coordinate) and is sometimes more natural for access control.

# Other results

- IPPE generalizes [[hidden-vector-encryption|HVE]]: a conjunctive pattern predicate over $\Sigma^n$ can be encoded as an inner-product predicate by choosing an alphabet embedding into $\ZZ_p$
- IPPE is incomparable to [[attribute-based-encryption|KP-ABE and CP-ABE]]: IPPE achieves full attribute-hiding but only captures inner-product predicates, while KP/CP-ABE supports arbitrary monotone Boolean formulas but leaks the access policy
- KSW08 introduced IPPE and showed that inner products encode disjunctions, polynomial equations, and CNF/DNF formulas; the scheme is proved attribute-hiding under the decisional linear assumption — [[KSW08 - Predicate Encryption Supporting Disjunctions Polynomial Equations and Inner Products|KSW08]]
