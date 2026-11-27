---
type: primitive
status: draft
aliases:
  - PRP
  - sPRP
  - Pseudorandom permutation
  - Block cipher
title: Pseudorandom permutation
id: prp
variants:
  bit-string-prp: "#prps-on-bit-strings"
  small-domain-prp: "#small-domain-prps"
  strong-bit-string-prp: "#strong-prps-on-bit-strings"
  strong-pseudorandom-permutation: "#strong-security"
---

# Pseudorandom permutation

A **pseudorandom permutation (PRP)** is a keyed family of efficiently invertible permutations $\{\Eval(k, \cdot)\}_{k \in \calK}$ of a domain $\calD$ that no efficient adversary can distinguish from a uniformly random permutation of $\calD$ given oracle access to $\Eval(k, \cdot)$; a strong PRP remains indistinguishable when the adversary also has oracle access to the inverse.

## Syntax

A PRP is a triple of efficient algorithms $\PRP = (\KeyGen, \Eval, \Invert)$ with respect to keyspace $\calK$ and domain $\calD$:

- $\KeyGen(1^\secpar) \to k,$ is a randomized algorithm that samples a key $k \in \calK,$
- $\Eval(k, x) \to y,$ is a deterministic algorithm that takes a key $k \in \calK$ and input $x \in \calD$, outputting $y \in \calD,$
- $\Invert(k, y) \to x,$ is a deterministic algorithm that takes a key $k \in \calK$ and input $y \in \calD$, outputting $x \in \calD.$

