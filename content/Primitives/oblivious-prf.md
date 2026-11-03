---
type: primitive
status: draft
aliases:
  - OPRF
  - Oblivious PRF
  - Oblivious pseudorandom function
title: Oblivious pseudorandom function
id: oprf
variants:
  malicious-oprf: "#malicious-security"
  verifiable-oprf: "#verifiable-oprf"
  uc-oprf: "#uc-secure-oprf"
  partially-oblivious-prf: "#partially-oblivious-prf"
---

# Oblivious pseudorandom function

An oblivious pseudorandom function (OPRF) is a [[pseudorandom-function|PRF]] together with a two-party protocol in which a server holding a key $k$ and a client holding an input $x$ securely compute the functionality $(k, x) \mapsto (\bot, \Eval(k, x))$: the client learns $\Eval(k, x)$ and nothing else, and the server learns nothing — [[FIPR05 - Keyword Search and Oblivious Pseudorandom Functions|FIPR05]].

## Syntax

An OPRF is a pair $(\PRF, \Pi)$ of a PRF $\PRF = (\KeyGen, \Eval)$ with key space $\calK$, domain $\calD$ and range $\calR$, and a [[interactive-protocol|two-party protocol]] $\Pi = (\Setup, S, R)$:

- $\Setup(1^\secpar) \to \pp$, a randomized algorithm generating public parameters, with $\pp = 1^\secpar$ in the plain model,
- $S$ (the server, or sender) and $R$ (the client, or receiver) are stateful interactive algorithms with:
  - $S$ input: a key $k \in \calK$,
  - $R$ input: $x \in \calD$,
  - $S$ output: $\bot$,
  - $R$ output: $y \in \calR \cup \{\bot\}$.

We write $\langle S(\pp, k), R(\pp, x) \rangle \to (\bot, y)$ and $f_\PRF(k, x) := (\bot, \Eval(k, x))$ for the functionality. The server samples its key as $k \gets \KeyGen(1^\secpar)$; the definitions below quantify over every $k \in \calK$.

## Properties

### Correctness

An OPRF $(\PRF, \Pi)$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$, $k \in \calK$ and $x \in \calD$,

$$
\Pr\!\left[y = \Eval(k, x)\right] \ge 1 - \varepsilon,
$$

where $\pp \gets \Setup(1^\secpar)$ and $(\bot, y) \gets \langle S(\pp, k), R(\pp, x) \rangle$. When $\varepsilon = 0$, $(\PRF, \Pi)$ is **perfectly correct**.

### Pseudorandomness

