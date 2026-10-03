---
type: assumption
status: draft
aliases:
  - KEA
  - Knowledge of exponent
  - Knowledge-of-exponent assumption
  - q-PKE
  - Power knowledge of exponent
title: Knowledge of exponent assumption
id: kea
---

# Knowledge of exponent assumption

The _knowledge of exponent assumption (KEA)_ is a non-falsifiable assumption used in constructions of [[succinct-argument|SNARKs]] and other efficient proof systems. It asserts that any efficient algorithm which produces a valid "DH pair" $(A, B)$ satisfying $B = A^\alpha$ — given the challenge pair $(g, g^\alpha)$ — must "know" the discrete log $r$ such that $A = g^r$, in the sense that a formal extractor can recover $r$ from the algorithm's code. Originally introduced by Damgård and extended in various forms for pairing-based SNARKs.

## Assumption

Let $\GrGen(1^\secpar)$ output a group $\GG$ of prime order $q$ with generator $g$. KEA1 of [[BP04 - The Knowledge-of-Exponent Assumptions and 3-Round Zero-Knowledge Protocols|BP04]] is the following game, in which the **extractor** $\calE_\calA$ receives the input and random coins $\rho$ of $\calA$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{kea}}_{\GrGen,\calA,\calE_\calA}(\secpar)$}
\begin{algorithmic}
\State $(\GG, q, g) \gets \GrGen(1^\secpar)$
\State $\alpha \getsr \ZZ_q^*$; $\rho \getsr \bits^{*}$
\State $(A, B) \gets \calA(g, g^\alpha; \rho)$
\State $r \gets \calE_\calA(g, g^\alpha, \rho)$
\Comment{$\calE_\calA$ gets $\calA$'s input and coins}
\Return $[B = A^\alpha \wedge A \ne g^r]$
\end{algorithmic}
\end{algorithm}
```

**KEA holds** for $\GrGen$ if for all efficient $\calA$ there exists an efficient $\calE_\calA$ such that

$$
\Adv^{\mathrm{kea}}_{\GrGen,\calA,\calE_\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{kea}}_{\GrGen,\calA,\calE_\calA}(\secpar) = 1\right]
$$

is negligible.

## Known Results

- KEA is not falsifiable in the sense of Naor: its $\forall \calA\, \exists \calE_\calA$ form means no efficient challenger can certify that an adversary breaks it — [[Nao03 - On Cryptographic Assumptions and Challenges|Nao03]]
- For an NP language with a sub-exponentially hard subset-membership problem, a black-box reduction from a falsifiable assumption to the adaptive soundness of a SNARG for that language exists only if the assumption is false — [[GW11 - Separating Succinct Non-Interactive Arguments From All Falsifiable Assumptions|GW11]]; see [[no-falsifiable-assumption-to-snark-gro16]]

# Variations

## $q$-Power KEA

Let $(\GG, \GG_T, e, g)$ be a [[pairings|bilinear group]] of prime order $p$, let $x, \alpha \getsr \ZZ_p^*$, and give $\calA$ the elements $(g^{x^i}, g^{\alpha x^i})_{i=0}^{q}$. The **$q$-power knowledge of exponent assumption ($q$-PKE)** states that for all efficient $\calA$ there is an efficient $\calE_\calA$ (given $\calA$'s input and coins) such that the probability that $\calA$ outputs $(c, \hat c)$ with $\hat c = c^\alpha$ while $\calE_\calA$ fails to output $a_0, \ldots, a_q$ with $c = g^{\sum_i a_i x^i}$ is negligible — [[Gro10 - Short Pairing-Based Non-interactive Zero-Knowledge Arguments|Gro10]].

$q$-PKE is used in the pairing-based SNARKs of [[Gro10 - Short Pairing-Based Non-interactive Zero-Knowledge Arguments|Gro10]] and Gennaro–Gentry–Parno–Raykova (EUROCRYPT 2013); Groth16 instead proves knowledge soundness in the generic bilinear group model — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]].

## Algebraic Group Model (AGM)

In the [[algebraic-group-model|AGM]], every algorithm must explicitly output the representation of any group element it computes. This is a heuristic model that makes KEA-like extraction implicit: any output group element is accompanied by its algebraic derivation from the inputs.

# Attacks

- No attack on KEA1 without auxiliary input is known
- Assuming [[indistinguishability-obfuscation|indistinguishability obfuscation]], KEA with respect to arbitrary auxiliary input of unbounded polynomial length is false — [[BCPR14 - On the Existence of Extractable One-Way Functions|BCPR14]]
- The KEA2 assumption of Hada–Tanaka is false — [[BP04 - The Knowledge-of-Exponent Assumptions and 3-Round Zero-Knowledge Protocols|BP04]]

<!-- BEGIN GENERATED participates-in 47735000455d -->

## Participates in

**Produces Knowledge of exponent assumption**

- [[agm-to-kea|AGM ⇒ KEA]]
- [[ggm-to-kea-den06|GGM ⇒ KEA]]

<!-- END GENERATED participates-in -->
