---
type: primitive
status: draft
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
  non-malleable-commitment: "#non-malleable-commitments"
  constant-round-non-malleable-commitment: "#constant-round-non-malleable-commitments"
  three-round-non-malleable-commitment: "#three-round-non-malleable-commitments"
---

# Commitment scheme

A _commitment scheme_ is a two-phase protocol between a committer and a receiver in which the committer binds to a value during the **commit phase** without revealing it, and then reveals the value in the **open phase**. The binding property ensures that no efficient committer can open one commitment to two different values; the hiding property ensures that no efficient receiver can distinguish commitments to two values of its choice before opening.

## Syntax

A _commitment scheme_ is a tuple of efficient algorithms $\mathsf{COM} = (\Gen, \Com, \Open)$ with respect to a message space $\calM$, commitment space $\calC$, and decommitment space $\calD$:

- $\Gen(1^\secpar) \to \pp,$ is a randomized algorithm that outputs public parameters $\pp,$
- $\Com(\pp, m; r) \to (c, d),$ is a randomized algorithm that takes a message $m \in \calM$ and randomness $r$, and outputs a commitment $c \in \calC$ and decommitment string $d \in \calD,$
- $\Open(\pp, c, d) \to m \text{ or } \bot,$ is a deterministic algorithm that opens a commitment $c$ using decommitment $d$, returning the message or $\bot$ on failure.

More generally, the commit phase is an interactive protocol between the committer $C(m)$ and the receiver $R$ whose transcript is the commitment $c$ and after which $C$ holds a decommitment $d$; the syntax above is the case where the receiver's only message is $\pp \gets \Gen(1^\secpar)$.

## Properties

### Correctness

A commitment scheme $\mathsf{COM} = (\Gen, \Com, \Open)$ is **perfectly correct** if for all $\secpar \in \NN$ and $m \in \calM$,

$$
\Pr\!\left[\Open(\pp, c, d) = m\right] = 1,
$$

over $\pp \gets \Gen(1^\secpar)$ and $(c, d) \gets \Com(\pp, m)$.

### Hiding

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{hide}}_{\mathsf{COM},\calA}(\secpar)$}
\begin{algorithmic}
\State $\pp \gets \Gen(1^\secpar)$; $b \getsr \bits$
\State $(m_0, m_1, \stA) \gets \calA(\pp)$
\Comment{$m_0, m_1 \in \calM$, $|m_0| = |m_1|$}
\State $(c, d) \gets \Com(\pp, m_b)$
\State $b' \gets \calA(\stA, c)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An admissible $\calA$ outputs $m_0, m_1 \in \calM$ with $|m_0| = |m_1|$; otherwise the length of $c$ may reveal $b$. A commitment scheme $\mathsf{COM}$ is **computationally hiding** if for all admissible efficient $\calA$,

