---
type: primitive
status: draft
aliases:
  - PRS
  - PRSs
  - PRSG
  - Pseudorandom quantum state
  - Pseudorandom quantum states
  - Pseudorandom state
  - Pseudorandom states
title: Pseudorandom quantum state
id: prs
variants:
  single-copy-prs: "#single-copy-security"
---

# Pseudorandom quantum state

A pseudorandom quantum state (PRS) generator maps a uniformly random classical key $k$ to an $n$-qubit pure state $|\phi_k\rangle$ such that, for every polynomial $t$, no efficient quantum adversary distinguishes $t$ copies of $|\phi_k\rangle$ from $t$ copies of a Haar-random $n$-qubit state — [[JLS18 - Pseudorandom Quantum States|JLS18]].

## Syntax

A PRS generator is a pair of quantum polynomial-time algorithms $\mathsf{PRS} = (\KeyGen, \mathsf{StateGen})$ with output length $n = n(\secpar)$:

- $\KeyGen(1^\secpar) \to k$, sampling a key $k \getsr \bits^\secpar$;
- $\mathsf{StateGen}(k) \to |\phi_k\rangle$, a quantum algorithm that on every run outputs the same $n$-qubit pure state $|\phi_k\rangle$.

This is the definition of [[JLS18 - Pseudorandom Quantum States|JLS18]], who write the keyed family $\{|\phi_k\rangle\}_k$ and its generation algorithm.

## Properties

### Pseudorandomness

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{prs}}_{\mathsf{PRS},\calA,t}(\secpar)$}
\begin{algorithmic}
\State $b \getsr \bits$; $k \gets \KeyGen(1^\secpar)$
\State run $\mathsf{StateGen}(k)$ $t$ times; $\rho_0 := |\phi_k\rangle\langle\phi_k|^{\otimes t}$
\State sample $|\psi\rangle$ from the Haar measure on $n$-qubit states; $\rho_1 := |\psi\rangle\langle\psi|^{\otimes t}$
\Comment{the ideal world; the challenger need not be efficient}
\State $b' \gets \calA(1^\secpar, \rho_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

$\mathsf{PRS}$ is **pseudorandom** if for all efficient quantum $\calA$ and all polynomials $t$,

$$
\Adv^{\mathrm{prs}}_{\mathsf{PRS},\calA,t}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{prs}}_{\mathsf{PRS},\calA,t}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[JLS18 - Pseudorandom Quantum States|JLS18]]. The ideal state $\rho_1$, averaged over $|\psi\rangle$, is the maximally mixed state on the symmetric subspace of $(\mathbb{C}^{2^n})^{\otimes t}$ — standard. The applications below take $n = \omega(\log \secpar)$, so that a Haar-random state has negligible expected overlap $2^{-n}$ with every fixed state.

# Variations

## Single-copy security

A **single-copy-secure** PRS generator satisfies pseudorandomness for $t = 1$ only. The ideal state is then the maximally mixed state $I/2^n$, so the notion is non-trivial only when $n > \secpar$: for $n \le \secpar$, the state $|\phi_k\rangle := |k_1 \cdots k_n\rangle$ is single-copy secure with advantage $0$ — folklore. Relative to a classical oracle, $\classP = \classNP$ and single-copy-secure PRS generators exist — [[KQST23 - Quantum Cryptography in Algorithmica|KQST23]].

# Other results

- [[owf-to-prs-jls18|OWF ⇒ PRS]]: one-way functions secure against quantum adversaries yield PRS generators, by random phase states — [[JLS18 - Pseudorandom Quantum States|JLS18]].
- [[prs-to-quantum-money-jls18|PRS ⇒ QM]]: with $\mathsf{Mint}(k) := |\phi_k\rangle$ and verification by projection onto $|\phi_k\rangle$, a PRS generator is a private-key quantum money scheme with pure money states — [[JLS18 - Pseudorandom Quantum States|JLS18]].
- [[prs-to-owsg-my22a|PRS ⇒ OWSG]]: a PRS generator, with verification by projection onto $|\phi_{k'}\rangle$, is a one-way state generator — [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]].
- If PRS generators exist, non-interactive quantum bit commitments for classical messages with computational hiding and statistical binding exist, and so do one-time-secure digital signatures with quantum public keys — [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]].
- [[no-prs-to-owf-kre21|No relativizing reduction from PRS to OWF]]: relative to a quantum oracle, PRS generators exist and $\classBQP = \classQMA$ — [[Kre21 - Quantum Pseudorandomness and Classical Complexity|Kre21]].
- If $\classBQP = \classPP$, no PRS generator exists — [[Kre21 - Quantum Pseudorandomness and Classical Complexity|Kre21]].

<!-- BEGIN GENERATED participates-in c05c72ae91a8 -->

## Participates in

**Builds on Pseudorandom quantum state**

- [[prs-to-owsg-my22a|PRS ⇒ OWSG]]
- [[prs-to-quantum-money-jls18|PRS ⇒ QM]]

**Produces Pseudorandom quantum state**

- [[owf-to-prs-jls18|OWF ⇒ PRS]]

**Barriers**

- [[no-prs-to-owf-kre21|No relativizing reduction from PRS to OWF]]

<!-- END GENERATED participates-in -->
