---
type: primitive
status: draft
aliases:
  - QM
  - Quantum money
  - Private-key quantum money
  - Public-key quantum money
  - Quantum lightning
title: Quantum money
id: quantum-money
variants:
  pure-state-quantum-money: "#pure-money-states"
  public-key-quantum-money: "#public-key-quantum-money"
  quantum-lightning: "#quantum-lightning"
---

# Quantum money

A private-key quantum money scheme lets a bank holding a secret key mint quantum banknotes and verify them, so that no efficient quantum adversary given $t$ banknotes produces more than $t$ states that pass verification, except with negligible probability; in a public-key scheme anyone can verify. The notion is due to [[Wie83 - Conjugate Coding|Wie83]].

## Syntax

A private-key quantum money scheme is a triple of quantum polynomial-time algorithms $\mathsf{QM} = (\KeyGen, \mathsf{Mint}, \Vrfy)$:

- $\KeyGen(1^\secpar) \to \sk$, a randomized algorithm outputting a classical secret key;
- $\mathsf{Mint}(\sk) \to \rho$, a quantum algorithm outputting a banknote, a state $\rho$ on $\poly(\secpar)$ qubits that may include a classical serial number;
- $\Vrfy(\sk, \sigma) \to \top/\bot$, a quantum algorithm that accepts or rejects a state $\sigma$.

Runs of $\mathsf{Mint}(\sk)$ are independent, so $t$ banknotes are $\rho_\sk^{\otimes t}$, with $\rho_\sk$ the state one run outputs — standard.

## Properties

### Correctness

$\mathsf{QM}$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$,

$$
\Pr\!\left[\Vrfy(\sk, \rho) = \top : \sk \gets \KeyGen(1^\secpar),\ \rho \gets \mathsf{Mint}(\sk)\right] \ge 1 - \varepsilon(\secpar),
$$

over the randomness of $\KeyGen$ and $\mathsf{Mint}$ and the measurements of $\Vrfy$. $\mathsf{QM}$ is **correct** when $\varepsilon$ is negligible and **perfectly correct** when $\varepsilon = 0$.

