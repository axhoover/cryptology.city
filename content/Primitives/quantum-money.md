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
  quantum-money-mini-scheme: "#mini-schemes"
  secret-based-quantum-money-mini-scheme: "#secret-based-mini-schemes"
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

## Mini-schemes

A **mini-scheme** $\mathsf{MS} = (\mathsf{Mint}, \Vrfy)$ has no keys, and its security concerns a single banknote: $\mathsf{Mint}(1^\secpar) \to (s, \rho_s)$ outputs a classical serial number $s$ and a quantum money state $\rho_s$, and $\Vrfy(s, \sigma) \to \top/\bot$ accepts or rejects a state $\sigma$ as a money state for $s$ — [[AC12 - Quantum Money from Hidden Subspaces|AC12]], following [[LAF+10 - Breaking and Making Quantum Money Toward a New Quantum Cryptographic Protocol|LAF+10]] and [[FGH+12 - Quantum Money from Knots|FGH+12]]. $\mathsf{MS}$ is $(1-\varepsilon)$-**correct** if $\Vrfy(s, \rho_s)$ accepts with probability at least $1 - \varepsilon$ for every $(s, \rho_s)$ that $\mathsf{Mint}(1^\secpar)$ outputs, and **correct** when $\varepsilon$ is negligible.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{mini}}_{\mathsf{MS},\calA}(\secpar)$}
\begin{algorithmic}
\State $(s, \rho_s) \gets \mathsf{Mint}(1^\secpar)$
\State $\sigma \gets \calA(1^\secpar, s, \rho_s)$
\Comment{$\sigma$ is a state on registers $R_1, R_2$, possibly entangled}
\State run $\Vrfy(s, \cdot)$ on registers $R_1$ and $R_2$ of $\sigma$, with outcomes $b_1, b_2$
\Return $[b_1 = b_2 = \top]$
\end{algorithmic}
\end{algorithm}
```

$\mathsf{MS}$ is **unforgeable** if for all efficient quantum $\calA$,

$$
\Adv^{\mathrm{mini}}_{\mathsf{MS},\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{mini}}_{\mathsf{MS},\calA}(\secpar) = 1\right]
$$

is negligible — [[AC12 - Quantum Money from Hidden Subspaces|AC12]]. [[AC12 - Quantum Money from Hidden Subspaces|AC12]] call $\mathsf{MS}$ secure if it is unforgeable and has completeness error at most $1/3$.

### Secret-based mini-schemes

A mini-scheme is **secret-based** if $\mathsf{Mint}(1^\secpar)$ first samples a uniform classical string $r$ and then generates a banknote $(s_r, \rho_r)$ determined by $r$, so that reusing $r$ gives identical banknotes — [[AC12 - Quantum Money from Hidden Subspaces|AC12]]. The mini-schemes of [[AC12 - Quantum Money from Hidden Subspaces|AC12]] are secret-based; those of [[LAF+10 - Breaking and Making Quantum Money Toward a New Quantum Cryptographic Protocol|LAF+10]] and [[FGH+12 - Quantum Money from Knots|FGH+12]] are not, since their serial number is obtained only as the outcome of a quantum measurement — [[AC12 - Quantum Money from Hidden Subspaces|AC12]].

## Quantum lightning

A **quantum lightning** scheme has no secret key: $\KeyGen(1^\secpar) \to \pk$, anyone can run $\mathsf{Mint}(\pk) \to \rho$, and $\Vrfy(\pk, \sigma)$ either rejects or outputs a classical serial number. It is secure if for all efficient quantum $\calA$, the probability that $\calA(\pk)$ outputs a state on two registers on which $\Vrfy(\pk, \cdot)$ outputs the same serial number is negligible, so not even the party that minted a banknote can hold two banknotes with one serial number — [[Zha19 - Quantum Lightning Never Strikes the Same State Twice|Zha19]].

# Other results

- Wiesner's scheme: the secret key of a banknote is $(x, \theta) \in \bits^n \times \bits^n$, the banknote is $H^{\theta_1}|x_1\rangle \otimes \cdots \otimes H^{\theta_n}|x_n\rangle$ for the Hadamard gate $H$, and verification measures qubit $i$ in the computational basis if $\theta_i = 0$ and in the Hadamard basis if $\theta_i = 1$ and accepts iff the outcomes are $x$; the bank records $(x, \theta)$ under a classical serial number printed on the banknote — [[Wie83 - Conjugate Coding|Wie83]].
- For Wiesner's scheme with $n$-qubit banknotes, every counterfeiter given one banknote outputs two registers that both pass verification for its serial number with probability at most $(3/4)^n$, and a counterfeiter achieving $(3/4)^n$ exists — [[MVW13 - Optimal Counterfeiting Attacks and Generalizations for Wiesner's Quantum Money|MVW13]]. Polynomially many copies of one banknote reveal $(x, \theta)$, by measuring copies of each qubit in both bases — folklore.
- [[prs-to-quantum-money-jls18|PRS ⇒ QM]]: with $\mathsf{Mint}(k) := |\phi_k\rangle$ for a [[pseudorandom-quantum-state|pseudorandom quantum state]] generator and verification by projection onto $|\phi_k\rangle$, the scheme is unforgeable with pure money states — [[JLS18 - Pseudorandom Quantum States|JLS18]].
- [[owsg-to-qm|Pure-state QM ⇒ OWSG]]: a private-key scheme with pure money states yields a [[one-way-state-generator#pure-owsgs|pure one-way state generator]] whose states are the banknotes — [[MY22 - One-Wayness in Quantum Cryptography|MY22]].
- [[quantum-money-mini-scheme-and-ds-to-public-key-quantum-money-ac12|Mini-scheme + DS ⇒ Public-key QM]]: a mini-scheme together with a [[digital-signature|digital signature scheme]] secure against quantum adversaries yields a public-key scheme: the bank mints each banknote with a fresh run of the mini-scheme and signs its serial number — [[AC12 - Quantum Money from Hidden Subspaces|AC12]].
- [[public-key-quantum-money-to-quantum-money-mini-scheme-ac12|Public-key QM ⇒ Mini-scheme]]: conversely, a public-key scheme yields a mini-scheme whose serial number is a fresh public key and whose money state is one banknote minted under it — [[AC12 - Quantum Money from Hidden Subspaces|AC12]].
- [[secret-based-quantum-money-mini-scheme-to-owf-ac12|Secret-based mini-scheme ⇒ OWF]]: for a secure [[quantum-money#secret-based-mini-schemes|secret-based mini-scheme]], the map $r \mapsto s_r$ from the minting string to the serial number is a [[hash-function#preimage-resistance-one-wayness|one-way function]] against efficient quantum adversaries — [[AC12 - Quantum Money from Hidden Subspaces|AC12]].
- Hidden-subspace money: the banknote is $|A\rangle := |A|^{-1/2} \sum_{x \in A} |x\rangle$ for a uniformly random subspace $A \subseteq \FF_2^n$ of dimension $n/2$, and verification uses membership oracles for $A$ and for its dual $A^\perp$, with $H^{\otimes n}|A\rangle = |A^\perp\rangle$. Relative to these classical oracles the resulting mini-scheme is secure, which gives a public-key scheme secure relative to a classical oracle — [[AC12 - Quantum Money from Hidden Subspaces|AC12]].
- [[io-and-injective-one-way-function-to-public-key-quantum-money-zha19|iO + Injective OWF ⇒ Public-key QM]]: with subspaces of $\ZZ_q^n$ for a prime $q$ and the membership oracles replaced by [[indistinguishability-obfuscation|indistinguishability obfuscations]] of the membership programs, the hidden-subspace mini-scheme is secure if the obfuscator and an [[injective-one-way-function|injective one-way function]] are both secure against quantum adversaries — [[Zha19 - Quantum Lightning Never Strikes the Same State Twice|Zha19]]; signing its serial numbers with a signature scheme built from the one-way function then gives a public-key scheme — [[AC12 - Quantum Money from Hidden Subspaces|AC12]].
- Knot money: a candidate public-key scheme whose banknotes are superpositions of knot diagrams sharing one Alexander polynomial, which serves as the serial number; [[FGH+12 - Quantum Money from Knots|FGH+12]] give no security reduction.

<!-- BEGIN GENERATED participates-in 57e9298b7cf2 -->

## Participates in

**Builds on Quantum money**

- [[public-key-quantum-money-to-quantum-money-mini-scheme-ac12|Public-key QM ⇒ Mini-scheme]] (via [[quantum-money#public-key-quantum-money|Public-key quantum money]])
- [[pure-state-quantum-money-to-quantum-money|Pure-state QM ⇒ QM]] (via [[quantum-money#pure-money-states|Pure money states]])
- [[quantum-money-mini-scheme-and-ds-to-public-key-quantum-money-ac12|Mini-scheme + DS ⇒ Public-key QM]] (via [[quantum-money#mini-schemes|Mini-schemes]])
- [[owsg-to-qm|Pure-state QM ⇒ OWSG]] (via [[quantum-money#pure-money-states|Pure money states]])
- [[secret-based-quantum-money-mini-scheme-to-owf-ac12|Secret-based mini-scheme ⇒ OWF]] (via [[quantum-money#secret-based-mini-schemes|Secret-based mini-schemes]])

**Produces Quantum money**

- [[io-and-injective-one-way-function-to-public-key-quantum-money-zha19|iO + Injective OWF ⇒ Public-key QM]] (via [[quantum-money#public-key-quantum-money|Public-key quantum money]])
- [[prs-to-quantum-money-jls18|PRS ⇒ QM]] (via [[quantum-money#pure-money-states|Pure money states]])
- [[public-key-quantum-money-to-quantum-money-mini-scheme-ac12|Public-key QM ⇒ Mini-scheme]] (via [[quantum-money#mini-schemes|Mini-schemes]])
- [[pure-state-quantum-money-to-quantum-money|Pure-state QM ⇒ QM]]
- [[quantum-money-mini-scheme-and-ds-to-public-key-quantum-money-ac12|Mini-scheme + DS ⇒ Public-key QM]] (via [[quantum-money#public-key-quantum-money|Public-key quantum money]])

<!-- END GENERATED participates-in -->
