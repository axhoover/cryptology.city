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
  two-round-ot: "#two-round-ot"
  two-round-uc-ot: "#two-round-uc-secure-ot"
  uc-ot: "#uc-secure-ot"
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
  - $R$ output: $x_c.$

We write $\langle S(\pp, x_0, x_1), R(\pp, c) \rangle \to (\bot, x_c).$

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

is negligible. Because $x_c = x_c'$, the receiver's output is identical in both worlds; any distinguishing advantage must come from the view alone.

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

The sender- and receiver-privacy definitions are **semi-honest**: both parties follow the protocol honestly, and security holds against a party that tries to learn extra information from its view. An OT $\OT$ has **malicious security** if for every efficient $\calA$ that corrupts $S$ or $R$ and may deviate from the protocol arbitrarily there is an efficient simulator $\Sim$ such that, for all $x_0, x_1 \in \calM$ and $c \in \bits$, the output of $\calA$ together with the honest party's output in a real execution is computationally indistinguishable from the output of $\Sim$ together with the honest party's output in an ideal execution. There the honest party hands its input to $\calF_{\mathrm{OT}}$, $\Sim$ hands it an input of its choice for the corrupted party, $\calF_{\mathrm{OT}}$ returns $x_c$ to $R$ for the resulting $(x_0, x_1)$ and $c$, and $\Sim$ also produces $\pp$ — [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]]. The semi-honest games do not carry over by letting $\calA$ deviate: in the sender-privacy game a malicious receiver can announce $c$ and run $R$ on $1 - c$, so the simulator must extract the choice bit a malicious receiver effectively uses — standard.

# Variations

## Rabin OT

Introduced by [[Rab81]], **Rabin's OT** is a simpler variant where the sender transmits a single message $x$ and the receiver obtains it with probability $1/2$, receiving $\bot$ otherwise — without the sender learning which outcome occurred. Rabin OT and 1-out-of-2 OT are equivalent; each implies the other by efficient reductions.

## $k$-out-of-$n$ OT

A generalization where the sender holds $n$ messages $(x_1, \ldots, x_n)$ and the receiver chooses a set $S \subseteq [n]$ of size $k$, learning $\{x_i : i \in S\}$ while the sender learns nothing about $S$.

