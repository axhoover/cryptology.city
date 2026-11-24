---
type: primitive
status: draft
aliases:
  - OT
  - Oblivious Transfer
title: Oblivious transfer
id: ot
variants:
  ideal-ot: "#ideal-ot-functionality"
  malicious-ot-security: "#malicious-security"
  one-out-of-n-ot: "#k-out-of-n-ot"
  ot-extension: "#ot-extension"
  rabin-ot: "#rabin-ot"
  random-ot: "#random-ot"
  string-ot: "#string-ot"
  two-round-ot: "#two-round-ot"
  two-round-uc-ot: "#two-round-uc-secure-ot"
  uc-ot: "#uc-secure-ot"
  four-round-ot: "#four-round-ot"
  malicious-ot-with-expected-time-simulation: "#malicious-security-with-expected-polynomial-time-simulation"
---

# Oblivious transfer

**Oblivious Transfer (OT)** is a two-party protocol between a **sender** $S$ and a **receiver** $R$. In the basic 1-out-of-2 variant, the sender holds two messages and the receiver holds a choice bit; at the end, the receiver learns the chosen message while the sender learns nothing about the choice, and the receiver learns nothing about the unchosen message.

## Syntax

A 1-out-of-2 OT is a pair $\OT = (\Setup, \langle S, R \rangle)$ with message
space $\calM$, $|\calM| \ge 2$, following the [[interactive-protocol|two-party protocol]] syntax:

- $\Setup(1^\secpar) \to \pp,$ is a randomized algorithm generating public parameters,
- $S$ and $R$ are stateful interactive algorithms with:
  - $S$ input: a pair of messages $(x_0, x_1) \in \calM^2,$
  - $R$ input: a choice bit $c \in \bits,$
  - $S$ output: $\bot,$
  - $R$ output: an element of $\calM \cup \{\bot\}.$

We write $\langle S(\pp, x_0, x_1), R(\pp, c) \rangle \to (\bot, \mathsf{out}_R).$

## Properties

### Correctness

An OT $\OT$ is $(1-\varepsilon)$-**correct** if for all $x_0, x_1 \in \calM$ and $c \in \bits$,

$$
\Pr\!\left[\mathsf{out}_R = x_c\right] \ge 1 - \varepsilon,
$$

where $\pp \gets \Setup(1^\secpar)$ and $(\bot, \mathsf{out}_R) \gets \langle S(\pp, x_0, x_1), R(\pp, c) \rangle.$ When $\varepsilon = 0,$ we say $\OT$ is **perfectly correct**.

### Sender Privacy

