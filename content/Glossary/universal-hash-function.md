---
type: glossary
status: draft
aliases:
  - UHF
  - Universal hash function
  - Universal hash functions
  - Universal hashing
  - Strongly universal hash function
  - Pairwise-independent hash function
  - AXU
  - Almost XOR-universal hash function
title: Universal hash function
id: universal-hash-function
---

# Universal hash function

A **universal hash function** is a family $\calH$ of functions $\calX \to \calY$ such that, for every pair of distinct inputs, a uniformly sampled $h \getsr \calH$ maps them to the same output with probability at most $1/|\calY|$. The variants below bound other statistics of the pair $(h(x), h(x'))$. All probabilities are over $h \getsr \calH$ alone; no computational assumption is involved.

## Universal

$\calH$ is **universal** if for all distinct $x, x' \in \calX$,

$$
\Pr\!\left[h(x) = h(x')\right] \le \frac{1}{|\calY|}
$$

— [[CW79 - Universal Classes of Hash Functions|CW79]], who call such a family universal$_2$.

## Strongly universal

$\calH$ is **strongly universal** (**pairwise independent**) if for all distinct $x, x' \in \calX$ and all $y, y' \in \calY$,

$$
\Pr\!\left[h(x) = y \wedge h(x') = y'\right] = \frac{1}{|\calY|^2}
$$

— [[WC81 - New Hash Functions and Their Use in Authentication and Set Equality|WC81]]. More generally, $\calH$ is strongly universal$_k$ ($k$-wise independent) if $(h(x_1), \ldots, h(x_k))$ is uniform on $\calY^k$ for all distinct $x_1, \ldots, x_k$ — [[WC81 - New Hash Functions and Their Use in Authentication and Set Equality|WC81]].

Summing over $y = y'$ shows that a strongly universal family is universal; when $|\calX| \ge 2$, summing over $y'$ shows that $h(x)$ is uniform on $\calY$ for each $x$ — standard.

## Almost universal

For $\varepsilon \ge 0$, $\calH$ is **$\varepsilon$-almost universal** ($\varepsilon$-AU) if for all distinct $x, x' \in \calX$,

$$
\Pr\!\left[h(x) = h(x')\right] \le \varepsilon
$$

— standard. A universal family is $1/|\calY|$-AU.

## Almost XOR-universal

For $\calY = \bits^n$, $\calH$ is **$\varepsilon$-almost XOR-universal** ($\varepsilon$-AXU) if for all distinct $x, x' \in \calX$ and all $c \in \bits^n$,

$$
\Pr\!\left[h(x) \oplus h(x') = c\right] \le \varepsilon
$$

— [[Kra94 - LFSR-based Hashing and Authentication|Kra94]], [[Rog95 - Bucket Hashing and its Application to Fast Message Authentication|Rog95]]. Over an abelian group $\calY$ with $h(x) - h(x')$ in place of $h(x) \oplus h(x')$, the notion is **$\varepsilon$-almost $\Delta$-universal** — standard. The case $c = 0$ shows that an $\varepsilon$-AXU family is $\varepsilon$-AU; summing over $c$ shows $\varepsilon \ge 2^{-n}$ when $|\calX| \ge 2$; a strongly universal family into $\bits^n$ is $2^{-n}$-AXU, since $h(x) \oplus h(x')$ is uniform — standard.

## Examples

**Modular affine maps.** For a prime $p$, $\calX \subseteq \ZZ_p$ and $\calY = \{0, \ldots, m-1\}$ with $m \le p$, the family $h_{a,b}(x) := ((ax + b) \bmod p) \bmod m$ with $a \in \ZZ_p \setminus \{0\}$ and $b \in \ZZ_p$ is universal — [[CW79 - Universal Classes of Hash Functions|CW79]].

**Affine maps over a field.** For a finite field $\FF$, the family $h_{a,b}(x) := ax + b$ with $(a, b) \getsr \FF^2$ is strongly universal $\FF \to \FF$: for $x \ne x'$, the map $(a, b) \mapsto (ax + b, ax' + b)$ is a bijection $\FF^2 \to \FF^2$. Polynomials of degree less than $k$ with uniform coefficients are $k$-wise independent in the same way — standard.

**Polynomial evaluation.** For a finite field $\FF$ and a fixed length $\ell$, the family $\calH = \{h_\kappa\}_{\kappa \in \FF}$ of functions $\FF^\ell \to \FF$,

$$
h_\kappa(m_1, \ldots, m_\ell) := \sum_{i=1}^{\ell} m_i \kappa^i,
$$

is $(\ell/|\FF|)$-almost $\Delta$-universal: for $m \ne m'$ and $c \in \FF$, $h_\kappa(m) - h_\kappa(m') - c$ is a nonzero polynomial in $\kappa$ of degree at most $\ell$, since its coefficient of $\kappa^i$ is $m_i - m'_i \ne 0$ for some $i \ge 1$, and so it has at most $\ell$ roots (see [[schwartz-zippel-lemma|Schwartz–Zippel lemma]]). Over $\FF = \FF_{2^n}$ it is $(\ell/2^n)$-AXU, and in particular $(\ell/2^n)$-AU — standard. The same formula on messages of varying length is not almost universal, since appending a zero block leaves $h_\kappa$ unchanged; such messages are first encoded injectively into $\FF^\ell$ — standard.

## Uses

Wegman–Carter [[message-authentication-code#one-time-macs|one-time MACs]] are built from these families — [[WC81 - New Hash Functions and Their Use in Authentication and Set Equality|WC81]]; so are [[message-authentication-code#nonce-based-macs|nonce-based]] Wegman–Carter MACs — standard. The [[strong-prp-to-strong-tweakable-block-cipher-lrw02|LRW2]] [[tweakable-block-cipher|tweakable block cipher]] uses an almost XOR-universal family — [[LRW02 - Tweakable Block Ciphers|LRW02]]. The [[leftover-hash-lemma|leftover hash lemma]] extracts nearly uniform bits with a universal family — [[ILL89 - Pseudo-random Generation from One-way Functions|ILL89]], [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]].

<!-- BEGIN GENERATED participates-in 0ef046f072e5 -->

## Participates in

**Used via Universal hash function**

- [[strong-prp-to-strong-tweakable-block-cipher-lrw02|Strong PRP ⇒ Strong TBC (LRW2)]]

<!-- END GENERATED participates-in -->
