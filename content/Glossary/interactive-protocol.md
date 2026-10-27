---
type: glossary
status: draft
aliases:
  - interactive protocol
  - two-party protocol
  - protocol
  - view
  - transcript
title: Interactive protocol
id: interactive-protocol
variants:
  malicious-security: "#adversary-models"
  authenticated-channels: "#authenticated-channels"
  secure-channels: "#secure-channels"
  correlated-randomness: "#correlated-randomness"
---

# Interactive protocols

A **two-party protocol** $\Pi = (\Setup, P_1, P_2)$ consists of:

- $\Setup(1^\secpar) \to \pp,$ a randomized algorithm generating public parameters,
- $P_1, P_2,$ two stateful interactive algorithms (the **parties**).

Each party $P_i$ has private inputs $\mathbf{x}_i$ and private random coins $\rho_i$. The parties exchange messages in sequence according to the protocol specification until both halt.

When $\Setup$ is trivial (no public parameters are needed), we write $\pp = 1^\secpar$ and omit it.

## Execution

The joint execution of $P_1$ with input $\mathbf{x}_1$ against $P_2$ with input $\mathbf{x}_2$ is written

$$
\langle P_1(\pp, \mathbf{x}_1),\, P_2(\pp, \mathbf{x}_2) \rangle \to (\mathsf{out}_1,\, \mathsf{out}_2),
$$

where $\mathsf{out}_i$ is the output of $P_i$. When we wish to make randomness explicit, we write $P_i(\pp, \mathbf{x}_i;\, \rho_i)$.

## View

The **view** of party $P_i$ in an execution captures everything $P_i$ observed:

$$
\View_{P_i} \;=\; (\mathbf{x}_i,~\rho_i,~\mathbf{m}_i),
$$

where $\mathbf{m}_i = (m_i^{(1)}, m_i^{(2)}, \ldots)$ is the ordered sequence of messages $P_i$ received. The view determines $P_i$'s behavior completely: given $\View_{P_i}$, one can recompute all messages $P_i$ sent and its final output.

## Transcript

The **transcript** of an execution is the ordered sequence of all messages exchanged by both parties. The views $\View_{P_1}$ and $\View_{P_2}$ together determine the transcript.

## Adversary models

Security of a protocol is analyzed under one of two standard adversary models:

- **Semi-honest** (_honest-but-curious_): the adversary follows the protocol specification exactly but tries to learn additional information from its view alone.
- **Malicious**: the adversary may deviate from the protocol arbitrarily, sending any messages it chooses.

Security against malicious adversaries implies security against _augmented_ semi-honest adversaries, which may substitute their input before the execution [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]], but not in general against semi-honest adversaries: the malicious-model simulator may change the corrupted party's input, which the semi-honest ideal model forbids — [[HL10 - A Note on the Relation between the Definitions of Security for Semi-Honest and Malicious Adversaries|HL10]].

## Network models

A multi-party protocol runs in synchronous rounds among parties $P_1, \ldots, P_n$: a message sent in round $r$ is delivered before round $r + 1$. The adversary is rushing, choosing the corrupted parties' round-$r$ messages after seeing the honest parties' round-$r$ messages.

### Authenticated channels

Every pair of parties is joined by an authenticated point-to-point channel: the adversary reads every message, and cannot modify, drop or inject a message between two honest parties. There is no broadcast channel and no setup.

### Secure channels

Authenticated channels that are also private: of a message between two honest parties the adversary learns only that it was sent, and its length.

### Broadcast channel

A channel on which a party's message reaches every party, every party knowing that all parties received the same message. Over authenticated channels without setup, a [[byzantine-broadcast|Byzantine broadcast]] protocol emulates it if and only if fewer than a third of the parties are corrupted — [[LSP82 - The Byzantine Generals Problem|LSP82]].

### Correlated randomness

Before the inputs are chosen, a trusted dealer samples $(r_1, \ldots, r_n)$ from a distribution that the protocol specifies, which may depend on $n$, $\secpar$ and the functionality but not on the inputs, and hands $r_i$ to $P_i$ privately; this is the preprocessing model. Random OT correlations — [[Bea95 - Precomputing Oblivious Transfer|Bea95]] — and multiplication triples, sharings of $a$, $b$ and $ab$ for uniform $a, b$, as consumed by the online phases of [[BDOZ11 - Semi-homomorphic Encryption and Multiparty Computation|BDOZ11]] and [[DPSZ12 - Multiparty Computation from Somewhat Homomorphic Encryption|DPSZ12]], are examples. Triples descend from Beaver's circuit randomization, in which the random gate values are prepared within a secret-sharing-based protocol rather than by a dealer — [[Bea91 - Efficient Multiparty Protocols Using Circuit Randomization|Bea91]].

