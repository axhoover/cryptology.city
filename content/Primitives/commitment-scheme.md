---
type: primitive
status: stub
aliases:
  - COM
  - Commitment scheme
  - Commitment
title: Commitment scheme
id: com
variants:
  statistically-binding-commitment: "#binding"
  statistically-hiding-commitment: "#hiding"
  vector-commitment: "#vector-commitments"
  adversarial-pp-hiding-commitment: "#hiding-for-adversarial-public-parameters"
  uc-commitment: "#uc-commitment"
  uc-multi-commitment: "#uc-multi-commitment"
---

# Commitment scheme

A _commitment scheme_ is a two-phase protocol between a committer and a verifier in which the committer binds to a value during the **commit phase** (without revealing it), and then reveals the value in the **open phase**. The binding property ensures the committer cannot change the value after committing; the hiding property ensures the verifier learns nothing about the value before opening.

## Syntax

A _commitment scheme_ is a tuple of efficient algorithms $\mathsf{COM} = (\Gen, \Com, \Open)$ with respect to a message space $\calM$, commitment space $\calC$, and decommitment space $\calD$:

- $\Gen(1^\secpar) \to \pp,$ is a randomized algorithm that outputs public parameters $\pp,$
- $\Com(\pp, m; r) \to (c, d),$ is a randomized algorithm that takes a message $m \in \calM$ and randomness $r$, and outputs a commitment $c \in \calC$ and decommitment string $d \in \calD,$
- $\Open(\pp, c, d) \to m \text{ or } \bot,$ is a deterministic algorithm that opens a commitment $c$ using decommitment $d$, returning the message or $\bot$ on failure.

More generally, the commit phase is an interactive protocol between the committer $C(m)$ and the receiver $R$ whose transcript is the commitment $c$ and after which $C$ holds a decommitment $d$; the syntax above is the case where the receiver's only message is $\pp \gets \Gen(1^\secpar)$.

## Properties

### Correctness

For all $\secpar \in \NN$ and $m \in \calM$, $\Open(\pp, c, d) = m$ with probability 1 over $\pp \gets \Gen(1^\secpar)$ and $(c, d) \gets \Com(\pp, m)$.

### Hiding

The commitment $c$ reveals no information about $m$ before opening. Computationally:

$$\Adv^{\mathrm{hide}}_{\mathsf{COM},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{hide}}_{\mathsf{COM},\calA}(\secpar) = 1\right] - 1\right|$$

is negligible, where the game samples $\pp \gets \Gen(1^\secpar)$, receives $(m_0, m_1)$ from $\calA$, picks $b \getsr \bits$, computes $(c, d) \gets \Com(\pp, m_b)$, sends $c$ to $\calA$, receives $b'$ from $\calA$, and outputs $[b' = b]$.

A commitment is **statistically hiding** if this holds even against computationally unbounded adversaries that also choose $\pp$, or, for an interactive commit phase, play the receiver.

### Binding

No efficient committer can open a commitment to two different messages:

$$\Adv^{\mathrm{bind}}_{\mathsf{COM},\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{bind}}_{\mathsf{COM},\calA}(\secpar) = 1\right]$$

is negligible, where the game samples $\pp \gets \Gen(1^\secpar)$, receives $(c, d_0, d_1)$ from $\calA$, and outputs 1 iff $\Open(\pp,c,d_0) \ne \bot$, $\Open(\pp,c,d_1) \ne \bot$, and $\Open(\pp,c,d_0) \ne \Open(\pp,c,d_1)$.

A commitment is **statistically binding** if this holds even against computationally unbounded adversaries.

**Note:** Without an ideal functionality or a trusted dealer, no commitment scheme is simultaneously statistically hiding and statistically binding — folklore; in the OT-hybrid model Kilian's commitment is both ([[ideal-ot-to-com-kil88|ideal OT ⇒ COM]]) — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]]. Without one, the achievable regimes are: (1) statistically binding / computationally hiding, (2) computationally binding / statistically hiding, and (3) computationally binding / computationally hiding.

