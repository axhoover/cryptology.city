---
type: primitive
status: draft
aliases:
  - TBC
  - Tweakable block cipher
  - Tweakable blockcipher
  - Tweakable PRP
title: Tweakable block cipher
id: tweakable-block-cipher
variants:
  strong-tweakable-block-cipher: "#strong-security"
---

# Tweakable block cipher

A **tweakable block cipher (TBC)** is a keyed family of permutations $\tilde E_k(t, \cdot)$ of a domain $\calD$, indexed by a public tweak $t \in \calT$ as well as the key, that no efficient adversary can distinguish from a family of independent uniformly random permutations, one per tweak, given oracle access to it — [[LRW02 - Tweakable Block Ciphers|LRW02]].

## Syntax

A TBC is a triple of efficient algorithms $\mathsf{TBC} = (\KeyGen, \Eval, \Invert)$ with respect to keyspace $\calK$, tweak space $\calT$, and domain $\calD$:

- $\KeyGen(1^\secpar) \to k,$ is a randomized algorithm that samples a key $k \in \calK,$
- $\Eval(k, t, x) \to y,$ is a deterministic algorithm that takes a key $k \in \calK$, a tweak $t \in \calT$ and an input $x \in \calD$, outputting $y \in \calD,$
- $\Invert(k, t, y) \to x,$ is a deterministic algorithm that takes a key $k \in \calK$, a tweak $t \in \calT$ and an input $y \in \calD$, outputting $x \in \calD.$

