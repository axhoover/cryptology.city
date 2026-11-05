---
type: primitive
status: draft
aliases:
  - KE
  - Key exchange
  - Key agreement
  - DH key exchange
  - Diffie-Hellman key exchange
title: Key exchange
id: ke
variants:
  authenticated-key-exchange: "#authenticated-key-exchange-ake"
  multi-party-key-exchange: "#multi-party-key-exchange"
  non-interactive-key-exchange: "#non-interactive-key-exchange-nike"
  multi-party-nike: "#multiparty-non-interactive-key-exchange"
  three-party-nike: "#three-party-nike"
---

# Key exchange

A _key exchange_ (or _key agreement_) protocol allows two parties communicating over a public, authenticated channel to establish a shared secret key that is computationally indistinguishable from uniformly random to any eavesdropper.

## Syntax

A two-party key exchange protocol is a pair of interactive algorithms $\Pi = (\mathsf{KE}_A, \mathsf{KE}_B)$ with key space $\calK$, run by parties $A$ and $B$ on input $1^\secpar$ over a public channel. An execution $\langle \mathsf{KE}_A(1^\secpar), \mathsf{KE}_B(1^\secpar) \rangle \to (k_A, k_B)$ outputs keys $k_A, k_B \in \calK$ to $A$ and $B$; its [[interactive-protocol#Transcript|transcript]] $\tau$ is the sequence of all messages sent.

## Properties

### Correctness

A key exchange protocol $\Pi = (\mathsf{KE}_A, \mathsf{KE}_B)$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$,

$$
\Pr\!\left[k_A = k_B\right] \ge 1 - \varepsilon,
$$

over the randomness of both parties in $(k_A, k_B) \gets \langle \mathsf{KE}_A(1^\secpar), \mathsf{KE}_B(1^\secpar) \rangle$. When $\varepsilon = 0$, $\Pi$ is **perfectly correct**.

### Security (indistinguishability from random)

The adversary sees the transcript $\tau$ of an honest execution, in which $A$ and $B$ output keys $k_A$ and $k_B$, and must distinguish $k_A$ from a uniform key.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ke}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\tau, k_A, k_B) \gets \langle \mathsf{KE}_A(1^\secpar), \mathsf{KE}_B(1^\secpar) \rangle$; $b \getsr \bits$
\State $k_0 := k_A$; $k_1 \getsr \calK$
\State $b' \gets \calA(1^\secpar, \tau, k_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A key exchange protocol $\Pi = (\mathsf{KE}_A, \mathsf{KE}_B)$ is **secure** if for all efficient $\calA$,