Single-server [[single-server-private-information-retrieval#Symmetric private information retrieval (Single-server)|SPIR]] is 1-out-of-$n$ OT with communication sublinear in $n$, so it implies 1-out-of-$n$ OT — folklore; the converse is not known ([[symmetric-private-information-retrieval-single-server-to-ot|SPIR ⇒ OT]]).

## OT Extension

OT from public-key primitives requires expensive operations per transfer. **OT extension** generates any polynomial number $m$ of OTs from a number of base OTs that depends only on the security parameter, using only symmetric-key primitives beyond them — [[Bea96 - Correlated Pseudorandomness and the Complexity of Private Computations|Bea96]]; each extended transfer costs a constant number of hash evaluations in [[IKNP03 - Extending Oblivious Transfers Efficiently|IKNP03]].

## Random OT

In a **Random OT**, the parties do not choose their inputs: the sender receives uniformly random $(x_0, x_1)$ and the receiver receives a uniformly random bit $c$ and the value $x_c$. Random OT can be converted to standard OT with a single round of communication.

## Two-round OT

A **two-round OT** is an OT $\OT$ with [[#Sender Privacy|sender privacy]] and [[#Receiver Privacy|receiver privacy]] whose interaction is one message each way: the receiver computes $(m_R, \st_R) \gets R_1(\pp, c)$ and sends $m_R$, the sender replies with $m_S \gets S(\pp, x_0, x_1, m_R)$, and the receiver outputs $R_2(\st_R, m_S) = x_c$. $\Setup$ is as in the syntax above, so a common reference string is allowed. Two-round OT is necessary and sufficient for two-round MPC secure against semi-honest adversaries corrupting any number of parties — [[BL18 - k-Round Multiparty Computation from k-Round Oblivious Transfer via Garbled Interactive Circuits|BL18]], [[GS18 - Two-Round Multiparty Secure Computation from Minimal Assumptions|GS18]].

## UC-secure OT

An OT protocol is **UC-secure** if it UC-realizes $\calF_{\mathrm{OT}}$ in the common reference string model, with $\pp \gets \Setup(1^\secpar)$ as the reference string, against a malicious adversary that statically corrupts either party — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]. UC security implies stand-alone [[#Malicious Security|malicious security]], and by the composition theorem a UC-secure protocol can replace the ideal functionality in any protocol in the OT-hybrid model — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]. A UC-secure protocol also has sender and receiver privacy with the same reference string, since a UC environment can choose the inputs after learning the reference string through the adversary ([[uc-ot-to-ot|UC-secure OT ⇒ OT]]) — folklore.

## Two-round UC-secure OT

A **two-round UC-secure OT** is a [[#UC-secure OT|UC-secure OT]] protocol whose interaction is one message from the receiver followed by one message from the sender, as in [[#Two-round OT|two-round OT]]. The dual-mode protocols of [[PVW08 - A Framework for Efficient and Composable Oblivious Transfer|PVW08]], from DDH, QR or LWE, and the protocol of [[DGHMW20 - Two-Round Oblivious Transfer from CDH or LPN|DGHMW20]], from CDH, are two-round UC-secure OT protocols. Two-round malicious OT in the common reference string model gives two-round MPC secure with abort against a malicious adversary corrupting any number of parties — [[GS18 - Two-Round Multiparty Secure Computation from Minimal Assumptions|GS18]].

# Other results

- [[cpir-to-ot-dmo00|Non-trivial cPIR ⇒ OT]]
- [[ot-to-com|Malicious OT ⇒ COM (Kilian)]]
- [[ot-to-mpc-kil88|Ideal OT ⇒ 2PC (Kilian)]]

<!-- BEGIN GENERATED participates-in df28892a829a -->

## Participates in

**Builds on Oblivious transfer**

- [[gc-and-ot-to-two-party-computation-2pc|GC + OT ⇒ Semi-honest 2PC (Yao)]]
- [[ideal-ot-and-prg-to-uc-mpc-ips08|Ideal OT + PRG ⇒ UC MPC (IPS)]] (via [[oblivious-transfer#ideal-ot-functionality|Ideal OT functionality]])
- [[ideal-ot-to-com-kil88|Ideal OT ⇒ COM (Kilian)]] (via [[oblivious-transfer#ideal-ot-functionality|Ideal OT functionality]])
- [[ot-to-mpc-kil88|Ideal OT ⇒ 2PC (Kilian)]] (via [[oblivious-transfer#ideal-ot-functionality|Ideal OT functionality]])
- [[malicious-ot-security-to-two-party-computation-lp07|Malicious OT ⇒ 2PC by cut-and-choose (Lindell–Pinkas)]] (via [[oblivious-transfer#malicious-security|Malicious Security]])
- [[ot-and-owf-to-ot-extension-bea96|OT + OWF ⇒ OT extension (Beaver)]]
- [[ot-extension-to-mpc-with-preprocessing-spdz-etc|OT Extension ⇒ MPC with preprocessing (SPDZ, etc.)]] (via [[oblivious-transfer#ot-extension|OT Extension]])
- [[ot-to-com|Malicious OT ⇒ COM (Kilian)]] (via [[oblivious-transfer#malicious-security|Malicious Security]])
- [[ot-to-ke|OT ⇒ KE]]
- [[ot-to-malicious-ot-security-hai08|Semi-honest OT ⇒ Malicious OT (Haitner)]]
- [[ot-to-mpc-hiklp10|Semi-honest OT ⇒ MPC (HIKLP)]]
- [[ot-to-oihf-bh26|OT ⇒ OIHF]]
- [[ot-to-optimally-fair-coin-flipping-mns09|OT ⇒ Optimally fair coin flipping (Moran–Naor–Segev)]]
- [[ot-to-ot-extension-iknp03|OT ⇒ OT extension (IKNP)]]
- [[ot-to-semi-honest-security-gmw87|Semi-honest OT ⇒ Semi-honest MPC (GMW)]]
- [[rabin-ot-to-ot|Rabin OT ⇔ OT]] (via [[oblivious-transfer#rabin-ot|Rabin OT]])
- [[random-ot-to-ot|Random OT ⇒ OT]] (via [[oblivious-transfer#random-ot|Random OT]])
- [[two-round-ot-to-ot|Two-round OT ⇒ OT]] (via [[oblivious-transfer#two-round-ot|Two-round OT]])
- [[two-round-ot-to-two-round-semi-honest-mpc-gs18|Two-round OT ⇒ Two-round semi-honest MPC (Garg–Srinivasan, Benhamouda–Lin)]] (via [[oblivious-transfer#two-round-ot|Two-round OT]])
- [[two-round-uc-ot-to-two-round-mpc-gs18|Two-round UC OT ⇒ Two-round MPC in the CRS model (Garg–Srinivasan)]] (via [[oblivious-transfer#two-round-uc-secure-ot|Two-round UC-secure OT]])
- [[two-round-uc-ot-to-two-round-ot|Two-round UC-secure OT ⇒ Two-round OT]] (via [[oblivious-transfer#two-round-uc-secure-ot|Two-round UC-secure OT]])
- [[two-round-uc-ot-to-uc-ot|Two-round UC-secure OT ⇒ UC-secure OT]] (via [[oblivious-transfer#two-round-uc-secure-ot|Two-round UC-secure OT]])
- [[uc-ot-to-malicious-ot-security|UC-secure OT ⇒ Malicious OT]] (via [[oblivious-transfer#uc-secure-ot|UC-secure OT]])
- [[uc-ot-to-ot|UC-secure OT ⇒ OT]] (via [[oblivious-transfer#uc-secure-ot|UC-secure OT]])

**Produces Oblivious transfer**

- [[cdh-to-uc-ot-dghmw20|CDH ⇒ Two-round UC-secure OT (DGHMW)]] (via [[oblivious-transfer#two-round-uc-secure-ot|Two-round UC-secure OT]])
- [[cpir-to-ot-dmo00|Non-trivial cPIR ⇒ OT]]
- [[ddh-to-malicious-ot-security-pvw08|DDH ⇒ Two-round UC-secure OT (PVW)]] (via [[oblivious-transfer#two-round-uc-secure-ot|Two-round UC-secure OT]])
- [[enhanced-trapdoor-permutations-to-ot-gkm-00|Enhanced trapdoor permutations ⇒ OT]]
- [[lossy-trapdoor-function-to-ot-pw08|Lossy TDF ⇒ OT]]
- [[lwe-to-malicious-ot-security-pvw08|LWE ⇒ Two-round UC-secure OT (PVW)]] (via [[oblivious-transfer#two-round-uc-secure-ot|Two-round UC-secure OT]])
- [[oihf-to-ot-bh26|OIHF ⇒ OT]]
- [[ot-and-owf-to-ot-extension-bea96|OT + OWF ⇒ OT extension (Beaver)]] (via [[oblivious-transfer#ot-extension|OT Extension]])
- [[ot-to-malicious-ot-security-hai08|Semi-honest OT ⇒ Malicious OT (Haitner)]] (via [[oblivious-transfer#malicious-security|Malicious Security]])
- [[ot-to-ot-extension-iknp03|OT ⇒ OT extension (IKNP)]] (via [[oblivious-transfer#ot-extension|OT Extension]])
- [[qr-to-malicious-ot-security-pvw08|QR ⇒ Two-round UC-secure OT (PVW)]] (via [[oblivious-transfer#two-round-uc-secure-ot|Two-round UC-secure OT]])
- [[rabin-ot-to-ot|Rabin OT ⇔ OT]]
- [[random-ot-to-ot|Random OT ⇒ OT]]
- [[subexponential-lpn-to-ot-yz16|Subexponential LPN ⇒ OT]]
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

- [[no-oihf-to-ot-bh26|No fully-black-box reduction from OIHF to OT]] — circumvented by [[oihf-to-ot-bh26|OIHF ⇒ OT]]
- [[no-ot-to-pke-gkm-00|No fully-black-box reduction from OT to PKE]]
- [[no-ot-to-tdp-gkm-00|No fully-black-box reduction from OT to TDP]]
- [[no-owf-to-ot-ir89|No relativizing reduction from OWF to OT]]
- [[no-pke-to-ot-gkm-00|No fully-black-box reduction from PKE to OT]]
- [[no-two-round-ot-to-two-round-semi-honest-mpc-abg-20|No fully-black-box reduction from two-round OT to two-round semi-honest MPC]] (via [[oblivious-transfer#two-round-ot|Two-round OT]]) — circumvented by [[two-round-ot-to-two-round-semi-honest-mpc-gs18|Two-round OT ⇒ Two-round semi-honest MPC (Garg–Srinivasan, Benhamouda–Lin)]]

<!-- END GENERATED participates-in -->
