---
type: assumption
status: draft
aliases:
  - Linear-only encryption
title: Linear-only encryption
id: linear-only-encryption
variants:
  linear-only-vector-encryption: "#linear-only-vector-encryption"
---

# Linear-only encryption

A _linear-only_ encryption scheme is an additively homomorphic encryption scheme whose only efficiently computable valid ciphertexts, given encryptions of $a_1, \ldots, a_m$, are encryptions of affine combinations of the $a_j$ that an extractor can name — [[BCIOP13 - Succinct Non-interactive Arguments via Linear Interactive Proofs|BCIOP13]].

## Assumption

Let $\PKE = (\KeyGen, \Enc, \Dec)$ be a [[public-key-encryption#cpa-security|CPA-secure]] public-key encryption scheme with plaintext space $\FF_p$ for a prime $p = p(\secpar)$ super-polynomial in $\secpar$, additively homomorphic: an efficient public algorithm, given $\pk$, ciphertexts of $a_1, \ldots, a_m$ and coefficients $\vec\pi \in \FF_p^m$, $b \in \FF_p$, outputs a ciphertext of $\langle \vec\pi, \vec a \rangle + b$. In the game below, $\vec a \in \FF_p^m$ is fixed and the extractor $\calE_\calA$ receives the input and random coins $\rho$ of $\calA$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{lo}}_{\PKE,\calA,\calE_\calA,\vec a}(\secpar)$}
\begin{algorithmic}
\State $(\pk, \sk) \gets \KeyGen(1^\secpar)$; $\rho \getsr \bits^{*}$
\State $c_j \gets \Enc(\pk, a_j)$ for $j \in [m]$
\State $c' \gets \calA(\pk, c_1, \ldots, c_m; \rho)$
\State $(\vec\pi, b) \gets \calE_\calA(\pk, c_1, \ldots, c_m, \rho)$
\Comment{$\calE_\calA$ gets $\calA$'s input and coins}
\State $y \gets \Dec(\sk, c')$
\Return $[y \ne \bot \wedge y \ne \langle \vec\pi, \vec a \rangle + b]$
\end{algorithmic}
\end{algorithm}
```

$\PKE$ is **linear-only** if for all efficient $\calA$ there exists an efficient $\calE_\calA$ such that for every polynomial $m = m(\secpar)$ and every $\vec a \in \FF_p^m$,

$$
\Adv^{\mathrm{lo}}_{\PKE,\calA,\calE_\calA,\vec a}(\secpar) := \Pr\!\left[\Game^{\mathrm{lo}}_{\PKE,\calA,\calE_\calA,\vec a}(\secpar) = 1\right]
$$

is negligible — [[BCIOP13 - Succinct Non-interactive Arguments via Linear Interactive Proofs|BCIOP13]].

## Known Results

- Linear-only encryption gives designated-verifier preprocessing SNARGs for $\classNP$ with proofs of a constant number of ciphertexts: [[linear-only-encryption-to-designated-verifier-snarg-bciop13|Linear-only encryption ⇒ Designated-verifier SNARG]] — [[BCIOP13 - Succinct Non-interactive Arguments via Linear Interactive Proofs|BCIOP13]].
- Like the [[knowledge-of-exponent|knowledge of exponent assumption]], it has the $\forall \calA\, \exists \calE_\calA$ form of a knowledge assumption — [[BCIOP13 - Succinct Non-interactive Arguments via Linear Interactive Proofs|BCIOP13]]; such assumptions are not falsifiable in Naor's sense — standard.
- BCIOP13 base the compilation more generally on forms of linear targeted malleability, which earlier knowledge assumptions imply — [[BCIOP13 - Succinct Non-interactive Arguments via Linear Interactive Proofs|BCIOP13]].

# Variations

## Linear-only vector encryption

Plaintexts are vectors in $\FF_p^\ell$ for a prime $p = p(\secpar)$, the homomorphic operations act on whole vectors, and in the game above $\vec a = (\vec a_1, \ldots, \vec a_m)$ with $\vec a_j \in \FF_p^\ell$, the extractor outputs $\vec\pi \in \FF_p^m$ and $\vec b \in \FF_p^\ell$, and $\calA$ wins if $\Dec(\sk, c') \notin \{\bot, \sum_j \pi_j \vec a_j + \vec b\}$. A prover is thus constrained to one linear function applied to all coordinates at once — [[BISW17 - Lattice-Based SNARGs and Their Application to More Efficient Obfuscation|BISW17]]. **Linear-only vector encryption holds** if there is a family of CPA-secure schemes, one for each polynomial dimension $\ell = \ell(\secpar)$, each linear-only in this sense.

BISW17 conjecture that variants of Regev encryption are linear-only vector encryption schemes, and use them for designated-verifier SNARGs from lattices: [[linear-only-vector-encryption-to-designated-verifier-snarg-bisw17|Linear-only vector encryption ⇒ Designated-verifier SNARG]] — [[BISW17 - Lattice-Based SNARGs and Their Application to More Efficient Obfuscation|BISW17]].

# Attacks

- TODO: cryptanalysis of the candidate schemes.

<!-- BEGIN GENERATED participates-in a2c8c5b3ca5a -->

## Participates in

**Builds on Linear-only encryption**

- [[linear-only-encryption-to-designated-verifier-snarg-bciop13|Linear-only encryption ⇒ Designated-verifier SNARG]]
- [[linear-only-vector-encryption-to-designated-verifier-snarg-bisw17|Linear-only vector encryption ⇒ Designated-verifier SNARG (lattice-based)]] (via [[linear-only-encryption#linear-only-vector-encryption|Linear-only vector encryption]])

<!-- END GENERATED participates-in -->
