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
  bit-string-key-exchange: "#key-exchange-with-bit-string-keys"
  one-way-key-exchange: "#one-way-security"
  multi-party-key-exchange: "#multi-party-key-exchange"
  non-interactive-key-exchange: "#non-interactive-key-exchange-nike"
  multi-party-nike: "#multiparty-non-interactive-key-exchange"
  three-party-nike: "#three-party-nike"
---

# Key exchange

A _key exchange_ (or _key agreement_) protocol allows two parties communicating over a public, authenticated channel to establish a shared secret key that is computationally indistinguishable from uniformly random to any eavesdropper.

## Syntax

A two-party key exchange protocol is a pair of interactive algorithms $\Pi = (\mathsf{KE}_A, \mathsf{KE}_B)$, run by parties $A$ and $B$ on input $1^\secpar$ over a public channel. An execution $\langle \mathsf{KE}_A(1^\secpar), \mathsf{KE}_B(1^\secpar) \rangle \to (k_A, k_B)$ outputs keys $k_A, k_B \in \calK_\tau$ to $A$ and $B$; its [[interactive-protocol#Transcript|transcript]] $\tau$ is the sequence of all messages sent.

The key space is a finite set $\calK_\tau$ determined by $\secpar$ and the transcript, such as a group whose description one party sends, and it is the same set $\calK = \calK_\secpar$ for every transcript when it depends on $\secpar$ alone. It has at least two elements: $|\calK_\tau| \ge 2$ for every $\secpar$ and every transcript $\tau$. On a one-element key space the uniform key equals $k_A$, so every protocol, including one in which the parties send nothing, would be [[#Security (indistinguishability from random)|secure]] — standard.

## Properties

### Correctness

A key exchange protocol $\Pi = (\mathsf{KE}_A, \mathsf{KE}_B)$ is $(1-\varepsilon)$-**correct**, for a function $\varepsilon = \varepsilon(\secpar)$, if for all $\secpar \in \NN$,

$$
\Pr\!\left[k_A = k_B\right] \ge 1 - \varepsilon(\secpar),
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
\State $k_0 := k_A$; $k_1 \getsr \calK_\tau$
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

As an object, KE denotes a protocol, with $\mathsf{KE}_A$ and $\mathsf{KE}_B$ PPT, that is $(1-\varepsilon)$-[[#Correctness|correct]] for a negligible function $\varepsilon(\secpar)$ and secure. Without correctness, the protocol in which $A$ and $B$ output independent uniform keys and send nothing is secure.

### One-way security

The adversary sees the transcript $\tau$ of an honest execution and must output $A$'s key.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ow\text{-}ke}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\tau, k_A, k_B) \gets \langle \mathsf{KE}_A(1^\secpar), \mathsf{KE}_B(1^\secpar) \rangle$
\State $k' \gets \calA(1^\secpar, \tau)$
\Return $[k' = k_A]$
\end{algorithmic}
\end{algorithm}
```

A key exchange protocol $\Pi = (\mathsf{KE}_A, \mathsf{KE}_B)$ is **one-way secure** if for all efficient $\calA$,

$$
\Adv^{\mathrm{ow\text{-}ke}}_{\Pi,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{ow\text{-}ke}}_{\Pi,\calA}(\secpar) = 1\right]
$$

is negligible.

The game asks for $k_A$. For a $(1-\varepsilon)$-correct protocol, asking for $k_B$ instead changes the advantage of every $\calA$ by at most $\Pr[k_A \ne k_B] \le \varepsilon(\secpar)$, so the choice does not matter when $\varepsilon$ is negligible — standard. One-way security forces a large key space: if uniform elements of $\calK_\tau$ can be sampled efficiently given $\tau$, the adversary that outputs one wins with probability $\mathbb{E}[1/|\calK_\tau|]$, so in a one-way-secure protocol $\Pr[|\calK_\tau| \le s(\secpar)] \le s(\secpar) \cdot \mathbb{E}[1/|\calK_\tau|]$ is negligible for every polynomial $s$, and no protocol whose key space $\calK_\tau$ has polynomial size, such as $\bits$, is one-way secure — standard.

Security in the [[#Security (indistinguishability from random)|indistinguishability game]] gives one-way security when $\mathbb{E}[1/|\calK_\tau|]$ is negligible: for an adversary $\calA$ outputting $k'$, the distinguisher that outputs $0$ exactly when $k' = k_b$ has advantage at least $\Adv^{\mathrm{ow\text{-}ke}}_{\Pi,\calA}(\secpar) - \mathbb{E}[1/|\calK_\tau|]$ — standard. The converse fails: if CDH is hard for a group generator outputting the groups $\ZZ_P^*$ for odd primes $P$, the Diffie–Hellman key $g^{xy}$ is one-way, but its Legendre symbol $(-1)^{xy}$ is determined by those of $g^x$ and $g^y$, while that of a uniform element of $\ZZ_P^*$ is a uniform sign, so an eavesdropper tells the key from a uniform element with advantage $1/2$ — standard.

As a node, one-way KE denotes a protocol, with $\mathsf{KE}_A$ and $\mathsf{KE}_B$ PPT, that is $(1-\varepsilon)$-[[#Correctness|correct]] for a negligible function $\varepsilon(\secpar)$ and one-way secure. Without correctness, the protocol in which $A$ outputs a uniform key in $\bits^\secpar$ and sends nothing is one-way secure. Under [[computational-diffie-hellman|CDH]], the Diffie–Hellman protocol is one-way secure, with one-way advantage equal to the CDH advantage ([[cdh-to-one-way-key-exchange|CDH ⇒ One-way KE (Diffie–Hellman)]]) — folklore.

# Variations

## Non-interactive key exchange (NIKE)

A NIKE allows any two parties to derive the same shared key, each from its own secret key and the other's public key, with no interaction at all. Diffie-Hellman over a cyclic group is the canonical example: $k = g^{ab}$ given public keys $g^a$ and $g^b$ ([[ddh-to-non-interactive-key-exchange-nike|DDH ⇒ Non-interactive key exchange (NIKE)]]) — [[DH76 - New Directions in Cryptography|DH76]].

A NIKE is a tuple $\Pi = (\Setup, \Gen, \Combine)$ of efficient algorithms with a key space $\calK$, which may depend on $\pp$, has at least two elements for every $\pp$, and from which uniform elements can be sampled efficiently:

- $\Setup(1^\secpar) \to \pp$, a randomized algorithm generating public parameters common to all parties, with $\pp = 1^\secpar$ when there is no setup;
- $\Gen(\pp) \to (\pk, \sk)$, a randomized algorithm generating a party's key pair;
- $\Combine(\sk, \pk') \to k$, a deterministic algorithm taking a party's secret key and another party's public key and outputting a shared key $k \in \calK$ or $\bot$.

A NIKE $\Pi$ is $(1-\varepsilon)$-**correct**, for a function $\varepsilon = \varepsilon(\secpar)$, if for all $\secpar \in \NN$,

$$
\Pr\!\left[\Combine(\sk_1, \pk_2) = \Combine(\sk_2, \pk_1) \ne \bot\right] \ge 1 - \varepsilon(\secpar),
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

As a node, NIKE denotes a NIKE that is $(1-\varepsilon)$-correct for a negligible function $\varepsilon(\secpar)$ and secure for honest key pairs.

### CKS models

[[FHKP13 - Non-Interactive Key Exchange|FHKP13]] define stronger models, building on the model of [[CKS08 - The Twin Diffie-Hellman Problem and Applications|CKS08]], in which the adversary interacts with many parties named by identities, which $\Gen$ and $\Combine$ take as additional inputs. In the **CKS-light** model the adversary may register honest identities, whose key pairs the challenger generates and whose public keys it returns; register corrupt identities with public keys of its choice; obtain the key an honest identity shares with a corrupt one; and make one $\mathsf{Test}$ query on two honest identities, answered with their shared key ($b = 0$) or a uniform key ($b = 1$) — [[FHKP13 - Non-Interactive Key Exchange|FHKP13]]. The heavier models of [[FHKP13 - Non-Interactive Key Exchange|FHKP13]], among them **CKS-heavy**, add queries that reveal keys shared by two honest identities and secret keys of honest identities outside the tested pairs, and allow several $\mathsf{Test}$ queries; security in CKS-light implies security in each of them, with a polynomial loss — [[FHKP13 - Non-Interactive Key Exchange|FHKP13]]. Each model comes in a version with dishonest key registration, in which the adversary registers arbitrary public keys for corrupt identities, and one with honest key registration, in which it cannot — [[FHKP13 - Non-Interactive Key Exchange|FHKP13]].

[[CKS08 - The Twin Diffie-Hellman Problem and Applications|CKS08]] give a twinned variant of the Diffie–Hellman NIKE and prove it secure under [[computational-diffie-hellman|CDH]] in the [[random-oracle-model|random-oracle model]] against adversaries that also obtain the keys honest parties share with public keys of the adversary's choice; their trapdoor test answers these queries without a DDH oracle.

## Authenticated key exchange (AKE)

An authenticated key exchange (AKE) protocol lets parties holding long-term key pairs establish session keys over a network the adversary controls: many sessions run concurrently, and the key of a session between two uncorrupted parties is pseudorandom to the adversary, even given the keys of all other sessions. In a [[password-authenticated-key-exchange|PAKE]] the parties authenticate each other with a shared password drawn from a possibly small dictionary.

The model below is that of [[BR93a - Entity Authentication and Key Distribution|BR93a]] in the public-key setting of [[BJM97 - Key Agreement Protocols and Their Security Analysis|BJM97]]. For every polynomial $N = N(\secpar) \ge 2$, there is a set $\calU$ of $N$ parties, and an AKE protocol $\Pi$ consists of:

- $\KeyGen(1^\secpar) \to (\pk, \sk)$, a randomized algorithm generating a party's long-term key pair;
- the stateful interactive algorithm run by each **instance** $\Pi^i_U$, $i \in \NN$, of a party $U \in \calU$, on input $\sk_U$ and $(\pk_V)_{V \in \calU}$. An instance is started either as an initiator, with an intended peer, or as a responder. It processes incoming messages and eventually either rejects or **accepts**, outputting a partner identity $\mathit{pid} \in \calU$, a session identity $\mathit{sid}$ and a session key $K \in \calK$, for a finite key space $\calK$ of at least two elements.

Two instances are **partners** if one is an initiator and the other a responder, both accepted with the same $\mathit{sid}$, each one's $\mathit{pid}$ names the other's party, and no other instance accepted with that $\mathit{sid}$. This is the partnering by session identities of [[BPR00 - Authenticated Key Exchange Secure against Dictionary Attacks|BPR00]] without its requirement that partners hold the same session key, which the security definition below imposes separately; [[BR93a - Entity Authentication and Key Distribution|BR93a]] partner instances by [[#Mutual authentication|matching conversations]].

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

As a node, AKE denotes a protocol, with $\KeyGen$ and the instances PPT, that is correct, as defined above, and secure in the key-indistinguishability game; mutual authentication, forward secrecy, KCI resistance and SK-security in the CK and eCK models are separate notions.

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

## Key exchange with bit-string keys

A two-party key exchange whose key space is $\calK = \bits^{\ell(\secpar)}$ for a polynomial-time computable $\ell$ with $1 \le \ell(\secpar) \le \poly(\secpar)$. As a node, it denotes such a protocol, with PPT parties, that is $(1-\varepsilon)$-correct for a negligible function $\varepsilon(\secpar)$ and secure against eavesdroppers. It is a key exchange ([[bit-string-key-exchange-to-ke|KE with bit-string keys ⇒ KE]]) — folklore, and an IND-CPA-secure [[key-encapsulation-mechanism|KEM]] gives it ([[kem-to-ke|KEM ⇒ KE with bit-string keys]]) — folklore. In the [[random-oracle-model|random oracle model]], hashing the Diffie–Hellman key to $\secpar$ bits gives it under [[computational-diffie-hellman|CDH]] ([[cdh-to-bit-string-key-exchange|CDH ⇒ KE with bit-string keys (hashed Diffie–Hellman)]]) — folklore. Its keys can serve as one-time pads under $\oplus$, which an arbitrary finite key space does not support: for a uniform key on a three-element space encoded as $\{00, 01, 10\}$, XOR-padding $00$ gives the support $\{00, 01, 10\}$ and padding $01$ gives $\{00, 01, 11\}$, so the padded string reveals the padded value with constant advantage — standard.

## Multi-party key exchange

For $n \ge 2$, an $n$-party key exchange protocol is a tuple $\Pi = (\mathsf{KE}_1, \ldots, \mathsf{KE}_n)$ of interactive algorithms with a key space $\calK$ of at least two elements, run by parties $P_1, \ldots, P_n$ on input $1^\secpar$ over a public, authenticated broadcast channel. An execution $\langle \mathsf{KE}_1(1^\secpar), \ldots, \mathsf{KE}_n(1^\secpar) \rangle \to (k_1, \ldots, k_n)$ outputs a key $k_i \in \calK$ to each $P_i$; its transcript $\tau$ is the sequence of all messages broadcast. $\Pi$ is $(1-\varepsilon)$-**correct**, for a function $\varepsilon = \varepsilon(\secpar)$, if for all $\secpar \in \NN$, $\Pr[k_1 = \cdots = k_n] \ge 1 - \varepsilon(\secpar)$ over the randomness of all parties.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{mke}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\tau, k_1, \ldots, k_n) \gets \langle \mathsf{KE}_1(1^\secpar), \ldots, \mathsf{KE}_n(1^\secpar) \rangle$; $b \getsr \bits$
\State $K_0 := k_1$; $K_1 \getsr \calK$
\State $b' \gets \calA(1^\secpar, \tau, K_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

$\Pi$ is **secure** if for all efficient $\calA$,

$$
\Adv^{\mathrm{mke}}_{\Pi,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{mke}}_{\Pi,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. As a node, multi-party key exchange denotes, for every polynomial $n = n(\secpar) \ge 2$, an $n$-party protocol, with PPT parties, that is $(1-\varepsilon)$-correct for a negligible function $\varepsilon(\secpar)$ and secure. [[#Key exchange with bit-string keys|Two-party key exchange with bit-string keys]] gives it ([[ke-to-multi-party-key-exchange|KE with bit-string keys ⇒ Multi-party key exchange]]) — folklore, and its case $n = 2$ is a two-party key exchange ([[multi-party-key-exchange-to-ke|Multi-party key exchange ⇒ KE]]) — folklore.

The protocol of Burmester and Desmedt takes two rounds for every $n$ — [[BD94 - A Secure and Efficient Conference Key Distribution System|BD94]], [[KY03 - Scalable Protocols for Authenticated Group Key Exchange|KY03]]. [[KY03 - Scalable Protocols for Authenticated Group Key Exchange|KY03]] prove a variant of it secure against eavesdroppers and give a compiler that adds one round and turns any group key exchange secure against eavesdroppers into an authenticated one, secure against an adversary that controls all communication; applied to that variant, the compiler gives a three-round authenticated group key exchange with forward secrecy, secure under [[decisional-diffie-hellman|DDH]] in the standard model.

## Multiparty non-interactive key exchange

For $N \ge 2$, an $N$-party NIKE is a tuple $\Pi = (\Setup, \mathsf{Publish}, \mathsf{KeyDer})$ of efficient algorithms with a key space $\calK$, which may depend on $\pp$ and has at least two elements for every $\pp$:

- $\Setup(1^\secpar, 1^N) \to \pp$, a randomized algorithm generating public parameters, with $\pp = (1^\secpar, 1^N)$ when there is no setup;
- $\mathsf{Publish}(\pp, i) \to (\mathit{msg}_i, \sk_i)$, a randomized algorithm run by party $i \in [N]$, which publishes $\mathit{msg}_i$ and keeps $\sk_i$;
- $\mathsf{KeyDer}(\pp, i, \sk_i, (\mathit{msg}_j)_{j \ne i}) \to k$, an algorithm outputting party $i$'s key $k \in \calK$.

$\Pi$ is $(1-\varepsilon)$-**correct**, for a function $\varepsilon = \varepsilon(\secpar)$, if for all $\secpar \in \NN$, $\Pr[k_1 = \cdots = k_N] \ge 1 - \varepsilon(\secpar)$ for $k_i \gets \mathsf{KeyDer}(\pp, i, \sk_i, (\mathit{msg}_j)_{j \ne i})$, over $\pp \gets \Setup(1^\secpar, 1^N)$ and independent $(\mathit{msg}_i, \sk_i) \gets \mathsf{Publish}(\pp, i)$ for $i \in [N]$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{mnike}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $\pp \gets \Setup(1^\secpar, 1^N)$; $b \getsr \bits$
\State $(\mathit{msg}_i, \sk_i) \gets \mathsf{Publish}(\pp, i)$ for every $i \in [N]$
\State $K_0 \gets \mathsf{KeyDer}(\pp, 1, \sk_1, (\mathit{msg}_j)_{j \ne 1})$; $K_1 \getsr \calK$
\State $b' \gets \calA(\pp, \mathit{msg}_1, \ldots, \mathit{msg}_N, K_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

$\Pi$ is **secure** if for all efficient $\calA$,

$$
\Adv^{\mathrm{mnike}}_{\Pi,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{mnike}}_{\Pi,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. As a node, multiparty NIKE denotes, for every polynomial $N = N(\secpar) \ge 2$, an $N$-party NIKE that is $(1-\varepsilon)$-correct for a negligible function $\varepsilon(\secpar)$ and secure. For $N = 2$ and a $\mathsf{Publish}$ that ignores $i$, the syntax is that of a two-party [[#Non-interactive key exchange (NIKE)|NIKE]]. [[indistinguishability-obfuscation|iO]] and [[hash-function#preimage-resistance-one-wayness|one-way functions]] give multiparty NIKE, for every polynomial $N$ fixed in advance and without trusted setup ([[io-and-owf-to-multi-party-nike-bz14|iO + OWF ⇒ Multiparty NIKE (Boneh–Zhandry)]]) — [[BZ14 - Multiparty Key Exchange, Efficient Traitor Tracing, and More from Indistinguishability Obfuscation|BZ14]].

### Three-party NIKE

A three-party NIKE is an $N$-party NIKE, as defined above, for $N = 3$; as a node, it denotes a three-party NIKE that is $(1-\varepsilon)$-correct for a negligible function $\varepsilon(\secpar)$ and secure. Multiparty NIKE gives it as the case $N = 3$ ([[multi-party-nike-to-three-party-nike|Multiparty NIKE ⇒ Three-party NIKE]]) — folklore, and it gives a two-party key exchange ([[three-party-nike-to-ke|Three-party NIKE ⇒ KE]]) — folklore.

# Other results

- [[ddh-to-non-interactive-key-exchange-nike|DDH ⇒ NIKE]]
- [[ke-to-pke-dh76|NIKE ⇒ PKE]]
- [[no-owp-to-ke-ir89|No relativizing reduction from OWP to KE]] — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]]
- In the [[random-oracle-model|random oracle model]], [[merkle-puzzles|Merkle's puzzles]] is a key agreement in which each honest party makes $n$ oracle queries and every eavesdropper that recovers the key with constant probability makes $\Omega(n^2)$ queries ([[rom-to-merkle-puzzles-mer78|ROM ⇒ Merkle puzzles]]) — [[Mer78 - Secure Communications Over Insecure Channels|Mer78]]. The quadratic gap is optimal, so no random-oracle key agreement is secure against eavesdroppers making polynomially many queries ([[no-rom-to-ke-hmo-19|No reduction from ROM to KE]]) — [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]].
- [[lwe-to-pke-reg05|LWE ⇒ PKE]]
- [[pke-to-ke|PKE ⇒ KE]]
- [[BCK98 - A Modular Approach to the Design and Analysis of Authentication and Key Exchange Protocols|BCK98]] define the authenticated-links and unauthenticated-links models and **authenticators**, compilers that turn a protocol secure in the first into one secure in the second; they build authenticators from [[digital-signature|signatures]], from [[public-key-encryption|public-key encryption]] and from pre-shared MAC keys, and apply them to Diffie–Hellman key exchange.
- In the SIGMA ("SIGn-and-MAc") protocols of [[Kra03 - SIGMA The SIGn-and-MAc Approach to Authenticated Diffie-Hellman and Its Use in the IKE Protocols|Kra03]], the parties exchange Diffie–Hellman values $g^x$ and $g^y$; each signs both values and MACs its own identity under a key derived from $g^{xy}$, from which the session key is also derived. SIGMA underlies the signature-based key exchange of IKE — [[Kra03 - SIGMA The SIGn-and-MAc Approach to Authenticated Diffie-Hellman and Its Use in the IKE Protocols|Kra03]]. [[CK02 - Security Analysis of IKE's Signature-based Key-Exchange Protocol|CK02]] prove SIGMA and IKE's signature-based protocols SK-secure in the [[#Canetti–Krawczyk model|CK model]], adapted to sessions whose peer is learned during the run, under [[decisional-diffie-hellman|DDH]] and the security of the signature scheme, the MAC and the key derivation.
- HMQV, a hashed variant of the MQV protocol of [[LMQSV03 - An Efficient Protocol for Authenticated Key Agreement|LMQSV03]], is a two-message protocol: $A$, with static key pair $(a, g^a)$, sends $X = g^x$, and $B$, with $(b, g^b)$, sends $Y = g^y$; with $d = \bar H(X, B)$ and $e = \bar H(Y, A)$, both compute $\sigma = (Y g^{be})^{x + da} = (X g^{ad})^{y + eb}$ and the session key $H(\sigma)$ — [[Kra05 - HMQV A High-Performance Secure Diffie-Hellman Protocol|Kra05]]. As originally posted, with $H$ and $\bar H$ modeled as random oracles, HMQV was claimed secure in the CK model under [[computational-diffie-hellman|CDH]], with some further properties under the gap Diffie–Hellman assumption and [[knowledge-of-exponent|KEA1]] — [[Kra05 - HMQV A High-Performance Secure Diffie-Hellman Protocol|Kra05]]. That claim fails for the protocol as stated, which does not check that $X$, $Y$ and the static public keys lie in the intended prime-order group; the revised [[Kra05 - HMQV A High-Performance Secure Diffie-Hellman Protocol|Kra05]] requires each party to verify that the Diffie–Hellman values it receives are non-identity elements of that group, and its security claims are for this validated protocol. [[Kra05 - HMQV A High-Performance Secure Diffie-Hellman Protocol|Kra05]] also gives attacks on MQV in the CK model.
- [[Men05 - Another look at HMQV|Men05]] gives attacks on the unvalidated HMQV in the CK model that recover a victim's static secret key, by sending elements of small order and enumerating the revealed session keys over the small subgroup, and identifies flaws in the original security proof of [[Kra05 - HMQV A High-Performance Secure Diffie-Hellman Protocol|Kra05]]; it proposes a patched variant, HMQV-1.

<!-- BEGIN GENERATED participates-in 55547f6d6f29 -->

## Participates in

**Builds on Key exchange**

- [[authenticated-key-exchange-ake-to-ke|Authenticated key exchange (AKE) ⇒ KE]] (via [[key-exchange#authenticated-key-exchange-ake|Authenticated key exchange (AKE)]])
- [[bit-string-key-exchange-to-ke|KE with bit-string keys ⇒ KE]] (via [[key-exchange#key-exchange-with-bit-string-keys|Key exchange with bit-string keys]])
- [[ke-to-multi-party-key-exchange|KE with bit-string keys ⇒ Multi-party key exchange]] (via [[key-exchange#key-exchange-with-bit-string-keys|Key exchange with bit-string keys]])
- [[ke-to-pke-dh76|NIKE ⇒ PKE]] (via [[key-exchange#non-interactive-key-exchange-nike|Non-interactive key exchange (NIKE)]])
- [[multi-party-key-exchange-to-ke|Multi-party key exchange ⇒ KE]] (via [[key-exchange#multi-party-key-exchange|Multi-party key exchange]])
- [[multi-party-nike-to-three-party-nike|Multiparty NIKE ⇒ Three-party NIKE]] (via [[key-exchange#multiparty-non-interactive-key-exchange|Multiparty non-interactive key exchange]])
- [[non-interactive-key-exchange-to-ke|NIKE ⇒ KE]] (via [[key-exchange#non-interactive-key-exchange-nike|Non-interactive key exchange (NIKE)]])
- [[three-party-nike-to-ke|Three-party NIKE ⇒ KE]] (via [[key-exchange#three-party-nike|Three-party NIKE]])

**Produces Key exchange**

- [[authenticated-key-exchange-ake-to-ke|Authenticated key exchange (AKE) ⇒ KE]]
- [[bit-string-key-exchange-to-ke|KE with bit-string keys ⇒ KE]]
- [[cdh-to-bit-string-key-exchange|CDH ⇒ KE with bit-string keys (hashed Diffie–Hellman)]] (via [[key-exchange#key-exchange-with-bit-string-keys|Key exchange with bit-string keys]])
- [[cdh-to-non-interactive-key-exchange-dh76|CDH ⇒ NIKE (Diffie–Hellman with a hard-core bit)]] (via [[key-exchange#non-interactive-key-exchange-nike|Non-interactive key exchange (NIKE)]])
- [[cdh-to-one-way-key-exchange|CDH ⇒ One-way KE (Diffie–Hellman)]] (via [[key-exchange#one-way-security|One-way security]])
- [[dbdh-to-three-party-nike-jou04|DBDH ⇒ Three-party NIKE (Joux)]] (via [[key-exchange#three-party-nike|Three-party NIKE]])
- [[ddh-to-non-interactive-key-exchange-nike|DDH ⇒ Non-interactive key exchange (NIKE)]] (via [[key-exchange#non-interactive-key-exchange-nike|Non-interactive key exchange (NIKE)]])
- [[io-and-owf-to-multi-party-nike-bz14|iO + OWF ⇒ Multiparty NIKE (Boneh–Zhandry)]] (via [[key-exchange#multiparty-non-interactive-key-exchange|Multiparty non-interactive key exchange]])
- [[ke-to-multi-party-key-exchange|KE with bit-string keys ⇒ Multi-party key exchange]] (via [[key-exchange#multi-party-key-exchange|Multi-party key exchange]])
- [[kem-to-ke|KEM ⇒ KE with bit-string keys]] (via [[key-exchange#key-exchange-with-bit-string-keys|Key exchange with bit-string keys]])
- [[multi-party-key-exchange-to-ke|Multi-party key exchange ⇒ KE]]
- [[multi-party-nike-to-three-party-nike|Multiparty NIKE ⇒ Three-party NIKE]] (via [[key-exchange#three-party-nike|Three-party NIKE]])
- [[non-interactive-key-exchange-to-ke|NIKE ⇒ KE]]
- [[ot-to-ke|OT ⇒ KE]]
- [[pke-to-ke|PKE ⇒ KE]]
- [[three-party-nike-to-ke|Three-party NIKE ⇒ KE]]

**Barriers**

- [[no-ke-to-pke-rud91|No relativizing reduction from KE to PKE]]
- [[no-ke-to-tdp-rud91|No relativizing reduction from KE to TDP]]
- [[no-owp-to-ke-ir89|No relativizing reduction from OWP to KE]]
- [[no-ppad-hardness-and-owf-to-ke-rss17|No fully-black-box reduction from PPAD hardness + OWF to KE]]
- [[no-rom-to-ke-hmo-19|No reduction from ROM to KE]]

<!-- END GENERATED participates-in -->