$$
\Adv^{\mathrm{ke}}_{\Pi,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{ke}}_{\Pi,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

# Variations

## Non-interactive key exchange (NIKE)

A NIKE allows any two parties to derive the same shared key, each from its own secret key and the other's public key, with no interaction at all. Diffie-Hellman over a cyclic group is the canonical example: $k = g^{ab}$ given public keys $g^a$ and $g^b$ — [[DH76 - New Directions in Cryptography|DH76]].

A NIKE is a tuple $\Pi = (\Setup, \Gen, \Combine)$ of efficient algorithms with key space $\calK$:

- $\Setup(1^\secpar) \to \pp$, a randomized algorithm generating public parameters common to all parties, with $\pp = 1^\secpar$ when there is no setup;
- $\Gen(\pp) \to (\pk, \sk)$, a randomized algorithm generating a party's key pair;
- $\Combine(\sk, \pk') \to k$, a deterministic algorithm taking a party's secret key and another party's public key and outputting a shared key $k \in \calK$ or $\bot$.

A NIKE $\Pi$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$,

$$
\Pr\!\left[\Combine(\sk_1, \pk_2) = \Combine(\sk_2, \pk_1) \ne \bot\right] \ge 1 - \varepsilon,
$$

over $\pp \gets \Setup(1^\secpar)$ and independent $(\pk_1, \sk_1), (\pk_2, \sk_2) \gets \Gen(\pp)$. When $\varepsilon = 0$, $\Pi$ is **perfectly correct**.

### Security for honest key pairs

The adversary sees the public parameters and two honestly generated public keys, and must distinguish their shared key from a uniform key.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{nike}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $\pp \gets \Setup(1^\secpar)$; $b \getsr \bits$
\State $(\pk_1, \sk_1) \gets \Gen(\pp)$; $(\pk_2, \sk_2) \gets \Gen(\pp)$
\State $k_0 := \Combine(\sk_1, \pk_2)$; $k_1 \getsr \calK$
\State $b' \gets \calA(\pp, \pk_1, \pk_2, k_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A NIKE $\Pi$ is **secure** if for all efficient $\calA$,

$$
\Adv^{\mathrm{nike}}_{\Pi,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{nike}}_{\Pi,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

### CKS models

[[FHKP13 - Non-Interactive Key Exchange|FHKP13]] define stronger models, building on the model of [[CKS08 - The Twin Diffie-Hellman Problem and Applications|CKS08]], in which the adversary interacts with many parties named by identities, which $\Gen$ and $\Combine$ take as additional inputs. In the **CKS-light** model the adversary may register honest identities, whose key pairs the challenger generates and whose public keys it returns; register corrupt identities with public keys of its choice; obtain the key an honest identity shares with a corrupt one; and make one $\mathsf{Test}$ query on two honest identities, answered with their shared key ($b = 0$) or a uniform key ($b = 1$) — [[FHKP13 - Non-Interactive Key Exchange|FHKP13]]. The heavier models of [[FHKP13 - Non-Interactive Key Exchange|FHKP13]], among them **CKS-heavy**, add queries that reveal keys shared by two honest identities and secret keys of honest identities outside the tested pairs, and allow several $\mathsf{Test}$ queries; security in CKS-light implies security in each of them, with a polynomial loss — [[FHKP13 - Non-Interactive Key Exchange|FHKP13]]. Each model comes in a version with dishonest key registration, in which the adversary registers arbitrary public keys for corrupt identities, and one with honest key registration, in which it cannot — [[FHKP13 - Non-Interactive Key Exchange|FHKP13]].

[[CKS08 - The Twin Diffie-Hellman Problem and Applications|CKS08]] give a twinned variant of the Diffie–Hellman NIKE and prove it secure under [[computational-diffie-hellman|CDH]] in the [[random-oracle-model|random-oracle model]] against adversaries that also obtain the keys honest parties share with public keys of the adversary's choice; their trapdoor test answers these queries without a DDH oracle.

## Authenticated key exchange (AKE)

An authenticated key exchange (AKE) protocol lets parties holding long-term key pairs establish session keys over a network the adversary controls: many sessions run concurrently, and the key of a session between two uncorrupted parties is pseudorandom to the adversary, even given the keys of all other sessions. In a [[password-authenticated-key-exchange|PAKE]] the parties authenticate each other with a shared password drawn from a possibly small dictionary.

The model below is that of [[BR93a - Entity Authentication and Key Distribution|BR93a]] in the public-key setting of [[BJM97 - Key Agreement Protocols and Their Security Analysis|BJM97]]. There is a set $\calU$ of $N = N(\secpar)$ parties, and an AKE protocol $\Pi$ consists of:

- $\KeyGen(1^\secpar) \to (\pk, \sk)$, a randomized algorithm generating a party's long-term key pair;
- the stateful interactive algorithm run by each **instance** $\Pi^i_U$, $i \in \NN$, of a party $U \in \calU$, on input $\sk_U$ and $(\pk_V)_{V \in \calU}$. An instance is started either as an initiator, with an intended peer, or as a responder. It processes incoming messages and eventually either rejects or **accepts**, outputting a partner identity $\mathit{pid} \in \calU$, a session identity $\mathit{sid}$ and a session key $K \in \calK$.

Two instances are **partners** if both accepted with the same $\mathit{sid}$, each one's $\mathit{pid}$ naming the other's party. This partnering by session identities is that of [[BPR00 - Authenticated Key Exchange Secure against Dictionary Attacks|BPR00]]; [[BR93a - Entity Authentication and Key Distribution|BR93a]] partner instances by [[#Mutual authentication|matching conversations]].

[[BR93a - Entity Authentication and Key Distribution|BR93a]] formulate the model for parties that share long-lived symmetric keys, and in that setting give an AKE protocol from any [[pseudorandom-function|PRF]]. With long-term key pairs, as here, an AKE protocol gives a [[key-exchange|key exchange]] secure against eavesdroppers ([[authenticated-key-exchange-ake-to-ke|AKE ⇒ KE]]) — folklore.

**Correctness.** If the messages between an initiator instance of $U$ with intended peer $V$ and a responder instance of $V$ are delivered unchanged, both instances accept, are partners, and output the same session key, except with negligible probability.

### Key indistinguishability

The adversary controls all communication through the $\mathsf{Send}$, $\mathsf{Reveal}$ and $\mathsf{Test}$ oracles of [[BR93a - Entity Authentication and Key Distribution|BR93a]], and learns long-term keys through a $\mathsf{Corrupt}$ oracle as in [[BPR00 - Authenticated Key Exchange Secure against Dictionary Attacks|BPR00]]:

- $\mathsf{Send}(U, i, M)$ delivers the message $M$ to $\Pi^i_U$ and returns the instance's reply and whether it has accepted or rejected; the message $(\mathsf{start}, V)$ starts $\Pi^i_U$ as an initiator with intended peer $V$, and any other first message starts it as a responder;
- $\mathsf{Reveal}(U, i)$ returns the session key of $\Pi^i_U$ if it has accepted;
- $\mathsf{Corrupt}(U)$ returns $\sk_U$;
- $\mathsf{Test}(U, i)$ returns, according to a hidden bit $b$, the session key of $\Pi^i_U$ ($b = 0$) or a uniform key ($b = 1$).

An instance $\Pi^i_U$ is **fresh** if it has accepted with $\mathit{pid} = V$, no $\mathsf{Reveal}$ query was made to it or to a partner of it, and neither $U$ nor $V$ was corrupted. $\calA$ is **admissible** if it makes exactly one $\mathsf{Test}$ query, to an instance that is fresh at the end of the game: revealing the tested instance or a partner hands $\calA$ the key, and $\sk_V$ lets $\calA$ impersonate $V$ to $U$. [[#Forward secrecy]] relaxes the restriction on corruptions.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ake}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pk_U, \sk_U) \gets \KeyGen(1^\secpar)$ for every $U \in \calU$; $b \getsr \bits$
\State $b' \gets \calA^{\mathsf{Send}, \mathsf{Reveal}, \mathsf{Corrupt}, \mathsf{Test}}(1^\secpar, (\pk_U)_{U \in \calU})$
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

An AKE protocol $\Pi$ is **secure** if for all efficient $\calA$ the probability that two partners of uncorrupted parties accept with different session keys is negligible, and for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{ake}}_{\Pi,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{ake}}_{\Pi,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

### Mutual authentication

The **conversation** of an instance is the sequence of messages it has received and sent, in order. An instance $\Pi^j_V$ has a conversation **matching** that of $\Pi^i_U$ if $\Pi^j_V$ received exactly the messages $\Pi^i_U$ sent and sent exactly the messages $\Pi^i_U$ received, in the same interleaving, except that if $\Pi^i_U$ sent the last message of the protocol, $\Pi^j_V$ need not have received it — [[BR93a - Entity Authentication and Key Distribution|BR93a]]. The exception lets the instance sending the last message accept although the adversary may never deliver it.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ma}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pk_U, \sk_U) \gets \KeyGen(1^\secpar)$ for every $U \in \calU$
\State run $\calA^{\mathsf{Send}, \mathsf{Reveal}, \mathsf{Corrupt}}(1^\secpar, (\pk_U)_{U \in \calU})$
\Return $1$ if some $\Pi^i_U$ accepted with $\mathit{pid} = V$, neither $U$ nor $V$ is corrupted, and no instance of $V$ that was started with intended peer $U$, or as a responder that has not accepted or has accepted with $\mathit{pid} = U$, has a conversation matching that of $\Pi^i_U$; else $0$
\end{algorithmic}
\end{algorithm}
```

Following [[BR93a - Entity Authentication and Key Distribution|BR93a]], $\Pi$ provides **mutual authentication** if delivering unchanged the messages between an initiator instance of $U$ with intended peer $V$ and a responder instance of $V$ makes both accept, and for all efficient $\calA$,

$$
\Adv^{\mathrm{ma}}_{\Pi,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{ma}}_{\Pi,\calA}(\secpar) = 1\right]
$$

is negligible.

### Forward secrecy

$\Pi$ has **forward secrecy** (or _perfect_ forward secrecy) if it remains secure when freshness allows $\mathsf{Corrupt}(U)$ and $\mathsf{Corrupt}(V)$ after the tested instance $\Pi^i_U$ has accepted: long-term keys leaked later do not expose earlier session keys. It has **weak forward secrecy** if this holds whenever $\Pi^i_U$ moreover has a partner, so that the adversary did not actively interfere with the session — a notion introduced by [[Kra05 - HMQV A High-Performance Secure Diffie-Hellman Protocol|Kra05]]. In a two-message protocol whose initiator sends only an ephemeral value $X = g^x$, such as HMQV, the adversary can send its own $X$ in $U$'s name, let $V$ accept, corrupt $U$, and compute $V$'s session key as $U$ would: such protocols have at most weak forward secrecy — [[Kra05 - HMQV A High-Performance Secure Diffie-Hellman Protocol|Kra05]].

$\Pi$ resists **key-compromise impersonation** (KCI) if it remains secure when freshness allows $\mathsf{Corrupt}(U)$ at any time: $\sk_U$ does not let the adversary impersonate other parties to $U$.

### Canetti–Krawczyk model

In the model of [[CK01 - Analysis of Key-Exchange Protocols and Their Use for Building Secure Channels|CK01]], a party $A$ is activated to run a session $(A, B, s)$, as initiator or responder, with peer $B$ and a session identifier $s$ that the calling protocol supplies and that is unique among $A$'s sessions; sessions $(A, B, s)$ and $(B, A, s)$ are **matching**. Besides activations and one test-session query, the adversary may reveal the internal state of an incomplete session, such as its ephemeral exponents, but not the long-term key; reveal session keys; and corrupt parties, learning a party's entire memory, including its long-term key and session states, and taking control of the party. A completed session is **exposed** if it or its matching session had its state or key revealed, or if its owner or peer was corrupted. A protocol is **SK-secure** if for all efficient $\calA$, two uncorrupted parties that complete matching sessions output the same key except with negligible probability, and $\calA$ guesses the test bit for an unexposed test session with probability at most $1/2 + \negl(\secpar)$ — [[CK01 - Analysis of Key-Exchange Protocols and Their Use for Building Secure Channels|CK01]]. For forward secrecy, a session-expiration query erases a session's key, and corrupting a party after a session expired does not expose that session — [[CK01 - Analysis of Key-Exchange Protocols and Their Use for Building Secure Channels|CK01]].

The keys of an SK-secure protocol, used with a [[message-authentication-code|MAC]] and a [[symmetric-key-encryption|symmetric encryption scheme]], give secure channels in the sense of [[CK01 - Analysis of Key-Exchange Protocols and Their Use for Building Secure Channels|CK01]]. The authenticators of [[BCK98 - A Modular Approach to the Design and Analysis of Authentication and Key Exchange Protocols|BCK98]] preserve SK-security, so a protocol that is SK-secure when links are authenticated (the authenticated-links model) compiles into one that is SK-secure when the adversary controls the links; in the authenticated-links model, the basic Diffie–Hellman protocol is SK-secure under [[decisional-diffie-hellman|DDH]] — [[CK01 - Analysis of Key-Exchange Protocols and Their Use for Building Secure Channels|CK01]].

### Extended Canetti–Krawczyk model

The eCK model of [[LLM07 - Stronger Security of Authenticated Key Exchange|LLM07]] treats two-message protocols in which each party holds a static key pair and each session an ephemeral key pair; a session is identified by its owner, its peer and the two messages, and matches the peer's session with the same messages. The adversary may reveal session keys, the ephemeral secret keys of sessions and the static secret keys of parties. A completed test session of $A$ with peer $B$ is **fresh** if neither it nor its matching session had its key revealed, the adversary did not learn both $A$'s static key and the test session's ephemeral key, and, if the matching session exists, did not learn both $B$'s static key and that session's ephemeral key, or, if it does not exist, did not learn $B$'s static key — [[LLM07 - Stronger Security of Authenticated Key Exchange|LLM07]]. eCK security thus covers key-compromise impersonation, weak forward secrecy and leakage of ephemeral keys — [[LLM07 - Stronger Security of Authenticated Key Exchange|LLM07]].

NAXOS, whose ephemeral exponent is a hash of the session's ephemeral secret key and the party's static secret key, is eCK-secure under the gap Diffie–Hellman assumption (CDH is hard given a DDH oracle) in the random-oracle model — [[LLM07 - Stronger Security of Authenticated Key Exchange|LLM07]]. The CK and eCK models are formally incomparable — [[Cre11 - Examining indistinguishability-based security models for key exchange protocols the case of CK, CK-HMQV, and eCK|Cre11]].

## Multi-party key exchange

An $n$-party key exchange protocol lets $n$ parties communicating over a public, authenticated broadcast channel establish a shared key that is computationally indistinguishable from uniformly random to every efficient eavesdropper. The protocol of Burmester and Desmedt takes two broadcast rounds for every $n$ — [[BD94 - A Secure and Efficient Conference Key Distribution System|BD94]].

## Multiparty non-interactive key exchange

An $N$-party NIKE lets each of $N$ parties publish one message, after which each party derives, from its own secret, the $N - 1$ other published values and any public parameters, a key that all $N$ parties share and that is pseudorandom to an eavesdropper. Two-party NIKE is the case $N = 2$; [[indistinguishability-obfuscation|iO]] and [[hash-function#preimage-resistance-one-wayness|one-way functions]] give it for any polynomial $N$ fixed in advance, without trusted setup — [[BZ14 - Multiparty Key Exchange, Efficient Traitor Tracing, and More from Indistinguishability Obfuscation|BZ14]].

### Three-party NIKE

The case $N = 3$ of multiparty NIKE, with each of three parties publishing one message.

# Other results

- [[ddh-to-non-interactive-key-exchange-nike|DDH ⇒ NIKE]]
- [[ke-to-pke-dh76|NIKE ⇒ PKE]]
- [[no-owp-to-ke-ir89|No relativizing reduction from OWP to KE]] — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]]
- [[no-rom-to-ke-hmo-19|No reduction from ROM to KE]]
- [[lwe-to-pke-reg05|LWE ⇒ PKE]]
- [[pke-to-ke|PKE ⇒ KE]]
- [[BCK98 - A Modular Approach to the Design and Analysis of Authentication and Key Exchange Protocols|BCK98]] define the authenticated-links and unauthenticated-links models and **authenticators**, compilers that turn a protocol secure in the first into one secure in the second; they build authenticators from [[digital-signature|signatures]], from [[public-key-encryption|public-key encryption]] and from pre-shared MAC keys, and apply them to Diffie–Hellman key exchange.
- In the SIGMA ("SIGn-and-MAc") protocols of [[Kra03 - SIGMA The SIGn-and-MAc Approach to Authenticated Diffie-Hellman and Its Use in the IKE Protocols|Kra03]], the parties exchange Diffie–Hellman values $g^x$ and $g^y$; each signs both values and MACs its own identity under a key derived from $g^{xy}$, from which the session key is also derived. SIGMA underlies the signature-based key exchange of IKE — [[Kra03 - SIGMA The SIGn-and-MAc Approach to Authenticated Diffie-Hellman and Its Use in the IKE Protocols|Kra03]]. [[CK02 - Security Analysis of IKE's Signature-based Key-Exchange Protocol|CK02]] prove SIGMA and IKE's signature-based protocols SK-secure in the [[#Canetti–Krawczyk model|CK model]], adapted to sessions whose peer is learned during the run, under [[decisional-diffie-hellman|DDH]] and the security of the signature scheme, the MAC and the key derivation.
- HMQV, a hashed variant of the MQV protocol of [[LMQSV03 - An Efficient Protocol for Authenticated Key Agreement|LMQSV03]], is a two-message protocol: $A$, with static key pair $(a, g^a)$, sends $X = g^x$, and $B$, with $(b, g^b)$, sends $Y = g^y$; with $d = \bar H(X, B)$ and $e = \bar H(Y, A)$, both compute $\sigma = (Y g^{be})^{x + da} = (X g^{ad})^{y + eb}$ and the session key $H(\sigma)$ — [[Kra05 - HMQV A High-Performance Secure Diffie-Hellman Protocol|Kra05]]. With $H$ and $\bar H$ modeled as random oracles, HMQV is secure in the CK model under [[computational-diffie-hellman|CDH]], and some further properties are proved under the gap Diffie–Hellman assumption and [[knowledge-of-exponent|KEA1]] — [[Kra05 - HMQV A High-Performance Secure Diffie-Hellman Protocol|Kra05]]. [[Kra05 - HMQV A High-Performance Secure Diffie-Hellman Protocol|Kra05]] also gives attacks on MQV in the CK model.
- [[Men05 - Another look at HMQV|Men05]] describes attacks on HMQV that exploit omitted public-key validation, and identifies flaws in the security arguments of [[Kra05 - HMQV A High-Performance Secure Diffie-Hellman Protocol|Kra05]].

<!-- BEGIN GENERATED participates-in 7b40e8a1b433 -->

## Participates in

**Builds on Key exchange**

- [[authenticated-key-exchange-ake-to-ke|Authenticated key exchange (AKE) ⇒ KE]] (via [[key-exchange#authenticated-key-exchange-ake|Authenticated key exchange (AKE)]])
- [[ke-to-multi-party-key-exchange|KE ⇒ Multi-party key exchange]]
- [[ke-to-pke-dh76|NIKE ⇒ PKE]] (via [[key-exchange#non-interactive-key-exchange-nike|Non-interactive key exchange (NIKE)]])
- [[non-interactive-key-exchange-to-ke|NIKE ⇒ KE]] (via [[key-exchange#non-interactive-key-exchange-nike|Non-interactive key exchange (NIKE)]])

**Produces Key exchange**

- [[authenticated-key-exchange-ake-to-ke|Authenticated key exchange (AKE) ⇒ KE]]
- [[cdh-to-non-interactive-key-exchange-dh76|CDH ⇒ NIKE (Diffie–Hellman with a hard-core bit)]] (via [[key-exchange#non-interactive-key-exchange-nike|Non-interactive key exchange (NIKE)]])
- [[dbdh-to-three-party-nike-jou04|DBDH ⇒ Three-party NIKE (Joux)]] (via [[key-exchange#three-party-nike|Three-party NIKE]])
- [[ddh-to-non-interactive-key-exchange-nike|DDH ⇒ Non-interactive key exchange (NIKE)]] (via [[key-exchange#non-interactive-key-exchange-nike|Non-interactive key exchange (NIKE)]])
- [[io-and-owf-to-multi-party-nike-bz14|iO + OWF ⇒ Multiparty NIKE (Boneh–Zhandry)]] (via [[key-exchange#multiparty-non-interactive-key-exchange|Multiparty non-interactive key exchange]])
- [[ke-to-multi-party-key-exchange|KE ⇒ Multi-party key exchange]] (via [[key-exchange#multi-party-key-exchange|Multi-party key exchange]])
- [[kem-to-ke|KEM ⇒ KE]]
- [[non-interactive-key-exchange-to-ke|NIKE ⇒ KE]]
- [[ot-to-ke|OT ⇒ KE]]
- [[pke-to-ke|PKE ⇒ KE]]
- [[sidh-to-ke-jdf11|SSDDH ⇒ KE]]

**Barriers**

- [[no-ke-to-pke-rud91|No relativizing reduction from KE to PKE]]
- [[no-ke-to-tdp-rud91|No relativizing reduction from KE to TDP]]
- [[no-owp-to-ke-ir89|No relativizing reduction from OWP to KE]]
- [[no-ppad-hardness-and-owf-to-ke-rss17|No fully-black-box reduction from PPAD hardness + OWF to KE]]
- [[no-rom-to-ke-hmo-19|No reduction from ROM to KE]]

<!-- END GENERATED participates-in -->
