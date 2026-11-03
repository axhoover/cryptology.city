---
type: primitive
status: draft
aliases:
  - Oblivious polynomial evaluation
title: Oblivious polynomial evaluation
id: ope
variants:
  malicious-ope: "#malicious-security"
---

# Oblivious polynomial evaluation

Oblivious polynomial evaluation (OPE) is a two-party protocol in which a sender holding a polynomial $P$ over a finite field $\FF$ and a receiver holding $\alpha \in \FF$ securely compute the functionality $(P, \alpha) \mapsto (\bot, P(\alpha))$: the receiver learns $P(\alpha)$ and nothing else about $P$, and the sender learns nothing about $\alpha$ — [[NP99 - Oblivious transfer and polynomial evaluation|NP99]].

## Syntax

An OPE for a finite field $\FF = \FF_\secpar$, whose elements have $\poly(\secpar)$-bit representations and whose operations are efficient, and a degree bound $d = d(\secpar) \ge 1$, a polynomial, is a [[interactive-protocol|two-party protocol]] $\Pi = (\Setup, S, R)$:

- $\Setup(1^\secpar) \to \pp$, a randomized algorithm generating public parameters, with $\pp = 1^\secpar$ in the plain model,
- $S$ (the sender) and $R$ (the receiver) are stateful interactive algorithms with:
  - $S$ input: a polynomial $P \in \FF[z]$ of degree at most $d$, given by its coefficients $(a_0, \ldots, a_d) \in \FF^{d+1}$,
  - $R$ input: $\alpha \in \FF$,
  - $S$ output: $\bot$,
  - $R$ output: $y \in \FF \cup \{\bot\}$.

We write $\langle S(\pp, P), R(\pp, \alpha) \rangle \to (\bot, y)$ and $f_{\mathrm{OPE}}(P, \alpha) := (\bot, P(\alpha))$ for the functionality. $\FF$ and $d$ are public.

## Properties

### Correctness

An OPE $\Pi$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$, all $P \in \FF[z]$ of degree at most $d$ and all $\alpha \in \FF$,

$$
\Pr\!\left[y = P(\alpha)\right] \ge 1 - \varepsilon,
$$

where $\pp \gets \Setup(1^\secpar)$ and $(\bot, y) \gets \langle S(\pp, P), R(\pp, \alpha) \rangle$. When $\varepsilon = 0$, $\Pi$ is **perfectly correct**.

### Semi-honest security

The corrupted party $C \in \{S, R\}$ is fixed in advance and runs $\Pi$ honestly, and the adversary chooses both inputs after seeing the reference string. In world $0$ it receives $C$'s [[interactive-protocol#view|view]] of a real execution together with the honest party's output; in world $1$ it receives the simulator's output on $C$'s input and output together with the honest party's output in an ideal execution of $f_{\mathrm{OPE}}$. In world $1$ the simulator also produces the reference string, as in [[secure-multi-party-computation#semi-honest-security|semi-honest MPC]]; in the plain model this is immaterial.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sh}}_{\Pi,C,\Sim,\calA}(\secpar)$}
\begin{algorithmic}
\State $b \getsr \bits$; $\pp_0 \gets \Setup(1^\secpar)$; $\pp_1 \gets \Sim(1^\secpar)$
\Comment{$C \in \{S, R\}$ is the corrupted party; $\Sim$ is stateful}
\State $(P, \alpha, \stA) \gets \calA(1^\secpar, \pp_b)$
\Comment{Admissible: $P \in \FF[z]$, $\deg P \le d$, $\alpha \in \FF$}
\State Run $\langle S(\pp_0, P), R(\pp_0, \alpha) \rangle$; let $y$ be $R$'s output and $\View_C$ be $C$'s view
\If{$C = S$}
\State $\mathit{out}_0 := (\View_S, y)$; $\mathit{out}_1 := (\Sim(P), P(\alpha))$
\Else
\State $\mathit{out}_0 := \View_R$; $\mathit{out}_1 := \Sim(\alpha, P(\alpha))$
\EndIf
\State $b' \gets \calA(\stA, \mathit{out}_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An OPE $\Pi$ is **semi-honest secure** if for each $C \in \{S, R\}$ there is an efficient $\Sim$ such that for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{sh}}_{\Pi,C,\Sim,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sh}}_{\Pi,C,\Sim,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. This is [[secure-multi-party-computation#semi-honest-two-party-computation|semi-honest two-party computation]] of $f_{\mathrm{OPE}}$.

### Malicious security