### Unforgeability

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{qm}}_{\mathsf{QM},\calA,t}(\secpar)$}
\begin{algorithmic}
\State $\sk \gets \KeyGen(1^\secpar)$
\State run $\mathsf{Mint}(\sk)$ $t$ times, obtaining banknotes $\rho_1, \ldots, \rho_t$
\State $\sigma \gets \calA(1^\secpar, \rho_1 \otimes \cdots \otimes \rho_t)$
\Comment{$\sigma$ is a state on registers $R_1, \ldots, R_m$, possibly entangled}
\State run $\Vrfy(\sk, \cdot)$ on each register $R_i$ of $\sigma$; let $c$ be the number of runs that accept
\Return $[c > t]$
\end{algorithmic}
\end{algorithm}
```

$\mathsf{QM}$ is **unforgeable** if for all efficient quantum $\calA$ and all polynomials $t$,

$$
\Adv^{\mathrm{qm}}_{\mathsf{QM},\calA,t}(\secpar) := \Pr\!\left[\Game^{\mathrm{qm}}_{\mathsf{QM},\calA,t}(\secpar) = 1\right]
$$

is negligible — standard. With $t = 1$ fixed, $\calA$ must turn one banknote into at least two states that pass verification; the bound below for Wiesner's scheme is stated for counterfeiters that output exactly two registers.

# Variations

## Pure money states

$\mathsf{QM}$ has **pure money states** if for every key $\sk$ there is a pure state $|\psi_\sk\rangle$ that $\mathsf{Mint}(\sk)$ outputs on every run. All banknotes under one key are then identical, and $\calA$ in $\Game^{\mathrm{qm}}$ receives $|\psi_\sk\rangle^{\otimes t}$.

## Public-key quantum money

In a **public-key** scheme $\mathsf{QM} = (\KeyGen, \mathsf{Mint}, \Vrfy)$, $\KeyGen(1^\secpar) \to (\sk, \pk)$, minting uses $\sk$, and $\Vrfy(\pk, \sigma) \to \top/\bot$ uses only the public key. Unforgeability is $\Game^{\mathrm{qm}}$ with $\pk$ given to $\calA$ and verification run under $\pk$ — [[AC12 - Quantum Money from Hidden Subspaces|AC12]].

## Quantum lightning

A **quantum lightning** scheme has no secret key: $\KeyGen(1^\secpar) \to \pk$, anyone can run $\mathsf{Mint}(\pk) \to \rho$, and $\Vrfy(\pk, \sigma)$ either rejects or outputs a classical serial number. It is secure if for all efficient quantum $\calA$, the probability that $\calA(\pk)$ outputs a state on two registers on which $\Vrfy(\pk, \cdot)$ outputs the same serial number is negligible, so not even the party that minted a banknote can hold two banknotes with one serial number — [[Zha19 - Quantum Lightning Never Strikes the Same State Twice|Zha19]].

# Other results

- Wiesner's scheme: the secret key of a banknote is $(x, \theta) \in \bits^n \times \bits^n$, the banknote is $H^{\theta_1}|x_1\rangle \otimes \cdots \otimes H^{\theta_n}|x_n\rangle$ for the Hadamard gate $H$, and verification measures qubit $i$ in the computational basis if $\theta_i = 0$ and in the Hadamard basis if $\theta_i = 1$ and accepts iff the outcomes are $x$; the bank records $(x, \theta)$ under a classical serial number printed on the banknote — [[Wie83 - Conjugate Coding|Wie83]].
- For Wiesner's scheme with $n$-qubit banknotes, every counterfeiter given one banknote outputs two registers that both pass verification for its serial number with probability at most $(3/4)^n$, and a counterfeiter achieving $(3/4)^n$ exists — [[MVW13 - Optimal Counterfeiting Attacks and Generalizations for Wiesner's Quantum Money|MVW13]]. Polynomially many copies of one banknote reveal $(x, \theta)$, by measuring copies of each qubit in both bases — folklore.
- [[prs-to-quantum-money-jls18|PRS ⇒ QM]]: with $\mathsf{Mint}(k) := |\phi_k\rangle$ for a [[pseudorandom-quantum-state|pseudorandom quantum state]] generator and verification by projection onto $|\phi_k\rangle$, the scheme is unforgeable with pure money states — [[JLS18 - Pseudorandom Quantum States|JLS18]].
- [[owsg-to-qm|Pure-state QM ⇒ OWSG]]: a private-key scheme with pure money states yields a [[one-way-state-generator#pure-owsgs|pure one-way state generator]] whose states are the banknotes — [[MY22 - One-Wayness in Quantum Cryptography|MY22]].
- A mini-scheme, a public-key scheme that issues a single banknote, together with a [[digital-signature|digital signature scheme]] secure against quantum adversaries, yields a full public-key scheme: the bank mints each banknote with a fresh mini-scheme and signs its public data — [[AC12 - Quantum Money from Hidden Subspaces|AC12]].
- Hidden-subspace money: the banknote is $|A\rangle := |A|^{-1/2} \sum_{x \in A} |x\rangle$ for a uniformly random subspace $A \subseteq \FF_2^n$ of dimension $n/2$, and verification uses membership oracles for $A$ and for its dual $A^\perp$, with $H^{\otimes n}|A\rangle = |A^\perp\rangle$. Relative to these classical oracles the resulting mini-scheme is secure, which gives a public-key scheme secure relative to a classical oracle — [[AC12 - Quantum Money from Hidden Subspaces|AC12]]. Replacing the oracles by [[indistinguishability-obfuscation|indistinguishability obfuscations]] of the membership programs, with the obfuscator and an [[injective-one-way-function|injective one-way function]] both secure against quantum adversaries, yields a secure mini-scheme, which the signature step above turns into a public-key scheme — [[Zha19 - Quantum Lightning Never Strikes the Same State Twice|Zha19]].
- Knot money: a candidate public-key scheme whose banknotes are superpositions of knot diagrams sharing one Alexander polynomial, which serves as the serial number; [[FGH+12 - Quantum Money from Knots|FGH+12]] give no security reduction.

<!-- BEGIN GENERATED participates-in 155e371816f0 -->

## Participates in

**Builds on Quantum money**

- [[pure-state-quantum-money-to-quantum-money|Pure-state QM ⇒ QM]] (via [[quantum-money#pure-money-states|Pure money states]])
- [[owsg-to-qm|Pure-state QM ⇒ OWSG]] (via [[quantum-money#pure-money-states|Pure money states]])

**Produces Quantum money**

- [[prs-to-quantum-money-jls18|PRS ⇒ QM]] (via [[quantum-money#pure-money-states|Pure money states]])
- [[pure-state-quantum-money-to-quantum-money|Pure-state QM ⇒ QM]]

<!-- END GENERATED participates-in -->
