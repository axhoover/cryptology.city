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
  fixed-length-suf-cma-mac: "#strongly-unforgeable-macs-for-fixed-length-messages"
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

Unless a section says otherwise, the message space is a family $\calM = \{\calM_\secpar\}_{\secpar \in \NN}$ of sets of strings with $|\calM_\secpar|$ superpolynomial in $\secpar$, each containing a message that an efficient algorithm outputs on input $1^\secpar$; the standard instances are $\calM_\secpar = \bits^{n(\secpar)}$ with $n = \omega(\log \secpar)$ and $\calM = \bits^*$. The size condition excludes a trivial instance: with $|\calM_\secpar|$ polynomial in $\secpar$, a key that is a table of independent uniform tags in $\bits^\secpar$, one per message, with $\Tag(k, m)$ the entry for $m$ and canonical verification $\Vrfy(k, m, t) := [t = \Tag(k, m)]$, is UF-CMA-secure and SUF-CMA-secure unconditionally, since a forgery $(\hat m, \hat t)$ on an unqueried $\hat m$ matches an entry independent of $\calA$'s view with probability $2^{-\secpar}$, and canonical verification leaves no second valid tag on a queried message — standard. [[#One-time MACs|One-time MACs]] take any message space, [[#Strongly unforgeable MACs for fixed-length messages|MACs for fixed-length messages]] any one containing $\bits^{n(\secpar)}$, and [[#Nonce-based MACs|nonce-based MACs]] require a superpolynomial nonce space instead.