An OPE $\Pi$ has **malicious security** if it securely computes $f_{\mathrm{OPE}}$ with abort against $t = 1$ corruptions, in the sense of [[secure-multi-party-computation#security-with-abort|security with abort]] for $n = 2$ ([[secure-multi-party-computation#two-party-computation-2pc|2PC]]): for all efficient $\calA$ corrupting at most one party and deviating arbitrarily there is an efficient $\Sim$ such that for all efficient $\calD$, $\Adv^{\mathrm{mpc}}_{\Pi,f_{\mathrm{OPE}},\calA,\Sim,\calD}(\secpar)$ is negligible. In the ideal execution a corrupted sender hands the trusted party a polynomial $P'$ of degree at most $d$ of the simulator's choice and may then make the receiver output $\bot$, and a corrupted receiver hands it an input $\alpha' \in \FF$ of the simulator's choice and receives $P(\alpha')$.

# Variations

## Oblivious linear evaluation

The case $d = 1$: the sender holds $(a, b) \in \FF^2$, the receiver holds $\alpha \in \FF$ and learns $a \alpha + b$. It is called **oblivious linear evaluation (OLE)**. Over $\FF_2$, the sender pair $(x_0 \oplus x_1, x_0)$ and the receiver input $c \in \bits$ give $x_c$, a 1-out-of-2 [[oblivious-transfer|OT]] of bits ([[ope-to-ot|OPE ⇒ OT]]).

# Other results

- The general protocol run on $f_{\mathrm{OPE}}$ is a semi-honest secure OPE when it comes from [[secure-multi-party-computation#semi-honest-two-party-computation|semi-honest 2PC]] ([[semi-honest-two-party-computation-to-ope|semi-honest 2PC ⇒ OPE]]) and one with malicious security when it comes from [[secure-multi-party-computation#two-party-computation-2pc|2PC]] ([[two-party-computation-to-malicious-ope|2PC ⇒ malicious OPE]]) — folklore. Semi-honest OT therefore gives semi-honest OPE without further assumptions ([[ot-to-semi-honest-security-gmw87|semi-honest OT ⇒ semi-honest MPC]]) — [[GMW87 - How to play ANY mental game|GMW87]], [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]].
- Semi-honest OPE with $d \ge 1$ gives semi-honest [[oblivious-transfer|OT]] with message space $\FF$: the sender inputs $P(z) = x_0 + (x_1 - x_0) z$ and the receiver inputs its choice bit $c \in \{0, 1\} \subseteq \FF$, learning $P(c) = x_c$ ([[ope-to-ot|OPE ⇒ OT]]) — folklore.
- [[NP99 - Oblivious transfer and polynomial evaluation|NP99]] construct OPE from [[oblivious-transfer|OT]] under a hardness assumption on noisy polynomial interpolation. The receiver hides $\alpha$ as $H(0)$ for a random polynomial $H$ and sends points of which some lie on the graph of $H$ and the others are random; the sender hides $P$ in a random bivariate polynomial $Q$ with $Q(0, \cdot) = P$; by OT the receiver learns the values of $Q$ at the points on the graph of $H$ only, and interpolates the univariate polynomial $z \mapsto Q(z, H(z))$ at $0$, obtaining $Q(0, H(0)) = P(\alpha)$. The assumption is that the points hide $H(0)$.
- Noisy polynomial interpolation asks, given distinct $x_1, \ldots, x_n \in \FF$ and sets $T_1, \ldots, T_n \subseteq \FF$ of $m$ elements each, $T_i$ consisting of $H(x_i)$ for a hidden polynomial $H$ of degree $k < n - 1$ and $m - 1$ random elements, to find $H$. [[BN00a - Noisy Polynomial Interpolation and Noisy Chinese Remaindering|BN00a]] reduce it to the lattice shortest vector problem when the parameters satisfy a condition they make explicit, and standard lattice reduction appears to solve many instances, so the problem is easier than expected; they suggest modifying the schemes based on it so that they rest on a different intractability assumption.
- An [[homomorphic-encryption#additively-homomorphic-encryption|additively homomorphic encryption]] scheme with message space $\ZZ_M$, whose ciphertexts the sender can rerandomize from $\pk$ to fresh encryptions of the same plaintext, gives semi-honest OPE over $\ZZ_M$, the functionality above with the ring $\ZZ_M$ in place of $\FF$: the receiver sends $\pk$ and encryptions of $\alpha, \alpha^2, \ldots, \alpha^d$, and the sender computes an encryption of $P(\alpha)$ homomorphically, rerandomizes it and returns it for the receiver to decrypt — folklore. IND-CPA security hides $\alpha$ from the sender, and the returned ciphertext is a fresh encryption of $P(\alpha)$. Paillier's scheme, with message space $\ZZ_N$ — [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]] — is rerandomized by multiplying a ciphertext by $r^N \bmod N^2$ for a uniform $r \in \ZZ_N^*$ — standard.

<!-- BEGIN GENERATED participates-in 0d5d188a7f0b -->

## Participates in

**Builds on Oblivious polynomial evaluation**

- [[ope-to-ot|OPE ⇒ OT]]

**Produces Oblivious polynomial evaluation**

- [[semi-honest-two-party-computation-to-ope|Semi-honest 2PC ⇒ OPE]]
- [[two-party-computation-to-malicious-ope|2PC ⇒ Malicious OPE]] (via [[oblivious-polynomial-evaluation#malicious-security|Malicious security]])

<!-- END GENERATED participates-in -->
