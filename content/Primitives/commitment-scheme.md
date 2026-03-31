---
aliases:
  - COM
  - Commitment scheme
  - Commitment
title: Commitment scheme
---

# Commitment scheme

A _commitment scheme_ is a two-phase protocol between a committer and a verifier in which the committer binds to a value during the **commit phase** (without revealing it), and then reveals the value in the **open phase**. The binding property ensures the committer cannot change the value after committing; the hiding property ensures the verifier learns nothing about the value before opening.

## Syntax

A _commitment scheme_ is a tuple of efficient algorithms $\mathsf{COM} = (\Gen, \Com, \Open)$ with respect to a message space $\calM$, commitment space $\calC$, and decommitment space $\calD$:

- $\Gen(1^\secpar) \to \pp,$ is a randomized algorithm that outputs public parameters $\pp,$
- $\Com(\pp, m; r) \to (c, d),$ is a randomized algorithm that takes a message $m \in \calM$ and randomness $r$, and outputs a commitment $c \in \calC$ and decommitment string $d \in \calD,$
- $\Open(\pp, c, d) \to m \text{ or } \bot,$ is a deterministic algorithm that opens a commitment $c$ using decommitment $d$, returning the message or $\bot$ on failure.

## Properties

### Correctness

For all $\secpar \in \NN$, $m \in \calM$, and $(c, d) \gets \Com(\pp, m; r)$ with $r \getsr \bits^*$, we have $\Open(\pp, c, d) = m$ with probability 1.

### Hiding

The commitment $c$ reveals no information about $m$ before opening. Computationally:

$$\Adv^{\mathrm{hide}}_{\mathsf{COM},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{hide}}_{\mathsf{COM},\calA}(\secpar) = 1\right] - 1\right|$$

is negligible, where the game samples $\pp \gets \Gen(1^\secpar)$, receives $(m_0, m_1)$ from $\calA$, picks $b \getsr \bits$, sends $(c, d) \gets \Com(\pp, m_b; r)$ to $\calA$, and $\calA$ outputs $b'$.

A commitment is **statistically hiding** if this holds even against computationally unbounded adversaries.

### Binding

No efficient committer can open a commitment to two different messages:

$$\Adv^{\mathrm{bind}}_{\mathsf{COM},\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{bind}}_{\mathsf{COM},\calA}(\secpar) = 1\right]$$

is negligible, where the game samples $\pp \gets \Gen(1^\secpar)$, receives $(c, d_0, d_1)$ from $\calA$, and outputs 1 iff $\Open(\pp,c,d_0) \ne \bot$, $\Open(\pp,c,d_1) \ne \bot$, and $\Open(\pp,c,d_0) \ne \Open(\pp,c,d_1)$.

A commitment is **statistically binding** if this holds even against computationally unbounded adversaries.

**Note:** Perfect (simultaneously statistically hiding and statistically binding) commitment schemes are impossible by a simple entropy argument. The four regimes are: (1) perfectly binding / computationally hiding, (2) computationally binding / statistically hiding, (3) computationally binding / computationally hiding, and (4) perfectly binding / perfectly hiding — which is impossible.

# Variations

## Trapdoor commitments

A _trapdoor commitment_ (or equivocable commitment) is a commitment scheme with an additional trapdoor $\td$ (generated alongside $\pp$) that allows equivocation: given $\td$, for any commitment $c$ and any two messages $m_0, m_1$, one can produce decommitment strings $d_0, d_1$ with $\Open(\pp, c, d_0) = m_0$ and $\Open(\pp, c, d_1) = m_1$. Used in zero-knowledge proof constructions.

## Vector commitments

A _vector commitment_ allows committing to an ordered vector $(m_1, \ldots, m_n)$ such that one can later open any single position $m_i$ with a short proof. Used in verifiable data structures and SNARKs.

# Other results

- COM from [[pseudorandom-generator|PRG]] (and hence from [[hash-function|OWF]]): Naor's construction uses a PRG to commit to a single bit in a statistically binding, computationally hiding scheme — [[Naor91 - Bit commitment using pseudorandomness|Naor91]]
- COM is complete for [[secure-multi-party-computation|MPC]] in the semi-honest model: any two-party functionality can be computed given a commitment scheme — [[GMW87 - How to play ANY mental game|GMW87]]
- [[oblivious-transfer|OT]] can be constructed from any non-trivial commitment scheme — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]]
- COM from any CPA-secure [[public-key-encryption|PKE]] scheme: encrypt $m$ under a freshly generated public key; the ciphertext is a statistically binding commitment
- Statistically hiding COM is equivalent to [[statistical-zero-knowledge|SZK]] $\ne$ [[bounded-error-probabilistic-polynomial-time|BPP]] — standard
- COM from [[decisional-diffie-hellman|DDH]]: the Pedersen commitment scheme is perfectly hiding and computationally binding
