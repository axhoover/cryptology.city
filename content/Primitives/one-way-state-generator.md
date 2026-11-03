---
type: primitive
status: draft
aliases:
  - OWSG
  - One-way state generator
  - One-way states generator
title: One-way state generator
id: one-way-state-generator
variants:
  pure-one-way-state-generator: "#pure-owsgs"
---

# One-way state generator

A one-way state generator maps a classical key $k$ to a quantum state $\phi_k$ such that no efficient quantum adversary given polynomially many copies of $\phi_k$ finds a key $k'$ that verification accepts against a fresh copy of $\phi_k$. The notion is a quantum analogue of a one-way function: [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]] define it for pure states, and [[MY22 - One-Wayness in Quantum Cryptography|MY22]] extend it to mixed states.

## Syntax

A one-way state generator is a triple of quantum polynomial-time algorithms $\mathsf{OWSG} = (\KeyGen, \mathsf{StateGen}, \Vrfy)$:

- $\KeyGen(1^\secpar) \to k$, a randomized algorithm outputting a classical key;
- $\mathsf{StateGen}(k) \to \phi_k$, a quantum algorithm outputting a state $\phi_k$ on $\poly(\secpar)$ qubits, possibly mixed;
- $\Vrfy(k', \sigma) \to \top/\bot$, a quantum algorithm that takes a classical string $k'$ and a quantum state $\sigma$ and accepts or rejects.

## Properties

### Correctness

$\mathsf{OWSG}$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$,

$$
\Pr\!\left[\Vrfy(k, \phi_k) = \top : k \gets \KeyGen(1^\secpar),\ \phi_k \gets \mathsf{StateGen}(k)\right] \ge 1 - \varepsilon(\secpar),
$$

over the randomness of $\KeyGen$ and $\mathsf{StateGen}$ and the measurements of $\Vrfy$. $\mathsf{OWSG}$ is **correct** when $\varepsilon$ is negligible and **perfectly correct** when $\varepsilon = 0$.

### One-wayness

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{owsg}}_{\mathsf{OWSG},\calA,t}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$
\State run $\mathsf{StateGen}(k)$ $t+1$ times, obtaining $\phi_k^{\otimes (t+1)}$
\State $k' \gets \calA(1^\secpar, \phi_k^{\otimes t})$
\Comment{$\calA$ receives $t$ of the copies}
\State $d \gets \Vrfy(k', \phi_k)$
\Comment{run on the remaining copy}
\Return $[d = \top]$
\end{algorithmic}
\end{algorithm}
```

$\mathsf{OWSG}$ is **one-way** if for all efficient quantum $\calA$ and all polynomials $t$,

$$
\Adv^{\mathrm{owsg}}_{\mathsf{OWSG},\calA,t}(\secpar) := \Pr\!\left[\Game^{\mathrm{owsg}}_{\mathsf{OWSG},\calA,t}(\secpar) = 1\right]
$$

is negligible — [[MY22 - One-Wayness in Quantum Cryptography|MY22]]. $\calA$ need not output $k$ itself, since distinct keys may give equal or close states; any $k'$ that $\Vrfy$ accepts against a copy $\calA$ has not seen counts.

# Variations

## Pure OWSGs

A **pure** one-way state generator is one whose $\mathsf{StateGen}(k)$ outputs the same pure state $|\phi_k\rangle$ on every run, so that $\calA$ receives $|\phi_k\rangle^{\otimes t}$ and $\Vrfy$ runs on one further copy. This is the original definition of [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]]; every pure one-way state generator is a one-way state generator ([[pure-owsg-to-owsg|Pure OWSG ⇒ OWSG]]) — folklore.

# Other results

- [[owf-to-owsg|OWF ⇒ OWSG]]: a one-way function $f$ secure against quantum adversaries gives the pure generator $\mathsf{StateGen}(k) := |f(k)\rangle$, verified by measuring and comparing with $f(k')$ — folklore.
- [[prs-to-owsg-my22a|PRS ⇒ OWSG]]: a [[pseudorandom-quantum-state|pseudorandom quantum state]] generator, verified by projection onto $|\phi_{k'}\rangle$, is a pure one-way state generator — [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]].
- [[owsg-to-qm|QM ⇒ OWSG]]: private-key [[quantum-money#pure-money-states|quantum money with pure money states]] yields one-way state generators — [[MY22 - One-Wayness in Quantum Cryptography|MY22]].
- One-time-secure digital signatures with quantum public keys exist if pure one-way state generators do — [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]]; one-way state generators and one-time-secure digital signatures with quantum public keys are equivalent — [[MY22 - One-Wayness in Quantum Cryptography|MY22]].

<!-- BEGIN GENERATED participates-in b3bec97e87c9 -->

## Participates in

**Builds on One-way state generator**

- [[pure-owsg-to-owsg|Pure OWSG ⇒ OWSG]] (via [[one-way-state-generator#pure-owsgs|Pure OWSGs]])

**Produces One-way state generator**

- [[owf-to-owsg|OWF ⇒ OWSG]] (via [[one-way-state-generator#pure-owsgs|Pure OWSGs]])
- [[prs-to-owsg-my22a|PRS ⇒ OWSG]] (via [[one-way-state-generator#pure-owsgs|Pure OWSGs]])
- [[pure-owsg-to-owsg|Pure OWSG ⇒ OWSG]]
- [[owsg-to-qm|QM ⇒ OWSG]]

<!-- END GENERATED participates-in -->
