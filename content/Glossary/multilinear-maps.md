---
type: glossary
status: draft
aliases:
  - MMap
  - Multilinear maps
  - Multilinear map
  - Graded encoding
title: Multilinear maps
id: multilinear-maps
variants:
  decision-multilinear-no-exact-cover: "#decision-multilinear-no-exact-cover-assumption"
---

# Multilinear maps

A cryptographic $k$-multilinear map is an efficiently computable map $e : \GG^k \to \GG_T$ between groups of prime order $p$ that is linear in each argument and non-degenerate, and on which [[discrete-logarithm|discrete-logarithm]] and [[computational-diffie-hellman|Diffie–Hellman]] problems are conjectured hard — [[BS03 - Applications of Multilinear Forms to Cryptography|BS03]]. The case $k = 2$ is a [[pairings|bilinear pairing]]. The candidates for $k \ge 3$ are graded encodings, which only approximate this syntax: encodings are noisy and not unique, and equality is tested by a zero test at the top level — [[GGH13 - Candidate Multilinear Maps from Ideal Lattices|GGH13]].

## Syntax

A $k$-multilinear group generator $\GrGen(1^\secpar, 1^k)$ outputs $(\GG, \GG_T, p, g, e)$, where $\GG$ and $\GG_T$ are cyclic groups of prime order $p$, $g$ generates $\GG$, and $e : \GG^k \to \GG_T$ is an efficiently computable map that is **multilinear**, $e(g_1^{a_1}, \ldots, g_k^{a_k}) = e(g_1, \ldots, g_k)^{a_1 \cdots a_k}$ for all $g_1, \ldots, g_k \in \GG$ and $a_1, \ldots, a_k \in \ZZ_p$, and **non-degenerate**, $e(g, \ldots, g)$ generates $\GG_T$ — [[BS03 - Applications of Multilinear Forms to Cryptography|BS03]]. An **asymmetric** map $e : \GG_1 \times \cdots \times \GG_k \to \GG_T$ has $k$ source groups, each with its own generator — standard.

## Multilinear Diffie–Hellman

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{k\text{-}\mathrm{mddh}}_{\GrGen,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\GG, \GG_T, p, g, e) \gets \GrGen(1^\secpar, 1^k)$; $b \getsr \bits$
\State $a_1, \ldots, a_{k+1}, r \getsr \ZZ_p$
\State $T_0 \gets e(g, \ldots, g)^{a_1 \cdots a_{k+1}}$; $T_1 \gets e(g, \ldots, g)^{r}$
\State $b' \gets \calA(1^\secpar, \GG, \GG_T, p, g, e, g^{a_1}, \ldots, g^{a_{k+1}}, T_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

The **$k$-multilinear decisional Diffie–Hellman ($k$-MDDH) assumption** holds for $\GrGen$ if for all efficient $\calA$,