# Variations

## Hiding for adversarial public parameters

A commitment scheme is **hiding for adversarial public parameters** if the hiding game's advantage stays negligible when $\calA$ chooses $\pp$ itself; binding is still required only for $\pp \gets \Gen(1^\secpar)$. The receiver can then sample $\pp$ and send it as its first message. Naor's commitment from a PRG has this property, since $G(s)$ and $G(s) \oplus r$ are both pseudorandom for every $r$ — [[Naor91 - Bit commitment using pseudorandomness|Naor91]].

## Trapdoor commitments

A _trapdoor commitment_ (or equivocable commitment) is a commitment scheme with an additional trapdoor $\td$ (generated alongside $\pp$) that allows equivocation: given $\td$, for any commitment $c$ and any two messages $m_0, m_1$, one can produce decommitment strings $d_0, d_1$ with $\Open(\pp, c, d_0) = m_0$ and $\Open(\pp, c, d_1) = m_1$. Used in zero-knowledge proof constructions.

## Vector commitments

A _vector commitment_ allows committing to an ordered vector $(m_1, \ldots, m_n)$ such that one can later open any single position $m_i$ with a short proof. Used in verifiable data structures and SNARKs.

## UC commitment

The bit-commitment functionality $\calF_{\mathrm{COM}}$ serves one commitment from a committer $P_i$ to a receiver $P_j$. On input $(\mathsf{Commit}, \mathit{sid}, P_i, P_j, b)$ from $P_i$, with $b \in \bits$, it records $b$, sends $(\mathsf{Receipt}, \mathit{sid}, P_i, P_j)$ to $P_j$ and to the adversary, and ignores later Commit inputs. On input $(\mathsf{Open}, \mathit{sid}, P_i, P_j)$ from $P_i$, if it has recorded a bit $b$, it sends $(\mathsf{Open}, \mathit{sid}, P_i, P_j, b)$ to $P_j$ and to the adversary and halts — [[CF01 - Universally Composable Commitments|CF01]]. A **UC commitment** is a two-party protocol in which, with non-negligible probability, the receiver accepts a commitment of the honest committer and outputs a receipt, and which [[universal-composability-framework#uc-emulation|UC-realizes]] $\calF_{\mathrm{COM}}$ against a malicious adversary that statically corrupts either party, possibly in a hybrid model such as the common reference string model; a result against adaptive corruptions says so. In the common reference string model each session of $\calF_{\mathrm{COM}}$ has its own reference string, so such a protocol uses a fresh string for every commitment — [[CF01 - Universally Composable Commitments|CF01]].

Over [[interactive-protocol#authenticated-channels|authenticated channels]] without setup, no protocol in which only the committer and the receiver take part is a UC commitment ([[no-authenticated-channels-to-uc-commitment-cf01|no UC commitment from authenticated channels]]) — [[CF01 - Universally Composable Commitments|CF01]]. In the common reference string model trapdoor permutations suffice ([[tdp-to-uc-commitment-cf01|TDP ⇒ UC commitment]]) — [[CF01 - Universally Composable Commitments|CF01]].

### UC multi-commitment

The multi-commitment functionality $\calF_{\mathrm{MCOM}}$ serves any number of commitments, between any pairs of parties, in one session: every input carries a commitment identifier $\mathit{cid}$, and $\calF_{\mathrm{MCOM}}$ treats the inputs with each $\mathit{cid}$ as $\calF_{\mathrm{COM}}$ does, except that it does not halt after an opening — [[CF01 - Universally Composable Commitments|CF01]]. A **UC multi-commitment** is a protocol that UC-realizes $\calF_{\mathrm{MCOM}}$, possibly in a hybrid model; in the common reference string model all commitments of a session then share one reference string. A claw-free pair of trapdoor permutations together with a CCA2-secure PKE gives one ([[claw-free-tdp-and-cca2-pke-to-uc-multi-commitment-cf01|claw-free TDP + CCA2 PKE ⇒ UC multi-commitment]]) — [[CF01 - Universally Composable Commitments|CF01]].

# Other results

- [[owf-to-prg-hill99|OWF ⇒ PRG]]
- [[prg-to-com-naor91|PRG ⇒ COM]]
- [[pke-to-com|PKE ⇒ COM]]
- [[dlog-to-com-ped91|DLOG ⇒ COM]]

<!-- BEGIN GENERATED participates-in 763f76829d6c -->

## Participates in

**Builds on Commitment scheme**

- [[adversarial-pp-hiding-commitment-to-com|Commitment hiding for adversarial parameters ⇒ COM]] (via [[commitment-scheme#hiding-for-adversarial-public-parameters|Hiding for adversarial public parameters]])
- [[com-to-coin-flipping-blu81|COM ⇒ Coin flipping (Blum)]] (via [[commitment-scheme#hiding-for-adversarial-public-parameters|Hiding for adversarial public parameters]])
- [[com-to-owf-il89|COM ⇒ OWF]]
- [[statistically-hiding-commitment-to-statistical-zk-argument-bcc88|Statistically hiding COM ⇒ Statistical ZK arguments for NP]] (via [[commitment-scheme#hiding|Hiding]])

**Produces Commitment scheme**

- [[adversarial-pp-hiding-commitment-to-com|Commitment hiding for adversarial parameters ⇒ COM]]
- [[claw-free-tdp-and-cca2-pke-to-uc-multi-commitment-cf01|Claw-free TDP + CCA2 PKE ⇒ UC multi-commitment in the CRS model (Canetti–Fischlin)]] (via [[commitment-scheme#uc-multi-commitment|UC multi-commitment]])
- [[crhf-to-statistically-hiding-commitment-dpp97|CRHF ⇒ Statistically hiding COM]] (via [[commitment-scheme#hiding|Hiding]])
- [[dcr-to-com|DCR ⇒ COM]]
- [[dlog-to-com-ped91|DLOG ⇒ Statistically hiding commitment]] (via [[commitment-scheme#hiding|Hiding]])
- [[ideal-ot-to-com-kil88|Ideal OT ⇒ COM (Kilian)]]
- [[injective-one-way-function-to-statistically-binding-commitment|Injective OWF ⇒ Statistically binding COM]] (via [[commitment-scheme#binding|Binding]])
- [[ot-to-com|Malicious OT ⇒ COM (Kilian)]]
- [[owf-to-statistically-hiding-commitment-hr07|OWF ⇒ Statistically hiding COM (Haitner–Reingold)]] (via [[commitment-scheme#hiding|Hiding]])
- [[owp-to-statistically-hiding-commitment-novy98|OWP ⇒ Statistically hiding COM (NOVY)]] (via [[commitment-scheme#hiding|Hiding]])
- [[pcs-to-vector-commitments|PCS ⇒ Vector commitments]] (via [[commitment-scheme#vector-commitments|Vector commitments]])
- [[pke-to-com|PKE ⇒ COM]]
- [[prg-to-com-naor91|PRG ⇒ COM]] (via [[commitment-scheme#hiding-for-adversarial-public-parameters|Hiding for adversarial public parameters]])
- [[qr-to-com|QR ⇒ COM]]
- [[strong-rsa-to-com|Strong RSA ⇒ COM]]
- [[tdp-to-uc-commitment-cf01|TDP ⇒ UC commitment in the CRS model (Canetti–Fischlin)]] (via [[commitment-scheme#uc-commitment|UC commitment]])

**Barriers**

- [[no-authenticated-channels-to-uc-commitment-cf01|No reduction from authenticated channels to UC commitment]] (via [[commitment-scheme#uc-commitment|UC commitment]]) — circumvented by [[tdp-to-uc-commitment-cf01|TDP ⇒ UC commitment in the CRS model (Canetti–Fischlin)]]

<!-- END GENERATED participates-in -->
