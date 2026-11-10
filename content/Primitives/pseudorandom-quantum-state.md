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
  linear-output-prs: "#prs-with-output-length-linear-in-the-key"
  exponential-dimension-prs: "#prs-with-exponential-dimension"
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

is negligible — [[JLS18 - Pseudorandom Quantum States|JLS18]]. The ideal state $\rho_1$, averaged over $|\psi\rangle$, is the maximally mixed state on the symmetric subspace of $(\mathbb{C}^{2^n})^{\otimes t}$ — standard. The [[quantum-money|quantum money]] and [[one-way-state-generator|one-way state generator]] results below are proved for the output lengths of the variations below, and the same arguments work for $n = \omega(\log \secpar)$: given $t$ copies of a Haar-random $n$-qubit state $|\psi\rangle$, every algorithm succeeds with probability at most $(t+1)/(2^n+t)$ both at outputting $t+1$ registers that all pass the projection onto $|\psi\rangle$ and at outputting a classical description of a state $|\phi\rangle$ such that a fresh copy of $|\psi\rangle$ passes the projection onto $|\phi\rangle$ — standard.

# Variations

## PRS with exponential dimension

A PRS generator has **exponential dimension** if its output dimension $2^n$ is exponential in $\secpar$: there is a constant $c > 0$ with $n(\secpar) \ge c\secpar$ for all sufficiently large $\secpar$. The quantum money theorem of [[JLS18 - Pseudorandom Quantum States|JLS18]] assumes it ([[prs-to-quantum-money-jls18|PRS ⇒ QM]]). Every such generator is a PRS generator ([[exponential-dimension-prs-to-prs|Exponential-dimension PRS ⇒ PRS]]) — folklore.

## PRS with output length linear in the key

A PRS generator with $\secpar$-bit keys has **output length linear in the key** if there is a constant $c > 1$ with $n(\secpar) \ge c\secpar$ for all sufficiently large $\secpar$, so that $2^\secpar / 2^n \le 2^{-(c-1)\secpar}$. The one-way state generator theorem of [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]] assumes it ([[prs-to-owsg-my22a|PRS ⇒ OWSG]]). Every such generator has exponential dimension ([[linear-output-prs-to-exponential-dimension-prs|Linear-output PRS ⇒ Exponential-dimension PRS]]) — folklore.

## Single-copy security

A **single-copy-secure** PRS generator satisfies pseudorandomness for $t = 1$ only. The ideal state is then the maximally mixed state $I/2^n$, so the notion is non-trivial only when $n > \secpar$: for $n \le \secpar$, the state $|\phi_k\rangle := |k_1 \cdots k_n\rangle$ is single-copy secure with advantage $0$ — folklore.

# Other results

- [[owf-to-prs-jls18|OWF ⇒ PRS]]: [[hash-function#preimage-resistance-one-wayness|one-way functions]] secure against quantum adversaries yield PRS generators, by random phase states — [[JLS18 - Pseudorandom Quantum States|JLS18]].
- [[prs-to-quantum-money-jls18|PRS ⇒ QM]]: with $\mathsf{Mint}(k) := |\phi_k\rangle$ and verification by projection onto $|\phi_k\rangle$, a PRS generator is a private-key [[quantum-money#pure-money-states|quantum money scheme with pure money states]] — [[JLS18 - Pseudorandom Quantum States|JLS18]].
- [[prs-to-owsg-my22a|PRS ⇒ OWSG]]: a PRS generator, with verification by projection onto $|\phi_{k'}\rangle$, is a [[one-way-state-generator#pure-owsgs|pure one-way state generator]] — [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]].
- If PRS generators exist, non-interactive quantum bit commitments for classical messages with computational hiding and statistical binding exist, and so do one-time-secure digital signatures with quantum public keys — [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]].
- [[no-prs-to-owf-kre21|No fully-black-box reduction from PRS to OWF]]: relative to a quantum oracle, PRS generators with $n = \omega(\log \secpar)$ exist and $\classBQP = \classQMA$ — [[Kre21 - Quantum Pseudorandomness and Classical Complexity|Kre21]].
- [[no-single-copy-prs-to-owf-kqst23|No relativizing reduction from single-copy PRS to OWF]]: relative to a classical oracle, $\classP = \classNP$ and single-copy-secure PRS generators with $n > \secpar$ exist — [[KQST23 - Quantum Cryptography in Algorithmica|KQST23]].
- If $\classBQP = \classPP$, no PRS generator with $n = \omega(\log \secpar)$ exists — [[Kre21 - Quantum Pseudorandomness and Classical Complexity|Kre21]].

<!-- BEGIN GENERATED participates-in b2e2fb874f79 -->

## Participates in

**Builds on Pseudorandom quantum state**

- [[exponential-dimension-prs-to-prs|Exponential-dimension PRS ⇒ PRS]] (via [[pseudorandom-quantum-state#prs-with-exponential-dimension|PRS with exponential dimension]])
- [[linear-output-prs-to-exponential-dimension-prs|Linear-output PRS ⇒ Exponential-dimension PRS]] (via [[pseudorandom-quantum-state#prs-with-output-length-linear-in-the-key|PRS with output length linear in the key]])
- [[prs-to-owsg-my22a|PRS ⇒ OWSG]] (via [[pseudorandom-quantum-state#prs-with-output-length-linear-in-the-key|PRS with output length linear in the key]])
- [[prs-to-quantum-money-jls18|PRS ⇒ QM]] (via [[pseudorandom-quantum-state#prs-with-exponential-dimension|PRS with exponential dimension]])

**Produces Pseudorandom quantum state**

- [[exponential-dimension-prs-to-prs|Exponential-dimension PRS ⇒ PRS]]
- [[linear-output-prs-to-exponential-dimension-prs|Linear-output PRS ⇒ Exponential-dimension PRS]] (via [[pseudorandom-quantum-state#prs-with-exponential-dimension|PRS with exponential dimension]])
- [[owf-to-prs-jls18|OWF ⇒ PRS]] (via [[pseudorandom-quantum-state#prs-with-output-length-linear-in-the-key|PRS with output length linear in the key]])

**Barriers**

- [[no-prs-to-owf-kre21|No fully-black-box reduction from PRS to OWF]]
- [[no-single-copy-prs-to-owf-kqst23|No relativizing reduction from single-copy PRS to OWF]] (via [[pseudorandom-quantum-state#single-copy-security|Single-copy security]])

<!-- END GENERATED participates-in -->