<!-- BEGIN GENERATED participates-in 99de2f6d3cb7 -->

## Participates in

**Builds on Interactive protocol**

- [Authenticated channels ⇒ Broadcast against $t < n/3$ (Lamport–Shostak–Pease)](authenticated-channels-to-byzantine-broadcast-t-lt-n-over-3-lsp82) (via [[interactive-protocol#authenticated-channels|Authenticated channels]])
- [[correlated-randomness-to-uc-mpc-bdoz11|Correlated randomness ⇒ UC MPC (BDOZ online phase)]] (via [[interactive-protocol#correlated-randomness|Correlated randomness]])
- [Secure channels ⇒ MPC with honest majority ($t < n/2$) (Rabin–Ben-Or)](honest-majority-t-lt-n-over-2-to-mpc-rb89) (via [[interactive-protocol#secure-channels|Secure channels]])
- [Secure channels ⇒ MPC with honest majority ($t < n/3$) (BGW)](honest-majority-t-n-3-or-t-n-2-to-mpc-bgw88) (via [[interactive-protocol#secure-channels|Secure channels]])
- [Secure channels ⇒ MPC with honest majority ($t < n/3$) with linear communication (Beerliová-Trubíniová–Hirt)](secure-channels-to-honest-majority-t-lt-n-over-3-bh08) (via [[interactive-protocol#secure-channels|Secure channels]])
- [Secure channels ⇒ MPC with honest majority ($t < n/3$) (Chaum–Crépeau–Damgård)](secure-channels-to-honest-majority-t-lt-n-over-3-ccd88) (via [[interactive-protocol#secure-channels|Secure channels]])
- [Secure channels ⇒ MPC with honest majority ($t < n/3$) from linear secret sharing (Cramer–Damgård–Maurer)](secure-channels-to-honest-majority-t-lt-n-over-3-cdm00) (via [[interactive-protocol#secure-channels|Secure channels]])
- [Secure channels ⇒ MPC with abort and honest majority ($t < n/2$) (CGH+18)](secure-channels-to-honest-majority-with-abort-t-lt-n-over-2-cgh18) (via [[interactive-protocol#secure-channels|Secure channels]])
- [Secure channels ⇒ Semi-honest MPC with honest majority ($t < n/2$) (BGW)](secure-channels-to-semi-honest-honest-majority-t-lt-n-over-2-bgw88) (via [[interactive-protocol#secure-channels|Secure channels]])

**Barriers**

- [[no-authenticated-channels-to-byzantine-broadcast-flm85|No reduction from authenticated channels to Byzantine broadcast]] (via [[interactive-protocol#authenticated-channels|Authenticated channels]]) — circumvented by [[ds-to-byzantine-broadcast-ds83|Digital signatures ⇒ Byzantine broadcast (Dolev–Strong)]]
- [[no-authenticated-channels-to-fair-coin-flipping-cle86|No reduction from authenticated channels to fair coin flipping]] (via [[interactive-protocol#authenticated-channels|Authenticated channels]])
- [[no-authenticated-channels-to-fair-mpc-cle86|No reduction from authenticated channels to fair MPC]] (via [[interactive-protocol#authenticated-channels|Authenticated channels]])
- [[no-authenticated-channels-to-uc-mpc-ckl03|No reduction from authenticated channels to UC MPC]] (via [[interactive-protocol#authenticated-channels|Authenticated channels]]) — circumvented by [[enhanced-trapdoor-permutation-to-uc-mpc-clos02|Enhanced TDP ⇒ UC MPC in the CRS model (CLOS)]], [[ideal-ot-and-prg-to-uc-mpc-ips08|Ideal OT + PRG ⇒ UC MPC (IPS)]], [[correlated-randomness-to-uc-mpc-bdoz11|Correlated randomness ⇒ UC MPC (BDOZ online phase)]]

<!-- END GENERATED participates-in -->