$$
\Adv^{\mathrm{hide}}_{\mathsf{COM},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{hide}}_{\mathsf{COM},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

A commitment is **statistically hiding** if this holds even against computationally unbounded adversaries that also choose $\pp$, or, for an interactive commit phase, play the receiver.

### Binding

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{bind}}_{\mathsf{COM},\calA}(\secpar)$}
\begin{algorithmic}
\State $\pp \gets \Gen(1^\secpar)$
\State $(c, d_0, d_1) \gets \calA(\pp)$
\State $m_0 \gets \Open(\pp, c, d_0)$; $m_1 \gets \Open(\pp, c, d_1)$
\Return $[m_0 \ne \bot \land m_1 \ne \bot \land m_0 \ne m_1]$
\end{algorithmic}
\end{algorithm}
```

A commitment scheme $\mathsf{COM}$ is **computationally binding** if for all efficient $\calA$,

$$
\Adv^{\mathrm{bind}}_{\mathsf{COM},\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{bind}}_{\mathsf{COM},\calA}(\secpar) = 1\right]
$$

is negligible.

A commitment is **statistically binding** if this holds even against computationally unbounded adversaries.

Without an ideal functionality or a trusted dealer, no commitment scheme is simultaneously statistically hiding and statistically binding — folklore; in the [[oblivious-transfer#ideal-ot-functionality|OT-hybrid model]] Kilian's commitment is both ([[ideal-ot-to-com-kil88|ideal OT ⇒ COM]]) — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]].

# Variations

## Hiding for adversarial public parameters

A commitment scheme is **hiding for adversarial public parameters** if the hiding game's advantage stays negligible when $\calA$ chooses $\pp$ itself; binding is still required only for $\pp \gets \Gen(1^\secpar)$. The receiver can then sample $\pp$ and send it as its first message. Naor's commitment from a [[pseudorandom-generator|PRG]] has this property, since $G(s)$ and $G(s) \oplus r$ are both pseudorandom for every $r$ ([[prg-to-com-naor91|PRG ⇒ COM]]) — [[Naor91 - Bit commitment using pseudorandomness|Naor91]].

## Trapdoor commitments

A _trapdoor commitment_ (or equivocable commitment) is a commitment scheme with an additional trapdoor $\td$ (generated alongside $\pp$) that allows equivocation: given $\td$, one can produce a commitment $c$ and a state from which, for every $m \in \calM$, one can compute a decommitment $d$ with $\Open(\pp, c, d) = m$, such that for every $m \in \calM$ the resulting $(\pp, c, d)$ is indistinguishable from $(\pp, c, d)$ with $\pp \gets \Gen(1^\secpar)$ and $(c, d) \gets \Com(\pp, m)$.

## Vector commitments

A _vector commitment_ allows committing to an ordered vector $(m_1, \ldots, m_n)$ such that one can later open any single position $m_i$ with a short proof. It is **position binding** if for all efficient $\calA$, given $\pp \gets \Gen(1^\secpar)$, the probability that $\calA$ outputs a commitment $c$, a position $i \in \{1, \ldots, n\}$, values $m \ne m'$ and two openings of $c$ at position $i$, one to $m$ and one to $m'$, that both verify, is negligible.

## UC commitment

The bit-commitment functionality $\calF_{\mathrm{COM}}$ serves one commitment from a committer $P_i$ to a receiver $P_j$. On input $(\mathsf{Commit}, \mathit{sid}, P_i, P_j, b)$ from $P_i$, with $b \in \bits$, it records $b$, sends $(\mathsf{Receipt}, \mathit{sid}, P_i, P_j)$ to $P_j$ and to the adversary, and ignores later Commit inputs. On input $(\mathsf{Open}, \mathit{sid}, P_i, P_j)$ from $P_i$, if it has recorded a bit $b$, it sends $(\mathsf{Open}, \mathit{sid}, P_i, P_j, b)$ to $P_j$ and to the adversary and halts — [[CF01 - Universally Composable Commitments|CF01]]. A **UC commitment** is a two-party protocol in which, with non-negligible probability, the receiver accepts a commitment of the honest committer and outputs a receipt, and which [[universal-composability-framework#uc-emulation|UC-realizes]] $\calF_{\mathrm{COM}}$ against a malicious adversary that statically corrupts either party, possibly in a hybrid model such as the common reference string model; a result against adaptive corruptions says so. In the common reference string model each session of $\calF_{\mathrm{COM}}$ has its own reference string, so such a protocol uses a fresh string for every commitment — [[CF01 - Universally Composable Commitments|CF01]].

Over [[interactive-protocol#authenticated-channels|authenticated channels]] without setup, no protocol in which only the committer and the receiver take part is a UC commitment ([[no-authenticated-channels-to-uc-commitment-cf01|no UC commitment from authenticated channels]]) — [[CF01 - Universally Composable Commitments|CF01]]. In the common reference string model [[trapdoor-permutation|trapdoor permutations]] suffice ([[tdp-to-uc-commitment-cf01|TDP ⇒ UC commitment]]) — [[CF01 - Universally Composable Commitments|CF01]].

### UC multi-commitment

The multi-commitment functionality $\calF_{\mathrm{MCOM}}$ serves any number of commitments, between any pairs of parties, in one session: every input carries a commitment identifier $\mathit{cid}$, and $\calF_{\mathrm{MCOM}}$ treats the inputs with each $\mathit{cid}$ as $\calF_{\mathrm{COM}}$ does, except that it does not halt after an opening — [[CF01 - Universally Composable Commitments|CF01]]. A **UC multi-commitment** is a protocol that UC-realizes $\calF_{\mathrm{MCOM}}$, possibly in a hybrid model; in the common reference string model all commitments of a session then share one reference string. A [[trapdoor-permutation#claw-free-trapdoor-permutations|claw-free pair of trapdoor permutations]] together with a [[public-key-encryption#cca-security|CCA2-secure PKE]] gives one ([[claw-free-tdp-and-cca2-pke-to-uc-multi-commitment-cf01|claw-free TDP + CCA2 PKE ⇒ UC multi-commitment]]) — [[CF01 - Universally Composable Commitments|CF01]].

## Non-malleable commitments

A commitment scheme is **non-malleable** if a man-in-the-middle adversary that receives a commitment from an honest committer while committing to an honest receiver cannot commit to a value related to the honest committer's. DDN91 introduced the notion, with a definition by comparison to a simulator that takes part in no session with the honest committer, and constructed such commitments from any [[hash-function#preimage-resistance-one-wayness|one-way function]] ([[owf-to-non-malleable-commitment-ddn91|OWF ⇒ NM commitment]]) — [[DDN91 - Non-Malleable Cryptography (Extended Abstract)|DDN91]].

The formulation below is tag-based and compares the adversary's committed value for two honest values, as in [[LP11a - Constant-round non-malleable commitments from any one-way function|LP11a]]. A _tag-based_ commitment scheme $\mathsf{COM} = \langle C, R \rangle$ is a statistically binding commitment scheme with an interactive commit phase, in which the committer $C(t, v)$ and the receiver $R(t)$ share a tag $t \in \bits^\secpar$ that plays the role of the committer's identity. For a transcript $\tau$ of the commit phase, $\mathsf{val}(\tau)$ is the value to which $\tau$ can be opened, and $\bot$ if the receiver does not accept, if $\tau$ has no valid opening, or if it has valid openings to two values. The adversary plays the receiver in a _left_ session with $C(t, v_b)$ and the committer in a _right_ session with $R(\tilde t)$, for a tag $\tilde t$ of its choice, and schedules the messages of both sessions.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{nm}}_{\mathsf{COM},\calA}(\secpar)$}
\begin{algorithmic}
\State $b \getsr \bits$
\State $(v_0, v_1, t, \stA) \gets \calA(1^\secpar)$
\Comment{$v_0, v_1 \in \calM$, $|v_0| = |v_1|$, $t \in \bits^\secpar$}
\State Run $\langle C(t, v_b), \calA(\stA) \rangle$ and $\langle \calA(\stA), R(\tilde t) \rangle$, scheduled by $\calA$, which outputs its updated state $\stA$
\Comment{$\calA$ chooses $\tilde t \in \bits^\secpar$; $\tilde\tau$ is the right transcript}
\State $\tilde v \gets \mathsf{val}(\tilde\tau)$
\If{$\tilde t = t$}
\State $\tilde v \gets \bot$
\Comment{a right session under the left tag $t$ yields no value}
\EndIf
\State $b' \gets \calA(\stA, \tilde v)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A tag-based commitment scheme $\mathsf{COM}$ is **non-malleable** if for all efficient $\calA$,

$$
\Adv^{\mathrm{nm}}_{\mathsf{COM},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{nm}}_{\mathsf{COM},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. The game discards $\tilde v$ when $\tilde t = t$, since otherwise $\calA$ wins by relaying each message between the two sessions, which commits it to $v_b$. An adversary that leaves the right session unfinished receives $\tilde v = \bot$, so a non-malleable scheme is also hiding against a malicious receiver ([[non-malleable-commitment-to-com|NM commitment ⇒ COM]]) — standard.

### Concurrent non-malleability

In the concurrent version $\calA$ takes part in polynomially many left and right sessions, which it schedules, and the values it commits to in the right sessions must not depend on the values committed in the left sessions — [[PR05a - Concurrent Non-Malleable Commitments|PR05a]].

### Constant-round non-malleable commitments

A non-malleable commitment scheme whose commit phase has a constant number of messages. Bar02 gave the first such scheme without setup, with a non-black-box security proof — [[Bar02 - Constant-Round Coin-Tossing with a Man in the Middle or Realizing the Shared Random String Model|Bar02]]. [[hash-function#collision-resistance|Collision-resistant hash functions]] suffice ([[crhf-to-constant-round-non-malleable-commitment-pr05|CRHF ⇒ constant-round NM commitment]]) — [[PR05 - New and improved constructions of non-malleable cryptographic protocols|PR05]], and so do one-way functions ([[owf-to-constant-round-non-malleable-commitment-lp11-goy11|OWF ⇒ constant-round NM commitment]]) — [[LP11a - Constant-round non-malleable commitments from any one-way function|LP11a]], [[Goy11 - Constant round non-malleable protocols using one way functions|Goy11]].

### Three-round non-malleable commitments

A non-malleable commitment scheme whose commit phase has three messages. GPR16 give a three-round scheme that is non-malleable against _synchronizing_ adversaries, which answer each message of one session at once with the corresponding message of the other, and that makes black-box use of any non-interactive statistically binding commitment scheme, so that any [[injective-one-way-function|injective one-way function]] suffices; their extended protocol, for general adversaries, needs a stronger assumption — [[GPR16 - Textbook non-malleable commitments|GPR16]]. Against adversaries that schedule the two sessions arbitrarily, as in the game above, injective one-way functions suffice ([[injective-one-way-function-to-three-round-non-malleable-commitment-gr19|Injective OWF ⇒ three-round NM commitment]]) — [[GR19 - Non-Malleable Commitments using Goldreich-Levin List Decoding|GR19]].

# Other results

- [[owf-to-prg-hill99|OWF ⇒ PRG]] — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], then [[prg-to-com-naor91|PRG ⇒ COM]] — [[Naor91 - Bit commitment using pseudorandomness|Naor91]]
- [[pke-to-com|PKE ⇒ COM]] — folklore
- [[dlog-to-com-ped91|DLOG ⇒ statistically hiding COM]] — [[Ped91 - Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing|Ped91b]]

<!-- BEGIN GENERATED participates-in 964bc85ba46a -->

## Participates in

**Builds on Commitment scheme**

- [[adversarial-pp-hiding-commitment-to-com|Commitment hiding for adversarial parameters ⇒ COM]] (via [[commitment-scheme#hiding-for-adversarial-public-parameters|Hiding for adversarial public parameters]])
- [[com-to-coin-flipping-blu81|COM ⇒ Coin flipping (Blum)]] (via [[commitment-scheme#hiding-for-adversarial-public-parameters|Hiding for adversarial public parameters]])
- [[com-to-owf-il89|COM ⇒ OWF]]
- [[constant-round-non-malleable-commitment-to-non-malleable-commitment|Constant-round NM commitment ⇒ NM commitment]] (via [[commitment-scheme#constant-round-non-malleable-commitments|Constant-round non-malleable commitments]])
- [[non-malleable-commitment-to-com|NM commitment ⇒ COM]] (via [[commitment-scheme#non-malleable-commitments|Non-malleable commitments]])
- [[statistically-hiding-commitment-to-statistical-zk-argument-bcc88|Statistically hiding COM ⇒ Statistical ZK arguments for NP]] (via [[commitment-scheme#hiding|Hiding]])
- [[three-round-non-malleable-commitment-to-constant-round-non-malleable-commitment|Three-round NM commitment ⇒ Constant-round NM commitment]] (via [[commitment-scheme#three-round-non-malleable-commitments|Three-round non-malleable commitments]])

**Produces Commitment scheme**

- [[adversarial-pp-hiding-commitment-to-com|Commitment hiding for adversarial parameters ⇒ COM]]
- [[claw-free-tdp-and-cca2-pke-to-uc-multi-commitment-cf01|Claw-free TDP + CCA2 PKE ⇒ UC multi-commitment in the CRS model (Canetti–Fischlin)]] (via [[commitment-scheme#uc-multi-commitment|UC multi-commitment]])
- [[constant-round-non-malleable-commitment-to-non-malleable-commitment|Constant-round NM commitment ⇒ NM commitment]] (via [[commitment-scheme#non-malleable-commitments|Non-malleable commitments]])
- [[crhf-to-constant-round-non-malleable-commitment-pr05|CRHF ⇒ Constant-round NM commitment (Pass–Rosen)]] (via [[commitment-scheme#constant-round-non-malleable-commitments|Constant-round non-malleable commitments]])
- [[crhf-to-statistically-hiding-commitment-dpp97|CRHF ⇒ Statistically hiding COM]] (via [[commitment-scheme#hiding|Hiding]])
- [[dcr-to-com|DCR ⇒ COM]]
- [[dlog-to-com-ped91|DLOG ⇒ Statistically hiding commitment]] (via [[commitment-scheme#hiding|Hiding]])
- [[ideal-ot-to-com-kil88|Ideal OT ⇒ COM (Kilian)]]
- [[injective-one-way-function-to-statistically-binding-commitment|Injective OWF ⇒ Statistically binding COM]] (via [[commitment-scheme#binding|Binding]])
- [[injective-one-way-function-to-three-round-non-malleable-commitment-gr19|Injective OWF ⇒ Three-round NM commitment (Goyal–Richelson)]] (via [[commitment-scheme#three-round-non-malleable-commitments|Three-round non-malleable commitments]])
- [[non-malleable-commitment-to-com|NM commitment ⇒ COM]]
- [[ot-to-com|Malicious OT ⇒ COM (Kilian)]]
- [[owf-to-constant-round-non-malleable-commitment-lp11-goy11|OWF ⇒ Constant-round NM commitment (Lin–Pass, Goyal)]] (via [[commitment-scheme#constant-round-non-malleable-commitments|Constant-round non-malleable commitments]])
- [[owf-to-non-malleable-commitment-ddn91|OWF ⇒ NM commitment (Dolev–Dwork–Naor)]] (via [[commitment-scheme#non-malleable-commitments|Non-malleable commitments]])
- [[owf-to-statistically-hiding-commitment-hr07|OWF ⇒ Statistically hiding COM (Haitner–Reingold)]] (via [[commitment-scheme#hiding|Hiding]])
- [[owp-to-statistically-hiding-commitment-novy98|OWP ⇒ Statistically hiding COM (NOVY)]] (via [[commitment-scheme#hiding|Hiding]])
- [[pcs-to-vector-commitments|PCS ⇒ Vector commitments]] (via [[commitment-scheme#vector-commitments|Vector commitments]])
- [[pke-to-com|PKE ⇒ COM]]
- [[prg-to-com-naor91|PRG ⇒ COM]] (via [[commitment-scheme#hiding-for-adversarial-public-parameters|Hiding for adversarial public parameters]])
- [[qr-to-com|QR ⇒ COM]]
- [[strong-rsa-to-com|Strong RSA ⇒ COM]]
- [[tdp-to-uc-commitment-cf01|TDP ⇒ UC commitment in the CRS model (Canetti–Fischlin)]] (via [[commitment-scheme#uc-commitment|UC commitment]])
- [[three-round-non-malleable-commitment-to-constant-round-non-malleable-commitment|Three-round NM commitment ⇒ Constant-round NM commitment]] (via [[commitment-scheme#constant-round-non-malleable-commitments|Constant-round non-malleable commitments]])

**Barriers**

- [[no-authenticated-channels-to-uc-commitment-cf01|No reduction from authenticated channels to UC commitment]] (via [[commitment-scheme#uc-commitment|UC commitment]]) — circumvented by [[tdp-to-uc-commitment-cf01|TDP ⇒ UC commitment in the CRS model (Canetti–Fischlin)]]

<!-- END GENERATED participates-in -->