The receiver should not learn the unchosen message $x_{1-c}$. The adversary commits to a choice bit $c$ and two sender input pairs that agree on the chosen value ($x_c = x_c'$); after observing the honest receiver's view, it tries to determine which pair the sender used.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{s-priv}}_{\OT,\calA}(\secpar)$}
\begin{algorithmic}
\State $\pp \gets \Setup(1^\secpar)$
\State $(c, x_0, x_1, x_0', x_1', \stA) \gets \calA(1^\secpar, \pp)$
\Comment{Admissible: $x_c = x_c'$}
\State $(x_0^{(0)}, x_1^{(0)}) := (x_0, x_1)$; $(x_0^{(1)}, x_1^{(1)}) := (x_0', x_1')$
\State $b \getsr \bits$
\State Run $\langle S(\pp, x_0^{(b)}, x_1^{(b)}), R(\pp, c) \rangle$; let $\View_R$ denote R's view
\State $b' \gets \calA(\View_R, \stA)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An OT $\OT$ has **sender-private (or message hiding)** if for all
efficient admissible $\calA$,

$$
\Adv^{\text{s-priv}}_{\OT,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\text{s-priv}}_{\OT,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. Because $x_c = x_c'$, correctness gives the receiver the output $x_c$ in both worlds, up to the correctness error; any distinguishing advantage must come from the rest of the view.

### Receiver Privacy

The sender should not learn the receiver's choice bit $c$. The adversary commits to sender inputs $(x_0, x_1)$; after observing the honest sender's view, it tries to determine which bit the receiver chose.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{r-priv}}_{\OT,\calA}(\secpar)$}
\begin{algorithmic}
\State $\pp \gets \Setup(1^\secpar)$
\State $(x_0, x_1, \stA) \gets \calA(1^\secpar, \pp)$
\State $c \getsr \bits$
\State Run $\langle S(\pp, x_0, x_1), R(\pp, c) \rangle$; let $\View_S$ denote S's view
\State $c' \gets \calA(\View_S, \stA)$
\Return $[c' = c]$
\end{algorithmic}
\end{algorithm}
```

An OT $\OT$ has **receiver-private (or choice-hiding)** if for all
efficient $\calA$,

$$
\Adv^{\text{r-priv}}_{\OT,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\text{r-priv}}_{\OT,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

### Ideal OT functionality

The ideal 1-out-of-2 OT functionality $\calF_{\mathrm{OT}}$ receives $(x_0, x_1) \in \calM^2$ from $S$ and $c \in \bits$ from $R$, sends $x_c$ to $R$ and sends nothing to $S$. In the OT-hybrid model the parties of a protocol may call $\calF_{\mathrm{OT}}$ between any two of them, any number of times, as a trusted subroutine.

### Malicious Security

The sender- and receiver-privacy definitions are **semi-honest**: both parties follow the protocol honestly, and security holds against a party that tries to learn extra information from its view. An OT $\OT$ has **malicious security** if it is $(1-\negl(\secpar))$-[[#Correctness|correct]] and for every efficient $\calA$ corrupting one of $S$ and $R$ and deviating from the protocol arbitrarily there is an efficient simulator $\Sim$ such that, for all $x_0, x_1 \in \calM$ and $c \in \bits$, the output of $\calA$ together with the honest party's output in a real execution is computationally indistinguishable from the output of $\Sim$ together with the honest party's output in an ideal execution. There the honest party hands its input to $\calF_{\mathrm{OT}}$, $\Sim$ hands it an input of its choice for the corrupted party, $\calF_{\mathrm{OT}}$ returns $x_c$ to $R$ for the resulting $(x_0, x_1)$ and $c$, and $\Sim$ also produces $\pp$ — [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]]. The semi-honest games do not carry over by letting $\calA$ deviate: in the sender-privacy game a malicious receiver can announce $c$ and run $R$ on $1 - c$, so the simulator must extract the choice bit a malicious receiver effectively uses — standard. As for [[secure-multi-party-computation#security-with-abort|MPC]], the case with no corrupted party is covered by correctness, not by the simulation game, which would then ask that the transcript be simulatable without either input — standard.

The ideal execution has no abort: $R$ receives $x_c$ whatever a corrupted sender does. A protocol that meets the definition with the weaker ideal execution in which $\Sim$, for a corrupted sender, may also make $R$ output $\bot$, as in [[secure-multi-party-computation#security-with-abort|security with abort]], has malicious security once $R$ outputs the $c$-th entry of a fixed default pair in place of $\bot$: for a corrupted sender $\Sim$ receives nothing from $\calF_{\mathrm{OT}}$, so whether it aborts does not depend on $c$, and it hands $\calF_{\mathrm{OT}}$ the default pair in place of the abort; for a corrupted receiver an abort changes nothing, since $S$ outputs $\bot$ either way — standard.

As an object, OT denotes a $(1-\negl(\secpar))$-[[#Correctness|correct]] protocol, with $\Setup$, $S$ and $R$ PPT, that has [[#Sender Privacy|sender privacy]] and [[#Receiver Privacy|receiver privacy]].

# Variations

## Rabin OT

In **Rabin OT**, introduced by [[Rab81]], the sender transmits a bit $x$ that the receiver obtains with probability $1/2$, without the sender learning whether it did. A Rabin OT is a protocol $(\Setup, \langle S, R \rangle)$ with $\Setup(1^\secpar) \to \pp$, in which $S$ has input $x \in \bits$ and output $\bot$, and $R$ has no input and output $y \in \{0, 1, \bot\}$; we write $\langle S(\pp, x), R(\pp) \rangle \to (\bot, y)$.

**Correctness.** For each $x \in \bits$, with $\pp \gets \Setup(1^\secpar)$ and $(\bot, y) \gets \langle S(\pp, x), R(\pp) \rangle$, both $\left|\Pr[y = \bot] - 1/2\right|$ and $\Pr[y \notin \{x, \bot\}]$ are negligible, and $\Pr[y = \bot]$ is the same for $x = 0$ and $x = 1$.

**Receiver privacy.** The sender does not learn whether the receiver obtained $x$:

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{rabin-r-priv}}_{\OT,\calA}(\secpar)$}
\begin{algorithmic}
\State $\pp \gets \Setup(1^\secpar)$
\State $(x, \stA) \gets \calA(1^\secpar, \pp)$
\State Run $\langle S(\pp, x), R(\pp) \rangle \to (\bot, y)$; let $\View_S$ denote S's view
\State $b := [y = \bot]$
\State $b' \gets \calA(\View_S, \stA)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A Rabin OT has **receiver privacy** if for all efficient $\calA$, $\Adv^{\text{rabin-r-priv}}_{\OT,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\text{rabin-r-priv}}_{\OT,\calA}(\secpar) = 1\right] - 1\right|$ is negligible. Given correctness, $b$ is within negligible distance of a uniform bit, so this is equivalent to $\left|\Pr[\calA(\View_S) = 1 \mid y = \bot] - \Pr[\calA(\View_S) = 1 \mid y \ne \bot]\right|$ being negligible — standard.

**Sender privacy.** A receiver that obtained $\bot$ learns nothing about $x$:

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{rabin-s-priv}}_{\OT,\calA}(\secpar)$}
\begin{algorithmic}
\State $\pp \gets \Setup(1^\secpar)$; $x \getsr \bits$
\State Run $\langle S(\pp, x), R(\pp) \rangle \to (\bot, y)$; let $\View_R$ denote R's view
\If{$y = \bot$}
\State $x' \gets \calA(\View_R)$
\Else
\State $x' \getsr \bits$
\Comment{only executions with $y = \bot$ count}
\EndIf
\Return $[x' = x]$
\end{algorithmic}
\end{algorithm}
```

A Rabin OT has **sender privacy** if for all efficient $\calA$, $\Adv^{\text{rabin-s-priv}}_{\OT,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\text{rabin-s-priv}}_{\OT,\calA}(\secpar) = 1\right] - 1\right|$ is negligible. Since $\Pr[y = \bot]$ does not depend on $x$, the advantage equals $\Pr[y = \bot] \cdot \left|\Pr[\calA(\View_R) = 1 \mid x = 1, y = \bot] - \Pr[\calA(\View_R) = 1 \mid x = 0, y = \bot]\right|$ — standard.

