---
type: primitive
status: draft
aliases:
  - PAKE
  - Password-authenticated key exchange
  - Password-based authenticated key exchange
title: Password-authenticated key exchange
id: pake
variants:
  uc-pake: "#uc-secure-pake"
  asymmetric-pake: "#asymmetric-pake"
---

# Password-authenticated key exchange

A password-authenticated key exchange (PAKE) protocol is an [[key-exchange#authenticated-key-exchange-ake|authenticated key exchange]] between a client and a server that share only a password, drawn from a dictionary $D$ that may be small: over a network the adversary controls, each session the adversary actively attacks lets it test at most one password guess, and eavesdropping lets it test none.

## Syntax

Following [[BPR00 - Authenticated Key Exchange Secure against Dictionary Attacks|BPR00]], there is a set $\mathsf{Client}$ of clients and a set $\mathsf{Server}$ of servers, and each pair $(C, S) \in \mathsf{Client} \times \mathsf{Server}$ shares a password $\mathit{pw}_{C,S} \in D$. A PAKE protocol $\Pi$ consists of:

- $\Setup(1^\secpar) \to \pp$, a randomized algorithm generating public parameters, with $\pp = 1^\secpar$ in the plain model,
- for each user $U \in \mathsf{Client} \cup \mathsf{Server}$, the stateful interactive algorithm run by each **instance** $\Pi^i_U$, $i \in \NN$, of $U$. An instance of a client $C$ communicating with a server $S$ has input $(\pp, \mathit{pw}_{C,S})$, and an instance of $S$ has input $(\pp, (\mathit{pw}_{C,S})_{C \in \mathsf{Client}})$. An instance processes incoming messages and eventually either rejects or **accepts**, outputting a partner identity $\mathit{pid}$, a session identity $\mathit{sid}$ and a session key $K \in \calK$.

Two instances are **partners** if both accepted with the same $\mathit{sid}$, each one's $\mathit{pid}$ naming the other's user.

## Properties

### Correctness

If the messages between an instance of a client $C$ communicating with a server $S$ and an instance of $S$ are delivered unchanged, both instances accept, are partners, and output the same session key, except with negligible probability.

### Security

The passwords are sampled independently and uniformly from $D$, and the adversary controls all communication through four oracles — [[BPR00 - Authenticated Key Exchange Secure against Dictionary Attacks|BPR00]]:

- $\mathsf{Send}(U, i, M)$ delivers the message $M$ to $\Pi^i_U$ and returns the instance's reply and whether it has accepted or rejected; a special message starts a client instance, naming its server;
- $\mathsf{Execute}(C, i, S, j)$ runs an honest execution between $\Pi^i_C$ and $\Pi^j_S$ and returns its transcript;
- $\mathsf{Reveal}(U, i)$ returns the session key of $\Pi^i_U$ if it has accepted;
- $\mathsf{Test}(U, i)$ returns, according to a hidden bit $b$, the session key of $\Pi^i_U$ ($b = 0$) or a uniform key ($b = 1$).

An instance is **fresh** if it has accepted and no $\mathsf{Reveal}$ query was made to it or to its partner. $\calA$ is **admissible** if it makes exactly one $\mathsf{Test}$ query, to an instance that is fresh at the end of the game; revealing the tested instance or its partner would hand $\calA$ the key.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{pake}}_{\Pi,D,\calA}(\secpar)$}
\begin{algorithmic}
\State $\pp \gets \Setup(1^\secpar)$; $b \getsr \bits$
\State $\mathit{pw}_{C,S} \getsr D$ for every $C \in \mathsf{Client}$ and $S \in \mathsf{Server}$
\State $b' \gets \calA^{\mathsf{Send}, \mathsf{Execute}, \mathsf{Reveal}, \mathsf{Test}}(\pp)$
\Comment{Admissible: one $\mathsf{Test}$ query, to an instance fresh at the end}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\mathsf{Test}(U, i)$}
\begin{algorithmic}
\If{$\Pi^i_U$ has not accepted}
\Return $\bot$
\EndIf
\State $K_0 :=$ the session key of $\Pi^i_U$; $K_1 \getsr \calK$
\Return $K_b$
\end{algorithmic}
\end{algorithm}
```

A PAKE protocol $\Pi$ is **secure** if for every dictionary $D$, which may depend on $\secpar$, and all efficient admissible $\calA$ making $q_{\mathrm{send}} = q_{\mathrm{send}}(\secpar)$ queries to $\mathsf{Send}$, there is a negligible function $\negl$ such that

$$
\Adv^{\mathrm{pake}}_{\Pi,D,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{pake}}_{\Pi,D,\calA}(\secpar) = 1\right] - 1\right| \le \frac{q_{\mathrm{send}}(\secpar)}{|D|} + \negl(\secpar)
$$

— [[BPR00 - Authenticated Key Exchange Secure against Dictionary Attacks|BPR00]]. The term $q_{\mathrm{send}}/|D|$ cannot be dropped: an adversary that runs the client's algorithm on its own password guesses against server instances succeeds with probability proportional to its number of guesses — standard. $\mathsf{Execute}$ queries do not count towards $q_{\mathrm{send}}$, so transcripts of honest executions must not let the adversary test password guesses offline.

# Variations

## Forward secrecy

[[BPR00 - Authenticated Key Exchange Secure against Dictionary Attacks|BPR00]] also define forward secrecy, in which the adversary may in addition corrupt users and learn their passwords, and session keys established before a corruption must remain pseudorandom.

## UC-secure PAKE

A **UC-secure PAKE** [[universal-composability-framework#uc-emulation|UC-realizes]] the password-based key-exchange functionality $\calF_{\mathrm{pwKE}}$ of [[CHKLM05 - Universally Composable Password-Based Key Exchange|CHKLM05]]. The environment hands each party its password, so no distribution on passwords is assumed and the passwords of different sessions may be correlated. The adversary may test one password guess per session instance, and a correct guess lets it choose that instance's key; two instances of a session whose passwords match and that the adversary did not attack receive the same uniform key — [[CHKLM05 - Universally Composable Password-Based Key Exchange|CHKLM05]]. CHKLM05 realize $\calF_{\mathrm{pwKE}}$ in the common reference string model under standard number-theoretic assumptions, and show that it cannot be realized in the plain model — [[CHKLM05 - Universally Composable Password-Based Key Exchange|CHKLM05]].

## Asymmetric PAKE

In an **asymmetric PAKE** (aPAKE) the server stores a mapping of the password rather than the password, and security is required even after the server is compromised: the only attack the compromise allows is an offline exhaustive dictionary attack against each user's password. A **strong** aPAKE is in addition secure against pre-computation attacks, which deterministic password mappings and salts sent in the clear allow — [[JKX18 - OPAQUE An Asymmetric PAKE Protocol Secure Against Pre-Computation Attacks|JKX18]]. JKX18 define strong aPAKE in the UC framework and build it from an [[oblivious-prf|OPRF]] together with either any aPAKE or any authenticated key-exchange protocol secure against key-compromise impersonation. OPAQUE, their instantiation of the second construction, is UC-secure in the [[random-oracle-model|random-oracle model]] and has two messages, three with mutual authentication — [[JKX18 - OPAQUE An Asymmetric PAKE Protocol Secure Against Pre-Computation Attacks|JKX18]].

# Other results

- Bellovin and Merritt introduced the problem with the Encrypted Key Exchange (EKE) protocols — [[BM92 - Encrypted Key Exchange Password-Based Protocols Secure against Dictionary Attacks|BM92]]; [[BPR00 - Authenticated Key Exchange Secure against Dictionary Attacks|BPR00]] prove the two-flow protocol at the core of EKE secure in an ideal-cipher model.
- In the common reference string model, [[decisional-diffie-hellman|DDH]] gives a three-round PAKE without random oracles ([[ddh-to-pake-koy01|DDH ⇒ PAKE]]) — [[KOY01 - Efficient Password-Authenticated Key Exchange Using Human-Memorable Passwords|KOY01]].
- [[GL03 - A Framework for Password-Based Authenticated Key Exchange|GL03]] generalize the protocol of KOY01 to a framework, in the common reference string model, built from non-malleable commitments, one-time signatures and [[hash-proof-system|smooth projective hash functions]], and instantiate it under DDH, [[quadratic-residuosity|quadratic residuosity]] and [$N$-th residuosity](decisional-composite-residuosity).
- Without any setup or random oracle, [[trapdoor-permutation|trapdoor permutations]] give session-key generation from passwords alone, under a definition in which the effect of an adversary attacking an execution is comparable to a constant number of queries of the form "is $w$ the password?" — [[GL01 - Session-Key Generation Using Human Passwords Only|GL01]].

<!-- BEGIN GENERATED participates-in 67869f83ce91 -->

## Participates in

**Produces Password-authenticated key exchange**

- [[ddh-to-pake-koy01|DDH ⇒ PAKE in the CRS model (Katz–Ostrovsky–Yung)]]

<!-- END GENERATED participates-in -->
