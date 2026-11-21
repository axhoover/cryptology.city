---
type: assumption
status: draft
aliases:
  - CDH
  - Computational Diffie-Hellman
title: Computational Diffie-Hellman
id: cdh
variants:
  prime-order-cdh: "#cdh-in-prime-order-groups"
---

# Computational Diffie-Hellman

The _Computational Diffie-Hellman (CDH)_ assumption states that, in a cyclic group $\GG = \langle g \rangle$ output by a group generator, every efficient adversary given $g^x$ and $g^y$ for uniform exponents $x, y$ outputs $g^{xy}$ with negligible probability. It is implied by the [[decisional-diffie-hellman|DDH]] assumption: an adversary which can solve the CDH problem can also solve [[decisional-diffie-hellman|DDH]] in the same group ([[ddh-to-cdh|DDH ⇒ CDH]]) — folklore.

## Assumption

Informally, the CDH assumption concerns a [[group-generator|cyclic group generation algorithm]]
$\GrGen,$ which takes as input a security parameter $1^{\secpar}$ and outputs
a succinct[^1] description of a cyclic group $(\GG,g,p),$ where $\GG$ is the group
set, $g$ is a generator for the group, and $p$ is the order of the group.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{cdh}}_{\GrGen,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\GG,g,p) \gets \GrGen(1^\secpar)$
\State $x \getsr [p]$ ; $y \getsr [p]$
\State $X \gets g^x$ ; $Y \gets g^y$
\State $\hat{Z} \gets \calA(1^\secpar, \GG, g, p, X, Y)$
\Return $[\hat{Z} = g^{xy}]$
\end{algorithmic}
\end{algorithm}
```

We say that **CDH is hard** for a group generation algorithm $\GrGen$
if for all efficient $\calA,$

$$
\Adv^{\text{cdh}}_{\GrGen,\calA}(\secpar) := \Pr\!\left[\Game^{\text{cdh}}_{\GrGen,\calA}(\secpar) = 1\right]
$$

is negligible.

## Known Results

- [[ddh-to-cdh|DDH ⇒ CDH]]
- [[ggm-to-cdh-sho97|GGM ⇒ CDH]]
- In the [[generic-group-model|Generic Group Model]], for groups of prime order $p$, $\Adv^{\text{cdh}}_{\GrGen,\calA}(\secpar) \le O(\frac{q^2}{p})$, where $q$ is the number of queries that $\calA$ issues — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]]
- DLOG hardness implies CDH hardness in groups of prime order $p$ with $p - 1$ smooth — [[dB88 - Diffie-Hellman is as Strong as Discrete Log for Certain Primes (Rump Session)|dB88]] (credited by [[BPS25 - Revisiting Discrete Logarithm Reductions|BPS25]], abstract). A concretely efficient version of the reduction covers prime $p$ with $p - 1$ somewhat smooth (every prime factor below $2^{100}$, say), a class that includes BLS12-381 — [[BPS25 - Revisiting Discrete Logarithm Reductions|BPS25]]. TODO: state den Boer's theorem and its exact smoothness condition from dB88.
- In a group $\GG$ of prime order $p$, Maurer and Wolf compute discrete logarithms with a CDH oracle and an auxiliary group over $\FF_p$, such as an elliptic curve: if an algebraic algorithm computes discrete logarithms in the auxiliary group with $n$ group operations, discrete logarithms in $\GG$ take essentially $n$ oracle calls, which is polynomial when the auxiliary group's order has no prime factor above a polynomial in $\log p$. Assuming that the integers in the Hasse interval around $p$ factor like random integers, they show that such a curve exists, but finding it by complex multiplication may take exponential time — [[Eng07 - Discrete logarithms in curves over finite fields|Eng07]] (Section 1.2). TODO: state the theorems of Maurer (CRYPTO 1994) and Maurer–Wolf (CRYPTO 1996; SIAM J. Comput. 1999) from the papers.
- Against algebraic adversaries, DLOG hardness implies CDH hardness in every prime-order group ([[dlog-to-cdh-fkl18|DLOG ⇒ CDH]]) — [[FKL18 - The Algebraic Group Model and its Applications|FKL18]].

# Variations

In the above definition, we implicitly allow $\GrGen$ to choose a _random_
generator $g$ for the group $\GG$. However, [[BMZ19 - The Distinction Between Fixed and Random Generators in Group-Based Assumptions|BMZ19]] has explored technical differences between this model and one where $g$ is selected
deterministically.

## CDH in prime-order groups

**CDH is hard in prime-order groups** for $\GrGen$ if every group $\GrGen$ outputs has prime order $p$ and CDH is hard for $\GrGen$. Exponents then form the field $\ZZ_p$, so a reduction may divide by any nonzero exponent.

# Attacks

- **Discrete-logarithm algorithms.** An algorithm that computes $x$ from $(g, g^x)$ computes CDH by outputting $(g^y)^x$ ([[cdh-to-dlog|CDH ⇒ DLOG]]) — folklore. Every attack on DLOG is therefore an attack on CDH: baby-step giant-step and Pollard's $\rho$ method in any group, Pohlig–Hellman in groups whose order has only small prime factors, and index calculus and the number field sieve in $\ZZ_P^*$; [[discrete-logarithm#attacks|DLOG attacks]] gives their costs and sources.
- **Orders with only small prime factors.** Pohlig–Hellman reduces DLOG in a group of order $p$ to DLOG in its subgroups of prime-power order, by the Chinese remainder theorem, and each of those to DLOG in the subgroup of prime order $r$, one base-$r$ digit of $x$ at a time — [[PH78 - An Improved Algorithm for Computing Logarithms over GF(p) and Its Cryptographic Significance|PH78]], as described in [[Eng07 - Discrete logarithms in curves over finite fields|Eng07]] (Section 1.1). If $p$ is $B$-smooth, trial division factors $p$, and exhaustive search in each subgroup of prime order computes $x$, and so $g^{xy}$, with $O((B + \log p)\log p)$ group operations; CDH hardness therefore requires, for every polynomial $B$, that $p$ be $B$-smooth with negligible probability — standard.
- **Generic algorithms.** In groups of prime order $p$, every [[generic-group-model|generic]] algorithm making $q$ group-operation queries computes $g^{xy}$ with probability $O(q^2/p)$, so solving CDH with constant probability takes $\Omega(\sqrt{p})$ queries ([[ggm-to-cdh-sho97|GGM ⇒ CDH]]) — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]]. Baby-step giant-step meets this bound up to a constant factor; index calculus and the number field sieve in $\ZZ_P^*$ are not generic, so the bound does not apply to them.
- **$\ZZ_P^*$.** DDH fails in $\ZZ_P^*$ for every odd prime $P$, because Legendre symbols reveal exponents modulo $2$ ([[decisional-diffie-hellman#attacks|DDH attacks]]). CDH, in contrast, is conjectured hard in $\ZZ_P^*$ for large primes $P$ such that $P - 1$ has a large prime factor, and in subgroups of $\ZZ_P^*$ of large prime order, such as the quadratic residues modulo a safe prime ([[group-generator|group generators]]) — standard.

[^1]:
    Succinct means that the tuple $(\GG,g,p)$ is at most
    $\poly(\secpar)$-bits, but $|\GG| = p$ may be super-polynomial in $\secpar.$

<!-- BEGIN GENERATED participates-in 97003091b272 -->

## Participates in

**Builds on Computational Diffie-Hellman**

- [[cdh-to-bit-string-key-exchange|CDH ⇒ KE with bit-string keys (hashed Diffie–Hellman)]]
- [[cdh-to-dlog|CDH ⇒ DLOG]]
- [[cdh-to-ind-cpa-kem|CDH ⇒ IND-CPA KEM (hashed ElGamal)]]
- [[cdh-to-ind-id-cpa-dg17a|CDH ⇒ IBE (Döttling–Garg)]]
- [[cdh-to-non-interactive-key-exchange-dh76|CDH ⇒ NIKE (Diffie–Hellman with a hard-core bit)]]
- [[cdh-to-one-way-key-exchange|CDH ⇒ One-way KE (Diffie–Hellman)]]
- [[cdh-to-uc-ot-dghmw20|CDH ⇒ Two-round UC-secure OT (DGHMW)]]
- [[prime-order-cdh-to-cdh|Prime-order CDH ⇒ CDH]] (via [[computational-diffie-hellman#cdh-in-prime-order-groups|CDH in prime-order groups]])
- [[prime-order-cdh-to-edl-signature-gj03|Prime-order CDH ⇒ EDL signatures]] (via [[computational-diffie-hellman#cdh-in-prime-order-groups|CDH in prime-order groups]])
- [[prime-order-cdh-to-prime-order-dlog|Prime-order CDH ⇒ prime-order DLOG]] (via [[computational-diffie-hellman#cdh-in-prime-order-groups|CDH in prime-order groups]])
- [[type-1-pairing-and-cdh-to-ds-wat05|Type 1 pairing + CDH ⇒ Waters signatures]]
- [[type-1-pairing-and-cdh-to-multi-signature-kosk-bol03|Type 1 pairing + CDH ⇒ Multi-signatures in the KOSK model (Boldyreva)]]
- [[type-1-pairing-and-cdh-to-multi-signature-pop-ry07|Type 1 pairing + CDH ⇒ Multi-signatures with proofs of possession]]

**Produces Computational Diffie-Hellman**

- [[cdh-to-bdh|BDH ⇒ CDH]]
- [[ddh-to-cdh|DDH ⇒ CDH]]
- [[dlog-to-cdh-fkl18|DLOG ⇒ CDH]]
- [[ggm-to-cdh-sho97|GGM ⇒ CDH]]
- [[prime-order-cdh-to-cdh|Prime-order CDH ⇒ CDH]]
- [[prime-order-ddh-to-prime-order-cdh|Prime-order DDH ⇒ prime-order CDH]] (via [[computational-diffie-hellman#cdh-in-prime-order-groups|CDH in prime-order groups]])

**Barriers**

- [[no-cdh-to-ddh-jn03|No fixed-construction reduction from CDH to DDH]]

<!-- END GENERATED participates-in -->