$\PRF$ is [[pseudorandom-function#security|pseudorandom]]: $\Adv^{\mathrm{prf}}_{\PRF,\calA}(\secpar)$ is negligible for all efficient $\calA$.

### Semi-honest security

The corrupted party $P \in \{S, R\}$ is fixed in advance, and the adversary chooses both inputs after seeing the reference string. In world $0$ it receives $P$'s [[interactive-protocol#view|view]] of a real execution together with the honest party's output; in world $1$ it receives the simulator's output on $P$'s input and output together with the honest party's output in an ideal execution of $f_\PRF$. In world $1$ the simulator also produces the reference string, as in [[secure-multi-party-computation#semi-honest-security|semi-honest MPC]]; in the plain model this is immaterial.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sh}}_{\Pi,\PRF,P,\Sim,\calA}(\secpar)$}
\begin{algorithmic}
\State $b \getsr \bits$; $\pp_0 \gets \Setup(1^\secpar)$; $\pp_1 \gets \Sim(1^\secpar)$
\Comment{$P \in \{S, R\}$ is the corrupted party; $\Sim$ is stateful}
\State $(k, x, \stA) \gets \calA(1^\secpar, \pp_b)$
\State Run $\langle S(\pp_0, k), R(\pp_0, x) \rangle$; let $y$ be $R$'s output and $\View_P$ be $P$'s view
\State $y^* := \Eval(k, x)$
\If{$P = S$}
\State $\mathit{out}_0 := (\View_S, y)$; $\mathit{out}_1 := (\Sim(k), y^*)$
\Else
\State $\mathit{out}_0 := \View_R$; $\mathit{out}_1 := \Sim(x, y^*)$
\EndIf
\State $b' \gets \calA(\stA, \mathit{out}_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An OPRF $(\PRF, \Pi)$ is **semi-honest secure** if $\PRF$ is pseudorandom and for each $P \in \{S, R\}$ there is an efficient $\Sim$ such that for all efficient $\calA$,

$$
\Adv^{\mathrm{sh}}_{\Pi,\PRF,P,\Sim,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sh}}_{\Pi,\PRF,P,\Sim,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. Up to pseudorandomness of $\PRF$, this is [[secure-multi-party-computation#semi-honest-two-party-computation|semi-honest two-party computation]] of $f_\PRF$: the server's view is simulated from $k$ alone, and the client's from $x$ and $\Eval(k, x)$.

### Malicious security

An OPRF $(\PRF, \Pi)$ has **malicious security** if $\PRF$ is pseudorandom and $\Pi$ securely computes $f_\PRF$ with abort against an efficient adversary that corrupts either party and deviates arbitrarily, in the sense of [[secure-multi-party-computation#security-with-abort|security with abort]] for $n = 2$ ([[secure-multi-party-computation#two-party-computation-2pc|2PC]]). In the ideal execution a corrupted server hands the trusted party a key $k' \in \calK$ of the simulator's choice and may then make the client output $\bot$, and a corrupted client hands it an input $x' \in \calD$ of the simulator's choice and receives $\Eval(k, x')$.

# Variations

## Verifiable OPRF

In a **verifiable OPRF** the server publishes a value that binds its key, and the client outputs either the function value under the bound key or $\bot$, so a malicious server cannot evaluate different inputs under different keys. [[JKK14 - Round-Optimal Password-Protected Secret Sharing and T-PAKE in the Password-Only Model|JKK14]] define verifiable OPRFs in the [[universal-composability-framework|UC framework]] and build one from the 2HashDH function below, the server publishing $g^k$ and proving in zero knowledge that its reply is computed with the same exponent.

## UC-secure OPRF

A **UC-secure OPRF** [[universal-composability-framework#uc-emulation|UC-realizes]] an OPRF functionality whose function is a random function sampled by the functionality, not a fixed PRF — [[JKKX16 - Highly-Efficient and Composable Password-Protected Secret Sharing (Or How to Protect Your Bitcoin Wallet Online)|JKKX16]]. For a group $\GG$ of prime order $p$ with generator $g$ and hash functions $H_1 : \bits^* \to \GG$ and $H_2$, the 2HashDH function is

$$
F_k(x) = H_2\!\left(x, H_1(x)^k\right), \qquad k \in \ZZ_p.
$$

The client sends $a = H_1(x)^r$ for $r \getsr \ZZ_p^*$, the server replies $b = a^k$, and the client outputs $H_2(x, b^{1/r})$. With $H_1$ and $H_2$ modeled as [[random-oracle-model|random oracles]], this protocol UC-realizes the OPRF functionality under the one-more Diffie–Hellman assumption: given $g^k$, a list of uniform elements of $\GG$ and an oracle $h \mapsto h^k$, no efficient adversary outputs $h^k$ for more elements $h$ of the list than it made oracle queries — [[JKKX16 - Highly-Efficient and Composable Password-Protected Secret Sharing (Or How to Protect Your Bitcoin Wallet Online)|JKKX16]].

## Partially oblivious PRF

In a **partially oblivious PRF** the input is a pair $(t, x)$ of which the server learns $t$ and nothing about $x$. [[ECSJR15 - The Pythia PRF Service|ECSJR15]] introduce verifiable partially oblivious PRFs and build one from a bilinear pairing.

# Other results

- Given a PRF, a protocol securely computing every two-party functionality, run on $f_\PRF$, is an OPRF: semi-honest 2PC gives a semi-honest secure OPRF ([[semi-honest-two-party-computation-and-prf-to-oprf|semi-honest 2PC + PRF ⇒ OPRF]]) and 2PC with abort an OPRF with malicious security ([[two-party-computation-and-prf-to-malicious-oprf|2PC + PRF ⇒ malicious OPRF]]) — folklore.
- A semi-honest secure OPRF gives semi-honest [[oblivious-transfer|OT]]: the sender masks $x_0$ and $x_1$ with $\Eval(k, z_0)$ and $\Eval(k, z_1)$, and the receiver obtains the mask of $x_c$ from the OPRF on input $z_c$ ([[oprf-to-ot|OPRF ⇒ OT]]) — folklore.
- [[FIPR05 - Keyword Search and Oblivious Pseudorandom Functions|FIPR05]] base their general protocols for keyword search, in which a client retrieves the database records associated with a keyword while the server learns nothing about the keyword, on OPRFs.
- [[FIPR05 - Keyword Search and Oblivious Pseudorandom Functions|FIPR05]] evaluate the Naor–Reingold PRF ([[ddh-to-prf-nr97|DDH ⇒ PRF]]) obliviously with one 1-out-of-2 [[oblivious-transfer|OT]] per input bit. For the key $(a_0, a_1, \ldots, a_n)$ and input $x \in \bits^n$, the server samples $r_1, \ldots, r_n \getsr \ZZ_p^*$, the client obtains $v_i = a_i^{x_i} r_i$ from the $i$-th OT with choice bit $x_i$, the server sends $g^{a_0 / \prod_i r_i}$, and the client raises it to $\prod_i v_i$, obtaining $g^{a_0 \prod_{i : x_i = 1} a_i}$.
- [[JL09 - Efficient Oblivious Pseudorandom Function with Applications to Adaptive OT and Secure Computation of Set Intersection|JL09]] give an OPRF for the Dodis–Yampolskiy PRF $x \mapsto g^{1/(k + x)}$ and apply it to adaptive oblivious transfer and to secure computation of set intersection.
- [[JKX18 - OPAQUE An Asymmetric PAKE Protocol Secure Against Pre-Computation Attacks|JKX18]] build strong [[password-authenticated-key-exchange#asymmetric-pake|asymmetric PAKE]], OPAQUE among them, from an OPRF.

<!-- BEGIN GENERATED participates-in dd5520031c94 -->

## Participates in

**Builds on Oblivious pseudorandom function**

- [[oprf-to-ot|OPRF ⇒ OT]]

**Produces Oblivious pseudorandom function**

- [[semi-honest-two-party-computation-and-prf-to-oprf|Semi-honest 2PC + PRF ⇒ OPRF]]
- [[two-party-computation-and-prf-to-malicious-oprf|2PC + PRF ⇒ Malicious OPRF]] (via [[oblivious-prf#malicious-security|Malicious security]])

<!-- END GENERATED participates-in -->