As an object, Rabin OT denotes a protocol, with $\Setup$, $S$ and $R$ PPT, that has correctness, receiver privacy and sender privacy. Rabin OT and 1-out-of-2 OT on bits are equivalent ([[rabin-ot-to-ot|Rabin OT ⇔ OT]]) — [[Cre87 - Equivalence Between Two Flavours of Oblivious Transfers|Cre87]].

## $k$-out-of-$n$ OT

A generalization where the sender holds $n$ messages $(x_1, \ldots, x_n)$ and the receiver chooses a set $S \subseteq [n]$ of size $k$, learning $\{x_i : i \in S\}$ while the sender learns nothing about $S$.

Single-server [[single-server-private-information-retrieval#Symmetric private information retrieval (Single-server)|SPIR]] is 1-out-of-$n$ OT with total communication at most $p(\secpar) \cdot n^c$ for a polynomial $p$ and a constant $c < 1$, so it implies 1-out-of-$n$ OT — folklore; the converse is not known ([[symmetric-private-information-retrieval-single-server-to-ot|SPIR ⇒ OT]]).

## String OT

An OT **for strings of length $\ell$**, for a length function $\ell = \ell(\secpar)$, is an OT with message space $\calM = \bits^{\ell(\secpar)}$. As an object, string OT denotes, for every $\ell$ with $1 \le \ell(\secpar) \le \poly(\secpar)$ that is computable from $1^\secpar$ in polynomial time, a $(1-\negl(\secpar))$-[[#Correctness|correct]] OT for strings of length $\ell$, with $\Setup$, $S$ and $R$ PPT, that has [[#Sender Privacy|sender privacy]] and [[#Receiver Privacy|receiver privacy]]. The length is quantified before the protocol, and over every polynomially bounded length computable in polynomial time, because a construction may fix it from another primitive: Yao's protocol transfers the input labels of a garbling scheme ([[gc-and-ot-to-two-party-computation-2pc|GC + String OT ⇒ Semi-honest 2PC (Yao)]]). One execution of an OT on bits per bit of the strings, in parallel under one choice bit, gives a string OT ([[ot-to-string-ot|OT ⇒ String OT]]), and a string OT at length $1$ is an OT ([[string-ot-to-ot|String OT ⇒ OT]]) — folklore.

## OT Extension

An **OT extension** is a protocol that, on input $1^m$, runs a 1-out-of-2 OT protocol, the **base OTs**, at most $k(\secpar)$ times, for a polynomial $k$ fixed independently of $m$, and that for every polynomial $m = m(\secpar)$ is a $(1-\negl(\secpar))$-correct protocol for $m$ 1-out-of-2 transfers with semi-honest sender and receiver privacy for the vector of transfers. These are the [[#Sender Privacy|sender-privacy]] and [[#Receiver Privacy|receiver-privacy]] games for message vectors $x_0 = (x_{0,i})_{i \in [m]}$ and $x_1 = (x_{1,i})_{i \in [m]}$ in $\calM^m$ and a choice vector $c \in \bits^m$, the $i$-th transfer delivering $x_{c_i,i}$. In the sender game $\calA$ commits to $c$ and to two pairs of message vectors with $x_{c_i,i} = x'_{c_i,i}$ for every $i \in [m]$; in the receiver game $\calA$ commits to $(x_0, x_1)$ and to two choice vectors $c^{(0)}, c^{(1)} \in \bits^m$, the protocol runs on $c^{(b)}$ for a uniform bit $b$, and $\calA$ guesses $b$. As an object, OT extension denotes such a protocol.

The point of OT extension is the cost of the computation outside the base OTs, which each result states. [[Bea96 - Correlated Pseudorandomness and the Complexity of Private Computations|Bea96]] uses $\secpar$ base transfers and a one-way function, through its code ([[ot-and-owf-to-ot-extension-bea96|OT + OWF ⇒ OT extension (Beaver)]]); in the random-oracle model, [[IKNP03 - Extending Oblivious Transfers Efficiently|IKNP03]] use $\kappa$ base transfers, for the security parameter $\kappa$, and a constant number of hash evaluations per extended transfer ([[ot-to-ot-extension-iknp03|OT ⇒ OT extension (IKNP)]]).

## Random OT

In a **random OT** the parties have no inputs. For message space $\bits^\ell$, with $\ell = \ell(\secpar) \ge 1$ a polynomial, a random OT is a protocol $(\Setup, \langle S, R \rangle)$ with $\Setup(1^\secpar) \to \pp$ and $\langle S(\pp), R(\pp) \rangle \to ((x_0, x_1), (c, z))$: the sender outputs $x_0, x_1 \in \bits^\ell$ and the receiver outputs $c \in \bits$ and $z \in \bits^\ell$.

**Correctness.** With $\pp \gets \Setup(1^\secpar)$, the joint output $(x_0, x_1, c, z)$ is within negligible statistical distance of $(u_0, u_1, b, u_b)$ for independent uniform $u_0, u_1 \in \bits^\ell$ and $b \in \bits$.

**Sender privacy.** The unchosen string is pseudorandom given the receiver's view:

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{rot-s-priv}}_{\OT,\calA}(\secpar)$}
\begin{algorithmic}
\State $\pp \gets \Setup(1^\secpar)$; $b \getsr \bits$
\State Run $\langle S(\pp), R(\pp) \rangle \to ((x_0, x_1), (c, z))$; let $\View_R$ denote R's view
\State $w_0 := x_{1-c}$; $w_1 \getsr \bits^\ell$
\State $b' \gets \calA(\View_R, w_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A random OT has **sender privacy** if for all efficient $\calA$, $\Adv^{\text{rot-s-priv}}_{\OT,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\text{rot-s-priv}}_{\OT,\calA}(\secpar) = 1\right] - 1\right|$ is negligible.

**Receiver privacy.** The choice bit is pseudorandom given the sender's view:

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{rot-r-priv}}_{\OT,\calA}(\secpar)$}
\begin{algorithmic}
\State $\pp \gets \Setup(1^\secpar)$; $b \getsr \bits$
\State Run $\langle S(\pp), R(\pp) \rangle \to ((x_0, x_1), (c, z))$; let $\View_S$ denote S's view
\State $\beta_0 := c$; $\beta_1 \getsr \bits$
\State $b' \gets \calA(\View_S, \beta_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A random OT has **receiver privacy** if for all efficient $\calA$, $\Adv^{\text{rot-r-priv}}_{\OT,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\text{rot-r-priv}}_{\OT,\calA}(\secpar) = 1\right] - 1\right|$ is negligible.

As an object, random OT denotes a protocol, with $\Setup$, $S$ and $R$ PPT, that has correctness, sender privacy and receiver privacy. Random OT can be converted to standard OT with one message from each party, the receiver's first ([[random-ot-to-ot|Random OT ⇒ OT]]) — [[Bea95 - Precomputing Oblivious Transfer|Bea95]].

## Two-round OT

A **two-round OT** is a $(1-\negl(\secpar))$-[[#Correctness|correct]] OT $\OT$ with [[#Sender Privacy|sender privacy]] and [[#Receiver Privacy|receiver privacy]] whose interaction is one message each way: the receiver computes $(m_R, \st_R) \gets R_1(\pp, c)$ and sends $m_R$, the sender replies with $m_S \gets S(\pp, x_0, x_1, m_R)$, and the receiver outputs $R_2(\st_R, m_S)$. $\Setup$ is as in the syntax above, so a common reference string is allowed. Two-round OT is necessary and sufficient for two-round MPC secure against semi-honest adversaries corrupting any number of parties ([[two-round-ot-to-two-round-semi-honest-mpc-gs18|Two-round OT ⇒ Two-round semi-honest MPC (Garg–Srinivasan, Benhamouda–Lin)]], [[two-round-semi-honest-mpc-to-two-round-ot|Two-round semi-honest MPC ⇒ Two-round OT]]) — [[BL18 - k-Round Multiparty Computation from k-Round Oblivious Transfer via Garbled Interactive Circuits|BL18]], [[GS18 - Two-Round Multiparty Secure Computation from Minimal Assumptions|GS18]].

## UC-secure OT

The **UC version of $\calF_{\mathrm{OT}}$** receives $(x_0, x_1) \in \calM^2$ from $S$ and $c \in \bits$ from $R$, tells $\Sim$ that an output is pending, and delivers $x_c$ to $R$ as a private delayed output when $\Sim$ instructs it to; $S$ receives nothing — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]. It differs from the [[#Ideal OT functionality|ideal OT functionality]] only in the delayed delivery. An OT protocol is **UC-secure** if, in the common reference string model with $\pp \gets \Setup(1^\secpar)$ as the reference string, it [[universal-composability-framework#uc-emulation|UC-realizes]] the UC version of $\calF_{\mathrm{OT}}$ against a malicious adversary that statically corrupts at most one party — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]] — and is non-trivial: if neither party is corrupted and every message is delivered, $R$ outputs $x_c$ except with negligible probability — [[CLOS02 - Universally Composable Two-Party and Multi-Party Secure Computation|CLOS02]]. Non-triviality excludes the protocol that never sends a message, which UC-realizes the UC version of $\calF_{\mathrm{OT}}$ with a simulator that never instructs delivery — standard. UC security implies stand-alone [[#Malicious Security|malicious security]], once the receiver outputs a default value when the execution gives it no output ([[uc-ot-to-malicious-ot-security|UC-secure OT ⇒ Malicious OT]]), and by the composition theorem a UC-secure protocol can replace the UC version of $\calF_{\mathrm{OT}}$ in any protocol in its hybrid model — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]. A UC-secure protocol also has sender and receiver privacy with the same reference string, since a UC environment can choose the inputs after learning the reference string through the adversary ([[uc-ot-to-ot|UC-secure OT ⇒ OT]]) — folklore.

## Two-round UC-secure OT

A **two-round UC-secure OT** is a [[#UC-secure OT|UC-secure OT]] protocol whose interaction is one message from the receiver followed by one message from the sender, as in [[#Two-round OT|two-round OT]]. The dual-mode protocols of [[PVW08 - A Framework for Efficient and Composable Oblivious Transfer|PVW08]], from DDH, QR or LWE ([[ddh-to-malicious-ot-security-pvw08|DDH ⇒ Two-round UC-secure OT (PVW)]], [[qr-to-malicious-ot-security-pvw08|QR ⇒ Two-round UC-secure OT (PVW)]], [[lwe-to-malicious-ot-security-pvw08|LWE ⇒ Two-round UC-secure OT (PVW)]]), and the protocol of [[DGHMW20 - Two-Round Oblivious Transfer from CDH or LPN|DGHMW20]], from CDH ([[cdh-to-uc-ot-dghmw20|CDH ⇒ Two-round UC-secure OT (DGHMW)]]), are two-round UC-secure OT protocols. Two-round malicious OT in the common reference string model gives two-round MPC secure with abort against a malicious adversary corrupting any number of parties ([[two-round-uc-ot-to-two-round-mpc-gs18|Two-round UC OT ⇒ Two-round MPC in the CRS model (Garg–Srinivasan)]]) — [[GS18 - Two-Round Multiparty Secure Computation from Minimal Assumptions|GS18]].

## Malicious security with expected polynomial-time simulation

[[#Malicious Security|Malicious security]] with a simulator $\Sim$ that need only run in expected polynomial time, with $\calA$ and the distinguisher efficient as before. Malicious security implies it by the identity map ([[malicious-ot-security-to-malicious-ot-with-expected-time-simulation|malicious OT ⇒ malicious OT with expected-time simulation]]) — folklore; the converse is not an identity, as for [[secure-multi-party-computation#expected-polynomial-time-simulation|MPC with expected polynomial-time simulation]].

## Four-round OT

A **four-round OT** is a $(1-\negl(\secpar))$-[[#Correctness|correct]] OT protocol with [[#Malicious security with expected polynomial-time simulation|malicious security with expected polynomial-time simulation]] in the plain model, $\Setup$ outputting $\pp = 1^\secpar$, whose interaction is four messages sent alternately by the receiver and the sender, the receiver first, and whose simulator is black-box: an oracle algorithm $\Sim$, running in expected polynomial time, such that for every efficient $\calA$ corrupting either party the simulator $\Sim^{\calA}$, which runs $\calA$ only as an oracle and may rewind it, meets the definition. It has [[#Malicious security with expected polynomial-time simulation|malicious security with expected polynomial-time simulation]], by the identity map ([[four-round-ot-to-malicious-ot-security|four-round OT ⇒ malicious OT with expected-time simulation]]) — folklore. Four-round OT gives four-round MPC against a malicious adversary corrupting any number of parties ([[four-round-ot-to-four-round-mpc-ccg20|four-round OT ⇒ four-round MPC]]) — [[CCG+20 - Round Optimal Secure Multiparty Computation from Minimal Assumptions|CCG+20]].

# Other results

- [[cpir-to-ot-dmo00|cPIR with total communication below n ⇒ OT]]
- [[ot-to-com|Malicious OT ⇒ COM (Kilian)]]
- [[ot-to-mpc-kil88|Ideal OT ⇒ 2PC (Kilian)]]

<!-- BEGIN GENERATED participates-in e8b4df2bfb38 -->

## Participates in

**Builds on Oblivious transfer**

- [[four-round-ot-to-four-round-mpc-ccg20|Four-round OT ⇒ Four-round MPC (Choudhuri–Ciampi–Goyal–Jain–Ostrovsky)]] (via [[oblivious-transfer#four-round-ot|Four-round OT]])
- [[four-round-ot-to-malicious-ot-security|Four-round OT ⇒ Malicious OT with expected-time simulation]] (via [[oblivious-transfer#four-round-ot|Four-round OT]])
- [[gc-and-ot-to-two-party-computation-2pc|GC + String OT ⇒ Semi-honest 2PC (Yao)]] (via [[oblivious-transfer#string-ot|String OT]])
- [[ideal-ot-and-prg-to-uc-mpc-ips08|Ideal OT + PRG ⇒ UC MPC (IPS)]] (via [[oblivious-transfer#ideal-ot-functionality|Ideal OT functionality]])
- [[ideal-ot-to-com-kil88|Ideal OT ⇒ COM (Kilian)]] (via [[oblivious-transfer#ideal-ot-functionality|Ideal OT functionality]])
- [[ot-to-mpc-kil88|Ideal OT ⇒ 2PC (Kilian)]] (via [[oblivious-transfer#ideal-ot-functionality|Ideal OT functionality]])
- [[malicious-ot-security-to-malicious-ot-with-expected-time-simulation|Malicious OT ⇒ Malicious OT with expected-time simulation]] (via [[oblivious-transfer#malicious-security|Malicious Security]])
- [[malicious-ot-security-to-two-party-computation-lp07|Malicious OT ⇒ 2PC by cut-and-choose (Lindell–Pinkas)]] (via [[oblivious-transfer#malicious-security|Malicious Security]])
- [[ot-and-owf-to-ot-extension-bea96|OT + OWF ⇒ OT extension (Beaver)]]
- [[ot-extension-to-mpc-with-preprocessing-spdz-etc|OT Extension ⇒ MPC with preprocessing (SPDZ, etc.)]] (via [[oblivious-transfer#ot-extension|OT Extension]])
- [[ot-to-com|Malicious OT ⇒ COM (Kilian)]] (via [[oblivious-transfer#malicious-security|Malicious Security]])
- [[ot-to-ke|OT ⇒ KE]]
- [[ot-to-malicious-ot-security-hai08|Semi-honest OT ⇒ Malicious OT (Haitner)]]
- [[ot-to-mpc-hiklp10|Semi-honest OT ⇒ MPC (HIKLP)]]
- [[ot-to-optimally-fair-coin-flipping-mns09|OT ⇒ Optimally fair coin flipping (Moran–Naor–Segev)]]
- [[ot-to-ot-extension-iknp03|String OT ⇒ OT extension (IKNP)]] (via [[oblivious-transfer#string-ot|String OT]])
- [[ot-to-semi-honest-security-gmw87|Semi-honest OT ⇒ Semi-honest MPC (GMW)]]
- [[ot-to-string-ot|OT ⇒ String OT]]
- [[rabin-ot-to-ot|Rabin OT ⇔ OT]] (via [[oblivious-transfer#rabin-ot|Rabin OT]])
- [[random-ot-to-ot|Random OT ⇒ OT]] (via [[oblivious-transfer#random-ot|Random OT]])
- [[string-ot-to-ot|String OT ⇒ OT]] (via [[oblivious-transfer#string-ot|String OT]])
- [[two-round-ot-to-ot|Two-round OT ⇒ OT]] (via [[oblivious-transfer#two-round-ot|Two-round OT]])
- [[two-round-ot-to-two-round-semi-honest-mpc-gs18|Two-round OT ⇒ Two-round semi-honest MPC (Garg–Srinivasan, Benhamouda–Lin)]] (via [[oblivious-transfer#two-round-ot|Two-round OT]])
- [[two-round-uc-ot-to-two-round-mpc-gs18|Two-round UC OT ⇒ Two-round MPC in the CRS model (Garg–Srinivasan)]] (via [[oblivious-transfer#two-round-uc-secure-ot|Two-round UC-secure OT]])
- [[two-round-uc-ot-to-two-round-ot|Two-round UC-secure OT ⇒ Two-round OT]] (via [[oblivious-transfer#two-round-uc-secure-ot|Two-round UC-secure OT]])
- [[two-round-uc-ot-to-uc-ot|Two-round UC-secure OT ⇒ UC-secure OT]] (via [[oblivious-transfer#two-round-uc-secure-ot|Two-round UC-secure OT]])
- [[uc-ot-to-malicious-ot-security|UC-secure OT ⇒ Malicious OT]] (via [[oblivious-transfer#uc-secure-ot|UC-secure OT]])
- [[uc-ot-to-ot|UC-secure OT ⇒ OT]] (via [[oblivious-transfer#uc-secure-ot|UC-secure OT]])

**Produces Oblivious transfer**

- [[cdh-to-uc-ot-dghmw20|CDH ⇒ Two-round UC-secure OT (DGHMW)]] (via [[oblivious-transfer#two-round-uc-secure-ot|Two-round UC-secure OT]])
- [[cpir-to-ot-dmo00|cPIR with total communication below n ⇒ OT]]
- [[ddh-to-malicious-ot-security-pvw08|DDH ⇒ Two-round UC-secure OT (PVW)]] (via [[oblivious-transfer#two-round-uc-secure-ot|Two-round UC-secure OT]])
- [[enhanced-trapdoor-permutations-to-ot-gkm-00|Enhanced trapdoor permutations ⇒ OT]]
- [[four-round-ot-to-malicious-ot-security|Four-round OT ⇒ Malicious OT with expected-time simulation]] (via [[oblivious-transfer#malicious-security-with-expected-polynomial-time-simulation|Malicious security with expected polynomial-time simulation]])
- [[lossy-trapdoor-function-to-ot-pw08|Lossy TDF ⇒ OT]]
- [[lwe-to-malicious-ot-security-pvw08|LWE ⇒ Two-round UC-secure OT (PVW)]] (via [[oblivious-transfer#two-round-uc-secure-ot|Two-round UC-secure OT]])
- [[malicious-ot-security-to-malicious-ot-with-expected-time-simulation|Malicious OT ⇒ Malicious OT with expected-time simulation]] (via [[oblivious-transfer#malicious-security-with-expected-polynomial-time-simulation|Malicious security with expected polynomial-time simulation]])
- [[ope-to-ot|OPE ⇒ OT]]
- [[oprf-to-ot|OPRF ⇒ OT]]
- [[ot-and-owf-to-ot-extension-bea96|OT + OWF ⇒ OT extension (Beaver)]] (via [[oblivious-transfer#ot-extension|OT Extension]])
- [[ot-to-malicious-ot-security-hai08|Semi-honest OT ⇒ Malicious OT (Haitner)]] (via [[oblivious-transfer#malicious-security|Malicious Security]])
- [[ot-to-ot-extension-iknp03|String OT ⇒ OT extension (IKNP)]] (via [[oblivious-transfer#ot-extension|OT Extension]])
- [[ot-to-string-ot|OT ⇒ String OT]] (via [[oblivious-transfer#string-ot|String OT]])
- [[psi-to-ot|PSI ⇒ OT]]
- [[qr-to-malicious-ot-security-pvw08|QR ⇒ Two-round UC-secure OT (PVW)]] (via [[oblivious-transfer#two-round-uc-secure-ot|Two-round UC-secure OT]])
- [[rabin-ot-to-ot|Rabin OT ⇔ OT]]
- [[random-ot-to-ot|Random OT ⇒ OT]]
- [[string-ot-to-ot|String OT ⇒ OT]]
- [[subexponential-lpn-to-ot-yz16|Subexponential LPN ⇒ OT]]
- [[subset-sum-to-ot-lps10|Subset sum at the LPS10 parameters ⇒ OT]]
- [[symmetric-private-information-retrieval-single-server-to-ot|Symmetric private information retrieval (Single-server) ⇒ OT]]
- [[two-party-computation-to-malicious-ot-security|2PC ⇒ Malicious OT]] (via [[oblivious-transfer#malicious-security|Malicious Security]])
- [[two-party-computation-to-ot|Semi-honest 2PC ⇒ OT]]
- [[two-round-ot-to-ot|Two-round OT ⇒ OT]]
- [[two-round-semi-honest-mpc-to-two-round-ot|Two-round semi-honest MPC ⇒ Two-round OT]] (via [[oblivious-transfer#two-round-ot|Two-round OT]])
- [[two-round-uc-ot-to-two-round-ot|Two-round UC-secure OT ⇒ Two-round OT]] (via [[oblivious-transfer#two-round-ot|Two-round OT]])
- [[two-round-uc-ot-to-uc-ot|Two-round UC-secure OT ⇒ UC-secure OT]] (via [[oblivious-transfer#uc-secure-ot|UC-secure OT]])
- [[uc-ot-to-malicious-ot-security|UC-secure OT ⇒ Malicious OT]] (via [[oblivious-transfer#malicious-security|Malicious Security]])
- [[uc-ot-to-ot|UC-secure OT ⇒ OT]]

**Barriers**

- [[no-ot-to-pke-gkm-00|No fully-black-box reduction from OT to PKE]]
- [[no-ot-to-tdp-gkm-00|No fully-black-box reduction from OT to TDP]]
- [[no-owf-to-ot-ir89|No relativizing reduction from OWF to OT]]
- [[no-pke-to-ot-gkm-00|No fully-black-box reduction from PKE to OT]]
- [[no-two-round-ot-to-two-round-semi-honest-mpc-abg-20|No fully-black-box reduction from two-round OT to two-round semi-honest MPC]] (via [[oblivious-transfer#two-round-ot|Two-round OT]]) — circumvented by [[two-round-ot-to-two-round-semi-honest-mpc-gs18|Two-round OT ⇒ Two-round semi-honest MPC (Garg–Srinivasan, Benhamouda–Lin)]]

<!-- END GENERATED participates-in -->
