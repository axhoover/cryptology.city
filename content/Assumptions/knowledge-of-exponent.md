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
variants:
  kea3: "#kea3"
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

$q$-PKE is used in the pairing-based SNARKs of [[Gro10 - Short Pairing-Based Non-interactive Zero-Knowledge Arguments|Gro10]] and [[GGPR13 - Quadratic Span Programs and Succinct NIZKs without PCPs|GGPR13]]; Groth16 instead proves knowledge soundness in the generic bilinear group model — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]].

## KEA3

Let $\GrGen$ be as in the KEA1 game above. KEA3 gives the adversary a Diffie–Hellman triple and asks it for a pair $(C, Y)$ with $Y = C^a$; the extractor must express $C$ in the base elements $g$ and $g^b$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{kea3}}_{\GrGen,\calA,\calE_\calA}(\secpar)$}
\begin{algorithmic}
\State $(\GG, q, g) \gets \GrGen(1^\secpar)$
\State $a, b \getsr \ZZ_q$; $\rho \getsr \bits^{*}$
\State $(C, Y) \gets \calA(g, g^a, g^b, g^{ab}; \rho)$
\State $(c_1, c_2) \gets \calE_\calA(g, g^a, g^b, g^{ab}, \rho)$
\Comment{$\calE_\calA$ gets $\calA$'s input and coins}
\Return $[Y = C^a \wedge C \ne g^{c_1} (g^b)^{c_2}]$
\end{algorithmic}
\end{algorithm}
```

**KEA3 holds** for $\GrGen$ if the [[discrete-logarithm#dlog-in-prime-order-groups|discrete logarithm is hard]] for $\GrGen$ and for all efficient $\calA$ there exists an efficient $\calE_\calA$ such that

$$
\Adv^{\mathrm{kea3}}_{\GrGen,\calA,\calE_\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{kea3}}_{\GrGen,\calA,\calE_\calA}(\secpar) = 1\right]
$$

is negligible — [[BP04 - The Knowledge-of-Exponent Assumptions and 3-Round Zero-Knowledge Protocols|BP04]]. BP04 state the extraction condition alone and assume hardness of the discrete logarithm separately, for the same $\GrGen$. The extraction condition alone holds trivially for a generator whose discrete logarithms are easy, since $\calE_\calA$ can output $c_1 = \log_g C$ and $c_2 = 0$ — standard. Under KEA3 and that hardness, the three-message protocol of [[HT98 - On the Existence of 3-Round Zero-Knowledge Protocols|HT98]], with a fix to its soundness, is a zero-knowledge argument for $\classNP$ ([[prime-order-dlog-and-kea3-to-three-message-zk-argument-bp04|DLOG + KEA3 ⇒ Three-message ZK arguments for NP]]) — [[BP04 - The Knowledge-of-Exponent Assumptions and 3-Round Zero-Knowledge Protocols|BP04]].

## Algebraic Group Model (AGM)

In the [[algebraic-group-model|AGM]], every algorithm must explicitly output the representation of any group element it computes. This is a heuristic model that makes KEA-like extraction implicit: any output group element is accompanied by its algebraic derivation from the inputs.

# Attacks

- No attack on KEA1 without auxiliary input is known
- Assuming [[indistinguishability-obfuscation|indistinguishability obfuscation]], no extractable one-way function exists with respect to auxiliary input of unbounded polynomial length — [[BCPR14 - On the Existence of Extractable One-Way Functions|BCPR14]]. For a group generator whose discrete logarithm is hard, KEA with such auxiliary input would make $r \mapsto (g^r, g^{\alpha r})$, keyed by $(g, g^\alpha)$, an extractable one-way function, so under iO it fails for every such generator; for a generator whose discrete logarithm is easy it holds trivially — standard
- The KEA2 assumption of Hada–Tanaka is false — [[BP04 - The Knowledge-of-Exponent Assumptions and 3-Round Zero-Knowledge Protocols|BP04]]

<!-- BEGIN GENERATED participates-in 9b7fabe767e8 -->

## Participates in

**Builds on Knowledge of exponent assumption**

- [[prime-order-dlog-and-kea3-to-three-message-zk-argument-bp04|DLOG + KEA3 ⇒ Three-message ZK arguments for NP]] (via [[knowledge-of-exponent#kea3|KEA3]])

**Produces Knowledge of exponent assumption**

- [[agm-to-kea|AGM ⇒ KEA]]
- [[ggm-to-kea-den06|GGM ⇒ KEA]]

<!-- END GENERATED participates-in -->
