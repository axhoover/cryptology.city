---
type: primitive
status: draft
aliases:
  - MAC
  - Message authentication code
title: Message authentication code
id: mac
variants:
  suf-cma-mac: "#strong-unforgeability"
  arbitrary-length-suf-cma-mac: "#strongly-unforgeable-macs-for-arbitrary-length-messages"
  one-time-mac: "#one-time-macs"
  nonce-based-mac: "#nonce-based-macs"
---

# Message authentication code

A **Message Authentication Code (MAC)** allows a user holding a secret key to authenticate messages by attaching a short tag. Anyone with the same key can verify the tag's authenticity; no efficient adversary without the key, given tags on messages of its choice, can produce a valid tag on a new message except with negligible probability.

## Syntax

A MAC is a triple of efficient algorithms $\MAC = (\KeyGen, \Tag, \Vrfy)$ with respect to keyspace $\calK$, message space $\calM$, and tag space $\calT$:

- $\KeyGen(1^\secpar) \to k,$ is a randomized algorithm that samples a key $k \in \calK,$
- $\Tag(k, m) \to t,$ is a (possibly randomized) algorithm that takes a key $k \in \calK$ and message $m \in \calM$, outputting a tag $t \in \calT,$
- $\Vrfy(k, m, t) \to b,$ is a deterministic algorithm that takes a key $k \in \calK$, message $m \in \calM$, and tag $t \in \calT$, outputting a bit $b \in \bits$ indicating whether the tag is valid.

