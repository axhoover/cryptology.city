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

Given $(g, g^\alpha)$ for $\alpha \getsr \ZZ_q^*$, let $\calA$ be an algorithm that outputs $(A, B) \in \GG^2$ such that $B = A^\alpha$. The KEA states that there exists an efficient **extractor** $\calE_\calA$ (which can read the internal state or random coins of $\calA$) such that:

$$\Pr\!\left[B = A^\alpha \wedge A \ne g^{\calE_\calA(\cdot)}\right] \le \negl(\secpar).$$

In the pairing-based setting (**$q$-Power Knowledge of Exponent**, used in Groth16), the adversary receives $(g, g^\alpha, g^{\alpha^2}, \ldots, g^{\alpha^q})$ and any output DH-pair $(A, B)$ must be "explained" by a linear combination of the input elements.

## Known Results

- [[kea-to-snark-gro16|KEA ⇒ SNARK]]
- KEA is non-falsifiable: no polynomial-time game can witness a KEA violation, because checking "knowledge" requires inspecting internal state — standard
- [[no-falsifiable-assumption-to-kea|No reduction from Falsifiable assumption to KEA]]
- [[kea-to-snark-gro16|KEA ⇒ SNARK]]

# Variations

## $q$-Power KEA

Generalization where the adversary receives $q$ powers $g^{\alpha^i}$ and any output pair must be a committed linear combination of these — the algebraic version of KEA used in Groth16 and related SNARKs.

## Algebraic Group Model (AGM)

In the [[algebraic-group-model|AGM]], every algorithm must explicitly output the representation of any group element it computes. This is a heuristic model that makes KEA-like extraction implicit: any output group element is accompanied by its algebraic derivation from the inputs.

# Attacks

- No concrete attack on KEA is known; the assumption is believed to be heuristically sound in natural cryptographic groups
- KEA can fail in adversarially constructed groups (generic groups with special structures)
- The non-falsifiable nature means KEA's "attacks" are philosophical: one cannot rule out adversaries who produce valid pairs without knowledge
