---
type: primitive
status: draft
aliases:
  - SKE
  - SE
  - Symmetric key encryption
  - Symmetric encryption
  - Private-key encryption
title: Symmetric key encryption
id: ske
variants:
  cca-secure-symmetric-key-encryption: "#cca-security"
  cpa-security: "#cpa-security"
  ind-dollar-cpa-security: "#ind-cpa-security"
  ror-cpa-security: "#real-or-random-cpa-security"
  perfectly-secret-ske: "#perfect-secrecy"
  long-message-ske: "#messages-longer-than-the-key"
  one-time-cca-ske: "#one-time-cca-security"
---

# Symmetric key encryption

A **symmetric key encryption (SKE)** scheme allows a sender and receiver sharing a secret key to encrypt and decrypt messages. Its security notions specify what an adversary can learn about the message, allowing leakage of its length.

## Syntax

A SKE scheme is a tuple of efficient algorithms $\SKE = (\KeyGen, \Enc, \Dec)$ with respect to keyspace $\calK,$ message space $\calM,$ and ciphertext space $\calC$:

- $\KeyGen(1^\secpar) \to k,$ is a randomized algorithm which
  samples a key $k \in \calK$,
- $\Enc(k, m) \to c,$ is a randomized algorithm which takes a
  key $k \in \calK$ and message $m \in \calM$, outputting a ciphertext
  $c \in \calC$,
- $\Dec(k, c) \to m,$ is a deterministic algorithm which
  takes a key $k \in \calK$ and ciphertext $c \in \calC$,
  outputting a message $m \in \calM$ or $\bot$ to indicate an invalid ciphertext.