$$
\Adv^{k\text{-}\mathrm{mddh}}_{\GrGen,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{k\text{-}\mathrm{mddh}}_{\GrGen,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — standard. The target carries $k + 1$ exponents because $e(g^{a_1}, \ldots, g^{a_k})$ is computable from the input. The computational version, outputting $e(g, \ldots, g)^{a_1 \cdots a_{k+1}}$ from $g^{a_1}, \ldots, g^{a_{k+1}}$, is the multilinear Diffie–Hellman problem of [[BS03 - Applications of Multilinear Forms to Cryptography|BS03]].

A $k$-multilinear map lets $k + 1$ parties agree on a key in one round: party $i$ publishes $g^{a_i}$ and computes $e(g^{a_1}, \ldots, g^{a_{i-1}}, g^{a_{i+1}}, \ldots, g^{a_{k+1}})^{a_i} = e(g, \ldots, g)^{a_1 \cdots a_{k+1}}$ — [[BS03 - Applications of Multilinear Forms to Cryptography|BS03]]. For $k = 2$ this is the tripartite protocol of [[Jou04 - A One Round Protocol for Tripartite Diffie–Hellman|Jou04]]. Under $k$-MDDH the key is pseudorandom to an eavesdropper, so the protocol is a [[key-exchange#multiparty-non-interactive-key-exchange|multiparty NIKE]] — standard.

## Graded encodings

A $\kappa$-graded encoding scheme for a ring $R$ replaces group elements by encodings at levels $0, \ldots, \kappa$. Writing $S_i^{(\alpha)}$ for the set of level-$i$ encodings of $\alpha \in R$, it consists of the following efficient algorithms — [[GGH13 - Candidate Multilinear Maps from Ideal Lattices|GGH13]]:

- $\mathsf{InstGen}(1^\secpar, 1^\kappa) \to (\pp, p_{zt})$, outputting public parameters and a zero-test parameter,
- $\mathsf{samp}(\pp) \to u$, a level-$0$ encoding of a nearly uniform $\alpha \in R$,
- $\mathsf{enc}(\pp, i, u) \to u'$, mapping $u \in S_0^{(\alpha)}$ to a level-$i$ encoding $u' \in S_i^{(\alpha)}$,
- $\mathsf{add}$ and $\mathsf{neg}$ within a level, $S_i^{(\alpha)} \times S_i^{(\beta)} \to S_i^{(\alpha + \beta)}$ and $S_i^{(\alpha)} \to S_i^{(-\alpha)}$,
- $\mathsf{mult} : S_i^{(\alpha)} \times S_j^{(\beta)} \to S_{i+j}^{(\alpha\beta)}$ for $i + j \le \kappa$,
- $\mathsf{isZero}(\pp, p_{zt}, u)$, which for $u \in S_\kappa^{(\alpha)}$ outputs $1$ if and only if $\alpha = 0$,
- $\mathsf{ext}(\pp, p_{zt}, u)$, which for $u \in S_\kappa^{(\alpha)}$ outputs a string determined by $\alpha$ alone, nearly uniform when $\alpha$ is.

Encodings are randomized and carry noise that grows with each operation; the zero test is correct only while the noise stays below a bound fixed by $\mathsf{InstGen}$, and $\mathsf{ext}$ takes the place of a unique group element when a key is derived — [[GGH13 - Candidate Multilinear Maps from Ideal Lattices|GGH13]]. The **graded DDH** assumption of [[GGH13 - Candidate Multilinear Maps from Ideal Lattices|GGH13]] is the analogue of $\kappa$-MDDH: given level-$1$ encodings of uniform $\alpha_0, \ldots, \alpha_\kappa$, a level-$\kappa$ encoding of $\prod_{i=0}^{\kappa} \alpha_i$ is indistinguishable from a level-$\kappa$ encoding of a uniform element. In an asymmetric graded encoding the levels are subsets of a universe $[n]$, $\mathsf{mult}$ combines encodings at disjoint levels $S$ and $T$ into level $S \cup T$, and the zero test applies at level $[n]$ — standard.

### GGH13

Let $R = \ZZ[X]/(X^N + 1)$ for a power of two $N$ and $R_q = R / qR$, let $g \in R$ be a secret short element, and let $z \in R_q$ be secret and uniform. The plaintext ring is $R / \langle g \rangle$, and a level-$i$ encoding of a coset $\alpha + \langle g \rangle$ is $u = [c / z^i]_q$ for a short $c \in \alpha + \langle g \rangle$. With $p_{zt} = [h z^\kappa / g]_q$ for a somewhat short $h$, a level-$\kappa$ encoding $u$ encodes zero if and only if $[p_{zt} \cdot u]_q$ is short — [[GGH13 - Candidate Multilinear Maps from Ideal Lattices|GGH13]]. [[GGH13 - Candidate Multilinear Maps from Ideal Lattices|GGH13]] base security on problems in ideal lattices, which they view as extensions of the assumed hardness of [[ntru|NTRU]].

### CLT13

CLT13 is a graded encoding over the integers in the style of the DGHV [[homomorphic-encryption#fully-homomorphic-encryption-fhe|fully homomorphic encryption]] scheme. With secret primes $p_1, \ldots, p_\ell$, $x_0 = \prod_j p_j$, small secret integers $g_1, \ldots, g_\ell$ and a secret $z \in \ZZ_{x_0}$, a level-$i$ encoding of $(m_1, \ldots, m_\ell) \in \prod_j \ZZ_{g_j}$ is an integer $c$ with $c \equiv (r_j g_j + m_j) / z^i \pmod{p_j}$ for small $r_j$, and the zero test multiplies a level-$\kappa$ encoding by a public $p_{zt}$ and checks that the result is small modulo $x_0$ — [[CLT13 - Practical Multilinear Maps over the Integers|CLT13]].

# Variations

## Decision Multilinear No-Exact-Cover assumption

For a symmetric $n$-level multilinear map (graded encoding with integer levels $1, \ldots, n$), sample $a_1, \ldots, a_n \getsr \ZZ_p$. The **Decision Multilinear No-Exact-Cover assumption** holds if for every instance $(n, T_1, \ldots, T_\ell)$ of Exact Cover with no exact cover, no efficient adversary given the level-$|T_j|$ encodings of $\prod_{i \in T_j} a_i$ for all $j$ distinguishes the level-$n$ encoding of $\prod_{i=1}^{n} a_i$ from a level-$n$ encoding of a uniform element, except with negligible advantage — [[GGSW13 - Witness encryption and its applications|GGSW13]].

# Attacks

- **Zeroizing.** Given encodings of zero below level $\kappa$, an attacker multiplies them with other encodings up to level $\kappa$ and applies the zero test, whose output is an element of $R_q$ or of $\ZZ_{x_0}$ that depends on the secret parameters. [[GGH13 - Candidate Multilinear Maps from Ideal Lattices|GGH13]] describe attacks on the GGH13 analogues of the [[decisional-diffie-hellman#dlin|decision-linear]] and [[bilinear-map-assumptions#subgroup-decision|subgroup-membership]] problems of pairing-based cryptography. For CLT13, zeroizing is a total break, recovering in polynomial time every quantity meant to stay secret, whenever low-level encodings of zero are public, as in the multipartite key agreement; polynomial-time algorithms also solve the subgroup-membership, decision-linear and graded external Diffie–Hellman problems on CLT13 — [[CHLRS15 - Cryptanalysis of the Multilinear Map over the Integers|CHLRS15]].
- **GGH13 with public encoding.** When the tools for encoding are public, as in the GGH13 multipartite key agreement, efficient attacks break the key agreement and the graded DDH assumption it rests on. An instance of [[witness-encryption|witness encryption]] over GGH13 based on exact-3-cover is broken with public encoding tools, assuming that some two vectors are coprime, and with hidden encoding tools, under two assumptions; the authors consider these assumptions plausible — [[HJ16b - Cryptanalysis of GGH Map|HJ16b]].
- **Annihilation.** Annihilation attacks apply non-linear polynomials to the zero-test outputs of GGH13 and need no low-level encodings of zero. They give the first polynomial-time cryptanalysis of candidate [[indistinguishability-obfuscation|iO]] schemes over GGH13: there are two simple functionally equivalent programs whose obfuscations are efficiently distinguished — [[MSZ16 - Annihilation Attacks for Multilinear Maps Cryptanalysis of Indistinguishability Obfuscation over GGH13|MSZ16]].

# Other results

- [[BS03 - Applications of Multilinear Forms to Cryptography|BS03]] give applications of multilinear maps with hard discrete logarithms, explore directions for constructing them, and give reasons to believe that maps with $k > 2$ may be difficult to find.
- GGH13 is the first candidate graded encoding, with one-round multipartite key agreement under graded DDH as its application — [[GGH13 - Candidate Multilinear Maps from Ideal Lattices|GGH13]].
- Graded encodings give the first candidate [[indistinguishability-obfuscation|iO]] for all circuits, bootstrapped with [[homomorphic-encryption#leveled-fully-homomorphic-encryption|leveled FHE]] ([[mmap-to-io-gghrsw13|MMap + Leveled FHE ⇒ iO]]) — [[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]] — and the first [[witness-encryption|witness encryption]] for $\classNP$ ([[multilinear-maps-to-witness-encryption-ggsw13|Multilinear No-Exact-Cover ⇒ Witness encryption (GGSW)]]) — [[GGSW13 - Witness encryption and its applications|GGSW13]].
- In a generic multilinear-map model, a simplified branching-program obfuscator for $\mathrm{NC}^1$ is [[indistinguishability-obfuscation#virtual-black-box-obfuscation-vbb|virtual-black-box]] secure — [[BGKPS14 - Protecting Obfuscation against Algebraic Attacks|BGKPS14]].

<!-- BEGIN GENERATED participates-in 8b38eef43340 -->

## Participates in

**Builds on Multilinear maps**

- [[mmap-to-io-gghrsw13|MMap + Leveled FHE ⇒ iO]]
- [[multilinear-maps-to-witness-encryption-ggsw13|Multilinear No-Exact-Cover ⇒ Witness encryption (GGSW)]] (via [[multilinear-maps#decision-multilinear-no-exact-cover-assumption|Decision Multilinear No-Exact-Cover assumption]])

<!-- END GENERATED participates-in -->
