---
type: primitive
status: draft
aliases:
  - Unclonable encryption
  - Uncloneable encryption
title: Unclonable encryption
id: unclonable-encryption
variants:
  unclonable-indistinguishable-encryption: "#unclonable-indistinguishability"
---

# Unclonable encryption

An unclonable encryption scheme encrypts a classical message into a quantum ciphertext that cannot be split between two parties in a way that lets both of them recover the message once the decryption key is later revealed. The notion is due to [[BL20 - Uncloneable Quantum Encryption via Oracles|BL20]].

## Syntax

An unclonable encryption scheme is a one-time quantum encryption scheme for classical messages, a triple of quantum polynomial-time algorithms $\mathsf{UE} = (\KeyGen, \Enc, \Dec)$ with message space $\calM = \bits^n$:

- $\KeyGen(1^\secpar) \to k$, a randomized algorithm outputting a classical key;
- $\Enc(k, m) \to \rho$, a quantum algorithm outputting a quantum ciphertext $\rho$;
- $\Dec(k, \rho) \to m$, a quantum algorithm outputting a message.

Each key encrypts one message — [[BL20 - Uncloneable Quantum Encryption via Oracles|BL20]].

## Properties

### Correctness

$\mathsf{UE}$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$ and $m \in \calM$,

$$
\Pr\!\left[\Dec(k, \rho) = m : k \gets \KeyGen(1^\secpar),\ \rho \gets \Enc(k, m)\right] \ge 1 - \varepsilon(\secpar),
$$

over the randomness of $\KeyGen$ and the measurements of $\Enc$ and $\Dec$. $\mathsf{UE}$ is **correct** when $\varepsilon$ is negligible and **perfectly correct** when $\varepsilon = 0$.

### Unclonable security

A cloning adversary is a triple $(\calA, \calB, \calC)$: $\calA$ maps the ciphertext to a joint state on two registers $R_B, R_C$; then $\calB$ receives $R_B$ and $\calC$ receives $R_C$, each together with the key, and they do not communicate.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{uncl}}_{\mathsf{UE},(\calA,\calB,\calC)}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $m \getsr \calM$
\State $\rho \gets \Enc(k, m)$
\State $(R_B, R_C) \gets \calA(\rho)$
\Comment{a joint, possibly entangled, state on two registers}
\State $m_B \gets \calB(k, R_B)$; $m_C \gets \calC(k, R_C)$
\Comment{$\calB$ and $\calC$ do not communicate}
\Return $[m_B = m_C = m]$
\end{algorithmic}
\end{algorithm}
```

$\mathsf{UE}$ is $\delta$-**unclonable** if for all cloning adversaries $(\calA, \calB, \calC)$ in the class considered (efficient, query-bounded in an oracle model, or unbounded),

$$
\Adv^{\mathrm{uncl}}_{\mathsf{UE},(\calA,\calB,\calC)}(\secpar) := \Pr\!\left[\Game^{\mathrm{uncl}}_{\mathsf{UE},(\calA,\calB,\calC)}(\secpar) = 1\right] \le \delta(\secpar)
$$

— [[BL20 - Uncloneable Quantum Encryption via Oracles|BL20]]. The adversary that forwards $\rho$ to $\calB$, who decrypts, while $\calC$ guesses uniformly wins with probability at least $(1-\varepsilon)\,2^{-n}$, so no $(1-\varepsilon)$-correct scheme is $\delta$-unclonable for $\delta < (1-\varepsilon)\,2^{-n}$ — folklore.

### Unclonable indistinguishability

The messages $m_0, m_1 \in \calM$ are fixed in advance.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{uncl\text{-}ind}}_{\mathsf{UE},(\calA,\calB,\calC),m_0,m_1}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\rho \gets \Enc(k, m_b)$
\State $(R_B, R_C) \gets \calA(\rho)$
\State $b_B \gets \calB(k, R_B)$; $b_C \gets \calC(k, R_C)$
\Comment{$\calB$ and $\calC$ do not communicate}
\Return $[b_B = b_C = b]$
\end{algorithmic}
\end{algorithm}
```

$\mathsf{UE}$ is **unclonable-indistinguishable** if for all efficient cloning adversaries $(\calA, \calB, \calC)$ and all $m_0, m_1 \in \calM$,

$$
\Pr\!\left[\Game^{\mathrm{uncl\text{-}ind}}_{\mathsf{UE},(\calA,\calB,\calC),m_0,m_1}(\secpar) = 1\right] \le \frac{1}{2} + \negl(\secpar)
$$

— [[BL20 - Uncloneable Quantum Encryption via Oracles|BL20]], [[AKL+22 - On the Feasibility of Unclonable Encryption, and More|AKL+22]]. The threshold is $1/2$ because $\calB$ and $\calC$ win with probability $1/2$ by outputting a common random bit that $\calA$ places in both registers; the bound is one-sided because they lose outright by disagreeing. For one-bit messages and $(m_0, m_1) = (0, 1)$ the two games coincide, so unclonable indistinguishability asks for $\delta = 1/2 + \negl(\secpar)$ in the unclonable-security game — folklore.

# Other results

- Encoding the message in conjugate-coding (Wiesner) states under a uniformly random choice of bases gives a scheme in the plain model that is $\delta$-unclonable for $n$-bit messages with $\delta = (1/2 + 1/(2\sqrt{2}))^n$, against unbounded cloning adversaries — [[BL20 - Uncloneable Quantum Encryption via Oracles|BL20]]. For $n = 1$ this is about $0.854$, far from the $1/2$ that unclonable indistinguishability requires.
- [[qrom-to-unclonable-encryption-akl22|QROM ⇒ unclonable-indistinguishable UE]]: in the quantum random-oracle model, unclonable-indistinguishable encryption exists with no computational assumption — [[AKL+22 - On the Feasibility of Unclonable Encryption, and More|AKL+22]].
- A large class of encryption schemes is not unclonable-indistinguishable — [[AKL+22 - On the Feasibility of Unclonable Encryption, and More|AKL+22]].

<!-- BEGIN GENERATED participates-in 686046d7126d -->

## Participates in

**Produces Unclonable encryption**

- [[qrom-to-unclonable-encryption-akl22|QROM ⇒ unclonable-indistinguishable UE]] (via [[unclonable-encryption#unclonable-indistinguishability|Unclonable indistinguishability]])

<!-- END GENERATED participates-in -->
