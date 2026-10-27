---
type: primitive
status: draft
aliases:
  - MPC
  - Secure computation
  - Multi-party computation
  - 2PC
  - Secure multi-party computation
title: Secure multi-party computation
id: mpc
variants:
  semi-honest-security: "#semi-honest-security"
  two-party-computation: "#two-party-computation-2pc"
  five-round-two-party-computation: "#five-round-2pc"
  semi-honest-two-party-computation: "#semi-honest-two-party-computation"
  fair-mpc: "#fairness"
  honest-majority-t-lt-n-over-3: "#honest-majority-t--n3"
  honest-majority-t-lt-n-over-2: "#honest-majority-t--n2"
  honest-majority-with-abort-t-lt-n-over-2: "#honest-majority-with-abort-t--n2"
  semi-honest-honest-majority-t-lt-n-over-2: "#semi-honest-honest-majority-t--n2"
  uc-mpc: "#universal-composability-uc"
  mpc-with-preprocessing: "#mpc-with-preprocessing"
  two-round-mpc: "#two-round-mpc"
  two-round-semi-honest-mpc: "#two-round-semi-honest-mpc"
  four-round-mpc: "#four-round-mpc"
---

# Secure multi-party computation

A secure multi-party computation (MPC) protocol lets $n$ parties, party $P_i$ holding an input $x_i$, compute $f(x_1, \ldots, x_n)$ so that an adversary corrupting some of the parties achieves nothing beyond what it could in an ideal execution, in which a trusted party receives the inputs and hands each party its output. The notion is due to [[Yao82 - Protocols for secure computations|Yao82b]] for two parties and to [[GMW87 - How to play ANY mental game|GMW87]] for $n$ parties.

## Syntax

An $n$-party **functionality** is a possibly randomized map $f : (\bits^*)^n \to (\bits^*)^n$ computed by a polynomial-size circuit; party $P_i$ is to learn the $i$-th output $y_i$.

An $n$-party protocol is a tuple $\Pi = (\Setup, P_1, \ldots, P_n)$ of efficient algorithms:

- $\Setup(1^\secpar) \to \pp$, a common reference string; in the plain model $\Setup$ is trivial and $\pp = 1^\secpar$.
- $P_i(\pp, x_i)$, an interactive algorithm with private random coins that outputs $y_i$ or $\bot$.