For every key $k$, $\Eval(k, \cdot)$ is a bijection on $\calD$. The domain is a family $\calD = \{\calD_\secpar\}_{\secpar \in \NN}$ of finite sets of strings of length polynomial in $\secpar$, with an efficient uniform sampler and $|\calD_\secpar|$ superpolynomial in $\secpar$ ($1/|\calD_\secpar|$ is negligible); the standard instance is $\calD_\secpar = \bits^{n(\secpar)}$ with $n = \omega(\log \secpar)$ ([[#PRPs on bit strings|PRPs on bit strings]]). With $|\calD_\secpar|$ polynomial, as for $\calD_\secpar = \bits^{O(\log \secpar)}$, a key holding the table of a uniformly random permutation of $\calD_\secpar$ and of its inverse is strongly pseudorandom unconditionally — standard. Small domains are the [[#Small-domain PRPs|small-domain PRPs]] below.

A **block cipher** $E : \bits^\kappa \times \bits^n \to \bits^n$, a permutation $E(k, \cdot)$ of $\bits^n$ for every key $k$, is modelled as a [[#PRPs on bit strings|PRP on bit strings]] or a [[#Strong PRPs on bit strings|strong PRP on bit strings]] with $\KeyGen$ uniform on $\bits^\kappa$, $\Eval = E$ and $\Invert = E^{-1}$ — standard. Concrete-security treatments drop the asymptotics and measure a block cipher by the maximal PRP advantage of adversaries making at most $q$ queries in time $t$ — [[BKR00 - The Security of the Cipher Block Chaining Message Authentication Code|BKR00]].

## Properties

### Correctness

A PRP $\PRP$ is **correct** if for all $k \in \calK$ and $x \in \calD$,

$$
\Invert(k, \Eval(k, x)) = x.
$$

### Security

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{prp}}_{\PRP,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\pi \getsr \Perms(\calD)$
\Comment{Can be sampled lazily}
\State $\calO_0(x) := \Eval(k,x)$
\State $\calO_1(x) := \pi(x)$
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A PRP $\PRP$ is **pseudorandom** if for all efficient $\calA$,

$$
\Adv^{\mathrm{prp}}_{\PRP,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{prp}}_{\PRP,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

As an object, a PRP denotes a [[#Correctness|correct]] and pseudorandom scheme.

### Strong Security

In the **strong PRP (sPRP)** security game, the adversary additionally receives an inverse oracle. Assuming PRPs exist, this is a strictly stronger notion than standard PRP security ([[strong-security-to-prp|sPRP ⇒ PRP]]): the three-round Feistel network with independently keyed [[pseudorandom-function#length-preserving-prfs|length-preserving PRF]] round functions is a PRP ([[prf-to-prp-lr88|Length-preserving PRF ⇒ PRP on bit strings]]) but not a strong PRP ([[#Feistel networks|Feistel networks]]) — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sprp}}_{\PRP,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\pi \getsr \Perms(\calD)$
\Comment{Can be sampled lazily}
\State $\calO_0(x) := \Eval(k,x)$ ; $\calO_0^{-1}(y) := \Invert(k,y)$
\State $\calO_1(x) := \pi(x)$ ; $\calO_1^{-1}(y) := \pi^{-1}(y)$
\State $b' \gets \calA^{\calO_b,\calO_b^{-1}}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A PRP $\PRP$ is **strongly pseudorandom** if for all efficient $\calA$,

$$
\Adv^{\mathrm{sprp}}_{\PRP,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sprp}}_{\PRP,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

As an object, a strong PRP denotes a [[#Correctness|correct]] and strongly pseudorandom scheme.

# Variations

## PRPs on bit strings

A **PRP on bit strings** is a PRP $(\KeyGen, \Eval, \Invert)$ with domain $\calD_\secpar = \bits^{n(\secpar)}$ for a block length $n$ that is polynomially bounded, computable from $1^\secpar$ in polynomial time, and $\omega(\log \secpar)$; $\KeyGen$ is unconstrained. As an object, a PRP on bit strings denotes, for some such $n$, a [[#Correctness|correct]] PRP on $\bits^{n(\secpar)}$ that is pseudorandom in $\Game^{\mathrm{prp}}$. Every one is a PRP ([[bit-string-prp-to-prp|PRP on bit strings ⇒ PRP]]) — folklore — and its $(\KeyGen, \Eval)$ is a [[pseudorandom-function#length-preserving-prfs|length-preserving PRF]] on $\bits^n$, up to the birthday term $q(q-1)/2^{n+1}$ for $q$ queries ([[bit-string-prp-to-length-preserving-prf|PRP on bit strings ⇒ Length-preserving PRF]]) — [[BKR00 - The Security of the Cipher Block Chaining Message Authentication Code|BKR00]].

[[prp-to-cpa-security-bdjr97|CBC encryption]], [[prp-to-arbitrary-length-suf-cma-mac-br05|XCBC]] and the tweakable block ciphers [[prp-to-tweakable-block-cipher-lrw02|LRW1]] and [[strong-prp-to-strong-tweakable-block-cipher-lrw02|LRW2]] XOR message blocks, chaining values, keys, tweaks or hashed tweaks into the input of $\Eval$, so they need the group $(\bits^n, \oplus)$, which the domain of a PRP need not carry: for a PRP $E$ on $\bits^n$, the map $1x \mapsto 1\,E_k(x)$ is a PRP on $\{1x : x \in \bits^n\}$, and the XOR of two points of that domain begins with $0$ and lies outside it — standard. The block length is quantified existentially because the construction that produces the PRP fixes it: three Feistel rounds over a length-preserving PRF on $\bits^n$ give a PRP on $\bits^{2n}$, so only even lengths arise there ([[prf-to-prp-lr88|Length-preserving PRF ⇒ PRP on bit strings]]) — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]].

### Strong PRPs on bit strings

A **strong PRP on bit strings** is a PRP on bit strings that is strongly pseudorandom in $\Game^{\mathrm{sprp}}$. As an object, a strong PRP on bit strings denotes, for some block length $n$ as above, a [[#Correctness|correct]] PRP on $\bits^{n(\secpar)}$ that is [[#Strong Security|strongly pseudorandom]]. Every one is a PRP on bit strings ([[strong-bit-string-prp-to-bit-string-prp|Strong PRP on bit strings ⇒ PRP on bit strings]]) and a strong PRP ([[strong-bit-string-prp-to-strong-pseudorandom-permutation|Strong PRP on bit strings ⇒ Strong PRP]]) — folklore. Four Feistel rounds over a length-preserving PRF on $\bits^n$ give one on $\bits^{2n}$ ([[prf-to-strong-pseudorandom-permutation-lr88|Length-preserving PRF ⇒ Strong PRP on bit strings]]) — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]].

## Small-domain PRPs

A **small-domain PRP** is a pseudorandom keyed permutation family on a domain of polynomial, possibly constant, size whose keys do not grow with the domain. Fix a polynomial $\kappa$. For a domain size $N = N(\secpar)$, computable from $1^\secpar$ in polynomial time, with $2 \le N(\secpar) \le p(\secpar)$ for a polynomial $p$, a small-domain PRP on $\ZZ_N = \{0, \ldots, N-1\}$ is a triple $(\KeyGen, \Eval, \Invert)$ with the syntax of a PRP, except that its domain is $\calD_\secpar = \ZZ_{N(\secpar)}$ in place of a superpolynomial one, whose $\KeyGen(1^\secpar)$ samples $k \getsr \bits^{\kappa(\secpar)}$. It is secure if it is pseudorandom in $\Game^{\mathrm{prp}}$ on $\ZZ_{N(\secpar)}$, where an efficient $\calA$ may query every point of the domain. As an object, a small-domain PRP denotes a polynomial $\kappa$ such that for every such $N$ there is a correct small-domain PRP on $\ZZ_N$ with keys in $\bits^{\kappa(\secpar)}$ that is pseudorandom. A domain with an efficiently computable and invertible bijection to $\ZZ_N$ reduces to $\ZZ_N$ — standard.

The key-length bound carries the content: without it $\KeyGen$ could output the table of a uniformly random permutation of $\ZZ_N$, so $\kappa$ is fixed before $N$ — standard. Since $\calA$ can query all of $\ZZ_N$, pseudorandomness implies strong pseudorandomness here: a $\Game^{\mathrm{sprp}}$ adversary is simulated by one that first queries all $N$ points and answers inverse queries from the table, with the same advantage — standard. For the same reason neither the $O(q^2/|\calD|)$ switching-lemma term of [[prp-to-prf|PRP ⇒ PRF]] ([[IR89 - Limits on the provable consequences of one-way permutations|IR89]]) nor the $O(q^2/\sqrt{|\calD|})$ birthday term of the Feistel construction of [[prf-to-prp-lr88|Length-preserving PRF ⇒ PRP on bit strings]] ([[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]]) is negligible at $q = N$. The prefix cipher ranks $\Eval(k, 0), \ldots, \Eval(k, N-1)$ under a [[#PRPs on bit strings|PRP on bit strings]] to give a small-domain PRP with the same key ([[prp-to-small-domain-prp-br02|PRP on bit strings ⇒ Small-domain PRP (prefix cipher)]]) — [[BR02 - Ciphers with Arbitrary Finite Domains|BR02]].

## Tweakable PRPs

A [[tweakable-block-cipher|tweakable block cipher]] takes a public tweak $t$ as an extra input to $\Eval$ and $\Invert$, and is indistinguishable from an independent uniformly random permutation for each tweak — [[LRW02 - Tweakable Block Ciphers|LRW02]].

# Other results

- [[prf-to-prp-lr88|Length-preserving PRF ⇒ PRP on bit strings]]
- [[prp-to-prf|PRP ⇒ PRF]]
- **Even–Mansour.** In the [[ideal-cipher-model|random permutation model]], let $P$ be a uniformly random permutation of $\bits^n$ that every party, the adversary included, can query in both directions. The cipher $E_{k_1,k_2}(x) := k_2 \oplus P(x \oplus k_1)$ with $k_1, k_2 \getsr \bits^n$ is broken by every attack making $q$ queries to $E_{k_1,k_2}^{\pm 1}$ and $p$ queries to $P^{\pm 1}$ with probability at most $O(pq/2^n)$ — [[EM91 - A Construction of a Cipher From a Single Pseudorandom Permutation|EM91]]. The single-key variant $E_k(x) := k \oplus P(x \oplus k)$ has the same bound — [[DKS12 - Minimalism in Cryptography The Even-Mansour Scheme Revisited|DKS12]].
- The Even–Mansour bound is tight: with $D$ queries to the cipher and $T$ evaluations of $P$, the key is recovered once $DT \approx 2^n$, from chosen plaintexts ([[Dae91 - Limitations of the Even-Mansour Construction (Rump Session)|Dae91]]) and, by the slidex attack, from known plaintexts ([[DKS12 - Minimalism in Cryptography The Even-Mansour Scheme Revisited|DKS12]]).

## Feistel networks

For round functions $f_1, \ldots, f_r : \bits^n \to \bits^n$, the $r$-round Feistel network $\Psi[f_1, \ldots, f_r]$ maps $(L_0, R_0) \in \bits^n \times \bits^n$ to $(L_r, R_r)$, where

$$
(L_i, R_i) := \big(R_{i-1},\ L_{i-1} \oplus f_i(R_{i-1})\big), \qquad (L_{i-1}, R_{i-1}) = \big(R_i \oplus f_i(L_i),\ L_i\big),
$$

the second identity inverting round $i$, so $\Psi$ is a permutation of $\bits^{2n}$ computable in both directions with forward evaluations of the $f_i$ only, whatever the $f_i$ — standard. Take $f_i := \Eval(k_i, \cdot)$ for a [[pseudorandom-function#length-preserving-prfs|length-preserving PRF]] with domain and range $\bits^n$ and independent keys $k_i$. Each attack below works for every choice of round functions, with the stated advantage in $\Game^{\mathrm{prp}}$ or $\Game^{\mathrm{sprp}}$:

- One round is not a PRP: the left half of $\Psi[f_1](L, R)$ is $R$, which a uniform permutation of $\bits^{2n}$ matches with probability $2^{-n}$, so one query has advantage $1 - 2^{-n}$ — folklore.
- Two rounds are not a PRP: $\Psi[f_1, f_2](L, R)$ has left half $L \oplus f_1(R)$, so the answers to $(L, R)$ and $(L', R)$ with $L \ne L'$ have left halves XORing to $L \oplus L'$, which two distinct outputs of a uniform permutation do with probability $2^n/(2^{2n}-1)$; two queries have advantage $1 - 2^n/(2^{2n}-1)$ ([[no-prf-to-prp-two-round-feistel|two-round barrier]]) — folklore.
- Three rounds are a PRP ([[prf-to-prp-lr88|Length-preserving PRF ⇒ PRP on bit strings]]) — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]] — but not a strong PRP: two forward queries and one inverse query have advantage at least $1 - 2^{1-n}$ for $n \ge 2$ ([[no-prf-to-strong-pseudorandom-permutation-three-round-feistel|three-round barrier]]) — folklore.
- Four rounds are a strong PRP ([[prf-to-strong-pseudorandom-permutation-lr88|Length-preserving PRF ⇒ Strong PRP on bit strings]]) — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]].

## Multiple encryption

For a block cipher $E : \bits^\kappa \times \bits^n \to \bits^n$, double encryption $E_{k_2}(E_{k_1}(x))$ with independent keys has a $2\kappa$-bit key, but a meet-in-the-middle attack recovers it from $t$ known pairs $(x_j, y_j)$ with about $t \cdot 2^{\kappa+1}$ evaluations of $E$ and $2^\kappa$ table entries: tabulate $(E_{k_1}(x_1), \ldots, E_{k_1}(x_t))$ for every $k_1$, compute $(E^{-1}_{k_2}(y_1), \ldots, E^{-1}_{k_2}(y_t))$ for every $k_2$, and look it up. Each wrong key pair matches a known pair with probability about $2^{-n}$ when $E$ is an ideal cipher, so about $2^{2\kappa - tn}$ wrong pairs survive and $t > 2\kappa/n$ pairs isolate the key; three-key triple encryption $E_{k_3}(E_{k_2}(E_{k_1}(x)))$ falls to the same attack, tabulating the $k_1$ side and searching $(k_2, k_3)$ with $E^{-1}_{k_3}(y_j)$ computed once per $k_3$, with about $t \cdot 2^{2\kappa}$ evaluations, $2^\kappa$ table entries and $t > 3\kappa/n$ pairs. TODO: cite the meet-in-the-middle attacks on double and triple encryption (Diffie–Hellman, Computer 1977; Merkle–Hellman, CACM 1981) once the passages are read. The security of triple encryption in the ideal-cipher model is under [[ideal-cipher-model#results-in-the-model|results in the model]].

<!-- BEGIN GENERATED participates-in 8d9bbf360421 -->

## Participates in

**Builds on Pseudorandom permutation**

- [[bit-string-prp-to-length-preserving-prf|PRP on bit strings ⇒ Length-preserving PRF]] (via [[pseudorandom-permutation#prps-on-bit-strings|PRPs on bit strings]])
- [[bit-string-prp-to-prp|PRP on bit strings ⇒ PRP]] (via [[pseudorandom-permutation#prps-on-bit-strings|PRPs on bit strings]])
- [[bit-string-prp-to-tweakable-block-cipher-rog04a|PRP on bit strings ⇒ TBC (XE)]] (via [[pseudorandom-permutation#prps-on-bit-strings|PRPs on bit strings]])
- [[prp-to-arbitrary-length-suf-cma-mac-br05|PRP on bit strings ⇒ arbitrary-length SUF-CMA MAC (XCBC)]] (via [[pseudorandom-permutation#prps-on-bit-strings|PRPs on bit strings]])
- [[prp-to-cpa-security-bdjr97|PRP on bit strings ⇒ CPA-secure SKE (CBC)]] (via [[pseudorandom-permutation#prps-on-bit-strings|PRPs on bit strings]])
- [[prp-to-invertible-prf|PRP ⇒ iPRF (large domains)]]
- [[prp-to-prf|PRP ⇒ PRF]]
- [[prp-to-small-domain-prp-br02|PRP on bit strings ⇒ Small-domain PRP (prefix cipher)]] (via [[pseudorandom-permutation#prps-on-bit-strings|PRPs on bit strings]])
- [[prp-to-tweakable-block-cipher-lrw02|PRP on bit strings ⇒ TBC (LRW1)]] (via [[pseudorandom-permutation#prps-on-bit-strings|PRPs on bit strings]])
- [[strong-bit-string-prp-to-bit-string-prp|Strong PRP on bit strings ⇒ PRP on bit strings]] (via [[pseudorandom-permutation#strong-prps-on-bit-strings|Strong PRPs on bit strings]])
- [[strong-bit-string-prp-to-strong-pseudorandom-permutation|Strong PRP on bit strings ⇒ Strong PRP]] (via [[pseudorandom-permutation#strong-prps-on-bit-strings|Strong PRPs on bit strings]])
- [[strong-bit-string-prp-to-strong-tweakable-block-cipher-rog04a|Strong PRP on bit strings ⇒ Strong TBC (XEX)]] (via [[pseudorandom-permutation#strong-prps-on-bit-strings|Strong PRPs on bit strings]])
- [[strong-prp-to-strong-tweakable-block-cipher-lrw02|Strong PRP on bit strings ⇒ Strong TBC (LRW2)]] (via [[pseudorandom-permutation#strong-prps-on-bit-strings|Strong PRPs on bit strings]])
- [[strong-security-to-prp|sPRP ⇒ PRP]] (via [[pseudorandom-permutation#strong-security|Strong Security]])

**Produces Pseudorandom permutation**

- [[bit-string-prp-to-prp|PRP on bit strings ⇒ PRP]]
- [[prf-to-prp-lr88|Length-preserving PRF ⇒ PRP on bit strings]] (via [[pseudorandom-permutation#prps-on-bit-strings|PRPs on bit strings]])
- [[prf-to-strong-pseudorandom-permutation-lr88|Length-preserving PRF ⇒ Strong PRP on bit strings]] (via [[pseudorandom-permutation#strong-prps-on-bit-strings|Strong PRPs on bit strings]])
- [[prp-to-small-domain-prp-br02|PRP on bit strings ⇒ Small-domain PRP (prefix cipher)]] (via [[pseudorandom-permutation#small-domain-prps|Small-domain PRPs]])
- [[strong-bit-string-prp-to-bit-string-prp|Strong PRP on bit strings ⇒ PRP on bit strings]] (via [[pseudorandom-permutation#prps-on-bit-strings|PRPs on bit strings]])
- [[strong-bit-string-prp-to-strong-pseudorandom-permutation|Strong PRP on bit strings ⇒ Strong PRP]] (via [[pseudorandom-permutation#strong-security|Strong Security]])
- [[strong-security-to-prp|sPRP ⇒ PRP]]

**Barriers**

- [[no-prf-to-prp-two-round-feistel|No fixed-construction reduction from length-preserving PRF to PRP on bit strings (two-round Feistel)]] (via [[pseudorandom-permutation#prps-on-bit-strings|PRPs on bit strings]]) — circumvented by [[prf-to-prp-lr88|Length-preserving PRF ⇒ PRP on bit strings]]
- [[no-prf-to-strong-pseudorandom-permutation-three-round-feistel|No fixed-construction reduction from length-preserving PRF to Strong PRP on bit strings (three-round Feistel)]] (via [[pseudorandom-permutation#strong-prps-on-bit-strings|Strong PRPs on bit strings]]) — circumvented by [[prf-to-strong-pseudorandom-permutation-lr88|Length-preserving PRF ⇒ Strong PRP on bit strings]]
- [[no-prp-to-cpa-security-bdjr97|No fixed-construction reduction from PRP on bit strings to CPA-secure SKE (CBC with a counter IV)]] (via [[pseudorandom-permutation#prps-on-bit-strings|PRPs on bit strings]]) — circumvented by [[prp-to-cpa-security-bdjr97|PRP on bit strings ⇒ CPA-secure SKE (CBC)]]

<!-- END GENERATED participates-in -->
