---
type: primitive
status: draft
aliases:
  - Quantum bit commitment
  - Quantum bit commitments
  - Quantum commitment
  - Non-interactive quantum bit commitment
title: Quantum bit commitment
id: quantum-bit-commitment
---

# Quantum bit commitment

A non-interactive quantum bit commitment is a pair of efficiently preparable pure states $|\psi_0\rangle, |\psi_1\rangle$ on two registers $R$ and $C$: the sender commits to a bit $b$ by sending the register $C$ of $|\psi_b\rangle$ and opens by sending $b$ and $R$, and the receiver accepts if the projection of $RC$ onto $|\psi_b\rangle$ succeeds — [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]].

## Syntax

A non-interactive quantum bit commitment scheme $\mathsf{QBC}$ for classical one-bit messages is a quantum polynomial-time algorithm that, on input $1^\secpar$ and $b \in \bits$, applies a unitary $V_b$ to the all-zero state and so prepares a pure state $|\psi_b\rangle_{RC} = V_b |0 \cdots 0\rangle$ on registers $R$ and $C$. It is run in two phases:

- **Commit.** To commit to $b$, the sender prepares $|\psi_b\rangle_{RC}$ and sends $C$ to the receiver.
- **Reveal.** The sender sends $b$ and $R$. The receiver measures $RC$ with $\{|\psi_b\rangle\langle\psi_b|,\ I - |\psi_b\rangle\langle\psi_b|\}$ and outputs $b$ on the first outcome and $\bot$ on the second. The measurement is efficient: apply $V_b^\dagger$ and accept if every qubit measures to $0$.

This is the definition of [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]].

## Properties

### Correctness

$\mathsf{QBC}$ is **perfectly correct** if, when the honest sender commits to $b \in \bits$ and reveals it, the honest receiver outputs $b$ with probability $1$ — [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]]. Every scheme of the syntax above is perfectly correct: measuring $|\psi_b\rangle_{RC}$ with $\{|\psi_b\rangle\langle\psi_b|,\ I - |\psi_b\rangle\langle\psi_b|\}$ gives the first outcome with probability $1$ — standard.

### Computational hiding

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{hide}}_{\mathsf{QBC},\calA}(\secpar)$}
\begin{algorithmic}
\State $b \getsr \bits$
\State prepare $|\psi_b\rangle_{RC}$
\State $b' \gets \calA(1^\secpar, C)$
\Comment{$\calA$ receives the register $C$ and never sees $R$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

$\mathsf{QBC}$ is **computationally hiding** if for all efficient quantum $\calA$,

$$
\Adv^{\mathrm{hide}}_{\mathsf{QBC},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{hide}}_{\mathsf{QBC},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]]. The advantage equals $\left|\Pr[b' = 1 \mid b = 0] - \Pr[b' = 1 \mid b = 1]\right|$, the form in which MY22a state it.

### Statistical sum-binding

The adversary plays the sender. It fixes a state $|\Psi\rangle_{ERC}$, whose register $C$ is the commitment, and for each $b \in \bits$ a unitary $U^{(b)}_{ER}$ on $E$ and $R$ that it applies before revealing $b$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{bind}}_{\mathsf{QBC},\calA,b}(\secpar)$}
\begin{algorithmic}
\State $\calA$ prepares $|\Psi\rangle_{ERC}$ and sends $C$
\Comment{the same $|\Psi\rangle_{ERC}$ for $b = 0$ and $b = 1$}
\State $\calA$ applies $U^{(b)}_{ER}$ to $E$ and $R$ and sends $b$ and $R$
\State measure $RC$ with $\{|\psi_b\rangle\langle\psi_b|,\ I - |\psi_b\rangle\langle\psi_b|\}$
\Return $[\text{the outcome is } |\psi_b\rangle\langle\psi_b|]$
\end{algorithmic}
\end{algorithm}
```

For a computationally unbounded $\calA$, let

$$
p_b := \Pr\!\left[\Game^{\mathrm{bind}}_{\mathsf{QBC},\calA,b}(\secpar) = 1\right] = \langle\psi_b|_{RC} \operatorname{Tr}_E\!\left(U^{(b)}_{ER}\, |\Psi\rangle\langle\Psi|_{ERC}\, U^{(b)\dagger}_{ER}\right) |\psi_b\rangle_{RC}.
$$

$\mathsf{QBC}$ is **statistically sum-binding** if for all computationally unbounded $\calA$ there is a negligible function $\varepsilon$ with $p_0 + p_1 \le 1 + \varepsilon(\secpar)$ — [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]].

As an object, a quantum bit commitment denotes a scheme of the syntax above that is computationally hiding and statistically sum-binding.

# Variations

## Classical opening

Every scheme can be modified so that the reveal message is classical. Write $X^x Z^z := \bigotimes_j X_j^{x_j} Z_j^{z_j}$ for strings $x, z$ with one bit for each qubit of $R$. In the commit phase the sender samples $x$ and $z$ uniformly at random, applies $X^x Z^z$ to $R$, and sends both $R$ and $C$; it reveals $(b, x, z)$, and the receiver applies $X^x Z^z$ to $R$ and measures as before. After the commit phase the receiver holds the maximally mixed state on $R$ together with its state in the original scheme, and if the original scheme is computationally hiding and statistically sum-binding, so is the modified one — [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]].

# Other results

- [[linear-output-prs-to-quantum-bit-commitment-my22a|Linear-output PRS ⇒ Quantum bit commitment]]: [[pseudorandom-quantum-state#prs-with-output-length-linear-in-the-key|PRS generators]] with $\secpar$-bit keys and output length $n \ge c\secpar$ for a constant $c > 1$ yield computationally hiding and statistically sum-binding schemes — [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]].
- No quantum bit commitment protocol is unconditionally secure, that is, secure against cheaters with no restriction on their time, space or technology — [[May97 - Unconditionally Secure Quantum Bit Commitment is Impossible|May97]]. All quantum bit commitment schemes proposed until then are insecure: the sender can almost always cheat by an Einstein–Podolsky–Rosen type of attack, delaying her measurement until she opens — [[LC97 - Is Quantum Bit Commitment Really Possible|LC97]].
- No scheme of the syntax above is both statistically hiding and statistically sum-binding. If the receiver's states $\operatorname{Tr}_R |\psi_0\rangle\langle\psi_0|$ and $\operatorname{Tr}_R |\psi_1\rangle\langle\psi_1|$ have trace distance $\delta$, their fidelity is at least $(1 - \delta)^2$, and by Uhlmann's theorem a unitary $U$ on $R$ attains $|\langle\psi_1|(U \otimes I)|\psi_0\rangle|^2 \ge (1 - \delta)^2$; the sender who prepares $|\psi_0\rangle_{RC}$ and applies $U$ only to open $1$ has $p_0 = 1$ and $p_1 \ge (1 - \delta)^2$ — standard.

<!-- BEGIN GENERATED participates-in 7f532829c48e -->

## Participates in

**Produces Quantum bit commitment**

- [[linear-output-prs-to-quantum-bit-commitment-my22a|Linear-output PRS ⇒ Quantum bit commitment]]

<!-- END GENERATED participates-in -->