Every MAC on this page is $(1-\varepsilon)$-correct, as defined under [[#Correctness|Correctness]], for a negligible function $\varepsilon(\secpar)$; for a [[#Nonce-based MACs|nonce-based MAC]] this means $\Pr\!\left[\Vrfy(k, n, m, \Tag(k, n, m)) = 1\right] \ge 1 - \varepsilon$ for every nonce $n$ and every $m \in \calM$. Without correctness, $\Vrfy \equiv 0$ meets every unforgeability notion below.

As an object, a MAC denotes a $(1-\negl)$-correct, [[#Unforgeability|UF-CMA-secure]] scheme, and a [[#Strong unforgeability|strongly unforgeable]] MAC a $(1-\negl)$-correct, SUF-CMA-secure one.

TODO: quantify the message space of the base notion: with $|\calM_\secpar|$ polynomial in $\secpar$, a key that is a table of independent uniform tags in $\bits^\secpar$, one per message, with $\Tag(k, m)$ the entry for $m$ and canonical verification, is a UF-CMA-secure MAC unconditionally.

## Properties

### Correctness

A MAC $\MAC = (\KeyGen, \Tag, \Vrfy)$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$ and $m \in \calM$,

$$
\Pr\!\left[\Vrfy(k, m, \Tag(k, m)) = 1\right] \ge 1 - \varepsilon,
$$

over the choice of $k \gets \KeyGen(1^\secpar)$ and the randomness of $\Tag$. When $\varepsilon = 0$, $\MAC$ is **perfectly correct**.

### Unforgeability

The following is the **unforgeability under chosen message attacks (UF-CMA)** game. $\calA$ gets a tagging oracle $\calO$ and wins by outputting a valid tag on a message it never queried.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\ufcma}_{\MAC,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$
\State $\calQ \gets \{\}$
\State $(\hat{m}, \hat{t}) \gets \calA^{\calO}(1^\secpar)$
\If{$\hat{m} \in \calQ$}
\Comment{$\hat{m}$ cannot repeat}
\Return $0$
\EndIf
\Return $[\Vrfy(k, \hat{m}, \hat{t}) = 1]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO(m)$}
\begin{algorithmic}
\State $\calQ \gets \calQ \cup \{m\}$
\State $t \gets \Tag(k, m)$
\Return $t$
\end{algorithmic}
\end{algorithm}
```

A MAC $\MAC$ is **UF-CMA secure** if for all efficient $\calA$,

$$
\Adv^{\ufcma}_{\MAC,\calA}(\secpar) := \Pr\!\left[\Game^{\ufcma}_{\MAC,\calA}(\secpar) = 1\right]
$$

is negligible.

### Strong unforgeability

The **strong unforgeability under chosen message attacks (SUF-CMA)** game strengthens UF-CMA: $\calQ$ records message-tag pairs, and $\calA$ wins with any valid pair $(\hat{m}, \hat{t})$ that $\calO$ did not return, including a new tag on a queried message.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\sufcma}_{\MAC,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$
\State $\calQ \gets \{\}$
\State $(\hat{m}, \hat{t}) \gets \calA^{\calO}(1^\secpar)$
\If{$(\hat{m}, \hat{t}) \in \calQ$}
\Comment{$(\hat{m}, \hat{t})$ cannot repeat}
\Return $0$
\EndIf
\Return $[\Vrfy(k, \hat{m}, \hat{t}) = 1]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO(m)$}
\begin{algorithmic}
\State $t \gets \Tag(k, m)$
\State $\calQ \gets \calQ \cup \{(m, t)\}$
\Return $t$
\end{algorithmic}
\end{algorithm}
```

A MAC $\MAC$ is **SUF-CMA secure** if for all efficient $\calA$,

$$
\Adv^{\sufcma}_{\MAC,\calA}(\secpar) := \Pr\!\left[\Game^{\sufcma}_{\MAC,\calA}(\secpar) = 1\right]
$$

is negligible.

# Variations

## Strongly unforgeable MACs for arbitrary-length messages

A MAC with message space $\calM = \bits^*$ that is $(1-\varepsilon)$-correct for a negligible function $\varepsilon(\secpar)$, with the bound holding for every $m \in \bits^*$, and [[#Strong unforgeability|SUF-CMA-secure]]; an efficient adversary queries and forges only on messages of polynomial length. It is a strongly unforgeable MAC ([[arbitrary-length-suf-cma-mac-to-suf-cma-mac|Arbitrary-length SUF-CMA MAC ⇒ SUF-CMA MAC]]) — folklore. Composing it with an encryption scheme whose ciphertexts are bit strings needs no condition linking the two message spaces, which Encrypt-then-MAC requires ([[cpa-security-and-suf-cma-mac-to-authenticated-encryption-bn00|CPA-secure SKE + arbitrary-length SUF-CMA MAC ⇒ AE (Encrypt-then-MAC)]]): a MAC on $\calM = \bits$, a key of two independent uniform tags in $\bits^\secpar$ with canonical verification, is correct and SUF-CMA-secure unconditionally, yet cannot tag a $\secpar$-bit ciphertext — standard.

## Deterministic MACs

A MAC is **deterministic** if $\Tag$ is deterministic. Under canonical verification $\Vrfy(k, m, t) := [t = \Tag(k, m)]$ each message has exactly one valid tag, so a valid pair $(\hat m, \hat t)$ with $\hat m$ queried is an oracle answer, and a deterministic UF-CMA-secure MAC with canonical verification is SUF-CMA-secure — standard.

## One-time MACs

A MAC is an **$\varepsilon$-secure one-time MAC** if every adversary, of unbounded running time, that makes at most one query to $\calO$ in the UF-CMA game wins with probability at most $\varepsilon$. A **one-time MAC** is a MAC that is $\varepsilon(\secpar)$-secure one-time for a negligible function $\varepsilon$.

For a [[universal-hash-function#strongly-universal|strongly universal]] family $\calH$ of functions $\calM \to \calT$, the key $h \getsr \calH$ and $\Tag(h, m) := h(m)$ give a $1/|\calT|$-secure one-time MAC, since $h(\hat m)$ is uniform given $h(m)$ for $\hat m \ne m$ — [[WC81 - New Hash Functions and Their Use in Authentication and Set Equality|WC81]]. With $\calT = \bits^\tau$, a one-time pad $r \getsr \bits^\tau$ and $h$ from an $\varepsilon$-[[universal-hash-function#almost-xor-universal|almost XOR-universal]] family, $\Tag((h, r), m) := h(m) \oplus r$ is $\varepsilon$-secure one-time: the tag $t$ is independent of $h$, and a forgery $(\hat m, \hat t)$ needs $h(\hat m) \oplus h(m) = \hat t \oplus t$ — [[Kra94 - LFSR-based Hashing and Authentication|Kra94]]. One hash function $h$ serves many messages when each gets a fresh pad, the $i$th message $m_i$ being tagged $h(m_i) \oplus r_i$, so the key grows by $\tau$ bits per message rather than by a fresh hash function — [[WC81 - New Hash Functions and Their Use in Authentication and Set Equality|WC81]].

## Nonce-based MACs

A **nonce-based MAC** has $\Tag(k, n, m)$ and $\Vrfy(k, n, m, t)$ take a nonce $n \in \calN$ as well, from a nonce space $\calN = \calN_\secpar$ of size superpolynomial in $\secpar$, for example $\calN = \bits^{\nu(\secpar)}$ with $\nu(\secpar) = \omega(\log \secpar)$. In its UF-CMA game, $\calA$ supplies $(n, m)$ to $\calO$, never repeats a nonce across queries, and wins with any $(\hat n, \hat m, \hat t)$ such that $\Vrfy(k, \hat n, \hat m, \hat t) = 1$ and $(\hat n, \hat m)$ was not a query to $\calO$. The restriction lets a construction use a nonce-indexed value, such as $F_k(n)$ in the Wegman–Carter MAC below, as a one-time pad. Since $|\calN_\secpar|$ is superpolynomial, the restriction does not bound the number of queries of an efficient adversary; with $|\calN_\secpar|$ polynomial, the Wegman–Carter MAC with a uniformly random function $\calN \to \bits^\tau$, stored as a table, in place of $F_k$ would be secure unconditionally for a negligible $\varepsilon$.

The **Wegman–Carter MAC** replaces the pads above by PRF outputs. For a [[pseudorandom-function|PRF]] $\PRF$ with domain $\calN$ and range $\bits^\tau$, $F_k := \Eval(k, \cdot)$, and an $\varepsilon$-almost XOR-universal family $\calH$ of functions $\calM \to \bits^\tau$, the key is $(k, h)$ with $h \getsr \calH$ and

$$
\Tag((k, h), n, m) := F_k(n) \oplus h(m).
$$

# Other results

- [[prf-to-mac|PRF ⇒ MAC]], and [[prf-to-mac-bkr94|PRF ⇒ MAC (CBC-MAC)]] on messages of a fixed number of blocks.
- [[prf-to-nonce-based-mac|PRF ⇒ nonce-based MAC (Wegman–Carter)]].
- [[mac-and-ske-to-cca-security|Arbitrary-length SUF-CMA MAC + CPA-secure SKE ⇒ CCA-secure SKE]] (encrypt-then-MAC).
- **NMAC and HMAC.** For a compression function $f : \bits^c \times \bits^b \to \bits^c$, let $F_k(m_1 \cdots m_\ell) := y_\ell$ with $y_0 := k$ and $y_i := f(y_{i-1}, m_i)$ be its iteration keyed by the initial chaining value. Then $\mathrm{NMAC}_{k_1,k_2}(m) := f(k_1, F_{k_2}(m) \,\|\, \mathrm{pad})$, for a fixed string $\mathrm{pad}$ of $b - c$ bits, is a UF-CMA-secure MAC if $f$, keyed by its chaining input, is a secure MAC on one-block messages and $F_k$ is weakly collision resistant, that is, collision resistant against an adversary that sees $F_k$ only through an oracle — [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]]. $\mathrm{HMAC}$ is NMAC with $k_1 = f(\mathrm{IV}, \bar k \oplus \mathrm{opad})$ and $k_2 = f(\mathrm{IV}, \bar k \oplus \mathrm{ipad})$ derived from a single key $\bar k$ — [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]].
- [[prf-to-mac-bel06|Non-uniform PRF ⇒ MAC (NMAC)]]: NMAC is a PRF against non-uniform adversaries if $f$, keyed by its chaining input, is a PRF against non-uniform adversaries, with no collision-resistance assumption; HMAC is a PRF if in addition $f$, keyed through its data input, is a PRF under the two related keys $\bar k \oplus \mathrm{opad}$ and $\bar k \oplus \mathrm{ipad}$ — [[Bel06 - New Proofs for NMAC and HMAC Security without Collision-Resistance|Bel06]]. The same holds for uniform adversaries by a uniform reduction ([[prf-to-mac-gpr14|PRF ⇒ MAC (NMAC, uniform proof)]]) — [[GPR14 - The Exact PRF-Security of NMAC and HMAC|GPR14]].

<!-- BEGIN GENERATED participates-in 3a5f8604d5d2 -->

## Participates in

**Builds on Message authentication code**

- [[arbitrary-length-suf-cma-mac-to-suf-cma-mac|Arbitrary-length SUF-CMA MAC ⇒ SUF-CMA MAC]] (via [[message-authentication-code#strongly-unforgeable-macs-for-arbitrary-length-messages|Strongly unforgeable MACs for arbitrary-length messages]])
- [[cpa-security-and-suf-cma-mac-to-authenticated-encryption-bn00|CPA-secure SKE + arbitrary-length SUF-CMA MAC ⇒ AE (Encrypt-then-MAC)]] (via [[message-authentication-code#strongly-unforgeable-macs-for-arbitrary-length-messages|Strongly unforgeable MACs for arbitrary-length messages]])
- [[mac-and-ske-to-cca-security|Arbitrary-length SUF-CMA MAC + CPA-secure SKE ⇒ CCA-secure SKE]] (via [[message-authentication-code#strongly-unforgeable-macs-for-arbitrary-length-messages|Strongly unforgeable MACs for arbitrary-length messages]])
- [[suf-cma-mac-to-mac|SUF-CMA MAC ⇒ MAC]] (via [[message-authentication-code#strong-unforgeability|Strong unforgeability]])

**Produces Message authentication code**

- [[arbitrary-length-suf-cma-mac-to-suf-cma-mac|Arbitrary-length SUF-CMA MAC ⇒ SUF-CMA MAC]] (via [[message-authentication-code#strong-unforgeability|Strong unforgeability]])
- [[prf-to-mac|PRF ⇒ MAC]]
- [[prf-to-mac-bel06|Non-uniform compression-function PRF ⇒ MAC (NMAC)]]
- [[prf-to-mac-bkr94|PRF ⇒ MAC (CBC-MAC)]]
- [[prf-to-mac-gpr14|Compression-function PRF ⇒ MAC (NMAC, uniform proof)]]
- [[prf-to-nonce-based-mac|PRF ⇒ nonce-based MAC (Wegman–Carter)]] (via [[message-authentication-code#nonce-based-macs|Nonce-based MACs]])
- [[suf-cma-mac-to-mac|SUF-CMA MAC ⇒ MAC]]

<!-- END GENERATED participates-in -->