Every SKE scheme on this page is $(1-\varepsilon)$-[[#Correctness|correct]] for a negligible function $\varepsilon(\secpar)$, and for every $\secpar$ its message space $\calM = \calM_\secpar$ contains two distinct messages of equal length that an efficient algorithm outputs on input $1^\secpar$. Without correctness, the scheme with $\Enc(k, m)$ a fresh uniform bit and $\Dec(k, c) := \bot$ meets every notion here; without two such messages, so does the perfectly correct scheme that encrypts $m$ to a fresh uniform string of length $|m|$ and decrypts $c$ to the unique message of length $|c|$ — standard. A perfectly secret, CPA-secure, ROR-CPA-secure, IND\$-CPA-secure or CCA-secure SKE scheme denotes such a scheme with the property of that name.

As an object, SKE denotes such a scheme that is [[#One-time security|one-time secure]].

## Properties

### Correctness

A SKE scheme $\SKE = (\KeyGen, \Enc, \Dec)$ is
$(1-\varepsilon)$-**correct** if for all
$\secpar \in \NN$ and $m \in \calM$,

$$
\Pr\!\left[\Dec(k, \Enc(k, m)) = m\right] \ge 1 - \varepsilon,
$$

over the choice of $k \gets \KeyGen(1^\secpar)$ and randomness of $\Enc.$ When
$\varepsilon=0$, we say $\SKE$ is perfectly correct.

### CPA Security

In the **chosen-plaintext attack (CPA)** game, the adversary adaptively queries a left-right encryption oracle: it submits message pairs $(m_0, m_1)$ and receives an encryption of $m_b$, where $b$ is a single hidden bit shared by all queries. Each encryption uses fresh randomness. An **admissible** adversary submits $m_0,m_1 \in \calM$ with $|m_0|=|m_1|$ on every query; otherwise ciphertext length may reveal $b$. The adversary wins by guessing $b$ — standard.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{cpa}}_{\SKE,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\calO_0(m_0, m_1) := \Enc(k, m_0)$
\State $\calO_1(m_0, m_1) := \Enc(k, m_1)$
\Comment{Every query has $m_0,m_1 \in \calM$ and $|m_0|=|m_1|$}
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A SKE scheme $\SKE$ is **CPA-secure** if for all admissible efficient $\calA$,

$$
\Adv^{\mathrm{cpa}}_{\SKE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{cpa}}_{\SKE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

No SKE scheme whose $\Enc$ is deterministic, and stateless as in [[#Syntax]], is CPA-secure. Let $m_0 \ne m_1$ be the two equal-length messages of [[#Syntax]]. The adversary queries $(m_0, m_0)$, receiving $c_1$, then $(m_0, m_1)$, receiving $c_2$, and outputs $b' := [c_1 \ne c_2]$. If $b = 0$, then $c_2 = \Enc(k, m_0) = c_1$. If $b = 1$, then $c_1 = c_2$ only if $\Dec(k, \Enc(k, m_0)) \ne m_0$ or $\Dec(k, \Enc(k, m_1)) \ne m_1$, which has probability at most $2\varepsilon$ for a $(1-\varepsilon)$-correct scheme. Hence $\Pr[b' = b] \ge 1 - \varepsilon$, and the advantage is at least $1 - 2\varepsilon$ — standard. **Electronic codebook (ECB)** mode, which encrypts $m_1 \cdots m_\ell$ with each $m_i \in \bits^n$ to $\Eval(k, m_1) \cdots \Eval(k, m_\ell)$ under a [[pseudorandom-permutation|PRP]] on $\bits^n$, is such a scheme, and so is the [[#One-time pad|one-time pad]]. Randomized counter mode ([[prf-to-ske|PRF ⇒ CPA-secure SKE]]) and CBC with a uniform initialization vector ([[prp-to-cpa-security-bdjr97|PRP ⇒ CPA-secure SKE (CBC)]]) are CPA-secure when built from a PRF and a PRP respectively, while CBC with a counter as initialization vector, a stateful scheme, is not ([[no-prp-to-cpa-security-bdjr97|No fixed-construction reduction from PRP to CPA-secure SKE (CBC with a counter IV)]]).

### One-time security

The one-time game is the [[#CPA Security|CPA game]] $\Game^{\mathrm{cpa}}_{\SKE,\calA}(\secpar)$ played by an admissible $\calA$ that makes at most one query to $\calO_b$. A SKE scheme $\SKE$ is **one-time secure** if for all such efficient $\calA$, the CPA advantage $\Adv^{\mathrm{cpa}}_{\SKE,\calA}(\secpar)$ is negligible. The [[#One-time pad|one-time pad]] on $\calM_\secpar = \bits^\secpar$ is perfectly correct and [[#Perfect secrecy|perfectly secret]], hence one-time secure with advantage $0$ against every adversary ([[perfectly-secret-ske-to-ske|Perfectly secret SKE ⇒ SKE]]).

### Perfect secrecy

Perfect secrecy asks for one-time security with advantage exactly $0$ against every adversary, efficient or not. Write $\calM_{\secpar,\ell} := \calM_\secpar \cap \bits^\ell$ for the messages of length $\ell$, and let $K \gets \KeyGen(1^\secpar)$.

A SKE scheme $\SKE$ is **perfectly secret** if for all $\secpar \in \NN$ and all $m_0, m_1 \in \calM_\secpar$ with $|m_0| = |m_1|$, the random variables $\Enc(K, m_0)$ and $\Enc(K, m_1)$, over $K$ and the coins of $\Enc$, are identically distributed. Equivalently, every admissible $\calA$, efficient or not, that makes at most one query in the [[#CPA Security|CPA game]] has $\Adv^{\mathrm{cpa}}_{\SKE,\calA}(\secpar) = 0$. Under perfect secrecy the answer to the query has the same distribution for both values of $b$. Otherwise some admissible $m_0, m_1$ give distinct distributions, and the adversary that queries $(m_0, m_1)$ and outputs $0$ iff the answer lies in $\{c : \Pr[\Enc(K, m_0) = c] > \Pr[\Enc(K, m_1) = c]\}$ has advantage equal to their statistical distance, which is positive — standard.

**Shannon secrecy** is the equivalent a-posteriori form: for all $\secpar$ and $\ell$, every random variable $M$ on $\calM_{\secpar,\ell}$ independent of $K$, and $C \gets \Enc(K, M)$,

$$
\Pr[M = m \mid C = c] = \Pr[M = m] \quad \text{for all } m \in \calM_{\secpar,\ell} \text{ and all } c \text{ with } \Pr[C = c] > 0.
$$

TODO: attribute this definition to [[Sha49 - Communication Theory of Secrecy Systems|Sha49]] once the passage defining it is read.

The two notions are equivalent — standard. If $\SKE$ is perfectly secret, $p_c := \Pr[\Enc(K, m) = c]$ is the same for every $m \in \calM_{\secpar,\ell}$. As $M$ is independent of $K$, $\Pr[C = c \mid M = m] = p_c$ whenever $\Pr[M = m] > 0$, so $\Pr[C = c] = p_c$, and Bayes' rule gives $\Pr[M = m \mid C = c] = \Pr[M = m]$. Conversely, for distinct $m_0, m_1 \in \calM_{\secpar,\ell}$ let $M$ be uniform on $\{m_0, m_1\}$. Shannon secrecy and Bayes' rule give $\Pr[\Enc(K, m_i) = c] = \Pr[C = c]$ for $i \in \bits$ whenever $\Pr[C = c] > 0$, and both sides vanish otherwise, as $\Pr[C = c]$ is the average of $\Pr[\Enc(K, m_0) = c]$ and $\Pr[\Enc(K, m_1) = c]$. Shannon secrecy fixes the message length because, as in the CPA game, the ciphertext length may reveal it.

#### One-time pad

The **one-time pad** for message length $\ell = \ell(\secpar) \ge 1$ has $\calK_\secpar = \calM_\secpar = \calC_\secpar = \bits^\ell$; $\KeyGen(1^\secpar)$ outputs $k \getsr \bits^\ell$, $\Enc(k, m) := k \oplus m$ and $\Dec(k, c) := k \oplus c$. It is perfectly correct, as $k \oplus (k \oplus m) = m$, and perfectly secret: for every $m$, $k \mapsto k \oplus m$ is a bijection of $\bits^\ell$, so $\Enc(K, m)$ is uniform on $\bits^\ell$ — standard. Its $\Enc$ is deterministic, so it is not [[#CPA Security|CPA-secure]].

#### Shannon's bound

If $\SKE$ is perfectly correct and perfectly secret, then for all $\secpar$ and $\ell$, $\KeyGen(1^\secpar)$ outputs at least $|\calM_{\secpar,\ell}|$ keys with positive probability. Hence $|\calK_\secpar| \ge |\calM_{\secpar,\ell}|$, and with $\calK_\secpar \subseteq \bits^\kappa$ at most $2^\kappa$ messages of each length can be encrypted — standard.

TODO: attribute the bound to [[Sha49 - Communication Theory of Secrecy Systems|Sha49]] once the passage stating it is read.

Fix $m_0 \in \calM_{\secpar,\ell}$ and $c$ with $\Pr[\Enc(K, m_0) = c] > 0$. By perfect secrecy, $\Pr[\Enc(K, m) = c] > 0$ for every $m \in \calM_{\secpar,\ell}$, so some key $k_m$ that $\KeyGen(1^\secpar)$ outputs with positive probability has $\Pr[\Enc(k_m, m) = c] > 0$. Perfect correctness gives $\Dec(k_m, c) = m$, since otherwise decryption would fail with positive probability, and $\Dec$ is deterministic, so $m \mapsto k_m$ is injective. The one-time pad meets the bound with equality; [[#Messages longer than the key]] asks for one-time security in the regime where the bound rules out perfect secrecy.

### Real-or-random CPA security

In the **real-or-random (ROR) CPA** game, the adversary queries single messages $m$; in world 0 the oracle encrypts $m$, and in world 1 it encrypts a fresh uniform string of length $|m|$ in its place, under the same key — [[BDJR97 - A Concrete Security Treatment of Symmetric Encryption|BDJR97]]. The game needs that string to be a message, so the notion applies to schemes whose message space $\calM_\secpar$ contains, with each message $m$, all of $\bits^{|m|}$, as $\calM_\secpar = \bits^*$ and $\calM_\secpar = \bits^{\ell(\secpar)}$ do. An admissible adversary queries only messages in $\calM$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ror\text{-}cpa}}_{\SKE,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\calO_0(m) := \Enc(k, m)$
\State $\calO_1(m) := \Enc(k, r)$ for a fresh $r \getsr \bits^{|m|}$
\Comment{Each query has $m \in \calM$; fresh coins in both worlds}
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A SKE scheme $\SKE$ with such a message space is **ROR-CPA-secure** if for all admissible efficient $\calA$,

$$
\Adv^{\mathrm{ror\text{-}cpa}}_{\SKE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{ror\text{-}cpa}}_{\SKE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. For such schemes ROR-CPA security and CPA security are equivalent, with a factor $2$ from ROR to left-or-right ([[ror-cpa-security-to-cpa-security-bdjr97|ROR-CPA-secure SKE ⇒ CPA-secure SKE]]) and no loss in the other direction ([[cpa-security-to-ror-cpa-security-bdjr97|CPA-secure SKE ⇒ ROR-CPA-secure SKE]]) — [[BDJR97 - A Concrete Security Treatment of Symmetric Encryption|BDJR97]].

### IND\$-CPA Security

**Indistinguishability from random (IND\$-CPA)** is a stronger notion where the adversary must distinguish real encryptions from uniformly random strings of the same length. For each security parameter, assume an encryption of $m \in \calM$ always has length $\ell(\secpar, |m|)$, independent of the key and encryption coins. An admissible adversary queries only messages in $\calM$. The oracle in world 0 encrypts each query with fresh randomness; in world 1 it returns a fresh uniform string in $\bits^{\ell(\secpar, |m|)}$, which need not be a valid ciphertext — standard.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ind\$\text{-}cpa}}_{\SKE,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\calO_0(m) := \Enc(k, m)$
\State $\calO_1(m) \getsr \bits^{\ell(\secpar, |m|)}$
\Comment{Each query has $m \in \calM$; use fresh coins in both worlds}
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A SKE scheme $\SKE$ is **IND\$-CPA-secure** if for all admissible efficient $\calA$,

$$
\Adv^{\mathrm{ind\$\text{-}cpa}}_{\SKE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{ind\$\text{-}cpa}}_{\SKE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. IND\$-CPA implies CPA security ([[ind-dollar-cpa-security-to-cpa-security|IND\$-CPA Security ⇒ CPA Security]]), but not vice versa ([[no-cpa-security-to-ind-cpa-security|No fixed-construction reduction from CPA Security to IND\$-CPA Security]]) — standard.

### CCA Security

In the **chosen-ciphertext attack (CCA)** game, the adversary additionally has access to a decryption oracle. An _admissible_ adversary submits equal-length messages in $\calM$ on every encryption query and may not query $\calD$ on any ciphertext already output by the encryption oracle $\calO_b$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{cca}}_{\SKE,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\calO_b(m_0, m_1) := \Enc(k, m_b)$
\Comment{Every query has $m_0,m_1 \in \calM$ and $|m_0|=|m_1|$}
\State $\calD(c) := \Dec(k, c)$
\Comment{$\calA$ may not query $\calD$ on outputs of $\calO_b$}
\State $b' \gets \calA^{\calO_b, \calD}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A SKE scheme $\SKE$ is **CCA-secure** if for all admissible efficient $\calA$,

$$
\Adv^{\mathrm{cca}}_{\SKE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{cca}}_{\SKE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. The admissibility restriction is necessary: without it, $\calA$ could query $\calO_b(m_0, m_1)$ on two distinct equal-length messages $m_0, m_1 \in \calM$ and submit the answer to $\calD$, which returns $m_b$ except with probability $\varepsilon$. Restricted to a single encryption query, made before any decryption query, the game becomes [[#One-time CCA security|one-time CCA security]], the notion a KEM-DEM data encapsulation mechanism needs.

A scheme is **malleable** if for some efficiently computable function $f$ on messages, an efficient algorithm given only a ciphertext $c$ of an unknown message $m$ outputs a ciphertext $c' \ne c$ that decrypts to $f(m)$, except with negligible probability. Malleability with $f(m_0) \ne f(m_1)$ for two equal-length messages $m_0, m_1 \in \calM$ defeats CCA security: $\calA$ transforms the answer $c^*$ of its single query $\calO_b(m_0, m_1)$ into $c' \ne c^*$, an admissible query to $\calD$, and outputs $0$ iff the answer is $f(m_0)$, which gives advantage $1 - \negl(\secpar)$ — standard. Randomized counter mode is malleable, since flipping a bit of the masked part of a ciphertext flips the same bit of the message, so it is not CCA-secure although it is CPA-secure under a PRF ([[no-prf-to-cca-secure-symmetric-key-encryption|No fixed-construction reduction from PRF to CCA-secure SKE (randomized CTR)]]). Appending to every ciphertext a bit that $\Dec$ ignores makes any CPA-secure scheme malleable without affecting its CPA security, so a CPA-secure scheme need not be CCA-secure ([[no-cpa-security-to-cca-secure-symmetric-key-encryption|No fixed-construction reduction from CPA-secure SKE to CCA-secure SKE]]).

# Variations

## Messages longer than the key

A SKE scheme has **key length** $\kappa(\secpar)$ if $\calK_\secpar \subseteq \bits^{\kappa(\secpar)}$. A **one-time-secure SKE scheme for messages longer than the key** is a [[#One-time security|one-time-secure]] SKE scheme of some key length $\kappa$ whose message space contains every string of some length $\ell(\secpar) > \kappa(\secpar)$, that is, $\bits^{\ell(\secpar)} \subseteq \calM_\secpar$ for every $\secpar$. By [[#Shannon's bound]], no perfectly correct such scheme is perfectly secret. Two messages longer than the key would not suffice: for every $\ell \ge 2$, the keys $\calK_\secpar = \bits$, messages $\calM_\secpar = \{0^\ell, 1^\ell\}$, $\Enc(k, m) := m \oplus k^\ell$ and $\Dec(k, c) := c \oplus k^\ell$, where $k^\ell$ repeats the bit $k$, give a perfectly correct, perfectly secret scheme of key length $1$ — standard. If a [[pseudorandom-generator|PRG]] exists, the scheme $\Enc(k, m) := \PRG(k) \oplus m$ meets this notion ([[prg-to-long-message-ske|PRG ⇒ One-time SKE for messages longer than the key]]).

## One-time CCA security

In the **one-time CCA** game, $\calA$ submits a single pair $(m_0, m_1)$, receives $c^* \gets \Enc(k, m_b)$, and then queries the decryption oracle $\calD$ on any number of ciphertexts other than $c^*$; it has no oracle before the challenge. This is the security of the data encapsulation mechanism (DEM) of [[key-encapsulation-mechanism#kem-dem-hybrid-encryption|KEM-DEM hybrid encryption]], which encrypts one message under each fresh key. [[PSJS24 - CCA-Secure Hybrid Encryption in Correlated Randomness Model and KEM Combiners|PSJS24]] (Section III) restate the one-time symmetric-key encryption of the hybrid construction of [[CS03 - Design and Analysis of Practical Public-Key Encryption Schemes Secure against Adaptive Chosen Ciphertext Attack|CS03]] in this form: keys uniform on $\bits^{\ell(\secpar)}$, messages in $\bits^*$, and the IND-OTCCA game they take from [[HHK10 - Some (in)sufficient conditions for secure hybrid encryption|HHK10]], with no oracle before the challenge and a decryption oracle after it. An **admissible** adversary submits $m_0, m_1 \in \calM$ with $|m_0| = |m_1|$, since ciphertext length may reveal $b$, and does not query $\calD$ on $c^*$, which returns $m_b$ except with probability $\varepsilon$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ot\text{-}cca}}_{\SKE,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $(m_0, m_1, \stA) \gets \calA(1^\secpar)$
\Comment{$m_0,m_1 \in \calM$ and $|m_0|=|m_1|$; no oracle before the challenge}
\State $c^* \gets \Enc(k, m_b)$
\State $\calD(c) := \Dec(k, c)$
\State $b' \gets \calA^{\calD}(c^*, \stA)$
\Comment{$\calA$ may not query $\calD$ on $c^*$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A SKE scheme $\SKE$ is **one-time CCA-secure** if for all admissible efficient $\calA$,

$$
\Adv^{\mathrm{ot\text{-}cca}}_{\SKE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{ot\text{-}cca}}_{\SKE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. As an object, one-time CCA-secure SKE denotes a one-time CCA-secure scheme whose $\KeyGen(1^\secpar)$ outputs a uniform key $k \getsr \bits^{\ell(\secpar)}$, for a polynomial-time computable $\ell$, so that a prefix of the uniform key of a [[key-encapsulation-mechanism|KEM]] can key it; its message space is any one allowed by [[#Syntax]]. Running $\KeyGen$ on the key as its coins turns a [[#CCA Security|CCA-secure]] scheme into one ([[cca-secure-symmetric-key-encryption-to-one-time-cca-ske|CCA-secure SKE ⇒ One-time CCA-secure SKE]]) — folklore. With an IND-CCA KEM such a scheme gives IND-CCA PKE ([[kem-and-ske-to-pke|IND-CCA KEM + one-time CCA-secure SKE ⇒ IND-CCA PKE]]) — [[CS03 - Design and Analysis of Practical Public-Key Encryption Schemes Secure against Adaptive Chosen Ciphertext Attack|CS03]]. Without decryption queries the game is the [[#One-time security|one-time]] game, so such a scheme is one-time secure ([[one-time-cca-ske-to-ske|One-time CCA-secure SKE ⇒ SKE]]) — folklore.

# Other results

- [[owf-to-prg-hill99|OWF ⇒ PRG]]
- [[prf-to-ske|PRF ⇒ CPA-secure SKE]]
- [[prp-to-cpa-security-bdjr97|PRP ⇒ CPA-secure SKE (CBC)]]
- [[ror-cpa-security-to-cpa-security-bdjr97|ROR-CPA-secure SKE ⇒ CPA-secure SKE]] and [[cpa-security-to-ror-cpa-security-bdjr97|CPA-secure SKE ⇒ ROR-CPA-secure SKE]]
- [[prg-to-long-message-ske|PRG ⇒ One-time SKE for messages longer than the key]]
- [[prf-to-mac|PRF ⇒ MAC]]
- [[mac-and-ske-to-cca-security|Arbitrary-length SUF-CMA MAC + CPA-secure SKE ⇒ CCA-secure SKE]]
- [[searchable-symmetric-encryption|Searchable symmetric encryption]]: an encrypted index that a server searches with keyword tokens, learning only a specified leakage function — [[SWP00 - Practical Techniques for Searches on Encrypted Data|SWP00]], [[CGKO06 - Searchable Symmetric Encryption Improved Definitions and Efficient Constructions|CGKO06]].
- [[order-preserving-encryption|Order-preserving and order-revealing encryption]]: deterministic encryption whose ciphertexts reveal the order of the plaintexts — [[BCLO09 - Order-Preserving Symmetric Encryption|BCLO09]], [[CLWW16 - Practical Order-Revealing Encryption with Limited Leakage|CLWW16]].

<!-- BEGIN GENERATED participates-in 1c6c504d2c68 -->

## Participates in

**Builds on Symmetric key encryption**

- [[cca-secure-symmetric-key-encryption-to-cpa-security|CCA-secure SKE ⇒ CPA-secure SKE]] (via [[symmetric-key-encryption#cca-security|CCA Security]])
- [[cca-secure-symmetric-key-encryption-to-one-time-cca-ske|CCA-secure SKE ⇒ One-time CCA-secure SKE]] (via [[symmetric-key-encryption#cca-security|CCA Security]])
- [[cpa-security-and-suf-cma-mac-to-authenticated-encryption-bn00|CPA-secure SKE + arbitrary-length SUF-CMA MAC ⇒ AE (Encrypt-then-MAC)]] (via [[symmetric-key-encryption#cpa-security|CPA Security]])
- [[cpa-security-to-ror-cpa-security-bdjr97|CPA-secure SKE ⇒ ROR-CPA-secure SKE]] (via [[symmetric-key-encryption#cpa-security|CPA Security]])
- [[cpa-security-to-ske|CPA-secure SKE ⇒ SKE]] (via [[symmetric-key-encryption#cpa-security|CPA Security]])
- [[ind-cpa-kem-and-ske-to-pke-cpa-security|IND-CPA KEM + SKE ⇒ IND-CPA PKE]]
- [IND\$-CPA Security ⇒ CPA Security](ind-dollar-cpa-security-to-cpa-security) (via [IND\$-CPA Security](symmetric-key-encryption#ind-cpa-security))
- [[kem-and-ske-to-pke|IND-CCA KEM + one-time CCA-secure SKE ⇒ IND-CCA PKE]] (via [[symmetric-key-encryption#one-time-cca-security|One-time CCA security]])
- [[mac-and-ske-to-cca-security|Arbitrary-length SUF-CMA MAC + CPA-secure SKE ⇒ CCA-secure SKE]] (via [[symmetric-key-encryption#cpa-security|CPA Security]])
- [[one-time-cca-ske-to-ske|One-time CCA-secure SKE ⇒ SKE]] (via [[symmetric-key-encryption#one-time-cca-security|One-time CCA security]])
- [[perfectly-secret-ske-to-ske|Perfectly secret SKE ⇒ SKE]] (via [[symmetric-key-encryption#perfect-secrecy|Perfect secrecy]])
- [[ror-cpa-security-to-cpa-security-bdjr97|ROR-CPA-secure SKE ⇒ CPA-secure SKE]] (via [[symmetric-key-encryption#real-or-random-cpa-security|Real-or-random CPA security]])
- [[ske-to-owf-il89|SKE ⇒ OWF]] (via [[symmetric-key-encryption#cpa-security|CPA Security]])

**Produces Symmetric key encryption**

- [[authenticated-encryption-to-cca-secure-symmetric-key-encryption-bn00|AE ⇒ CCA-secure SKE]] (via [[symmetric-key-encryption#cca-security|CCA Security]])
- [[cca-secure-symmetric-key-encryption-to-cpa-security|CCA-secure SKE ⇒ CPA-secure SKE]] (via [[symmetric-key-encryption#cpa-security|CPA Security]])
- [[cca-secure-symmetric-key-encryption-to-one-time-cca-ske|CCA-secure SKE ⇒ One-time CCA-secure SKE]] (via [[symmetric-key-encryption#one-time-cca-security|One-time CCA security]])
- [[cpa-security-to-ror-cpa-security-bdjr97|CPA-secure SKE ⇒ ROR-CPA-secure SKE]] (via [[symmetric-key-encryption#real-or-random-cpa-security|Real-or-random CPA security]])
- [[cpa-security-to-ske|CPA-secure SKE ⇒ SKE]]
- [IND\$-CPA Security ⇒ CPA Security](ind-dollar-cpa-security-to-cpa-security) (via [[symmetric-key-encryption#cpa-security|CPA Security]])
- [[mac-and-ske-to-cca-security|Arbitrary-length SUF-CMA MAC + CPA-secure SKE ⇒ CCA-secure SKE]] (via [[symmetric-key-encryption#cca-security|CCA Security]])
- [[one-time-cca-ske-to-ske|One-time CCA-secure SKE ⇒ SKE]]
- [[perfectly-secret-ske-to-ske|Perfectly secret SKE ⇒ SKE]]
- [[prc-to-ske-cg24|PRC ⇒ SKE]]
- [[prf-to-ske|PRF ⇒ CPA-secure SKE]] (via [[symmetric-key-encryption#cpa-security|CPA Security]])
- [[prg-to-long-message-ske|PRG ⇒ One-time SKE for messages longer than the key]] (via [[symmetric-key-encryption#messages-longer-than-the-key|Messages longer than the key]])
- [[prp-to-cpa-security-bdjr97|PRP ⇒ CPA-secure SKE (CBC)]] (via [[symmetric-key-encryption#cpa-security|CPA Security]])
- [[ror-cpa-security-to-cpa-security-bdjr97|ROR-CPA-secure SKE ⇒ CPA-secure SKE]] (via [[symmetric-key-encryption#cpa-security|CPA Security]])

**Barriers**

- [[no-cpa-security-to-cca-secure-symmetric-key-encryption|No fixed-construction reduction from CPA-secure SKE to CCA-secure SKE]] (via [[symmetric-key-encryption#cca-security|CCA Security]], [[symmetric-key-encryption#cpa-security|CPA Security]])
- [No fixed-construction reduction from CPA Security to IND\$-CPA Security](no-cpa-security-to-ind-cpa-security) (via [[symmetric-key-encryption#cpa-security|CPA Security]], [IND\$-CPA Security](symmetric-key-encryption#ind-cpa-security))
- [[no-cpa-security-to-secret-key-bit-circular-security-gkw17a|No fixed-construction reduction from CPA security to circular security of symmetric-key bit encryption]] (via [[symmetric-key-encryption#cpa-security|CPA Security]])
- [[no-prf-to-cca-secure-symmetric-key-encryption|No fixed-construction reduction from PRF to CCA-secure SKE (randomized CTR)]] (via [[symmetric-key-encryption#cca-security|CCA Security]])
- [[no-prp-to-cpa-security-bdjr97|No fixed-construction reduction from PRP to CPA-secure SKE (CBC with a counter IV)]] (via [[symmetric-key-encryption#cpa-security|CPA Security]]) — circumvented by [[prp-to-cpa-security-bdjr97|PRP ⇒ CPA-secure SKE (CBC)]]

<!-- END GENERATED participates-in -->