For every key $k$ and tweak $t$, $\Eval(k, t, \cdot)$ is a bijection on $\calD$. The domain is a family $\calD = \{\calD_\secpar\}_{\secpar \in \NN}$ subject to the conditions on the [[pseudorandom-permutation#syntax|domain of a PRP]]: finite sets of strings of length polynomial in $\secpar$, with an efficient uniform sampler and $|\calD_\secpar|$ superpolynomial in $\secpar$. The tweak space $\calT = \{\calT_\secpar\}_{\secpar \in \NN}$ is a family of nonempty sets of strings of length polynomial in $\secpar$, of any cardinality. The map $\tilde E : \calK \times \calT \times \calD \to \calD$, $\tilde E_k(t, x) := \Eval(k, t, x)$, is the usual notation. A [[pseudorandom-permutation|PRP]] is the case $|\calT| = 1$. The constructions under [[#Other results|Other results]] have $\calD_\secpar = \bits^{n(\secpar)}$ with $n = \omega(\log \secpar)$.

## Properties

### Correctness

A TBC $\mathsf{TBC}$ is **correct** if for all $k \in \calK$, $t \in \calT$ and $x \in \calD$,

$$
\Invert(k, t, \Eval(k, t, x)) = x.
$$

### Security

The ideal world samples an independent uniformly random permutation $\pi_t$ of $\calD$ for every tweak; $\calA$ chooses the tweak of each query.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{tprp}}_{\mathsf{TBC},\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\pi_t \getsr \Perms(\calD)$ independently for each $t \in \calT$
\Comment{Can be sampled lazily}
\State $\calO_0(t, x) := \Eval(k, t, x)$
\State $\calO_1(t, x) := \pi_t(x)$
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A TBC $\mathsf{TBC}$ is a **tweakable PRP** if for all efficient $\calA$,

$$
\Adv^{\mathrm{tprp}}_{\mathsf{TBC},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{tprp}}_{\mathsf{TBC},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[LRW02 - Tweakable Block Ciphers|LRW02]].

### Strong security

In the **strong tweakable PRP** game, $\calA$ additionally receives an inverse oracle, again with a tweak of its choice.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{tsprp}}_{\mathsf{TBC},\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\pi_t \getsr \Perms(\calD)$ independently for each $t \in \calT$
\Comment{Can be sampled lazily}
\State $\calO_0(t, x) := \Eval(k, t, x)$ ; $\calO_0^{-1}(t, y) := \Invert(k, t, y)$
\State $\calO_1(t, x) := \pi_t(x)$ ; $\calO_1^{-1}(t, y) := \pi_t^{-1}(y)$
\State $b' \gets \calA^{\calO_b,\calO_b^{-1}}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A TBC $\mathsf{TBC}$ is a **strong tweakable PRP** if for all efficient $\calA$,

$$
\Adv^{\mathrm{tsprp}}_{\mathsf{TBC},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{tsprp}}_{\mathsf{TBC},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[LRW02 - Tweakable Block Ciphers|LRW02]]. A strong tweakable PRP is a tweakable PRP ([[strong-tweakable-block-cipher-to-tweakable-block-cipher|Strong TBC ⇒ TBC]]); the [[prp-to-tweakable-block-cipher-lrw02|LRW1]] construction is a tweakable PRP whenever its block cipher is a [[pseudorandom-permutation#prps-on-bit-strings|PRP on bit strings]] with domain $\bits^n$, $n = \omega(\log \secpar)$, and four queries distinguish it from an ideal family once inverse queries are allowed — standard.

# Variations

## Tweakable enciphering schemes

A **tweakable enciphering scheme** has a domain $\calD$ of bit strings of several lengths, and each $\Eval(k, t, \cdot)$ is a length-preserving permutation of $\calD$. Its security is the strong game above with each $\pi_t$ a uniformly random length-preserving permutation of $\calD$ — [[HR03 - A Tweakable Enciphering Mode|HR03]].

# Other results

- [[prp-to-tweakable-block-cipher-lrw02|PRP on bit strings ⇒ TBC (LRW1)]]
- [[strong-prp-to-strong-tweakable-block-cipher-lrw02|Strong PRP on bit strings ⇒ Strong TBC (LRW2)]]
- [[bit-string-prp-to-tweakable-block-cipher-rog04a|PRP on bit strings ⇒ TBC (XE)]]
- [[strong-bit-string-prp-to-strong-tweakable-block-cipher-rog04a|Strong PRP on bit strings ⇒ Strong TBC (XEX)]]
- **XEX\*.** A tweakable block cipher is _tagged_ if $\calT = \bits \times \calT^*$. Its adversary has a forward and an inverse oracle and respects the tags: it makes no inverse query under a tweak $(0, T^*)$, and after a query under $(b, T^*)$ none under $(1 - b, T^*)$. XEX\* evaluates [[bit-string-prp-to-tweakable-block-cipher-rog04a|XE]] under the tweaks $(0, N, i)$ and [[strong-bit-string-prp-to-strong-tweakable-block-cipher-rog04a|XEX]] under the tweaks $(1, N, i)$, with one key and one offset $\Delta = \alpha^i E_k(N)$; under the hypotheses of XEX, a tag-respecting adversary distinguishes it from an ideal family with advantage at most the bound of XEX — [[Rog04a - Efficient Instantiations of Tweakable Blockciphers and Refinements to Modes OCB and PMAC|Rog04a]] (full version, Section 8 and Theorem 11). The restriction is necessary: the forward answers on $x$ under $(0, N, i)$ and under $(1, N, i)$ XOR to $\Delta$ for every $x$, whereas under an ideal family the answers on two inputs $x \ne x'$ have equal XORs with probability $1/(2^n - 1)$ — standard.
- **OCB2.** The authenticated-encryption mode that Rog04a builds on XEX\*, named OCB1 there, encrypts block $j < m$ of an $m$-block message with XEX under the tweak $(1, N, j, 0)$ and derives the pad of the last block with XE under $(0, N, m, 0)$; decryption inverts XEX on the blocks $j < m$ and derives the pad in the same way — [[Rog04a - Efficient Instantiations of Tweakable Blockciphers and Refinements to Modes OCB and PMAC|Rog04a]] (full version, Section 10). An encryption and a decryption under one nonce $N$ with different numbers of blocks therefore evaluate both tags on one $(N, j, 0)$, the XEX\* bound does not apply, and universal forgeries and full plaintext recovery follow — [[IIMP19 - Cryptanalysis of OCB2 Attacks on Authenticity and Confidentiality|IIMP19]].

<!-- BEGIN GENERATED participates-in 55954a9727b7 -->

## Participates in

**Builds on Tweakable block cipher**

- [[strong-tweakable-block-cipher-to-tweakable-block-cipher|Strong TBC ⇒ TBC]] (via [[tweakable-block-cipher#strong-security|Strong security]])

**Produces Tweakable block cipher**

- [[prp-to-tweakable-block-cipher-lrw02|PRP on bit strings ⇒ TBC (LRW1)]]
- [[strong-prp-to-strong-tweakable-block-cipher-lrw02|Strong PRP on bit strings ⇒ Strong TBC (LRW2)]] (via [[tweakable-block-cipher#strong-security|Strong security]])
- [[strong-tweakable-block-cipher-to-tweakable-block-cipher|Strong TBC ⇒ TBC]]

<!-- END GENERATED participates-in -->