As an object, a MAC denotes a $(1-\negl)$-correct, [[#Unforgeability|UF-CMA-secure]] scheme, and a [[#Strong unforgeability|strongly unforgeable]] MAC a $(1-\negl)$-correct, SUF-CMA-secure one, each with such a message space.

## Properties

### Correctness

A MAC $\MAC = (\KeyGen, \Tag, \Vrfy)$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$ and $m \in \calM$,

$$
\Pr\!\left[\Vrfy(k, m, \Tag(k, m)) = 1\right] \ge 1 - \varepsilon,
$$

over the choice of $k \gets \KeyGen(1^\secpar)$ and the randomness of $\Tag$. When $\varepsilon = 0$, $\MAC$ is **perfectly correct**.

### Unforgeability

The following is the **unforgeability under chosen message attacks (UF-CMA)** game, also called **existential unforgeability under chosen message attacks (EUF-CMA)**. $\calA$ gets a tagging oracle $\calO$ and wins by outputting a valid tag on a message it never queried.

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

SUF-CMA security implies UF-CMA security with no loss ([[suf-cma-mac-to-mac|SUF-CMA MAC ⇒ MAC]]), and not conversely: appending to every tag a bit that $\Vrfy$ ignores preserves UF-CMA security, and flipping that bit in an oracle answer is a strong forgery ([[no-mac-to-suf-cma-mac|No fixed-construction reduction from MAC to SUF-CMA MAC]]) — folklore.

Both games allow $\calA$ one forgery attempt. In their variants with verification queries, $\calA$ also has an oracle $\calV(m, t) := \Vrfy(k, m, t)$, which it may query many times, and wins once it submits to $\calV$ a valid pair that meets the freshness condition of the game. Many verification queries are equivalent to one for strong unforgeability but not for UF-CMA, where a scheme secure against a single forgery attempt need not be secure against many — [[BGM04 - The Power of Verification Queries in Message Authentication and Authenticated Encryption|BGM04]].

# Variations

## Strongly unforgeable MACs for fixed-length messages

A MAC for **messages of length $n$**, for a length function $n = n(\secpar)$, has a message space that contains $\bits^{n(\secpar)}$ for every $\secpar$, with $\Tag$ and $\Vrfy$ running in time polynomial in $\secpar$ on such messages. As an object, a strongly unforgeable MAC for fixed-length messages denotes, for every $n$ with $1 \le n(\secpar) \le \poly(\secpar)$ that is computable from $1^\secpar$ in polynomial time, such a MAC that is $(1-\negl(\secpar))$-[[#Correctness|correct]] and [[#Strong unforgeability|SUF-CMA-secure]]. The length is quantified before the scheme, and over every polynomially bounded length computable in polynomial time, because a construction may fix it from another primitive: the hash-then-MAC form of NMAC tags digests whose length its hash family fixes ([[suf-cma-mac-and-weakly-collision-resistant-hash-to-arbitrary-length-suf-cma-mac-bck96|Fixed-length SUF-CMA MAC + arbitrary-length weakly collision-resistant hash ⇒ arbitrary-length SUF-CMA MAC (NMAC)]]). The size condition of [[#Syntax]] is not imposed: for $n(\secpar) = O(\log \secpar)$ the table MAC described there is such a MAC on $\bits^{n(\secpar)}$ unconditionally — standard. Taking $n(\secpar) := \secpar$ gives a message space of at least $2^\secpar$ messages, so such a MAC is a strongly unforgeable MAC ([[fixed-length-suf-cma-mac-to-suf-cma-mac|Fixed-length SUF-CMA MAC ⇒ SUF-CMA MAC]]) — folklore.

## Strongly unforgeable MACs for arbitrary-length messages

A MAC with message space $\calM = \bits^*$ that is $(1-\varepsilon)$-correct for a negligible function $\varepsilon(\secpar)$, with the bound holding for every $m \in \bits^*$, and [[#Strong unforgeability|SUF-CMA-secure]]; an efficient adversary queries and forges only on messages of polynomial length. It is a strongly unforgeable MAC ([[arbitrary-length-suf-cma-mac-to-suf-cma-mac|Arbitrary-length SUF-CMA MAC ⇒ SUF-CMA MAC]]), and one for messages of every fixed length ([[arbitrary-length-suf-cma-mac-to-fixed-length-suf-cma-mac|Arbitrary-length SUF-CMA MAC ⇒ fixed-length SUF-CMA MAC]]) — folklore. Composing it with an encryption scheme whose ciphertexts are bit strings needs no condition linking the two message spaces, which Encrypt-then-MAC requires ([[cpa-security-and-suf-cma-mac-to-authenticated-encryption-bn00|CPA-secure SKE + arbitrary-length SUF-CMA MAC ⇒ AE (Encrypt-then-MAC)]]): a MAC on $\bits^{n(\secpar)}$, such as the one a length-preserving PRF on that domain gives ([[prf-to-mac|Length-preserving PRF ⇒ MAC]]), tags no ciphertext of another length.

Plain CBC-MAC on messages of varying length is forgeable after one query ([[no-prf-to-arbitrary-length-suf-cma-mac|No fixed-construction reduction from length-preserving PRF to arbitrary-length SUF-CMA MAC (plain CBC-MAC)]]) — folklore. Applying the PRF under a second key to its output, or under a third key after $10^j$ padding of a message whose length is not a positive multiple of the block length $n$, gives ECBC, an arbitrary-length SUF-CMA MAC from a [[pseudorandom-function#length-preserving-prfs|length-preserving PRF]] on $\bits^n$ ([[prf-to-arbitrary-length-suf-cma-mac-br05|Length-preserving PRF ⇒ arbitrary-length SUF-CMA MAC (ECBC)]]). XORing into the last block one of two $n$-bit keys, chosen by whether the message was padded, gives XCBC, one from a [[pseudorandom-permutation#prps-on-bit-strings|PRP on bit strings]], with domain $\bits^n$, under a single block-cipher key ([[prp-to-arbitrary-length-suf-cma-mac-br05|PRP on bit strings ⇒ arbitrary-length SUF-CMA MAC (XCBC)]]) — [[BR05 - CBC MACs for Arbitrary-Length Messages The Three-Key Constructions|BR05]]. OMAC is XCBC under a block cipher $E_k$ with the two further keys derived as $2 E_k(0^n)$ and $4 E_k(0^n)$, products in $\FF_{2^n}$ — [[BR05 - CBC MACs for Arbitrary-Length Messages The Three-Key Constructions|BR05]]; it needs only the block-cipher key, where XCBC needs two further $n$-bit keys, and is proved secure for messages of arbitrary length — [[IK03 - OMAC One-Key CBC MAC|IK03]].

TODO: add a reduction page for OMAC (CMAC) once IK03's theorem, its PRP hypothesis and its bound are read.

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

- [[prf-to-mac|Length-preserving PRF ⇒ MAC]], and [[prf-to-mac-bkr94|Length-preserving PRF ⇒ MAC (CBC-MAC)]] on messages of a fixed number of blocks.
- [[prf-to-arbitrary-length-suf-cma-mac-br05|Length-preserving PRF ⇒ arbitrary-length SUF-CMA MAC (ECBC)]] and [[prp-to-arbitrary-length-suf-cma-mac-br05|PRP on bit strings ⇒ arbitrary-length SUF-CMA MAC (XCBC)]].
- [[prf-to-nonce-based-mac|Length-preserving PRF ⇒ nonce-based MAC (Wegman–Carter)]].
- [[mac-and-ske-to-cca-security|Arbitrary-length SUF-CMA MAC + CPA-secure SKE ⇒ CCA-secure SKE]] (encrypt-then-MAC).
- [[no-crhf-to-mac-secret-prefix|No fixed-construction reduction from CRHF to MAC (secret-prefix MAC)]]: the secret-prefix MAC $\hash(K \,\|\, x)$ over a Merkle–Damgård hash $\hash$ is forged after one query by length extension, whatever the compression function — folklore.
- **NMAC and HMAC.** For a compression function $f : \bits^c \times \bits^b \to \bits^c$ with $c \le b$, let $F_k(m_1 \cdots m_\ell) := y_\ell$, with $y_0 := k$ and $y_i := f(y_{i-1}, m_i)$, be its iteration keyed by the initial chaining value, applied to $m \,\|\, \mathrm{pad}(m)$, the message padded to whole $b$-bit blocks and followed by a block encoding $|m|$ (as in [[hash-function#merkledamgård-iteration|Merkle–Damgård strengthening]]) — [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]] (Section 3). NMAC has an outer key $k_1$ and an inner key $k_2$, and $\mathrm{NMAC}_{k_1,k_2}(m) := f(k_1, F_{k_2}(m) \,\|\, \mathrm{pad})$ for a fixed string $\mathrm{pad}$ of $b - c$ bits. Suppose no forger making $q$ queries in time $t$ breaks $f$, keyed by its chaining input, as a MAC on $b$-bit messages with probability more than $\varepsilon_f$, and $F$ is [[hash-function#weak-collision-resistance|weakly collision resistant]]: no adversary that sees $F_k$, for a hidden uniform key $k$, only through an oracle, and makes $q$ queries of at most $L$ bits in time $t$, outputs $m \ne m'$ with $F_k(m) = F_k(m')$ with probability more than $\varepsilon_F$. Then no forger making $q$ queries of at most $L$ bits in time $t$ breaks NMAC as a MAC with probability more than $\varepsilon_f + \varepsilon_F$ ([[suf-cma-mac-and-weakly-collision-resistant-hash-to-arbitrary-length-suf-cma-mac-bck96|Fixed-length SUF-CMA MAC + arbitrary-length weakly collision-resistant hash ⇒ arbitrary-length SUF-CMA MAC (NMAC)]]) — [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]] (Theorem 4.1). For the hash function $H := F_{\mathrm{IV}}$ with its fixed initial value, a key $\bar k$ padded with zeros to $b$ bits and two fixed $b$-bit constants $\mathrm{ipad} \ne \mathrm{opad}$, $\mathrm{HMAC}_{\bar k}(m) := H\big((\bar k \oplus \mathrm{opad}) \,\|\, H((\bar k \oplus \mathrm{ipad}) \,\|\, m)\big)$ is NMAC under the derived keys $k_1 = f(\mathrm{IV}, \bar k \oplus \mathrm{opad})$ and $k_2 = f(\mathrm{IV}, \bar k \oplus \mathrm{ipad})$, so the NMAC theorem covers HMAC if, in addition, $(k_1, k_2)$ is indistinguishable from a pair of independent uniform keys, a pseudorandomness assumption on $f$ keyed through its data input — [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]]. Weak collision resistance fails for MD5 and SHA-1 — [[Bel06 - New Proofs for NMAC and HMAC Security without Collision-Resistance|Bel06]].
- [[prf-to-mac-bel06|Non-uniform compression-function PRF ⇒ MAC (NMAC)]]: NMAC is a PRF against non-uniform adversaries if $f$, keyed by its chaining input, is a [[pseudorandom-function#non-uniform-compression-function-prfs|compression-function PRF against non-uniform adversaries]], with no collision-resistance assumption; HMAC is a PRF if in addition $f$, keyed through its data input, is a PRF under the two related keys $\bar k \oplus \mathrm{opad}$ and $\bar k \oplus \mathrm{ipad}$ — [[Bel06 - New Proofs for NMAC and HMAC Security without Collision-Resistance|Bel06]]. The same holds for uniform adversaries by a uniform reduction ([[prf-to-mac-gpr14|Compression-function PRF ⇒ MAC (NMAC, uniform proof)]]) — [[GPR14 - The Exact PRF-Security of NMAC and HMAC|GPR14]].

<!-- BEGIN GENERATED participates-in 99e0f494b858 -->

## Participates in

**Builds on Message authentication code**

- [[arbitrary-length-suf-cma-mac-to-fixed-length-suf-cma-mac|Arbitrary-length SUF-CMA MAC ⇒ fixed-length SUF-CMA MAC]] (via [[message-authentication-code#strongly-unforgeable-macs-for-arbitrary-length-messages|Strongly unforgeable MACs for arbitrary-length messages]])
- [[arbitrary-length-suf-cma-mac-to-suf-cma-mac|Arbitrary-length SUF-CMA MAC ⇒ SUF-CMA MAC]] (via [[message-authentication-code#strongly-unforgeable-macs-for-arbitrary-length-messages|Strongly unforgeable MACs for arbitrary-length messages]])
- [[cpa-security-and-suf-cma-mac-to-authenticated-encryption-bn00|CPA-secure SKE + arbitrary-length SUF-CMA MAC ⇒ AE (Encrypt-then-MAC)]] (via [[message-authentication-code#strongly-unforgeable-macs-for-arbitrary-length-messages|Strongly unforgeable MACs for arbitrary-length messages]])
- [[fixed-length-suf-cma-mac-to-suf-cma-mac|Fixed-length SUF-CMA MAC ⇒ SUF-CMA MAC]] (via [[message-authentication-code#strongly-unforgeable-macs-for-fixed-length-messages|Strongly unforgeable MACs for fixed-length messages]])
- [[mac-and-ske-to-cca-security|Arbitrary-length SUF-CMA MAC + CPA-secure SKE ⇒ CCA-secure SKE]] (via [[message-authentication-code#strongly-unforgeable-macs-for-arbitrary-length-messages|Strongly unforgeable MACs for arbitrary-length messages]])
- [[suf-cma-mac-and-weakly-collision-resistant-hash-to-arbitrary-length-suf-cma-mac-bck96|Fixed-length SUF-CMA MAC + arbitrary-length weakly collision-resistant hash ⇒ arbitrary-length SUF-CMA MAC (NMAC)]] (via [[message-authentication-code#strongly-unforgeable-macs-for-fixed-length-messages|Strongly unforgeable MACs for fixed-length messages]])
- [[suf-cma-mac-to-mac|SUF-CMA MAC ⇒ MAC]] (via [[message-authentication-code#strong-unforgeability|Strong unforgeability]])

**Produces Message authentication code**

- [[arbitrary-length-suf-cma-mac-to-fixed-length-suf-cma-mac|Arbitrary-length SUF-CMA MAC ⇒ fixed-length SUF-CMA MAC]] (via [[message-authentication-code#strongly-unforgeable-macs-for-fixed-length-messages|Strongly unforgeable MACs for fixed-length messages]])
- [[arbitrary-length-suf-cma-mac-to-suf-cma-mac|Arbitrary-length SUF-CMA MAC ⇒ SUF-CMA MAC]] (via [[message-authentication-code#strong-unforgeability|Strong unforgeability]])
- [[fixed-length-suf-cma-mac-to-suf-cma-mac|Fixed-length SUF-CMA MAC ⇒ SUF-CMA MAC]] (via [[message-authentication-code#strong-unforgeability|Strong unforgeability]])
- [[prf-to-arbitrary-length-suf-cma-mac-br05|Length-preserving PRF ⇒ arbitrary-length SUF-CMA MAC (ECBC)]] (via [[message-authentication-code#strongly-unforgeable-macs-for-arbitrary-length-messages|Strongly unforgeable MACs for arbitrary-length messages]])
- [[prf-to-mac|Length-preserving PRF ⇒ MAC]]
- [[prf-to-mac-bel06|Non-uniform compression-function PRF ⇒ MAC (NMAC)]]
- [[prf-to-mac-bkr94|Length-preserving PRF ⇒ MAC (CBC-MAC)]]
- [[prf-to-mac-gpr14|Compression-function PRF ⇒ MAC (NMAC, uniform proof)]]
- [[prf-to-nonce-based-mac|Length-preserving PRF ⇒ nonce-based MAC (Wegman–Carter)]] (via [[message-authentication-code#nonce-based-macs|Nonce-based MACs]])
- [[prp-to-arbitrary-length-suf-cma-mac-br05|PRP on bit strings ⇒ arbitrary-length SUF-CMA MAC (XCBC)]] (via [[message-authentication-code#strongly-unforgeable-macs-for-arbitrary-length-messages|Strongly unforgeable MACs for arbitrary-length messages]])
- [[suf-cma-mac-and-weakly-collision-resistant-hash-to-arbitrary-length-suf-cma-mac-bck96|Fixed-length SUF-CMA MAC + arbitrary-length weakly collision-resistant hash ⇒ arbitrary-length SUF-CMA MAC (NMAC)]] (via [[message-authentication-code#strongly-unforgeable-macs-for-arbitrary-length-messages|Strongly unforgeable MACs for arbitrary-length messages]])
- [[suf-cma-mac-to-mac|SUF-CMA MAC ⇒ MAC]]

**Barriers**

- [[no-crhf-to-mac-secret-prefix|No fixed-construction reduction from CRHF to MAC (secret-prefix MAC)]]
- [[no-mac-to-suf-cma-mac|No fixed-construction reduction from MAC to SUF-CMA MAC]]
- [[no-prf-to-arbitrary-length-suf-cma-mac|No fixed-construction reduction from length-preserving PRF to arbitrary-length SUF-CMA MAC (plain CBC-MAC)]] (via [[message-authentication-code#strongly-unforgeable-macs-for-arbitrary-length-messages|Strongly unforgeable MACs for arbitrary-length messages]]) — circumvented by [[prf-to-arbitrary-length-suf-cma-mac-br05|Length-preserving PRF ⇒ arbitrary-length SUF-CMA MAC (ECBC)]]

<!-- END GENERATED participates-in -->