The parties run in synchronous rounds over [[interactive-protocol#authenticated-channels|authenticated point-to-point channels]] between every pair and a [[interactive-protocol#broadcast-channel|broadcast channel]]. The adversary $\calA$ corrupts a set $T \subseteq [n]$ fixed before the execution (static corruption), reads every message, and is rushing: it chooses the corrupted parties' round-$r$ messages after seeing the honest parties' round-$r$ messages. A protocol may in addition use [[interactive-protocol#secure-channels|secure channels]], [[interactive-protocol#correlated-randomness|correlated randomness]] or an ideal functionality such as [[oblivious-transfer#ideal-ot-functionality|ideal OT]]; it is then secure in that model.

Each notion below is **achieved** if for every $n$ and every $n$-party functionality $f$ there is a protocol for $f$, running in time polynomial in $\secpar$, $n$ and the circuit size of $f$, that meets the notion.

## Properties

### Correctness

If no party is corrupted, the parties' outputs $(y_1, \ldots, y_n)$ are distributed as $f(x_1, \ldots, x_n)$, up to negligible statistical distance.

### Security with abort

The game compares the real execution (world $0$) with an ideal execution run by a trusted party (world $1$). The distinguisher $\calD$ sees the reference string, chooses the inputs and the adversary's auxiliary input $z$, and then sees the adversary's output together with the honest parties' outputs.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{mpc}}_{\Pi,f,\calA,\Sim,\calD}(\secpar)$}
\begin{algorithmic}
\State $b \getsr \bits$; $\pp_0 \gets \Setup(1^\secpar)$; $\pp_1 \gets \Sim(1^\secpar)$
\Comment{$\calA$ corrupts a fixed set $T \subseteq [n]$; $\Sim$ is stateful}
\State $(x_1, \ldots, x_n, z, \st) \gets \calD(1^\secpar, \pp_b)$
\State Run $\Pi$ with $P_i(\pp_0, x_i)$ for $i \notin T$ and $\calA(\pp_0, (x_i)_{i \in T}, z)$ controlling $(P_i)_{i \in T}$
\State $\mathit{out}_0 := (\text{output of } \calA, (y_i)_{i \notin T})$
\State $\mathit{out}_1 \gets \mathrm{Ideal}^{\mathrm{abort}}_{f,T}(x_1, \ldots, x_n, z)$
\State $b' \gets \calD(\st, \mathit{out}_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\mathrm{Ideal}^{\mathrm{abort}}_{f,T}(x_1, \ldots, x_n, z)$}
\begin{algorithmic}
\State $(x_i')_{i \in T} \gets \Sim((x_i)_{i \in T}, z)$
\Comment{$\Sim$ may replace the corrupted parties' inputs}
\State $x_i' := x_i$ for $i \notin T$; $(y_1, \ldots, y_n) \gets f(x_1', \ldots, x_n')$
\State $d \gets \Sim((y_i)_{i \in T})$
\Comment{$\Sim$ sees the corrupted parties' outputs first}
\If{$d = \mathsf{abort}$}
\State $y_i := \bot$ for every $i \notin T$
\EndIf
\Return $(\text{output of } \Sim, (y_i)_{i \notin T})$
\end{algorithmic}
\end{algorithm}
```

A protocol $\Pi$ **securely computes $f$ with abort** against $t$ corruptions if for all efficient $\calA$ corrupting a set $T$ of at most $t$ parties there is an efficient $\Sim$ such that for all efficient $\calD$,

$$
\Adv^{\mathrm{mpc}}_{\Pi,f,\calA,\Sim,\calD}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{mpc}}_{\Pi,f,\calA,\Sim,\calD}(\secpar) = 1\right] - 1\right|
$$

is negligible. In world $1$ the simulator also produces the reference string, which $\calD$ sees before choosing the inputs; in the plain model $\pp = 1^\secpar$ and the order is immaterial. Up to that order, this is the stand-alone definition of [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]]. Statistical and perfect security require, for all possibly unbounded $\calA$ and $\calD$, a negligible and a zero advantage respectively. **MPC** is achieved when every functionality has a protocol that securely computes it with abort against $t = n - 1$ corruptions, that is, against any number of corrupted parties. The abort is unanimous: every honest party outputs $\bot$, or every honest party outputs its value.

### Semi-honest security

The corrupted parties run $\Pi$ honestly on their inputs, and $\calA$ outputs their joint [[interactive-protocol#view|view]]. As above, $\calD$ chooses the inputs after seeing the reference string, which $\Sim$ produces in world $1$. In world $1$ the trusted party computes $(y_1, \ldots, y_n) \gets f(x_1, \ldots, x_n)$, the simulator receives $(x_i, y_i)_{i \in T}$ and can neither replace inputs nor abort, and the game outputs the simulator's output together with $(y_i)_{i \notin T}$. A protocol is **secure against semi-honest adversaries** corrupting at most $t$ parties if for every such $T$ there is an efficient $\Sim$ such that for all efficient $\calD$ the advantage, defined as above, is negligible. The notion is achieved when every functionality has such a protocol for $t = n - 1$.

Neither this notion nor security with abort implies the other. A protocol secure against malicious adversaries is secure against augmented semi-honest adversaries, which may replace their inputs before the execution — [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]] — but not in general against semi-honest adversaries, because the malicious-model simulator may replace the corrupted parties' inputs and the semi-honest ideal execution forbids it — [[HL10 - A Note on the Relation between the Definitions of Security for Semi-Honest and Malicious Adversaries|HL10]].

# Variations

Each notion below changes one component of [[#Security with abort|security with abort]] or of [[#Semi-honest security|semi-honest security]]: the number of parties, the corruption threshold, what the ideal execution guarantees the honest parties, the composition setting, or the number of rounds. At a fixed threshold, guaranteed output delivery implies fairness and fairness implies security with abort, since each ideal execution is a restriction of the next; security against $t$ corruptions implies security against $t' < t$; and a notion achieved for every $n$ is achieved for $n = 2$ — folklore. UC security implies stand-alone security — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]].

## Two-party computation (2PC)

Security with abort for $n = 2$: the adversary corrupts one party, receives that party's output first, and may then make the other party output $\bot$. MPC gives it by taking $n = 2$ — folklore.

### Five-round 2PC

Two-party computation in the plain model ($\pp = 1^\secpar$) by a protocol of five rounds, in each of which only one party sends a message, with a **black-box simulator**: an oracle algorithm $\Sim$, running in expected polynomial time, such that for every efficient $\calA$ the simulator $\Sim^{\calA}$, which runs $\calA$ only as an oracle and may rewind it, meets the definition. It implies 2PC by the identity map — folklore. Every two-party functionality, each party receiving its own output, has such a protocol from certified trapdoor permutations ([[doubly-enhanced-certified-tdp-to-five-round-two-party-computation-ko04|certified TDP ⇒ five-round 2PC]]) — [[KO04 - Round-Optimal Secure Two-Party Computation|KO04]]. Five rounds are necessary for a black-box proof of security: unconditionally, no four-round protocol of this kind securely computes the coin-tossing functionality for a super-logarithmic number of coins with a black-box proof — [[KO04 - Round-Optimal Secure Two-Party Computation|KO04]]. When only one party receives output, four rounds suffice — [[KO04 - Round-Optimal Secure Two-Party Computation|KO04]] — also from enhanced trapdoor permutations used as a black box ([[enhanced-trapdoor-permutation-to-two-party-computation-ors15|enhanced TDP ⇒ 2PC]]) — [[ORS15 - Round-Optimal Black-Box Two-Party Computation|ORS15]].

## Semi-honest two-party computation

Semi-honest security for $n = 2$, which semi-honest security gives by taking $n = 2$ — folklore. A two-party protocol secure with abort need not be semi-honest secure, for the reason above — [[HL10 - A Note on the Relation between the Definitions of Security for Semi-Honest and Malicious Adversaries|HL10]].

## Fairness

Security with complete fairness against $t = n - 1$ corruptions. The ideal execution lets $\Sim$ abort only before the trusted party computes $f$, in which case every party outputs $\bot$; otherwise every party receives its output. A fair protocol securely computes $f$ with abort, since the simulator can emulate an early abort by submitting arbitrary inputs and aborting once it has the outputs — folklore. When at least half of the parties may be corrupted, fairness is impossible for some functionalities: every $r$-round [[coin-flipping#fair-coin-flipping|coin-flipping]] protocol can be biased by $\Omega(1/r)$ by an adversary that only aborts early — [[Cle86 - Limits on the security of coin flips when half the processors are faulty|Cle86]]. A completely fair protocol for Boolean XOR, run on uniform inputs, would be a coin flip with negligible bias, so XOR has no completely fair two-party protocol over authenticated channels without setup and the notion is not achieved ([[no-authenticated-channels-to-fair-mpc-cle86|no reduction from authenticated channels to fair MPC]]) — [[Cle86 - Limits on the security of coin flips when half the processors are faulty|Cle86]].

Complete fairness is ruled out for XOR, not for every function. Under standard cryptographic assumptions, every two-party function over polynomial-size domains without an embedded XOR, including Boolean AND and OR and Yao's millionaires' problem, has a completely fair protocol; some functions with an embedded XOR do too, but every completely fair protocol for them needs a number of rounds super-logarithmic in the security parameter — [[GHKL08 - Complete Fairness in Secure Two-Party Computation|GHKL08]].

## Guaranteed output delivery

Full security, or guaranteed output delivery, removes the abort: in the ideal execution $\Sim$ may replace the corrupted parties' inputs, a corrupted party that submits none is assigned a default input, and every honest party receives its output. It implies fairness against the same corruptions, being the fair ideal execution in which $\Sim$ never aborts — folklore. With $t \ge n/2$ it would give a fair coin flip, which does not exist — [[Cle86 - Limits on the security of coin flips when half the processors are faulty|Cle86]]. The broadcast channel can be emulated over the point-to-point channels when $t < n/3$ ([Lamport–Shostak–Pease](authenticated-channels-to-byzantine-broadcast-t-lt-n-over-3-lsp82)), and cannot be without a setup when $t \ge n/3$ ([[no-authenticated-channels-to-byzantine-broadcast-flm85|no broadcast from authenticated channels]]) — [[LSP82 - The Byzantine Generals Problem|LSP82]]; the emulation runs in time polynomial in $n$ — [[GM93 - Fully Polynomial Byzantine Agreement in t+1 Rounds|GM93]].

### Honest majority ($t < n/3$)

Guaranteed output delivery against a malicious adversary corrupting at most $t < n/3$ parties. The $t < n/2$ notion below implies it, its adversaries including these — folklore.

### Honest majority ($t < n/2$)

Guaranteed output delivery against a malicious adversary corrupting at most $t < n/2$ parties, over the network with its broadcast channel.

## Honest majority with abort ($t < n/2$)

Security with abort against a malicious adversary corrupting at most $t < n/2$ parties, over the network with its broadcast channel. The ideal execution is $\mathrm{Ideal}^{\mathrm{abort}}_{f,T}$, except that after receiving the corrupted parties' outputs $\Sim$ chooses, for each honest party separately, whether that party receives its output or $\bot$ (selective abort). A protocol with unanimous abort meets the notion, and one final round in which every party broadcasts whether it aborted makes a selective-abort protocol unanimous — folklore. Guaranteed output delivery against $t < n/2$ and security with abort against $t = n - 1$ each imply it, by the identity map — folklore.

## Semi-honest, honest majority ($t < n/2$)

Semi-honest security against at most $t < n/2$ corrupted parties. Semi-honest security against $t = n - 1$ implies it — folklore. Over secure channels it is achieved with perfect security ([BGW](secure-channels-to-semi-honest-honest-majority-t-lt-n-over-2-bgw88)) — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]].

With information-theoretic privacy, $\lceil n/2 \rceil$ corruptions already force the trivial case for Boolean functions: a Boolean function is either $n$-private, or $\lfloor (n-1)/2 \rfloor$-private and not $\lceil n/2 \rceil$-private, and the $n$-private ones are exactly those of the form $f_1(x_1) \oplus \cdots \oplus f_n(x_n)$ — [[CK89 - A Zero-One Law for Boolean Privacy|CK89]]. The two-argument functions computable with perfect privacy are characterized combinatorially — [[Kus89 - Privacy and Communication Complexity|Kus89]]. Given semi-honest [[oblivious-transfer|OT]], every functionality has a protocol secure against semi-honest adversaries corrupting any number of parties ([[ot-to-semi-honest-security-gmw87|semi-honest OT ⇒ semi-honest MPC]]) — [[GMW87 - How to play ANY mental game|GMW87]], [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]].

## Universal composability (UC)

Security with abort against $t = n - 1$ static corruptions in the [[universal-composability-framework|UC framework]]: the protocol UC-realizes the ideal functionality $\calF_f$, which computes $f$, hands the adversary the corrupted parties' outputs first and lets it withhold the output of any honest party — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]. The distinguisher is an environment $\calZ$ that chooses the inputs, reads the outputs and interacts with $\calA$ throughout the execution. UC security implies stand-alone security, the game above being an environment that only supplies inputs and reads outputs — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]; one more round in which every party broadcasts whether it received its output turns the per-party abort into the unanimous abort of security with abort — folklore.

With an honest majority no setup is needed — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]. With $t = n - 1$ a setup is necessary: UC commitments do not exist in the plain model — [[CF01 - Universally Composable Commitments|CF01]] — and neither do UC protocols for a large class of two-party functionalities, whatever the assumption ([[no-authenticated-channels-to-uc-mpc-ckl03|no UC MPC from authenticated channels]]) — [[CKL03 - On the Limitations of Universally Composable Two-Party Computation without Set-up Assumptions|CKL03]]. In the common reference string model every functionality has a UC protocol against static corruptions from enhanced trapdoor permutations ([[enhanced-trapdoor-permutation-to-uc-mpc-clos02|enhanced TDP ⇒ UC MPC]]) — [[CLOS02 - Universally Composable Two-Party and Multi-Party Secure Computation|CLOS02]]; in the OT-hybrid model a PRG used as a black box suffices, with a constant number of rounds ([[ideal-ot-and-prg-to-uc-mpc-ips08|ideal OT + PRG ⇒ UC MPC]]) — [[IPS08 - Founding Cryptography on Oblivious Transfer Efficiently|IPS08]].

## MPC with preprocessing

Security with abort against $t = n - 1$ corruptions, by a protocol in two phases. An offline phase, which depends neither on the inputs nor on $f$ beyond its number of gates of each type, gives the parties correlated randomness; an online phase evaluates $f$ using it and is statistically secure in the hybrid model where an ideal dealer supplies that [[interactive-protocol#correlated-randomness|correlated randomness]], together, in some protocols, with ideal commitments. Multiplication triples, one consumed per multiplication gate, are the standard correlation, as in the online phases of [[BDOZ11 - Semi-homomorphic Encryption and Multiparty Computation|BDOZ11]] and [[DPSZ12 - Multiparty Computation from Somewhat Homomorphic Encryption|DPSZ12]]. They descend from Beaver's circuit randomization, which sets every input of every gate at random and then corrects it, replacing each secret multiplication in a secret-sharing-based protocol by reconstructions of shared values that need only broadcast, not Byzantine agreement; there the random values are prepared within the protocol, not by a dealer — [[Bea91 - Efficient Multiparty Protocols Using Circuit Randomization|Bea91]]. Given a dealer of such triples, the BDOZ online phase is UC-secure with abort against $t = n - 1$ ([correlated randomness ⇒ UC MPC](correlated-randomness-to-uc-mpc-bdoz11)) — [[BDOZ11 - Semi-homomorphic Encryption and Multiparty Computation|BDOZ11]]. The notion implies MPC, which ignores the split into phases — folklore.

## Two-round MPC

Security with abort against $t = n - 1$ corruptions by a protocol with two rounds of communication. It implies MPC — folklore. In the common reference string model it follows from two-round malicious OT ([[two-round-uc-ot-to-two-round-mpc-gs18|two-round UC OT ⇒ two-round MPC]]) — [[GS18 - Two-Round Multiparty Secure Computation from Minimal Assumptions|GS18]] — and from LWE with NIZK arguments ([[subexponential-modulus-lwe-and-nizk-argument-for-np-to-two-round-mpc-mw16|LWE + NIZK ⇒ two-round MPC]]) — [[MW16 - Two Round Multiparty Computation via Multi-key FHE|MW16]]; the round complexity of MPC without that setup is under [[#Other results]].

## Two-round semi-honest MPC

Semi-honest security against $t = n - 1$ corruptions by a protocol with two rounds of communication. It implies semi-honest security — folklore. Two-round semi-honest OT is necessary and sufficient for it ([[two-round-ot-to-two-round-semi-honest-mpc-gs18|two-round OT ⇒ two-round semi-honest MPC]]) — [[GS18 - Two-Round Multiparty Secure Computation from Minimal Assumptions|GS18]], [[BL18 - k-Round Multiparty Computation from k-Round Oblivious Transfer via Garbled Interactive Circuits|BL18]] — but not with black-box use of the OT ([[no-two-round-ot-to-two-round-semi-honest-mpc-abg-20|no fully-black-box reduction]]) — [[ABG+20 - Separating Two-Round Secure Computation From Oblivious Transfer|ABG+20]].

## Four-round MPC

Security with abort against $t = n - 1$ corruptions in the plain model ($\pp = 1^\secpar$), by a protocol of four rounds over the network of the syntax, in each of which every party may send, with a black-box simulator as in [[#Five-round 2PC|five-round 2PC]]; the abort may be selective, as in [honest majority with abort](secure-multi-party-computation#honest-majority-with-abort-t--n2), $\Sim$ choosing for each honest party separately whether it receives its output or $\bot$. It implies MPC: one more round, in which every party broadcasts whether it aborted, makes the abort unanimous — folklore. With a black-box proof of security, MPC in the plain model needs at least four rounds — [[GMPP16 - The Exact Round Complexity of Secure Computation|GMPP16]]. Four rounds suffice under polynomially hard DDH ([[ddh-to-four-round-mpc-bgj18|DDH ⇒ four-round MPC]]), QR ([[qr-to-four-round-mpc-bgj18|QR ⇒ four-round MPC]]) or $N$-th residuosity ([[dcr-to-four-round-mpc-bgj18|DCR ⇒ four-round MPC]]) — [[BGJ+18 - Promise Zero Knowledge and its Applications to Round Optimal MPC|BGJ+18]] — and from four-round OT ([[four-round-ot-to-four-round-mpc-ccg20|four-round OT ⇒ four-round MPC]]) — [[CCG+20 - Round Optimal Secure Multiparty Computation from Minimal Assumptions|CCG+20]]. Earlier four-round protocols rested on super-polynomial hardness: one-way permutations with sub-exponentially hard DDH — [[ACJ17 - A New Approach to Round-Optimal Secure Multiparty Computation|ACJ17]] — and sub-exponentially hard LWE with a slightly super-polynomial modulus-to-noise ratio together with adaptively secure commitments — [[BHP17 - Four Round Secure Computation Without Setup|BHP17]].

# Other results

- OT extension: $O(\secpar)$ base OTs suffice to generate polynomially many OTs efficiently — [[IKNP03 - Extending Oblivious Transfers Efficiently|IKNP03]]
- Communication lower bounds for two-party differential privacy — [[HMST22 - On the Complexity of Two-Party Differential Privacy|HMST22]]
- Round complexity in the plain model with black-box proofs of security: five rounds for 2PC when one party sends per round ([[#Five-round 2PC]]) — [[KO04 - Round-Optimal Secure Two-Party Computation|KO04]] — and four for MPC ([[#Four-round MPC]]) — [[GMPP16 - The Exact Round Complexity of Secure Computation|GMPP16]], [[BGJ+18 - Promise Zero Knowledge and its Applications to Round Optimal MPC|BGJ+18]]; with a simultaneous-message channel, four rounds suffice for 2PC from trapdoor permutations — [[COSV17 - Round-Optimal Secure Two-Party Computation from Trapdoor Permutations|COSV17]].
- Two-round MPC in the common reference string model: from indistinguishability obfuscation, UC-secure with abort against static malicious adversaries, with communication proportional to the input and output size and independent of the circuit size — [[GGHR14 - Two-Round Secure MPC from Indistinguishability Obfuscation|GGHR14]]; from LWE and NIZK arguments — [[MW16 - Two Round Multiparty Computation via Multi-key FHE|MW16]]; and from two-round malicious OT — [[GS18 - Two-Round Multiparty Secure Computation from Minimal Assumptions|GS18]] ([[#Two-round MPC]]).
- 2PC from malicious OT by cut-and-choose over garbled circuits, with $O(1)$ OTs per input bit as its only public-key operations ([[malicious-ot-security-to-two-party-computation-lp07|malicious OT ⇒ 2PC]]) — [[LP07 - An Efficient Protocol for Secure Two-Party Computation in the Presence of Malicious Adversaries|LP07]].

<!-- BEGIN GENERATED participates-in 73bd0d2e60b8 -->

## Participates in

**Builds on Secure multi-party computation**

- [[fair-mpc-to-mpc|Fair MPC ⇒ MPC]] (via [[secure-multi-party-computation#fairness|Fairness]])
- [[five-round-two-party-computation-to-two-party-computation|Five-round 2PC ⇒ 2PC]] (via [[secure-multi-party-computation#five-round-2pc|Five-round 2PC]])
- [[four-round-mpc-to-mpc|Four-round MPC ⇒ MPC]] (via [[secure-multi-party-computation#four-round-mpc|Four-round MPC]])
- [MPC with honest majority ($t < n/2$) ⇒ MPC with honest majority ($t < n/3$)](honest-majority-t-lt-n-over-2-to-honest-majority-t-lt-n-over-3) (via [Honest majority ($t < n/2$)](secure-multi-party-computation#honest-majority-t--n2))
- [MPC with honest majority ($t < n/2$) ⇒ MPC with abort and honest majority ($t < n/2$)](honest-majority-t-lt-n-over-2-to-honest-majority-with-abort-t-lt-n-over-2) (via [Honest majority ($t < n/2$)](secure-multi-party-computation#honest-majority-t--n2))
- [MPC ⇒ MPC with abort and honest majority ($t < n/2$)](mpc-to-honest-majority-with-abort-t-lt-n-over-2)
- [[mpc-to-two-party-computation|MPC ⇒ 2PC]]
- [[mpc-with-preprocessing-to-mpc|MPC with preprocessing ⇒ MPC]] (via [[secure-multi-party-computation#mpc-with-preprocessing|MPC with preprocessing]])
- [[semi-honest-security-and-owf-to-mpc-gmw87|Semi-honest MPC + OWF ⇒ MPC (GMW compiler)]] (via [[secure-multi-party-computation#semi-honest-security|Semi-honest security]])
- [[semi-honest-security-to-semi-honest-honest-majority-t-lt-n-over-2|Semi-honest MPC ⇒ Semi-honest MPC with honest majority]] (via [[secure-multi-party-computation#semi-honest-security|Semi-honest security]])
- [[semi-honest-security-to-semi-honest-two-party-computation|Semi-honest MPC ⇒ Semi-honest 2PC]] (via [[secure-multi-party-computation#semi-honest-security|Semi-honest security]])
- [[two-party-computation-to-malicious-ot-security|2PC ⇒ Malicious OT]] (via [[secure-multi-party-computation#two-party-computation-2pc|Two-party computation (2PC)]])
- [[two-party-computation-to-ot|Semi-honest 2PC ⇒ OT]] (via [[secure-multi-party-computation#semi-honest-two-party-computation|Semi-honest two-party computation]])
- [[two-round-mpc-to-mpc|Two-round MPC ⇒ MPC]] (via [[secure-multi-party-computation#two-round-mpc|Two-round MPC]])
- [[two-round-semi-honest-mpc-to-semi-honest-security|Two-round semi-honest MPC ⇒ Semi-honest MPC]] (via [[secure-multi-party-computation#two-round-semi-honest-mpc|Two-round semi-honest MPC]])
- [[two-round-semi-honest-mpc-to-two-round-ot|Two-round semi-honest MPC ⇒ Two-round OT]] (via [[secure-multi-party-computation#two-round-semi-honest-mpc|Two-round semi-honest MPC]])
- [[uc-mpc-to-mpc|UC MPC ⇒ MPC]] (via [[secure-multi-party-computation#universal-composability-uc|Universal composability (UC)]])

**Produces Secure multi-party computation**

- [[additively-homomorphic-encryption-to-mpc-with-preprocessing-bdoz11|Additively homomorphic encryption ⇒ MPC with preprocessing (BDOZ)]] (via [[secure-multi-party-computation#mpc-with-preprocessing|MPC with preprocessing]])
- [[correlated-randomness-to-uc-mpc-bdoz11|Correlated randomness ⇒ UC MPC (BDOZ online phase)]] (via [[secure-multi-party-computation#universal-composability-uc|Universal composability (UC)]])
- [[dcr-to-four-round-mpc-bgj18|DCR ⇒ Four-round MPC (Badrinarayanan–Goyal–Jain–Kalai–Khurana–Sahai)]] (via [[secure-multi-party-computation#four-round-mpc|Four-round MPC]])
- [[ddh-to-four-round-mpc-bgj18|DDH ⇒ Four-round MPC (Badrinarayanan–Goyal–Jain–Kalai–Khurana–Sahai)]] (via [[secure-multi-party-computation#four-round-mpc|Four-round MPC]])
- [[doubly-enhanced-certified-tdp-to-five-round-two-party-computation-ko04|Doubly enhanced certified TDP ⇒ Five-round 2PC (Katz–Ostrovsky)]] (via [[secure-multi-party-computation#five-round-2pc|Five-round 2PC]])
- [Enhanced TDP ⇒ MPC with honest majority ($t < n/2$) (GMW)](enhanced-trapdoor-permutation-to-honest-majority-t-lt-n-over-2-gmw87) (via [Honest majority ($t < n/2$)](secure-multi-party-computation#honest-majority-t--n2))
- [[enhanced-trapdoor-permutation-to-two-party-computation-ors15|Enhanced TDP ⇒ 2PC (Ostrovsky–Richelson–Scafuro)]] (via [[secure-multi-party-computation#two-party-computation-2pc|Two-party computation (2PC)]])
- [[enhanced-trapdoor-permutation-to-uc-mpc-clos02|Enhanced TDP ⇒ UC MPC in the CRS model (CLOS)]] (via [[secure-multi-party-computation#universal-composability-uc|Universal composability (UC)]])
- [[fair-mpc-to-mpc|Fair MPC ⇒ MPC]]
- [[five-round-two-party-computation-to-two-party-computation|Five-round 2PC ⇒ 2PC]] (via [[secure-multi-party-computation#two-party-computation-2pc|Two-party computation (2PC)]])
- [[four-round-mpc-to-mpc|Four-round MPC ⇒ MPC]]
- [[four-round-ot-to-four-round-mpc-ccg20|Four-round OT ⇒ Four-round MPC (Choudhuri–Ciampi–Goyal–Jain–Ostrovsky)]] (via [[secure-multi-party-computation#four-round-mpc|Four-round MPC]])
- [[gc-and-ot-to-two-party-computation-2pc|GC + OT ⇒ Semi-honest 2PC (Yao)]] (via [[secure-multi-party-computation#semi-honest-two-party-computation|Semi-honest two-party computation]])
- [[he-to-mpc-with-preprocessing-spdz-etc|SHE + correlated randomness ⇒ MPC with preprocessing (SPDZ)]] (via [[secure-multi-party-computation#mpc-with-preprocessing|MPC with preprocessing]])
- [MPC with honest majority ($t < n/2$) ⇒ MPC with honest majority ($t < n/3$)](honest-majority-t-lt-n-over-2-to-honest-majority-t-lt-n-over-3) (via [Honest majority ($t < n/3$)](secure-multi-party-computation#honest-majority-t--n3))
- [MPC with honest majority ($t < n/2$) ⇒ MPC with abort and honest majority ($t < n/2$)](honest-majority-t-lt-n-over-2-to-honest-majority-with-abort-t-lt-n-over-2) (via [Honest majority with abort ($t < n/2$)](secure-multi-party-computation#honest-majority-with-abort-t--n2))
- [[ideal-ot-and-prg-to-uc-mpc-ips08|Ideal OT + PRG ⇒ UC MPC (IPS)]] (via [[secure-multi-party-computation#universal-composability-uc|Universal composability (UC)]])
- [[ot-to-mpc-kil88|Ideal OT ⇒ 2PC (Kilian)]] (via [[secure-multi-party-computation#two-party-computation-2pc|Two-party computation (2PC)]])
- [[malicious-ot-security-to-two-party-computation-lp07|Malicious OT ⇒ 2PC by cut-and-choose (Lindell–Pinkas)]] (via [[secure-multi-party-computation#two-party-computation-2pc|Two-party computation (2PC)]])
- [MPC ⇒ MPC with abort and honest majority ($t < n/2$)](mpc-to-honest-majority-with-abort-t-lt-n-over-2) (via [Honest majority with abort ($t < n/2$)](secure-multi-party-computation#honest-majority-with-abort-t--n2))
- [[mpc-to-two-party-computation|MPC ⇒ 2PC]] (via [[secure-multi-party-computation#two-party-computation-2pc|Two-party computation (2PC)]])
- [[mpc-with-preprocessing-to-mpc|MPC with preprocessing ⇒ MPC]]
- [[ot-extension-to-mpc-with-preprocessing-spdz-etc|OT Extension ⇒ MPC with preprocessing (SPDZ, etc.)]] (via [[secure-multi-party-computation#mpc-with-preprocessing|MPC with preprocessing]])
- [[ot-to-mpc-hiklp10|Semi-honest OT ⇒ MPC (HIKLP)]]
- [[ot-to-semi-honest-security-gmw87|Semi-honest OT ⇒ Semi-honest MPC (GMW)]] (via [[secure-multi-party-computation#semi-honest-security|Semi-honest security]])
- [[qr-to-four-round-mpc-bgj18|QR ⇒ Four-round MPC (Badrinarayanan–Goyal–Jain–Kalai–Khurana–Sahai)]] (via [[secure-multi-party-computation#four-round-mpc|Four-round MPC]])
- [Secure channels ⇒ MPC with honest majority ($t < n/2$) (Rabin–Ben-Or)](honest-majority-t-lt-n-over-2-to-mpc-rb89) (via [Honest majority ($t < n/2$)](secure-multi-party-computation#honest-majority-t--n2))
- [Secure channels ⇒ MPC with honest majority ($t < n/3$) (BGW)](honest-majority-t-n-3-or-t-n-2-to-mpc-bgw88) (via [Honest majority ($t < n/3$)](secure-multi-party-computation#honest-majority-t--n3))
- [Secure channels ⇒ MPC with honest majority ($t < n/3$) with linear communication (Beerliová-Trubíniová–Hirt)](secure-channels-to-honest-majority-t-lt-n-over-3-bh08) (via [Honest majority ($t < n/3$)](secure-multi-party-computation#honest-majority-t--n3))
- [Secure channels ⇒ MPC with honest majority ($t < n/3$) (Chaum–Crépeau–Damgård)](secure-channels-to-honest-majority-t-lt-n-over-3-ccd88) (via [Honest majority ($t < n/3$)](secure-multi-party-computation#honest-majority-t--n3))
- [Secure channels ⇒ MPC with honest majority ($t < n/3$) from linear secret sharing (Cramer–Damgård–Maurer)](secure-channels-to-honest-majority-t-lt-n-over-3-cdm00) (via [Honest majority ($t < n/3$)](secure-multi-party-computation#honest-majority-t--n3))
- [Secure channels ⇒ MPC with abort and honest majority ($t < n/2$) (CGH+18)](secure-channels-to-honest-majority-with-abort-t-lt-n-over-2-cgh18) (via [Honest majority with abort ($t < n/2$)](secure-multi-party-computation#honest-majority-with-abort-t--n2))
- [Secure channels ⇒ Semi-honest MPC with honest majority ($t < n/2$) (BGW)](secure-channels-to-semi-honest-honest-majority-t-lt-n-over-2-bgw88) (via [Semi-honest, honest majority ($t < n/2$)](secure-multi-party-computation#semi-honest-honest-majority-t--n2))
- [[semi-honest-security-and-owf-to-mpc-gmw87|Semi-honest MPC + OWF ⇒ MPC (GMW compiler)]]
- [[semi-honest-security-to-semi-honest-honest-majority-t-lt-n-over-2|Semi-honest MPC ⇒ Semi-honest MPC with honest majority]] (via [Semi-honest, honest majority ($t < n/2$)](secure-multi-party-computation#semi-honest-honest-majority-t--n2))
- [[semi-honest-security-to-semi-honest-two-party-computation|Semi-honest MPC ⇒ Semi-honest 2PC]] (via [[secure-multi-party-computation#semi-honest-two-party-computation|Semi-honest two-party computation]])
- [[subexponential-modulus-lwe-and-nizk-argument-for-np-to-two-round-mpc-mw16|LWE + NIZK ⇒ Two-round MPC in the CRS model (Mukherjee–Wichs)]] (via [[secure-multi-party-computation#two-round-mpc|Two-round MPC]])
- [[two-round-mpc-to-mpc|Two-round MPC ⇒ MPC]]
- [[two-round-ot-to-two-round-semi-honest-mpc-gs18|Two-round OT ⇒ Two-round semi-honest MPC (Garg–Srinivasan, Benhamouda–Lin)]] (via [[secure-multi-party-computation#two-round-semi-honest-mpc|Two-round semi-honest MPC]])
- [[two-round-semi-honest-mpc-to-semi-honest-security|Two-round semi-honest MPC ⇒ Semi-honest MPC]] (via [[secure-multi-party-computation#semi-honest-security|Semi-honest security]])
- [[two-round-uc-ot-to-two-round-mpc-gs18|Two-round UC OT ⇒ Two-round MPC in the CRS model (Garg–Srinivasan)]] (via [[secure-multi-party-computation#two-round-mpc|Two-round MPC]])
- [[uc-mpc-to-mpc|UC MPC ⇒ MPC]]

**Barriers**

- [[no-authenticated-channels-to-fair-mpc-cle86|No reduction from authenticated channels to fair MPC]] (via [[secure-multi-party-computation#fairness|Fairness]])
- [[no-authenticated-channels-to-uc-mpc-ckl03|No reduction from authenticated channels to UC MPC]] (via [[secure-multi-party-computation#universal-composability-uc|Universal composability (UC)]]) — circumvented by [[enhanced-trapdoor-permutation-to-uc-mpc-clos02|Enhanced TDP ⇒ UC MPC in the CRS model (CLOS)]], [[ideal-ot-and-prg-to-uc-mpc-ips08|Ideal OT + PRG ⇒ UC MPC (IPS)]], [[correlated-randomness-to-uc-mpc-bdoz11|Correlated randomness ⇒ UC MPC (BDOZ online phase)]]
- [[no-two-round-ot-to-two-round-semi-honest-mpc-abg-20|No fully-black-box reduction from two-round OT to two-round semi-honest MPC]] (via [[secure-multi-party-computation#two-round-semi-honest-mpc|Two-round semi-honest MPC]]) — circumvented by [[two-round-ot-to-two-round-semi-honest-mpc-gs18|Two-round OT ⇒ Two-round semi-honest MPC (Garg–Srinivasan, Benhamouda–Lin)]]

<!-- END GENERATED participates-in -->
