---
type: primitive
status: draft
aliases:
  - UE
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

A cloning adversary is a triple $(\calA, \calB, \calC)$: $\calA$ maps the ciphertext to a joint state on two registers $R_B, R_C$; then $\calB$ receives $R_B$ and $\calC$ receives $R_C$, each together with the key, and they do not communicate, since otherwise $\calA$ could pass $\rho$ to $\calB$, who decrypts it and sends $m$ to $\calC$. In the [[random-oracle-model#quantum-random-oracle-model|QROM]] the games first sample a uniformly random function $H : \calD \to \calR$, of domain and range fixed by the scheme; $\KeyGen$, $\Enc$ and $\Dec$ query $H$, and every stage of the adversary queries it in superposition. In the plain model there is no $H$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{uncl}}_{\mathsf{UE},(\calA,\calB,\calC)}(\secpar)$}
\begin{algorithmic}
\State $H \getsr \Funcs(\calD, \calR)$
\Comment{QROM only}
\State $k \gets \KeyGen^H(1^\secpar)$; $m \getsr \calM$
\State $\rho \gets \Enc^H(k, m)$
\State $(R_B, R_C) \gets \calA^H(\rho)$
\Comment{a joint, possibly entangled, state on two registers}
\State $m_B \gets \calB^H(k, R_B)$; $m_C \gets \calC^H(k, R_C)$
\Comment{$\calB$ and $\calC$ do not communicate}
\Return $[m_B = m_C = m]$
\end{algorithmic}
\end{algorithm}
```

$\mathsf{UE}$ is $\delta$-**unclonable** if for all cloning adversaries $(\calA, \calB, \calC)$, unbounded in running time, each stage making polynomially many (superposition) queries to $H$ in the QROM, with no restriction in the plain model,

$$
\Adv^{\mathrm{uncl}}_{\mathsf{UE},(\calA,\calB,\calC)}(\secpar) := \Pr\!\left[\Game^{\mathrm{uncl}}_{\mathsf{UE},(\calA,\calB,\calC)}(\secpar) = 1\right] \le \delta(\secpar)
$$

— [[BL20 - Uncloneable Quantum Encryption via Oracles|BL20]] (arXiv v2, Definitions 7 and 8), where $\calA$, $\calB$ and $\calC$ are efficient quantum circuits and the bound is written $2^{-n + t(\secpar)} + \negl(\secpar)$, called $t$-uncloneable security. The adversary that forwards $\rho$ to $\calB$, who decrypts, while $\calC$ guesses uniformly wins with probability at least $(1-\varepsilon)\,2^{-n}$, so no $(1-\varepsilon)$-correct scheme is $\delta$-unclonable for $\delta < (1-\varepsilon)\,2^{-n}$ — folklore.

As an object, unclonable encryption denotes a [[#Correctness|correct]] scheme ($\varepsilon$ negligible) that is $\delta$-unclonable for a negligible $\delta$, the search security of [[CLX26b - Unclonable encryption from BB84 states a simultaneous Goldreich-Levin reduction|CLX26b]]; by the bound above it requires $n = \omega(\log \secpar)$. Restricting $(\calA, \calB, \calC)$ to efficient adversaries gives a weaker, computational notion — standard.

### Unclonable indistinguishability

$\calA$ chooses the two messages, then receives an encryption of one of them and splits it, keeping its state between the two stages.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{uncl\text{-}ind}}_{\mathsf{UE},(\calA,\calB,\calC)}(\secpar)$}
\begin{algorithmic}
\State $H \getsr \Funcs(\calD, \calR)$
\Comment{QROM only}
\State $(m_0, m_1, \stA) \gets \calA^H(1^\secpar)$
\Comment{$m_0, m_1 \in \calM$}
\State $k \gets \KeyGen^H(1^\secpar)$; $b \getsr \bits$
\State $\rho \gets \Enc^H(k, m_b)$
\State $(R_B, R_C) \gets \calA^H(\stA, \rho)$
\State $b_B \gets \calB^H(k, R_B)$; $b_C \gets \calC^H(k, R_C)$
\Comment{$\calB$ and $\calC$ do not communicate}
\Return $[b_B = b_C = b]$
\end{algorithmic}
\end{algorithm}
```

$\mathsf{UE}$ is **unclonable-indistinguishable** if for all cloning adversaries $(\calA, \calB, \calC)$, unbounded in running time, each stage making polynomially many (superposition) queries to $H$ in the QROM, with no restriction in the plain model,

$$
\Pr\!\left[\Game^{\mathrm{uncl\text{-}ind}}_{\mathsf{UE},(\calA,\calB,\calC)}(\secpar) = 1\right] \le \frac{1}{2} + \negl(\secpar)
$$

— [[AKL+22 - On the Feasibility of Unclonable Encryption, and More|AKL+22]] (arXiv v1, Definition 2.10); in the original definition of [[BL20 - Uncloneable Quantum Encryption via Oracles|BL20]] (arXiv v2, Definition 11), $m_0 = 0^n$ is fixed and $\calA$ chooses only $m_1$. The threshold is $1/2$ because $\calB$ and $\calC$ win with probability $1/2$ by outputting a common random bit that $\calA$ places in both registers; the bound is one-sided because they lose outright by disagreeing. For one-bit messages, the adversary whose first stage outputs $(m_0, m_1) = (0, 1)$ plays the unclonable-security game, so unclonable indistinguishability implies $\delta$-unclonability for $\delta = 1/2 + \negl(\secpar)$ — folklore.

As an object, unclonable-indistinguishable encryption denotes a [[#Correctness|correct]] scheme ($\varepsilon$ negligible) that is unclonable-indistinguishable. Restricting $(\calA, \calB, \calC)$ to efficient adversaries gives a weaker, computational notion — standard.

# Other results

- One-time-padding the message with a uniformly random $r \in \bits^n$ and encoding $m \oplus r$ in the conjugate-coding states of [[Wie83 - Conjugate Coding|Wie83]] under uniformly random bases $\theta \in \bits^n$ gives a scheme in the plain model that is $\delta$-unclonable for $n$-bit messages with $\delta = (1/2 + 1/(2\sqrt{2}))^n$, against unbounded cloning adversaries — [[BL20 - Uncloneable Quantum Encryption via Oracles|BL20]]. For $n = 1$ this is about $0.854$, far from the $1/2$ that unclonable indistinguishability requires.
- [[qrom-to-unclonable-encryption-akl22|QROM ⇒ unclonable-indistinguishable UE]]: in the quantum random-oracle model, unclonable-indistinguishable encryption exists with no computational assumption — [[AKL+22 - On the Feasibility of Unclonable Encryption, and More|AKL+22]].
- In the plain model, with no computational assumption, there is a perfectly correct unclonable-indistinguishable scheme for one-bit messages with efficient algorithms. $\KeyGen(1^\secpar)$ outputs a uniformly random non-identity Pauli $P \in \{I, X, Y, Z\}^{\otimes \secpar}$, a $2\secpar$-bit key; $\Enc(P, m)$ outputs a uniformly random product eigenstate of $P$ with eigenvalue $(-1)^m$, so the ciphertext is the $\secpar$-qubit state $(I + (-1)^m P)/2^\secpar$; $\Dec$ measures the observable $P$ qubit by qubit and outputs $m$ on outcome $(-1)^m$. Every cloning adversary wins the unclonable-indistinguishability game with probability at most $\frac{1}{2} + \frac{1}{2}\sqrt{2^\secpar/(4^\secpar - 1)}$ — [[ARS26 - Unconditional Unclonable Encryption|ARS26]] (arXiv v4, Theorem 4.1), [[Rag26 - Efficient Unclonable Encryption from Pauli Eigenstates|Rag26]] (arXiv v2, Main Theorem 1). The authors' Lean 4 formalization covers the correctness and security claims of Theorem 4.1 — [[ARS26 - Unconditional Unclonable Encryption|ARS26]].
- For messages of polynomial length $n$ in the plain model: with key a uniformly random Clifford unitary $U$ on $\ell \ge n$ qubits and $\Enc(U, m) = U\,(|m\rangle\langle m| \otimes I/2^{\ell - n})\,U^\dagger$, every cloning adversary wins the unclonable-indistinguishability game with probability at most $\frac{1}{2} + \frac{1}{2}\,2^{-(\ell - n + 1)/2}$, and the scheme is $\delta$-unclonable for $\delta = 2^{-n} + 2^{-(\ell - n + 1)/2}$ — [[BBC26a - Statistically secure uncloneable encryption of arbitrary messages|BBC26a]] (arXiv v1, Theorem 5.1, Corollary 5.2). The scheme is perfectly correct, since $\Dec$ applies $U^\dagger$ and measures the first $n$ qubits; it is efficient for polynomial $\ell$ and unclonable-indistinguishable for $\ell - n = \omega(\log \secpar)$.
- [[unclonable-encryption-to-unclonable-indistinguishable-encryption-clx26b|Unclonable encryption ⇒ unclonable-indistinguishable UE]]: encrypting a uniformly random $m \in \bits^n$ under a $\delta$-unclonable scheme and masking a bit with $\langle r, m \rangle$, for a uniformly random $r \in \bits^n$ in the key, gives a one-bit scheme against which every cloning adversary wins the unclonable-indistinguishability game with probability at most $1/2 + \delta^{1/4}/2$; applied to conjugate coding, the bound is $1/2 + \frac{1}{2}(1/2 + 1/(2\sqrt{2}))^{n/4}$ — [[CLX26b - Unclonable encryption from BB84 states a simultaneous Goldreich-Levin reduction|CLX26b]] (arXiv v2, Theorem 3.4, Corollary 1.2), and independently, with a weaker bound, [[Ana26 - Non-Local Search-to-Decision Reduction over F2, and More|Ana26]] (arXiv v2, Theorem 3.1, Corollary 1.3).
- No deterministic scheme is unclonable-indistinguishable, where a scheme is deterministic if $\Enc(k, \cdot)$ applies a unitary $U_k$ to the message and ancilla qubits in state $|0\rangle$, giving a pure ciphertext, and $\Dec(k, \cdot)$ applies $U_k^\dagger$ and measures: a single unbounded cloning adversary wins the unclonable-indistinguishability game against every such scheme with probability at least $0.568$ as $\secpar \to \infty$ — [[AKL+22 - On the Feasibility of Unclonable Encryption, and More|AKL+22]] (arXiv v1, Definition 3.1, Theorem 3.2). Conjugate coding is deterministic; the unclonable-indistinguishable schemes above randomize $\Enc$.
- Other plain-model results for one-bit messages are weaker: keyed by a unitary $2$-design, an efficient scheme with winning probability at most $1/2 + \tilde{O}(1/\secpar)$ — [[BC26 - Uncloneable Encryption from Decoupling|BC26]] (arXiv v4, Theorem 5.2); keyed by a Haar-random unitary on dimension $d$, a scheme that is not efficient, with winning probability at most $1/2 + O(d^{-1/8})$ — [[BBC26b - The uncloneable bit exists|BBC26b]] (arXiv v2, Theorem 17); a scheme whose decryption key is a quantum state — [[AKY25 - Simultaneous Haar Indistinguishability with Applications to Unclonable Cryptography|AKY25]] (arXiv v1, Theorem 21); and a scheme secure against efficient adversaries only, from post-quantum [[indistinguishability-obfuscation|iO]], [[hash-function#preimage-resistance-one-wayness|one-way functions]], compute-and-compare obfuscation and an unproven conjecture on simultaneous compute-and-compare obfuscation — [[CHV23 - Towards Unclonable Cryptography in the Plain Model|CHV23]] (arXiv v4, Conjecture 2, Corollary 5). A public-key scheme for multi-bit messages, secure against efficient adversaries, follows from sub-exponentially secure post-quantum iO and one-way functions, the quantum hardness of [[learning-with-errors|LWE]] and an unproven simultaneous inner-product conjecture — [[AB24 - A Modular Approach to Unclonable Cryptography|AB24]] (arXiv v3, Conjecture 14, Corollary 81).

<!-- BEGIN GENERATED participates-in 686046d7126d -->

## Participates in

**Produces Unclonable encryption**

- [[qrom-to-unclonable-encryption-akl22|QROM ⇒ unclonable-indistinguishable UE]] (via [[unclonable-encryption#unclonable-indistinguishability|Unclonable indistinguishability]])

<!-- END GENERATED participates-in -->
